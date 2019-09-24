<template>
    <div id="experience-page">
        <div id="top-show">
            <div id="go-back-btn">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/about-header-next.png" alt="">
            </div>
            <div id="start-video" @click="startPractice">
                開始
            </div>
        </div>
        <div id="input-video-container">
            <video playsinline id="inputVideo" alt="在這裡錄影" muted>Video stream not available.</video>
        </div>

        <div id="show-course" :class="is_studying ? 'show':''">
            <div v-if="show_inhale && !show_exhale" class="repeat-bar green-bar" :class="is_inhaleing ? 'animate-top':''">
                <div class="repeat-bar-text">吸氣</div>
            </div>
            <div v-if="!show_inhale && show_exhale" class="repeat-bar red-bar" :class="is_exhaleing ? 'animate-bottom':''">
                <div class="repeat-bar-text">吐氣</div>
            </div>
            <div v-if="!count_over" class="video-process-bar">
                <div id="video-process-bar-inside"></div>
            </div>
            <div v-if="count_over" class="count-over">
                <div class="count-over-all-btn">
                    <div class="count-over-btn" style="border: 2px solid #fff;">再次練習</div>
                    <div @click="saveRecord" class="count-over-btn" style="border: 2px #24798F solid;background:#24798F;">開始分析</div>
                </div>
            </div>
            <video playsinline id="course-video" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course/mami_yoga_L13-3_cn.mp4"></video>
        </div>
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
                width:480,
                height:320,
                frameRate:30,
                facingMode: 'user',
                // "mandatory": {
                //     "maxWidth": 480,
                //     "maxHeight": 320,
                //     "maxFrameRate": 30,
                // },
            }
        },
        video_recorder:'',
        count_over: false,
        is_studying: false,
        show_inhale: true,
        show_exhale: false,
        is_inhaleing: false,
        is_exhaleing: false,

        current_time: 0,
        video_length: 0,
    }),
    async mounted(){
        if (process.client) {
            this.inputVideo = document.querySelector('#inputVideo')
            this.video_recorder = await this.$videoRecorder();
            console.log(this.video_recorder);
            this.video_recorder.openCamera(this.constraints,this.inputVideo);
           
            // setTimeout(() => {
            //     this.is_inhaleing = true
            // }, 1500);
            // setTimeout(() => {
            //     this.show_inhale = false
            //     this.show_exhale = true
            // }, 8000);
            // setTimeout(() => {
            //     this.is_exhaleing = true
            // }, 8500);
            
            // let co_vid = document.querySelector('#course-video')
            // let height = 0
            // co_vid.oncanplay = function(){
            //     this.video_length = co_vid.duration
            //     console.log(this.video_length)
            //     let t = (this.video_length+1) / 100
            //     let id = setInterval(() => {
            //         if(height < 100) {
            //             height++
            //             console.log(height)
            //             document.getElementById('video-process-bar-inside').style.height = height+'%'; 
            //         } else if (height = 100) {
            //             this.show_exhale = false
            //             this.count_over = true
            //             clearInterval(id)
            //         }
            //     }, t*1000);
            // }.bind(this)
            
        }
    },
    methods: {
        startPractice(){
            this.is_studying = true;
            //控制吸氣吐氣的顯示
            setTimeout(() => {
                this.is_inhaleing = true
            }, 1500);
            setTimeout(() => {
                this.show_inhale = false
                this.show_exhale = true
            }, 8000);
            setTimeout(() => {
                this.is_exhaleing = true
            }, 8500);
            //控制影片播放及進度條
            let co_vid = document.querySelector('#course-video')
            let height = 0
            this.video_length = co_vid.duration
            co_vid.play();
            this.recordVideo();
            let t = (this.video_length+1) / 100
            let id = setInterval(() => {
                if(height < 100) {
                    height++
                    console.log(height)
                    document.getElementById('video-process-bar-inside').style.height = height+'%'; 
                } else if (height = 100) {
                    this.show_exhale = false
                    this.count_over = true
                    clearInterval(id)
                }
            }, t*1000);
        },
        recordVideo(){
            this.video_recorder.startRecording()
            console.log('recording')
        },
        saveRecord(){
            this.video_recorder.saveData();
            console.log('save')
        },
    },
}
</script>

<style>
#experience-page {
    /* transform: rotate(90deg); */
    /* height: 100vw; */
    height: 100vh;
}
#input-video-container {
    transform: scaleX(-1);
    /* width: 100vw; */
    height: 100vh;
    overflow: hidden;
}
#inputVideo {
    height:100vh;
}
#top-show {
    position: relative;
    z-index: 99;
}
#go-back-btn {
    position: absolute;
    transform: rotate(90deg);
    top: 3vh;
    left: 3vw;
}
#go-back-btn img {
    width: 40px;
}
#start-video {
    width: 30vw;
    height: 10vh;
    background: #24798F;
    transform: rotate(90deg);
    position: absolute;
    top: 5vh;
    right: 1vw;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}
#show-course {
    z-index: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
}
#show-course.show {
    z-index: 100;
    opacity: 1;
}
#course-video {
    transform: rotate(90deg);
        width: 100vh;
}
.repeat-bar {
    height: 75vw;
    width: 60px;
    position: absolute;
    top: -10vh;
    z-index: 101;
    transform: rotate(90deg);
    padding-top: 50vw; 
    transition: 5s ease 1s;
}
.green-bar {
    background: linear-gradient(0deg,#4CD39A,#4CD39A,#4CD39A,rgba(0,0,0,0));
    padding-top: 50vw;
}
.red-bar {
    background: linear-gradient(180deg,#FF9A7B,#FF9A7B,#FF9A7B,rgba(0,0,0,0));
    padding-top: 0vw;
}
.animate-top {
    padding-top: 0vw; 
}
.animate-bottom {
    padding-top: 50vw;
}
.repeat-bar-text {
    writing-mode:vertical-lr;
    font-size: 30px;
    line-height: 60px;
    color: #FFFFFF;
    font-weight: bold;
    border-top: 2px solid #fff;
    padding-top: 2vh; 
}
.video-process-bar {
    width: 12px;
    height: 90vh;
    background: rgb(255, 255, 255,.5);
    z-index: 101;
    position: absolute;
    left: 5vw;
    border-radius: 20px;
}
#video-process-bar-inside{
    background: #fff;
    width: 100%;
    /* height: 10px; */
    border-radius: 20px;
}
.count-over {
    background: linear-gradient(90deg,#000,rgba(0,0,0,0));
    height: 100vh;
    width: 45%;
    position: absolute;
    z-index: 101;
    left: 0;
}
.count-over-all-btn {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: rotate(90deg);
    position: absolute;
    bottom: 15vh;
    left: -10vw;
}
.count-over-btn {
    width: 80px;
    height: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>