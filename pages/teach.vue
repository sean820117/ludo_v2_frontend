<template>
    <div>
        <div class="teach-page" v-if="!is_loaded && !open_explain && !first_show && !open_camera">
            <mamiyoga-teach-header :headerTitle="$t('teach_title')" btnText="登入" bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox"></mamiyoga-teach-header>
            <p class="teach-desktop-title">{{course_title}}</p>
            <div class="teach-content-flex-box">
                <div class="teach-title-video-box" v-if="!show_remind && !isLoading">
                    <video controls autoplay playsinline :src="$t('teach_video')" class="teach-video-sample"></video>
                </div>
                <div class="teach-detail-box">
                    <div style="position:relative;" v-if="$mq !== 'desktop'">
                        <p style="color:#FF9898;font-size:12px;font-weight:500;text-align:center;">體驗練習次數為三次</p>
                        <button class="teach-assay-btn square" style="margin-top:5px;" v-if="can_experience" @click="first_show = true">{{$t('teach_button_upload')}}</button>
                        <button class="teach-assay-btn square" style="margin-top:5px;background:#BFBFBF;" v-if="!can_experience">{{$t('teach_button_upload')}}</button>
                        <div class="teach-question-box" @click="open_explain = true">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/quest-icon.png" alt="唐幼馨">
                        </div>
                    </div>
                    <h6>{{$t('teach_tip_title')}}</h6>
                    <div class="teach-content-text">
                        <div class="teach-content-li" :key="i"
                        v-for="(description,i) in course_descriptions">
                            <p class="teach-content-num">{{i+1}}</p>
                            <p>{{description}}</p>
                        </div>
                    </div>
                    <div style="position:relative;margin-top: 15vh;" v-if="$mq === 'desktop'">
                        <p style="color:#FF9898;font-size:12px;font-weight:500;text-align:center;">體驗練習次數為三次</p>
                        <button class="teach-assay-btn square" style="margin-top:5px;background:#24798F;" v-if="can_experience" @click="first_show = true">{{$t('teach_button_upload')}}</button>
                        <button class="teach-assay-btn square" style="margin-top:5px;background:#BFBFBF;" v-if="!can_experience">{{$t('teach_button_upload')}}</button>
                        <div class="teach-question-box" @click="open_explain = true">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/quest-icon.png" alt="唐幼馨">
                        </div>
                    </div>
                </div>
            </div>

            <div class="index-label-box sticky" id="index-fixed-nav">
                <div class="index-label-inside-box">
                    <p class="index-footer-title">Mami yoga日本人氣瑜珈</p>
                    <p class="index-footer-title delect-text">NTD.1590<s class="index-footer-title" style="font-size: 12px;margin-left:10px;">NTD.1990</s></p>
                </div>
                <div class="index-footer-content">
                    <div class="index-footer-btn" style="color:#EEEFEA;background: #24798F;" @click="clickToPay">我 要 購 買</div>
                    <div class="index-footer-btn" style="color:#24798F;" @click="$router.push('/mirror-mirror')">體 驗 魔 鏡</div>
                </div>
            </div>

            <div class="before-remind" :class="showRemindBox" >
                <div class="before-remind-content">
                    <div style="padding-top: 5vh;">
                        <img style="display:block;margin:0 auto 2vh;width:50%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/before-remind-img-1.png" alt="">
                        <p style="color:#24798F;text-align:center;font-size:14px;" v-html="$t('start_experience_text')"></p>
                        <div class="star-line-box">
                            <button class="mamiyoga-assay-contact-btn" style="padding:0;margin-top:25px;cursor:pointer;background-color:#FF9898;color:#F7F7F7;letter-spacing:0;" @click="photo_remind = true">
                                {{$t('start_experience_btn_1')}}
                            </button>
                            <button class="mamiyoga-assay-contact-btn" style="padding:0;margin-top:10px;cursor:pointer;background-color:#24798F;color:#F7F7F7;letter-spacing:0;" @click="show_remind = false">{{$t('start_experience_btn_2')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent" @retryRecordAndroid="retryRecordAndroid" @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video>
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
                <button v-show="play_assay" class="see-assay-btn" @click="isLoading = false, is_loaded = true">{{$t('start_experience_btn_3')}}</button>
            </div>
        </div>

        <no-ssr><mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box></no-ssr>
        
        <!-- 九月上線公告 -->
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

        <!-- 請輸入信箱 -->
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
        <!-- <div class="video-tips" v-if="first_show">
            <div class="video-tips-box">
                <video controls autoplay playsinline muted :src="$t('teach_tip_video')" id="tip-video"></video>
            </div>
            <div class="close-tips-box" @click="first_show = false">
                <p>Skip></p>
            </div>
        </div> -->

        <div class="video-tips" v-if="first_show">
            <div class="video-tips-box">
                <video @timeupdate="videoEnd" controls autoplay playsinline muted :src="$t('teach_tip_video')" id="tip-video"></video>
            </div>
            <div class="close-tips-box" @click="seeRemind">
                <p>Skip></p>
            </div>
        </div>

        <!-- 影片錯誤回饋視窗(重新拍攝) -->
        <mamiyoga-window-alert-box v-if="is_error">
            <div class="cancel-box" @click="is_error = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <p style="margin-top:40px;" v-html="errorText"></p>
            <img :src="errorImg" alt="" style="margin:30px auto 45px;height:35%;width:auto;">
            <div class="star-line-box">
                <button @click="reopenCamera" v-if="is_android" class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px;padding:0;">
                    {{$t('teach_button_upload')}}
                </button>
                <button class="mamiyoga-assay-contact-btn" v-else style="width:120px;letter-spacing:0;margin-top:20px;padding:0;">
                    <label style="width:120px;height:35px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
                        <input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="retryVideoUpload">{{$t('teach_button_upload')}}
                    </label>
                </button>
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

        <!-- 建議使用拍攝角度 -->
        <mamiyoga-window-alert-box v-if="photo_remind">
            <div class="cancel-box" @click="photo_remind = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <p style="color:#FF9898;font-size:14px;font-weight:bold;">{{$t('course_practice_remind_title')}}</p>
            <div class="upload-remind-box" :style="{backgroundImage:'url('+getBackground+')'}"></div>
            
            <p style="color:#24798F;font-size:13px;font-weight:bold;margin:10px 0 20px;">{{getRemind}}</p>
            <div class="star-line-box">
    
                <button @click="openCamera" v-if="is_android" class="teach-assay-btn" style="width:70px;padding:0;background-color:#24798F;">
                    {{$t('teach_button_ok')}}
                </button>
                <button class="teach-assay-btn" v-else style="width:70px;padding:0;background-color:#24798F;">
                    <label style="height:35px;display:flex;justify-content:center;align-items:center;cursor:pointer;cursor:pointer;">
                        <input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="beforeRemind">{{$t('teach_button_ok')}}
                    </label>  
                </button>
            </div>
        </mamiyoga-window-alert-box>

        <!-- 限制登入後體驗 -->
        <mamiyoga-window-alert-box v-if="not_login">
            <div class="cancel-box" @click="not_login = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <p style="margin-top:40px;color:#FF9898;font-size:14px;font-weight:500;">體驗課程請先登入</p>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-teach-notlogin.png" alt="" style="margin:30px auto 20px;height:25%;width:auto;">
            <p style="color:#24798F;font-size:13px;">體驗練習次數為三次</p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:1px;margin-top:20px;padding:0;background:#24798F;" @click="$router.push('/login')">前往登入</button>
            </div>
        </mamiyoga-window-alert-box>

        <mamiyoga-camera v-if="open_camera" @uploadVideo="newVideoUpload" @closeCamera="closeCamera"></mamiyoga-camera>
    </div>
</template>

<script>

import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue';
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import MamiyogaExplainBox from '~/components/mamiyoga/MamiyogaExplainBox.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import MamiyogaCamera from '~/components/mamiyoga/MamiyogaCamera.vue';



import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { EMAIL_REGEX } from '~/components/regex.js'
import { mapMutations, mapGetters } from 'vuex';

export default {
    data:()=> ({
        open_camera: false,
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
        email: '',
        errors: '',

        courses:[],
        course_title:'',
        course_descriptions:[],
        pose_id: 'yoga_27',
        
        show_value: 0,
        play_assay: false,

        articles:[],
        post_article:'',
        last_article_id:'',
        first_show: false,

        is_error: false,
        need_resee: false,
        errorImg: '',
        errorText: '',
        photo_remind: false,
        getBackground: '',
        getRemind: '',

        is_login: false,
        not_login: false,
        use_count: 0,
        can_experience: true,

        is_android: false,

        go_to_where: '/signup',
    }),
    components: {
        MamiyogaTeachHeader,
        MamiyogaCourseBlock,
        MamiyogaBtn,
        Loading,
        MamiyogaAssayVideo,
        MamiyogaExplainBox,
        MamiyogaWindowAlertBox,
        MamiyogaCamera,
    },
    async mounted() {
        if (process.client) {
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                this.go_to_where = '/signup'
                this.check_log = '/login'
            } else {
                this.go_to_where = '/pay'
                let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                if (!payed_or_not) {
                    this.check_log = '/pay'
                } else {
                    this.check_log = '/menu'
                }
                
            }

            if (this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
                this.articles = await require('~/config/mamiyoga-post-jp');
                this.post_article = this.articles[0].post_article;
                this.course_title = this.courses[12].poses[2].pose_brief;
                this.course_descriptions = this.courses[12].poses[2].pose_description;
                this.goAbout = '/jp' 
            } else if (this.$i18n.locale == 'zh-CN') {
                this.courses = await require('~/config/mamiyoga-course-zhcn');
                this.course_title = this.courses[12].poses[2].pose_brief;
                this.articles = await require('~/config/mamiyoga-post');
                this.post_article = this.articles[0].post_article;
                this.course_descriptions = this.courses[12].poses[2].pose_description;
                this.goAbout = '/zh-CN' 
            } else {
                this.courses = await require('~/config/mamiyoga-course');
                this.course_title = this.courses[12].poses[2].pose_brief;
                this.articles = await require('~/config/mamiyoga-post');
                this.post_article = this.articles[0].post_article;
                this.course_descriptions = this.courses[12].poses[2].pose_description;
                this.goAbout = ''
                this.getBackground = this.courses[12].poses[2].remind_img;
                this.getRemind = this.courses[12].poses[2].remind_text
            }
            if(navigator.userAgent.match(/android/i) || navigator.userAgent.match(/Macintosh/i)){
                this.is_android = true;
            }  else {
                this.is_android = false;
            }

            let tip = document.getElementById('tip-video')
            // tip.onended = function(){
            //     this.first_show = false
            // }.bind(this);

            if(localStorage['use_count']) {
                this.use_count = localStorage['use_count']
                if(this.use_count >= 3){
                    this.can_experience = false
                }
            }
        }
    },
    async beforeCreate() {
        if (process.client) {
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                this.is_login = false
            } else {
                this.is_login = true
            }
        }
    },
    methods: {
        async handleVideoUpload(e) {
            this.video_result = {};
            this.play_assay = false;
            this.isLoading = true;
            if(this.$i18n.locale == 'JP') {
                this.show_value = 'チェック中'
            } else if (this.$i18n.locale == 'zh-CN') {
                this.show_value = '正在上传'
            } else {
                this.show_value = '正在上傳'
            }

            this.video_result = {};
            let send_user_id = '0000'
            if(this.user.user_id) {
                send_user_id = this.user.user_id
            }
            if(this.is_android){
                var data = await this.$poseUpload(e,send_user_id,'yoga_27','zh-tw')
            } else {
                var data = await this.$poseUpload(e.target.files[0],send_user_id,'yoga_27','zh-tw')
            }

            console.log(data.status)
            if(!data) {
                alert('網路錯誤')
                this.isLoading = false;
            } else if(data.status == 102) {  
                let timeout_limit = 0;
                let get_result_interval = setInterval(() => {
                axios.post('/apis/get-pose-result',{user_id:send_user_id,pose_id:"yoga_27",createdAt:data.createdAt})
                    .then((response) => {
                        // console.log(response)
                        console.log(response.data.result.status)
                        if (response.data.result.status == 200) {
                            console.log(response.data.result);
                            this.video_result = response.data.result;
                            this.use_count++
                            localStorage['use_count'] = this.use_count
                            clearInterval(get_result_interval);
                        } else if(response.data.result.status == 102) { 
                            console.log("還沒跑完");
                        } else if(response.data.result.status == 204) {
                            if(response.data.result.error_code == -1) {
                                console.log(response)
                                this.need_resee = true;
                                this.errorText = '動作做錯囉！讓我們再複習一次！';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-1.png';
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -5) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請勿超過一人以上入鏡';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-5.png';
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -6) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '沒有偵測到人';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-6.png';
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -7) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請將身體從正面轉到側面拍攝';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-7.png';
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -8) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請將身體從側面轉到正面拍攝';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-8.png';
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -9) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請將手機從橫式轉成直式拍攝';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-9.png';
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -10) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '請將手機從直式轉成橫式拍攝';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-10.png';
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            } else if(response.data.result.error_code == -11) {
                                console.log(response)
                                this.is_error = true;
                                this.errorText = '無法偵測動作過程<br>注意是否倒影入鏡或穿著過於寬鬆';
                                this.errorImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/error-11.png';
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            }  else {
                                console.log("未偵測到動作");
                                alert('動きを検知できません')
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            }
                            
                        } else if(response.data.result.status == 404){
                            console.log("網路錯誤");
                            alert('網路錯誤')
                            this.isLoading = false;
                            clearInterval(get_result_interval);
                            clearInterval(id);
                        } else {
                            alert('上傳時遇到網路不穩定\n保持網路穩定，讓我們再練習一次')
                            console.log(response);
                            this.isLoading = false;
                            clearInterval(get_result_interval);
                            clearInterval(id);
                        }
                    })
                    .catch((error) => {
                        console.log("fail");
                        alert('上傳時遇到網路不穩定\n保持網路穩定，讓我們再練習一次')
                        this.isLoading = false;
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

        handleRetryEvent(e){
            console.log("ok");
            this.is_loaded = false;
            this.handleVideoUpload(e);
        },
        retryVideoUpload(){
            this.is_error = false;
            this.handleVideoUpload(e);
        },
        retryRecordAndroid(){
            this.is_loaded = false;
            this.open_camera = true;
        },
        closeAssayWindow(){
            this.is_loaded = false;
        },
        openRemind(){
            this.is_shown_remind = true;
            this.show_remind = true;
        },
        beforeRemind(e){
            this.photo_remind = false;
            this.show_remind = false;
            this.handleVideoUpload(e);
        },
        closeExplain(){
            this.open_explain = false;
        },
        openRemindBox(){
            this.is_open = true;
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
        reopenCamera(){
            this.is_error = false;
            this.open_camera = true;
        },
        openCamera(){
            this.photo_remind = false;
            this.open_camera = true;
            this.show_remind = false;
            
        },
        closeCamera(){
            this.open_camera = false;
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
                // this.is_pushed = true;
                const res = await axios.post('/apis/subscribe-mamiyoga',send_data);
                this.$router.push('/subscribe')
            }
        }, 
        newVideoUpload(e){
            console.log(e)
            this.open_camera = false;
            this.isLoading = true;
            this.handleVideoUpload(e);
        },
        seeRemind(){
            this.first_show = false
            this.show_remind = true
        },
        videoEnd(e){
            // console.log(e.target.currentTime)
            if(e.target.currentTime > 96){
                this.seeRemind()
            }
        },
        clickToPay(){
            this.$router.push(this.go_to_where)
        },
    },
    computed: {
        ...mapGetters({
            user : 'user/getData',
        }),
        showRemindBox(){
            return this.show_remind ? 'open':'';
        }
    },
    watch:{
        use_count(){
            if(this.use_count >= 3) {
                this.can_experience = false
            }
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
.teach-desktop-title {
    display: none;
}
.teach-upload button {
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
}
.teach-title-video-box {
    width: 100vw;
    height: 39vh;
    position: absolute;
    top: 0;
    z-index: 0;
}
.teach-video-sample {
    width: 100vw;
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
    top: calc(5px + 21px);
    left: calc(55vw + 100px);
}
.teach-detail-box {
    width: 100vw;
    /* margin-top: 30vh; */
    margin-top: 235px;
    padding-bottom: 5vh;
}
.teach-detail-box h6 {
    margin-top: 15px; 
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
    width: 200px;
    height: 35px;
    border-radius:20px;
    font-size: 18px;
    
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
.teach-assay-btn.square {
    border-radius:10px !important;
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
    background: #000;
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

.mamiyoga-teach-header {
    position: relative;
    width: 100vw;
    height: 60px;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 990;
}
.mamiyoga-teach-header-goback-btn {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.mamiyoga-teach-header-goback-btn img {
    display: block;
    width: 20px;
    height: 13px;
}
.mamiyoga-teach-header-title h3 {
    font-size: 14px;
    color: #51636F;
    font-weight: 400;
    padding-left:20px;
}
.mamiyoga-teach-header-login {
    height: 25px;
}
.mamiyoga-teach-header-login-btn {
    width: 55px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    background-position: center;
    background-repeat: no-repeat;
}
.mamiyoga-header-login-btn {
    width: 80px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    cursor:pointer;
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
    cursor: pointer;
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
    position:fixed;
    top: 21vh;
}
#tip-video {
    width: 100vw;
}
.close-tips-box {
    width: 45px;
    height: 30px;
    position: fixed;
    color: #fff;
    bottom: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
}
.upload-remind-box {
    width: 150px;
    height: 135px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}
#index-fixed-nav {
    display:none;
}
@media (max-width: 768px) {
    .teach-video-sample {
        max-height: 230px;
    }
}
@media (min-width: 769px) {
    .teach-desktop-title {
        display: block;
        text-align: center;
        color: #24798F;
        font-size: 22px;
        margin-top: 5vh;
        margin-bottom: 2vh;
    }
    .teach-page .teach-content-flex-box {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        max-width: 1366px;
        margin: 0 auto;
    }
    .teach-detail-box {
        width: auto;
        margin-top: 0;
        padding-bottom: 0;
    }
    .teach-title-video-box {
        max-width: 60vw; 
        margin-right: 3vw;
        height: auto;
        position: unset;
    }
    .teach-video-sample {
        width: 60vw;
        height: 50vh;
        margin-left: 0;
        margin-top: 0;
    }
    .teach-content-text {
        padding-left: 15px; 
    }
    .teach-detail-box h6 {
        margin-bottom: 2vh;
        color: #272727;
    }
    .teach-content-li p:last-child {
        margin-left: 10px;
    }
    .teach-question-box {
        left: 250px;
    }
    #index-fixed-nav {
        display: flex;
    }
    .index-label-box {
        width: 100%;
        height: 100px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
        padding: 0 10vw;
    }
    .index-label-inside-box {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
    .sticky {
        position: absolute;
        bottom: 0;
        /* z-index: 10; */
        box-shadow: 0 10px 10px rgba(0,0,0,.1);
    }
    .index-footer-title {
        font-size: 25px;
        font-weight: bold;
        color:#24798F;
        letter-spacing: 0;
    }
    .delect-text {
        color:#FF9898;
        font-size: 25px;
    }
    .index-footer-tag {
        font-size: 14px;
        background: #24798F;
        font-weight: 400;
        padding: 5px 15px;
        letter-spacing: 0;
    }
    .index-footer-btn {
        width: 40%;
        height: 40px;
        border-radius: 10px;
        border: 3px solid #24798F;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .footer-sticky {
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .index-footer-content {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }




    .mamiyoga-teach-header{
        width: 100%;
    }
    .teach-page {
        width: 100%;
    }
    .teach-course-info {
        margin-left: 30px;
        width: 80%;
        top: 205px;
    }
    .teach-content-li {
        width: 100%;
    }
    .teacher-remind {
        width: 100%;
        padding-left: 30px; 
    }
    
    .teacher-remind-content {
        width: 75%;
    }
    #tip-video {
        width: 85vh;
    }
    .video-tips {
        width: 450px;
    }
    .video-tips-box {
        transform: rotate(0deg);
    }
    .close-tips-box {
        transform: rotate(0deg);
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
    .mamiyoga-show-article {
        width: 360px;
    }
}
@media (min-width: 769px) and (max-width: 860px) {
    .index-footer-title {
        font-size: 1.3em;
        width: 39%;
    }
    .teach-title-video-box {
        margin-right: 0;
    }
    .teach-question-box {
        left: 240px;
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
