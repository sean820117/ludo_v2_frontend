<template>
    <div class="asamiyoga-teach-header">
        <div class="asamiyoga-teach-header-goback-btn">
            <router-link :to="{path:nextTo}">
                <img src="/asamiyoga/teach-goback.svg" alt="">
            </router-link>
        </div>
        <div class="asamiyoga-teach-header-title">
            <h3 v-html="headerTitle" :style="{color:titleColor}">{{headerTitle}}</h3>
        </div>
        <div class="asamiyoga-teach-header-login">
            <button v-html="btnText" :style="{backgroundColor:bgColor,color:ftColor,backgroundImage:'url('+bgImg+')'}" class="asamiyoga-teach-header-login-btn">{{btnText}}</button>
        </div>
    </div>
</template>

<script>
import MamiyogaSmallBtn from '~/components/asamiyoga/MamiyogaSmallBtn.vue';
export default {
    props: {
        bgColor: String,
        ftColor: String,
        btnText: String,
        nextTo: String,
        bgImg: String,
        headerTitle: String,
        titleColor: String,
    },
    components: {
        MamiyogaSmallBtn,
    },
}
</script>

<style>
@media (max-width: 899px) {
    .asamiyoga-teach-header {
        position: relative;
        width: 100vw;
        height: 60px;
        /* background: red; */
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        z-index: 999;
    }
    .asamiyoga-teach-header-goback-btn {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .asamiyoga-teach-header-goback-btn img {
        display: block;
    }
    .asamiyoga-teach-header-title h3 {
        font-size: 14px;
        color: #51636F;
        font-weight: 400;
    }
    .asamiyoga-teach-header-login {
        width: 65px;
        height: 25px;
    }
    .asamiyoga-teach-header-login-btn {
        width: 65px;
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
}
</style>
