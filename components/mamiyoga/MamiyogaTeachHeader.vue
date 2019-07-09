<template>
    <div class="mamiyoga-teach-header">
        <div class="mamiyoga-teach-header-goback-btn">
            <a @click="$router.go(-1)">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-goback.png" alt="">
            </a>
        </div>
        <div class="mamiyoga-teach-header-title">
            <h3 v-html="headerTitle">{{headerTitle}}</h3>
        </div>
        <div class="mamiyoga-teach-header-login">
            <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn" v-if="!is_login" @click="$router.push('/mamiyoga/login')">{{$t('header_login')}}</button>
            <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn" @click="$router.push('/logout')" v-else >登出</button>
        </div>
    </div>
</template>

<script>
import MamiyogaSmallBtn from '~/components/mamiyoga/MamiyogaSmallBtn.vue';
export default {
    props: {
        bgColor: String,
        ftColor: String,
        btnText: String,
        nextTo: String,
        bgImg: String,
        headerTitle: String,
    },
    components: {
        MamiyogaSmallBtn,
    },
}
</script>

<style>
.mamiyoga-teach-header {
    position: relative;
    width: 100vw;
    height: 60px;
    /* background: red; */
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 990;
}
.mamiyoga-teach-header-goback-btn {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.mamiyoga-teach-header-goback-btn img {
    display: block;
    width: 20px;
    height: 13px;
}
.mamiyoga-teach-header-title h3 {
    font-size: 14px;
    color: #51636F;
    font-weight: 400;
}
.mamiyoga-teach-header-login {
    width: 55px;
    height: 25px;
}
.mamiyoga-teach-header-login-btn {
    width: 55px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    background-position: center;
    background-repeat: no-repeat;
}
.mamiyoga-header-login-btn {
    width: 63px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
}
@media (min-width: 769px) {
    .mamiyoga-teach-header{
        width: 100%;
    }
}
</style>
