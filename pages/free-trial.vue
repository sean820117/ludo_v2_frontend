<template>
    <div class="trial-page">
        <div class="trial-img">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-alleviates-img.png" alt="">
        </div>
        <div class="trial-content">
            <div class="trial-content-flex">
                <img @click="backPage" class="trial-content-cancel" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
                <h4>{{$t('desktop_trial_title')}}</h4>
                <div class="login-column">
                    <div class="login-column-label">{{$t('desktop_login_mail')}}</div>
                    <input name="email" class="login-column-input" type="email" v-model="email" placeholder=""/>
                    <div class="reg-text2" style="height:18px;" :style="{color: hint_color,width: '100%',textAlign: 'left',maxWidth: '320px',}"> {{ hint }}</div>
                    <div class="login-column-label after-input">{{$t('desktop_trial_text')}}</div>
                    
                    <div class="trial-content-btn" @click="sendEmail">{{$t('desktop_trial_btn')}}</div>
                </div>
                <p class="login-column-label agreement-text">登入及同意&nbsp;LUDO&nbsp;<a href="/agreement">用戶協議</a>&nbsp;和&nbsp;<a href="/privacy">隱私政策</a></p>
            </div>
        </div>
        <mamiyoga-new-window-alert-box v-if="show_alert" :alertText="alertText" alertBtnColor="#24798f" :alertImg="alertImg"
        :alertBtn="alertBtn" @enterBox="backPage" @closeBox="show_alert = false"></mamiyoga-new-window-alert-box>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from '~/config/axios-config'
import { EMAIL_REGEX } from '~/components/regex.js'
import { mapMutations, mapGetters } from 'vuex';

import MamiyogaNewWindowAlertBox from '~/components/mamiyoga/MamiyogaNewWindowAlertBox.vue'
export default {
    data:()=>({
        email: '',
        hint:'請填寫',
        hint_color:'transparent',
        show_alert: false,

        alertText: '',
        alertImg: '',
        alertBtn: '',
        alertImg: '',
    }),
    components:{
        MamiyogaNewWindowAlertBox
    },
    async beforeCreate(){
        if(process.client) {
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) { 
                alert('請先前往登入或註冊！')
                this.$router.push('/login')
            } else {
                if(this.user.free_trial_starting_time){
                    this.show_alert = true
                    this.alertText = '已開通體驗，讓我們一起動起來！'
                    this.alertBtn = '返回前頁'
                }
            }
        }
    },
    methods:{
        async sendEmail(){
            if(this.email == '') {
                this.hint = this.$t('order_remind_1')
                this.hint_color = 'red'
            } else if(!EMAIL_REGEX.test(this.email)){
                this.hint = this.$t('order_remind_2')
                this.hint_color = 'red'
            } else {
                let send_data = {email: this.email}
                const res = await axios.get('/apis/mamiyoga-start-free-trial',send_data);

                if (res.data.result == 'SUCCESS') {
                    let start_time = res.data.free_trial_starting_time
                    this.$store.commit('user/updateFreeTrial',start_time);
                    this.show_alert = true
                    this.alertText = '開通成功'
                    this.alertBtn = '開始上課'
                    this.alertImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-free-trial-success.png'
                    // localStorage['when_is_free_trial_start'] = start_time;

                } else {
                    this.hint = '傳送失敗，請重新輸入'
                    this.hint_color = 'red'
                }
            }
        },
        backPage(){
            this.$router.push(localStorage.redirect)
            console.log(localStorage.redirect)
        },
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
}
</script>

<style>
.trial-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
}
.trial-img {
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF9898;

    position: fixed;
    top: 0;
    left: 0;
}
.trial-img img {
    width: 50%;
    min-width: 300px;
    max-width: 500px;
}
.trial-content {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    position: relative;
}
.trial-content::before {
    content: '';
    width: 50vw;
    height: 100vh;
    display: inline-block;
}
.trial-content-flex {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
}
.trial-content h4 {
    font-size: 27px;
    color: #24798F;
    margin: 8vh 0 20vh;
    text-align: center;
}
.trial-content .login-column{
    margin-top: 11px;
    width: 67%;
    max-width: 300px;
}
.trial-content .login-column-label{
    text-align: left;
    color: #707070;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 6px; 
    padding-left: 5px;
}
.trial-content .login-column-input{
    height: 40px;
    width: 100%;
    border-radius: 8px;
    border: none;
    background: #F3F3F3;
}
.trial-content .login-column-label.after-input {
    text-align: center;
    margin: 25px 0 0;
}
.trial-content .login-column-label.agreement-text {
    margin-top: 25vh;
}
.trial-content-btn {
    background: #FF9898;
    width: 170px;
    height: 45px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1vh auto 0;
    color: #F8F7F8;
    cursor: pointer;
    font-weight: bold;
}
.trial-content-cancel {
    width: 30px;
    position: absolute;
    top: 3vh;
    right: 2vw;
    opacity: .4;
    cursor: pointer;
}
.reg-text2{
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
.login-column-label.agreement-text a {
    color: #707070;
}
@media (max-width: 768px) {
    .trial-content h4 {
        margin: 8vh 0 10vh;
    }
    .trial-img {
        display: none;
    }
    .trial-content {
        width: 100%;
    }
    .trial-content-cancel {
        width: 20px;
        right: 15px;
    }
    .trial-content::before {
        display: none;
    }
    .trial-content-flex {
        width: 100vw;
    }
}
</style>