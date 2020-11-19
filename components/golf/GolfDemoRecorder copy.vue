<template>
    <div class="golf-demo-recorder-container">
        <!-- <video playsinline width ='640' height ='360' autoplay id="golf-demo-camera"></video>
        <canvas id ='canvas' width ='360' height ='640'></canvas>
        <canvas id ='canvas-word'></canvas> -->
        <img id="bg" src="http://localhost:5000/video_feed">
        <!-- <img id="golf-demo-recorder-target-area" :src="!is_recording ? img_target_area_with_text : img_target_area" alt=""/> -->
        <button v-if="!is_recording" class="golf-demo-button-small golf-demo-recorder-start-button" @click="startRecording">開始</button>
        <button v-else class="golf-demo-button-small golf-demo-recorder-stop-button" @click="stopRecording">結束</button>
        <!-- <button class="golf-demo-button-small golf-demo-recorder-start-button" @click="startRecording">結束</button> -->
    </div>
</template>

<script>
export default {
    data:()=>({
        video_recorder:{},
        is_recording:false,
        loader:null,
        pose_id: 'golf_standard_1',
        language: 'zh-tw',
        img_target_area_with_text:'/golf/target-area-with-text.png',
        img_target_area:'/golf/target-area-with-text.png',
        ws: {},
        timer: null,
        frame_count: 0,
        canvasWord: 'Hiiiiiiiiiiiiiiiiiiiii',
        record_stopped: false,
        catch_gap:4,
    }),
    props:{
        user_id:String,
    },
    async mounted() {
        if (process.client) {
            // this.loader = this.$loading.show({
            //     color: '#355129',
            //     loader: 'dots',
            //     width: 64,
            //     height: 64,
            //     backgroundColor: '#ffffff',
            //     opacity: 0.5,
            //     zIndex: 999,
            // });
            // let options = {
            //     dev:true,
            //     video_element_id:'#golf-demo-back-camera',
            //     should_be_rotated: false,
            //     // constraints : {
            //     //     audio: false,
            //     //     video: {
            //     //         width:360,
            //     //         // height:default_height,
            //     //         aspectRatio: 0.5625,
            //     //         frameRate: 30,
            //     //         // facingMode: { exact: "user" },
            //     //     }
            //     // },

            // }
            // let avideo = document.getElementById('golf-demo-camera')
            // var canvas = document.getElementById("canvas")
            // navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            // .then((stream) => {
            //     avideo.srcObject = stream;
            //     console.log('stream', stream)
            //     avideo.play();
            //     this.canvasDraw(avideo,canvas)
            //     this.drawWordCanvas('test')
            //     this.loader.hide();
            // })
            // .catch(function(err) {
            //     console.log("An error occurred: " + err);
            //     alert('無法開啟相機');
            // });
            
            this.ws = new WebSocket('ws://localhost:5000');
            this.ws.onopen = e => {
                console.log('[Client] Successfully Coneected', e)
            }
            // this.video_recorder = await this.$newLudoRTC(options);
            // console.log(this.video_recorder);
            // await this.video_recorder.openCamera();
            // this.loader.hide();
        }
    },
    destroyed() {
        // this.video_recorder.closeCamera();
        if(this.timer) {
            clearInterval(this.timer);
            this.loader.hide();
        }
    },
    methods:{
        drawWordCanvas(word){
            var canvas = document.getElementById("canvas")
            var cw = document.getElementById("canvas-word");
            var ctx = cw.getContext("2d");
            cw.width = canvas.width * 0.9
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
        },
        async startRecording() {
            setTimeout(async () => {
                console.log('recording')    
                this.loader = this.$loading.show({
                    color: '#355129',
                    loader: 'dots',
                    width: 64,
                    height: 64,
                    backgroundColor: '#ffffff',
                    opacity: 0.5,
                    zIndex: 999,
                });
                await this.video_recorder.startRecording({
                    pose_id: this.pose_id,
                    user_id: this.user_id || "tester",
                    language: this.language,
                })
                let final_connection_status = await this.video_recorder.getFinalConnectionStatus()
                this.loader.hide();
                if (!final_connection_status) {
                    alert('未成功連上伺服器，可能是網路環境不穩，請稍後重試！')
                    return false;
                }
            }, 100);
            this.is_recording = true;
        },
        stopRecording() {
            this.$emit("setRecorder",this.video_recorder);
            this.video_recorder.stopRecording();
            this.is_recording = false;
            this.$emit("nextStage");
        },
        canvasDraw(video_dom,canvas){
            // let avideo = document.getElementById('live')
            // var canvas = document.getElementById("canvas")
            var ctx = canvas.getContext('2d');
            var ttt = Date.now()
            this.timer = setInterval( () => {
                if (video_dom.srcObject && !this.record_stopped){
                    // ctx.translate(640,0); //move the drawing cursor to the right edge
                    // ctx.scale(-1,1); //flip the image horizontally
                    // ctx.save()
                    ctx.translate(canvas.width/2,canvas.height/2)
                    ctx.rotate(-90 * Math.PI/180.0);
                    ctx.drawImage(video_dom, -video_dom.width/2,-video_dom.height/2);
                    ctx.rotate(90 * Math.PI/180.0);
                    ctx.translate(-canvas.width/2,-canvas.height/2)
                    // ctx.drawImage(video_dom, 0, 0,320,240);
                    // ctx.restore();
                    var data = canvas.toDataURL('image/jpeg', 1.0);
                    // this.blobData = data
                    
                    if (this.frame_count % this.catch_gap== 0) {
                        this.sendToServer(data);
                        // console.log((Date.now()-ttt) + 'ms')
                        ttt = Date.now()
                    }
                    this.frame_count += 1
                }
            },30);
            // setTimeout(()=>{
            //     this.record_stopped = true
            // },5000)
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
    },
}
</script>

<style>
@media (min-width:500px) {
    #golf-demo-camera {
        /* transform: scaleX(-1); */
        display:none;
    }
    #canvas {
        /*width : 360px ! important;
        height: 640px !important; 
         transform: scaleX(-1); */
        /* transform: rotate(-90deg); */
        /*margin: 0 -110px !important; */
    }
    #canvas-word, #word-block{
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translate(-50%);
    }
    #golf-demo-recorder-target-area {
        height: initial ! important;
        width : initial ! important;
        /* top:20vw; */
        position:absolute;
        align-self:center;
    }
    .golf-demo-recorder-container {
        height: 100vh;
    }
}
.golf-demo-recorder-container {
    max-width: 60vh;
    margin: 0 auto;
    background-color:black;
    display: flex;
    flex-direction: column;
}
#golf-demo-self-camera {
    width: 80vw;
    /* height: 100%; */
    transform: scaleX(-1);
    margin: 0 10vw 0;
}
#golf-demo-back-camera {
    width: 80vw;
    /* height: 100%; */
    /* transform: scaleX(-1); */
    /*transform: rotate(-90deg);*/
    margin: 0 10vw 0;
}
.golf-demo-recorder-start-button {
    position:fixed;
    bottom:15px;
    align-self: center;
}
.golf-demo-recorder-stop-button {
    position:fixed;
    bottom:15px;
    align-self: center;
    background:#707070;
}
#golf-demo-recorder-target-area {
    /* height:80%; */
    width:66.64vw;
    /* top:20vw; */
    position:absolute;
    align-self:center;
}
</style>