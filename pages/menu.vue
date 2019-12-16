<template>
    <div>
        <div v-if="$mq !== 'desktop'">
            <div class="course-menu">
                <div class="course-information" >
                    <!-- <mamiyoga-header v-if="$mq !== 'desktop'" class="menu-mobile-header" btnText="登出" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header> -->
                    <mamiyoga-hamburger-header></mamiyoga-hamburger-header>
                    <div class="course-information-select">
                        <div class="course-information-content">
                            <p @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/' +$i18n.locale}/menu`)">{{$t('desktop_header_menu_2')}}</p>
                        </div>
                        <div class="course-information-content">
                            <p :style="{borderRight: $i18n.locale == 'JP' ? '0px':''}" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/' +$i18n.locale}/syllabus`)">{{$t('desktop_header_menu_3')}}</p>
                        </div>
                        <!-- <div class="course-information-content">
                            <p @click="not_online = true" style="cursor:pointer;">{{$t('menu_nav_text_friend')}}</p>
                        </div> -->
                        <div class="course-information-content" v-if="$i18n.locale != 'JP'">
                            <p style="cursor:pointer;" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/' +$i18n.locale}/information`)">{{$t('desktop_header_menu_4')}}</p>
                        </div>
                        <div class="course-information-content" v-if="$i18n.locale == 'JP'"></div>
                    </div>
                    <!-- <div class="course-mail-icon" @click="not_online = true">
                        <img style="width:25px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/menu-envelope.png" alt="">
                    </div> -->
                </div>
                <div class="course-menu-box">
                    <mamiyoga-course-content :courses="courses"></mamiyoga-course-content>
                </div>
            </div>
            <div class="not_online_box" :class="not_online ? 'open':''">
                <mamiyoga-window-alert-box>
                    <div class="cancel-box" @click="not_online = false">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="" >
                    </div>
                    <p>{{$t('teach_assay_chat_text')}}</p>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top: 20px;width:40%;">
                    <p style="font-size:13px;margin:15px 0px;" v-html="$t('teach_assay_chat_content')"></p>
                    <div class="star-line-box">
                        <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-space:0;margin-top:20px" @click="not_online = false">{{$t('teach_assay_button_development')}}</button>
                    </div>
                </mamiyoga-window-alert-box>
            </div>
        </div>
        <div class="menu-desktop" v-else>
            <mamiyoga-desktop-course-video @openCourseVideo="openCourseVideo" @openNextVideo="openNextVideo"
            @openOtherCourseVideo="openOtherCourseVideo" @closeVideo="closeCourse" :currentCourse="currentCourse" 
            @goSeries="goSeries" :poseDes.sync="poseDes" :switchPose.sync="switchPose" :poseTitle.sync="poseTitle" 
            :current_input_id.sync="current_input_id" :allCourses="courses" @goPoseMirror="goPoseMirror"></mamiyoga-desktop-course-video>
            <mamiyoga-desktop-nav-header bgColor="#24798f"></mamiyoga-desktop-nav-header>
            <div class="menu-desktop-top-block">
                <div class="menu-desktop-top-block-title">
                    <h5 v-if="$i18n.locale != 'JP'">單元一、骨盆矯正瑜珈</h5>
                    <h5 v-else>コース1、骨盤矯正ヨガ</h5>
                    <p v-if="$i18n.locale != 'JP'">大概是產後一個月，就可以慢慢開始矯正骨盆。可以消除腰部周圍附著脂肪、讓新陳代謝提升，這些都有非常顯著的減肥效果喔！</p>
                    <p v-else>骨盤を正しい位置に調整し、ウエストまわりに脂肪をつきにくくしてくれます。気になるおしり周りや太ももを美しく整え、美しいボディラインを手に入れることも。</p>
                    <div class="info-desktop-red-btn" @click="startDefaultCourse()">{{$t('desktop_course_first_btn')}}</div>
                </div>
                <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(pose,i) in first_course.poses" :key="i" stagger="500" 
                    :courseBg="pose.ai_preview_img" :courseTitle="pose.pose_brief" :courseVideo="pose.pose_video" :is_trial="pose.trial"
                    @openCourseVideo="openDefalutPoseVideo(pose)" :showTag="false"
                    ></mamiyoga-desktop-course-block>
                </div>
                <!-- <img @click="goDown" style="display: block;margin: 8vh auto 0;cursor: pointer;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-info-down.png" alt=""> -->
            </div>
           <div class="menu-desktop-main-block" id="menu-desktop-main">
               <mamiyoga-desktop-course-outline :course_data="courses" @openCourseVideo="openCourseVideo"></mamiyoga-desktop-course-outline>
               <!-- <div class="menu-desktop-every-flex">
                   <h4>練習動作</h4>
                   <p @click="show_practice = true" v-if="!show_practice">{{$t('desktop_course_all_course')}}</p>
               </div>
               <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getAiPoses" :key="i" stagger="500" :is_trial="course.trial"
                    :courseBg="course.ai_preview_img" :courseTitle="course.pose_brief" :courseVideo="course.pose_video" 
                    ></mamiyoga-desktop-course-block>
               </div> -->
               <hr class="menu-desktop-line"  style="margin-top: 50px;" color="#D1D1D1" noshade>
               <div class="menu-desktop-every-flex" id="rectify">
                    <h4>{{$t('desktop_index_six_list_title_1')}}</h4>
                   <!-- <p @click="show_rectifys = true">顯示全部</p> -->
               </div>
               <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getRectifys" :key="i" stagger="500"
                    :is_trial="course.trial" :courseId="course.id" @openCourseVideo="openCourseVideo" 
                    :showTag="true" :tagName="$t('desktop_index_six_list_title_1')" :tagBgColor="'#4FA7C7'" 
                    :courseBg="course.preview_img" :courseTitle="course.title" :poses="course.poses" :courseVideo="course.video_url" 
                    ></mamiyoga-desktop-course-block>
               </div>
               <hr class="menu-desktop-line" color="#D1D1D1" noshade>
               <div class="menu-desktop-every-flex" id="alleviate">
                    <h4>{{$t('desktop_index_six_list_title_2')}}</h4>
                   <!-- <p @click="show_alleviates = true">顯示全部</p> -->
               </div>
               <div class="menu-desktop-course-box alleviates" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getAlleviates" :key="i" stagger="500" 
                    :is_trial="course.trial" :courseId="course.id" @openCourseVideo="openCourseVideo"
                    :showTag="true" :tagName="$t('desktop_index_six_list_title_2')" :tagBgColor="'#A44EBE'" 
                    :courseBg="course.preview_img" :courseTitle="course.title" :poses="course.poses" :courseVideo="course.video_url"
                    ></mamiyoga-desktop-course-block>
                    <div class="menu-desktop-alleviates" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/syllabus`)">
                        <div class="menu-desktop-alleviates-1"></div>
                        <div class="menu-desktop-alleviates-2">
                            <p :style="{fontSize: $i18n.locale == 'JP' ? '13px':'17px'}">{{$t('new_course_block_ad')}}</p>
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-alleviates-img-2.png" alt="">
                        </div>
                    </div>
               </div>
               <hr class="menu-desktop-line" color="#D1D1D1" noshade>
               <div class="menu-desktop-every-flex" id="beauty">
                    <h4>{{$t('desktop_index_six_list_title_3')}}</h4>
                   <p @click="show_beautys = true" v-if="!show_beautys">{{$t('desktop_course_all_course')}}</p>
               </div>
               <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getBeautys" :key="i" stagger="500"
                    :is_trial="course.trial" :courseId="course.id" @openCourseVideo="openCourseVideo"
                    :showTag="true" :tagName="$t('desktop_index_six_list_title_3')" :tagBgColor="'#2C9B79'" 
                    :courseBg="course.preview_img" :courseTitle="course.title" :poses="course.poses" :courseVideo="course.video_url"
                    ></mamiyoga-desktop-course-block>
               </div>
               <hr class="menu-desktop-line" color="#D1D1D1" noshade>
               <div class="menu-desktop-every-flex" id="blend">
                    <h4>{{$t('desktop_index_six_list_title_4')}}</h4>
                   <p @click="show_blends = true" v-if="!show_blends">{{$t('desktop_course_all_course')}}</p>
               </div>
               <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getBlends" :key="i" stagger="500" 
                    :is_trial="course.trial" :courseId="course.id" @openCourseVideo="openCourseVideo"
                    :showTag="true" :tagName="$t('desktop_index_six_list_title_4')" :tagBgColor="'#24798F'" 
                    :courseBg="course.preview_img" :courseTitle="course.title" :poses="course.poses" :courseVideo="course.video_url"
                    ></mamiyoga-desktop-course-block>
                    <div class="menu-desktop-alleviates" v-if="show_blends" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/syllabus`)">
                        <div class="menu-desktop-alleviates-1"></div>
                        <div class="menu-desktop-alleviates-2">
                            <p :style="{fontSize: $i18n.locale == 'JP' ? '13px':'17px'}">{{$t('new_course_block_ad')}}</p>
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-alleviates-img-2.png" alt="">
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <mamiyoga-new-window-alert-box v-if="show_alert" @closeBox="show_alert = false" :alertBtn="alertBtn"
        :alertTitle="alertTitle" :alertImg="alertImg" :alertText="alertText" :alertBtnColor="alertBtnColor"
        @enterBox="enterBox(nextGo)"></mamiyoga-new-window-alert-box>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue';
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue';
import MamiyogaDesktopCourseBlock from '~/components/mamiyoga/MamiyogaDesktopCourseBlock.vue';
import MamiyogaCourseContent from '~/components/mamiyoga/MamiyogaCourseContent.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import MamiyogaNewWindowAlertBox from '~/components/mamiyoga/MamiyogaNewWindowAlertBox.vue';
import MamiyogaDesktopCourseVideo from '~/components/mamiyoga/MamiyogaDesktopCourseVideo.vue'
import MamiyogaDesktopCourseOutline from '~/components/mamiyoga/MamiyogaDesktopCourseOutline.vue'
import { mapMutations, mapGetters } from 'vuex';
export default {
    data:()=>({
        courses:[],
        first_course: {},
        not_online: false,
        check_lang: '',
        check_series: 'first',

        show_practice: false,
        show_rectifys: false,
        show_alleviates: false,
        show_beautys: false,
        show_blends: false,

        login_or_not: false,
        payed_or_not: false,
        have_trial: false,

        show_alert: false,
        alertTitle: '',
        alertImg: '',
        alertText: '',
        alertBtn: '好的',
        alertBtnColor: '#24798F',
        nextGo: '',

        currentVideoId: '',
        currentCourse:{},
        switchPose: false,
        poseTitle: '',
        poseDes: [],
        current_input_id: '',
        stringToN: {
            first: 1,
            second: 2,
            third: 3,
        },
        go_other_page: false,
    }),
    components: {
        MamiyogaHeader,
        MamiyogaHamburgerHeader,
        MamiyogaDesktopNavHeader,
        MamiyogaDesktopCourseBlock,
        MamiyogaCourseContent,
        MamiyogaWindowAlertBox,
        MamiyogaNewWindowAlertBox,
        MamiyogaDesktopCourseVideo,
        MamiyogaDesktopCourseOutline,
    },
    async mounted() {
        if (process.client) {
            if (this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
                this.check_lang = '/jp'
            } else if (this.$i18n.locale == 'zh-CN') {
                this.courses = await require('~/config/mamiyoga-course-zhcn');
                this.check_lang = '/zh-CN'
            } else {
                this.courses = await require('~/config/mamiyoga-course');
                this.check_lang = ''
            }
            this.first_course = this.courses[0]
            if(this.$mq === 'desktop'){
                document.getElementById('go_menu').classList.add('click-active');
            }

            if(sessionStorage['menu_current_series']) {
                this.check_series = sessionStorage['menu_current_series']
            } else {
                sessionStorage['menu_current_series'] = this.check_series
            }
            // let current_vid = document.querySelector('#current-course-video')
            // window.addEventListener("popstate", function(e) { 
            //     if(current_vid.style.display != 'none'){
            //         console.log('y')
            //         this.closeCourse();
            //         console.log(current_vid)
            //         return
            //     } else {
            //         window.history.back();
            //     }
            //     // console.log(history.state)
            // }.bind(this));
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        getAiPoses(){
            if (this.courses) {
                let result_array = this.courses.filter(course => course.poses.find(pose => pose.pose_ai === true));
                let ai_poses = []
                let ai_array = []
                for(var i = 0; i<result_array.length;i++){
                    ai_poses = result_array[i].poses
                    for(var j =0;j<ai_poses.length;j++){
                        let pose = ai_poses[j]
                        if(pose.pose_ai === true) {
                            ai_array.push(pose)
                        }
                    }
                }
                if(this.show_practice) {
                    return ai_array;
                } else {
                    return ai_array.slice(0,3);
                }
            } else {
                return [];
            }
        },
        getRectifys(){
            if (this.courses) {
                let result_array = this.courses.filter(course => course.tags.find(tag => tag == 'rectify'));
                if(this.show_rectifys) {
                    return result_array;
                } else {
                    return result_array.slice(0,3)
                }
            } else {
                return [];
            }
        },
        getAlleviates(){
            if (this.courses) {
                let result_array = this.courses.filter(course => course.tags.find(tag => tag == 'alleviate'));
                if(this.show_alleviates) {
                    return result_array;
                } else {
                    return result_array.slice(0,3)
                }
            } else {
                return [];
            }
        },
        getBeautys(){
            if (this.courses) {
                let result_array = this.courses.filter(course => course.tags.find(tag => tag == 'beauty'));
                return this.show_beautys ? result_array : result_array.slice(0,3)
            } else {
                return [];
            }
        },
        getBlends(){
            if (this.courses) {
                let result_array = this.courses.filter(course => course.tags.find(tag => tag == 'blend'));
                return this.show_blends ? result_array : result_array.slice(0,3)
            } else {
                return [];
            }
        },
    },
    async beforeCreate() {
        if (process.client) {
            this.login_or_not = await this.$checkLogin(this.$store);
            if (this.login_or_not) {
                this.payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
            }
        }
    },
    methods:{
        goDown(){
            this.$scrollTo('#menu-desktop-main',"start");
        },
        closeCourse() {
            // document.querySelector('#current-course-video').style.display = 'none';
            let current_vid = document.querySelector('#current-course-video')
            let current_vidbox = document.querySelector('#current-course-video-block')
            let current_info = document.querySelector('#course-info')
            current_vid.removeChild(current_vid.firstChild);
            // current_info.innerHTML = ''
            current_vid.style.display = 'none';
            current_vidbox.style.display = 'none'
            
            // current_vid.querySelector('iframe').src = '';
            // console.log('close')
        },
        goSeries(e){
            let current_vid = document.querySelector('#current-course-video')
            let current_vidbox = document.querySelector('#current-course-video-block')
            let current_info = document.querySelector('#course-info')
            current_vid.removeChild(current_vid.firstChild);
            // current_info.innerHTML = ''
            current_vid.style.display = 'none';
            current_vidbox.style.display = 'none'
            document.getElementById(e).scrollIntoView();
        },
        startDefaultCourse(){
            if(this.login_or_not) {
                // this.have_trial = true;
                let vid_box = document.querySelector('#current-course-video-block')
                let iframe = document.querySelector('#current-course-video');
                this.currentVideoId = '1'
                this.currentCourse = this.courses.find(course => course.id === this.currentVideoId)
                if (iframe) {
                    vid_box.style.display = 'block'
                    iframe.style.display = 'block';
                    let vid = document.createElement('div')
                    vid.style.height = '100%';
                    vid.style.width = '100%'
                    vid.innerHTML = `<iframe src="${this.currentCourse.video_url}" width="100%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
                    iframe.appendChild(vid)
                    // iframe.querySelector('iframe').src = `${this.$i18n.locale == 'zh-TW' ? 'https://player.vimeo.com/video/349924443': 'https://player.vimeo.com/video/350479253'}`;
                    this.addHistory();
                }
            } else {
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_go_login')}`
                this.alertBtn = `${this.$t('teach_button_ok')}`
                this.nextGo = 'login'
            }
        },
        enterBox(i){
            if(i == '0'){
                this.show_alert = false
            }else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/${i}`)
            }
        },
        addHistory(){
            // let current_vid = document.querySelector('#current-course-video')
            // let vid_show = current_vid.style.display
            // history.pushState({vid_show: 'none'},'menu','menu')
            // console.log(history.state)
        },
        openDefalutPoseVideo(pose){
            if(this.login_or_not){
                if(this.payed_or_not){
                    let data = {id:'1',poseData:pose}
                    console.log(data)
                    this.openCourseVideo(data)
                } else {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                    this.show_alert = true
                    this.alertText = `${this.$t('desktop_go_pay')}`
                    this.alertBtn = `${this.$t('teach_button_ok')}`
                    this.nextGo = 'pay'
                }
            } else {
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_not_login')}`
                this.alertBtn = `${this.$t('teach_button_ok')}`
                this.nextGo = 'login'
            }

        },
        openCourseVideo(e){
            this.switchPose = false
            if(this.login_or_not){
                if(this.payed_or_not) {
                    if(typeof(e) == 'object') {
                        console.log(e)
                        this.currentVideoId = e.id
                        this.currentCourse = this.courses.find(course => course.id === this.currentVideoId)
                        this.switchPose = true
                        let poseData = e.poseData

                        this.poseTitle = `動作${this.stringToN[poseData.pose_id]}、${poseData.pose_brief}`
                        this.poseDes = poseData.pose_description
                        this.current_input_id = poseData.input_id
                        let vid_box = document.querySelector('#current-course-video-block')
                        let iframe = document.querySelector('#current-course-video');
                        if (iframe) {
                            vid_box.style.display = 'block';
                            iframe.style.display = 'block';
                            let vid = document.createElement('div')
                            vid.style.height = '100%';
                            vid.style.weight = '100%';
                            vid.innerHTML = `<iframe id="new" src="${poseData.pose_video}" width="100%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
                            iframe.appendChild(vid)
                        }
                    } else {
                        this.currentVideoId = e
                        this.currentCourse = this.courses.find(course => course.id === this.currentVideoId)
                        let vid_box = document.querySelector('#current-course-video-block')
                        let iframe = document.querySelector('#current-course-video');
                        if (iframe) {
                            vid_box.style.display = 'block';
                            iframe.style.display = 'block';
                            let vid = document.createElement('div')
                            vid.style.height = '100%';
                            vid.style.weight = '100%';
                            vid.innerHTML = `<iframe id="new" src="${this.currentCourse.video_url}" width="100%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
                            iframe.appendChild(vid)
                        }
                    }
                } else {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                    this.show_alert = true
                    this.alertText = `${this.$t('desktop_go_pay')}`
                    this.alertBtn = `${this.$t('teach_button_ok')}`
                    this.nextGo = 'pay'
                }
            } else {
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_not_login')}`
                this.alertBtn = `${this.$t('teach_button_ok')}`
                this.nextGo = 'login'
            }
            
        },
        openNextVideo(e){
            if(this.payed_or_not) {
                let iframe = document.querySelector('#current-course-video');
                this.currentVideoId = (parseInt(this.currentVideoId) + e)
                if(this.currentVideoId < 1){
                    this.currentVideoId = 14
                } else if(this.currentVideoId > 14) {
                    this.currentVideoId = 1
                }
                this.currentVideoId = this.currentVideoId.toString()
                this.currentCourse = this.courses.find(course => course.id === this.currentVideoId)
                let vid_box = document.querySelector('#current-course-video-block')
                if (iframe) {
                    iframe.removeChild(iframe.firstChild);
                    vid_box.style.display = 'block';
                    iframe.style.display = 'block';
                    let vid = document.createElement('div')
                    vid.style.height = '100%';
                    vid.style.weight = '100%';
                    vid.innerHTML = `<iframe id="new" src="${this.currentCourse.video_url}" width="100%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
                    iframe.appendChild(vid)
                }
            } else {
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_course_buy')}`
                this.alertBtn = `${this.$t('member_article_ok')}`
                this.nextGo = 'pay'
            }
        },
        openOtherCourseVideo(e){
            this.switchPose = false;
            if(this.payed_or_not) {
                let iframe = document.querySelector('#current-course-video');
                this.currentVideoId = e
                this.currentCourse = this.courses.find(course => course.id === this.currentVideoId)
                let vid_box = document.querySelector('#current-course-video-block')
                if (iframe) {
                    iframe.removeChild(iframe.firstChild);
                    vid_box.style.display = 'block';
                    iframe.style.display = 'block';
                    let vid = document.createElement('div')
                    vid.style.height = '100%';
                    vid.style.weight = '100%';
                    vid.innerHTML = `<iframe id="new" src="${this.currentCourse.video_url}" width="100%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
                    iframe.appendChild(vid)
                }
            } else {
                let currentVideoId = e
                let currentCourse = this.courses.find(course => course.id === currentVideoId)
                if(!currentCourse.trial) {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                    this.show_alert = true
                    this.alertText = `${this.$t('desktop_course_buy')}`
                    this.alertBtn = `${this.$t('member_article_ok')}`
                    this.nextGo = 'pay'
                }
            }
            
        },
        goPoseMirror(e){
            this.go_other_page = true
            this.$router.push(`/mirror/yoga_${e}`)
        }
    },
    beforeRouteLeave(to, from, next) { 
        console.log(window.history.state)
        if(this.$mq == 'desktop'){
            let current_vid = document.querySelector('#current-course-video')
            if(this.go_other_page){
                if(current_vid.hasChildNodes()){
                    next(false)
                    this.closeCourse();
                    this.go_other_page = false
                }
            }
            if(current_vid.hasChildNodes()){
                next(false)
                this.closeCourse();
                return
            }
        }
        // console.log(window.history.state)
        // history.replaceState({
        //     ...window.history.state,
        //     search: this.search,
        // }, '')
        next()
    },
    beforeMount() {
        // console.log(window.history.state)
        if (window.history.state.search) {
            this.search = window.history.state.search
        }
    },
}
</script>

<style>

.course-menu {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA)
}
.course-information {
    position: relative;
    width: 100vw;
    height: 30vh;
    background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-menu-background-1.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center center;
}
.course-information-select {
    position: absolute;
    width: 60vw;
    height: 50px;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
}
.course-information-content {
    float: left;
    width: 65px;
    height: 25px;
}
.course-information-content:first-child p {
    border-right:1px solid #fff;
    padding-right: 6px; 
}
.course-information-content:nth-child(2) p {
    border-right:1px solid #fff;
}
.course-information-content p {
    color: white;
    font-size: 12px;
    text-align: center;
}
.course-mail-icon {
    position: absolute;
    bottom: 2vh;
    right: 6vw;
    cursor: pointer;
}
.course-menu-box-title {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 10px;
}

.not_online_box {
    display: none;
}
.not_online_box.open {
    display: block;
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
/* #current-course-video {
    display: none;
    position: fixed;
    width: 100vw;
    padding-top: 10vh;
    padding-left: 10vw;
    height: 100vh;
    z-index: 100;
    background: black;
} */
@media (min-width: 769px) {
    .menu-mobile-header {
        display: none;
    }
    .menu-desktop {
        padding-top: 95px;
    }
    .menu-desktop-top-block {
        width: 100%;
        background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-menu-img.png');
        background-repeat: no-repeat;
        background-size: 130%;
        background-color: #DCD8CF;
        padding-top: 175px;
    }
    .menu-desktop-top-block-title {
        color: #FFFFFF;
        width: 90%;
        max-width: 1366px;
        margin: 0 auto;
    }
    .menu-desktop-top-block-title h5 {
        font-size: 45px;
        font-weight: 300;
        margin-bottom: 15px;
    }
    .menu-desktop-top-block-title p {
        font-size: 17px;
        width: 450px;
    }
    .menu-desktop-top-block .info-desktop-red-btn{
        color: #F8F7F8;
        font-size: 16px;
        font-weight: bold;
        background: #C74F4F;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 40px;
        border-radius: 5px;
        margin-top: 60px;
        margin-bottom: 150px;
        cursor: pointer;
    }
    .menu-desktop-course-box {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        max-width: 1366px;
        flex-wrap: wrap;
    }
    .menu-desktop-course-box .mamiyoga-desktop-course-outside-block {
        margin-bottom: 30px;
    }
    .menu-desktop-course-box.alleviates {
        justify-content: space-between;
    }
    .menu-desktop-main-block {
        background: #DCD8CF;
        width: 100%;
        padding: 50px 0;
    }
    .menu-desktop-every-flex {
        width: 90%;
        max-width: 1366px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 50px auto;
    }
    .menu-desktop-main-block h4 {
        color: #24798F;
        font-size: 27px;
        font-weight: bold;
    }
    .menu-desktop-every-flex p{
        color: #24798F;
        font-size: 18px;
        font-weight: 300;
        cursor: pointer;
    }
    .menu-desktop-alleviates {
        width: 30%;
        max-width: 450px;
        height: 270px;
        cursor: pointer;
        border-radius: 15px;
        box-shadow: 0 5px 8px rgba(0,0,0,.3);
    }
    .menu-desktop-alleviates-1 {
        width: 100%;
        height: 80%;
        border-radius: 15px 15px 0 0;
        background-color: #54E0C7;
        background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-alleviates-img.png');
        background-position: center center;
        background-size: 60%;
        background-repeat: no-repeat;
    }
    .menu-desktop-alleviates-2 {
        width: 100%;
        height: 20%;
        background: #FFFFFF;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 0 0 15px 15px ;
    }
    .menu-desktop-alleviates-2 p {
        font-size: 17px;
        font-weight: 500;
        color: #24798f;
        margin: 0;
    }
    .menu-desktop-line {
        width: 90%;
        max-width: 1366px;
        height: 3px;
        margin: 0 auto 50px ;
        opacity: 1;
    }



    .course-menu,.course-information {
        width: 100%;
    }
    .course-information-select {
        width: 60%;
    }
    .course-mail-icon {
        bottom: 20px;
        right: 30px;
    }
    
    .vp-center{
        align-items: none !important;
    }
}
</style>
