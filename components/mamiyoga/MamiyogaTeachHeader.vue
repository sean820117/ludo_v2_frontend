<template>
    <div class="mamiyoga-teach-header">
        <div class="mamiyoga-teach-header-goback-btn">
            <a @click="$router.go(-1)">
                <img src="/mamiyoga/teach-goback.svg" alt="">
            </a>
        </div>
        <div class="mamiyoga-teach-header-title">
            <h3 v-html="headerTitle">{{headerTitle}}</h3>
        </div>
        <div class="mamiyoga-teach-header-login">
            <button v-html="btnText" :style="{backgroundColor:bgColor,color:ftColor,backgroundImage:'url('+bgImg+')'}" class="mamiyoga-teach-header-login-btn">{{btnText}}</button>
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
@media (max-width: 899px) {
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
    }
    .mamiyoga-teach-header-goback-btn img {
        display: block;
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
}
</style>
