<template>
    <div>
        <div>{{text}}</div>
        <div> 
            <video id ='live' width ='320' height ='240' autoplay style ='display: none;'></video>
            <div class="image-block">
                <canvas width ='320' id ='canvas' height ='240' style ='display:inline;'></canvas>
                <canvas id ='canvas-word'></canvas>
                <!--<div id ='word-block'>{{canvasWord}}</div>-->
            </div>
            <img id="img" src=""/>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        text: '',
        blobData: {},
        ws: {},
        timer: null,
        frame_count: 0,
        canvasWord: 'Hiiiiiiiiiiiiiiiiiiiii',
        record_stopped: false,
        catch_gap:60,
    }),
    methods:{
        canvasDraw(vidoe_dom,canvas){
            // let avideo = document.getElementById('live')
            // var canvas = document.getElementById("canvas")
            var ctx = canvas.getContext('2d');
            this.timer = setInterval( () => {
                if (vidoe_dom.srcObject && !this.record_stopped){
                    // ctx.translate(area.offsetHeight * vidRatio,0); //move the drawing cursor to the right edge
                    // ctx.scale(-1,1); //flip the image horizontally
                    ctx.drawImage(vidoe_dom, 0, 0, 320, 240);
                    var data = canvas.toDataURL('image/jpeg', 1.0);
                    // this.blobData = data
                    
                    if (this.frame_count % this.catch_gap== 0) {
                        this.sendToServer(data);
                    }
                    this.frame_count += 1
                }
            },33);
        },
        sendToServer(data) {
            //    ----dataURI to Blob----
            var byteString;
            if (data.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(data.split(',')[1]);
            else
                byteString = unescape(data.split(',')[1]);
            // separate out the mime component
            var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            if(data != 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCADwAUADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k='){
                this.ws.send(data)
            }
        },
        // ImageLimit(image_data){
        //     let limit_num = 20
        //     this.frame_count %= limit_num
        //     console.log('jjjjjjjj', this.frame_count)
        //     let img = document.getElementById('img')
        //     //console.log('blob_data', image_data.slice(0, 100))
        //     if (this.frame_count == 0){
        //         console.log('image_data', image_data)
        //         img.src = image_data;
        //         this.sendImg(image_data)
        //     }
        // },
        // sendImg(image_data){
        //     if(image_data != 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCADwAUADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k='){
        //         this.ws.send(image_data)
        //     }
        // },
        drawWordCanvas(word){
            var canvas = document.getElementById("canvas")
            var cw = document.getElementById("canvas-word");
            var ctx = cw.getContext("2d");
            cw.width = canvas.height * 0.9
            cw.height = 40
            ctx.fillStyle = 'pink'
            ctx.fillRect(0, 0, cw.width, cw.height);
            
            ctx.font = "bold 15px arial"
            ctx.textAlign = "center";
            ctx.fillStyle = 'black'
            this.wrapText(word, cw.width/2, 25);
        },
        wrapText(text, x, y, maxWidth, lineHeight) {
            if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
                return;
            }
            
            var cw = document.getElementById("canvas-word");
            var context = cw.getContext("2d");
            var canvas = context.canvas;
            
            if (typeof maxWidth == 'undefined') {
                maxWidth = (canvas && canvas.width) || 300;
            }
            if (typeof lineHeight == 'undefined') {
                lineHeight = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight);
            }
            
            // 字符分隔为数组
            var arrText = text.split('');
            var line = '';
            
            for (var n = 0; n < arrText.length; n++) {
                var testLine = line + arrText[n];
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > maxWidth && n > 0) {
                    context.fillText(line, x, y);
                    line = arrText[n];
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
            context.fillText(line, x, y);
        }
    },
    mounted() {
        if (process.client) {
            let avideo = document.getElementById('live')
            var canvas = document.getElementById("canvas")
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((stream) => {
                avideo.srcObject = stream;
                console.log('stream', stream)
                avideo.play();
                this.canvasDraw(avideo,canvas)
                this.drawWordCanvas()
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });
            
            this.ws = new WebSocket('ws://localhost:5000');
            this.ws.onopen = e => {
                console.log('[Client] Successfully Coneected', e)
            }
        }
    },
}
</script>

<style>
#live {
        width : 320px ! important;
        height: 320px !important; 
        /* transform: scaleX(-1); */
        transform: rotate(-90deg);
        margin: 0 -35px !important; 
}
#canvas {
    transform: rotate(-90deg);
}
.image-block{
    position: relative;
    display: inline-block;
}
#canvas-word, #word-block{
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translate(-50%);
}
#word-block{
    background-color: pink;
    width: 90%;
    height: fit-content;
    text-align: center;
    word-wrap: break-word;
    word-break: normal;
}
</style>