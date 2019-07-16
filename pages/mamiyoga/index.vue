<template>
    <div>
        <div class="index-contain" v-if="!is_beta">
            <video muted loop autoplay class="background-video" >
                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-1.mp4" type="video/mp4">      
            </video>
            <div class="mamiyoga-index-intro">
                <mamiyoga-header bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox"></mamiyoga-header>
                <!-- <h2 class="mamiyoga-intro-title" v-html="title">
                    {{title}}
                </h2> -->
                <img :src="$t('index_img_title')" alt="" class="mamiyoga-intro-title">
                <div class="mamiyoga-intro-btn" @click="goTeach">
                    <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" :btnText="$t('index_button_free')"></mamiyoga-btn>
                </div>
                <div class="mamiyoga-intro-btn" @click="is_open = true">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_pay')" style="margin-bottom:5vh;" ></mamiyoga-btn>
                </div>
                <mamiyoga-login-select :is_beta="false"></mamiyoga-login-select>
                <!-- <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="">用戶協議</a>&nbsp;和&nbsp;<a href="/mamiyoga/privacy">隱私政策</a></p> -->
                <p class="mamiyoga-intro-agree" v-html="$t('index_agree_text')"></p>
            </div>
        </div>
        <div class="index-contain" v-if="is_beta">
            <video muted loop autoplay class="background-video" >
                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-1.mp4" type="video/mp4">      
            </video>
            <div class="mamiyoga-index-intro">
                <mamiyoga-header bgColor="#9BAEB2" ftColor="#FFF" :is_beta="true"></mamiyoga-header>
                <!-- <h2 class="mamiyoga-intro-title" v-html="title">
                    {{title}}
                </h2> -->
                <img :src="$t('index_img_title')" alt="" class="mamiyoga-intro-title">
                <div class="mamiyoga-intro-btn">
                    <router-link to="/mamiyoga/teach" style="text-decoration: none;">
                        <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" :btnText="$t('index_button_free')"></mamiyoga-btn>
                    </router-link>
                </div>
                <div class="mamiyoga-intro-btn" @click="openRemindBox">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_pay')" style="margin-bottom:5vh;"></mamiyoga-btn>
                </div>
                <mamiyoga-login-select :is_beta="true"></mamiyoga-login-select>
                <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="">用戶協議</a>&nbsp;和&nbsp;<a href="/mamiyoga/privacy">隱私政策</a></p>
                <p class="mamiyoga-intro-agree">&copy;2019 LUDO All Rights Reserved</p>
            </div>
        </div>
        <mamiyoga-window-alert-box v-if="is_open">
            <div class="cancel-box" @click="is_open = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top:40px;width:40%;">
            <p v-html="$t('teach_assay_text_development')"></p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px" @click="is_open = false">{{$t('teach_assay_button_development')}}</button>
            </div>
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaLoginSelect from '~/components/mamiyoga/MamiyogaLoginSelect.vue';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';

export default {
    layout:'mommiyoga',
    data:()=>({
        is_beta: true,
        is_open: false,
    }),
    components: {
        MamiyogaHeader,
        MamiyogaBtn,
        MamiyogaLoginSelect,
        Hooper,
        Slide,
        HooperPagination,
        MamiyogaWindowAlertBox,
    },
    props: {
        title: String,
    },
    methods:{
        goTeach(){
            if (this.$i18n.locale == 'JP') {
                this.$router.push({path:'/jp/mamiyoga/teach'})
            } else {
                this.$router.push({path:'/mamiyoga/teach'})
            }
        },
        openRemindBox(){
            this.is_open = true;
        }
    },
    // computed:{
    //     goTeach(){
    //         if (this.$i18n.locale == 'JP') {
    //             return '/mommiyoga/teach'
    //         } 
    //     }
    // }
}
</script>

<style>
.index-contain {    
    overflow: hidden;
    height: 100vh;
}
.index-contain .hooper {
    height: auto;
}
.mamiyoga-index-intro {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
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
    /* position: fixed; */
    top: -3vh;
    width: 100vw;
    min-height: 100vh;
}
.hooper {
    width: 100vw;
    height: 100vh;
}
.cancel-box {
    /* background: red; */
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.cancel-box img {
    width: 65%;
}
.mamiyoga-assay-contact-open p {
    color: #707070;
    text-align: center;
    font-size: 12px;
    margin: 30px 0 10px;
}
.mamiyoga-assay-contact-open img {
    display: block;
    margin: 0 auto;
    width: 50%;
}
.mamiyoga-assay-contact-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #9BAEB2;
    color: #fff;
    cursor: pointer;
}
@media (min-width:769px) {
    .index-contain {
        width: 450px;
        height: 100vh;
    }
    .mamiyoga-index-intro {
        width: 450px;
        height: 100vh;
    }
    .mamiyoga-intro-title {
        width: 70%;
    }
    .background-video {
        min-height: 100vh;
        width: 450px;
    }
}
@media (max-width: 400px) {
    .background-video {
        top: -4vh;
    }
}
@media (max-width: 350px) {
    .background-video {
        margin-top: -22vh;
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