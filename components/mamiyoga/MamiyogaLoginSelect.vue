<template>
    <div>
        <div class="mamiyoga-select-login" v-if="!is_beta">
            <p>{{$t('index_select_login')}}</p>
            <div class="mamiyoga-select-login-box">
                <div class="mamiyoga-select-login-icon">
                    <a href="/">
                        <img v-if="login_method.FB" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-facebook.png" alt="" @click.prevent="handleFBClick">
                    </a>
                </div>
                <div class="mamiyoga-select-login-icon">
                    <a href="/">
                        <img v-if="login_method.google" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-google.png" alt="" @click.prevent="handleGoogleClick">
                    </a>
                </div>
                <!-- <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-wechat.png" alt="">
                </div>
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-more.png" alt="">
                </div> -->
            </div>
        </div>
        <div class="mamiyoga-select-login" v-if="is_beta">
            <p>快和朋友分享</p>
            <div class="mamiyoga-select-login-box">
                <div class="mamiyoga-select-login-icon">
                    <a href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-facebook.png" alt="">
                    </a>
                </div>
                <div class="mamiyoga-select-login-icon">
                    <a href="https://www.addtoany.com/add_to/google_gmail?linkurl=http%3A%2F%2Fludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-google.png" alt="">
                    </a>
                </div>
                <div class="mamiyoga-select-login-icon">
                    <a href="https://www.addtoany.com/add_to/wechat?linkurl=http%3A%2F%2Fludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-wechat.png" alt="">
                    </a>
                </div>
                <div class="mamiyoga-select-login-icon">
                    <a href="https://www.addtoany.com/share#url=http%3A%2F%2Fludonow.com%2Fmamiyoga&amp;title=" target="_blank">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-more.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        is_beta: false,
        login_method:Object,
    },
    methods: {
        handleFBClick() {
            
            if (this.$route.path == "/victor/signup") {
                console.log("/victor/signup");
                this.$gtag('event', 'conversion', {
                    'send_to': 'AW-744113367/TiSjCLOMw54BENeJ6eIC',
                    'event_callback': function () {},
                });
                this.$fbq("track","CompleteRegistration");
            }
            
            window.location.href = 'https://api.ludonow.com/auth/facebook?from=' + this.$route.path;
        },
        handleGoogleClick() {
            window.location.href = 'https://api.ludonow.com/auth/google?from=' + this.$route.path;
        }
    },

}
</script>

<style>
.mamiyoga-select-login {
    width: 70vw;
    height: 80px;
    /* background: red; */
    margin: 10px auto;
}
.mamiyoga-select-login p {
    font-size: 12px;
    text-align: center;
    color: #DCD8CF;
    margin-bottom: 5px;
}
.mamiyoga-select-login-box {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    /* background-color:green;  */
}
.mamiyoga-select-login-icon {
    float: left;
    /* margin: 0 2.5%; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: white; */
}
@media (min-width: 769px) {
    .mamiyoga-select-login {
        width: 70%;
    }
}
</style>
