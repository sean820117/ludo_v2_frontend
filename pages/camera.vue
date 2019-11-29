<template>
    <div class="container">
        <div id="input-video-container">
            <video id="video" alt="課程影片" muted>Video stream not available.</video>
        </div>
        <video @timeupdate="checkTime" id="demo-video" alt="在這裡錄影" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course/L10_action01.mp4" muted playsinline>Video stream not available.</video>
        <div class="btn-style">
            <button @click="playAudio" v-if="!show_recording && !is_stop" id="startBtn" class="btn btn-sm btn-outline-primary"></button>
            <button @click="pauseAudio" v-if="show_recording && !is_stop" id="stopBtn" class="btn btn-sm btn-outline-danger"></button>
            <button v-if="is_stop" @click="reloadPage" id="resetBtn" class="btn btn-sm btn-outline-info"></button>
            <p class="upload-btn" v-if="!is_finish">{{current_time}}</p>
            <p class="upload-btn" v-if="is_finish" @click="saveRecord" >取得結果</p>
        </div>
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
        pose_id:'yoga_20',
        language: 'zh-tw',
    }),
    async mounted() {
        if (process.client) {
            this.pose_id = this.$route.query.pose_id ? this.$route.query.pose_id : this.pose_id;
            this.language = this.$route.query.language ? this.$route.query.language : this.language;
            let dev = this.$route.query.dev == 'true' ? true : false;
            this.video_recorder = await this.$newLudoRTC({dev:dev});
            console.log(this.video_recorder);
            this.video_recorder.openCamera();
            let video = document.querySelector("#demo-video");
            // alert(video.webkitSupportsFullscreen)
            let result_arr = await navigator.mediaDevices.enumerateDevices();
            let result_word = ""
            result_arr.forEach(element => {
                for (const key in element) {
                    if (key == "deviceId" || key == "kind" || key == "label" || key == "deviceId") {
                        result_word = result_word + key + ":" + element[key].toString() + "\n"    
                    }
                }
            });
            alert(result_word);
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
            this.is_finish = true;
        },
        reloadPage(){
            location.reload()
        },
        recordVideo(){
            this.video_recorder.startRecording({
                pose_id: this.pose_id,
                user_id: "tester",
                language: this.language,
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
            console.log(result);
            // alert(result);
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
    /* height: 100%; */
    min-height: -webkit-fill-available;
    width: 100vw;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
#input-video-container {
    transform: scaleX(-1);
    background:transparent;
    align-self: flex-end;
    position: fixed;
    top: 0;
}
#video {
    height:15vh;
    margin:10px;
    border: 1px solid red;
}
#demo-video {
    height: 100%;
    width: 200vw;
    flex: 10;
    /* margin-left: -50vw; */
    /* position:absolute; */
}
.btn-style{
    flex: 1;
    /* position: absolute; */
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    /* left: calc(50% - 40px); */
    width: 100vw;
    height: 100px;
    background: #000;
}
.btn-style .btn {
    width: 80px;
    height: 80px;
    border-style: none;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    /* padding-bottom: 5vh; */
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
    position: absolute;
    margin-top: 5px;
    right: 6vw;
    align-self: baseline;
}
#music {
    opacity: 0;
}
</style>