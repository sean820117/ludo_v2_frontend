<template>
    <div class="mamiyoga-index-intro">
        <mamiyoga-header bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
        <!-- <h2 class="mamiyoga-intro-title" v-html="title">
            {{title}}
        </h2> -->
        <img src="/mamiyoga/mamiyoga-title.png" alt="" class="mamiyoga-intro-title">
        <router-link to="/mamiyoga/teach" style="text-decoration: none;">
            <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" btnText="體驗課程" class="mamiyoga-intro-btn"></mamiyoga-btn>
        </router-link>
        <router-link to="/" style="text-decoration: none;">
            <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="完整課程" style="margin-bottom:5vh;"></mamiyoga-btn>
        </router-link>
        <mamiyoga-login-select></mamiyoga-login-select>
        <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="">用戶協議</a>&nbsp;和&nbsp;<a href="/mamiyoga/privacy">隱私政策</a></p>
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
    .mamiyoga-index-intro {
        width: 100vw;
        height: 100vh;
        background-repeat:no-repeat;
        background-size: cover; 
        background: url('/mamiyoga/background-intro.png');
    }
    .mamiyoga-intro-title {
        /* margin:10vh 0 35vh 0; 
        text-align: center;
        color: #EEEFEA;
        font-size: 35px; 
        text-shadow: 0 5px 10px rgba(0,0,0,.5) */
        display: block;
        margin: 10vh auto 25vh;
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