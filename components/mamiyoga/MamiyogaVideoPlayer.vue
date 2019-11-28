<template>
    <div id="player">
        <div id="videoBox" style="position: relative;" :style="{width: vidW , height: vidH}">
            <div :style="{display: showCanvas && haveTag ? 'flex':'none'}" id="canvas-container">
                <!-- <canvas id="canvas2"></canvas>
                <canvas id="canvas1"></canvas>
                <canvas id="canvas3"></canvas> -->
                <div id="tag-container" style="position: relative" :style="{width: realW + 'px', height: realH + 'px'}">
                    <div id="teacher-advice" style="display:none" :style="{borderColor: textBorder, backgroundColor: textBg, color: textColor }">{{advice}}</div>
                    <div id="teacher-pic" :style="{backgroundImage: `url('${teacherPic}')`}"></div>
                    <div id="pose-amount" :style="{borderColor: textBorder, backgroundColor: textBg, color: textColor }">{{`第${poseAmount}組`}}</div>
                </div>
            </div>
            <!-- <video id="myVideo" :src="vidResult" @timeupdate="videoProcess" @loadedmetadata="getDataTag(); preload(imgArray)"></video> -->
            <video id="myVideo" playsinline :src="vidResult" @timeupdate="videoProcess();" @loadedmetadata="showResultTag()"></video>
            <ul id="player-controls">
                <li style="transform: scale(.18)"><div class="play-vid-btn" @click="playVideo" :class="playingVideo ? '':'paused'"></div></li>
                <li style="width: 100%;">
                    <div id="progress" @click="goCurrentTime">
                        <div id="progress-bar"></div>
                    </div>
                </li>
                <li style="transform: scale(.2)">
                    <svg id="vol-btn" width="100" height="120" @click="mutedVideo">
                        <path d="M30,35 H20 Q5 35, 5 45,V65,Q5 80, 15 80 h15 L65 105,V10 L30 35" fill="#fff" stroke="none" stroke-width="5" />
                        <path d="M78,85 V30" stroke="#fff" stroke-width="9" v-if="!isMuted" />
                        <path d="M95,95 V20" stroke="#fff" stroke-width="9" v-if="!isMuted" />
                        <path d="M5,25 L80 90" stroke="#fff" stroke-width="10" class="muted-line" :class="isMuted ? 'show':''"/>
                    </svg>
                </li>
                <li style="transform: scale(.38)">
                    <svg id="prompt-btn" width="100" height="100" @click="showCanvas = !showCanvas">
                        <!-- <ellipse cx="55" cy="50" rx="30" ry="25" stroke="none" fill="#fff" /> -->
                        <rect x="25" y="25" rx="10" ry="10" width="60" height="40" stroke="none" fill="#fff"/>
                        <polygon points="35,63 30,73 50,63" stroke="none" fill="#fff"/>
                        <path d="M25,20 L85 75" stroke="#fff" stroke-width="8" class="muted-line" :class="showCanvas ? '':'show'" />
                    </svg>
                </li>
                <li style="transform: scale(.39)">
                    <svg @click="fullscreen" v-if="!isFullscreen" id="fullscreen-btn" width="100" height="100">
                        <path d="M45,25 H25 V45" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M45,75 H25 V55" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M55,25 H75 V45" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M55,75 H75 V55" stroke="#fff" stroke-width="8" fill="none" />
                    </svg>
                    <svg @click="closeFullscreen" v-if="isFullscreen" id="close-fullscreen-btn" width="100" height="100">
                        <path d="M40,25 V40 H25" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M40,75 V60 H25" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M60,25 V40 H75" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M60,75 V60 H75" stroke="#fff" stroke-width="8" fill="none" />
                    </svg>
                </li>
            </ul>
            <!-- <div v-if="!isLoaded" id="video-loading">
                <svg height="100" width="100">
                    <circle id="loading-circle" cx="50" cy="50" r="40" stroke="#707070" stroke-linecap="round" stroke-width="9" fill="none" />
                </svg>
            </div> -->
        </div>
<!--    <br>
        <div>
            (x/30) * 10
        </div>
            <div class="frame">  
                <span id="currentFrame" style="color: green">0</span>
            </div> -->
            <!-- <button @click="playVideo" type="button">Play Video</button>
            <button @click="pauseVideo" type="button">Pause Video</button> -->
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
        vW: '',
        vH: '',

        realW:'',
        realH:'',

        playingVideo: true,
        isMuted: false,
        isFullscreen: false,
        showCanvas: true,
        show_advice_timeout:{},
        advice: '',
        poseAmount: 0,
        textBorder: '#aaa8aa',
        textBg: '#858585',
        textColor: '#fff',

        data: [],
        haveTag: false,

        isLoaded: false,
    }),
    props:{
        vidResult: String,
        imgArray: Array,

        teacherPic: String,
        vidW: String,
        vidH: String,
    },
    async mounted(){
        if(process.client){
            // let recaptchaScript = document.createElement('script')
            // recaptchaScript.setAttribute('src', 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/VideoFrame.min.js')
            // document.head.appendChild(recaptchaScript)

            this.vid = document.getElementById('myVideo');
            // this.vid.src = this.vidResult

            this.vW = this.vid.offsetWidth
            this.vH = this.vid.offsetHeight  
            if(this.vW < 1366 || this.vW == 1366) {
                this.realW = this.vW
                this.realH = (this.realW / 16 * 9 )
            } else {
                this.realH = this.vH
                this.realW = 1366
            }
            // console.log(this.vW,this.vH)

            this.data = await require('~/config/test-player-data.json')
            console.log(this.data)

            window.onresize = function temp(){
                this.vW = this.vid.offsetWidth
                this.vH = this.vid.offsetHeight  
                if(this.vW < 1366 || this.vW == 1366) {
                    this.realW = this.vW
                    this.realH = (this.realW / 16 * 9 )
                } else {
                    this.realH = this.vH
                    this.realW = 1366
                }
            }.bind(this)

            this.vid.onloadeddata = function(){
                this.isLoaded = true
            }.bind(this)
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
            if(this.playingVideo){
                this.vid.play();
            } else {
                this.vid.pause();
                clearTimeout(this.show_advice_timeout);
            }
            this.playingVideo = !this.playingVideo
            
        },
        mutedVideo(){
            if(this.isMuted){
                this.vid.muted = false;
            } else {
                this.vid.muted = true;
            }
            this.isMuted = !this.isMuted
        },
        videoProcess(){
            // let bar_percentage = this.vid.currentTime / this.vid.duration
            let progress = document.getElementById('progress')
            let progressBar = document.getElementById('progress-bar')
            
            // progress.setAttribute('max', this.vid.duration);
            // this.vid.onloadedmetadata = function(){
            progress.value = this.vid.currentTime
            progressBar.style.width = Math.floor((this.vid.currentTime / this.vid.duration) * 100) + '%';
            progressBar.style.transitionDuration = `${(this.vid.duration) / 100 * 3}s`;
            console.log(this.vid.duration)
            // }
            // console.log(this.vid.currentTime)
        },
        goCurrentTime(e){
            let progress = document.getElementById('progress')
            let progressBar = document.getElementById('progress-bar')
            progressBar.classList.add('jump-current')
            let pos = (e.pageX  - progress.offsetLeft) / progress.offsetWidth;
            this.vid.currentTime = pos * this.vid.duration
            setTimeout(() => {
                progressBar.classList.remove('jump-current')
            }, 3000);
        },

        fullscreen(){
            let container = document.getElementById("tag-container")
            let doc = document.querySelector('#videoBox')
            let col = document.querySelector('#player-controls')
            let player = document.querySelector('#player')
            this.isFullscreen = true;
            let userAgent = navigator.userAgent;

            if(userAgent.toLocaleLowerCase().match(/safari/)){
                if (!/iPhone|iPad|iPod/i.test(userAgent)) {
                    doc.classList.add('main-on-safari-mac')
                    this.vW = this.vid.offsetWidth
                    this.vH = this.vid.offsetHeight
                    if(this.vW > this.vH) {
                        this.realH = this.vH
                        this.realW = (this.realH / 9 * 16 )
                    } else {
                        this.realW = this.vW
                        this.realH = (this.realW / 16 * 9)
                    }
                } else {
                    doc.classList.add('main-on-safari-phone')
                    col.classList.add('controls-on-safari-phone')
                    this.vid.classList.add('video-on-safari-phone')
                    player.classList.add('player-on-safari-phone')
                    this.vW = this.vid.offsetWidth
                    this.vH = this.vid.offsetHeight

                    if(this.vW > this.vH) {
                        this.realH = this.vH
                        this.realW = (this.realH / 9 * 16 )
                    } else {
                        this.realW = this.vW
                        this.realH = (this.realW / 16 * 9)
                    }
                    
                }
            } else{
                doc.querySelector('#videoBox').requestFullscreen();
                if(/Windows/i.test(userAgent)){
                    this.vW = window.innerWidth
                    this.vH = window.innerHeight

                    this.realW = this.vW
                    this.realH = (this.realW / 16 * 9 )
                    container.classList.add('fullscreen-desktop')
                }
                if(userAgent.match(/android/i)){
                    this.vW = window.innerWidth
                    this.vH = window.innerHeight

                    this.realH = this.vH
                    this.realW = this.vW
                    if(this.vW > this.vH){
                        container.classList.add('fullscreen-android')
                    }
                }
            }
            
        },
        closeFullscreen(){
            let container = document.getElementById("tag-container")
            let doc = document.querySelector('#videoBox')
            let col = document.querySelector('#player-controls')
            let player = document.querySelector('#player')
            let userAgent = navigator.userAgent;
            this.isFullscreen = false;
            if(userAgent.toLocaleLowerCase().match(/safari/)){
                doc.removeAttribute("class")
                col.removeAttribute("class")
                player.removeAttribute("class")
                this.vid.removeAttribute("class")
                this.vW = this.vid.offsetWidth
                this.vH = this.vid.offsetHeight  
                if(this.vW < 1366 || this.vW == 1366) {
                    this.realW = this.vW
                    this.realH = (this.realW / 16 * 9 )
                } else {
                    this.realH = this.vH
                    this.realW = 1366
                }
                // if (!/iPhone|iPad|iPod/i.test(userAgent)) {
                    
                // } else {

                // }
            } else if(userAgent.match("Firefox")){
                document.cancelFullScreen();
            } else {
                document.exitFullscreen();
            }
            container.removeAttribute("class");
        },
        showResultTag(){
            // let currentFrame = document.getElementById("currentFrame");
            let data = this.data
            let advice = document.getElementById("teacher-advice");
            let pic = document.getElementById("teacher-pic");
            // let poseAmount = this.poseAmount
            let slice = 10;
            let current_vid = this.vid
            var video = VideoFrame({
                id: 'myVideo',
                frameRate: 30,
                callback: function(frame) {
                    // currentFrame.innerHTML = frame;
                    let sliced_frame = parseInt(frame / slice);
                    data.forEach(element => {
                        if(element["frame"] == frame) {
                            console.log('true'+frame+element["action"])
                            if(element["action"] == "start_frame" || element["action"] == "next_reps"){
                                this.haveTag = true
                                console.log(this.poseAmount)
                                this.poseAmount = element["rep"]
                            }
                            if(element["action"] == "show_wrong_tags"){
                                current_vid.pause()
                                advice.style.display = 'block'
                                pic.style.display = 'block'
                                this.advice = element["wrong_tags"]
                                this.show_advice_timeout = setTimeout(() => {
                                    current_vid.play();
                                }, 5000);

                                this.poseAmount = element["rep"]
                            } else if (element["action"] == "show_correct_tags"){
                                advice.style.display = 'block'
                                pic.style.display = 'block'
                                this.advice = '姿勢正確'
                                this.poseAmount = element["rep"]
                            } else {
                                advice.style.display = 'none'
                                pic.style.display = 'none'
                               
                            }

                            // if(element["wrong_tags"] != null) {
                            //     advice.style.display = 'block'
                            //     this.advice = element["wrong_tags"]
                            // } else {
                            //     advice.style.display = 'none'
                            // }
                        }
                    });
                    
                }.bind(this)
            })
            video.listen('frame');
            video.seekForward();
        },
        getDataTag(){
            var canvasDrawPoints = this.canvasDrawPoints
            var canvasDrawSign = this.canvasDrawSign
            var canvasDrawTeachersHead = this.canvasDrawTeachersHead
            var clearTeacherHead = this.clearTeacherHead

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
                // if(sliced_frame != 0 && sliced_frame < myData.length && !(frame % slice)){
                //     if((sliced_frame.toString()) == myData[]['frame']) {
                //          
                //     }    
                // }
                video.listen('frame');
                video.seekForward();
            })
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
            this.vW = this.vid.offsetWidth
            this.vH = this.vid.offsetHeight  
            if(this.vW < 1366 || this.vW == 1366) {
                this.realW = this.vW
                this.realH = (this.realW / 16 * 9 )
                // alert('video width :' + this.realW +'video height :' + this.realH)
            } else {
                this.realH = this.vH
                this.realW = 1366
                // alert('video width :' + this.vW +'video height :' + this.vH)
            }
            ctx.width = this.realW ;
            ctx.height = this.realH;
            return ctx;
        },
        canvasDrawPoints(d){
            let c1 = this.initCanvas('canvas1');
            let ctx = c1.getContext("2d");
            ctx.clearRect(0, 0, this.realW, this.realH);
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
            // var smallW = myData[sliced_frame]['small_width'];
            // var smallH = myData[sliced_frame]['small_height'];
            var smallW = 130
            var smallH = 50
            var sText = myData[sliced_frame]['small_content'];

            // big sign
            // var bigW = myData[sliced_frame]['big_width'];
            // var bigH = myData[sliced_frame]['big_height'];
            var bigW = 200
            var bigH = 80
            var bText = myData[sliced_frame]['big_content'];

            var border_color = myData[sliced_frame]['border_color'];
            var square_color = myData[sliced_frame]['square_color'];
            var reps = myData[sliced_frame]['reps'];

            ctx.clearRect(0, 0, this.realW, this.realH);

            //Point旁邊的sign
            this.drawSign(ctx, x + 40, y - 30, smallW, smallH, 15, 5, sText, small_font_num, border_color, square_color, 1, 1);

            if (reps == 0 || reps == undefined) {
                console.log("The value of reps is 0 or undefined");
            } else {
                // 組別sign
                this.drawSign(ctx, this.realW - 80 - 10, this.realH - 50 - 10, 80, 50 , 15, 5, "第 " + reps + " 組", small_font_num, border_color, square_color, 1, 1);
                // 對話框sign
                var tHeadRadius = 30;
                this.drawBws(ctx, (tHeadRadius) + 20 + 20, (this.realH - bigH) - (tHeadRadius), bigW, bigH, 7, 5, bText, big_font_num, border_color, square_color, 1, 1);
            }
        },
        canvasDrawTeachersHead(border_color) {
            var c3 = this.initCanvas('canvas3');
            var ctx = c3.getContext("2d");
            ctx.clearRect(0, 0, this.realW, this.realH);
            var tHeadRadius = 30;
            this.drawTPoint(ctx, tHeadRadius / 2 + 10, this.realH - tHeadRadius / 2 - 10, tHeadRadius, 3, "#aaa8aa", 1, 1);
        },
        clearTeacherHead() {
            var c3 = this.initCanvas('canvas3');
            var ctx = c3.getContext("2d");
            //回復成上次儲存的樣子，再做clear的動作
            ctx.restore();
            ctx.clearRect(0, 0, this.realW, this.realH);
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
            var fontsize = 12 * scaleX;
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
                ctx.font = fontsize + "px NotoSansCJKtc-Light";
            }
            // while ((fontsize + 3) * num > h) {
            //     fontsize--;
            //     ctx.font = fontsize + "pt NotoSansCJKtc-Light";
            // }

            ctx.font = fontsize + "px NotoSansCJKtc-Light";
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
#myVideo::-webkit-media-controls {
  display:none !important;
}
#myVideo::-webkit-media-controls-enclosure {
  display:none !important;
}
#myVideo{
    background: #000;
    width: 100%;
    height: 100%;
}
#canvas-container {
    height: 100%;
    width: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
}
#canvas1 , #canvas2 , #canvas3 {
    z-index: 2147483647;
    width: 100%;
    max-height: 100vh;
    max-width: 1366px;
    position: absolute;
    /* bottom: 90px;
    left: 0; */
}
#videoBox {
    width: 100vw;
    height: 768px;
}
#player-controls {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 2147483647;
    bottom: 0px;
    width: 100%;
    justify-content: space-around;
    padding: 0 5px;
}
#player-controls li{
    list-style-type: none;
    cursor: pointer;
}
.play-vid-btn:hover {
    opacity: 1;
}
.play-vid-btn {
    /* transform: scale(.2); */
    width: 100px;
    height: 100px;
    position: relative;
    opacity: .8;
}
.play-vid-btn::before,.play-vid-btn::after {
    content: "";
    position: absolute;
    width: 0;
    border-style: solid;
    border-color: transparent;
    border-left-color: #fff;
    transition: .1s;
}
.play-vid-btn::before {
    left: 0;
    top: 0;
    height: 100px;
    border-width: 25px 50px 25px 50px;
}
.play-vid-btn::after {
    left: 50px;
    top: 25px;
    height: 0;
    border-width: 25px 0 25px 50px;
}
.play-vid-btn.paused:before {
  height: 100px;
  border-width: 0 0 0 33.3333333333px;
}
.play-vid-btn.paused:after {
  left: 66.6666666667px;
  top: 0;
  height: 100px;
  border-width: 0 0 0 33.3333333333px;
}
#vol-btn {
    /* transform: scale(.3); */
    opacity: .8;
}
#vol-btn:hover {
    opacity: 1;
}
.muted-line {
    opacity: 0;
}
.muted-line.show {
    opacity: 1;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 2s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
#progress {
    width: 100%;
    height: 5px;
    background: rgba(255,255,255,.5);
}
#progress-bar {
    background:#fff; 
    height: 100%;
    transition: width ease;
}
.jump-current{
    transition: unset !important;
}
#fullscreen-btn {
    opacity: .8;
    /* transform: scale(.4); */
}
#fullscreen-btn:hover, #close-fullscreen-btn:hover{
    opacity: 1;
}
#close-fullscreen-btn {
    opacity: .8;
    /* transform: scale(.5); */
}
#prompt-btn {
    /* transform: scale(.5); */
    opacity: .8;
}
#prompt-btn:hover{
    opacity: 1;
}
#teacher-advice,#pose-amount {
    padding:10px 20px;
    border: 5px solid;
    border-radius: 15px;
    font-size: 12px;
    position: absolute;
}
#teacher-pic {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 10px;
}
#teacher-advice {
    max-width: 200px; 
    bottom: 40px;
    left: 30px;
}
#pose-amount {
    bottom: 0;
    right: 0;
}
#teacher-advice::after{
    content: '';
    width:0px;
    height:0px;
    border-width:10px 12px 0 0px;
    border-style:solid;
    border-color:#aaa8aa transparent transparent transparent ;
    position:absolute;
    bottom:-15px;
    left:10px;
}
#video-loading{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#video-loading svg {
    animation: rotator 1.4s linear infinite;
}
@keyframes rotator {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
}
#loading-circle {
    opacity: .7;
    stroke-dasharray: 300;
    stroke-dashoffset: 0;
    animation: circleDash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
    transform-origin: center;
}
@keyframes circleDash {
    0% {
        stroke-dashoffset: 300;
    }
    50% {
        stroke-dashoffset: 140;
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 300;
        transform: rotate(450deg);
    }
}
.fullscreen-desktop{
    width: 100% !important;
}
.fullscreen-android{
    height: 100% !important;
}
.main-on-safari-mac {
    width: 100% !important;
    height: 100vh !important;
}
.main-on-safari-phone {
    width: 100vw !important;
    /* height: 100vh !important; */
    min-height: -webkit-fill-available !important;
}
.controls-on-safari-phone {
    width: 100% !important;
}
@media (max-width: 768px)  and (orientation: landscape) {
    .main-on-safari-phone {
        width: 100vw !important;
        height: 100vh !important;
        min-height: unset !important;
        max-height: -webkit-fill-available !important;
        /* overflow: hidden; */
        /* min-height: -webkit-fill-available !important; */
    }
}
/* .player-on-safari-phone {
    max-height: -webkit-fill-available;
    overflow: hidden;
    position: fixed;
    top:0;
    left:0;
} */
/* @media (max-width: 768px)  and (orientation: landscape) {
    .main-on-safari-phone {
        width: 100vw !important;        
        height: -webkit-fill-available !important;
        min-height: unset !important;  
    }
    .video-on-safari-phone {
        height: -webkit-fill-available !important;
        width: auto;
    }
    .player-on-safari-phone {
        min-height: -webkit-fill-available;
        overflow: hidden;
        position: fixed;
        top:0;
        left:0;
    }
} */
@media all and ( display-mode: fullscreen ){
    #canvas1, #canvas2, #canvas3 {
        max-width: unset;
        width: 100%;
    }
}
@media (min-width: 769px) and (max-width: 850px) and (orientation: landscape) and ( display-mode: fullscreen ){
    
}
</style>