<template>
    <div>
        <div class="divide-page" v-if="!is_loaded && !isLoading && !open_camera" >
            <mamiyoga-mail-header class="mamiyoga-divide-header"></mamiyoga-mail-header>
            <h3 v-html="getTitle"></h3>
            <mamiyoga-divide-video :course_data="course_data" @openRecordBox="openRecordBox"
            @handleCourseVideoUpload="handleCourseVideoUpload"
            @handleCourseVideoUploadAndroid="handleCourseVideoUploadAndroid"
            ></mamiyoga-divide-video>
        </div>

        <mamiyoga-assay-video @handleRetryEvent="retryVideoUpload" @retryRecordAndroid="retryRecordAndroid"
        @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video>

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
                <p style="color:#24798F;text-align:center;margin:0 auto 10px;width:80%;font-size:14px;font-weight:bold;" v-html="$t('start_experience_uptext')"></p>
                <div class="mamiyoga-show-article" @click="changeArticle">
                    <p v-html="post_article"></p>
                    <div style="position:absolute;bottom:20px;right:25px;display:flex;align-items: center;" >
                        <p style="color:#24798F;font-size:14px;padding-right:5px;">點擊觀看</p>
                        <img style="width:30px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tap.png" alt="">
                    </div>
                </div>
            </div>
            <div style="width:100%;height:50px;display:flex;justify-content:center;">
                <button v-show="play_assay" class="see-assay-btn" @click="isLoading = false, is_loaded = true">{{$t('start_experience_btn_3')}}</button>
            </div>
        </div>
        <!-- 動作紀錄 -->
        <div class="record-background" :class="open_record ? 'open':''">
            <div class="record-box" :class="open_record ? 'open':''">
                <div @click="open_record = false">
                    <div class="record-box-title"><h3>{{$t('course_practice_btn')}}</h3></div>
                </div>
                <div>
                    <input type="radio" name="show_block" id="line" checked>
                    <input type="radio" name="show_block" id="grid">
                    <div class="select-block">
                        <label for="line"  class="select-icon select-line">
                            <div>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/record-line-icon-2.png" alt="">
                            </div>
                        </label>
                        <label for="grid"  class="select-icon select-grid">
                            <div>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/record-grid-icon-2.png" alt="">
                            </div>
                        </label>
                    </div>
                    <div class="practice-record-content-container" v-if="current_record_data != ''">
                        <div class="show-line-block" v-if="open_record">
                            <mamiyoga-record-block-middle v-for="(record,i) in current_record_data"
                            :key="i" :video_url="record.video_url" :recordImg="record.preview_img"
                            :recordDate="setRecordDate(record.createdAt)" :tags="switchTag(record)"
                            :score="record.score"></mamiyoga-record-block-middle>   
                        </div>
                        <div class="show-grid-block" v-if="open_record">
                            <mamiyoga-record-block-small v-for="(record,i) in current_record_data"
                            :key="i" :video_url="record.video_url" :recordImg="record.preview_img"
                            :tags="switchTag(record)" :score="record.score"></mamiyoga-record-block-small>
                            
                        </div>
                    </div>
                    <div class="practice-record-no-content" v-else>
                        <p style="color:#97A8AF;">{{$t('record_content_text')}}</p>
                    </div> 
                </div>
                <!-- <div class="practice-record-content-container" v-if="record_data != ''">
                    <mamiyoga-practice-record-block v-for="(record,i) in record_data"
                    :key="i" :recordDate="setRecordDate(record.createdAt)" :video_url="record.video_url"
                    :tags="switchTag(record)" :recordImg="record.preview_img"
                    :score="record.score"></mamiyoga-practice-record-block>
                </div>
                <div class="practice-record-no-content" v-else>
                    <p>{{$t('record_content_text')}}</p>
                </div> -->
            </div>
        </div>
        <!-- 錯誤訊息回饋視窗(重新上傳) -->
        <mamiyoga-window-alert-box v-if="is_error">
            <div class="cancel-box" @click="is_error = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <p style="margin-top:40px;" v-html="errorText"></p>
            <img :src="errorImg" alt="" style="margin:30px auto 45px;height:35%;width:auto;">
            <div class="star-line-box">
                <button v-if="is_android" @click="retryRecordAndroid" class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px;padding:0;">
                    {{$t('teach_button_upload')}}
                </button>
                <button v-else class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px;padding:0;">
                    <label style="width:120px;height:35px;display:flex;align-items:center;justify-content:center;cursor:pointer;"><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="retryVideoUpload">{{$t('teach_button_upload')}}</label>
                </button>
                
            </div>
        </mamiyoga-window-alert-box>
        <!-- 動作錯誤，需重新觀看課程 -->
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
        <!-- androia錄影視窗 -->
        <mamiyoga-camera v-if="open_camera" @uploadVideo="newVideoUpload" @closeCamera="closeCamera"></mamiyoga-camera>
        <!-- 新跳出視窗 -->
        <mamiyoga-new-window-alert-box v-if="show_alert" @closeBox="enterBox(nextGo)" :alertBtn="alertBtn"
        :alertTitle="alertTitle" :alertImg="alertImg" :alertText="alertText" :alertBtnColor="alertBtnColor"
        @enterBox="enterBox(nextGo)"></mamiyoga-new-window-alert-box>
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue';
import MamiyogaDivideVideo from '~/components/mamiyoga/MamiyogaDivideVideo.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import MamiyogaNewWindowAlertBox from '~/components/mamiyoga/MamiyogaNewWindowAlertBox.vue'
import MamiyogaRecordBlockMiddle from '~/components/mamiyoga/MamiyogaRecordBlockMiddle.vue'
import MamiyogaRecordBlockSmall from '~/components/mamiyoga/MamiyogaRecordBlockSmall.vue'
import MamiyogaCamera from '~/components/mamiyoga/MamiyogaCamera.vue';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapMutations, mapGetters } from 'vuex';

export default {
    layout: 'mamiyoga',
    data:()=>({
        is_loaded: false,
        video_result: {},
        isLoading: false,
        fullPage: true,
        courses:[],
        course_id:'',
        course_data:{},

        user_id:'',
        lang_click:'',
        show_value: 0,
        articles:[],
        post_article:'',
        last_article_id:'',
        play_assay: false,
        current_pose_id:'first',

        open_record: false,
        record_data:{},
        current_record_data:{},
        pose_id:'',
        every_pose: [],

        assay_pose_data: {},
        is_switched: false,
        is_error: false,
        errorImg: '',
        errorText: '',
        need_resee: false,

        open_camera: false,
        is_android: false,
        android_input_id: '',

        show_alert: false,
        alertTitle: '',
        alertImg: '',
        alertText: '',
        alertBtn: '好的',
        alertBtnColor: '#24798F',
        nextGo: '',
    }),
    components:{
        MamiyogaMailHeader,
        MamiyogaDivideVideo,
        MamiyogaAssayVideo,
        MamiyogaWindowAlertBox,
        MamiyogaNewWindowAlertBox,
        Loading,
        MamiyogaRecordBlockMiddle,
        MamiyogaRecordBlockSmall,
        MamiyogaCamera,
    },
    async mounted() {
        if (process.client) {
            if(this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
                this.articles = await require('~/config/mamiyoga-post-jp');
                this.post_article = this.articles[0].post_article;
                this.lang_click = 'jp'
            } else if (this.$i18n.locale == 'zh-CN') {
                this.courses = await require('~/config/mamiyoga-course-zhcn');
                this.articles = await require('~/config/mamiyoga-post-zhcn');
                this.post_article = this.articles[0].post_article;
                this.lang_click = 'zh-CN'
            } else {
                this.courses = await require('~/config/mamiyoga-course');
                this.articles = await require('~/config/mamiyoga-post');
                this.post_article = this.articles[0].post_article;
                this.lang_click = 'zh-tw'
            }
            this.course_id = this.$route.params.id;
            this.course_data = this.courses.find(course => this.course_id == course.id);
            // console.log(this.course_data)
            
            if(navigator.userAgent.match(/android/i)){
                this.is_android = true;
            }  else {
                this.is_android = false;
            }

            if (sessionStorage["course_" + this.course_data.id + "_current_pose_id"]) {
                this.current_pose_id = sessionStorage["course_" + this.course_data.id + "_current_pose_id"] ;
            } else {
                sessionStorage["course_" + this.course_data.id + "_current_pose_id"] = this.current_pose_id;
            }
            
            this.every_pose = this.course_data.poses
            let ai_poses = this.every_pose.filter(pose => pose.pose_ai);
            // console.log(ai_poses)

            // this.pose_id = 'yoga_'+this.course_data.upload_id;
            try {
                ai_poses.forEach(async(pose,index) => {
                    let temp_pose_id = 'yoga_'+pose.input_id
                    let get_user_id = '0000';
                    if(this.user.user_id) {
                        get_user_id = this.user.user_id
                    }
                    let send_data = {user_id:get_user_id,pose_id:temp_pose_id};
                    const res = await axios.post('/apis/get-pose-results',send_data);
                    if (res.data.status == 200) {
                        this.record_data[pose.pose_id] = res.data.Items
                        
                        console.log(this.record_data[pose.pose_id])
                    } else {
                        window.alert('讀取失敗')
                    }   
                })
            } catch (error) {
                
            }
        }
    },
    async beforeCreate() {
        if (process.client) {
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_not_login')}`
                this.alertBtn = `${this.$t('teach_button_ok')}`
                this.nextGo = 'login'
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                
                if (payed_or_not) {
                    console.log("payed")
                } else if (this.user.free_trial_starting_time) {
                    let open_time = parseInt(this.user.free_trial_starting_time)
                    let now = new Date();
                    let now_time = now.getTime();
                    let use_time = (now_time - open_time)/86400000;
                    if(use_time > 7){ 
                        localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/course/${this.course_id}`
                        this.show_alert = true
                        this.alertText = '已超過試用期限，請前往購買或聯繫客服由我們為您專人服務呦～'
                        this.alertBtn = `${this.$t('teach_button_ok')}`
                        this.nextGo = 'pay'
                    } else if(!this.course_data.trial) {
                        localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                        this.show_alert = true
                        this.alertText = '這堂是付費課程，請先前往付款才能觀看此課程喔！'
                        this.alertBtn = `${this.$t('teach_button_ok')}`
                        this.nextGo = 'pay'
                    }
                } else {
                    if(this.course_id == '1'){
                        localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                        this.show_alert = true
                        this.alertText = '開啟七天體驗即可解鎖本課程動作詳解～'
                        this.alertBtn = `${this.$t('teach_button_ok')}`
                        this.nextGo = 'free-trial'
                    } else {
                        console.log("not payed");
                        localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                        this.show_alert = true
                        this.alertText = '這堂是付費課程，請先前往付款才能觀看此課程喔！'
                        this.alertBtn = `${this.$t('teach_button_ok')}`
                        this.nextGo = 'pay'
                        // window.alert("這堂是付費課程，請先前往付款才能觀看此課程喔！");
                        // this.$router.push('/pay');
                    }
                }
            }
        }
    },
    methods:{
        async handleVideoUpload(e) {
            this.video_result = {};
            this.play_assay = false;
            this.isLoading = true;
            const pose_id = "yoga_" + e.input_id;
            console.log(pose_id);
            
            this.current_pose_id = sessionStorage["course_" + this.course_data.id + "_current_pose_id"];
            this.assay_pose_data = this.every_pose.find(select => select.pose_id == this.current_pose_id)
            console.log(this.assay_pose_data)
            
            if(this.$i18n.locale == 'JP') {
                this.show_value = '待ちます'
            } else {
                this.show_value = '等待上傳'
            }
            this.video_result = {};
            let send_user_id = '0000'
            if(this.user.user_id) {
                send_user_id = this.user.user_id
            }
            if(this.is_android){
                var data = await this.$poseUpload(e,send_user_id,pose_id,'zh-tw')
            } else {
                var data = await this.$poseUpload(e.target.files[0],send_user_id,pose_id,'zh-tw')
            }
            console.log(data.status)
            if(!data) {
                if(this.$i18n.locale == 'JP') {
                    alert('network error')
                } else {
                    alert('網路錯誤')
                }
                this.isLoading = false;
            } else if(data.status == 102) {  
                let timeout_limit = 0;
                let get_result_interval = setInterval(() => {
                axios.post('/apis/get-pose-result',{user_id:send_user_id,pose_id:pose_id,createdAt:data.createdAt})
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
                                alert('未偵測到動作')
                                this.isLoading = false;
                                clearInterval(get_result_interval);
                                clearInterval(id);
                            }
                            // console.log("未偵測到動作");
                            // alert('動きを検知していません')
                            // this.isLoading = false;
                            // clearInterval(get_result_interval);
                            // clearInterval(id);
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
                                this.video_result.reps_wrong_tags[i][j] = this.assay_pose_data.remind_tags[this.video_result.reps_wrong_tags[i][j]]
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
        retryVideoUpload(e) {
            let target_pose = this.course_data.poses.find(pose => this.current_pose_id == pose.pose_id);
            if(target_pose) {
                if (target_pose.input_id) {
                    e.input_id = target_pose.input_id;
                }
            }
            // console.log(target_pose)
            // console.log(e)
            this.is_error = false;
            this.handleVideoUpload(e);
        },
        closeAssayWindow(){
            this.is_loaded = false;
        },
        openVideoAssisant(){
            console.log('OK');
            this.showAssisant = true;
        },
        handleCourseVideoUpload(e) {
            this.is_loaded = false;
            console.log('OK');
            this.handleVideoUpload(e);
        },
        handleCourseVideoUploadAndroid(e){
            this.open_camera = true;
            this.android_input_id = e.input_id
            console.log('_third' + this.android_input_id);
        },
        newVideoUpload(e){
            console.log(e)
            this.open_camera = false;
            this.isLoading = true;
            e.input_id = this.android_input_id
            console.log('_four' + e.input_id)
            this.handleVideoUpload(e);
        },
        retryRecordAndroid(){
            let target_pose = this.course_data.poses.find(pose => this.current_pose_id == pose.pose_id);
            if(target_pose) {
                if (target_pose.input_id) {
                    this.android_input_id = target_pose.input_id;
                }
            }
            this.is_loaded = false;
            this.is_error = false;
            this.open_camera = true;
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
        openRecordBox(){
            this.open_record = true;
            this.current_pose_id = sessionStorage["course_" + this.course_data.id + "_current_pose_id"];
            console.log(this.current_pose_id)
            this.current_record_data = this.record_data[this.current_pose_id];
        },
        closeCamera(){
            this.open_camera = false;
        },
        switchTag(record) {
            this.assay_pose_data = this.every_pose.find(select => select.pose_id == this.current_pose_id)
            // console.log(record)
            for (var i =0; i<record.reps_wrong_tags.length; i++){
                for(var j=0; j<record.reps_wrong_tags[i].length; j++) {
                    if (!isNaN(Number(record.reps_wrong_tags[i][j]))){
                        record.reps_wrong_tags[i][j] = this.assay_pose_data.remind_tags[record.reps_wrong_tags[i][j]]
                        // debugger
                    }
                }
            }
            console.log(record.reps_wrong_tags)
            return record.reps_wrong_tags;
        },
        setRecordDate(date){
            let update = new Date(date) 
            let day = update.getDate() < 10 ? '0'+update.getDate() : update.getDate();
            let month = (update.getMonth()+1) < 10 ? '0'+(update.getMonth()+1) : (update.getMonth()+1);
            return update.getFullYear()+'/'+month+'/'+day;
        },
        enterBox(i){
            if(i == '0'){
                this.show_alert = false
            }else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/${i}`)
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        getTitle(){
            if (this.course_data) {
                return this.course_data.title;
            } else {
                return '';
            }
        },
        getPoseAmount(){
            if (this.course_data) {
                return this.course_data.pose_amount;
            } else {
                return '';
            }
        },
    }
}
</script>

<style>
.divide-page {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.divide-page h3 {
    font-size: 24px;
    color: #51636F;
    text-align: center;
    font-weight: 400; 
    margin-bottom: 2vh; 
}
/* .mamiyoga-divide-header button {
    display: none;
} */
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
    cursor: pointer;
}
.record-background {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    z-index: 999;
    background: rgba(0,0,0,.6);
    visibility: hidden
}
.record-background.open {
    visibility: visible;
}
.record-box {
    width: 90vw;
    height: 95vh;
    margin: 0 auto;
    border-radius:20px; 
    padding: 0 20px 5px;
    position: absolute;
    left: 5vw;
    top: 100vh;
    background-color: #fff;
    transition: 1s;
}
.record-box input {
    display: none;
}
.record-box.open {
    top: 10vh;
}
.record-box-title {
    width: 170px;
    height: 45px;
    background-color: #9BAEB2; 
    margin: 0 auto;
    /* padding: 5px; */
    border-radius: 0 0 25px 25px;
    margin-bottom: 2vh;
    text-align: center;
    color: #fff;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.select-block {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 2vh;
}
.select-icon {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1vh;
    border-bottom: 1px solid #97A8AF;
    cursor: pointer;
}
#line:checked ~ .select-block .select-icon.select-line,
#grid:checked ~ .select-block .select-icon.select-grid {
    border-bottom: 3px solid #BFBDBD;
}
.practice-record-content-container .show-line-block,.practice-record-content-container .show-grid-block {
    display: none;
}
#line:checked ~ .practice-record-content-container .show-line-block,
#grid:checked ~ .practice-record-content-container .show-grid-block {
    display: block;
}
.select-icon img{
    height:27px;
}
.practice-record-no-content {
    display:flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
    text-align: center;
}
.show-line-block, .show-grid-block {
    height: 69vh;
    overflow-y: auto;
}
@media (min-width: 769px) {
    .divide-page {
        width: 100%;
    }
    .record-background {
        width: 450px;
    }
    .record-box {
        width: 90%;
        left: 5%;
    }
    .loading-bar {
        width: 450px;
    }
    .mamiyoga-show-article {
        width: 80%;
    }
}
</style>
