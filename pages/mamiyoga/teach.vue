<template>
    <div>
        <div class="teach-page" v-if="!is_loaded && !open_explain">
            <mamiyoga-teach-header :headerTitle="$t('teach_title')" btnText="登入" bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox"></mamiyoga-teach-header>
            <!-- <mamiyoga-teach-header :headerTitle="$t('teach_title')" btnText="登入" bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox" v-if="is_beta" :is_beta="true"></mamiyoga-teach-header> -->
            <div class="teach-title-video-box">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-teach-sample.gif" alt="瑜伽動作" class="teach-video-sample">
                <div class="teach-course-info">
                    <div :style="{backgroundImage:'url('+$t('teach_photoby_2')+')'}"></div>
                    <div>
                        <h3>{{course_title}}</h3>
                        <p v-html="$t('teach_text_time')"></p>
                    </div>
                </div>
                <div class="teach-question-box" @click="open_explain = true">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-question-btn.png" alt="唐幼馨">
                </div>
            </div>
            <div class="teach-detail-box">
                <h6>{{$t('teach_tip_title')}}</h6>
                <div class="teach-content-text">
                    <div class="teach-content-li" :key="i"
                    v-for="(description,i) in course_descriptions">
                        <p class="teach-content-num">{{i+1}}</p>
                        <p>{{description}}</p>
                    </div>
                </div>
                <!-- <div class="teach-content-text">
                    <div class="teach-content-li">
                        <p class="teach-content-num">1</p>
                        <p>我們正躺，望向天花板</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">2</p>
                        <p>把左膝抬高，兩手抱膝</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">3</p>
                        <p>雙掌托住膝蓋，將腿往外拉開，直到能盡量伸直手臂</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">4</p>
                        <p>現在，將右腳抬起，慢慢從墊子伸起來</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">5</p>
                        <p>讓腳跟盡量畫大圓弧形，越大越好，再慢慢地放下</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">6</p>
                        <p>重複這個動作3~5次，讓腰部有一點點拱起來，呈現一個圓弧型</p>
                    </div>
                    <div class="teach-content-li">
                        <p class="teach-content-num">7</p>
                        <p>然後，換邊也進行一樣的動作</p>
                    </div>
                </div> -->
                <div  style="margin:2vh 0 1vh;display:flex;align-items:center;">
                    <router-link :to="goAbout+'/mamiyoga/about'">
                        <h6 style="float:left;">{{$t('about_first_title')}}</h6><p style="color:#97A8AF;float:left;line-height:20px;">&nbsp;>></p>
                    </router-link>
                </div>
                <div class="teacher-remind">
                    <router-link :to="goAbout+'/mamiyoga/about'">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-teacher-remind-new.png" alt="瑜珈">
                    </router-link>
                    <div class="teacher-remind-content">
                        <p style="color:#8699A0;">{{$t('teach_teacher_remind')}}</p>
                        <p>{{$t('teach_teacher_remind_content')}}</p>
                    </div>
                </div>
                <!-- <mamiyoga-btn btnText="講師介紹" bgColor="#EEEFEA" ftColor="#6E6E6E" style="margin-top:5vh;margin-bottom:15px" class="teach-upload"></mamiyoga-btn> -->
                <div v-if="!is_beta">
                    <button class="teach-assay-btn" v-if="!is_shown_remind"  @click="openRemind()">{{$t('teach_button_upload')}}</button>
                    <button class="teach-assay-btn" v-else>
                        <label style="width:135px;height:35px;display:flex;align-items:center;justify-content:center;cursor:pointer;"><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="handleVideoUpload">{{$t('teach_button_upload')}}</label>  
                    </button>
                </div>
                <div v-if="is_beta">
                    <button class="teach-assay-btn" @click="openRemind()">{{$t('teach_button_upload')}}</button>
                </div>
            </div>
            <div class="before-remind" :class="showRemindBox" >
                <mamiyoga-window-alert-box v-if="!is_beta">
                    <div class="cancel-box" @click="show_remind = false">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="" >
                    </div>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-remind.png" alt="" style="margin-top: 70px;">
                    <p style="color:#8699A0;font-size:13px;width:190px;margin:30px auto 10px;" v-html="$t('teach_remind_text')"></p>
                    <div class="star-line-box">
                        <button class="mamiyoga-assay-contact-btn"  style="width:90px;height:30px;letter-space:0;margin-top:25px;cursor:pointer;" @click="open_explain = true">
                            {{$t('teach_button_ok')}}
                            <!-- <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="beforeRemind">{{$t('teach_button_ok')}}</label>   -->
                        </button>
                    </div>
                </mamiyoga-window-alert-box>
                <mamiyoga-window-alert-box v-if="is_beta" class="beta-input-box">
                    <div class="cancel-box" @click="show_remind = false">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="肚皮舞" >
                    </div>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="有氧舞蹈" style="margin-top: 5px;margin-left:60px;">
                    <!-- <p style="color:#8699A0;font-size:13px;width:190px;margin:30px auto 10px;" v-html="$t('teach_assay_text_development')"></p> -->
                    <p style="letter-spacing:3px;">獲取免費課程</p>
                    <input type="text" name="email" v-model="email" placeholder="輸入電子信箱" class="beta-input-email">
                    <div style="text-align:center;font-size:13px;margin:1vh auto 0;height:20px;width:80%;color:#ff9898;">{{errors}}</div>
                    <div class="star-line-box">
                        <button class="mamiyoga-assay-contact-btn"  style="width:90px;height:30px;letter-spacing:0;margin-top:18px" @click="sendEmail">馬上取得</button>
                    </div>
                </mamiyoga-window-alert-box>
            </div>
        </div>
        <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent"  @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video>
        <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div>
        <mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box>
        <mamiyoga-window-alert-box v-if="is_open">
            <div class="cancel-box" @click="is_open = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top:40px;width:40%;">
            <p v-html="$t('teach_assay_text_development')"></p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px" @click="is_open = false">{{$t('teach_assay_button_development')}}</button>
            </div>
        </mamiyoga-window-alert-box>
        <mamiyoga-window-alert-box v-if="is_pushed" class="beta-result-box">
            <div class="cancel-box" @click="is_pushed = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-gift.png" alt="" style="margin-top:40px;width:40%;">
            <p style="letter-spacing:3px;">收到您的信箱！<br><br>我們將於3~5個工作天回覆您</p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px" @click="is_pushed = false">好的</button>
            </div>
            <p>快和朋友們分享吧！</p>
            <div class="mamiyoga-assay-share-icon-box">
                    <div class="mamiyoga-assay-share-icon">
                        <a href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-facebook.png" alt="">
                        </a>
                    </div>
                    <div class="mamiyoga-assay-share-icon">
                        <a href="https://www.addtoany.com/add_to/line?linkurl=www.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-line.png" alt="">
                        </a>
                    </div>
                    <div class="mamiyoga-assay-share-icon">
                        <a href="https://www.addtoany.com/share#url=www.ludonow.com%2Fmamiyoga&amp;title=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-more.png" alt="">
                        </a>
                    </div>
                </div>
        </mamiyoga-window-alert-box>
        
    </div>
</template>

<script>

import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue';
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import MamiyogaExplainBox from '~/components/mamiyoga/MamiyogaExplainBox.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { EMAIL_REGEX } from '~/components/regex.js'

export default {
    // layout: "mamiyoga",
    // data(){
    //     return {
            
    //     }
    // },
    layout:'mamiyoga',
    data:()=> ({
        is_loaded: false,
        isLoading: false,
        fullPage: true,
        video_result: {},
        is_shown_remind: false,
        show_remind: false, 
        open_explain: false,
        
        goAbout: '',
        is_open: false,
        is_pushed: false,
        is_beta: true,
        email: '',
        errors: '',

        courses:[],
        course_title:'',
        course_descriptions:[],
        pose_id: 'yoga_6',
    }),
    components: {
        MamiyogaTeachHeader,
        MamiyogaCourseBlock,
        MamiyogaBtn,
        Loading,
        MamiyogaAssayVideo,
        MamiyogaExplainBox,
        MamiyogaWindowAlertBox,
    },
    async mounted() {
        if (process.client) {
            if (this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
                this.course_title = this.courses[1].poses[0].pose_brief;
                this.course_descriptions = this.courses[1].poses[0].pose_description;
                this.goAbout = '/jp' 
            } else if (this.$i18n.locale == 'zh-CN') {
                this.courses = await require('~/config/mamiyoga-course-zhcn');
                this.course_title = this.courses[1].poses[0].pose_brief;
                this.course_descriptions = this.courses[1].poses[0].pose_description;
                this.goAbout = '/zh-CN' 
            } else {
                this.courses = await require('~/config/mamiyoga-course');
                this.course_title = this.courses[1].poses[0].pose_brief;
                this.course_descriptions = this.courses[1].poses[0].pose_description;
                this.goAbout = ''
            }

        }
    },
    methods: {
        async handleVideoUpload(e) {
            this.isLoading = true;
            let form = new FormData();
            form.append('file',e.target.files[0])
            form.append('pose_id',this.pose_id)
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
                  else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿勢正確";
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
        openRemindBox(){
            this.is_open = true;
        },
        async sendEmail(e){
            let send_data = {email:this.email};
            if (this.email.length === 0) {
                this.errors = '請填寫email欄位'
                e.preventDefault();
                return
            } else if (!EMAIL_REGEX.test(this.email)) {
                this.errors = '電子信箱格式錯誤'
                e.preventDefault();
                return
            } else {
                this.show_remind = false;
                this.is_pushed = true;
                const res = await axios.post('/apis/subscribe-mamiyoga',send_data);
                
            }
        }, 
    },
    computed: {
        showRemindBox(){
            return this.show_remind ? 'open':'';
        }
    }
}
</script>

<style>
::placeholder {
    color:#000;
    font-size: 14px;
}
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
.teach-video-sample {
    height: 41vh;
    margin-left: -25vw;
}
.teach-course-info {
    width: 90vw;
    height: 75px;
    position: absolute;
    top: 25vh;
    margin-left: 5vw;
    display:flex;
    align-items: flex-end;
}
.teach-course-info div:first-child {
    height: 62px;
    width: 55px;
    float: left;
    background-repeat: no-repeat;
    background-position: center center;
}
.teach-course-info div:last-child {
    float: left;
    padding: 10px 0 0 10px;
    width: 80%;
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
    top: 33vh;
    right: 6vw;
}
.teach-detail-box {
    width: 100vw;
    margin-top: 35vh;
    padding-bottom: 5vh;
}
.teach-detail-box h6 {
    font-size: 14px;
    color: #707070;
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
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.teacher-remind img {
    float: left;
    margin-right: 2vw; 
}
.teacher-remind img {
    width: 50px;
}
.teacher-remind-content {
    float: left;
    width: 75vw;
    font-size: 12px; 
    color: #5A5A5A;
}
.teach-assay-btn {
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
    background: #97A8AF;
    color: #fff;
    cursor: pointer;
    padding:0;
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
    cursor: pointer;
}
.teach-question-box img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.beta-input-email {
    width: 200px;
    margin: 0 auto;
    display: block;
    text-align: center;
    border-radius: 7px;
    border-style: none;
    border: solid 1px rgba(0,0,0,.3);
    height: 60px;
    padding:0;
    font-size: 14px;
}
.beta-input-box .mamiyoga-assay-contact-open {
    height: 360px;
}
.beta-result-box .mamiyoga-assay-contact-open {
    height: 430px;
}
.beta-result-box .mamiyoga-assay-share-icon-box {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 2vh auto 4vh; 
}
.beta-result-box .mamiyoga-assay-share-icon {
    width: 15vw;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;  
}
.mamiyoga-assay-share-icon img {
    width: 36px !important;
    height: 36px;
    cursor: pointer;
}
@media (min-width: 769px) {
    .teach-page {
        width: 100%;
    }
    .teach-title-video-box {
        width: 450px;
    }
    .teach-course-info {
        margin-left: 30px;
        width: 80%;
        top: 205px;
    }
    .teach-detail-box {
        width: 100%;
        margin-top: 290px;
    }
    .teach-content-li {
        width: 100%;
    }
    .teacher-remind {
        width: 100%;
        padding-left: 30px; 
    }
    .teach-content-text {
        padding-left: 30px; 
    }
    .teacher-remind-content {
        width: 75%;
    }
    .teach-question-box {
        right: 30px;
        top: 270px;
    }
    .teach-video-sample {
        width: 450px;
        height: 330px;
        margin-left: 0;
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
    .teach-video-sample {
        width: 100vw;
        height: 65vh;
        margin-left: 0;
    }
}
</style>
