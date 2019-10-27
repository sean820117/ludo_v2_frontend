<template>
    <div class="container">
        <video @timeupdate="checkTime" id="demo-video" alt="在這裡錄影" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course/L10_action01.mp4" muted>Video stream not available.</video>
        <div id="input-video-container">
            <video id="video" alt="在這裡錄影" muted>Video stream not available.</video>
        </div>
        <div class="btn-style">
            <button @click="playAudio" v-if="!show_recording && !is_stop" id="startBtn" class="btn btn-sm btn-outline-primary"></button>
            <button @click="pauseAudio" v-if="show_recording && !is_stop" id="stopBtn" class="btn btn-sm btn-outline-danger"></button>
            <button v-if="is_stop" @click="reloadPage" id="resetBtn" class="btn btn-sm btn-outline-info"></button>
        </div>
        <p class="upload-btn" v-if="!is_finish">{{current_time}}</p>
        <p class="upload-btn" v-if="is_finish" @click="saveRecord" >取得結果</p>
        <audio controls id="music" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/Ludo_BGM_1.wav"></audio>
    </div>
</template>
<script>
export default {
    data:()=>({
        inputVideo:'',
        isRecordingIcon:'',
        video_recorder:'',

        is_recording: false,
        is_stop: false,
        is_finish: false,
        current_time: 0,
        show_recording: false,
    }),
    async mounted() {
        if (process.client) {
            this.video_recorder = await this.$newLudoRTC({dev:true});
            console.log(this.video_recorder);
            this.video_recorder.openCamera();
        }
    },
    methods:{
        playAudio(){
            this.show_recording = true
            let m = document.querySelector('#demo-video')
            m.play();
        },
        pauseAudio(){
            let m = document.querySelector('#demo-video')
            m.pause();
            this.video_recorder.stopRecording()
            this.is_stop = true;
        },
        reloadPage(){
            location.reload()
        },
        recordVideo(){
            this.video_recorder.startRecording({
                pose_id: "yoga_20",
                user_id: "guest",
                language: 'jp',
            })
            console.log('recording')
        },
        stopRecord(){
            this.video_recorder.stopRecording()
            this.is_stop = true;
            this.is_finish = true;
            console.log('stop')
        },
        async saveRecord(){
            let result = await this.video_recorder.getDetailResult();
            alert(result);
        },
        checkTime(e){
            this.current_time = parseInt(e.target.currentTime);
            if(this.current_time >= 8 && this.current_time < 9 && !this.is_recording) {
                this.is_recording = true;
                console.log('start')
                this.recordVideo();
            } 

            if(this.current_time >= 60 && this.current_time < 61 && this.is_recording) {
                e.target.pause();
                this.is_recording = false;
                this.is_finish = true;
                this.stopRecord();
            }
        }
    },
}
</script>

<style>
.container {
    background: #000;
    min-height: 100vh;
    overflow:hidden;
}
#input-video-container {
    transform: scaleX(-1);
}
#video {
    height:15vh;
    margin:10px;
    border: 1px solid red;
}
#demo-video {
    height: 90vh;
    width: 200vw;
    margin-left: -50vw;
    position:absolute;
}
#course-video-container {
    margin-top: 8vh;
    transform: rotate(90deg);
}
.index-wrap-video {
    height: 100vw;
}
.btn-style{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 5vh;
    left: calc(50% - 40px);
}
.btn-style .btn {
    width: 80px;
    height: 80px;
    border-style: none;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}
#startBtn {
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/camera-record-btn.svg');
}
#stopBtn {
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/camera-pause-btn.svg');
}
#resetBtn {
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/camera-restart-btn.svg');
}
.upload-btn {
    color: #fff;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #fff;
    position: fixed;
    bottom: 9vh;
    right: 6vw;
}
#music {
    opacity: 0;
}
</style>