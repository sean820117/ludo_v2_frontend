<template>
    <div class="course-menu">
        <div class="course-information" >
            <mamiyoga-header btnText="登出" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
            <div class="course-information-select">
                <div class="course-information-content">
                    <router-link to="/mamiyoga/about" style="text-decoration:none;"><p>{{$t('menu_nav_text_teacher')}}</p></router-link>
                </div>
                <div class="course-information-content">
                    <router-link to="/mamiyoga/aiassistant" style="text-decoration:none;"><p>{{$t('menu_nav_text_record')}}</p></router-link>
                </div>
                <div class="course-information-content">
                    <p>{{$t('menu_nav_text_friend')}}</p>
                </div>
            </div>
            <div class="course-mail-icon">
                <img src="/mamiyoga/menu-envelope.svg" alt="">
            </div>
        </div>
        <div class="course-menu-box">
            <!-- <h3 class="course-menu-box-title">日本mami人氣課程</h3> -->
            <mamiyoga-course-content :courses="courses"></mamiyoga-course-content>
        </div>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaCourseContent from '~/components/mamiyoga/MamiyogaCourseContent.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
    layout: 'mommiyoga',
    data:()=>({
        courses:[],
    }),
    components: {
        MamiyogaHeader,
        MamiyogaCourseContent,
    },
    async mounted() {
        if (process.client) {
            if (this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
            } else {
                this.courses = await require('~/config/mamiyoga-course');
            }

        }
        // if (process.client) {
        //     this.courses = await require('~/config/mamiyoga-course')
        // }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    async beforeCreate() {
        if (process.client) {
            this.ui_config = await require('~/config/mamiyoga-config')
            this.is_ui_config_loaded = true;

            // let login_or_not = await this.$checkLogin(this.$store);
            // if (login_or_not == false) {
            //     window.alert("尚未登入帳號，請先前往登入～");
            //     this.$router.push('/mamiyoga/login');
            // } else {
            //     let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
            //     if (!payed_or_not) {
            //         console.log("not payed");
            //         window.alert("尚未開通課程，請先前往購買～");
            //         this.$router.push('/resume/pay');
            //     } else {
            //         console.log("payed")
            //     }
            // }
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
    background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-menu-background.jpg');
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
}
.course-menu-box-title {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 10px;
}
@media (min-width: 769px) {
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
