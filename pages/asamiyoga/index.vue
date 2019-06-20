<template>
    <div class="asamiyoga-index-intro">
        <mamiyoga-header btnText="密码登录" bgColor="#9BAEB2" ftColor="#FFF" loginTo="/asamiyoga/menu"></mamiyoga-header>
        <!-- <h2 class="mamiyoga-intro-title" v-html="title">
            {{title}}
        </h2> -->
        <img src="/mamiyoga/mamiyoga-title.png" alt="" class="asamiyoga-intro-title">
        <h4>入门版</h4>
        <router-link to="/asamiyoga/teach" style="text-decoration: none;">
            <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" btnText="马上体验" class="mamiyoga-intro-btn"></mamiyoga-btn>
        </router-link>
        <router-link to="/" style="text-decoration: none;">
            <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="立即购买" style="margin-bottom:5vh;"></mamiyoga-btn>
        </router-link>
        <asamiyoga-login-select></asamiyoga-login-select>
        <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="/asamiyoga/agreement">用户协议</a>&nbsp;和&nbsp;<a href="/asamiyoga/privacy">隐私政策</a></p>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/asamiyoga/MamiyogaHeader.vue';
import MamiyogaBtn from '~/components/asamiyoga/MamiyogaBtn.vue';
import AsamiyogaLoginSelect from '~/components/asamiyoga/AsamiyogaLoginSelect.vue';
export default {
    components: {
        MamiyogaHeader,
        MamiyogaBtn,
        AsamiyogaLoginSelect,
    },
    props: {
        title: String,
    },
}
</script>

<style>
@media (max-width: 899px) {
    .asamiyoga-index-intro {
        width: 100vw;
        height: 100vh;
        background-repeat:no-repeat;
        background-size: cover; 
        background-image: url("/asamiyoga/index-background.png");
    }
    .asamiyoga-index-intro h4 {
        color: #F7F7F7;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 17vh;
    }
    .asamiyoga-intro-title {
        /* margin:10vh 0 35vh 0; 
        text-align: center;
        color: #EEEFEA;
        font-size: 35px; 
        text-shadow: 0 5px 10px rgba(0,0,0,.5) */
        display: block;
        margin: 10vh auto 3vh;
        width: 70vw;

    }
    .mamiyoga-intro-btn {
        margin-bottom: 2vh; 
    }
    .mamiyoga-intro-agree {
        font-size: 12px;
        color: #DCD8CF;
        text-align: center;
    }
    .mamiyoga-intro-agree a:visited {
        color: #DCD8CF;
        
    }
}
</style>
