<template>
    <div>
        <div v-if="$mq !== 'desktop'">
            <!-- <div class="course-menu">
                <div class="course-information" >
                    <mamiyoga-header btnText="登出" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
                    <div class="course-information-select">
                        <div class="course-information-content">
                            <router-link :to="check_lang + '/about'" style="text-decoration:none;"><p>{{$t('menu_nav_text_teacher')}}</p></router-link>
                        </div>
                        <div class="course-information-content">
                            <router-link :to="check_lang + '/aiassistant'" style="text-decoration:none;"><p>{{$t('menu_nav_text_record')}}</p></router-link>
                        </div>
                        <div class="course-information-content">
                            <p @click="not_online = true" style="cursor:pointer;">{{$t('menu_nav_text_friend')}}</p>
                        </div>
                        <div class="course-information-content">
                            <router-link :to="check_lang +'/menu'" style="text-decoration:none;"><p>{{$t('menu_nav_text_course')}}</p></router-link>
                        </div>
                    </div>
                    <div class="course-mail-icon" @click="not_online = true">
                        <img style="width:25px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/menu-envelope.png" alt="">
                    </div>
                </div>
                <div class="course-menu-box">
                <mamiyoga-syllabus-content></mamiyoga-syllabus-content>
                </div>
            </div> -->
            <!-- 信箱功能尚未開啟視窗 -->
            <!-- <div class="not_online_box" :class="not_online ? 'open':''">
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
            </div> -->
            <div class="syllabus-desktop">
                <mamiyoga-hamburger-header></mamiyoga-hamburger-header>
                <div v-if="!start_build">
                    <img class="syllabus-desktop-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-syllabus.png" alt="">
                    <h5 class="syllabus-desktop-title">個人化孕動日記</h5>
                    <div class="info-desktop-red-btn" style="margin: 35px auto 0;" @click="startBuild">開始製作</div>
                </div>
                <div v-if="start_build && !show_arrangement">
                    <div v-if="first_question">
                        <h5 class="syllabus-desktop-title" style="margin-top: 10vh;font-size: 22px;">請問您過去有運動習慣嗎？</h5>
                        <no-ssr>
                            <carousel :perPage="1" :paginationEnabled="false"
                            :centerMode="true" :spacePadding="50">
                                <slide class="select-block">
                                    <div @click="selectFrequency(1)" class="select-block-content" style="border-color: #FF9898;color: #FF9898;">
                                    完全沒有
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectFrequency(2)" class="select-block-content">
                                    一週1~2次
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectFrequency(3)" class="select-block-content">
                                    一週3次以上
                                    </div>
                                </slide>
                            </carousel>
                        </no-ssr>
                    </div>
                    <div v-if="second_question">
                        <h5 class="syllabus-desktop-title" style="margin-top: 10vh;font-size: 22px;">請問您想安排運動的時段？</h5>
                        <no-ssr>
                            <carousel :perPage="1" :paginationEnabled="false"
                            :centerMode="true" :spacePadding="50">
                                <slide class="select-block">
                                    <div @click="selectWant(1)" class="select-block-content">
                                    平日白天
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectWant(2)" class="select-block-content">
                                    平日晚上
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectWant(3)" class="select-block-content">
                                    假日
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
                                    <div @click="selectQuestion(1)" class="select-block-content">
                                    矯正疼痛
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectQuestion(2)" class="select-block-content">
                                    舒壓安眠
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectQuestion(3)" class="select-block-content">
                                    美體塑身
                                    </div>
                                </slide>
                                <slide class="select-block">
                                    <div @click="selectQuestion(4)" class="select-block-content">
                                    調和心靈
                                    </div>
                                </slide>
                            </carousel>
                        </no-ssr>
                    </div>
                    <div class="syllabus-desktop-question-bar">
                        <span id="span-1"></span>
                        <span id="span-2"></span>
                        <span id="span-3"></span>
                    </div>
                </div>
                 <div v-if="start_build && show_arrangement && !is_practice" class="syllabus-mobile-flex-content">
                    <h5 class="syllabus-desktop-title" style="margin-top: 0;text-align: left;font-weight:400;border-bottom: 1px solid rgba(0,0,0,.3);padding-bottom: 15px;" v-html="`${getTodayDate}<br>Shao的孕動日記`"></h5>
                    <p class="syllabus-desktop-title" style="margin-top: 20px;text-align: left;font-weight: 400;">骨盆矯正</p>
                    <p class="syllabus-desktop-title" style="margin: 1vh 0 2vh;text-align: left;font-weight: 600;font-size: 18px;">練習長度：7分鐘</p>
                    <div>
                        <mamiyoga-mobile-syllabus-block :bgImg="first_course.poses[0].ai_preview_img" :courseTitle="first_course.poses[0].pose_brief"></mamiyoga-mobile-syllabus-block>
                        <div class="syllabus-desktop-pink-rest">休息</div>
                        <mamiyoga-mobile-syllabus-block :bgImg="first_course.poses[1].ai_preview_img" :courseTitle="first_course.poses[1].pose_brief"></mamiyoga-mobile-syllabus-block>
                        <div class="syllabus-desktop-pink-rest">休息</div>
                        <mamiyoga-mobile-syllabus-block :bgImg="first_course.poses[2].ai_preview_img" :courseTitle="first_course.poses[2].pose_brief"></mamiyoga-mobile-syllabus-block>
                    </div>
                    <div class="syllabus-mobile-fade-box">
                        <div class="info-desktop-red-btn" @click="startPractice">開始練習</div>
                    </div>
                </div>
                <div v-if="is_practice && practice_finish" class="syllabus-mobile-flex-content">
                    <h5 class="syllabus-desktop-title" style="margin-top: 0;text-align: left;font-weight:400;border-bottom: 1px solid rgba(0,0,0,.3);padding-bottom: 15px;" v-html="`${getTodayDate}<br>Shao的孕動日記`"></h5>
                    <div class="syllabus-mobile-result-box">
                        <div>
                            <p class="syllabus-desktop-title" style="margin-top: 20px;text-align: left;font-weight: 400;">骨盆矯正</p>
                            <p class="syllabus-desktop-title" style="margin-top: 1vh;text-align: left;font-weight: 600;font-size: 18px;">練習長度：7分鐘</p>
                        </div>
                    </div>
                    <div class="syllabus-mobile-result-box" style="background: #24798f;">
                        <div class="syllabus-desktop-title" style="color: #fff;margin: 0;font-size: 20px;font-weight: 500;text-align: left;">練習<br>成果</div>
                        <div class="syllabus-desktop-title" style="color: #fff;margin: 0;font-size: 70px;">95分</div>
                    </div>
                    <div class="syllabus-mobile-result-box" style="background: #C74F4F;margin-bottom: 7vh;">
                        <div class="syllabus-desktop-title" style="color: #fff;margin: 0;font-size: 20px;font-weight: 500;text-align: left;">消耗<br>卡路里</div>
                        <div class="syllabus-desktop-title" style="color: #fff;margin: 0;font-size: 70px;">200卡</div>
                    </div>
                    <div>
                        <div class="info-desktop-red-btn" style="background: #707070;border-color: #707070;width: 70%;height: 50px;border: #24798F 3px solid; background: transparent;color:#24798F;margin: 1vh auto;">查看建議</div>
                        <div class="info-desktop-red-btn" style="background: #707070;border-color: #707070;width: 70%;height: 50px;border: #C74F4F 3px solid; background: transparent;color:#C74F4F;margin: 1vh auto;">更多練習</div>
                    </div>
                </div>
            </div>
           

        </div>
        <div v-else class="syllabus-desktop">
            <mamiyoga-desktop-nav-header bgColor="#24798f"></mamiyoga-desktop-nav-header>
            <div v-if="!start_build">
                <img class="syllabus-desktop-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-syllabus.png" alt="">
                <div class="syllabus-desktop-title-block">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-alleviates-img.png" alt="">
                    <h5 class="syllabus-desktop-title">個人化孕動日記</h5>
                    <div class="info-desktop-red-btn" @click="startBuild">開始製作</div>
                </div>
            </div>
            <div v-if="start_build && !show_arrangement">
                <div class="syllabus-desktop-question" v-if="first_question">
                    <h5 class="syllabus-desktop-title">請問您過去有運動習慣嗎？</h5>
                    <div class="syllabus-desktop-question-select-block">
                        <div @click="selectFrequency(1)" class="syllabus-desktop-question-select" style="border-color: #FF9898;color: #FF9898;">完全沒有</div>
                        <div @click="selectFrequency(2)" class="syllabus-desktop-question-select">一週1~2次</div>
                        <div @click="selectFrequency(3)" class="syllabus-desktop-question-select">一週3次以上</div>
                    </div>
                </div>
                <div class="syllabus-desktop-question" v-if="second_question">
                    <h5 class="syllabus-desktop-title">請問您想安排運動的時段？</h5>
                    <div class="syllabus-desktop-question-select-block">
                        <div @click="selectWant(1)" class="syllabus-desktop-question-select">平日白天</div>
                        <div @click="selectWant(2)" class="syllabus-desktop-question-select">平日晚上</div>
                        <div @click="selectWant(3)" class="syllabus-desktop-question-select">假日</div>
                    </div>
                </div>
                <div class="syllabus-desktop-question" v-if="!first_question && !second_question">
                    <h5 class="syllabus-desktop-title">請問您最想解決什麼問題呢？</h5>
                    <div class="syllabus-desktop-question-select-block solve">
                        <div class="syllabus-desktop-question-select" @click="selectQuestion(1)">矯正疼痛</div>
                        <div class="syllabus-desktop-question-select" @click="selectQuestion(2)">舒壓安眠</div>
                        <div class="syllabus-desktop-question-select" @click="selectQuestion(3)">美體塑身</div>
                        <div class="syllabus-desktop-question-select" @click="selectQuestion(4)">調和心靈</div>
                    </div>
                </div>
                <div class="syllabus-desktop-question-bar">
                    <span id="span-1"></span>
                    <span id="span-2"></span>
                    <span id="span-3"></span>
                </div>
            </div>
            <div v-if="start_build && show_arrangement && !is_practice" class="syllabus-desktop-arrangement-outside">
                <div class="syllabus-desktop-arrangement-block">
                    <div class="syllabus-desktop-arrangement-content">
                        <p class="syllabus-desktop-title" style="font-size: 46px;font-weight: 500;text-align: left;margin: 0;border-bottom: 1px solid rgba(0,0,0,.3);padding-bottom: 20px;">{{getTodayDate + '的孕動日記'}}</p>
                        <h5 class="syllabus-desktop-title" style="margin: 2vh 0;text-align: left;">骨盆矯正</h5>
                        <p class="syllabus-desktop-title" style="font-size: 20px;font-weight: 500;text-align: left;margin: 2vh 0;">練習長度：7分鐘</p>
                        <div class="syllabus-desktop-arrangement-flex">
                            <mamiyoga-desktop-course-block :courseBg="first_course.poses[0].ai_preview_img"
                            :courseTitle="first_course.poses[0].pose_brief"></mamiyoga-desktop-course-block>
                            <div class="syllabus-desktop-pink-rest">休息</div>
                            <mamiyoga-desktop-course-block :courseBg="first_course.poses[1].ai_preview_img"
                            :courseTitle="first_course.poses[1].pose_brief"></mamiyoga-desktop-course-block>
                            <div class="syllabus-desktop-pink-rest">休息</div>
                            <mamiyoga-desktop-course-block :courseBg="first_course.poses[2].ai_preview_img"
                            :courseTitle="first_course.poses[2].pose_brief"></mamiyoga-desktop-course-block>
                        </div>
                        <div class="info-desktop-red-btn" style="margin: 5vh auto 0;" @click="startPractice">開始練習</div>
                    </div>
                </div>
            </div>
            <div v-if="is_practice && practice_finish" class="syllabus-desktop-arrangement-outside">
                <div class="syllabus-desktop-arrangement-block">
                    <div class="syllabus-desktop-arrangement-content">
                        <p class="syllabus-desktop-title" style="font-size: 46px;font-weight: 500;text-align: left;margin: 0;border-bottom: 1px solid rgba(0,0,0,.3);padding-bottom: 20px;">{{getTodayDate + '的孕動日記'}}</p>
                        <div class="syllabus-desktop-arrangement-flex" style="max-width: 1100px;margin: 5vh auto 0;">
                            <div class="syllabus-desktop-arrangement-result-box">
                                <p class="syllabus-desktop-title" style="margin:0;text-align: left;">骨盆矯正</p>
                                <p class="syllabus-desktop-title" style="font-size: 20px;font-weight: 500;text-align: left;margin: 2vh 0 3vh;">練習長度：7分鐘</p>
                                <div class="info-desktop-red-btn" style="width: 50%;background: #707070;border-color: #707070;height: 50px;">再次練習</div>
                            </div>
                            <div class="syllabus-desktop-arrangement-result-box" style="background:#24798F;">
                                <p style="font-size: 25px; margin-bottom: 25px;">練習成果</p>
                                <p style="font-size: 95px;font-weight: 300;">95分</p>
                            </div>
                            <div class="syllabus-desktop-arrangement-result-box" style="background:#C74F4F;">
                                <p style="font-size: 25px; margin-bottom: 25px;">消耗卡路里</p>
                                <p style="font-size: 95px;font-weight: 300;">200卡</p>
                            </div>
                        </div>
                        <div class="syllabus-desktop-arrangement-flex" style="max-width: 1100px;margin: 5vh auto 0;justify-content: center;">
                            <div class="info-desktop-red-btn" style="max-width: 200px;width: 50%;background: #707070;border-color: #707070;height: 50px;border: #24798F 3px solid; background: transparent;color:#24798F;margin: 0 1%;">查看建議</div>
                            <div class="info-desktop-red-btn" style="max-width: 200px;width: 50%;background: #707070;border-color: #707070;height: 50px;border: #C74F4F 3px solid; background: transparent;color:#C74F4F;margin: 0 1%;">更多練習</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="is_loading" id="loading">
            <svg id="loading-icon" viewBox="0 0 32 29.6">
                <path class="path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
	            C30,20.335,16,28.261,16,28.261z" fill="none" stroke-width="1" stroke="#FF9898"></path>
            </svg>
        </div>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue';
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue'
import MamiyogaDesktopCourseBlock from '~/components/mamiyoga/MamiyogaDesktopCourseBlock.vue';
import MamiyogaMobileSyllabusBlock from '~/components/mamiyoga/MamiyogaMobileSyllabusBlock.vue';
import MamiyogaSyllabusContent from '~/components/mamiyoga/MamiyogaSyllabusContent.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import { mapMutations, mapGetters } from 'vuex';
export default {
    data:()=>({
        courses:[],
        first_course: {},
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
        show_arrangement: false,
        is_practice: false,
        practice_finish: false,
    }),
    components: {
        MamiyogaHeader,
        MamiyogaHamburgerHeader,
        MamiyogaDesktopNavHeader,
        MamiyogaDesktopCourseBlock,
        MamiyogaMobileSyllabusBlock,
        MamiyogaSyllabusContent,
        MamiyogaWindowAlertBox,
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
            console.log(this.first_course)

            if(sessionStorage['menu_current_series']) {
                this.check_series = sessionStorage['menu_current_series']
            } else {
                sessionStorage['menu_current_series'] = this.check_series
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    async beforeCreate() {
        if (process.client) {

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                this.is_login = false
                // window.alert("尚未登入帳號，請先前往登入～");
                // this.$router.push('/login');
            } else {
                this.is_login = true
                // let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                // if (!payed_or_not) {
                //     console.log("not payed");
                //     window.alert("尚未開通課程，請先前往購買～");
                //     this.$router.push('/pay');
                // } else {
                //     console.log("payed")
                // }
            }
        }
    },
    methods:{
        startBuild(){
            if(this.is_login) {
                this.start_build = true
            } else {
                this.$router.push('/signup')
            }  
        },
        selectFrequency(num){
            this.user_frequency = num
            console.log(this.user_frequency)
            this.first_question = false
            this.second_question = true
            document.querySelector('#span-1').style.background = '#d1d1d1'
            document.querySelector('#span-2').style.background = '#707070'
        },
        selectWant(num){
            this.user_want = num
            console.log(this.user_want)
            this.second_question = false
            document.querySelector('#span-2').style.background = '#d1d1d1'
            document.querySelector('#span-3').style.background = '#707070'
        },
        selectQuestion(num){
            this.user_question = num
            console.log(this.user_question)
            this.is_loading = true
            setTimeout(() => {
                this.is_loading = false
                this.show_arrangement = true
            }, 6000);
        },
        startPractice(){
            this.is_practice = true
            this.practice_finish = true
        }
    },
    computed:{
        getTodayDate(){
            const day_list = ['日','ㄧ','二','三','四','五','六']
            let d = new Date();
            let n = d.getDay();
            let today = (d.getMonth()+1) + '月' + d.getDate()+ '日' + '（' + day_list[n] +'）' ;
            return today
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
    /* overflow: hidden;         */
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
    margin-top: 65vh;
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
.VueCarousel-slide.select-block.VueCarousel-slide-active.VueCarousel-slide-center .select-block-content{
    opacity: 1;
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
    margin: 1vh 0;
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


@media (min-width: 769px) {
    .syllabus-desktop {
        height: 100vh;
        overflow: hidden;        
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
        margin-bottom: 2vh;
    }
    .syllabus-desktop-title {
        font-size: 50px;
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
        padding-top: 200px;
    }
    .syllabus-desktop-arrangement-block {
        width: 90%;
        max-width: 1700px;
        height: calc(100vh - 200px);
        margin: 0 auto;
        background:linear-gradient(180deg,#fff,transparent);
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
    .syllabus-desktop-pink-rest {
        width: 10%;
        max-width: 150px;
        height: 270px;
        margin: 0 1%;
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
}
</style>
