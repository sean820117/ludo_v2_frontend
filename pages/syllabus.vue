<template>
    <div>
        <div class="course-menu">
            <div class="course-information" >
                <mamiyoga-header btnText="登出" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
                <div class="course-information-select">
                    <div class="course-information-content">
                        <router-link :to="check_lang + '/about'" style="text-decoration:none;"><p>{{$t('menu_nav_text_teacher')}}</p></router-link>
                    </div>
                    <div class="course-information-content">
                        <router-link :to="check_lang + '/aiassistant'" style="text-decoration:none;"><p>{{$t('menu_nav_text_record')}}</p></router-link>
                    </div>
                    <!-- <div class="course-information-content">
                        <p @click="not_online = true" style="cursor:pointer;">{{$t('menu_nav_text_friend')}}</p>
                    </div> -->
                    <div class="course-information-content">
                        <router-link :to="check_lang +'/menu'" style="text-decoration:none;"><p>{{$t('menu_nav_text_course')}}</p></router-link>
                    </div>
                </div>
                <!-- <div class="course-mail-icon" @click="not_online = true">
                    <img style="width:25px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/menu-envelope.png" alt="">
                </div> -->
            </div>
            <div class="course-menu-box">
               <mamiyoga-syllabus-content></mamiyoga-syllabus-content>
               
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
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaSyllabusContent from '~/components/mamiyoga/MamiyogaSyllabusContent.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import { mapMutations, mapGetters } from 'vuex';
export default {
    layout: 'mommiyoga',
    data:()=>({
        courses:[],
        not_online: false,
        check_lang: '',
        check_series: 'first',
    }),
    components: {
        MamiyogaHeader,
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

            if(sessionStorage['menu_current_series']) {
                this.check_series = sessionStorage['menu_current_series']
            } else {
                sessionStorage['menu_current_series'] = this.check_series
            }
            // debugger
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
            // this.ui_config = await require('~/config/mamiyoga-config')
            // this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                if (!payed_or_not) {
                    console.log("not payed");
                    window.alert("尚未開通課程，請先前往購買～");
                    this.$router.push('/pay');
                } else {
                    console.log("payed")
                }
            }
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
