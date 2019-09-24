<template>
    <div class="container">
        <div id="input-video-container">
            <video id="inputVideo" alt="在這裡錄影" muted>Video stream not available.</video>
        </div>
        <div class="btn-style">
            <button @click="playAudio" v-if="!show_recording && !is_stop" id="startBtn" class="btn btn-sm btn-outline-primary"></button>
            <button @click="pauseAudio" v-if="show_recording && !is_stop" id="stopBtn" class="btn btn-sm btn-outline-danger"></button>
            <button v-if="is_stop" @click="reloadPage" id="resetBtn" class="btn btn-sm btn-outline-info"></button>
        </div>
        <p class="upload-btn" v-if="!is_finish">{{current_time}}</p>
        <p class="upload-btn" v-if="is_finish" @click="saveRecord" >上傳影片</p>
        <audio @timeupdate="checkTime" controls id="music" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/Ludo_BGM_1.wav"></audio>
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
                    "maxWidth": 640,
                    "maxHeight": 480,
                    "maxFrameRate": 12,
                },
            }
        },
        video_recorder:'',

        is_recording: false,
        is_stop: false,
        is_finish: false,
        current_time: 0,
        show_recording: false,
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
            this.video_recorder.stopRecording()
            this.is_stop = true;
        },
        reloadPage(){
            location.reload()
        },
        recordVideo(){
            this.video_recorder.startRecording()
            console.log('recording')
        },
        stopRecord(){
            let video_recorder = this.video_recorder;
            this.video_recorder.setOnRecordingFinish(()=>{ video_recorder.saveData(); });
            this.video_recorder.stopRecording()
            this.is_stop = true;
            this.is_finish = true;
            console.log('stop')
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
            if(this.current_time >= 5 && this.current_time < 6 && !this.is_recording) {
                this.is_recording = true;
                console.log('start')
                this.recordVideo();
            } 

            if(this.current_time >= 15 && this.current_time < 16 && this.is_recording) {
                e.target.pause();
                this.is_recording = false;
                this.is_finish = true;
                this.stopRecord();
            }
            // if(this.current_time > 15) {
                
            //     console.log('finish')
            //     this.stopRecord();
            //     this.saveRecord();
            // }
        }

    },
}
</script>

<style>
.container {
    background: #000;
    min-height: 100vh;
}
#input-video-container {
    transform: scaleX(-1);
}
#inputVideo {
    height:80vh;
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
    left: calc(50% - 50px);
}
.btn-style .btn {
    width: 100px;
    height: 100px;
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