<template>
    <div>
        <div class="course-block" :style="{backgroundImage:'url('+bgImage+')',backgroundSize:'cover'}" @click="goCoursePage">
            <div class="course-bookmark">
                <img :src="unitSrc" alt="">
            </div>
            <div class="course-close">
                <img v-if="(!is_trial || !have_trial) && !payed_or_not" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-close.png" alt="">
            </div>
            <div class="course-block-contain" :style="{backgroundColor:blockColor}">
                <div class="course-block-title">
                    <h4 v-html="blockTitle"></h4>
                    <div class="course-block-detail" :style="{backgroundImage:'url('+poseSrc+')'}">
                        <!-- <div class="course-block-icon">
                            <img src="/mamiyoga/course-block-icon-pose.svg" alt="">
                            <p>{{poseText}}個姿勢</p>
                        </div>
                        <div class="course-block-icon">
                            <img src="/mamiyoga/course-block-icon-time.svg" alt="">
                            <p>長度{{timeText}}分鐘</p>
                        </div>
                        <div class="course-block-icon">
                            <img src="/mamiyoga/course-block-icon-ai.svg" alt="">
                            <p>{{aiText}}個AI練習</p>
                        </div> -->
                        <!-- <div class="course-block-icon">
                            <img :src="poseSrc" alt="">
                            
                        </div> -->
                        <!-- <div class="course-block-icon">
                            <img :src="timeSrc" alt="">
                            
                        </div>
                        <div class="course-block-icon">
                            <img :src="aiSrc" alt="">
                            
                        </div> -->
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
import MamiyogaNewWindowAlertBox from '~/components/mamiyoga/MamiyogaNewWindowAlertBox.vue'
import axios from '~/config/axios-config'
import { mapMutations, mapGetters } from 'vuex';
export default {
    data:()=> ({
        check_lang : '',
        have_trial: false,
        login_or_not: false,
        payed_or_not: false,

        show_alert: false,
        alertTitle: '',
        alertImg: '',
        alertText: '',
        alertBtn: '好的',
        alertBtnColor: '#24798F',
        nextGo: '',
    }),
    components:{
        MamiyogaNewWindowAlertBox,
    },
    props: {
        bgImage: String,
        blockColor: String,
        blockTitle: String,
        poseText: Number,
        timeText: Number,
        aiText: Number,
        poseSrc: String,
        timeSrc: String,
        aiSrc: String,
        unitSrc: String,
        goCourse: String,

        is_trial: Boolean,

    },
    async mounted(){
        if(process.client) {
            if(this.$i18n.locale == 'JP') {
                this.check_lang = '/jp'
            } else if (this.$i18n.locale == 'zh-CN') {
                this.check_lang = '/zh-CN'
            } else {
                this.check_lang = ''
            }
            
            this.login_or_not = await this.$checkLogin(this.$store);
            if(this.login_or_not){
                this.payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                if (this.payed_or_not) {
                    this.have_trial = true;
                } else if (this.user.free_trial_starting_time) {
                    let open_time = parseInt(this.user.free_trial_starting_time)
                    let now = new Date();
                    let now_time = now.getTime();
                    let use_time = (now_time - open_time)/86400000;
                    // console.log(use_time)
                    if(use_time > 7){
                        this.have_trial = false;   
                        // alert('已超過試用期限，請前往購買或聯繫客服由我們為您專人服務呦～')
                        // this.$router.push('/');
                    }else {
                        this.have_trial = true;
                    }
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
        goCoursePage(){
            if(this.goCourse == '1'){
                if(this.login_or_not){
                    this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/course/${this.goCourse}`)
                } else {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                    this.show_alert = true
                    this.alertText = '登入後即可解鎖本課程！'
                    this.alertBtn = `${this.$t('teach_button_ok')}`
                    this.nextGo = 'login'
                }
            } else{
                if(this.login_or_not){
                    if(this.payed_or_not) {
                        this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/course/${this.goCourse}`)
                    } else{
                        if(this.is_trial && this.have_trial){
                            this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/course/${this.goCourse}`)
                        } else if(!this.have_trial && this.is_trial){
                            localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                            this.show_alert = true
                            this.alertText = `${this.$t('desktop_get_trial')}`
                            this.alertBtn = `${this.$t('teach_button_ok')}`
                            this.nextGo = 'free-trial'
                        } else {
                            localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                            this.show_alert = true
                            this.alertText = '購買後即可觀看所有課程～'
                            this.alertBtn = `${this.$t('teach_button_ok')}`
                            this.nextGo = 'pay'
                        }
                    }
                } else {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/menu`
                    this.show_alert = true
                    this.alertText = `${this.$t('desktop_go_login')}`
                    this.alertBtn = `${this.$t('teach_button_ok')}`
                    this.nextGo = 'login'
                }
            }
        },
        enterBox(i){
            if(i == '0'){
                this.show_alert = false
            }else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/${i}`)
            }
        }
    }
}
</script>

<style>

.course-block {
    position: relative;
    width: 90vw;
    height: 26vh;
    /* background: red; */
    margin: 3vh auto 0;
    border-radius: 2vh;
    box-shadow: 0 3px 10px rgba(0,0,0,.2);
    background-position: center -20px;
}
.course-bookmark {
    width: 30px;
    position: absolute;
    top: -5px;
    left: 15px;
}
.course-close {
    position: absolute;
    right: 15px;
    bottom: 10vh;
}
/* .course-bookmark p {
    position: absolute;
    top: 10px;
    left: 13px;
    width: 20px;
    line-height: 13px;
    font-size: 12px;
    text-align: center;
} */
.course-block-contain {
    position: absolute;
    width: 90vw;
    height: 8vh;
    bottom: 0;
    border-radius: 0 0 2vh 2vh;
    padding: 0;
}
.course-block-title {
    width: 88vw;
    height: 8vh;
    /* background: blue; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.course-block-title h4 {
    margin-left:10px; 
    font-size:12px;
    font-weight: 400; 
}
.course-block-detail {
    /* background: green; */
    width: 35vw;
    height: 7vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}
.course-block-icon {
    float: left;
    width: 15vw;
    background: white;
    display: flex;
    justify-content: center;
    flex-wrap:wrap; 
}
.course-block-icon p {
    font-size: 10px;
    color: #97A8AF;
}
.course-block-icon:nth-child(2) {
    border-left: 1px solid #97A8AF;
    border-right: 1px solid #97A8AF;
    box-sizing: border-box;
}
/* .course-block-icon img {
    height: 20px;
    margin-bottom: 5px; 
} */
.course-block-icon img {
    height: 4vh;
}
@media (min-width: 769px) {
    .course-block {
        width: 90%;
        height: 250px;
    }
    .course-block-contain {
        width: 100%;
        height: 75px;
    }
    .course-block-title {
        width: 90%;
        height:100%;
    }
    .course-block-detail {
        width: 40%;
    }

}
</style>
