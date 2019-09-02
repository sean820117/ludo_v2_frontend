<template>
    <div>
        <div class="signup-page" v-if="!is_new">
            <div class="mamiyoga-header">
                <div class="mamiyoga-header-logo"></div>
                <div class="mamiyoga-header-login">
                    <button :style="{background: is_ui_config_loaded ? ui_config.view.signup_page.submit_button.background_color : '' }"
                    @click="switch_signup_and_login" class="mamiyoga-header-login-btn">{{ login_or_signup === "signup" ? '登入' : '註冊' }}</button>
                </div>
            </div>
            <div class="mamiyoga-login-container">
                <div class="reg-text">{{ login_or_signup === 'signup' ? '註冊' : '登入' }}</div>
                <div class="reg-text2"> {{ '付款前需先註冊成為會員' }}</div>
                <div class="third-party">
                    <no-ssr><mamiyoga-third-party-icons v-if="is_ui_config_loaded" :login_method="ui_config.view.signup_page.login_method"/></no-ssr>
                </div>
                <div class="hr"></div>
                <div class="text-or">or</div>
                <form class="signup-form">
                    <div class="login-column">
                        <div class="login-column-label">電子信箱</div>
                        <input name="email" class="login-column-input" type="text" v-model="email" placeholder=""/>
                    </div>
                    <div class="login-column">
                        <div class="login-column-label">密碼</div>
                        <input name="password" class="login-column-input" type="password" v-model="password" placeholder=""/>
                    </div>
                    <div class="login-column">
                        <div v-show="login_or_signup === 'signup'">
                            <div class="login-column-label">確認密碼</div>
                            <input name="confirmPassword" class="login-column-input" type="password" v-model="confirmPassword"/>
                        </div>
                    </div>
                    <!-- <div class="login-column" v-if="login_or_signup === 'login'">
                        <div style="height:53 px"></div>
                    </div> -->
                    <div class="reg-text2" :style="{color: hint_color,width: '67vw',textAlign: 'right',maxWidth: '320px',}"> {{ hint }}</div>
                    <div class="btn-login-and-signup-container">
                        <button class="mamiyoga-btn-login-and-signup" type="submit" :style="{background: is_ui_config_loaded ? ui_config.view.signup_page.submit_button.background_color : '' }" @click.prevent="login_or_signup === 'signup' ? onSubmit('signup') : onSubmit('login')">{{ login_or_signup === 'signup' ? '立即付款' : '登入' }}</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="signup-page" style="padding-bottom:5vh;" v-else>
            <div class="mamiyoga-header">
                <div class="mamiyoga-header-logo"></div>
                <div class="mamiyoga-header-login">
                    <div class="mamiyoga-header-cancel-btn" @click="$router.go(-1)"></div>
                </div>
            </div>
            <div class="reg-text" style="margin-top:5vh;">登入</div>
            <div class="btn-login-and-signup-container" style="margin-top:0;">
                <a href="/" style="width:100%;text-decoration:none;">
                    <div class="mamiyoga-login-btn-to-login third-party-login" style="background:#ABCCD4;margin-top:40px;" v-if="is_ui_config_loaded && ui_config.view.signup_page.login_method.FB" @click.prevent="handleFBClick">
                        <div style="width: 65px;">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-from-facebook.png" alt="">
                        </div>
                        <p>使用Facebook登入</p>
                    </div>
                </a>
            </div>
            <div class="btn-login-and-signup-container" style="margin-top:0;">
                <a href="/" style="width:100%;text-decoration:none;">
                    <div class="mamiyoga-login-btn-to-login third-party-login" style="background:#FFF;border:#ABCCD4 solid 3px;margin-top:10px;" v-if="is_ui_config_loaded && ui_config.view.signup_page.login_method.google" @click.prevent="handleGoogleClick">
                        <div style="width: 62px;">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-from-google.png" alt="">
                        </div>
                        <p>使用Google登入</p>
                    </div>
                </a>
            </div>
            <div class="reg-text2" style="width:67vw;max-width: 320px;font-size:14px;text-align:left;margin:5vh 0 1vh;">使用LUDO帳號登入</div>
            <form class="signup-form">
                <div class="login-column">
                    <div class="login-column-label">帳號</div>
                    <input name="email" class="login-column-input" type="text" v-model="email" placeholder=""/>
                </div>
                <div class="login-column">
                    <div class="login-column-label">密碼</div>
                    <input name="password" class="login-column-input" type="password" v-model="password" placeholder=""/>
                </div>
                <!-- <div class="login-column">
                    <div v-show="login_or_signup === 'signup'">
                        <div class="login-column-label">確認密碼</div>
                        <input name="confirmPassword" class="login-column-input" type="password" v-model="confirmPassword"/>
                    </div>
                </div> -->
                <!-- <div class="login-column" v-if="login_or_signup === 'login'">
                    <div style="height:53 px"></div>
                </div> -->
                <div class="reg-text2" :style="{color: hint_color,width: '67vw',textAlign: 'right',maxWidth: '320px',}"> {{ hint }}</div>
                <div class="btn-login-and-signup-container" style="flex-wrap: wrap;"> 
                    <!-- <button class="mamiyoga-btn-login-and-signup" type="submit" :style="{background: is_ui_config_loaded ? ui_config.view.signup_page.submit_button.background_color : '' }" @click.prevent="login_or_signup === 'signup' ? onSubmit('signup') : onSubmit('login')">{{ login_or_signup === 'signup' ? '立即付款' : '登入' }}</button> -->
                    <button class="mamiyoga-login-btn-to-login" type="submit" @click.prevent="onSubmit('login')">登入</button>
                    <div style="display:flex;align-items: center;justify-content:space-between;width:100%;">
                        <div class="reg-text2">忘記帳號 / 忘記密碼</div>
                        <div class="reg-text2" style="color: #FF9898;box-shadow:0 1px 0 #ff9898;cursor:pointer;" @click="$router.push('/signup')">快速註冊</div>
                    </div>
                </div>
            </form>
        </div>
        <mamiyoga-window-alert-box v-if="first_enter">
            <div class="cancel-box" @click="closeRemind">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <div class="reg-text" style="text-align: center;color:#707070;margin-top:30px;font-size:20px;">新學員通知</div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-login-img-1.png" alt="" style="margin-top:20px;width:30%;">
            <div class="reg-text2" style="text-align: center;">開始課程付款前需先註冊成為會員，<br>若持有序號的學員也須先進行註冊！</div>
            <div class="mamiyoga-login-btn-to-login" style="width: 80%;display: flex;align-items: center;justify-content: center;margin-top:10px;" @click="goSignup">立即註冊</div>
        </mamiyoga-window-alert-box>
    </div>
</template>
<script >
import MamiyogaThirdPartyIcons from "~/components/mamiyoga/MamiyogaThirdPartyIcons.vue"
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import { EMAIL_REGEX } from '~/components/regex.js'

import axios from '~/config/axios-config'

export default {
    layout: 'mommiyoga',
    data() {
        return {
            errors: null,
            email: '',
            password: '',
            confirmPassword: '',
            ui_config: Object,
            hint:'請填寫',
            hint_color:'transparent',
            is_ui_config_loaded:false,
            login_or_signup:'login',
            is_new: true,
            first_enter: true,
        }
    },
    props: {
        // ui_config: Object,
    },
    async mounted() {
        if (process.client) {
            this.ui_config = await require('~/config/mamiyoga-config')
            this.is_ui_config_loaded = true;
            localStorage.redirect = '/menu';
            
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not) {
                window.alert('你已經登入了')
                this.$router.push('/menu')
            }
            if(localStorage['is_not_first']) {
                this.first_enter = false
            } 
            // console.log(this.first_enter)
            //ga
            // let gtag_config = {}
            // gtag_config.page_title = 'login';
            // gtag_config.page_path = this.$route.path;
            // this.$gtag('js', new Date());
            // this.$gtag('config', 'AW-739537538');
            // this.$gtag('config', 'UA-123332732-3', gtag_config);
            // this.$fbq("init",this.ui_config.fbq_id);
            // this.$fbq("track","PageView");
        }
    },
    components: {
        MamiyogaThirdPartyIcons,
        MamiyogaWindowAlertBox,
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
              let response = await axios.post('/signup',{email:email,password:password,repeated_password:repeated_password,from:this.ui_config.project_name})
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
                    // this.$router.push('/login-redirect')
                    this.$router.push('/menu')
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
        handleFBClick() {
            window.location.href = 'https://api.ludonow.com/auth/facebook?from=' + this.$route.path;
        },
        handleGoogleClick() {
            window.location.href = 'https://api.ludonow.com/auth/google?from=' + this.$route.path;
        },
        closeRemind(){
            this.first_enter = false;
            localStorage['is_not_first'] = false;
        },
        goSignup(){
            this.first_enter = false;
            this.$router.push('/signup')
        }
    }
}
</script>

<style>
textarea:focus, input:focus{
    outline: none;
}
.signup-page{
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.signup-page .mamiyoga-header {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
}
.signup-page .mamiyoga-header-logo {
    width: 30px;
    height: 30px;
}
.signup-page .mamiyoga-header .mamiyoga-header-login-btn {
    color: #FFF;
    width: 55px;
    height: 25px;
    border-radius: 20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
}
.mamiyoga-header-cancel-btn {
    width: 15px;
    height: 15px;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
}
.mamiyoga-login-container {
    height: 80vh;
    margin-top: 60px;
}
.reg-text{
    /* padding-top: 80px; */
    font-size: 21px;
    font-weight: 500;
}
.reg-text2{
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
.third-party{
    margin-top: 8vh;
}
.mamiyoga-login-container .hr{
    width: 63%;
    height: 1px;
    background: #D4D4D4;
    margin:23px auto 0;
    max-width: 320px;
}
.text-or{
    font-size: 14px;
    font-weight: 100;
    margin-top: 10px;
}
.signup-form{
    text-align: left;
    width: 100vw;
    max-width: 475px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.signup-form input[type=text]{
    padding:0px 10px;
}
.signup-form input[type=password]{
    padding:0px 10px;
}
.signup-form .login-column{
    margin-top: 11px;
    width: 67%;
    height: 53px;
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
    margin-top: 3vh;
    justify-content: flex-end;
    width: 67%;
    /* margin-left: 16.5vw; */
}
.switch-login-and-signup {
    font-size: 13px;
    color: #8F8F8F;
    margin-top: 10px;
}
.mamiyoga-btn-login-and-signup{
    width: 90px;
    height: 36px;
    line-height: 36px;
    /* background: #1785db; */
    color: #fff;
    font-size: 14px;
    /* margin-left: 60%; */
    /* margin-top: 6vh; */
    border: none;
    border-radius: 15px;
    padding: unset;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3)
}

.mamiyoga-login-btn-to-login {
    width: 100%;
    height: 45px;
    color: #F8F7F8;
    margin: 0 auto;
    background: #24798F;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    border-style: none;
}
.third-party-login {
    color: #24798F;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    display: flex;
    align-items: center;
}
.third-party-login img {
    height: 25px;
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
@media (min-width: 769px) {
    .signup-page {
        min-height: 100vh;
        background-color: white; 
        justify-content: end !important;
    }
    .signup-page .mamiyoga-header {
        width: 450px;
    }
    .btn-login-and-signup-container {
        padding-bottom: 0;
    }
}

</style>