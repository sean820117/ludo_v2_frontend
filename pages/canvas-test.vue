<template>
    <div>
        <canvas id="canvas2"></canvas>
        <canvas id="canvas1"></canvas>
        <canvas id="canvas3"></canvas>
        
        <video id="myVideo" :width="vW" :height="vH" @timeupdate="playResult"></video>

        <br>
        <div>
            (x/30) * 10
        </div>
        <div class="frame">  
            <span id="currentFrame" style="color: green">0</span>
        </div>
        <button @click="playVideo" type="button">Play Video</button>
        <button @click="pauseVideo" type="button">Pause Video</button>
        </div>
</template>
<script>
export default {
    head:{
        script:[
            { id: 'VideoFrame' , src: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/VideoFrame.min.js'}
        ],
    },
    data:()=>({
        images:[],
        vid: '',
        vW: 960,
        vH: 540,
    }),
    mounted(){
        if(process.client){
            var canvasDrawPoints = this.canvasDrawPoints
            var canvasDrawSign = this.canvasDrawSign
            var canvasDrawTeachersHead = this.canvasDrawTeachersHead
            var clearTeacherHead = this.clearTeacherHead

            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/VideoFrame.min.js')
            document.head.appendChild(recaptchaScript)

            this.vid = document.getElementById('myVideo');
            this.vid.src = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course/L13_action03.mp4'
        
            let img_array = ['https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-teacher-remind-new.png']
            this.preload(img_array)

            this.readTextFile("https://ludo-beta.s3-ap-southeast-1.amazonaws.com/time_series.json", function(text) {
                var myData = JSON.parse(text);
                var curX, curY, curContent; // 用於檢測是否是同一個點，避免重複刷新
                var slice = 10;
                var currentFrame = document.getElementById("currentFrame");
                
                var video = VideoFrame({
                    id: 'myVideo',
                    frameRate: 30,
                    callback: function(frame) {
                        currentFrame.innerHTML = frame;
                        var sliced_frame = parseInt(frame / slice);

                        if (sliced_frame != 0 && sliced_frame < myData.length && !(frame % slice)) {
                            if (!(myData[sliced_frame]['points'] == "")) {
                                if (curX != myData[sliced_frame]['points'][0] && curY != myData[sliced_frame]['points'][1]) {
                                    canvasDrawPoints(myData[sliced_frame]['points']);
                                    curX = myData[sliced_frame]['points'][0];
                                    curY = myData[sliced_frame]['points'][1];
                                }
                                canvasDrawSign(myData, sliced_frame);

                                if (myData[sliced_frame]['big_content'] != "" && curContent != myData[sliced_frame]['big_content']) {
                                    // Teacher head
                                    canvasDrawTeachersHead(myData[sliced_frame]['border_color']);

                                    curContent = myData[sliced_frame]['big_content'];
                                } else if (myData[sliced_frame]['big_content'] == "") {
                                    clearTeacherHead();
                                }
                            }
                        } else {
                            // clean canvas
                        }
                    }
                });
                video.listen('frame');
                video.seekForward();
            })
        }
    }, 
    methods:{
        playResult(){
            // console.log(this.vid.currentTime)
            
        },
        preload(img){
            for(var i = 0;i < img.length; i++){
                this.images[i] = new Image()
                this.images[i].src = img[i]
            }
        },
        playVideo(){
            this.vid.play();
        },
        pauseVideo(){
            this.vid.pause();
        },
        readTextFile(file, callback){
            let rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        },
        initCanvas(id){
            let ctx = document.getElementById(id);
            ctx.width = this.vW;
            ctx.height = this.vH;

            return ctx;
        },
        canvasDrawPoints(d){
            let c1 = this.initCanvas('canvas1');
            let ctx = c1.getContext("2d");
            ctx.clearRect(0, 0, this.vW, this.vH);
            for (var i = 0; i < d.length / 2; i++) {
                let x = d[2 * i];
                let y = d[2 * i + 1];
                this.drawPoint(ctx, x, y, 10, 5, '#aaa8aa', '#858585', 1, 1);
            }
        },
        canvasDrawSign(myData, sliced_frame) {
            var c2 = this.initCanvas('canvas2');
            var ctx = c2.getContext("2d");
            
            var small_font_num = myData[0]["general_setting"]["small_font_num"];
            var big_font_num = myData[0]["general_setting"]["big_font_num"];

            // point position
            var x = myData[sliced_frame]['points'][0];
            var y = myData[sliced_frame]['points'][1];

            // small sign
            var smallW = myData[sliced_frame]['small_width'];
            var smallH = myData[sliced_frame]['small_height'];
            var sText = myData[sliced_frame]['small_content'];

            // big sign
            var bigW = myData[sliced_frame]['big_width'];
            var bigH = myData[sliced_frame]['big_height'];
            var bText = myData[sliced_frame]['big_content'];

            var border_color = myData[sliced_frame]['border_color'];
            var square_color = myData[sliced_frame]['square_color'];
            var reps = myData[sliced_frame]['reps'];

            ctx.clearRect(0, 0, this.vW, this.vH);

            //Point旁邊的sign
            this.drawSign(ctx, x + 40, y - 30, smallW, smallH, 15, 5, sText, small_font_num, border_color, square_color, 1, 1);

            if (reps == 0 || reps == undefined) {
                console.log("The value of reps is 0 or undefined");
            } else {
                // 組別sign
                this.drawSign(ctx, this.vW - 150 - 10, this.vH - 85 - 10, 150, 85, 15, 5, "第 " + reps + " 組", small_font_num, border_color, square_color, 1, 1);
                // 對話框sign
                var tHeadRadius = 30;
                this.drawBws(ctx, (tHeadRadius) + 20 + 20, (this.vH - bigH) - (tHeadRadius), bigW, bigH, 7, 5, bText, big_font_num, border_color, square_color, 1, 1);
            }
        },
        canvasDrawTeachersHead(border_color) {
            var c3 = this.initCanvas('canvas3');
            var ctx = c3.getContext("2d");
            ctx.clearRect(0, 0, this.vW, this.vH);
            var tHeadRadius = 30;
            this.drawTPoint(ctx, tHeadRadius / 2 + 10, this.vH - tHeadRadius / 2 - 10, tHeadRadius, 3, "#aaa8aa", 1, 1);
        },
        clearTeacherHead() {
            var c3 = this.initCanvas('canvas3');
            var ctx = c3.getContext("2d");
            //回復成上次儲存的樣子，再做clear的動作
            ctx.restore();
            ctx.clearRect(0, 0, this.vW, this.vH);
        },
        drawBws(ctx, x, y, w, h, r, border_width, text, font_num, border_color, square_color, scaleX, scaleY) {
            if (w == 0 || w == undefined || h == 0 || h == undefined) {
                console.log("The value of w and h is 0 or undefined");
            } else {
                // 比例縮放
                x = x * scaleX;
                y = y * scaleY;
                w = w * scaleX;
                h = h * scaleY;
                r = r * scaleX;
                border_width = border_width * scaleX;
                this.drawBorder(ctx, x, y, w, h, r + 2, border_width, border_color);

                // Bézier curve
                // border
                ctx.beginPath();
                ctx.moveTo(x, y + h * 1 / 2);
                ctx.quadraticCurveTo(x, y + h * 0.9, x - w / 12, y + h * 1.1);
                ctx.quadraticCurveTo(x, y + h * 1.1, x + w / 8, y + h * 0.8);
                ctx.fillStyle = border_color;
                ctx.fill();
                ctx.closePath();

                this.drawBoxes(ctx, x, y, w, h, r, square_color);
                this.drawFont(ctx, text, font_num, x, y, w, h, scaleX);
            }
        },
        drawTeacher(ctx, x, y, r, image) {
            var img = new Image();
            img.src = image;

            // 確保圖片已載入
            // img.onload = function() {
            var auto = r * img.height / img.width;
            ctx.beginPath();
            ctx.arc(x, y, r / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            //儲存clip之前的canvas，避免clip無法被clear不掉
            ctx.save();
            ctx.clip();

            ctx.drawImage(img, x - (r / 2), y - (auto / 2), r, auto);
            // }
        },
        drawTPoint(ctx, x, y, r, border_width, border_color, scaleX, scaleY) {
            // 比例縮放
            x = x * scaleX;
            y = y * scaleY;
            r = r * scaleX;

            // 繪製邊線
            ctx.lineWidth = border_width;
            ctx.strokeStyle = border_color;
            ctx.beginPath();
            ctx.arc(x, y, r / 2, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();

            // 繪製老師的頭像
            this.drawTeacher(ctx, x, y, r, "https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-teacher-remind-new.png");
        },
        drawPoint(ctx, x, y, r, border_width, border_color, square_color, scaleX, scaleY) {
            // 比例縮放
            x = x * scaleX;
            y = y * scaleY;
            r = r * scaleX;
            console.log("Point X: " + x);
            console.log("Point Y: " + y);

            // 繪製邊線
            ctx.beginPath();
            ctx.fillStyle = border_color;
            ctx.arc(x, y, r + (border_width / 2), 0, 2 * Math.PI);
            ctx.fill();

            // 繪製圓點
            ctx.beginPath();
            ctx.fillStyle = square_color;
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        },
        drawSign(ctx, x, y, w, h, r, border_width, text, font_num, border_color, square_color, scaleX, scaleY) {
            // 寬或高為0，則log
            if (w == 0 || w == undefined || h == 0 || h == undefined) {
                console.log("The value of w and h is 0 or undefined");
            } else {
                // 比例縮放
                x = x * scaleX;
                y = y * scaleY;
                w = w * scaleX;
                h = h * scaleY;
                r = r * scaleX;
                // 繪製邊線
                this.drawBorder(ctx, x, y, w, h, r + 5, border_width, border_color);
                // 繪製方形
                this.drawBoxes(ctx, x, y, w, h, r, square_color);
                // 繪製字
                this.drawFont(ctx, text, font_num, x, y, w, h, scaleX);
            }
        },
        drawFont(ctx, text, font_num, x, y, w, h, scaleX) {
            ctx.fillStyle = "white";
            var fontsize = 22 * scaleX;
            var num = 1;

            //insert '\n' to string if text length > font num
            if (text.length > font_num) {
                num = Math.ceil(text.length / font_num);
                for (var i = 0; i < num; i++) {
                    text = this.spliceText(text, font_num, 0, '\n');
                    font_num += font_num + 1;
                }
                ctx.textBaseline = "bottom";
            } else {
                ctx.textBaseline = "middle";
            }
            ctx.textAlign = "center";

            //fit text size with sign width
            while (ctx.measureText(text.split('\n')[0]).width > w) {
                fontsize--;
                ctx.font = fontsize + "pt NotoSansCJKtc-Light";
            }
            // while ((fontsize + 3) * num > h) {
            //     fontsize--;
            //     ctx.font = fontsize + "pt NotoSansCJKtc-Light";
            // }

            ctx.font = fontsize + "pt NotoSansCJKtc-Light";
            console.log("[Debug]Text: " + text);
            console.log("[Debug]Nuumber of nextline: " + num);
            console.log("[Debug]Text length: " + text.length);
            console.log("[Debug]Font size: " + fontsize);
            console.log("[Debug]Box width: " + w);
            console.log("[Debug]Box height: " + h);
            console.log("[Debug]Text width: " + ctx.measureText(text).width);
            // ctx.font = 22 * scaleX + "pt NotoSansCJKtc-Light";
            this.wrapText(ctx, text, x + (w / 2), y + (h / 2), w, fontsize + fontsize / 3);
        },
        drawBorder(ctx, xPos, yPos, width, height, r, border_width = 1, color) {
            this.drawBoxes(ctx, xPos - (border_width), yPos - (border_width), width + (border_width * 2), height + (border_width * 2), r, color);
        },
        drawBoxes(ctx, x, y, w, h, r, color) {
            ctx.beginPath()
            ctx.fillStyle = color;
            // upper-left的弧度
            ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5)

            // upper-right的弧度
            ctx.moveTo(x + r, y)
            ctx.lineTo(x + w - r, y)
            ctx.lineTo(x + w, y + r)
            ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2)

            // bottom-right的弧度
            ctx.lineTo(x + w, y + h - r)
            ctx.lineTo(x + w - r, y + h)
            ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5)

            // bottom-left的弧度
            ctx.lineTo(x + r, y + h)
            ctx.lineTo(x, y + h - r)
            ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI)

            // border-left的弧度
            ctx.lineTo(x, y + r)
            ctx.lineTo(x + r, y)

            ctx.fill()
            ctx.closePath()
        },
        wrapText(ctx,text, x, y, maxWidth, lineHeight){
            var lines = text.split("\n");

            for (var i = 0; i < lines.length; i++) {

                var words = lines[i].split(' ');
                var line = '';

                for (var n = 0; n < words.length; n++) {
                    var testLine = line + words[n] + ' ';
                    var metrics = ctx.measureText(testLine);
                    var testWidth = metrics.width;
                    if (testWidth > maxWidth && n > 0) {
                        ctx.fillText(line, x, y);
                        line = words[n] + ' ';
                        y += lineHeight;
                    } else {
                        line = testLine;
                    }
                }

                ctx.fillText(line, x, y);
                y += lineHeight;
            }
        },
        spliceText(text, idx, rem, str){
            return text.slice(0, idx) + str + text.slice(idx + Math.abs(rem));
        }
    },
    
}
</script>

<style>
canvas {
	position: absolute;
}

#canvas1 {
	z-index: 1
}

#canvas2 {
	z-index: 2
}
</style>