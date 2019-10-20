<template>
    <div class="trial-page">
        <div class="trial-img">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-alleviates-img.png" alt="">
        </div>
        <div class="trial-content">
            <img @click="$router.go(-1)" class="trial-content-cancel" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            <h4>立即開始免費7天體驗</h4>
            <div class="login-column">
                <div class="login-column-label">電子信箱</div>
                <input name="email" class="login-column-input" type="email" v-model="email" placeholder=""/>
                <div class="reg-text2" style="height:18px;" :style="{color: hint_color,width: '67%',textAlign: 'left',maxWidth: '320px',}"> {{ hint }}</div>
                <div class="login-column-label after-input">我們將會寄送體驗開通連結至您的信箱</div>
                
                <div class="trial-content-btn" @click="sendEmail">立即開通</div>
            </div>
            <p class="login-column-label agreement-text">登入及同意&nbsp;LUDO&nbsp;<a href="/agreement">用戶協議</a>&nbsp;和&nbsp;<a href="/privacy">隱私政策</a></p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from '~/config/axios-config'
import { EMAIL_REGEX } from '~/components/regex.js'
export default {
    data:()=>({
        email: '',
        hint:'請填寫',
        hint_color:'transparent',
    }),
    methods:{
        sendEmail(){
            if(this.email == '') {
                this.hint = '請輸入電子信箱'
                this.hint_color = 'red'
            } else if(!EMAIL_REGEX.test(this.email)){
                this.hint = '電子信箱格式錯誤'
                this.hint_color = 'red'
            } else {
                this.$sendData('/apis/subscribe-mamiyoga',{email:this.email,name: '體驗用戶'})
                this.hint = '已收到您的電子信箱！敬請期待～'
                this.hint_color = 'red'

                let d = new Date(); 
                let start_time = d.getTime();
                localStorage['when_is_free_trial_start'] = start_time
            }
        }
    }
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
}
.trial-img img {
    width: 50%;
    min-width: 300px;
    max-width: 500px;
}
.trial-content {
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
}
.trial-content h4 {
    font-size: 27px;
    color: #24798F;
    margin: 8vh 0 20vh;
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
    position: absolute;
    bottom: 2vh;
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
}
</style>