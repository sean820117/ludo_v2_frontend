<template>
    <div class="course-menu">
        <div class="course-information" >
            <mommiyoga-header bgColor="#9BAEB2" ftColor="#FFF"></mommiyoga-header>
            <div class="course-information-select">
                <div class="course-information-content">
                    <router-link to="/mommiyoga/about" style="text-decoration:none;"><p>讲师介绍</p></router-link>
                </div>
                <div class="course-information-content">
                    <router-link to="/mommiyoga/aiassistant" style="text-decoration:none;"><p>AI助教</p></router-link>
                </div>
                <div class="course-information-content">
                    <p>学习夥伴</p>
                </div>
            </div>
            <div class="course-mail-icon">
                <img src="/mamiyoga/menu-envelope.svg" alt="">
            </div>
        </div>
        <div class="course-menu-box">
            <!-- <h3 class="course-menu-box-title">日本mami人氣課程</h3> -->
            <mommiyoga-course-content :courses="courses"></mommiyoga-course-content>
        </div>
    </div>
</template>

<script>
import MommiyogaHeader from '~/components/mamiyoga/MommiyogaHeader.vue';
import MommiyogaCourseContent from '~/components/mamiyoga/MommiyogaCourseContent.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
    layout: 'mommiyoga',
    data:()=>({
        courses:[],
    }),
    components: {
        MommiyogaHeader,
        MommiyogaCourseContent,
    },
    async mounted() {
        if (process.client) {
            this.courses = await require('~/config/mommiyoga-course')
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    async beforeCreate() {
        if (process.client) {
            this.ui_config = await require('~/config/mommiyoga-config')
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
    background-image:url('/mamiyoga/background-menu.png');
    background-repeat: no-repeat;
    background-size: cover; 
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
