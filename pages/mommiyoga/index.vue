<template>
    <div class="index-contain">
        <video muted loop autoplay class="background-video" >
            <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-1.mp4" type="video/mp4">      
        </video>
        <div class="mamiyoga-index-intro">
            <mommiyoga-header bgColor="#9BAEB2" ftColor="#FFF"></mommiyoga-header>
            <!-- <h2 class="mamiyoga-intro-title" v-html="title">
                {{title}}
            </h2> -->
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mommiyoga-title.png" alt="" class="mamiyoga-intro-title">
            
            <div class="mamiyoga-intro-btn">
                <router-link to="/mommiyoga/teach" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" btnText="马上体验" ></mamiyoga-btn>
                </router-link>
            </div>
            <div class="mamiyoga-intro-btn" v-if="!is_login">
                <router-link to="/resume/pay" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="立即购买"  style="margin-bottom:5vh;"></mamiyoga-btn>
                </router-link>
            </div>
            <div class="mamiyoga-intro-btn" v-else>
                <router-link to="/mommiyoga/menu" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="欢迎回来"  style="margin-bottom:5vh;"></mamiyoga-btn>
                </router-link>
            </div>
            <mommiyoga-login-select></mommiyoga-login-select>
            <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="/mommiyoga/agreement">用户协议</a>&nbsp;和&nbsp;<a href="/mommiyoga/privacy">隐私政策</a></p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import MommiyogaHeader from '~/components/mamiyoga/MommiyogaHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MommiyogaLoginSelect from '~/components/mamiyoga/MommiyogaLoginSelect.vue';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import VueMq from 'vue-mq';
import { mapMutations, mapGetters } from 'vuex';

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 1250,
    desktop: Infinity,
  }
});
export default {
    layout:'mommiyoga',
    data:()=>({
        is_login: false,
    }),
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
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    async beforeCreate() {
        if (process.client) {
            this.is_login = await this.$checkLogin(this.$store);
        }
    }
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
    top: -3vh;
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
.mamiyoga-index-intro h3 {
    color: #97A8AF;
    text-align: center;
    font-size: 18px; 
    margin-bottom: 20vh;
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
        margin: 100px auto 255px;
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
@media (max-width: 400px) {
    .background-video {
        top: -4vh;
    }
}
@media (max-width: 350px) {
    .background-video {
        margin-top: -35vh;
    }
}
</style>