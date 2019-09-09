<template>
    <div>
        <div class="teach-page" v-if="!is_loaded && !open_explain && !first_show">
            <mamiyoga-teach-header :headerTitle="$t('teach_title')" btnText="登入" bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox"></mamiyoga-teach-header>
            <!-- <mamiyoga-teach-header :headerTitle="$t('teach_title')" btnText="登入" bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox" v-if="is_beta" :is_beta="true"></mamiyoga-teach-header> -->
            <div class="teach-title-video-box">
                <!-- <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-teach-sample.gif" alt="瑜伽動作" class="teach-video-sample"> -->
                <video controls autoplay playsinline src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course/mami_yoga_L13-3.mp4" class="teach-video-sample"></video>
                <!-- <div class="teach-course-info">
                    <div :style="{backgroundImage:'url('+$t('teach_photoby_2')+')'}"></div>
                    <div>
                        <h3>{{course_title}}</h3>
                        <p v-html="$t('teach_text_time')"></p>
                    </div>
                </div> -->
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
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-teach-about.png" alt="瑜珈">
                    </router-link>
                    <div class="teacher-remind-content">
                        <p style="color:#8699A0;">{{$t('teach_teacher_remind')}}</p>
                        <p v-html="$t('teach_teacher_remind_content')"></p>
                    </div>
                </div>
                <!-- <mamiyoga-btn btnText="講師介紹" bgColor="#EEEFEA" ftColor="#6E6E6E" style="margin-top:5vh;margin-bottom:15px" class="teach-upload"></mamiyoga-btn> -->
                <div v-if="!is_beta" style="position:relative">
                    <button class="teach-assay-btn" v-if="!is_shown_remind"  @click="openRemind()">{{$t('teach_button_upload')}}</button>
                    <button class="teach-assay-btn" v-else>
                        <label style="cursor:pointer;width:135px;height:35px;display:flex;align-items:center;justify-content:center;"><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="handleVideoUpload">{{$t('teach_button_upload')}}</label>  
                    </button>
                    <div class="teach-question-box" @click="open_explain = true">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/quest-icon.png" alt="唐幼馨">
                    </div>
                </div>
                <div v-if="is_beta">
                    <button class="teach-assay-btn" @click="openRemind()">{{$t('teach_button_upload')}}</button>
                </div>
            </div>
            <div class="before-remind" :class="showRemindBox" >
                <!-- <mamiyoga-window-alert-box v-if="!is_beta">
                    <div class="cancel-box" @click="show_remind = false">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="" >
                    </div>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-remind.png" alt="" style="margin-top: 70px;">
                    <p style="color:#8699A0;font-size:13px;width:190px;margin:30px auto 10px;" v-html="$t('teach_remind_text')"></p>
                    <div class="star-line-box">
                        <button class="mamiyoga-assay-contact-btn"  style="width:90px;height:30px;padding:0;letter-spacing:0;margin-top:25px;cursor:pointer;">
                            <label style="width:90px;height:30px;display:flex;justify-content:center;align-items:center;cursor:pointer;"><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="beforeRemind">{{$t('teach_button_ok')}}</label>  
                        </button>
                    </div>
                </mamiyoga-window-alert-box> -->
                <!-- <mamiyoga-window-alert-box v-if="is_beta" class="beta-input-box">
                    <div class="cancel-box" @click="show_remind = false">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="肚皮舞" >
                    </div>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="有氧舞蹈" style="margin-top: 5px;margin-left:60px;">
                    <p style="letter-spacing:3px;">獲取免費課程</p>
                    <input type="text" name="email" v-model="email" placeholder="輸入電子信箱" class="beta-input-email">
                    <div style="text-align:center;font-size:13px;margin:1vh auto 0;height:20px;width:80%;color:#ff9898;">{{errors}}</div>
                    <div class="star-line-box">
                        <button class="mamiyoga-assay-contact-btn"  style="width:90px;height:30px;letter-spacing:0;margin-top:18px" @click="sendEmail">馬上取得</button>
                    </div>
                </mamiyoga-window-alert-box> -->
                <!-- <mamiyoga-video-sample v-if="!played" @closeVideo="closeVideo"></mamiyoga-video-sample> -->
                <!-- <mamiyoga-video-tips v-if="!played"></mamiyoga-video-tips> -->
                <div class="before-remind-content">
                    <div style="margin-top:5vh;">
                        <img style="display:block;margin:0 auto 2vh;width:50%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/before-remind-img-1.png" alt="">
                        <p style="color:#24798F;text-align:center;font-size:14px;" v-html="$t('start_experience_text')"></p>
                        <div class="star-line-box">
                            <button class="mamiyoga-assay-contact-btn" style="padding:0;margin-top:25px;cursor:pointer;background-color:#FF9898;color:#F7F7F7;letter-spacing:0;">
                                <label style="display:flex;justify-content:center;align-items:center;cursor:pointer;"><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="beforeRemind">{{$t('start_experience_btn_1')}}</label>  
                            </button>
                            <button class="mamiyoga-assay-contact-btn" style="padding:0;margin-top:10px;cursor:pointer;background-color:#24798F;color:#F7F7F7;letter-spacing:0;" @click="first_show = true">{{$t('start_experience_btn_2')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent"  @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video>
        <!-- <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div> -->
        <div class="loading-bar" v-if="isLoading">
            <div style="width: 100%;height: 15vh;display:flex;align-items:center;">
                <div class="bar-back">
                    <div id="bar-container">
                        <div id="bar"></div>
                    </div>
                    <p style="margin-left:2%;font-size:14px;">{{show_value}}</p>
                </div>
            </div>
            <div style="margin:5vh auto;">
                <p style="color:#fff;text-align:center;margin:0 auto 10px;width:80%;font-size:13px;" v-html="$t('start_experience_uptext')"></p>
                <div class="mamiyoga-show-article" @click="changeArticle">
                    <p v-html="post_article"></p>
                    <img style="position:absolute;width:30px;bottom:20px;right:25px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tap.png" alt="">
                </div>
            </div>
            <div style="width:100%;height:50px;display:flex;justify-content:center;">
                <button v-show="play_assay" class="see-assay-btn" @click="isLoading = false, is_loaded = true">{{$t('start_experience_btn_3')}}</button>
            </div>
        </div>
        <no-ssr><mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box></no-ssr>
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

        <!-- <mamiyoga-window-alert-box v-if="is_pushed" class="beta-result-box">
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
        </mamiyoga-window-alert-box> -->
        <!-- <mamiyoga-video-tips></mamiyoga-video-tips> -->
        <div class="video-tips" v-if="first_show">
            <div class="video-tips-box">
                <video controls autoplay playsinline muted src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tip-video.mp4" id="tip-video"></video>
            </div>
            <div class="close-tips-box" @click="first_show = false">
                <p>Skip></p>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue';
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import MamiyogaExplainBox from '~/components/mamiyoga/MamiyogaExplainBox.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import MamiyogaVideoSample from '~/components/mamiyoga/MamiyogaVideoSample.vue';
import MamiyogaVideoTips from '~/components/mamiyoga/MamiyogaVideoTips.vue'
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
        
        is_open: false,
        is_pushed: false,
        is_beta: false,
        email: '',
        errors: '',

        courses:[],
        course_title:'',
        course_descriptions:[],
        pose_id: 'yoga_27',

        goAbout:'',
        played: true,
        show_value: 0,
        play_assay: false,

        articles:[],
        post_article:'',
        last_article_id:'',
        first_show: true,
    }),
    components: {
        MamiyogaTeachHeader,
        MamiyogaCourseBlock,
        MamiyogaBtn,
        Loading,
        MamiyogaAssayVideo,
        MamiyogaExplainBox,
        MamiyogaWindowAlertBox,
        MamiyogaVideoSample,
        MamiyogaVideoTips,
    },
    async mounted() {
        if (process.client) {
            if (this.$i18n.locale == 'JP') {
                this.goAbout = '/jp'
                this.courses = await require('~/config/mamiyoga-course-jp');
                this.articles = await require('~/config/mamiyoga-post-jp');
                this.post_article = this.articles[0].post_article;
                this.course_title = this.courses[12].poses[2].pose_brief;
                this.course_descriptions = this.courses[12].poses[2].pose_description;
                
            } else {
                this.goAbout = ''
                this.courses = await require('~/config/mamiyoga-course');
                this.articles = await require('~/config/mamiyoga-post');
                this.post_article = this.articles[0].post_article;
                this.course_title = this.courses[12].poses[2].pose_brief;
                this.course_descriptions = this.courses[12].poses[2].pose_description;
            }
            let tip = document.getElementById('tip-video')
            // if (tip.requestFullscreen) {
            //     tip.requestFullscreen();
            // } else if (tip.mozRequestFullScreen) {
            //     tip.mozRequestFullScreen();
            // } else if (tip.webkitRequestFullscreen) {
            //     tip.webkitRequestFullscreen();
            // } else if (tip.msRequestFullscreen) { 
            //     tip.msRequestFullscreen();
            // }
            tip.onended = function(){
                this.first_show = false
            }.bind(this);

            // let bar = document.getElementById('bar');
            // let width = 1;
            // let id = setInterval(()=>{
            //     if(width >= 100){
            //         clearInterval(id)
            //         this.play_assay = true
            //     } else {
            //         width++;
            //         document.getElementById('bar').style.width = width+'%';
            //         this.show_value = width + '%'
            //     }
            // },100)
        }
    },
    methods: {
        async handleVideoUpload(e) {
            this.isLoading = true;
            this.show_value = 'チェック中'
            var data = await this.$poseUpload(e.target.files[0],"0002",'yoga_27','jp')
            console.log(data.status)
            if(!data) {
                alert('網路錯誤')
                this.isLoading = false;
            } else if(data.status == 102) {  
                
                // for(var i =0; i< data.reps_wrong_tags.length; i++){
                //     for(var j = 0; j<data.reps_wrong_tags[i].length; j++){
                //         if(data.reps_wrong_tags[i][j] == "1") data.reps_wrong_tags[i][j] = "摆动过小";
                //         else if (data.reps_wrong_tags[i][j] == "2") data.reps_wrong_tags[i][j] = "摆动过大";
                //         else if (data.reps_wrong_tags[i][j] == "0") data.reps_wrong_tags[i][j] = "姿势正确";
                //     }
                // }   
                let timeout_limit = 0;
                this.video_result = {};
                let get_result_interval = setInterval(() => {
                axios.post('/apis/get-pose-result',{user_id:"0002",pose_id:"yoga_27",createdAt:data.createdAt})
                    .then((response) => {
                        // console.log(response)
                        console.log(response.data.result.status)
                        if (response.data.result.status == 200) {
                            console.log(response.data.result);
                            this.video_result = response.data.result;
                            clearInterval(get_result_interval);
                        } else if(response.data.result.status == 102) { 
                            console.log("還沒跑完");
                        } else if(response.data.result.status == 204) {
                            console.log("未偵測到動作");
                            alert('動きを検知できません')
                            this.isLoading = false;
                            clearInterval(get_result_interval);
                            clearInterval(id);
                        } else {
                            alert('unkrown error')
                            console.log(response);
                            this.isLoading = false;
                            clearInterval(get_result_interval);
                            clearInterval(id);
                        }
                    })
                    .catch((error) => {
                        console.log("fail");
                        alert('unknown error')
                        this.isLoading = false;
                        clearInterval(get_result_interval);
                        clearInterval(id);
                    })
                    timeout_limit += 1;
                    if (timeout_limit >=100) {
                        console.log("unknown error, contact developers~");
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
                                if(this.video_result.reps_wrong_tags[i][j] == "1") this.video_result.reps_wrong_tags[i][j] = "肩が開いていない";
                                else if (this.video_result.reps_wrong_tags[i][j] == "2") this.video_result.reps_wrong_tags[i][j] = "体が後ろに傾いています";
                                else if (this.video_result.reps_wrong_tags[i][j] == "3") this.video_result.reps_wrong_tags[i][j] = "体が前に傾いています";
                                else if (this.video_result.reps_wrong_tags[i][j] == "4") this.video_result.reps_wrong_tags[i][j] = "背中が曲がっています";
                                else if (this.video_result.reps_wrong_tags[i][j] == "5") this.video_result.reps_wrong_tags[i][j] = "手がまっすぐ伸ばしていない";
                                else if (this.video_result.reps_wrong_tags[i][j] == "6") this.video_result.reps_wrong_tags[i][j] = "手を完全にあげていない";
                                else if (this.video_result.reps_wrong_tags[i][j] == "7") this.video_result.reps_wrong_tags[i][j] = "体が完全に伸ばしていません";
                                else if (this.video_result.reps_wrong_tags[i][j] == "8") this.video_result.reps_wrong_tags[i][j] = "座っていません";
                                else if (this.video_result.reps_wrong_tags[i][j] == "0") this.video_result.reps_wrong_tags[i][j] = "正解";
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
            // this.isLoading = false;
            // this.is_loaded = true;
        },
        // async handleVideoUpload(e) {
        //     this.isLoading = true;
        //     let form = new FormData();
        //     form.append('file',e.target.files[0])
        //     form.append('pose_id',this.pose_id)
        //     form.append('language','zh-tw')
        //     const res = await axios.post('/apis/video-upload',form)
        //     console.log(res.data)
        //     for(var i =0; i< res.data.reps_wrong_tags.length; i++){
        //       for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
        //           if(res.data.reps_wrong_tags[i][j] == "1") res.data.reps_wrong_tags[i][j] = "膝蓋彎曲";
        //           else if (res.data.reps_wrong_tags[i][j] == "2") res.data.reps_wrong_tags[i][j] = "膝蓋彎曲";
        //           else if (res.data.reps_wrong_tags[i][j] == "3") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
        //           else if (res.data.reps_wrong_tags[i][j] == "4") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
        //           else if (res.data.reps_wrong_tags[i][j] == "5") res.data.reps_wrong_tags[i][j] = "軸心不穩";
        //           else if (res.data.reps_wrong_tags[i][j] == "0") res.data.reps_wrong_tags[i][j] = "姿勢正確";
        //       }
        //     }
        //     this.isLoading = false;
        //     console.log(res.data)
        //     this.reps_wrong_tags = res.data.reps_wrong_tags;
        //     this.video_result = res.data;
        //     this.is_loaded = true;
        // },
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
        closeVideo(){
            this.played = true;
            // let bar = document.getElementById('bar');
            // let width = 1;
            // let id = setInterval(frame,10);
            // function frame(){
            //     if(width >= 100){
            //         clearInterval(id)
            //     } else {
            //         width++;
            //         document.getElementById('bar').style.width = width+'%';
            //     }
            //     // this.show_value = width;
            // }
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
        },
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
    /* height: 39vh; */
    position: absolute;
    top: 0;
    
    z-index: 0;
}
.teach-video-sample {
    /* height: 41vh;
    margin-left: -25vw; */
    width: 100vw;
    /* height: 42vh; */
    margin-top: 60px;
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
    top: 2px;
    left: calc(55vw + 70px);
}
.teach-detail-box {
    width: 100vw;
    margin-top: calc(25vh + 65px);
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
    padding: 0;
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
    /* background: rgba(0,0,0,.2); */
    background: #000;
    z-index: 999;
    display: none;
}
.teach-page .before-remind.open {
    display: block;
}
.teach-page .before-remind-content {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    /* background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/before-remind-content-back.png'); 
    background-repeat: no-repeat;
    background-size: 90%;
    background-position:center;  */
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
    cursor:pointer;
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
.loading-bar {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: fixed;
    top: 0;
    /* left: 0;  */
    z-index: 999;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; */
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
    /* margin: 0 auto; */
}
#bar {
    width: 1%;
    height: 15px;
    background-color: #24798F;
    border-radius: 15px;
}   
.mamiyoga-show-article {
    width: 80vw;
    height: 300px;
    background: white;
    border-radius: 20px;
    padding: 0 15px;
    /* text-align: center; */
    color:#8699A0;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin: 0 auto;
    position: relative;
}
.see-assay-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    background: #24798F;
    color: #fff;
    border-style: none;
    font-size: 14px;
}
.video-tips {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}
.video-tips-box {
    transform: rotate(90deg);
    position:fixed;
    top: 21vh;
}
#tip-video {
    width: 85vh;
}
.close-tips-box {
    width: 45px;
    height: 30px;
    position: fixed;
    color: #fff;
    transform: rotate(90deg);
    bottom: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
        /* right: 30px;
        top: 270px; */
        left:320px;
    }
    .teach-video-sample {
        width: 450px;
        height: 270px;
        margin-left: 0;
    }
    .teach-page .before-remind {
        width: 450px;
    }
    .teach-page .before-remind-content {
        width: 450px;
    }
    .loading-bar {
        width: 450px;
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
@media (max-width: 1001px) and  (orientation:landscape) {
    .video-tips {
        display: block;
        left: 0;
    }
    .video-tips-box {
        transform: rotate(0deg);
        top: 0;
        left: 2vw;
    }
    .close-tips-box {
        transform: rotate(0deg);
        bottom: 50vh;
        right: 4vw;
    }
    #tip-video {
        width: auto;
        height: 85vh;
        margin: 7.5vh 0;
    }
}
</style>
