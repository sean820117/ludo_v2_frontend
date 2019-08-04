<template>
    <div>
        <div class="boxing-experience-page" v-if="!is_loaded && !open_explain">
            <course-back-header headerTitle="体验练习" bgColor="#FF2D51" family="MFLiHei_Nocom"
            backImg="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/boxing-back.png" 
            titleColor="#FFF" ftColor="#FFF"></course-back-header>
            <div class="teach-title-video-box">
                <video id="experience" class="mamiyoga-course-video-try" @click="is_opened = true"
                preload="auto" poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/boxing-video-preview.jpg">
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <!-- <vue-plyr @click="is_opened = true">
                    <video poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-preview-1.jpg" src="video.mp4" id="course-video">
                        <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-video-1.mp4" type="video/mp4" size="720">
                        <source src="video-1080p.mp4" type="video/mp4" size="1080">
                        <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
                    </video>
                </vue-plyr> -->
                <div class="boxing-course-info" v-if="!is_opened">
                    <div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/boxing-photoby-1.png" alt="">
                    </div>
                    <div>
                        <!-- <h3>{{course_title}}</h3> -->
                        <h3>拳击基本姿势</h3>
                        <p>建议拍摄时间：20-45秒</p>
                    </div>
                </div>
                <div class="teach-question-box" @click="open_explain = true">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-question-btn.png" alt="">
                </div>
            </div>
            <div class="teach-detail-box">
                <h6>姿势步骤</h6>
                <!-- <div class="teach-content-text">
                    <div class="teach-content-li" :key="i"
                    v-for="(description,i) in course_descriptions">
                        <p class="boxing-try-content-num">{{i+1}}</p>
                        <p>{{description}}</p>
                    </div>
                </div> -->
                <div class="teach-content-text">
                    <div class="teach-content-li">
                        <p class="boxing-try-content-num">1</p>
                        <p>抱紧双拳，紧靠脸颊</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="boxing-try-content-num">2</p>
                        <p>想像耳朵旁边有一条尼龙线</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="boxing-try-content-num">3</p>
                        <p>利用腰部与脚，带动上半身闪躲尼龙线</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="boxing-try-content-num">4</p>
                        <p>保持核心姿势，肩膀保护脸颊</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="boxing-try-content-num">5</p>
                        <p>重复3~5回</p>
                    </div>
                </div>
                <div class="teacher-remind">
                    <router-link to="/boxing/about">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/boxing-teacher-remind.png" alt="">
                    </router-link>
                    <div class="teacher-remind-content">
                        <p style="color:#FF2D51;">徐灿老师贴心叮咛</p>
                        <p>尽量将力气集中在腰部，如果动作做起来有点吃力的同学，可以把毛巾卷起来放进腰下。</p>
                    </div>
                </div>
                
                <button class="boxing-experience-assay-btn" v-if="!is_shown_remind"  @click="openRemind()">开 始 练 习</button>
                <button class="boxing-experience-assay-btn" v-else>
                    <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="handleVideoUpload">开 始 练 习</label>  
                </button>
            </div>
            <div class="before-remind" :class="showRemindBox" >
                <course-remind-box @closeRemind="closeRemind()" bdColor="#FF2D51">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/boxing-remind.png" alt="" style="margin-top: 50px;">
                    <p style="color:#FF2D51;font-size:13px;font-weight:500;">我们将记录您的动作<br>并交给AI助教分析</p>
                    <div class="star-line-box">
                        <button class="boxing-experience-remind-btn"  style="width:60px;height:30px;letter-space:0;margin-top:45px">
                            <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="beforeRemind">好</label>  
                        </button>
                    </div>
                </course-remind-box>
            </div>
        </div>
        <!-- <mommiyoga-teach-assay @handleRetryEvent="handleRetryEvent" :show_record_btn="false"
        @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mommiyoga-teach-assay> -->
        <course-assay-video backImg="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/boxing-back.png" 
        @handleRetryEvent="handleRetryEvent" :show_record_btn="false" @closeAssayWindow="closeAssayWindow" 
        v-if="is_loaded" :video_result="video_result"
        ></course-assay-video>
        <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div>
        <course-explain-block v-if="open_explain" @closeExplain="closeExplain" backColor="#272727"></course-explain-block>
    </div>
</template>

<script>
import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import CourseBackHeader from '~/components/all/CourseBackHeader.vue';
import CourseRemindBox from '~/components/all/CourseRemindBox.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import CourseAssayVideo from '~/components/all/CourseAssayVideo.vue';
import CourseExplainBlock from '~/components/all/CourseExplainBlock.vue';

import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import 'vue-plyr/dist/vue-plyr.css'
Vue.use(VuePlyr)
export default {
    
    layout: 'boxing',
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
        CourseBackHeader,
        CourseRemindBox,
        CourseExplainBlock,
        MamiyogaBtn,
        Loading,
        CourseAssayVideo,
        
        
    },
    // async mounted() {
    //     if (process.client) {
    //         this.courses = await require('~/config/mommiyoga-course');
    //         this.course_title = this.courses[7].title;
    //         this.course_descriptions = this.courses[7].pose_description;
    //     }
    // },
    methods: {
        async handleVideoUpload(e) {
            this.isLoading = true;
            var data = await this.$poseUpload(e.target.files[0],"0002",'yoga_6','zh-cn')
            if(!data) {
                alert('網路錯誤')
            } else if(data.status == 102) {    
                // for(var i =0; i< data.reps_wrong_tags.length; i++){
                //     for(var j = 0; j<data.reps_wrong_tags[i].length; j++){
                //         if(data.reps_wrong_tags[i][j] == "1") data.reps_wrong_tags[i][j] = "摆动过小";
                //         else if (data.reps_wrong_tags[i][j] == "2") data.reps_wrong_tags[i][j] = "摆动过大";
                //         else if (data.reps_wrong_tags[i][j] == "0") data.reps_wrong_tags[i][j] = "姿势正确";
                //     }
                // }   
                let timeout_limit = 0;
                let get_result_interval = setInterval(() => {
                axios.post('/apis/get-pose-result',{user_id:"0002",pose_id:"yoga_6",createdAt:data.createdAt})
                    .then((response) => {
                        if (response.data.result.status == 200) {
                            console.log(response.data.result);
                            this.video_result = response.data.result;
                            this.isLoading = false;
                            this.is_loaded = true;
                            clearInterval(get_result_interval);
                        } else if(response.data.result.status == 102) {
                            console.log("還沒跑完");
                        } else if(response.data.result.status == 204) {
                            console.log("未偵測到動作");
                            clearInterval(get_result_interval);
                        } else {
                            console.log(response);
                            clearInterval(get_result_interval);
                        }
                    })
                    .catch((error) => {
                        console.log("fail");
                        clearInterval(get_result_interval);
                    })
                    timeout_limit += 1;
                    if (timeout_limit >=100) {
                        console.log("unknown error, contact developers~");
                        clearInterval(get_result_interval);
                    }
                }, 3000);
                console.log('上傳成功');
            } else {
                alert('Network error')
            }

            
            
            
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
        closeRemind(){
            this.show_remind = false;
        }
    },
    computed: {
        showRemindBox(){
            return this.show_remind ? 'open':'';
        },
    },
    
    

}
</script>

<style>
video[poster]{
    object-fit: cover;
}
.boxing-experience-page {
    width: 100vw;
    min-height: 100vh;
    /* background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA); */
    background-color: #FFF;
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
.boxing-course-info {
    width: 90vw;
    height: 75px;
    position: absolute;
    top: 23vh;
    margin-left: 5vw;
}
.boxing-course-info div:first-child img {
    height: 62px;
    width: 45px;
    float: left;
    /* background-repeat: no-repeat;
    background-image: url('/mamiyoga/teach-photoby.svg');
    background-position: center center; */
}
.boxing-course-info div:last-child {
    float: left;
    padding: 12px 0 0 5px;
} 
.boxing-course-info h3 {
    color: #FF2D51;
    font-size: 22px;
    font-family: 'MFLiHei_Nocom';
    font-weight: 400;
    letter-spacing: 2px;
}
.boxing-course-info p {
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
.boxing-try-content-num {
    border-radius: 30px;
    background-color: #FF2D51;
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
.boxing-experience-assay-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    display: block;
    margin: 3vh auto 0;
    border-style: none;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #FF2D51;
    color: #fff;
    cursor: pointer;
    font-family: 'MFLiHei_Nocom';
}
.boxing-experience-assay-btn label {
    cursor: pointer;
}
.vld-overlay .vld-background {
    background-color:black;
}
.vld-icon svg {
    stroke: #DCD8CF;
}
.boxing-experience-page .before-remind {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,.2);
    z-index: 999;
    display: none;
}
.boxing-experience-page .before-remind.open {
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
.boxing-experience-remind-btn {
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
    background: #FF2D51;
    color: #fff;
}
.boxing-experience-remind-btn label {
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
    .boxing-experience-page {
        width: 100%;
    }
    .mamiyoga-course-video-try {
        width: 450px;
        height: 330px;
    }
    .boxing-course-info {
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
    .boxing-course-info {
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
