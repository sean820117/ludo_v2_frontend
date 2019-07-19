<template>
    <div class="index-contain">
        <video muted loop autoplay playsinline class="background-video" >
            <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-1.mp4" type="video/mp4">      
        </video>
        <div class="mamiyoga-index-intro">
            <mommiyoga-header bgColor="#9BAEB2" ftColor="#FFF"></mommiyoga-header>
            <!-- <h2 class="mamiyoga-intro-title" v-html="title">
                {{title}}
            </h2> -->
            <img v-if="is_open" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mommiyoga-title.png" alt="" class="mamiyoga-intro-title">
            <img v-if="!is_open" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mommiyoga-title-zh.png" alt="" class="mamiyoga-intro-title">
            
            <div class="mamiyoga-intro-btn">
                <router-link :to="go_teach+'/mommiyoga/teach'" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" :btnText="$t('index_button_free')" ></mamiyoga-btn>
                </router-link>
            </div>
            <div class="mamiyoga-intro-btn" v-if="!is_login">
                <router-link :to="go_teach+'/mommiyoga/login'" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_pay')"  style="margin-bottom:5vh;"></mamiyoga-btn>
                </router-link>
            </div>
            <div class="mamiyoga-intro-btn" v-else>
                <router-link :to="go_teach+'/mommiyoga/menu'" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_after')"  style="margin-bottom:5vh;"></mamiyoga-btn>
                </router-link>
            </div>
            <mommiyoga-login-select v-if="is_open"></mommiyoga-login-select>
            <mamiyoga-login-select v-if="!is_open && is_ui_config_loaded" :login_method="ui_config.view.signup_page.login_method"></mamiyoga-login-select>
            <p class="mamiyoga-intro-agree">{{$t('index_agree_text')}}&nbsp;<a :href="go_teach+'/mommiyoga/agreement'">{{$t('index_agree_link_1')}}</a>&nbsp;和&nbsp;<a :href="go_teach+'/mommiyoga/privacy'">{{$t('index_agree_link_2')}}</a></p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import MommiyogaHeader from '~/components/mamiyoga/MommiyogaHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MommiyogaLoginSelect from '~/components/mamiyoga/MommiyogaLoginSelect.vue';
import MamiyogaLoginSelect from '~/components/mamiyoga/MamiyogaLoginSelect.vue'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import VueMq from 'vue-mq';
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config'

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
        is_open:false,
        go_teach: '',
        is_ui_config_loaded:false,
        ui_config: Object,
    }),
    components: {
        MommiyogaHeader,
        MamiyogaBtn,
        MommiyogaLoginSelect,
        MamiyogaLoginSelect,
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
    },
    async mounted() {
        if (process.client) {
            if (this.$i18n.locale == 'zh-CN') {
                this.is_open = true
                this.go_teach = '/zh-CN'
            } else {
                this.is_open = false
                this.go_teach = ''
            }
            this.ui_config = await require('~/config/mamiyoga-config')
            this.is_ui_config_loaded = true;
            localStorage.redirect = '/mommiyoga/menu';
        }   
    },
    methods: {
        // goTeach(){
        //     if (this.$i18n.locale == 'zh-CN') {
        //         this.$router.push({path:'/zh-CN/mommiyoga/teach'})
        //     } else {
        //         this.$router.push({path:'/mommiyoga/teach'})
        //     }
        // },
        // goMenu(){
        //     if (this.$i18n.locale == 'zh-CN') {
        //         this.$router.push({path:'/zh-CN/mommiyoga/menu'})
        //     } else {
        //         this.$router.push({path:'/mommiyoga/menu'})
        //     }
        // }
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
    width: 80vw;
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
@media (max-width: 830px) and  (orientation:landscape) {
    .index-contain {
        height: 200vh;
    }
    .mamiyoga-index-intro {
        position: absolute;
    }
}
</style>