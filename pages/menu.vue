<template>
    <div>
        <div v-if="$mq !== 'desktop'">
            <div class="course-menu">
                <div class="course-information" >
                    <!-- <mamiyoga-header v-if="$mq !== 'desktop'" class="menu-mobile-header" btnText="登出" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header> -->
                    <mamiyoga-hamburger-header></mamiyoga-hamburger-header>
                    <div class="course-information-select">
                        <div class="course-information-content">
                            <p @click="$router.push('/menu')">課程影片</p>
                        </div>
                        <div class="course-information-content">
                            <p @click="$router.push('/syllabus')">孕動日記</p>
                        </div>
                        <!-- <div class="course-information-content">
                            <p @click="not_online = true" style="cursor:pointer;">{{$t('menu_nav_text_friend')}}</p>
                        </div> -->
                        <div class="course-information-content">
                            <p style="cursor:pointer;" @click="$router.push('/information')">媽咪知識</p>
                        </div>
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
            <div id="current-course-video" @click="closeCourse">
                <iframe src="https://player.vimeo.com/video/347109517" width="80%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            <mamiyoga-desktop-nav-header bgColor="#24798f"></mamiyoga-desktop-nav-header>
            <div class="menu-desktop-top-block">
                <div class="menu-desktop-top-block-title">
                    <h5>單元一、骨盆矯正瑜珈</h5>
                    <p>大概是產後一個月，就可以慢慢開始矯正骨盆。可以消除腰部周圍附著脂肪、讓新陳代謝提升，這些都有非常顯著的減肥效果喔！</p>
                    <div class="info-desktop-red-btn">開始上課</div>
                </div>
                <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(pose,i) in first_course.poses" :key="i" stagger="500"
                    :courseBg="first_course.preview_img" :courseTitle="pose.pose_brief" :courseVideo="pose.pose_video"
                    ></mamiyoga-desktop-course-block>
                </div>
                <img @click="goDown" style="display: block;margin: 8vh auto 0;cursor: pointer;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-info-down.png" alt="">
            </div>
           <div class="menu-desktop-main-block" id="menu-desktop-main">
               <div class="menu-desktop-every-flex">
                   <h4>練習動作</h4>
                   <p @click="show_practice = true">顯示全部</p>
               </div>
               <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getAiPoses" :key="i" stagger="500"
                    :courseBg="course.ai_preview_img" :courseTitle="course.pose_brief" :courseVideo="course.pose_video"
                    ></mamiyoga-desktop-course-block>
               </div>
               <hr class="menu-desktop-line" color="#D1D1D1" noshade>
               <div class="menu-desktop-every-flex">
                    <h4>矯正疼痛</h4>
                   <p @click="show_rectifys = true">顯示全部</p>
               </div>
               <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getRectifys" :key="i" stagger="500"
                    :courseBg="course.preview_img" :courseTitle="course.title" :poses="course.poses" :courseVideo="course.video_url"
                    ></mamiyoga-desktop-course-block>
               </div>
               <hr class="menu-desktop-line" color="#D1D1D1" noshade>
               <div class="menu-desktop-every-flex">
                    <h4>舒壓安眠</h4>
                   <p @click="show_alleviates = true">顯示全部</p>
               </div>
               <div class="menu-desktop-course-box alleviates" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getAlleviates" :key="i" stagger="500"
                    :courseBg="course.preview_img" :courseTitle="course.title" :poses="course.poses" :courseVideo="course.video_url"
                    ></mamiyoga-desktop-course-block>
                    <div class="menu-desktop-alleviates">
                        <div class="menu-desktop-alleviates-1"></div>
                        <div class="menu-desktop-alleviates-2">
                            <p>科學化訓練讓健康事半功倍</p>
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-alleviates-img-2.png" alt="">
                        </div>
                    </div>
               </div>
               <hr class="menu-desktop-line" color="#D1D1D1" noshade>
               <div class="menu-desktop-every-flex">
                    <h4>美體塑身</h4>
                   <p @click="show_beautys = true">顯示全部</p>
               </div>
               <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getBeautys" :key="i" stagger="500"
                    :courseBg="course.preview_img" :courseTitle="course.title" :poses="course.poses" :courseVideo="course.video_url"
                    ></mamiyoga-desktop-course-block>
               </div>
               <hr class="menu-desktop-line" color="#D1D1D1" noshade>
               <div class="menu-desktop-every-flex">
                    <h4>調和心靈</h4>
                   <p @click="show_blends = true">顯示全部</p>
               </div>
               <div class="menu-desktop-course-box" v-if="courses !== ''">
                    <mamiyoga-desktop-course-block v-for="(course,i) in getBlends" :key="i" stagger="500"
                    :courseBg="course.preview_img" :courseTitle="course.title" :poses="course.poses" :courseVideo="course.video_url"
                    ></mamiyoga-desktop-course-block>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue';
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue';
import MamiyogaDesktopCourseBlock from '~/components/mamiyoga/MamiyogaDesktopCourseBlock.vue';
import MamiyogaCourseContent from '~/components/mamiyoga/MamiyogaCourseContent.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
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
    }),
    components: {
        MamiyogaHeader,
        MamiyogaHamburgerHeader,
        MamiyogaDesktopNavHeader,
        MamiyogaDesktopCourseBlock,
        MamiyogaCourseContent,
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
                // result_array = result_array.slice(0,3)
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
                // result_array = result_array.slice(0,3)
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
                // result_array = result_array.slice(0,3)
                // return result_array;
                return this.show_beautys ? result_array : result_array.slice(0,3)
            } else {
                return [];
            }
        },
        getBlends(){
            if (this.courses) {
                let result_array = this.courses.filter(course => course.tags.find(tag => tag == 'blend'));
                // result_array = result_array.slice(0,3)
                // return result_array;
                return this.show_blends ? result_array : result_array.slice(0,3)
            } else {
                return [];
            }
        },
    },
    async beforeCreate() {
        if (process.client) {

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                // window.alert("尚未登入帳號，請先前往登入～");
                // this.$router.push('/login');
            } else {
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
        goDown(){
            this.$scrollTo('#menu-desktop-main',"start");
        },
        closeCourse() {
            document.querySelector('#current-course-video').style.display = 'none';
        }
    }
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
#current-course-video {
    display: none;
    position: fixed;
    width: 100vw;
    padding-top: 10vh;
    padding-left: 10vw;
    height: 100vh;
    z-index: 100;
    background: black;
}
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
        background-size: 100%;
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
    
}
</style>
