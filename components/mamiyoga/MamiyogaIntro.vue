<template>
    <div>
        <mamiyoga-header btnText="登入" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
        <h2 class="mamiyoga-intro-title" v-html="title">
            {{title}}
        </h2>
        <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" btnText="馬上體驗" class="mamiyoga-intro-btn"></mamiyoga-btn>
        <mamiyoga-login-select></mamiyoga-login-select>
        <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="">用戶協議</a>&nbsp;和&nbsp;<a href="">隱私政策</a></p>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaLoginSelect from '~/components/mamiyoga/MamiyogaLoginSelect.vue';
export default {
    components: {
        MamiyogaHeader,
        MamiyogaBtn,
        MamiyogaLoginSelect,
    },
    props: {
        title: String,
    },
}
</script>

<style>
@media (max-width: 899px) {
    .mamiyoga-intro-title {
        margin:10vh 0 35vh 0; 
        text-align: center;
        color: #EEEFEA;
        font-size: 35px; 
        text-shadow: 0 5px 10px rgba(0,0,0,.5)
    }
    .mamiyoga-intro-btn {
        margin-bottom: 5vh; 
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
