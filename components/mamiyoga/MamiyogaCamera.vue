<template>
    <div class="container">
        <div class="input-video-upimg-container">
            <p class="input-video-upimg-text">請將身體對準動作起始位置</p>
            <img class="input-video-upimg" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/camera-upimg-1.png" alt="">
        </div>
        <div id="input-video-container">
            <video playsinline id="inputVideo" alt="在這裡錄影" muted>Video stream not available.</video>
        </div>
        <div class="btn-style">
            <button @click="recordVideo" v-if="!show_recording && !is_stop" id="startBtn" class="btn btn-sm btn-outline-primary"></button>
            <button @click="stopRecord" v-if="show_recording && !is_stop" id="stopBtn" class="btn btn-sm btn-outline-danger"></button>
            <button v-if="is_stop" @click="reloadPage" id="resetBtn" class="btn btn-sm btn-outline-info"></button>
        </div>
        <!-- <p class="upload-btn" v-if="!is_finish">{{current_time}}</p> -->
        <p class="upload-btn" v-if="is_finish" @click="uploadVideo" >上傳影片</p>
        <!-- <audio @timeupdate="checkTime" controls id="music" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/Ludo_BGM_1.wav"></audio> -->
    </div>
</template>
<script>
export default {
    data:()=>({
        inputVideo:'',
        isRecordingIcon:'',
        constraints : {
            // audio: true,
            video: {
                "mandatory": {
                    // "maxWidth": 480,
                    // "maxHeight": 320,
                    "maxFrameRate": 30,
                },
            }
        },
        video_recorder:'',

        is_recording: false,
        is_stop: false,
        is_finish: false,
        current_time: 0,
        show_recording: false,
        recorded_video: {},

        pose_start_time: 0,
        pose_end_time: 15,
    }),
    async mounted() {
        if (process.client) {
            this.inputVideo = document.querySelector('#inputVideo')

            // error message
            // this.errorElement = document.querySelector('#errorMsg')

            // is-recording icon
            // this.isRecordingIcon = document.querySelector('.is-recording')
            this.video_recorder = await this.$videoRecorder();
            console.log(this.video_recorder);
            this.video_recorder.openCamera(this.constraints,this.inputVideo);
            
        }
    },
    methods:{
        playAudio(){
            this.show_recording = true
            let m = document.querySelector('#music')
            m.play();
        },
        pauseAudio(){
            let m = document.querySelector('#music')
            m.pause();
            this.is_stop = true;
            
            console.log(this.is_recording)
        },
        reloadPage(){
            this.saveRecord();
            // location.reload()
            // let m = document.querySelector('#music')
            // m.currentTime = 0;
            // m.play();
            // this.is_stop = false;
            // if(this.is_recording = true) {
            //     this.is_recording = false
            //     this.video_recorder.stopRecording()
            // }
        },
        recordVideo(){
            this.show_recording = true
            this.video_recorder.startRecording()
            console.log('recording')
        },
        stopRecord(){
            let video_recorder = this.video_recorder;
            this.video_recorder.setOnRecordingFinish(this.processRecordedVideo);
            this.video_recorder.stopRecording()
            this.is_stop = true;
            this.is_finish = true;
            console.log('stop')
        },
        processRecordedVideo(file) {
            // console.log(file);
            this.recorded_video = file; 
            console.log(this.recorded_video);
        },
        saveRecord(){
            this.video_recorder.saveData();
            console.log('retry')
        },
        checkTime(e){
            this.current_time = e.target.currentTime
            
            // if(this.current_time >= 5 && this.current_time < 6 && !this.is_recording) {
            //     this.is_recording = true;
            //     console.log('start')
            //     this.recordVideo();
            // } 
            if(this.current_time >= this.pose_start_time && this.current_time < this.pose_start_time+1 && !this.is_recording) {
                this.is_recording = true;
                console.log('start')
                this.recordVideo();
            } 

            if(this.current_time >= this.pose_end_time && this.current_time < this.pose_end_time+1 && this.is_recording) {
                e.target.pause();
                this.is_recording = false;
                this.is_finish = true;
                this.stopRecord();
            }
        },
        uploadVideo(){
            let e = this.recorded_video
            this.video_recorder.closeCamera();
            this.$emit('uploadVideo',e);
        }

    },
}
</script>

<style>
.container {
    background: #000;
    height: 100vh;
}
#input-video-container {
    transform: scaleX(-1);
    height: 100vh;
    overflow: hidden;
}
.input-video-upimg-text {
    color: #fff;
    text-align: center;
    margin-top: 15%;
    font-size: 22px;
    font-weight: 500;
}
.input-video-upimg-container{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    opacity: .6;
    background: #000;
}
.input-video-upimg {
    width: 60%;
    position: fixed;
    top: 25%;
    left: 20%;
    z-index: 99;
    /* opacity: .6; */
}
#inputVideo {
    height:100vh;
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
    bottom: 8vh;
    left: calc(50% - 40px);
    z-index: 100;
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
    z-index: 100;
}
#music {
    opacity: 0;
    position: fixed;
    top: 0;
    
}
</style>