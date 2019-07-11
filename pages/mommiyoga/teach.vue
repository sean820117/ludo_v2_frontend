<template>
    <div>
        <div class="teach-page" v-if="!is_loaded && !open_explain">
            <mommiyoga-login-header headerTitle="体验练习" bgColor="#9BAEB2" ftColor="#FFF"></mommiyoga-login-header>
            <div class="teach-title-video-box" @click="is_opened = true">
                <!-- <video id="experience" class="mamiyoga-course-video-try" @click="is_opened = true"
                preload="auto" poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-preview-1.jpg">
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-video-1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video> -->
                <vue-plyr >
                    <video poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-preview-1.jpg" src="video.mp4" id="course-video">
                        <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-video-1.mp4" type="video/mp4" size="720">
                        <source src="video-1080p.mp4" type="video/mp4" size="1080">
                        <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
                    </video>
                </vue-plyr>
                <div class="teach-course-info" v-if="!is_opened">
                    <div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mommiyoga-teach-photoby-1.png" alt="">
                    </div>
                    <div>
                        <h3>{{course_title}}</h3>
                        <p>拍摄时间建议：20-45秒</p>
                    </div>
                </div>
                <div class="teach-question-box" @click="open_explain = true">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-question-btn.png" alt="">
                </div>
            </div>
            <div class="teach-detail-box">
                <h6>姿势步骤</h6>
                <div class="teach-content-text">
                    <div class="teach-content-li" :key="i"
                    v-for="(description,i) in course_descriptions">
                        <p class="teach-content-num">{{i+1}}</p>
                        <p>{{description}}</p>
                    </div>


                    <!-- <div class="teach-content-li">
                        <p class="teach-content-num">1</p>
                        <p>我们正躺，望向天花板</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">2</p>
                        <p>把左膝抬高，两手抱膝</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">3</p>
                        <p>双掌托住膝盖，将腿往外拉开，直到能尽量伸直手臂</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">4</p>
                        <p>现在，将右脚抬起，慢慢从垫子伸起来</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">5</p>
                        <p>让脚跟尽量画大圆弧形，越大越好，再慢慢地放下</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">6</p>
                        <p>重复这个动作3~5次，让腰部有一点点拱起来，呈现一个圆弧型</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">7</p>
                        <p>然后，换边也进行一样的动作</p>
                    </div> -->
                </div>
                <div class="teacher-remind">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-teacher-remind.png" alt="">
                    <div class="teacher-remind-content">
                        <p style="color:#8699A0;">麻美老师贴心叮咛</p>
                        <p>尽量将力气集中在腰部，如果动作做起来有点吃力的同学，可以把毛巾卷起来放进腰下。</p>
                    </div>
                </div>
                
                <button class="teach-assay-btn" v-if="!is_shown_remind"  @click="openRemind()">上传影片</button>
                <button class="teach-assay-btn" v-else>
                    <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="handleVideoUpload">上传影片</label>  
                </button>
            </div>
            <div class="before-remind" :class="showRemindBox" >
                
                <mamiyoga-window-alert-box>
                    <div class="cancel-box" @click="show_remind = false">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="" >
                    </div>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-remind.png" alt="" style="margin-top: 50px;">
                    <p style="color:#8699A0;font-size:13px;">我们将记录您的动作<br>并交给AI助教分析</p>
                    <div class="star-line-box">
                        <button class="mamiyoga-assay-contact-btn"  style="width:60px;height:30px;letter-space:0;margin-top:45px">
                            <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="beforeRemind">好</label>  
                        </button>
                    </div>
                </mamiyoga-window-alert-box>
            </div>
        </div>
        <mommiyoga-teach-assay @handleRetryEvent="handleRetryEvent" :show_record_btn="false"
        @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mommiyoga-teach-assay>
        <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div>
        <mommiyoga-explain-block v-if="open_explain" @closeExplain="closeExplain"></mommiyoga-explain-block>
    </div>
</template>

<script>
import Vue from 'vue'
import VuePlyr from 'vue-plyr'

import MommiyogaLoginHeader from '~/components/mamiyoga/MommiyogaLoginHeader.vue';
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MommiyogaTeachAssay from '~/components/mamiyoga/MommiyogaTeachAssay.vue';
import MommiyogaExplainBlock from '~/components/mamiyoga/MommiyogaExplainBlock.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import 'vue-plyr/dist/vue-plyr.css'
Vue.use(VuePlyr)
export default {
    
    layout: 'mommiyoga',
    data:()=> ({
        is_loaded: false,
        isLoading: false,
        fullPage: true,
        video_result: {},
        is_shown_remind: false,
        show_remind: false, 
        open_explain: false,
        is_opened:false,

        courses:[],
        course_title:'',
        course_descriptions:[],
    }),
    
    components: {
        MommiyogaLoginHeader,
        MamiyogaCourseBlock,
        MamiyogaBtn,
        Loading,
        MommiyogaTeachAssay,
        MommiyogaExplainBlock,
        MamiyogaWindowAlertBox,
    },
    async mounted() {
        if (process.client) {
            this.courses = await require('~/config/mommiyoga-course');
            this.course_title = this.courses[7].title;
            this.course_descriptions = this.courses[7].pose_description;
        }
    },
    methods: {
        async handleVideoUpload(e) {
            this.isLoading = true;
            let form = new FormData();
            form.append('file',e.target.files[0])
            form.append('pose_id','yoga_6')
            form.append('language','zh-tw')
            const res = await axios.post('/apis/video-upload',form)
            console.log(res.data)
            for(var i =0; i< res.data.reps_wrong_tags.length; i++){
              for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
                  if(res.data.reps_wrong_tags[i][j] == "1") res.data.reps_wrong_tags[i][j] = "膝盖弯曲";
                  else if (res.data.reps_wrong_tags[i][j] == "2") res.data.reps_wrong_tags[i][j] = "膝盖弯曲";
                  else if (res.data.reps_wrong_tags[i][j] == "3") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
                  else if (res.data.reps_wrong_tags[i][j] == "4") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
                  else if (res.data.reps_wrong_tags[i][j] == "5") res.data.reps_wrong_tags[i][j] = "轴心不稳";
                  else if (res.data.reps_wrong_tags[i][j] == "0") res.data.reps_wrong_tags[i][j] = "姿势正确";
              }
            }
            this.isLoading = false;
            console.log(res.data)
            this.reps_wrong_tags = res.data.reps_wrong_tags;
            this.video_result = res.data;
            this.is_loaded = true;
            // setTimeout(()=> {
            //     clearInterval(this.interval);
            //     this.is_uploading = false;
            //     this.value = 0;
            //     this.is_showing = true;
            // }, 1000)
            // setTimeout(()=> {
            //     this.$scrollTo('#result-box',"start");
            // },1500)
            // window.alert('Done');
        },
        handleRetryEvent(e){
            console.log("ok");
            this.is_loaded = false;
            this.handleVideoUpload(e);
        },
        closeAssayWindow(){
            this.is_loaded = false;
        },
        openRemind(){
            this.is_shown_remind = true;
            this.show_remind = true;
        },
        beforeRemind(e){
            this.show_remind = false;
            this.handleVideoUpload(e);
        },
        closeExplain(){
            this.open_explain = false;
        },
        // playVideo(){
        //     var vid = document.getElementById('course-video');
        //     vid.addEventListener('click',function(){
        //         window.alert('ok')
        //     })
        // }
    },
    computed: {
        showRemindBox(){
            return this.show_remind ? 'open':'';
        },
    },
    
    

}
</script>

<style>
.teach-page {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.teach-upload button {
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
}
.teach-title-box {
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 998;
}
.teach-title-box h6 {
    font-size: 14px;
    color: #97A8AF;
    text-align: center;
    font-weight: 400;
}
.teach-title-video-box {
    width: 100vw;
    height: 39vh;
    position: absolute;
    top: 0;  
    z-index: 0;
}
.teach-course-info {
    width: 90vw;
    height: 75px;
    position: absolute;
    top: 23vh;
    margin-left: 5vw;
}
.teach-course-info div:first-child img {
    height: 62px;
    width: 45px;
    float: left;
    /* background-repeat: no-repeat;
    background-image: url('/mamiyoga/teach-photoby.svg');
    background-position: center center; */
}
.teach-course-info div:last-child {
    float: left;
    padding: 12px 0 0 5px;
} 
.teach-course-info h3 {
    color: #ECEDE8;
    font-size: 1.2em;
}
.teach-course-info p {
    color: #ecede8;
    font-size:14px;
    margin-top: 4px;
}
.teach-question-box {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 31vh;
    right: 6vw;
}
.teach-question-box img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.teach-detail-box {
    width: 100vw;
    margin-top: 35vh;
    padding-bottom: 5vh;
}
.teach-detail-box h6 {
    font-size: 14px;
    color: #000;
    font-weight: 400;
    padding-left: 15px; 
}
.teach-content-text {
    font-weight: 400;
    font-size: 12px;
    color: #707070;
    padding-top: 10px;
}
.teach-content-li {
    width: 85vw;
    min-height: 25px;
    /* background: red; */
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
}
.teach-content-num {
    border-radius: 30px;
    background-color: #97a9af;
    text-align: center;
    color: white;
    padding: 1px 5px;
    font-size: 12px;
}
.teach-content-li img {
    width: 20px;
    height: 15px;
    float: left;
    margin: 2px 2px 0 0; 
}
.teach-content-li p {
    float: left;
    margin-left: 4px; 
}
.teacher-remind {
    width: 85vw;
    margin: 2vh auto 0;
    display: flex;
    align-items: center;
}
.teacher-remind img {
    float: left;
    margin-right: 2vw; 
}
.teacher-remind-content {
    float: left;
    width: 65vw;
    font-size: 12px; 
    color: #5A5A5A;
}
.teach-assay-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 3vh auto 0;
    border-style: none;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #97A8AF;
    color: #fff;
    cursor: pointer;
}
.teach-assay-btn label {
    cursor: pointer;
}
.vld-overlay .vld-background {
    background-color:black;
}
.vld-icon svg {
    stroke: #DCD8CF;
}
.teach-page .before-remind {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,.2);
    z-index: 999;
    display: none;
}
.teach-page .before-remind.open {
    display: block;
}
.mamiyoga-assay-contact-back {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
}
.mamiyoga-assay-contact-open {
    width: 260px;
    height: 330px;
    background: white;
    margin: 25vh auto;
    border-radius: 20px;
    padding: 15px;
}
.cancel-box {
    /* background: red; */
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.cancel-box img {
    width: 65%;
}
.mamiyoga-assay-contact-open p {
    color: #707070;
    text-align: center;
    font-size: 12px;
    margin: 30px 0 10px;
}
.mamiyoga-assay-contact-open img {
    display: block;
    margin: 0 auto;
    width: 50%;
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
}
.mamiyoga-assay-contact-btn label {
    cursor: pointer;
}
.mamiyoga-course-video-try {
    width: 100vw;
    height: 41vh;
}

.plyr--video,.plyr audio, .plyr video {
    height: 41vh;
}
/* .mamiyoga-each-course video[poster] {
    object-fit: cover;
} */
.teacher-remind img {
    width: 50px;
}
.plyr--video .plyr__controls {
    padding-top: 0;
}
@media (min-width:769px) {
    .teach-page {
        width: 100%;
    }
    .mamiyoga-course-video-try {
        width: 450px;
        height: 330px;
    }
    .teach-course-info {
        width: 400px;
        top: 210px;
        margin-left: 30px; 
    }
    .teach-title-video-box {
        height: auto;
        width: 450px;
    }
    .teach-detail-box {
        width: 100%;
        margin-top: 280px;
    }
    .teach-content-text {
        padding: 10px 30px;
    }
    .teacher-remind {
        width: 100%;
        margin: 25px auto 0;
        padding: 0 35px;
    }
    .teach-question-box {
        top: 250px;
        right: 30px;
    }
    .plyr--video,.plyr audio, .plyr video {
        height: 330px;
    }
}

@media (max-width: 769px) and  (orientation:landscape) {
    .mamiyoga-course-video-try {
        height: 60vh;
    }
    .teach-course-info {
        top: 38vh;
    }
    .teach-question-box {
        top: 45vh;
    }
    .teach-detail-box {
        margin-top: 50vh; 
    }
    .plyr--video,.plyr audio, .plyr video {
        height: 63vh;
    }
}
</style>
