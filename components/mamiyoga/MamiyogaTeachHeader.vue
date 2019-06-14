<template>
    <div class="mamiyoga-header">
        <div class="mamiyoga-header-goback-btn">
            <router-link :to="{path:nextTo}">
            <img src="/mamiyoga/teach-goback.svg" alt="">
            </router-link>
        </div>
        <div class="mamiyoga-header-login">
            <button v-html="btnText" :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn">{{btnText}}</button>
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
    },
    components: {
        MamiyogaSmallBtn,
    },
}
</script>

<style>
@media (max-width: 899px) {
    .mamiyoga-header {
        position: relative;
        width: 100vw;
        height: 60px;
        /* background: red; */
    }
    .mamiyoga-header-goback-btn {
        width: 30px;
        height: 30px;
        /* background: white; */
        position: absolute;
        top: 2vh;
        left: 7vw;
    }
    .mamiyoga-header-goback-btn img {
        display: block;
        margin: 10px auto;
    }
    .mamiyoga-header-login {
        /* background: white; */
        position: absolute;
        top: 3vh;
        right: 6vw;
    }
    .mamiyoga-header-login-btn {
        width: 55px;
        height: 25px;
        border-radius:20px;
        font-weight: 500;
        font-size: 12px;
        text-align: center;
        border-style: none;
        box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    }
}
</style>
