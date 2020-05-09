<template>
    <div class="mamiyoga-login-bg">
        <div class="mamiyoga-login-container">
            <div class="login-campaign-block">
                <div v-if="$mq == 'mobile' || $mq == 'iphone'" class="cancel-box" @click="handleLoginCancel" :style="{position:'absolute'}">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="" >
                </div>
                <img class="login-campaign-block-img" :src="$mq == 'desktop' ? login_campaign : login_campaign_mobile" alt="">
            </div>
            <div class="login-main-block">
                <div v-if="$mq == 'desktop'" class="cancel-box" @click="handleLoginCancel">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="" >
                </div>
                <h3 class="color-primary mamiyoga-h3 title">免費7天體驗</h3>
                <div class="login-input-group">
                    <div class="login-input-unit">
                        <label for="" class="login-input-unit-label">電子信箱</label>
                        <input type="text" class="login-input-unit-input" v-model="email"/>
                    </div>
                    <div class="login-input-unit">
                        <label for="" class="login-input-unit-label">電話號碼</label>
                        <input type="text" class="login-input-unit-input" v-model="phone_number"/>
                    </div>
                </div>
                <button @click="onSubmit" class="login-main-block-submit-btn color-white bg-red btn-large">開始使用</button>
                <hr v-if="mode > 0" class="login-main-block-thirdparty-hr" />
                <div v-if="mode > 0" class="login-main-block-fb-btn color-primary bg-primary-light btn-large">
                    <div class="third-party-icon">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-from-facebook.png" alt="">
                    </div>
                    <div class="login-main-block-fb-btn-text">
                        使用facebook登入
                    </div>
                </div>
                <div v-if="mode > 0" class="login-main-block-google-btn color-primary bg-white btn-large border-primary-light">
                    <div class="third-party-icon">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-from-google.png" alt="">
                    </div>
                    <div class="login-main-block-fb-btn-text">
                        使用google登入
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import MamiyogaThirdPartyIcons from "~/components/mamiyoga/MamiyogaThirdPartyIcons.vue"
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import { EMAIL_REGEX } from '~/components/regex.js'

import axios from '~/config/axios-config'

export default {
    data() {
        return {
            errors: null,
            email: '',
            password: '',
            phone_number:'',
            confirmPassword: '',
            ui_config: Object,
            hint:'請填寫',
            hint_color:'transparent',
            is_ui_config_loaded:false,
            login_or_signup:'login',
            first_enter: true,
            payed_or_not: false,
            login_campaign:'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/login-campaign.jpg',
            login_campaign_mobile:'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/login-campaign-mobile.jpg',
        }
    },
    props: {
        can_cancel_login_box:Boolean,
        mode:Number, // required,(experience=0,login=1,signup=2)
    },
    async mounted() {
        if (process.client) {
            this.ui_config = await require('~/config/mamiyoga-config')
            this.is_ui_config_loaded = true;
            
        }
    },
    components: {
        MamiyogaThirdPartyIcons,
        MamiyogaWindowAlertBox,
    },
    methods: {
        onSubmit() {
            if (this.email.length === 0 ) {
                this.hint = '請填寫電子信箱'
                this.hint_color = "red"
                return
            }
            if (this.phone_number.length == 0) {
                this.hint = '請填寫電話號碼'
                this.hint_color = "red"
                return
            }
            if (!EMAIL_REGEX.test(this.email)) {
                this.hint = '電子信箱格式錯誤'
                this.hint_color = "red"
                return
            }
            if (this.password.length < 8 && this.mode != 0) {
                this.hint = '密碼過短'
                this.hint_color = "red"
                return
            }
            if (this.password !== this.confirmPassword && this.mode == 2) {
                this.hint = '密碼需大於八個字'
                this.hint_color = "red"
                return
            }

            this.hint = null
            this.hint_color = ""

            if (this.mode == 2) {
                this.signup(this.email, this.password, this.confirmPassword)    
            } else if (this.mode == 1) {
                this.login(this.email, this.password)
            } else if (this.mode == 0) {
                this.experience(this.email, this.phone_number)
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
                    this.$router.push('/login-redirect')
                    // if(localStorage.redirect == '/teach') {
                    //     this.$router.push(localStorage.redirect)
                    // } else {
                    //     this.$router.push('/menu')
                    // }
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
        async experience(email,phone_number) {
            // if (email) {
            let routine_options = {
                frequency:localStorage['frequency'],
                exercise_time:localStorage['exercise_time'],
                question:localStorage['question'],
            };
            const res = await axios.post('/apis/subscribe-mamiyoga',{email:email,phone_number:phone_number,category:'練習提醒',routine_options});
            localStorage['set_contact'] = new Date().getTime() + 60*60*24*7*1000
            alert('成功開通')
            this.$emit("onlogincancel");
            return
            // }
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
        goSignup(){
            this.first_enter = false;
            this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/signup`)
        },
        handleLoginCancel() {
            this.$emit("onlogincancel");
            if (this.can_cancel_login_box) {
                
            }
        }
    }
}
</script>

<style scoped>
.cancel-box {
    /* background: red; */
    height: 40px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    align-self: flex-end;
}
.cancel-box img {
    width: 55%;
}
textarea:focus, input:focus{
    outline: none;
}
.mamiyoga-login-bg {
    width: 100vw;
    min-height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
}
.mamiyoga-login-container {
    width: 880px;
    height: 502px;
    background: white;
    display: flex;
    /* flex-direction: row; */
}
.login-campaign-block {
    display: block;
    width: 444px;
}
@media (max-width: 768px) {
    .mamiyoga-login-bg {
        position: absolute;
    }
    .mamiyoga-login-container {
        width: 100vw;
        height: 100%;
        padding-bottom: 55px;
        background: white;
        display: flex;
        flex-direction: column;
    }
    .login-campaign-block {
        width: 100vw;
    }
    .login-main-block {
        padding-top: 30px;
    }
    .cancel-box {
        right: 10px;
    }
}
.login-campaign-block-img {
    display: block;
    width:100%;
}
.login-main-block {
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.login-main-block .title {
    margin-top: 9px;
}
.login-main-block .login-input-group {
    margin-top: 38px;
    height: 194px;
}
.login-input-unit {
    margin-top: 7px;
    width: 67%;
    height: 53px;
}
.login-input-unit-label {
    display: block;
    text-align: left;
    color: #707070;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 7px; 
    padding-left: 5px;
}
.login-input-unit-input {
    height: 27px;
    min-width: 245px;
    border-radius: 8px;
    border: none;
    background: #F3F3F3;
    padding-left: 10px;
}
.login-main-block-submit-btn {
    /* margin-top: 38px; */
    display: block;
}
.login-main-block-thirdparty-hr {
    background: #D1D1D1;
    color: #D1D1D1;
    border: #D1D1D1;
    width: 242px;
    height: 1px;
    margin-top: 13px;
    margin-bottom: 23px;
}
.login-main-block-fb-btn {
    /* align-items: flex-start; */
}
.login-main-block-google-btn {
    /* align-items: flex-start; */
    border: 1px solid #ABCCD4;
}
.login-main-block .third-party-icon{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 1 20%;
    /* display: flex; */
    /* align-self: start; */
}
.login-main-block .third-party-icon img{
    max-height: 60%;
    /* width: fit-content; */
    /* display: flex; */
    /* align-self: start; */
}
.login-main-block-fb-btn-text {
    flex: 0 1 60%;
    align-self: center;
}
</style>