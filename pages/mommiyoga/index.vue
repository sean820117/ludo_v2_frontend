<template>
    <div class="index-contain">
        <hooper :autoPlay="true" :playSpeed="8000">
            <slide>
                <video muted loop autoplay class="background-video">
                        <source src="/mommiyoga/index-video-1.mp4" type="video/mp4">
                </video>
            </slide>
            <slide>
                <video muted loop autoplay class="background-video">
                        <source src="/mommiyoga/index-video-4.mp4" type="video/mp4">
                </video>
            </slide>
            <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
        </hooper>
        <div class="mamiyoga-index-intro">
            <mommiyoga-header bgColor="#9BAEB2" ftColor="#FFF"></mommiyoga-header>
            <!-- <h2 class="mamiyoga-intro-title" v-html="title">
                {{title}}
            </h2> -->
            <img src="/mamiyoga/mamiyoga-title.png" alt="" class="mamiyoga-intro-title">
            <div class="mamiyoga-intro-btn">
                <router-link to="/mommiyoga/teach" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" btnText="马上体验" ></mamiyoga-btn>
                </router-link>
            </div>
            <div class="mamiyoga-intro-btn">
                <router-link to="/" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="立即购买"  style="margin-bottom:5vh;"></mamiyoga-btn>
                </router-link>
            </div>
            <mommiyoga-login-select></mommiyoga-login-select>
            <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="">用户协议</a>&nbsp;和&nbsp;<a href="/mommiyoga/privacy">隐私政策</a></p>
        </div>
    </div>
</template>

<script>
import MommiyogaHeader from '~/components/mamiyoga/MommiyogaHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MommiyogaLoginSelect from '~/components/mamiyoga/MommiyogaLoginSelect.vue';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    layout:'mommiyoga',
    components: {
        MommiyogaHeader,
        MamiyogaBtn,
        MommiyogaLoginSelect,
        Hooper,
        Slide,
        HooperPagination,
    },
    props: {
        title: String,
    },
}
</script>

<style>
.mamiyoga-index-intro {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    /* background-repeat:no-repeat;
    background-size: cover; 
    background-image: url('/mamiyoga/background-intro.png');
    background-position: center;  */
}
/* ::-webkit-scrollbar {
    display: none;
} */
.index-contain {    
    overflow: hidden;
    height: 100vh;
}
.index-contain .hooper {
    height: auto;
}
.background-video {
    /* position: fixed; */
    top: 0;
    min-width: 100vw;
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
    padding-bottom: 3vh;
}
.mamiyoga-intro-agree a,.mamiyoga-intro-agree a:visited {
    color: #DCD8CF;
}

@media (min-width: 769px) {
    .index-contain {
        width: 450px;
        height: 100vh;
        
    }
    .background-video {
        min-height: 100vh;
        min-width: auto;
    }
     .mamiyoga-index-intro {
        width: 450px;
        height: 100vh;
    }
    .mamiyoga-intro-title {
        /* margin:10vh 0 35vh 0; 
        text-align: center;
        color: #EEEFEA;
        font-size: 35px; 
        text-shadow: 0 5px 10px rgba(0,0,0,.5) */
        display: block;
        margin: 10vh auto 25vh;
        width: 70%;

    }
    .mamiyoga-intro-btn {
        margin: 0 auto 2vh;
        width: 135px; 
    }
    .mamiyoga-intro-agree {
        font-size: 12px;
        color: #DCD8CF;
        text-align: center;
    }
    .mamiyoga-intro-agree a,.mamiyoga-intro-agree a:visited {
        color: #DCD8CF;
    }
    
    
}

</style>