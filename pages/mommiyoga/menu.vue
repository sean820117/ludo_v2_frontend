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
                <div class="course-information-content" @click="not_online = true">
                    <p>学习夥伴</p>
                </div>
            </div>
            <div class="course-mail-icon" @click="not_online = true">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/menu-envelope.png" alt="">
            </div>
        </div>
        <div class="course-menu-box">
            <!-- <h3 class="course-menu-box-title">日本mami人氣課程</h3> -->
            <mommiyoga-course-content :courses="courses"></mommiyoga-course-content>
        </div>
        <div class="not_online_box" :class="showThisBox">
            <mamiyoga-window-alert-box>
                <div class="cancel-box" @click="not_online = false">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="" >
                </div>
                <p>正在加紧脚步开发中！</p>
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top: 20px;width:40%;">
                <p style="font-size:13px;margin:15px 0px;">这是个可以分享影片<br>获得匿名学习夥伴回馈的功能</p>
                <div class="star-line-box">
                    <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-space:0;margin-top:20px" @click="not_online = false">期待</button>
                </div>
            </mamiyoga-window-alert-box>
        </div>
    </div>
</template>

<script>
import MommiyogaHeader from '~/components/mamiyoga/MommiyogaHeader.vue';
import MommiyogaCourseContent from '~/components/mamiyoga/MommiyogaCourseContent.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
    layout: 'mommiyoga',
    data:()=>({
        courses:[],
        not_online: false,
    }),
    components: {
        MommiyogaHeader,
        MommiyogaCourseContent,
        MamiyogaWindowAlertBox,
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
        showThisBox(){
            return this.not_online ? 'open':'';
        }
    },
    async beforeCreate() {
        if (process.client) {
            this.ui_config = await require('~/config/mommiyoga-config')
            this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/mommiyoga/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                if (!payed_or_not) {
                    console.log("not payed");
                    window.alert("尚未開通課程，請先前往購買～");
                    this.$router.push('/resume/pay');
                } else {
                    console.log("payed")
                }
            }
        }
    },
    
}
</script>

<style>

.course-menu {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.course-information {
    position: relative;
    width: 100vw;
    height: 30vh;
    background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/background-menu.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
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
    cursor: pointer;
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
    width: 35px;
    position: absolute;
    bottom: 2vh;
    right: 6vw;
    cursor: pointer;
}
.course-mail-icon img {
    width: 35px;
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
@media (min-width: 769px) {
    .course-menu {
        width: 100%;
    }
    .course-information {
        width: 100%;
        height: 300px;
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
