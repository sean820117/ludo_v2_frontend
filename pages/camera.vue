<template>
    <div class="container">
        <div class="card">
        <div class="card-body">
            <div id="input-video-container">
                <video id="inputVideo" alt="在這裡錄影" muted>Video stream not available.</video>
            </div>
            <!-- <div id="course-video-container">
                <video loop controls autoplay playsinline muted  class="index-wrap-video" poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video-preview.png">
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course/mami_yoga_L13-3_cn.mp4">
                </video>
            </div> -->
            <div class="row mb-4 justify-content-center align-items-center">
            <!-- <div class="col-4 d-flex justify-content-center align-items-center">
                <button id="startBtn" class="btn btn-sm btn-outline-primary">Start Recording</button>
                <button id="stopBtn" class="btn btn-sm btn-outline-danger">Stop Recording</button>
                <button id="resetBtn" class="btn btn-sm btn-outline-info">Restart Recorder</button>
            </div> -->
            <div class="btn-style">
                <button @click="recordVideo" id="startBtn" class="btn btn-sm btn-outline-primary">▶</button>
                <button @click="stopRecord" id="stopBtn" class="btn btn-sm btn-outline-danger">■</button>
                <button @click="retryRecord" id="resetBtn" class="btn btn-sm btn-outline-info">⇩</button>
            </div>
            </div>

            <div class="row">
            <div class="col-12">
                <div role="alert" id="errorMsg"></div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        inputVideo:'',
        outputVideo:'',
        startBtn:'',
        stopBtn:'',
        resetBtn:'',
        errorElement:'',
        isRecordingIcon:'',
        chunks :[],
        mediaRecorder:'',
        inputVideoURL:'',
        outputVideoURL:'',
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
        stream:'',
        video_recorder:'',
    }),
    async mounted() {
        if (process.client) {
            this.inputVideo = document.querySelector('#inputVideo')
            // this.outputVideo = document.querySelector('#outputVideo')

            // <button> element
            // this.startBtn = document.querySelector('#startBtn')
            // this.stopBtn = document.querySelector('#stopBtn')
            // this.resetBtn = document.querySelector('#resetBtn')

            // error message
            this.errorElement = document.querySelector('#errorMsg')

            // is-recording icon
            this.isRecordingIcon = document.querySelector('.is-recording')
            // this.inputVideo.addEventListener('loadedmetadata', this.onLoadStreamSuccess)
            this.video_recorder = await this.$videoRecorder();
            console.log(this.video_recorder);
            this.video_recorder.openCamera(this.constraints,this.inputVideo);
            // this.startBtn.addEventListener('click', this.video_recorder.startRecording)
            // this.stopBtn.addEventListener('click', this.video_recorder.stopRecording)
            // this.resetBtn.addEventListener('click', this.video_recorder.closeCamera)
            // this.mediaRecorderSetup();
            
        }
    },
    methods:{
        recordVideo(){
            this.video_recorder.startRecording()
            console.log('recording')
        },
        stopRecord(){
            this.video_recorder.stopRecording()
            console.log('stop')
        },
        retryRecord(){
            this.video_recorder.saveData();
            console.log('retry')
        }

    },
}
</script>

<style>
/* #inputVideo {
    width: 150px;
    height: 200px;
    transform: scaleX(-1);
    z-index: 10000;
    position: absolute;
} */
#input-video-container {
    /* width: 100vh;
    height: 100vw; */
    margin-top: 8vh;
    transform: scaleX(-1);
}
#inputVideo {
    height:100vh;
}


#course-video-container {
    /* width: 100vh;
    height: 100vw; */
    margin-top: 8vh;
    transform: rotate(90deg);
}
.index-wrap-video {
    /* width: 100%;
    height: 100%; */
    height: 100vw;
}

.btn-style{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15vh;
    left: 50%;
}
</style>