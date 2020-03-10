<template>
    <div>
        <div v-if="$mq !== 'desktop'">
            <div class="syllabus-desktop" :style="{minHeight: is_practice ? '0':'100vh',paddingBottom: is_practice ? '0':'5vh'}">
                <mamiyoga-hamburger-header v-if="!is_practice"></mamiyoga-hamburger-header>
                <div v-if="!start_build">
                    <img class="syllabus-desktop-img" :src="$t('desktop_syllabus_background')" alt="">
                    <h5 class="syllabus-desktop-title" style="margin-top: 60vh;position: relative;">{{$t('desktop_syllabus_first_title')}}</h5>
                    <p class="syllabus-intro-text" v-html="$t('desktop_index_five_text')"></p>
                    <div v-if="show_arrangement" class="info-desktop-red-btn" style="margin: 35px auto 0;" @click="startBuild">繼續練習</div>
                    <div v-if="!show_arrangement" class="info-desktop-red-btn" style="margin: 35px auto 0;" @click="startBuild">{{$t('desktop_syllabus_first_btn')}}</div>
                </div>
                <div v-if="start_build && !show_arrangement">
                    <div v-if="first_question">
                        <h5 class="syllabus-desktop-title" style="margin-top: 10vh;font-size: 22px;">{{$t('desktop_syllabus_question_1')}}</h5>
                        <no-ssr>
                            <carousel :perPage="1" :paginationEnabled="false"
                            :centerMode="true" :spacePadding="50">
                                <slide class="select-block">
                                    <div @click="selectFrequency(0)" class="select-block-content">
                                    {{$t('desktop_syllabus_opction_1_1')}}
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectFrequency(1)" class="select-block-content">
                                    {{$t('desktop_syllabus_opction_1_2')}}
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectFrequency(2)" class="select-block-content">
                                    {{$t('desktop_syllabus_opction_1_3')}}
                                    </div>
                                </slide>
                            </carousel>
                        </no-ssr>
                    </div>
                    <div v-if="second_question">
                        <h5 class="syllabus-desktop-title" style="margin-top: 10vh;font-size: 22px;">{{$t('desktop_syllabus_question_2')}}</h5>
                        <no-ssr>
                            <carousel :perPage="1" :paginationEnabled="false"
                            :centerMode="true" :spacePadding="50">
                                <slide class="select-block">
                                    <div @click="selectWant(0)" class="select-block-content">
                                    {{$t('desktop_syllabus_opction_2_1')}}
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectWant(1)" class="select-block-content">
                                    {{$t('desktop_syllabus_opction_2_2')}}
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectWant(2)" class="select-block-content">
                                    {{$t('desktop_syllabus_opction_2_3')}}
                                    </div>
                                </slide>
                            </carousel>
                        </no-ssr>
                    </div>
                    <div v-if="!first_question && !second_question">
                        <h5 class="syllabus-desktop-title" style="margin-top: 10vh;font-size: 22px;">請問您最想解決什麼問題呢？</h5>
                        <no-ssr>
                            <carousel :perPage="1" :paginationEnabled="false"
                            :centerMode="true" :spacePadding="50">
                                <slide class="select-block">
                                    <div @click="selectQuestion(0)" id="solve_rectify" class="select-block-content">
                                    肩頸痠痛
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectQuestion(1)" id="solve_alleviate" class="select-block-content">
                                    骨盆歪斜
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectQuestion(2)" id="solve_beauty" class="select-block-content">
                                    腿部浮腫
                                    </div>
                                </slide>
                                <!-- <slide class="select-block">
                                    <div @click="selectQuestion('blend')" id="solve_blend" class="select-block-content">
                                    調和心靈
                                    </div>
                                </slide> -->
                            </carousel>
                        </no-ssr>
                    </div>
                    <div class="syllabus-desktop-question-bar">
                        <span id="span-1"></span>
                        <span id="span-2"></span>
                        <span id="span-3"></span>
                    </div>
                </div>
                 <div v-if="start_build && show_arrangement && !is_practice && !practice_finish" class="syllabus-mobile-flex-content">
                    <div class="syllabus-calendar-line">
                        <div class="syllabus-calendar-li noSelect" v-for="d in get_14_dates" :key="d.date"
                        @click="selectDay(d.date,d.label)" :class="click_today[d.date]">{{`${d.month}月${d.date}日(${day_list[d.day]})`}}</div>
                    </div>
                    <h5 class="syllabus-desktop-title" style="margin-top: 0;text-align: left;font-weight:400;border-bottom: 1px solid rgba(0,0,0,.3);padding-bottom: 15px;" v-html="`${getTodayDate}<br>${$t('desktop_header_menu_3')}`"></h5>
                    <p class="syllabus-desktop-title" style="margin-top: 20px;text-align: left;font-weight: 400;">{{routine.title}}</p>
                    <p class="syllabus-desktop-title" style="margin: 1vh 0 2vh;text-align: left;font-weight: 600;font-size: 18px;">{{$t('desktop_syllabus_second_time')}}{{routine.duration}}</p>
                    <div>
                        <div v-for="(pose,i) in routine.poses" :key="i" :class="pose.pose_brief != 'break' ? 'mobile-syllabus-block-outside':'syllabus-desktop-pink-rest-outside'">
                            <mamiyoga-mobile-syllabus-block v-if="pose.pose_brief != 'break'" :bgImg="pose.ai_preview_img" :courseTitle="pose.pose_brief"></mamiyoga-mobile-syllabus-block>
                            <div v-else class="syllabus-desktop-pink-rest">{{$t('desktop_syllabus_second_rest')}}</div>
                        </div>
                    </div>
                    <div class="syllabus-mobile-fade-box">
                        <div class="info-desktop-red-btn" style="width: 200px;" @click="rePractice">{{$t('desktop_syllabus_second_btn')}}</div>
                    </div>
                </div>
                <div v-if="!is_practice && practice_finish" class="syllabus-mobile-flex-content">
                    <h5 class="syllabus-desktop-title" style="margin-top: 0;text-align: left;font-weight:400;border-bottom: 1px solid rgba(0,0,0,.3);padding-bottom: 15px;" v-html="`${getTodayDate}<br>${$t('desktop_header_menu_3')}`"></h5>
                    <div class="syllabus-mobile-result-box" style="    flex-direction: column;align-items: baseline;justify-content: center;">
                        <div style="display: flex;align-items: baseline;">
                            <p class="syllabus-desktop-title" style="text-align: left;font-weight: 400;">{{routine.title}}</p>
                            <p class="syllabus-desktop-title" style="text-align: left;font-weight: 600;font-size: 15px;">{{routine.duration}}</p>
                        </div>
                        <div class="syllabus-mobile-result-again" @click="rePractice">
                            {{$t('dedesktop_syllabus_experience_icon_4')}}
                        </div>
                    </div>
                    <div class="syllabus-mobile-result-box" style="background: #24798f;">
                        <div class="syllabus-desktop-title" style="color: #fff;margin: 0;font-size: 20px;font-weight: 500;text-align: left;" v-html="$t('desktop_syllabus_finish_title_1')"></div>
                        <div class="syllabus-desktop-title" style="color: #fff;margin: 0;font-size: 60px;">{{result_score}}{{$t('desktop_syllabus_finish_title_1_result')}}</div>
                    </div>
                    <div class="syllabus-mobile-result-box" style="background: #C74F4F;margin-bottom: 7vh;">
                        <div class="syllabus-desktop-title" style="color: #fff;margin: 0;font-size: 20px;font-weight: 500;text-align: left;" v-html="$t('desktop_syllabus_finish_title_2')"></div>
                        <div class="syllabus-desktop-title" style="color: #fff;margin: 0;font-size: 60px;">{{result_cal}}{{$t('desktop_syllabus_finish_title_2_result')}}</div>
                    </div>
                    <div>
                        <!-- <div v-if="!open_camera" @click="show_result = true" class="info-desktop-red-btn" style="background: #707070;border-color: #707070;width: 70%;height: 50px;border: #24798F 3px solid; background: transparent;color:#24798F;margin: 1vh auto;">{{$t('desktop_syllabus_finish_btn_1')}}</div> -->
                        <div @click="$router.push(`${$i18n.locale == 'zh-TW' ? '': '/'+$i18n.locale}/pay`)" class="info-desktop-red-btn" style="background: #707070;border-color: #707070;width: 70%;height: 50px;border: #C74F4F 3px solid; background: transparent;color:#C74F4F;margin: 1vh auto;">{{$t('desktop_syllabus_finish_btn_2')}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="syllabus-desktop">
            <mamiyoga-desktop-nav-header bgColor="#24798f"></mamiyoga-desktop-nav-header>
            <div v-if="!start_build">
                <img class="syllabus-desktop-img" :src="$t('desktop_syllabus_background')" alt="">
                <div class="syllabus-desktop-title-block">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-alleviates-img.png" alt="">
                    <h5 class="syllabus-desktop-title">{{$t('desktop_syllabus_first_title')}}</h5>
                    <p class="syllabus-intro-text" style="font-size: 19px;font-weight: 400;" v-html="$t('desktop_index_five_text')"></p>
                    <div class="info-desktop-red-btn" @click="startBuild">{{$t('desktop_syllabus_first_btn')}}</div>
                </div>
            </div>
            <div v-if="start_build && !show_arrangement">
                <div class="syllabus-desktop-question" v-if="first_question">
                    <h5 class="syllabus-desktop-title">{{$t('desktop_syllabus_question_1')}}</h5>
                    <div class="syllabus-desktop-question-select-block">
                        <div @click="selectFrequency(0)" class="syllabus-desktop-question-select">{{$t('desktop_syllabus_opction_1_1')}}</div>
                        <div @click="selectFrequency(1)" class="syllabus-desktop-question-select">{{$t('desktop_syllabus_opction_1_2')}}</div>
                        <div @click="selectFrequency(2)" class="syllabus-desktop-question-select">{{$t('desktop_syllabus_opction_1_3')}}</div>
                    </div>
                </div>
                <div class="syllabus-desktop-question" v-if="second_question">
                    <h5 class="syllabus-desktop-title">{{$t('desktop_syllabus_question_2')}}</h5>
                    <div class="syllabus-desktop-question-select-block">
                        <div @click="selectWant(0)" class="syllabus-desktop-question-select">{{$t('desktop_syllabus_opction_2_1')}}</div>
                        <div @click="selectWant(1)" class="syllabus-desktop-question-select">{{$t('desktop_syllabus_opction_2_2')}}</div>
                        <div @click="selectWant(2)" class="syllabus-desktop-question-select">{{$t('desktop_syllabus_opction_2_3')}}</div>
                    </div>
                </div>
                <div class="syllabus-desktop-question" v-if="!first_question && !second_question">
                    <h5 class="syllabus-desktop-title">請問您身體最不適的部位？</h5>
                    <div class="syllabus-desktop-question-select-block solve">
                        <div class="syllabus-desktop-question-select" id="solve_rectify" @click="selectQuestion(0)">肩頸痠痛</div>
                        <div class="syllabus-desktop-question-select" id="solve_alleviate" @click="selectQuestion(1)">骨盆歪斜</div>
                        <div class="syllabus-desktop-question-select" id="solve_beauty" @click="selectQuestion(2)">腿部浮腫</div>
                        <!-- <div class="syllabus-desktop-question-select" id="solve_blend" @click="selectQuestion('blend')">調和心靈</div> -->
                    </div>
                </div>
                <div class="syllabus-desktop-question-bar">
                    <span id="span-1"></span>
                    <span id="span-2"></span>
                    <span id="span-3"></span>
                </div>
            </div>
            <div v-if="start_build && show_arrangement && !is_practice && !practice_finish" class="syllabus-desktop-arrangement-outside">
                <carousel class="syllabus-calendar-desktop" :perPage="1" :autoplay="false" 
                :navigationEnabled="true" :paginationEnabled="false" >
                    <slide class="syllabus-calendar-line">
                        <div class="syllabus-calendar-li" v-for="d in get_14_dates.slice(0,7)" :key="d.date"
                        @click="selectDay(d.date,d.label)" :class="click_today[d.date]">{{`${d.month}月${d.date}日(${day_list[d.day]})`}}</div>
                        <!-- <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/syllabus-desktop-arrow-right.png" alt=""> -->
                    </slide>
                    <slide class="syllabus-calendar-line">
                        <div class="syllabus-calendar-li" v-for="d in get_14_dates.slice(7)" :key="d.date"
                        @click="selectDay(d.date,d.label)" :class="click_today[d.date]">{{`${d.month}月${d.date}日(${day_list[d.day]})`}}</div>
                    </slide>
                </carousel>
                <!-- 當日課表 -->
                <div class="syllabus-desktop-arrangement-block">
                    <div v-if="routine"  class="syllabus-desktop-arrangement-content">
                        <p class="syllabus-desktop-title" style="font-size: 46px;font-weight: 500;text-align: left;margin: 0;border-bottom: 1px solid rgba(0,0,0,.3);padding-bottom: 20px;">{{getTodayDate + $t('desktop_header_menu_3')}}</p>
                        <h5 class="syllabus-desktop-title" style="margin: 2vh 0;text-align: left;">{{routine.title}}</h5>
                        <p class="syllabus-desktop-title" style="font-size: 20px;font-weight: 500;text-align: left;margin: 2vh 0;">{{$t('desktop_syllabus_second_time')}}{{routine.duration}}</p>
                        <div class="syllabus-desktop-arrangement-flex">
                            <div v-for="(pose,i) in routine.poses" :key="i" :class="pose.pose_brief != 'break' ? 'mobile-syllabus-block-outside':'syllabus-desktop-pink-rest-outside'">
                                <mamiyoga-mobile-syllabus-block v-if="pose.pose_brief != 'break'" :bgImg="pose.ai_preview_img" :courseTitle="pose.pose_brief"></mamiyoga-mobile-syllabus-block>
                                <div v-else class="syllabus-desktop-pink-rest">{{$t('desktop_syllabus_second_rest')}}</div>
                            </div>
                        </div>
                        <div class="info-desktop-red-btn" style="margin: 5vh auto 0;width: 200px;" @click="startPractice">{{$t('desktop_syllabus_second_btn')}}</div>
                    </div>
                    <div v-else class="syllabus-desktop-arrangement-content">
                        <div class="info-desktop-red-btn" style="margin: 5vh auto 0;width: 200px;" @click="start_build">{{$t('desktop_syllabus_first_btn')}}</div>
                    </div>
                </div>
            </div>
            <div v-if="!is_practice && practice_finish" class="syllabus-desktop-arrangement-outside">
                
                <div class="syllabus-desktop-arrangement-block">
                    <div class="syllabus-desktop-arrangement-content">
                        <p class="syllabus-desktop-title" style="font-size: 46px;font-weight: 500;text-align: left;margin: 0;border-bottom: 1px solid rgba(0,0,0,.3);padding-bottom: 20px;">{{getTodayDate + $t('desktop_header_menu_3')}}</p>
                        <div class="syllabus-desktop-arrangement-flex" style="max-width: 1100px;margin: 5vh auto 0;">
                            <div class="syllabus-desktop-arrangement-result-box">
                                <p class="syllabus-desktop-title" style="margin:0;text-align: left;">{{routine.title}}</p>
                                <p class="syllabus-desktop-title" style="font-size: 20px;font-weight: 500;text-align: left;margin: 2vh 0 3vh;">{{$t('desktop_syllabus_second_time')}}{{routine.duration}}</p>
                                <div class="info-desktop-red-btn" style="width: 50%;background: #707070;border-color: #707070;height: 50px;" @click="rePractice">{{$t('dedesktop_syllabus_experience_icon_4')}}</div>
                            </div>
                            <div class="syllabus-desktop-arrangement-result-box" style="background:#24798F;">
                                <p style="font-size: 25px; margin-bottom: 25px;">{{$t('desktop_syllabus_finish_title_01')}}</p>
                                <p style="font-size: 95px;font-weight: 300;">{{result_score}}{{$t('desktop_syllabus_finish_title_1_result')}}</p>
                            </div>
                            <div class="syllabus-desktop-arrangement-result-box" style="background:#C74F4F;">
                                <p style="font-size: 25px; margin-bottom: 25px;">{{$t('desktop_syllabus_finish_title_02')}}</p>
                                <p style="font-size: 95px;font-weight: 300;">{{result_cal}}{{$t('desktop_syllabus_finish_title_2_result')}}</p>
                            </div>
                        </div>
                        <div class="syllabus-desktop-arrangement-flex" style="max-width: 1100px;margin: 5vh auto 0;justify-content: center;">
                            <!-- <div v-if="!open_camera" @click="show_result = true" class="info-desktop-red-btn" style="max-width: 200px;width: 50%;background: #707070;border-color: #707070;height: 50px;border: #24798F 3px solid; background: transparent;color:#24798F;margin: 0 1%;">{{$t('')}}</div> -->
                            <div class="info-desktop-red-btn" style="max-width: 200px;width: 50%;background: #707070;border-color: #707070;height: 50px;border: #C74F4F 3px solid; background: transparent;color:#C74F4F;margin: 0 1%;" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '': '/'+$i18n.locale}/pay`)">{{$t('desktop_syllabus_finish_btn_2')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 練習畫面 -->
        <div v-if="is_practice && !practice_finish">
            <mamiyoga-new-practice-video-block @goBack="goBack()" @openResult="openResult" 
            @closeResult="closeResult" :routine="routine" :ai_assistant="false"></mamiyoga-new-practice-video-block>
        </div>
        <!-- 愛心進度條 -->
        <div v-if="is_loading" id="loading">
            <svg id="loading-icon" viewBox="0 0 32 29.6">
                <path class="path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
	            C30,20.335,16,28.261,16,28.261z" fill="none" stroke-width="1" stroke="#FF9898"></path>
            </svg>
        </div>
         <!-- 新版alert -->
        <mamiyoga-new-window-alert-box v-if="show_alert" @closeBox="show_alert = false" :alertBtn="alertBtn"
        :alertTitle="alertTitle" :alertImg="alertImg" :alertText="alertText" :alertBtnColor="alertBtnColor"
        @enterBox="enterBox(nextGo)"></mamiyoga-new-window-alert-box>
    </div>
</template>

<script>
import Vue from "vue";
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue';
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue'
import MamiyogaDesktopCourseBlock from '~/components/mamiyoga/MamiyogaDesktopCourseBlock.vue';
import MamiyogaMobileSyllabusBlock from '~/components/mamiyoga/MamiyogaMobileSyllabusBlock.vue';
import MamiyogaNewPracticeVideoBlock from '~/components/mamiyoga/MamiyogaNewPracticeVideoBlock.vue'
import MamiyogaSyllabusContent from '~/components/mamiyoga/MamiyogaSyllabusContent.vue';
import MamiyogaNewResultBlock from '~/components/mamiyoga/MamiyogaNewResultBlock.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import MamiyogaNewWindowAlertBox from '~/components/mamiyoga/MamiyogaNewWindowAlertBox.vue'
import MamiyogaCalendarTool from '~/components/mamiyoga/MamiyogaCalendarTool.vue'
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config';

export default {
    data:()=>({
        courses:[],
        routine:[],
        first_course: {},
        experience_course: {},
        not_online: false,
        check_lang: '',
        check_series: 'first',

        start_build: false,
        user_frequency: '',
        user_want: '',
        user_question: '',
        first_question: true,
        second_question: false,

        is_loading: false,
        is_login: false,
        payed_or_not: false,
        show_arrangement: false,
        is_practice: false,
        practice_finish: false,

        have_trial: false,
        result_score: '43',
        result_cal: '86',

        open_camera: false,
        show_result: true,

        show_alert: false,
        alertTitle: '',
        alertImg: '',
        alertText: '',
        alertBtn: '好的',
        alertBtnColor: '#24798F',
        nextGo: '',

        day_list: ['日','ㄧ','二','三','四','五','六'],
        click_today: [],
        selected_day:new Date("2020/2/20"),
    }),
    components: {
        MamiyogaHeader,
        MamiyogaHamburgerHeader,
        MamiyogaDesktopNavHeader,
        MamiyogaDesktopCourseBlock,
        MamiyogaMobileSyllabusBlock,
        MamiyogaNewPracticeVideoBlock,
        MamiyogaSyllabusContent,
        MamiyogaWindowAlertBox,
        MamiyogaNewWindowAlertBox,
        MamiyogaNewResultBlock,
        MamiyogaCalendarTool,
    },
    async mounted() {
        if (process.client) {
            this.is_loading = true;
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                this.is_login = false
                this.is_loading = false;
            } else {
                this.is_login = true
                this.payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
            
                if (this.$i18n.locale == 'JP') {
                    this.courses = await require('~/config/mamiyoga-course-jp');
                    // this.routine = await require('~/config/routine-jp');
                    this.check_lang = '/jp'
                } else if (this.$i18n.locale == 'zh-CN') {
                    this.courses = await require('~/config/mamiyoga-course-zhcn');
                    // this.routine = await require('~/config/routine');
                    this.check_lang = '/zh-CN'
                } else {
                    this.courses = await require('~/config/mamiyoga-course');
                    // this.routine = await require('~/config/routine');
                    this.check_lang = ''
                }
                if(this.$mq === 'desktop'){
                    document.getElementById('go_syllabus').classList.add('click-active');
                }
                
                this.first_course = this.courses[0]
                this.experience_course = this.courses[12]

                if(sessionStorage['menu_current_series']) {
                    this.check_series = sessionStorage['menu_current_series']
                } else {
                    sessionStorage['menu_current_series'] = this.check_series
                }     
                
                let now = new Date();
                let ret = [];
                let now_date = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate();
                let response = await axios.post('/apis/get-routine-by-user',{user_id:this.user.user_id,date:now_date});
                this.routine = response.data.result;
                console.log(this.routine);
                if (this.routine && this.routine != false) {
                    this.routine = this.setRoutineDetail(this.routine);
                    this.show_arrangement = true;
                    this.start_build = true;
                    this.selectDay(this.get_14_dates[0].date,this.get_14_dates[0].label)
                } else {
                    this.show_arrangement = false;
                    this.start_build = false;
                }
                this.is_loading = false
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    methods:{
        setRoutineDetail(routine) {
            try {
                for (let index = 0; index < routine.poses.length; index++) {
                    let temp_pose = routine.poses[index];
                    // console.log('pose' ,temp_pose);
                    if (temp_pose.pose_brief != 'break') {
                        routine.poses[index] = this.courses[temp_pose.course-1]['poses'][temp_pose.pose-1];    
                    }
                }    
            } catch (error) {
                console.log(error)
            }
            return routine;
        },
        startBuild(){
            if (!this.is_login) {
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/syllabus`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_go_login')}`
                this.alertBtn = `${this.$t('teach_button_ok')}`
                this.nextGo = 'login'       
            } else {
                this.have_trial = true;
                this.start_build = true;
                // this.show_arrangement = false;
            }
        },
        selectFrequency(num){
            this.user_frequency = num
            // console.log(this.user_frequency)
            this.first_question = false
            this.second_question = true
            document.querySelector('#span-1').style.background = '#d1d1d1'
            document.querySelector('#span-2').style.background = '#707070'
        },
        selectWant(num){
            this.user_want = num
            // console.log(this.user_want)
            this.second_question = false
            document.querySelector('#span-2').style.background = '#d1d1d1'
            document.querySelector('#span-3').style.background = '#707070'
        },
        async selectQuestion(type){
            this.user_question = type
            this.is_loading = true
            // if(this.$mq === 'desktop') {
            //     document.querySelector(`#solve_${type}`).classList.add('desktop-select-question')
            // }
            let obj = {
                routine_options : {    
                    frequency: this.user_frequency, 
                    exercise_time: this.user_want, 
                    question: this.user_question,
                },
                user_id:this.user.user_id,
            }
            console.log(obj)
            let response = await axios.post('/apis/mamiyoga-set-routine-options',obj);
            console.log(response)
            response = await axios.post('/apis/generate-routine',{user_id:this.user.user_id,date:new Date()});
            await this.selectDay(this.get_14_dates[0].date,this.get_14_dates[0].label)
            this.is_loading = false
            this.show_arrangement = true
        },
        startPractice(){
            this.is_practice = true
        },
        rePractice(){
            this.practice_finish = false
            this.is_practice = true
        },
        goBack(){
            this.is_practice = false
        },
        openResult(score = null){
            if(score) {
                this.result_score = Math.floor(score)
                this.result_cal = (Math.floor(score))*2
                this.open_camera = true
            } 
            this.is_practice = false
            this.practice_finish = true
        },
        closeResult(score = null){
            if(score) {
                this.result_score = Math.floor(score)
                this.result_cal = (Math.floor(score))*2
                this.open_camera = true
            } 
            this.is_practice = false
            this.practice_finish = true
        },
        enterBox(i){
            if(i == '0' || !i){
                this.show_alert = false
            }else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/${i}`)
            }
        },
        doHandleMonth(m){
            if(m.toString().length == 1){
                m = "0" + m;
            }
            return m;
        },
        async selectDay(i,label){
            console.log(i)
            this.is_loading = true;
            let response = await axios.post('/apis/get-routine-by-user',{user_id:this.user.user_id,date:label});
            this.routine = response.data.result;
            if(this.routine) {
                this.routine = this.setRoutineDetail(this.routine);
            } else {
                await axios.post('/apis/generate-routine',{user_id:this.user.user_id,date:label});
                await this.selectDay(i,label);
                return;
            }
            this.click_today = [];
            this.click_today[i] = 'open'
            this.selected_day = new Date(label);
            this.is_loading = false;
        },
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        getTodayDate(){
            const day_jp = ['日','月','火','水','木','金','土']
            // let d = new Date();
            let d = this.selected_day;
            let n = d.getDay();
            if(this.$i18n.locale == 'JP') {
                let today = (d.getMonth()+1) + '月' + d.getDate()+ '日' + '（' + day_jp[n] +'）' ;
                return today
            } else {
                let today = (d.getMonth()+1) + '月' + d.getDate()+ '日' + '（' + this.day_list[n] +'）' ;
                return today
            }   
        },
        get_14_dates(){
            let now = new Date();
            let ret = [];
            let now_date = {year: now.getFullYear(), month: now.getMonth(), date: now.getDate(), day: now.getDay()};
            for(let i = 0; i < 14; i++){
                let t_day = new Date(now_date.year, now_date.month, now_date.date + i);
                ret.push({
                    year: t_day.getFullYear(), 
                    month: this.doHandleMonth(t_day.getMonth()+1), 
                    date: this.doHandleMonth(t_day.getDate()), 
                    day: t_day.getDay(),
                    label: t_day.getFullYear() + '/' + (t_day.getMonth()+1) + '/' + t_day.getDate()
                });
            }
            console.log(ret);
            return ret;
        }
    }
}
</script>

<style>
.syllabus-desktop {
    width: 100%;
    min-height: 100vh;
    background:linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    position: relative;
    overflow: hidden;
    padding-bottom: 5vh;
}
.syllabus-desktop-img {
    width: 200%;
    position: absolute;
    right: -25vw;
    bottom: 30vh;
}
.syllabus-desktop-title {
    color: #24798f;
    text-align: center;
    font-size: 30px;
}
.syllabus-desktop .info-desktop-red-btn{
    color: #F8F7F8;
    font-size: 16px;
    font-weight: bold;
    background: #C74F4F;
    border: 3px solid #C74F4F;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    margin-top: 35px;
    cursor: pointer;
    -webkit-user-select: none;
}
.select-block {
    display: flex;
    align-items: center;
    justify-content: center;
}
.select-block-content {
    width: 85%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5vh;
    border: 4px solid #24798f;
    border-radius: 15px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 500;
    color:#24798f;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    opacity: .5;
}
.VueCarousel-slide.select-block.VueCarousel-slide-active.VueCarousel-slide-center .select-block-content,
.desktop-select-question,.syllabus-desktop-question-select:active{
    opacity: 1;
    border-color: #FF9898;
    color: #FF9898;
}
.syllabus-desktop-question-bar {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5vh auto 0;
}
.syllabus-desktop-question-bar span {
    width: 9px;
    height: 9px;
    border-radius: 12px;
    background: #D1D1D1;
}
.syllabus-desktop-question-bar span:first-child {
    background: #707070;
}
.syllabus-mobile-flex-content {
    width: 85%;
    margin: 0 auto;
    position: relative;
    padding-bottom: 10vh;
}
.syllabus-desktop-pink-rest-outside{
    width: 100%;
    height: 45px;
    margin: 1vh 0;
}
.mobile-syllabus-block-outside {
    width: 100%;
    height: 150px;
}
.syllabus-desktop-pink-rest {
    width: 100%;
    height: 45px;
    background: #FF9898;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    /* margin: 1vh 0; */
    opacity: 0.7;
}
.syllabus-mobile-fade-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg,transparent,#000);
    z-index: 9;
}
.syllabus-mobile-result-box {
    width: 100%;
    height: 130px;
    color: #fff;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0,0,0,.3);
    margin: 2vh 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
.syllabus-mobile-result-again {
    color: #fff;
    background: #ff9898;
    padding: 10px 25px;
    border-radius: 30px
}
.syllabus-intro-text {
    text-align: center;
    margin: 20px 0 0;
    color: #707070;
}
/* 舊課程 */
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
#loading {
    position: fixed;
    width: 100%;
    min-height: 100vh;
    z-index: 999;
    background: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
#loading-icon {
    width: 100px;
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
.syllabus-calendar-line {
    display: -webkit-box;
    align-items: center;
    justify-content: center;
    overflow: auto;         
}
.syllabus-calendar-line::-webkit-scrollbar { 
    width: 0 !important;
    height: 0 !important;
}
.syllabus-calendar-line img {
    cursor: pointer;
}
.syllabus-calendar-li {
    color: #fff;
    background-color: #d1d1d1;
    font-size: 12px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 15px;
}
.noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}
::-moz-focus-inner {border-color: transparent;}
.syllabus-calendar-li.open {
    background: #FF9898;
}


@media (min-width: 769px) {
    .syllabus-desktop {
        min-height: 100vh;
        overflow: hidden;
        padding-bottom: 80px;        
    }
    .syllabus-desktop-img {
        bottom: -5vw;
        right: 50vw;
        width: 70%;
        max-width: 1500px;
        min-width: 800px;
    }
    .syllabus-desktop-title-block {
        width: 50%;
        height: 100vh;
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .syllabus-desktop-title-block img {
        width: 50%;
        max-width: 350px;
        min-width: 300px;
        margin-bottom: 2vh;
    }
    .syllabus-desktop-title {
        font-size: 40px;
        font-weight: 300;
        margin: 0 0 2vh;
    }
    .syllabus-desktop .info-desktop-red-btn{
        color: #F8F7F8;
        font-size: 16px;
        font-weight: bold;
        background: #C74F4F;
        border: 3px solid #C74F4F;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 40px;
        border-radius: 5px;
        margin-top: 35px;
        cursor: pointer;
        -webkit-user-select: none;
    }
    .syllabus-desktop-question {
        width: 100%;
        height: 100%;
        padding-top: 180px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .syllabus-desktop-question-select-block {
        width: 85%;
        max-width: 800px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5vh;
    }
    .syllabus-desktop-question-select-block.solve {
        max-width: 1000px;
    }
    .syllabus-desktop-question-select-block.solve .syllabus-desktop-question-select {
        width: 23%;
    }
    .syllabus-desktop-question-select {
        box-shadow: 0 5px 10px rgba(0,0,0,.2);
        width: 30%;
        height: 275px;
        background: #fff;
        border: #24798F solid 4px;
        border-radius: 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        color: #24798f;
        -webkit-user-select: none;
    }
    .syllabus-desktop-question-select:active , .desktop-select-question {
        border-color: #FF9898;
        color: #FF9898;
    }
    .syllabus-desktop-question-bar {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5vh auto 0;
    }
    .syllabus-desktop-question-bar span {
        width: 9px;
        height: 9px;
        border-radius: 12px;
        background: #D1D1D1;
    }
    .syllabus-desktop-question-bar span:first-child {
        background: #707070;
    }
    .syllabus-desktop-arrangement-outside {
        padding-top: 110px;
    }
    .syllabus-desktop-arrangement-block {
        width: 90%;
        max-width: 1700px;
        /* height: calc(100vh - 200px); */
        margin: 0 auto;
        background:linear-gradient(180deg,#fff,#fff,#fff,transparent);
        padding-top: 50px;
    }
    .syllabus-desktop-arrangement-content {
        margin: 0 auto;
        width: 90%;
    }
    .syllabus-desktop-arrangement-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .syllabus-desktop-pink-rest-outside {
        width: 10%;
        max-width: 150px;
        height: 270px;
        margin: 0 1%;
    }
    .mobile-syllabus-block-outside {
        width: 30%;
        max-width: 450px;
        height: 270px;
    }
    .syllabus-desktop-pink-rest {
        width: 100%;
        height: 270px;
        /* margin: 0 1%; */
    }
    .syllabus-desktop-arrangement-result-box {
        width: 30%;
        height: 400px;
        border-radius: 15px;
        box-shadow: 0 7px 10px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    .syllabus-calendar-desktop {
        /* display: flex; */
        /* display: -webkit-box; */
        width: 70%;
        min-width: 730px;
        max-width: 850px;
        /* overflow: hidden; */
        margin: 0 auto 15px;
    }
    .syllabus-calendar-line{
        /* width: 100%;
        margin: 0 auto; */
        display: flex;
        justify-content: space-between;
        overflow: unset;
    }
    .syllabus-calendar-li {
        margin-right: unset;
        margin-bottom: unset;
    }
    .syllabus-calendar-line::-webkit-scrollbar{
        width: unset !important;
    }
    .VueCarousel-navigation--disabled[data-v-453ad8cd] {
        opacity: 0;
    }
}
</style>
