<template>
    <div>
        <div class="mamiyoga-select-login" v-if="!is_beta">
            <p>{{$t('index_select_login')}}</p>
            <div class="mamiyoga-select-login-box">
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-facebook.png" alt="">
                </div>
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-google.png" alt="">
                </div>
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-wechat.png" alt="">
                </div>
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-more.png" alt="">
                </div>
            </div>
        </div>
        <div class="mamiyoga-select-login" v-if="is_beta">
            <p>快和朋友分享</p>
            <div class="mamiyoga-select-login-box">
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-facebook.png" alt="">
                </div>
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-google.png" alt="">
                </div>
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-wechat.png" alt="">
                </div>
                <div class="mamiyoga-select-login-icon">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-icon-more.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        is_beta: false,
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
