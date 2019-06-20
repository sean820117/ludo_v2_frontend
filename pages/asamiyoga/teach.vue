<template>
    <div>
        <div class="asami-teach-page" v-if="!is_loaded && !open_explain">
            <mamiyoga-teach-header headerTitle="体验练习" btnText="密码登录" bgColor="#9BAEB2" ftColor="#FFF" nextTo="/asamiyoga"></mamiyoga-teach-header>
            <div class="teach-title-video-box">
                <div class="asamiyoga-teach-course-info">
                    <div></div>
                    <div>
                        <h3>改善疼痛症状的腰部伸展</h3>
                        <p>拍摄时间建议：20-45秒</p>
                    </div>
                </div>
                <div class="teach-question-box" @click="open_explain = true">
                    <img src="/asamiyoga/teach-question-btn.svg" alt="">
                </div>
            </div>
            <div class="asami-teach-detail-box">
                <h6>姿势步骤</h6>
                <div class="asami-teach-content-text">
                    <div class="asami-teach-content-li">
                        <img src="/asamiyoga/num/num01.svg" alt="">
                        <p>我们正躺，望向天花板</p>
                    </div>
                    <div class="asami-teach-content-li">
                        <img src="/asamiyoga/num/num02.svg" alt="">
                        <p>把左膝抬高，两手抱膝</p>
                    </div>
                    <div class="asami-teach-content-li">
                        <img src="/asamiyoga/num/num03.svg" alt="">
                        <p>双掌托住膝盖，将腿往外拉开，直到能尽量伸直手臂</p>
                    </div>
                    <div class="asami-teach-content-li">
                        <img src="/asamiyoga/num/num04.svg" alt="">
                        <p>现在，将右脚抬起，慢慢从垫子伸起来</p>
                    </div>
                    <div class="asami-teach-content-li">
                        <img src="/asamiyoga/num/num05.svg" alt="">
                        <p>让脚跟尽量画大圆弧形，越大越好，再慢慢地放下</p>
                    </div>
                    <div class="asami-teach-content-li">
                        <img src="/asamiyoga/num/num06.svg" alt="">
                        <p>重复这个动作3~5次，让腰部有一点点拱起来，呈现一个圆弧型</p>
                    </div>
                    <div class="asami-teach-content-li">
                        <img src="/asamiyoga/num/num07.svg" alt="">
                        <p>然后，换边也进行一样的动作</p>
                    </div>
                </div>
                <div class="asami-teacher-remind">
                    <img src="/asamiyoga/teach-teacher-remind.svg" alt="">
                    <div class="asami-teacher-remind-content">
                        <p style="color:#8699A0;">麻美老师贴心叮咛</p>
                        <p>尽量将力气集中在腰部，如果动作做起来有点吃力的同学，可以把毛巾卷起来放进腰下。</p>
                    </div>
                </div>
                <!-- <mamiyoga-btn btnText="講師介紹" bgColor="#EEEFEA" ftColor="#6E6E6E" style="margin-top:5vh;margin-bottom:15px" class="teach-upload"></mamiyoga-btn> -->
                <button class="asami-teach-assay-btn" v-if="!is_shown_remind" @click="openRemind()">上传影片</button>
                <button class="asami-teach-assay-btn" v-else>
                    <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="handleVideoUpload">上传影片</label>  
                </button>
            </div>
            <div class="asami-before-remind" v-if="show_remind">
                <div class="asamiyoga-assay-contact-back" >
                    <div class="mamiyoga-assay-contact-open">
                        <div class="cancel-box" @click="show_remind = false">
                            <img src="/asamiyoga/cancel.svg" alt="" >
                        </div>
                        <img src="/asamiyoga/teach-remind.svg" alt="" style="margin-top: 70px;">
                        <p style="color:#8699A0;font-size:13px;">我们将记录您的动作<br>并交给AI团队分析</p>
                        <div class="star-line-box">
                            <button class="mamiyoga-assay-contact-btn"  style="width:60px;height:30px;letter-space:0;margin-top:45px">
                                <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="beforeRemind">好</label>  
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent" @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video>
        <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div>
         <mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box>
    </div>
</template>

<script>

import MamiyogaTeachHeader from '~/components/asamiyoga/MamiyogaTeachHeader.vue';
import MamiyogaCourseBlock from '~/components/asamiyoga/MamiyogaCourseBlock.vue';
import MamiyogaBtn from '~/components/asamiyoga/MamiyogaBtn.vue';
import MamiyogaAssayVideo from '~/components/asamiyoga/MamiyogaAssayVideo.vue';
import MamiyogaExplainBox from '~/components/asamiyoga/MamiyogaExplainBox.vue';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    // layout: "mamiyoga",
    // data(){
    //     return {
            
    //     }
    // },
    data:()=> ({
        is_loaded: false,
        isLoading: false,
        fullPage: true,
        video_result: {},
        is_shown_remind: false,
        show_remind: false,
        open_explain: false,
    }),
    components: {
        MamiyogaTeachHeader,
        MamiyogaCourseBlock,
        MamiyogaBtn,
        Loading,
        MamiyogaAssayVideo,
        MamiyogaExplainBox,
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
                  if(res.data.reps_wrong_tags[i][j] == "y_6_1") res.data.reps_wrong_tags[i][j] = "膝蓋彎曲";
                  else if (res.data.reps_wrong_tags[i][j] == "y_6_2") res.data.reps_wrong_tags[i][j] = "膝蓋彎曲";
                  else if (res.data.reps_wrong_tags[i][j] == "y_6_3") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
                  else if (res.data.reps_wrong_tags[i][j] == "y_6_4") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
                  else if (res.data.reps_wrong_tags[i][j] == "y_6_5") res.data.reps_wrong_tags[i][j] = "軸心不穩";
                  else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿势正确";
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
        }
        // goToAssay(){
        //     this.isLoading = true;
        //     setTimeout(()=>{
        //         
        //     },3000)
            
        //     // return console.log('YA');
        // },
    }
}
</script>

<style>
@media (max-width:899px) {
    .asami-teach-page {
        width: 100vw;
        min-height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    }
    .asami-teach-page .asamiyoga-teach-header-title h3 {
        padding-left: 25px; 
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
        height: 40vh;
        position: absolute;
        top: 0;
        background-image: url('/asamiyoga/teach-title-img.png'); 
        z-index: 0;
    }
    .asami-teach-page .asamiyoga-teach-course-info {
        width: 90vw;
        height: 75px;
        position: absolute;
        top: 23vh;
        margin-left: 5vw;
    }
    .asamiyoga-teach-course-info div:first-child {
        height: 73px;
        width: 55px;
        float: left;
        background-repeat: no-repeat;
        background-image: url('/asamiyoga/teach-photoby-1.svg');
        background-position: center center;
    }
    .asamiyoga-teach-course-info div:last-child {
        float: left;
        padding: 15px 0 0 10px;
    } 
    .asami-teach-page .asamiyoga-teach-course-info h3 {
        color: #ECEDE8;
        font-size: 1.2em;
    }
    .asamiyoga-teach-course-info p {
        color: #ecede8;
        font-size:14px;
        margin-top: 4px;
    }
    .teach-question-box {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 33vh;
        right: 6vw;
    }
    .asami-teach-detail-box {
        width: 100vw;
        margin-top: 35vh; 
        padding-bottom: 5vh;
    }
    .asami-teach-detail-box h6 {
        font-size: 14px;
        color: #000;
        font-weight: 400;
        padding-left: 15px; 
    }
    .asami-teach-content-text {
        font-weight: 400;
        font-size: 12px;
        color: #707070;
        padding-top: 10px;
    }
    .asami-teach-content-li {
        width: 85vw;
        min-height: 25px;
        /* background: red; */
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
    }
    .asami-teach-content-li img {
        width: 20px;
        height: 15px;
        float: left;
        margin: 2px 2px 0 0; 
    }
    .asami-teach-content-li p {
        float: left;
        margin-left: 4px; 
    }
    .asami-teacher-remind {
        width: 85vw;
        margin: 10vh auto 0;
        display: flex;
        align-items: center;
    }
    .asami-teacher-remind img {
        float: left;
        margin-right: 2vw; 
    }
    .asami-teacher-remind-content {
        float: left;
        width: 65vw;
        font-size: 12px; 
        color: #5A5A5A;
    }
    .asami-teach-assay-btn {
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
    }
    .vld-overlay .vld-background {
        background-color:black;
    }
    .vld-icon svg {
        stroke: #DCD8CF;
    }
    .asami-before-remind {
        width: 100vw;
        min-height: 100vh;
        position: fixed;
        top: 0;
        background: rgba(0,0,0,.2);
    }
    .asami-before-remind .asamiyoga-assay-contact-back {
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .asami-before-remind .mamiyoga-assay-contact-open {
        width: 260px;
        height: 330px;
        background: white;
        margin: 25vh auto;
        border-radius: 20px;
        padding: 15px;
    }
    .asami-before-remind .cancel-box {
        /* background: red; */
        height: 30px;
        width: 30px;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .asami-before-remind .cancel-box img {
        width: 65%;
    }
    .asami-before-remind .mamiyoga-assay-contact-open p {
        color: #707070;
        text-align: center;
        font-size: 12px;
        margin: 30px 0 10px;
    }
    .asami-before-remind .mamiyoga-assay-contact-open img {
        display: block;
        margin: 0 auto;
        width: 50%;
    }
    .asami-before-remind .mamiyoga-assay-contact-btn {
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
}
</style>
