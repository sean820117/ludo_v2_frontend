<template>
    <div class="mamiyoga-index-intro">
        <mamiyoga-header bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
        <!-- <h2 class="mamiyoga-intro-title" v-html="title">
            {{title}}
        </h2> -->
        <img src="/mamiyoga/mamiyoga-title.png" alt="" class="mamiyoga-intro-title">
        <div class="mamiyoga-intro-btn">
            <router-link to="/mamiyoga/teach" style="text-decoration: none;">
                <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" btnText="體驗課程"></mamiyoga-btn>
            </router-link>
        </div>
        <div class="mamiyoga-intro-btn" @click="openRemindBox">
            <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="完整課程" style="margin-bottom:5vh;"></mamiyoga-btn>
        </div>
        <mamiyoga-login-select></mamiyoga-login-select>
        <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="">用戶協議</a>&nbsp;和&nbsp;<a href="/mamiyoga/privacy">隱私政策</a></p>
        <div class="background-video">
            <hooper :autoPlay="true" :playSpeed="8000">
                <slide>
                    <video src="/mommiyoga/index-video-1.mp4" muted="true" loop="true" autoplay="autoplay"></video>
                </slide>
                <slide>
                    <video src="/mommiyoga/index-video-4.mp4" muted="true" loop="true" autoplay="autoplay"></video>
                </slide>
                
            </hooper>
        </div>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaLoginSelect from '~/components/mamiyoga/MamiyogaLoginSelect.vue';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    layout:'mommiyoga',
    components: {
        MamiyogaHeader,
        MamiyogaBtn,
        MamiyogaLoginSelect,
        Hooper,
        Slide,
        HooperPagination,
    },
    props: {
        title: String,
    },
    methods:{
        openRemindBox(){

        }
    }
}
</script>

<style>
.mamiyoga-index-intro {
    width: 100vw;
    min-height: 100vh;
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
    margin: 0 auto 2vh; 
    width: 135px;
}
.mamiyoga-intro-agree {
    font-size: 12px;
    color: #DCD8CF;
    text-align: center;
    padding-bottom: 10px;
}
.mamiyoga-intro-agree a,.mamiyoga-intro-agree a:visited {
    color: #DCD8CF;
}
.background-video {
    height: 100%;
    position: fixed;
    z-index: -99;
    top: 0;
}
.background-video video {
    height: 100%;
    position: fixed;
    z-index: -99;
    top: 0;
}
.hooper {
    width: 100vw;
    height: 100vh;
}
@media (min-width:769px) {
    .mamiyoga-index-intro {
        width: 100%;
        height: 100vh;
    }
    .mamiyoga-intro-title {
        width: 70%;
    }

}
</style>