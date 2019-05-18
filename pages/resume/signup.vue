<template>
    <div class="signup-page">
        <titlebar><div slot="right-component"></div></titlebar>
        <div class="reg-text">{{ login_or_signup === 'signup' ? '註冊' : '登入' }}</div>
        <div class="reg-text2" :style="{color: hint_color}"> {{ hint }}</div>
        <div class="third-party">
            <no-ssr><third-party-icons v-if="is_ui_config_loaded"  :project_name="ui_config.project_name" :login_method="ui_config.view.signup_page.login_method"/></no-ssr>
        </div>
        <div class="hr"></div>
        <div class="text-or">or</div>
        <form class="signup-form">
            <div class="login-column">
                <div class="login-column-label">電子信箱</div>
                <input name="email" class="login-column-input" type="text" v-model="email"/>
            </div>
            <div class="login-column">
                <div class="login-column-label">密碼</div>
                <input name="password" class="login-column-input" type="password" v-model="password"/>
            </div>
            <div class="login-column" v-if="login_or_signup === 'signup'">
                <div class="login-column-label">確認密碼</div>
                <input name="confirmPassword" class="login-column-input" type="password" v-model="confirmPassword"/>
            </div>
            <div class="btn-login-and-signup-container">
                <p class="switch-login-and-signup" @click="switch_signup_and_login">我要{{ login_or_signup === "signup" ? '登入' : '註冊' }}</p>
                <input class="btn-login-and-signup" type="submit" :value="login_or_signup === 'signup' ? '註冊' : '登入' " @click.prevent="login_or_signup === 'signup' ? onSubmit('signup') : onSubmit('login')">
            </div>
        </form>
    </div>
</template>
<script >
import Titlebar from "~/components/resume/Titlebar"
import ThirdPartyIcons from "~/components/resume/ThirdPartyIcons"
import { EMAIL_REGEX } from '~/components/regex.js'

import axios from '~/config/axios-config'

export default {
    layout: 'resume',
    head () {
        return {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500' }
            ],
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1.0"},
                { charset: "UTF-8"}
            ]
        } 
    },
    data() {
        return {
            errors: null,
            email: '',
            password: '',
            confirmPassword: '',
            ui_config: Object,
            hint:'',
            hint_color:'',
            is_ui_config_loaded:false,
            login_or_signup:'signup',
        }
    },
    props: {
        // ui_config: Object,
    },
    async mounted() {
        if (process.client) {
            this.ui_config = await import('~/config/resume-config')
            this.is_ui_config_loaded = true;
            this.hint = this.ui_config.view.signup_page.hint.default.text;
            this.hint_color = this.ui_config.view.signup_page.hint.default.color;
        }
    },
    components: {
        Titlebar,
        ThirdPartyIcons,
    },
    methods: {
        onSubmit(type) {
            if (this.email.length === 0 || this.password.length === 0) {
                this.hint = '請填寫所有欄位！'
                this.hint_color = "red"
                return
            }
            if (!EMAIL_REGEX.test(this.email)) {
                this.hint = '電子信箱格式錯誤'
                this.hint_color = "red"
                return
            }
            if (this.password.length < 8) {
                this.hint = '密碼過短'
                this.hint_color = "red"
                return
            }
            if (this.password !== this.confirmPassword && type === "signup") {
                this.hint = '密碼需大於八個字'
                this.hint_color = "red"
                return
            }

            this.hint = null
            this.hint_color = ""

            if (type === "signup") {
                this.signup(this.email, this.password, this.confirmPassword)    
            } else {
                this.login(this.email, this.password)
            }
        },
        async signup(email,password,repeated_password) {
            console.log("go sign up")
            try {
              let response = await axios.post('/signup',{email:email,password:password,repeated_password:repeated_password})
              if (response.data.status == '200') {
                  console.log("signup success")
                  let login_result = await this.$checkLogin(this.$store);
                  this.$router.push('/login-redirect')
              } else {
                  this.hint = '註冊失敗 - ' + response.data.message;
                  this.hint_color = "red"
                  console.log(response)
              }
            } catch (error) {
              this.hint = '註冊失敗'
              this.hint_color = "red"
              console.log(error)
            }
        },
        async login(email,password) {
            try {
                let response = await axios.post('/login',{email:email,password:password})
                if (response.data.status == '200') {
                    console.log("login success")
                    console.log(response)
                    let login_result = await this.$checkLogin(this.$store);
                    this.$router.push('/login-redirect')
                } else {
                    console.log(response)
                    this.hint = response.data.message;
                    this.hint_color = "red"
                }
            } 
            catch (error) {
                console.log(error)
                this.hint = "傳送失敗，請重新嘗試"
                this.hint_color = "red"
            }
        },
        switch_signup_and_login() {
            if (this.login_or_signup === "signup") {
                this.login_or_signup = "login"
            } else {
                this.login_or_signup = "signup"
            }
        },
    }
}
</script>

<style>
*{
    margin:0px;
    font-family: 'Noto Sans TC', sans-serif;
}
html, body, #__nuxt, #__layout, #__layout > div{
    height: 100%;
    background: white;
}
textarea:focus, input:focus{
    outline: none;
}
.signup-page{
    text-align: center;
    height: 100%;
}
.reg-text{
    margin: auto;
    padding-top: 18vh;
    font-size: 21px;
}
.reg-text2{
    margin: auto;
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
.third-party{
    margin-top: 8vh;
}
.hr{
    margin: auto;
    width: 63%;
    height: 1px;
    background: #D4D4D4;
    margin-top: 23px;
}
.text-or{
    font-size: 14px;
    font-weight: 100;
    margin: auto;
    margin-top: 10px;
}
.signup-form{
    text-align: left;
}
.signup-form input[type=text]{
    padding:0px 10px;
}
.login-column{
    margin: auto;
    margin-top: 11px;
    width: 67%;
}
.login-column-label{
    text-align: left;
    color: #707070;
    font-size: 11px;
    line-height: 20px;
    margin-bottom: 6px; 
    padding-left: 5px;
}
.login-column-input{
    height: 27px;
    width: 100%;
    border-radius: 8px;
    border: none;
    background: #F3F3F3;
}
.btn-login-and-signup-container {
    display: flex;
    margin-top: 6vh;
    justify-content: space-between;
    width: 67vw;
    margin-left: 16.5vw;
}
.switch-login-and-signup {
    font-size: 13px;
    color: #8F8F8F;
    margin-top: 10px;
}
.btn-login-and-signup{
    width: 90px;
    height: 36px;
    line-height: 36px;
    background: #1785db;
    color: #fff;
    font-size: 14px;
    /* margin-left: 60%; */
    /* margin-top: 6vh; */
    border: none;
    border-radius: 3px;
    padding: unset;
}
</style>