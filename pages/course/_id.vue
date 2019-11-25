<template>
    <div>
        <mamiyoga-every-course v-if="!open_explain" @openExplainBox="openExplainBox"
        :course_data="course_data" @clickPractice="clickPractice"></mamiyoga-every-course>
        <no-ssr><mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box></no-ssr>
        <mamiyoga-new-window-alert-box v-if="isAlert" :alertText="alertText" :alertBtn="alertBtn" alertBtnColor="#24798f"
        @enterBox="enterBox(nextGo)" @closeBox="enterBox(nextGo)"></mamiyoga-new-window-alert-box>
    </div>
</template>

<script>
import MamiyogaEveryCourse from '~/components/mamiyoga/MamiyogaEveryCourse.vue'
import MamiyogaExplainBox from '~/components/mamiyoga/MamiyogaExplainBox.vue'
import MamiyogaNewWindowAlertBox from '~/components/mamiyoga/MamiyogaNewWindowAlertBox.vue'

import { mapMutations, mapGetters } from 'vuex';
export default {
    layout: 'mommiyoga',
    data:()=>({
        courses:[],
        course_id:'',
        course_data:{},
        open_explain: false,

        payed_or_not: false,

        isAlert: false,
        alertText: '',
        alertBtn: '',
        nextGo: '',
    }),
    components: {
        MamiyogaEveryCourse,
        MamiyogaExplainBox,
        MamiyogaNewWindowAlertBox,
    },
    async mounted() {
        if (process.client) {
            if(this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
            } else if(this.$i18n.locale == 'zh-CN') {
                this.courses = await require('~/config/mamiyoga-course-zhcn');
            } else {
                this.courses = await require('~/config/mamiyoga-course');
            }
            this.course_id = this.$route.params.id;
            this.course_data = this.courses.find(course => this.course_id == course.id);
        }
    },
    async beforeCreate() {
        if (process.client) {
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                this.isAlert = true
                this.alertText = `${this.$t('desktop_not_login')}`
                this.alertBtn = `${this.$t('member_article_ok')}`
                this.nextGo = 'login'
            } else {
                this.payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                
                if (this.payed_or_not) {
                    console.log("payed")
                } else if (this.user.free_trial_starting_time) {
                    let open_time = parseInt(this.user.free_trial_starting_time)
                    let now = new Date();
                    let now_time = now.getTime();
                    let use_time = (now_time - open_time)/86400000;
                    if(use_time > 7){ 
                        if(this.course_id == '1'){

                        } else {
                            localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                            this.isAlert = true
                            this.alertText = '已超過試用期限，請前往購買或聯繫客服由我們為您專人服務呦～'
                            this.alertBtn = `${this.$t('member_article_ok')}`
                            this.nextGo = 'pay'
                        }
                    } else {
                        if(this.course_id == '1' || this.course_data.trial){

                        } else {
                            localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                            this.isAlert = true
                            this.alertText = `${this.$t('desktop_course_buy')}`
                            this.alertBtn = `${this.$t('member_article_ok')}`
                            this.nextGo = 'pay'
                        }
                    }
                } else if(this.course_id == '1') {
                    
                } else {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                    this.isAlert = true
                    this.alertText = `${this.$t('desktop_course_buy')}`
                    this.alertBtn = `${this.$t('member_article_ok')}`
                    this.nextGo = 'pay'
                }
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    methods:{
        closeExplain(){
            this.open_explain = false
        },
        openExplainBox(){
            this.open_explain = true
        },
        clickPractice(){
            if(this.payed_or_not){
                sessionStorage["course_" + this.course_data.id + "_current_pose_id"] = 'first'
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/course/practice/${this.course_id}`)
            } else {
                if(this.user.free_trial_starting_time) {
                    let open_time = parseInt(this.user.free_trial_starting_time)
                    let now = new Date();
                    let now_time = now.getTime();
                    let use_time = (now_time - open_time)/86400000;
                    if(use_time > 7){ 
                        localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                        this.isAlert = true
                        this.alertText = '已超過試用期限，請前往購買或聯繫客服由我們為您專人服務呦～'
                        this.alertBtn = `${this.$t('member_article_ok')}`
                        this.nextGo = 'pay'
                    } else {
                        if(this.course_data.trial){
                            sessionStorage["course_" + this.course_data.id + "_current_pose_id"] = 'first'
                            this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/course/practice/${this.course_id}`)
                        } else {
                            localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                            this.isAlert = true
                            this.alertText = `${this.$t('desktop_course_buy')}`
                            this.alertBtn = `${this.$t('member_article_ok')}`
                            this.nextGo = 'pay'
                        }
                    }
                } else if(!this.user.free_trial_starting_time && this.course_data.trial) {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                    this.isAlert = true
                    this.alertText = `${this.$t('desktop_get_trial')}`
                    this.alertBtn = `${this.$t('member_article_ok')}`
                    this.nextGo = 'free-trial'
                } else {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                    this.isAlert = true
                    this.alertText = `${this.$t('desktop_course_buy')}`
                    this.alertBtn = `${this.$t('member_article_ok')}`
                    this.nextGo = 'pay'
                }
            }
            
        },
        enterBox(i){
            if(i == '0'){
                this.isAlert = false
            }else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/${i}`)
            }
        },
    }
}
</script>

<style>

</style>
