<template>
    <div>
        <div id="experience-page" v-if="!is_loading && !is_loaded">
            <div id="top-show" v-if="!playFirst">
                <div v-if="!show_nam" id="go-back-btn" @click="goBack">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/about-header-next.png" alt="">
                </div>
                <div v-if="!show_nam" id="start-video" @click="startReady">
                <!-- <div v-if="!show_nam" id="start-video" @click="testFunction"> -->
                    {{$t('dedesktop_syllabus_experience_icon_1')}}
                </div>
                <div v-if="show_nam" id="start-video" style="font-size:30px;">
                    {{ready_go}}
                </div>
                <div v-if="!show_nam && teach_finish" id="start-remind">
                    {{$t('dedesktop_syllabus_experience_icon_6')}}
                </div>
            </div>
            <div id="input-video-container" v-show="switchMethod">
                <video playsinline id="inputVideo" alt="在這裡錄影" muted>Video stream not available.</video>
                <div class="preview-img">
                    <!-- <div v-if="show_nam">{{ready_go}}</div> -->
                    <img style="transform: scaleX(-1);" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/experience-pose-show.png" alt="">
                </div>
            </div>
            <div id="show-course" :class="[is_studying ? 'show':'',switchMethod ? 'small-method':'']" >
                <!-- <div id="repeat-nam" v-if="!count_over">{{nam}}</div> -->
                <div v-if="show_inhale" class="repeat-bar green-bar" :class="is_inhaleing ? 'animate-top':''"  :style="{display: switchMethod ? 'none':''}">
                    <div class="repeat-bar-text">{{$t('dedesktop_syllabus_experience_icon_2')}}</div>
                </div>
                <div v-if="show_exhale" class="repeat-bar red-bar" :class="is_exhaleing ? 'animate-bottom':''" :style="{display: switchMethod ? 'none':''}">
                    <div class="repeat-bar-text">{{$t('dedesktop_syllabus_experience_icon_3')}}</div>
                </div>
                <div v-if="!count_over" class="video-process-bar-block">
                    <div class="video-process-bar" v-for="(pose,i) in routine.poses" :key="i">
                        <div class="video-process-bar-inside" :id="`video-process-bar-inside-${(i+1)}`"></div>
                    </div>
                </div>
                <div v-if="count_over" class="count-over">
                    <div class="count-over-all-btn">
                        <div @click="replay" class="count-over-btn" style="border: 2px solid #fff;">{{$t('dedesktop_syllabus_experience_icon_4')}}</div>
                        <div v-if="!open_camera" @click="closeResult" class="count-over-btn" style="border: 2px #24798F solid;background:#24798F;">結束練習</div>
                        <div v-else @click="newVideoUpload" class="count-over-btn" style="border: 2px #24798F solid;background:#24798F;">{{$t('dedesktop_syllabus_experience_icon_5')}}</div>
                    </div>
                </div>
                <audio controls autoplay id="course-bgm" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_action_BGM.mp3"></audio>
                <div class="course-video-container play" :class="switchMethod ? 'small-method':''">
                    <video playsinline id="course-video" :src="pose_video"  @click="switchVideo"  :class="switchMethod ? 'small-method':''"></video>
                    <div class="exit-practice" :class="switchMethod ? 'small-method':''"  @click="goBack">{{$t('dedesktop_syllabus_experience_exit_btn')}}</div>
                </div>
                <div class="course-video-container rest" @click="is_stop = !is_stop">
                    <div class="course-video-container-icon">
                        <img v-if="is_stop" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-rest-stop.png" alt="">
                        <img v-else src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-rest-start.png" alt="">
                    </div>
                    <div id="course-video-rest">
                        {{$t('dedesktop_syllabus_experience_icon_7')}}
                    </div>
                </div>
                
            </div>

            <!-- 教學 -->
            <div v-if="!teach_finish" class="experience-teach">
                <div class="preview-img people" id="people">
                    <img style="transform:scaleX(-1);" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/experience-pose-show.png" alt="">
                </div>
                <div class="repeat-bar green-bar" id="teach-bar">
                    <div class="repeat-bar-text">{{$t('dedesktop_syllabus_experience_icon_2')}}</div>
                </div>
                <div class="count-over-all-btn" id="teach-show-btn">
                    <div class="count-over-btn" style="border: 2px solid #fff;">{{$t('dedesktop_syllabus_experience_icon_4')}}</div>
                    <div class="count-over-btn" style="border: 2px #24798F solid;background:#24798F;">{{$t('dedesktop_syllabus_experience_icon_5')}}</div>
                </div>
                <div class="video-process-bar-block" id="teach-process" style="display:none">
                    <div class="video-process-bar" v-for="(pose,i) in routine.poses" :key="i">
                        <div class="video-process-bar-inside"></div>
                    </div>
                </div>
                <div v-if="!select_camera" class="experience-select-camera">
                    <p class="experience-select-camera-title" v-html="$t('desktop_syllabus_experience_remind_title')"></p>
                    <div class="info-desktop-red-btn" style="width: 250px;" @click="getCamera">{{$t('desktop_syllabus_experience_remind_btn')}}</div>
                    <p class="experience-select-camera-not" @click="notGetCamera">{{$t('desktop_syllabus_experience_remind_little')}}</p>
                    <p class="experience-select-camera-text">{{$t('desktop_syllabus_experience_remind_text')}}</p>
                </div>
                <div v-if="select_camera && remind_1" class="experience-teach-remind first">
                    <div class="experience-teach-remind-title">{{$t('desktop_syllabus_experience_remind_tip_1')}}</div>
                    <p>{{$t('desktop_syllabus_experience_remind_tip_1_content')}}</p>
                    <div class="experience-teach-remind-flex-btn">
                        <div class="experience-teach-remind-red-btn" @click="nextRemind1">{{$t('desktop_syllabus_experience_remind_tip_btn_1')}}</div>
                        <div class="experience-teach-remind-not-red-btn" @click="skipTeach">{{$t('desktop_syllabus_experience_remind_tip_btn_2')}}</div>
                    </div>
                </div>
                <div v-if="select_camera && remind_2" class="experience-teach-remind second">
                    <div class="experience-teach-remind-title">{{$t('desktop_syllabus_experience_remind_tip_2')}}</div>
                    <p>{{$t('desktop_syllabus_experience_remind_tip_2_content')}}</p>
                    <div class="experience-teach-remind-flex-btn">
                        <div class="experience-teach-remind-red-btn" @click="nextRemind2">{{$t('desktop_syllabus_experience_remind_tip_btn_1')}}</div>
                        <div class="experience-teach-remind-not-red-btn" @click="skipTeach">{{$t('desktop_syllabus_experience_remind_tip_btn_2')}}</div>
                    </div>
                </div>
                <div v-if="select_camera && remind_3" class="experience-teach-remind third">
                    <div class="experience-teach-remind-title">{{$t('desktop_syllabus_experience_remind_tip_3')}}</div>
                    <p>{{$t('desktop_syllabus_experience_remind_tip_3_content')}}</p>
                    <div class="experience-teach-remind-flex-btn">
                        <div class="experience-teach-remind-red-btn" @click="nextRemind3">{{$t('desktop_syllabus_experience_remind_tip_btn_1')}}</div>
                        <div class="experience-teach-remind-not-red-btn" @click="skipTeach">{{$t('desktop_syllabus_experience_remind_tip_btn_2')}}</div>
                    </div>
                </div>
                <div v-if="select_camera && remind_4" class="experience-teach-remind four">
                    <div class="experience-teach-remind-title">{{$t('desktop_syllabus_experience_remind_tip_4')}}</div>
                    <p>{{$t('desktop_syllabus_experience_remind_tip_4_content')}}</p>
                    <div class="experience-teach-remind-flex-btn">
                        <div class="experience-teach-remind-red-btn" @click="nextRemind4">{{$t('desktop_syllabus_experience_remind_tip_btn_1')}}</div>
                        <div class="experience-teach-remind-not-red-btn" @click="skipTeach">{{$t('desktop_syllabus_experience_remind_tip_btn_2')}}</div>
                    </div>
                </div>
                <div v-if="select_camera && remind_5" class="experience-teach-remind five">
                    <div class="experience-teach-remind-title">{{$t('desktop_syllabus_experience_remind_tip_5')}}</div>
                    <p>{{$t('desktop_syllabus_experience_remind_tip_5_content')}}</p>
                    <div class="experience-teach-remind-flex-btn">
                        <div class="experience-teach-remind-red-btn" @click="skipTeach">{{$t('desktop_syllabus_experience_remind_tip_btn_1')}}</div>
                        <!-- <div class="experience-teach-remind-not-red-btn" @click="skipTeach">結束教學</div> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 上傳 -->
        <!-- <div class="loading-bar" v-if="is_loading">
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
        </div> -->
        <!-- 顯示結果 -->
        <!-- <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent" @retryRecordAndroid="retryRecordAndroid" @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video> -->
        <!-- <mamiyoga-assay-video v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video>  -->
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
        <!-- <mamiyoga-window-alert-box v-if="need_resee">
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
        </mamiyoga-window-alert-box> -->

         <!-- 顯示建議 -->
        <mamiyoga-new-result-block v-if="show_result" @closeResult="closeResult"
        :result_score="result_score" :video_result="video_result"></mamiyoga-new-result-block>

        <mamiyoga-loading :loading="heart_loading" :extraClass="extraClass"></mamiyoga-loading>
    </div>
</template>

<script>
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import MamiyogaNewResultBlock from '~/components/mamiyoga/MamiyogaNewResultBlock.vue';
import MamiyogaLoading from '~/components/mamiyoga/MamiyogaLoading.vue';
import axios from '~/config/axios-config';
import { mapMutations, mapGetters } from 'vuex';

export default {
    components:{
        MamiyogaWindowAlertBox,
        MamiyogaAssayVideo,
        MamiyogaNewResultBlock,
        MamiyogaLoading,
    },
    props:{
        routine: Object,
    },
    data:()=>({
        inputVideo:'',
        isRecordingIcon:'',
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

        select_camera: false,
        remind_1: true,
        remind_2: false,
        remind_3: false,
        remind_4: false,
        remind_5: false,
        teach_finish: false,

        open_camera: Boolean,

        is_stop: false,
        pose_video: '',

        heart_loading: false,
        retry_time:0,
        show_result: false,
        video_result: {},
        result_score: '43',
        result_cal: '86',

        current_pose_id:'',

        switchMethod: true,
        timeId: 0,
        playFirst: false,

        extraClass: '',
    }),
    async mounted(){
        if (process.client) {
            this.inputVideo = document.querySelector('#inputVideo')
            this.articles = await require('~/config/mamiyoga-post');
            this.post_article = this.articles[0].post_article;
        }
    },
    destroyed() {
        if (this.video_recorder) {
            this.video_recorder.stopRecording();
            this.video_recorder.closeCamera();
        }
    },
    methods: {
        startReady(){
            if(this.teach_finish){
                this.show_nam = true
                // this.switchMethod = true
                let id = setInterval(() => {
                    this.ready_go--
                    if(this.ready_go == 0){
                        
                        this.startRoutine();
                        clearInterval(id)
                    }
                }, 1000);
            }
        },
        startRoutine(){
            this.is_studying = true
            this.playVideo(0);
        },
        playVideo(i){
            let poses = this.routine.poses;

            if(poses[i].pose_brief != 'break') {    
                this.heart_loading = true
                if (this.pose_video != poses[i].pose_video) {
                    this.pose_video = poses[i].pose_video
                }
                if (this.open_camera && poses[i].pose_ai) { 
                    this.current_pose_id = poses[i].pose_id
                    this.video_recorder.startRecording({
                        pose_id: `yoga_${this.current_pose_id}`,
                        user_id: this.user.user_id || "guest",
                        language: `${this.$i18n.locale == 'zh-TW' ? 'zh-tw':'jp'}`,
                    });
                }
                
                let co_vid = document.querySelector('#course-video')
                co_vid.style.display = 'block';
                co_vid.onloadedmetadata = function() {
                    if(!this.playFirst){
                        this.playFirst = true
                        setTimeout(() => {
                            this.switchMethod = false
                        }, 1000);
                    }
                // co_vid.addEventListener('loadedmetadata', function (e) {
                    this.heart_loading = false
                    this.video_length = co_vid.duration
                    co_vid.play() 
                    let processBar = document.querySelector(`#video-process-bar-inside-${(i+1)}`)
                    this.timeId = setInterval(() => {
                        let bar_percentage = co_vid.currentTime / this.video_length
                        // console.log(co_vid.currentTime)
                        // if (co_vid.currentTime >= poses[i].inhale[0][0] && co_vid.currentTime <= poses[i].inhale[0][1]) {
                        //     // todo playInhale(bar_percentage)
                        // }
                        for(let j = 0; j< poses[i].inhale.length;j++){
                            if(co_vid.currentTime >= poses[i].inhale[j][0] && co_vid.currentTime <= poses[i].inhale[j][2]){
                                this.show_inhale = true
                                if(co_vid.currentTime >= poses[i].inhale[j][1]) {
                                    this.is_inhaleing = true
                                }
                                break
                            } else {
                                this.show_inhale = false
                                this.is_inhaleing = false
                            }
                            
                            if(co_vid.currentTime >= poses[i].exhale[j][0] && co_vid.currentTime <= poses[i].exhale[j][2]) {
                                this.show_exhale = true
                                if(co_vid.currentTime >= poses[i].exhale[j][1]) {
                                    this.is_exhaleing = true
                                }
                                break
                            } else {
                                this.show_exhale = false
                                this.is_exhaleing = false
                            }
                        }
                        if(this.$mq != 'desktop'){
                            if(window.innerWidth >  window.innerHeight) {
                                processBar.style.height = '100%';
                                processBar.style.width =  (bar_percentage*100)+'%';
                            } else {
                                processBar.style.height =  (bar_percentage*100)+'%';
                                processBar.style.width = '100%'; 
                            }
                        } else {
                            processBar.style.height = '100%';
                            processBar.style.width = (bar_percentage*100)+'%'; 
                        }
                        
 
                        if (bar_percentage == 1) {
                            this.show_inhale = false
                            this.show_exhale = false
                            this.is_inhaleing = false
                            this.is_exhaleing = false
                            if (this.open_camera && poses[i].pose_ai) {
                                this.video_recorder.stopRecording();
                            }
                            if (poses[i+1]) {
                                this.pose_video = ''
                                co_vid.style.display = 'none';
                                this.playVideo(i+1)
                            } else {
                                this.count_over = true
                            }
                            console.log('stop')
                            clearInterval(this.timeId)
                        }
                    }, 100);
                    // co_vid.oncanplay = null
                }.bind(this)
            } else {
                this.switchMethod = false
                let rest = document.querySelector('.course-video-container.rest')
                rest.style.display = 'flex';
                let height = 0
                let resting_time = poses[i].duration * 1000;
                // this.pose_video = poses[i+1].pose_video
                let processBar = document.querySelector(`#video-process-bar-inside-${(i+1)}`)
                let id = setInterval(() => {
                    if(this.$mq != 'desktop'){
                        if(window.innerWidth >  window.innerHeight) {
                            processBar.style.height = '100%';
                            processBar.style.width = (height)+'%';
                        } else {
                            processBar.style.height = (height)+'%';
                            processBar.style.width = '100%'; 
                        }
                    } else {
                        processBar.style.height = '100%';
                        processBar.style.width = (height)+'%';
                    }
                    
                    if(height >= 100) {
                        rest.style.display = 'none';
                        if (poses[i+1]) {
                            this.playVideo(i+1)
                        } else {
                            this.count_over = true
                        }
                        clearInterval(id)
                    } else if (this.is_stop) {
                        
                    } else {
                        height += (100*100/resting_time);
                    }
                }, 100);
            }
        },
        processRecordedVideo(file) {
            this.recorded_video = file; 
        },
        replay(){ 
            let co_vid = document.querySelector('#course-video')
            co_vid.style.display = 'block';
            this.nam = 2 ;
            this.count_over = false;
            this.playVideo(0);
            this.switchMethod = false;
        },
        // async newVideoUpload(){
        //     if(!this.open_camera) {
        //         this.$emit('openResult')
        //     } else {
        //        let score = await this.video_recorder.getResult()
        //        console.log(score)
        //        this.$emit('openResult',score)
        //     }
        // },
        async newVideoUpload(){
            if(!this.open_camera) {
                this.show_result = true
            } else {
                // let escor = await this.video_recorder.getDetailResult()
                // console.log(score)
                // this.result_score = Math.floor(score)
                // this.result_cal = (Math.floor(score))*2
                try {
                    this.video_result = await this.video_recorder.getDetailResult()
                    if (this.video_result && this.video_result.status == 200) {
                        this.heart_loading = false;
                        let use_ai = this.routine.poses.find(pose => pose.pose_id == this.current_pose_id)
                        if (typeof this.video_result.reps_wrong_tags == "object") {
                            for(var i =0; i< this.video_result.reps_wrong_tags.length; i++){
                                if (typeof this.video_result.reps_wrong_tags[i] == "object") {
                                    for(var j = 0; j<this.video_result.reps_wrong_tags[i].length; j++){
                                        this.video_result.reps_wrong_tags[i][j] = use_ai.pose_tags[this.video_result.reps_wrong_tags[i][j]]
                                    }
                                } else {
                                    this.video_result.reps_wrong_tags[i]= [use_ai.pose_tags[this.video_result.reps_wrong_tags[i]]]
                                }
                            } 
                        } else {
                            this.video_result.reps_wrong_tags = [use_ai.pose_tags[this.video_result.reps_wrong_tags]]
                        }
                    } else if(this.video_result.status == 102){
                        this.heart_loading = true;
                        if(this.$mq != 'desktop'){
                            this.extraClass = 'loading-set'
                        }
                        let retryGetResult = this.newVideoUpload;
                        this.retry_time += 1;
                        if (this.retry_time > 30) {
                            this.video_result.score = 0      
                            this.video_result.reps_wrong_tags = [[`${this.$t('ai_res_wrong_tag_1')}`]]
                            this.heart_loading = false;
                            this.extraClass = ''
                        } else {
                            let  t = setTimeout(() => {
                                retryGetResult();
                                // clearTimeout(t);
                            }, 3000); 
                        }
                        
                    } else if(this.video_result.error_code && this.video_result.status == 204 || this.video_result.status == 400 || this.video_result.status == 500){
                        this.video_result.score = 0         
                        this.video_result.reps_wrong_tags = [[`${this.$t('ai_res_wrong_tag_2')}`]]
                        this.heart_loading = false;
                    } else {
                        this.$errorLogger(this.$router.path,'newVideoUpload',this.video_result);
                        this.heart_loading = false;
                        this.video_result = {}
                        this.video_result.score = 0
                        this.video_result.reps_wrong_tags = [[`${this.$t('ai_res_wrong_tag_3')}`]]
                    }
                    this.show_result = true
                } catch (error) {
                    this.$errorLogger(this.$router.path,'newVideoUpload',error.toString()+"list = "+this.video_recorder.getVideoList().toString());
                    console.error('loading result error',error);
                    this.heart_loading = false;
                    this.video_result = {}
                    this.video_result.score = 0
                    this.video_result.reps_wrong_tags = [[`${this.$t('ai_res_wrong_tag_4')}`]]
                    this.show_result = true
                }
            }
        },
        changeArticle(){
            let x = 0;
            x = Math.floor(Math.random()*10)
            if (this.last_article_id == ''){
                this.last_article_id = x
                this.post_article = this.articles[x].post_article
            }
            else{
                while(this.last_article_id == x){
                    x = Math.floor(Math.random()*10)
                }
                this.last_article_id = x
                this.post_article = this.articles[x].post_article
            }
        },
        goBack(){
            if(this.switchMethod) {
                clearInterval(this.timeId)
            }  
            this.$emit('goBack');
        },
        getCamera(){
            this.video_recorder = this.$newLudoRTC({video_element_id:'#inputVideo'});
            this.video_recorder.openCamera();
            this.select_camera = true;
            this.open_camera = true;
            document.querySelector('#start-video').style.zIndex = '15';
            document.querySelector('#go-back-btn').style.zIndex = '15';
            document.querySelector('#top-show').style.zIndex = 'unset';
        },
        notGetCamera(){
            this.teach_finish = true
            this.select_camera = true;
            this.open_camera = false;
            document.querySelector('#start-video').style.zIndex = '15';
            document.querySelector('#go-back-btn').style.zIndex = '15';
            document.querySelector('#top-show').style.zIndex = 'unset';
        },
        skipTeach(){
            this.teach_finish = true
            document.querySelector('#top-show').style.zIndex = '15';
        },
        nextRemind1(){
            this.remind_1 = false;
            this.remind_2 = true;
            document.querySelector('#start-video').style.zIndex = 'unset';
            document.querySelector('#people').style.display = 'flex';
            document.querySelector('#people').style.zIndex = '15';
        },
        nextRemind2(){
            this.remind_2 = false;
            this.remind_3 = true;
            document.querySelector('#people').style.display = 'none';
            document.querySelector('#teach-bar').style.display = 'block';
        },
        nextRemind3(){
            this.remind_3 = false;
            this.remind_4 = true;
            document.querySelector('#teach-bar').style.display = 'none';
            document.querySelector('#teach-process').style.display = 'flex';
        },
        nextRemind4(){
            this.remind_4 = false;
            this.remind_5 = true;
            document.querySelector('#teach-process').style.display = 'none';
            document.querySelector('#teach-show-btn').style.display = 'flex';
        },
        closeResult(){
            if(!this.open_camera) {
                this.$emit('closeResult')
            } else {
                this.$emit('closeResult',this.result_score)
            }
        },
        switchVideo(){
            if(this.is_studying) {
                this.switchMethod = !this.switchMethod
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
}
</script>

<style>
#experience-page {
    min-height: -webkit-fill-available;
    overflow: hidden;
}
#input-video-container {
    min-height: -webkit-fill-available;
    overflow: hidden;
    background: #000;
}
.preview-img {
    transform: rotate(90deg);
    position: fixed;
    top: 30vh;
    left: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_action_preview.png'); */
}
.preview-img.people {
    display:none;
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
    /* height:100vh; */
    min-height: -webkit-fill-available;
}
#top-show {
    position: relative;
    z-index: 10;
}
#top-show.small-method {
    display:none;
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
    /* width: 25vw;
    height: 7vh; */
    width: 90px;
    height: 50px;
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
#start-video.big-method{
    transition: .3s;
    width: 100vw;
    min-height: -webkit-fill-available;
    top: 0;
    left: 0;
}
#start-remind {
    /* width: fit-content; */
    height: 40px;
    background: #C74F4F;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 0 10px;

    position: absolute;
    top: 8vh;
    right: 15vw;
    transform: rotate(90deg);
}
#start-remind::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5.5px 10px 5.5px;
    border-color: transparent transparent #C74F4F transparent;
    top: -8px;
    left: calc(50% - 5px);
}
#show-course {
    z-index: 0;
    width: 100vw;
    min-height: -webkit-fill-available;
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
    background: #000;
}
#course-bgm {
    opacity: 0;
}

.course-video-container.small-method {
    background: none;
}
#show-course.small-method{
    background: none !important;
}
#course-video {
    transform: rotate(90deg);
    width: 100vh;
    transition: .5s;
}
#course-video.small-method {
    border-radius: 5px;
    position: absolute;
    width: 140px;
    right: 1vw ;
    top: 5vh;
}
.course-video-container.rest{
    display:none;
    background: #24798f;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    /* width: 100%; */
    min-width: -webkit-fill-available;
    min-height: -webkit-fill-available;
    align-items: center;
    position: fixed;
}
.course-video-container.play {
    /* min-width: 100vh; */
    min-width: -webkit-fill-available;
    min-height: -webkit-fill-available;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: fixed;
    top: 0;
    left: 0; */
}
.course-video-container-icon {
    position: absolute;
    transform: rotate(90deg);
    top: 5vh;
    right: 60vw;
}
.exit-practice {
    display: none;
}
.exit-practice.small-method {
    display: block;
    position: absolute;
    background: #24798f;
    padding: 10px 25px;
    border-radius: 30px;
    color: #fff;
    bottom: 15vh;
    right: 5vw;
    cursor: pointer;
    transform: rotate(90deg);
}
#show-course-video,#course-video-1,
#course-video-2, #course-video-3,#course-video-rest {
    transform: rotate(90deg);
    width: 100vh;
}
#course-video-rest {
    display: flex;
    justify-content: center;
    align-items: center;
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
    padding-top: 0; 
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
.video-process-bar-block {
    position: absolute;
    left: 5vw;
    top: 5vh;
    width: 12px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.video-process-bar {
    background: rgb(255, 255, 255,.5);
    z-index: 101;
    position: relative;
    margin: 1vh 0;
    flex:1;
    /* left: 5vw; */
    border-radius: 20px;
}
.video-process-bar-inside {
    background: #fff;
    width: 100%;
    border-radius: 20px;
}
/* #video-process-bar-inside-1,#video-process-bar-inside-2,
#video-process-bar-inside-3,#video-process-bar-inside-4,#video-process-bar-inside-5{
    background: #fff;
    width: 100%;
    border-radius: 20px;
} */
.count-over {
    background: linear-gradient(90deg,#000,rgba(0,0,0,0));
    min-height: -webkit-fill-available;
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
    bottom: 20vh;
    left: -10vw;
}
.count-over-btn {
    width: 90px;
    height: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.experience-teach {
    width: 100vw;
    min-height: -webkit-fill-available;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
}
#experience-page .info-desktop-red-btn{
    color: #F8F7F8;
    font-size: 16px;
    font-weight: bold;
    background: #C74F4F;
    border: 3px solid #C74F4F;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    margin-top: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    margin: 35px auto 15px;
}
.experience-select-camera {
    width: 100%;
    height: 85vw;
    background: #FFFAF0;
    border-radius: 15px;
    padding-top: 40px;
    transform: rotate(90deg);
}
.experience-select-camera p {
    width: 90%;
    text-align: center;
}
.experience-select-camera-title {
    color: #24798F;
    font-size: 20px;
    font-weight: 500;
    margin: 0 auto;
}
.experience-select-camera-not {
    font-size: 12px;
    cursor:pointer;
    font-weight: 400;
    color: #7B7B7B;
    text-decoration: underline;
    margin: 0 auto 30px;
}
.experience-select-camera-text {
    font-size: 14px;
    font-weight: 400;
    color: #8D8D8D;
    margin: 0 auto;
}
.experience-teach-remind {
    position: absolute;
    transform: rotate(90deg);
}
.experience-teach-remind.first {
    top: 14vh;
    right: 5vw;
}
.experience-teach-remind.second {
    left: 25vw;
    bottom: 13vh;
    z-index: 17;
}
.experience-teach-remind.third {
    left: 15vw;
    top: calc(18vh + 80px)
}
.experience-teach-remind.four {
    bottom: 17vh;
    right: 25vw;
}
.experience-teach-remind.five {
    bottom: 19vh;
    /* right: 13vw; */
}
.experience-teach-remind-title {
    background: #707070;
    width: fit-content;
    padding: 5px 15px;
    border-radius: 12px;
    color: #fff;
    font-weight: 500;
}
.experience-teach-remind p {
    color: #fff;
    font-weight: 500;
    margin-top: 10px;
    font-size: 15px;
}
.experience-teach-remind-flex-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
}
.experience-teach-remind-red-btn {
    width: 80px;
    font-size: 12px;
    height: 40px;
    background: #C74F4F;
    border-radius: 10px;
    border: 2px solid #c74f4f;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
}
.experience-teach-remind-not-red-btn {
    width: 80px;
    font-size: 12px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #fff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor:pointer;
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
    min-height: -webkit-fill-available;
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
#teach-bar,#teach-show-btn {
    display: none;
}
#loading-icon {
    width: 100px;
    transform: rotate(90deg);
}
.path {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: 3s drawing-svg 1s infinite;
}
@keyframes drawing-svg {
  100% {
    stroke-dashoffset: 0;
  }
}
.loading-set {
    transform: rotate(0deg) !important;
}
@media (min-width: 769px) {
    #experience-page {
        width: 100vw;
        min-height: -webkit-fill-available;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
    }
    #input-video-container {
        background: #000;
        display: flex;
    }
    #inputVideo {
        width: 100vw;
        height: auto;
    }
    #start-remind {
        width: fit-content;
        transform: rotate(0deg);
        position: absolute;
        left: calc(5vw + 40px);
        top: calc(5vh + 140px);
    }
    #start-video {
        width: 200px;
        height: 120px;
        transform: rotate(0deg);
        right: unset;
        left: 5vw;
        cursor: pointer;
    }
    #go-back-btn {
        left: 5vw;
        transform: rotate(0deg);
        top: 90vh;
        cursor: pointer;
    }
    #go-back-btn img {
        width: 60px;
    }
    .preview-img {
        transform: rotate(0deg);
        width: 100vw;
        min-height: -webkit-fill-available;
        top: 0;
        left: 0;
    }
    .preview-img img {
        height: 50vh;
    }
    .course-video-container {
        /* width: 100%;
        height: 100%; */
        background: #000;
        display: flex;
        align-items: center;
    }
    .course-video-container.rest{
        display:none;
        background: #24798f;
        color: #fff;
        font-size: 62px;
        font-weight: bold;
    }
    .course-video-container-icon {
        transform: rotate(0deg);
        top: 5vh;
        left: 5vw;
    }
    #show-course-video, #course-video, #course-video-1, #course-video-2, #course-video-3, #course-video-rest {
        width: 100vw;
        transform: rotate(0deg);
    }
    #course-video.small-method {
        border-radius: 5px;
        position: absolute;
        left: 5vw;
        right: unset;
        width: 200px;
    }
    .exit-practice.small-method {
        top: 5vh;
        bottom: unset;
        right: 5vw;
        transform: rotate(0deg);
    }
    #course-video-rest {
        justify-content: center;
    }
    .repeat-bar {
        transform: rotate(0deg);
        height: 70vh;
        top: 15vh;
        left: 5vw;
        padding-top: 55vh;
    }
    .green-bar {
        padding-top: 55vh;
    }
    .red-bar {
        padding-top: 0vh;
    }
    .animate-top {
        padding-top: 0; 
    }
    .animate-bottom {
        padding-top: 55vh;
    }
    .video-process-bar-block {
        /* transform: rotate(-90deg);
        bottom: -40vh;
        top: unset;
        left: unset;
        z-index: 1000; */
        height: 12px;
        width: 90%;
        flex-direction: unset;
        top: unset;
        bottom: 10vh;
    }
    .video-process-bar {
        margin: 0 1vh;
    }
    .count-over {
        height: 45%;
        width: 100%;
        bottom: 0;
        background: linear-gradient(0deg,#000,rgba(0, 0, 0, 0));
    }
    .count-over-btn {
        width: 150px;
        height: 60px;
    }
    .count-over-all-btn {
        width: 360px;
        transform: rotate(0deg);
        left: unset;
        right: 10vw;
        bottom: 5vh;
    }

    .experience-select-camera {
        width: 50%;
        max-width: 750px;
        height: 330px;
        background: #FFFAF0;
        border-radius: 15px;
        padding-top: 30px;
        transform: rotate(0deg);
    }
    .experience-select-camera-title {
        font-size: 30px;
    }
    .experience-select-camera-not {
        font-size: 15px;
    }
    .experience-select-camera-text {
        font-size: 17px;
    }
    .experience-teach-remind {
        transform: rotate(0deg);
    }
    .experience-teach-remind.first {
        top: calc(8vh + 120px);
        left: 5vw;
        right: unset;
    }
    .experience-teach-remind.second {
        left: 60vw;
        bottom: unset;
        z-index: 17;
    }
    .experience-teach-remind.third {
        left: 13vw;
        top: unset;
    }
    .experience-teach-remind.four {
        bottom: 10vh;
        right: 19vw;
    }
    .experience-teach-remind.five {
        bottom: 15vh;
        right: 11vw;
    }
    .experience-teach-remind-title {
        font-size:  15px;
    }
    .experience-teach-remind p {
        font-size: 21px;
    }
    .experience-teach-remind-red-btn,.experience-teach-remind-not-red-btn {
        width: 100px;
        font-size: unset;
    }
    #loading-icon {
        width: 100px;
        transform: rotate(0deg);
    }
    #course-video {
        /* position: absolute;
        top: 10vh; */
    }
    .course-video-container.rest{
        background: #24798f;
    }
    .course-video-container.play {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
@media (max-width: 768px) and (orientation:landscape) {
    #experience-page {
        width: 100vw;
        min-height: -webkit-fill-available;
        /* min-height: 80vh; */
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background: #000;
    }
    #input-video-container {
        background: #000;
        display: flex;
    }
    #inputVideo {
        width: 100vw;
        height: auto;
    }
    #start-remind {
        width: fit-content;
        transform: rotate(0deg);
        position: absolute;
        left: calc(0vw + 40px);
        top: calc(-15vh + 140px);
    }
    #start-video {
        width: 90px;
        height: 50px;
        transform: rotate(0deg);
        right: unset;
        left: 5vw;
        cursor: pointer;
    }
    #go-back-btn {
        left: 5vw;
        transform: rotate(0deg);
        top: 65vh;
        cursor: pointer;
    }
    #go-back-btn img {
        width: 60px;
    }
    .preview-img {
        transform: rotate(0deg);
        width: 100vw;
        min-height: -webkit-fill-available;
        top: 0;
        left: 0;
    }
    .preview-img img {
        height: 70vh;
    }
    .course-video-container {
        /* width: 100%;
        height: 100%; */
        background: #000;
        display: flex;
        align-items: center;
    }
    .course-video-container.rest{
        display:none;
        background: #24798f;
        color: #fff;
        font-size: 62px;
        font-weight: bold;
    }
    .course-video-container-icon {
        transform: rotate(0deg);
        top: 5vh;
        left: 5vw;
    }
    #show-course-video, #course-video, #course-video-1, #course-video-2, #course-video-3, #course-video-rest {
        width: 100vw;
        transform: rotate(0deg);
    }
    #course-video.small-method {
        border-radius: 5px;
        position: absolute;
        left: 5vw;
        right: unset;
        width: 200px;
    }
    .exit-practice.small-method {
        top: 5vh;
        bottom: unset;
        right: 5vw;
        transform: rotate(0deg);
    }
    #course-video-rest {
        justify-content: center;
    }
    .repeat-bar {
        transform: rotate(0deg);
        height: 55vh;
        top: 5vh;
        left: 5vw;
        padding-top: 55vh;
    }
    .green-bar {
        padding-top: 15%;
    }
    .red-bar {
        padding-top: 0vh;
    }
    .animate-top {
        padding-top: 0; 
    }
    .animate-bottom {
        padding-top: 15%;
    }
    .video-process-bar-block {
        /* transform: rotate(-90deg);
        bottom: -40vh;
        top: unset;
        left: unset;
        z-index: 1000; */
        height: 12px;
        width: 90%;
        flex-direction: unset;
        top: unset;
        bottom: 10vh;
    }
    .video-process-bar {
        margin: 0 1vh;
    }
    .count-over {
        height: 45%;
        width: 100%;
        bottom: 0;
        background: linear-gradient(0deg,#000,rgba(0, 0, 0, 0));
    }
    .count-over-btn {
        width: 150px;
        height: 60px;
    }
    .count-over-all-btn {
        width: 360px;
        transform: rotate(0deg);
        left: unset;
        right: 10vw;
        bottom: 5vh;
    }
    .experience-teach {
        min-height:100%;
        /* height: 100vh; */
    }
    .experience-select-camera {
        width: 70%;
        max-width: 750px;
        height: auto;
        background: #FFFAF0;
        border-radius: 15px;
        padding-top: 30px;
        transform: rotate(0deg);
    }
    .experience-select-camera-title {
        font-size: 30px;
    }
    .experience-select-camera-not {
        font-size: 15px;
    }
    .experience-teach-remind {
        transform: rotate(0deg);
    }
    .experience-teach-remind.first {
        top: 25vh;
        left: 5vw;
        right: unset;
    }
    .experience-teach-remind.second {
        left: 60vw;
        bottom: unset;
        z-index: 17;
    }
    .experience-teach-remind.third {
        left: 17vw;
        top: unset;
    }
    .experience-teach-remind.four {
        bottom: 20vh;
        right: 19vw;
    }
    .experience-teach-remind.five {
        bottom: 26vh;
        right: 11vw;
    }
    .experience-teach-remind-title {
        font-size:  15px;
    }
    .experience-teach-remind p {
        font-size: 21px;
    }
    .experience-teach-remind-red-btn,.experience-teach-remind-not-red-btn {
        width: 100px;
        font-size: unset;
    }
    #loading-icon {
        width: 100px;
        transform: rotate(0deg);
    }
    #course-video {
        /* position: absolute;
        top: 10vh; */
    }
    .course-video-container.rest{
        background: #24798f;
    }
    .course-video-container.play {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    #experience-page .info-desktop-red-btn {
        margin-top: 10px;
    }
    .experience-select-camera-not,.experience-select-camera-text {
        margin-bottom: 15px;
    }

}
@media (min-width: 769px) and (max-width: 900px) and (orientation:landscape) {
    .green-bar {
        padding-top: 15%;
    }
    .animate-bottom {
        padding-top: 15%;
    }
    .animate-top{
        padding-top: 0;
    }
    .repeat-bar {
        height: 55vh;
        top: 10vh;
    }
    #go-back-btn {
        top: 70vh;
    }
    .preview-img img {
        height: 70vh;
    }
    .experience-teach-remind.four {
        bottom: 20vh;
    }
    .experience-teach-remind.five {
        bottom: 25vh;
    }
}
</style>