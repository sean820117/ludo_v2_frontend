<template>
    <div>
        <div id="experience-page" v-if="!is_loading && !is_loaded">
            <div id="top-show">
                <div v-if="!show_nam" id="go-back-btn">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/about-header-next.png" alt="">
                </div>
                <div v-if="!show_nam" id="start-video" @click="startReady">
                    開始
                </div>
            </div>
            <div id="input-video-container">
                <video playsinline id="inputVideo" alt="在這裡錄影" muted>Video stream not available.</video>
                <div class="preview-img">
                    <div v-if="show_nam">{{ready_go}}</div>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/experience-pose-show.png" alt="">
                </div>
            </div>
            <div id="show-course" :class="is_studying ? 'show':''">
                <!-- <div id="repeat-nam" v-if="!count_over">{{nam}}</div> -->
                <div v-if="show_inhale && !show_exhale" class="repeat-bar green-bar" :class="is_inhaleing ? 'animate-top':''">
                    <div class="repeat-bar-text">吸氣</div>
                </div>
                <div v-if="!show_inhale && show_exhale" class="repeat-bar red-bar" :class="is_exhaleing ? 'animate-bottom':''">
                    <div class="repeat-bar-text">吐氣</div>
                </div>
                <div v-if="!count_over" style="position: absolute;left: 5vw;top: 5vh;">
                    <div class="video-process-bar">
                        <div id="video-process-bar-inside-1"></div>
                    </div>
                    <div class="video-process-bar">
                        <div id="video-process-bar-inside-2"></div>
                    </div>
                    <div class="video-process-bar">
                        <div id="video-process-bar-inside-3"></div>
                    </div>
                </div>
                <div v-if="count_over" class="count-over">
                    <div class="count-over-all-btn">
                        <div @click="replay" class="count-over-btn" style="border: 2px solid #fff;">再次練習</div>
                        <div @click="newVideoUpload" class="count-over-btn" style="border: 2px #24798F solid;background:#24798F;">開始分析</div>
                    </div>
                </div>
                <audio controls id="course-bgm" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_action_BGM.wav"></audio>
                <video playsinline id="course-video-1" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_action03_A.mp4"></video>
                <video playsinline id="course-video-2" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_action03_B.mp4"></video>
                <video playsinline id="course-video-3" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_action03_C.mp4"></video>
            </div>
        </div>
        <!-- 上傳 -->
        <div class="loading-bar" v-if="is_loading">
            <div style="width: 100%;height: 15vh;display:flex;align-items:center;">
                <div class="bar-back">
                    <div id="bar-container">
                        <div id="bar"></div>
                    </div>
                    <p style="margin-left:2%;font-size:14px;">{{show_value}}</p>
                </div>
            </div>
            <div style="margin:5vh auto;">
                <p style="color:#24798F;font-weight:bold;text-align:center;margin:0 auto 10px;width:80%;font-size:14px;" v-html="$t('start_experience_uptext')"></p>
                <div class="mamiyoga-show-article" @click="changeArticle">
                    <p v-html="post_article"></p>
                    
                    <div style="position:absolute;bottom:20px;right:25px;display:flex;align-items:center;" >
                        <p style="color:#24798F;font-size:14px;padding-right:5px;">點擊觀看</p>
                        <img style="width:30px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tap.png" alt="">
                    </div>
                </div>
            </div>
            <div style="width:100%;height:50px;display:flex;justify-content:center;">
                <button v-show="play_assay" class="see-assay-btn" @click="is_loading = false, is_loaded = true">{{$t('start_experience_btn_3')}}</button>
            </div>
        </div>
        <!-- 顯示結果 -->
        <!-- <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent" @retryRecordAndroid="retryRecordAndroid" @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video> -->
        <mamiyoga-assay-video v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video> 
        <!-- 影片錯誤回饋視窗(重新拍攝) -->
        <mamiyoga-window-alert-box v-if="is_error">
            <div class="cancel-box" @click="is_error = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <p style="margin-top:40px;" v-html="errorText"></p>
            <img :src="errorImg" alt="" style="margin:30px auto 45px;height:35%;width:auto;">
            <div class="star-line-box">
                <!-- <button @click="reopenCamera" v-if="is_android" class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px;padding:0;">
                    {{$t('teach_button_upload')}}
                </button>
                <button class="mamiyoga-assay-contact-btn" v-else style="width:120px;letter-spacing:0;margin-top:20px;padding:0;">
                    <label style="width:120px;height:35px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
                        <input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="retryVideoUpload">{{$t('teach_button_upload')}}
                    </label>
                </button> -->
            </div>
        </mamiyoga-window-alert-box>

        <!-- 動作做錯時回饋視窗(需重新開啟練習畫面) -->
        <mamiyoga-window-alert-box v-if="need_resee">
            <div class="cancel-box" @click="need_resee = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <p style="margin-top:40px;" v-html="errorText"></p>
            <img :src="errorImg" alt="" style="margin:30px auto 45px;height:35%;width:auto;">
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px;padding:0;cursor:pointer;" @click="need_resee = false">
                   再看一次
                </button>
            </div>
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import axios from '~/config/axios-config';

export default {
    components:{
        MamiyogaWindowAlertBox,
        MamiyogaAssayVideo,
    },
    data:()=>({
        inputVideo:'',
        isRecordingIcon:'',
        constraints : {
            // audio: true,
            video: {
                // width:480,
                // height:320,
                // frameRate:12,
                // facingMode: 'user',
                "mandatory": {
                    "maxWidth": 480,
                    "maxHeight": 320,
                    "maxFrameRate": 30,
                },
            }
        },
        video_recorder:'',
        count_over: false,
        is_studying: false,
        show_inhale: false,
        show_exhale: false,
        is_inhaleing: false,
        is_exhaleing: false,

        current_time: 0,
        video_length: 0,
        recorded_video: {},
        nam: 2,

        is_loading: false,
        is_loaded: false,
        video_result: {},
        post_article:'',
        show_value: 0,

        is_error: false,
        need_resee: false,
        errorText: '',
        errorImg: '',
        play_assay: false,

        show_nam: false,
        ready_go: 5,
    }),
    async mounted(){
        if (process.client) {
            this.inputVideo = document.querySelector('#inputVideo')
            this.video_recorder = await this.$videoRecorder();
            console.log(this.video_recorder);
            this.video_recorder.openCamera(this.constraints,this.inputVideo);

            this.articles = await require('~/config/mamiyoga-post');
            this.post_article = this.articles[0].post_article;
        }
    },
    methods: {
        startReady(){
            this.show_nam = true
            let id = setInterval(() => {
                this.ready_go--
                if(this.ready_go == 0){
                    this.startPractice();
                    clearInterval(id)
                }
            }, 1000);
        },
        startPractice(){
            this.is_studying = true;
            
            //控制影片播放及進度條
            let bgm = document.querySelector('#course-bgm')
            let co_vid = document.querySelector('#course-video-1')
            let nt_vid = document.querySelector('#course-video-2')
            let nt_vid_2 = document.querySelector('#course-video-3')
            nt_vid.style.display = 'none';
            nt_vid_2.style.display = 'none';
            // let height = 0
            this.video_length = co_vid.duration
            console.log(this.video_length)
            bgm.play();
            co_vid.play();
            let t = (this.video_length+1) / 100
            let id = setInterval(() => {
                let bar_percentage = co_vid.currentTime / this.video_length
                console.log(bar_percentage)
                document.getElementById('video-process-bar-inside-1').style.height = (bar_percentage * 100)+'%'; 
                if (bar_percentage == 1) {
                    nt_vid.style.display = 'block';
                    co_vid.style.display = 'none';
                    this.startPractice1();
                    console.log('stop')
                    clearInterval(id)
                }
            }, 100);
        },
        startPractice1(){
            this.show_inhale = true
            //控制吸氣吐氣的顯示
            setTimeout(() => {
                this.is_inhaleing = true
            }, 3000);
            setTimeout(() => {
                this.show_inhale = false
                this.show_exhale = true
            }, 13000);
            setTimeout(() => {
                this.is_exhaleing = true
            }, 16000);
            //第二次吸氣吐氣
            setTimeout(() => {
                this.show_inhale = true
                this.show_exhale = false
                this.is_exhaleing = false
            }, 24000);
            setTimeout(() => {
                this.is_inhaleing = true
            }, 27000);
            setTimeout(() => {
                this.show_inhale = false
                this.show_exhale = true
            }, 30000);
            setTimeout(() => {
                this.is_exhaleing = true
            }, 31000);

            setTimeout(() => {
                this.show_exhale = false
                this.show_inhale = false
            }, 40000);
            //控制影片播放及進度條
            let co_vid = document.querySelector('#course-video-2')
            let nt_vid = document.querySelector('#course-video-3')
            let height = 0
            this.video_length = co_vid.duration
            this.recordVideo();
            co_vid.play();
            let t = (this.video_length+1) / 100
            let id = setInterval(() => {
                let bar_percentage = co_vid.currentTime / this.video_length
                console.log(bar_percentage)
                document.getElementById('video-process-bar-inside-2').style.height = (bar_percentage * 100)+'%'; 
                 if (bar_percentage == 1) {
                    this.video_recorder.setOnRecordingFinish(this.processRecordedVideo);
                    this.video_recorder.stopRecording()
                    nt_vid.style.display = 'block';
                    co_vid.style.display = 'none';
                    this.startPractice2();
                    console.log('stop')
                    clearInterval(id)
                }
            }, 100);
        },
        startPractice2(){
            let co_vid = document.querySelector('#course-video-3')
            let height = 0
            this.video_length = co_vid.duration
            // this.recordVideo();
            co_vid.play();
            let t = (this.video_length+1) / 100
            let id = setInterval(() => {
                let bar_percentage = co_vid.currentTime / this.video_length
                console.log(bar_percentage)
                document.getElementById('video-process-bar-inside-3').style.height = (bar_percentage*100)+'%'; 
                if (bar_percentage == 1) {
                    this.count_over = true
                    console.log('stop')
                    clearInterval(id)
                }
            }, 100);
        },
        recordVideo(){
            this.video_recorder.startRecording()
            console.log('recording')
        },
        saveRecord(){
            let video_recorder = this.video_recorder;
            console.log(this.recorded_video);
            this.video_recorder.saveData();
            console.log('save')
        },
        processRecordedVideo(file) {
            this.recorded_video = file; 
            console.log(this.recorded_video);
        },
        replay(){ 
            let co_vid = document.querySelector('#course-video-1')
            co_vid.style.display = 'block';
            this.nam = 2 ;
            this.count_over = false;
            this.startPractice();
        },
        newVideoUpload(){
            let e = this.recorded_video
            console.log(e)
            this.handleVideoUpload(e);
        },
        async handleVideoUpload(e) {
            this.video_result = {};
            this.play_assay = false;
            this.is_loading = true;
            let send_user_id = '0000'
            // if(this.user.user_id) {
            //     send_user_id = this.user.user_id
            // }
            var data = await this.$poseUpload(e,send_user_id,'yoga_27','zh-tw')
            console.log(data.status)
            if(!data) {
                alert('網路錯誤')
                this.is_loading = false;
            } else if(data.status == 102) {  
                let timeout_limit = 0;
                let get_result_interval = setInterval(() => {
                axios.post('/apis/get-pose-result',{user_id:send_user_id,pose_id:"yoga_27",createdAt:data.createdAt})
                    .then((response) => {
                        console.log(response.data.result.status)
                        if (response.data.result.status == 200) {
                            console.log(response.data.result);
                            this.video_result = response.data.result;
                            // this.use_count++
                            // localStorage['use_count'] = this.use_count
                            clearInterval(get_result_interval);
                        } else if(response.data.result.status == 102) { 
                            console.log("還沒跑完");
                        } else if(response.data.result.status == 204) {
                            if(response.data.result.error_code == -1) {
                                console.log(response)
                                this.need_resee = true;
                                this.errorText = '動作做錯囉！讓我們再複習一次！';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-1.png';
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -5) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請勿超過一人以上入鏡';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-5.png';
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -6) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '沒有偵測到人';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-6.png';
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -7) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請將身體從正面轉到側面拍攝';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-7.png';
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -8) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請將身體從側面轉到正面拍攝';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-8.png';
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -9) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請將手機從橫式轉成直式拍攝';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-9.png';
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -10) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請將手機從直式轉成橫式拍攝';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-10.png';
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -11) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '無法偵測動作過程<br>注意是否倒影入鏡或穿著過於寬鬆';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-11.png';
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            }  else {
                                console.log("未偵測到動作");
                                alert('動きを検知できません')
                                this.is_loading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            }
                            
                        } else if(response.data.result.status == 404){
                            console.log("網路錯誤");
                            alert('網路錯誤')
                            this.is_loading = false;
                            clearInterval(get_result_interval);
                            clearInterval(id);
                        } else {
                            alert('上傳時遇到網路不穩定\n保持網路穩定，讓我們再練習一次')
                            console.log(response);
                            this.is_loading = false;
                            clearInterval(get_result_interval);
                            clearInterval(id);
                        }
                    })
                    .catch((error) => {
                        console.log("fail");
                        alert('上傳時遇到網路不穩定\n保持網路穩定，讓我們再練習一次')
                        this.is_loading = false;
                        clearInterval(get_result_interval);
                        clearInterval(id);
                    })
                    timeout_limit += 1;
                    if (timeout_limit >=100) {
                        console.log("上傳時遇到網路不穩定\n保持網路穩定，讓我們再練習一次");
                        clearInterval(get_result_interval);
                        clearInterval(id);
                    }
                }, 3000);
                console.log('上傳成功');
                let bar = document.getElementById('bar');
                let width = 0;
                let id = setInterval(()=>{
                    if("reps_wrong_tags" in this.video_result) {
                        width = 100
                        document.getElementById('bar').style.width = width+'%';
                        this.show_value = width + '%'
                        this.play_assay = true
                        console.log(this.video_result.reps_wrong_tags)
                        clearInterval(id)

                        for(var i =0; i< this.video_result.reps_wrong_tags.length; i++){
                            for(var j = 0; j<this.video_result.reps_wrong_tags[i].length; j++){
                                if(this.video_result.reps_wrong_tags[i][j] == "1") this.video_result.reps_wrong_tags[i][j] = "不要聳肩";
                                else if (this.video_result.reps_wrong_tags[i][j] == "2") this.video_result.reps_wrong_tags[i][j] = "身體太往前";
                                else if (this.video_result.reps_wrong_tags[i][j] == "3") this.video_result.reps_wrong_tags[i][j] = "身體太往後";
                                else if (this.video_result.reps_wrong_tags[i][j] == "4") this.video_result.reps_wrong_tags[i][j] = "用背部出力會更好";
                                else if (this.video_result.reps_wrong_tags[i][j] == "5") this.video_result.reps_wrong_tags[i][j] = "手臂不彎曲";
                                else if (this.video_result.reps_wrong_tags[i][j] == "6") this.video_result.reps_wrong_tags[i][j] = "抬手不完全";
                                else if (this.video_result.reps_wrong_tags[i][j] == "7") this.video_result.reps_wrong_tags[i][j] = "更往上伸展";
                                else if (this.video_result.reps_wrong_tags[i][j] == "8") this.video_result.reps_wrong_tags[i][j] = "屁股離地了";
                                else if (this.video_result.reps_wrong_tags[i][j] == "0") this.video_result.reps_wrong_tags[i][j] = "姿勢正確";
                            }
                        }
                    } else {
                        if(width <=95) width++;
                        document.getElementById('bar').style.width = width+'%';
                        this.show_value = width + '%'
                    }
                },400)
            } else {
                console.log(data.status)
                alert('Network error')
            }
        },
        changeArticle(){
            let x = 0;
            x = Math.floor(Math.random()*10)
            if (this.last_article_id == ''){
                this.last_article_id = x
                this.post_article = this.articles[x].post_article
                // console.log(x)
            }
            else{
                while(this.last_article_id == x){
                    x = Math.floor(Math.random()*10)
                }
                this.last_article_id = x
                this.post_article = this.articles[x].post_article
                // console.log(x)
            }
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
    /* transform: scaleX(-1); */
    /* width: 100vw; */
    height: 100vh;
    overflow: hidden;
}
.preview-img {
    /* width: 100vh;
    height: 100%; */
    /* background: rgba(0,0,0,.5); */
    transform: rotate(90deg);
    position: fixed;
    top: 30vh;
    left: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_action_preview.png'); */
}
.preview-img div {
    color: #fff;
    font-size: 120px;
    position: fixed;
    top: -20px;
    left: 45vh;
}
.preview-img img {
    height: 90vw;
}
#inputVideo {
    transform: scaleX(-1);
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
    width: 25vw;
    height: 7vh;
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
    font-size: 20px;
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
#show-course-video,#course-video-1,
#course-video-2, #course-video-3 {
    transform: rotate(90deg);
        width: 100vh;
}
#repeat-nam {
    position: absolute;
    z-index: 101;
    transform: rotate(90deg);
    color: #fff;
    font-size: 45px;
    bottom: 5vh;
    right: 10vw;
}
.repeat-bar {
    height: 75vw;
    width: 60px;
    position: absolute;
    top: -10vh;
    z-index: 101;
    transform: rotate(90deg);
    padding-top: 50vw; 
    transition: 6s ease 1s;
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
    height: 27vh;
    background: rgb(255, 255, 255,.5);
    z-index: 101;
    position: relative;
    margin: 3vh 0;
    /* left: 5vw; */
    border-radius: 20px;
}
#video-process-bar-inside-1,#video-process-bar-inside-2,
#video-process-bar-inside-3{
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





/* 上傳影片的部分 */
.cancel-box {
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cancel-box img {
    width: 65%;
}
.mamiyoga-assay-contact-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #9BAEB2;
    color: #fff;
    cursor: pointer;
}
.loading-bar {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: fixed;
    top: 0;
    z-index: 999;
}
.bar-back {
    width: 80%;
    height: 30px;
    background:#BFBDBD;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
#bar-container {
    width: 70%;
    height: 15px;
    background-color: #ddd; 
    border-radius: 15px;
}
#bar {
    width: 1%;
    height: 15px;
    background-color: #24798F;
    border-radius: 15px;
}   
.mamiyoga-show-article {
    width: 80vw;
    max-width: 360px;
    height: 300px;
    background: white;
    border-radius: 20px;
    color:#8699A0;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin: 0 auto;
    position: relative;
    padding: 0 15px;
}
.see-assay-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    background: #24798F;
    color: #fff;
    border-style: none;
    font-size: 14px;
    cursor: pointer;
}
</style>