<template>
    <div class="boxing-contain">
        <!-- <video muted loop autoplay class="background-video" >
            <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-1.mp4" type="video/mp4">      
        </video> -->
        <div class="boxing-index-intro">
            <course-header bgColor="#FF2D51" ftColor="#FFFFFF"
            logoTo="/boxing" family="MFLiHei_Nocom"
            logoImg="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/boxing-logo.jpg"
            ></course-header>
            <h2 class="boxing-index-intro-title">
                专为女性打造的<br>线上拳击课程
            </h2>
            <div class="boxing-intro-btn">
                <router-link to="/boxing/experience" style="text-decoration: none;">
                    <course-btn bgColor="#FFFFFF" family="MFLiHei_Nocom"
                    ftColor="#FF2D51" btnText="体 验 课 程" ></course-btn>
                </router-link>
            </div>
            <div class="boxing-intro-btn" style="margin-bottom:5vh;">
                <button @click="is_show_remind = true">完 整 课 程</button>
                <!-- <course-btn bgColor="#FF2D51" family="MFLiHei_Nocom"
                ftColor="#FFFFFF" btnText="完 整 课 程" ></course-btn> -->
            </div>
            <!-- <div class="boxing-intro-btn" style="margin-bottom:5vh;">
                <course-btn bgColor="#FF2D51" family="MFLiHei_Nocom"
                ftColor="#FFFFFF" btnText="完 整 课 程" ></course-btn>
            </div> -->

            <!-- <div class="boxing-intro-btn" v-if="!is_login">
                <router-link to="/resume/pay" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="立即购买"  style="margin-bottom:5vh;"></mamiyoga-btn>
                </router-link>
            </div>
            <div class="boxing-intro-btn" v-else>
                <router-link to="/mommiyoga/menu" style="text-decoration: none;">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="欢迎回来"  style="margin-bottom:5vh;"></mamiyoga-btn>
                </router-link>
            </div> -->
            <mommiyoga-login-select></mommiyoga-login-select>
            <p class="boxing-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="/">用户协议</a>&nbsp;和&nbsp;<a href="/">隐私政策</a></p>
        </div>
        <div :class="showRemindOrNot">
            <course-remind-no-board @closeRemind="is_show_remind = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/prepare-box-human.png" alt="" style="margin-top: 20px;width:40%;">
                <p style="font-size:13px;margin:15px 0px;">课程尚未开放<br>预计八月上线</p>
                <div class="star-line-box">
                    <button class="boxing-assay-contact-btn" 
                    style="width:90px;letter-space:0;margin-top:20px;font-family:'MFLiHei_Nocom';" @click="is_show_remind = false">期待</button>
                </div>
            </course-remind-no-board>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import CourseHeader from '~/components/all/CourseHeader.vue';
import CourseBtn from '~/components/all/CourseBtn.vue';
import CourseRemindNoBoard from '~/components/all/CourseRemindNoBoard.vue';
import MommiyogaLoginSelect from '~/components/mamiyoga/MommiyogaLoginSelect.vue';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import VueMq from 'vue-mq';
// import { mapMutations, mapGetters } from 'vuex';

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 1250,
    desktop: Infinity,
  }
});
export default {
    data:()=>({
        is_show_remind: false,
    }),
    layout:'boxing',
    // data:()=>({
    //     is_login: false,
    // }),
    components: {
        CourseHeader,
        CourseBtn,
        CourseRemindNoBoard,
        MommiyogaLoginSelect,
        Hooper,
        Slide,
        HooperPagination,
    },
    props: {
        title: String,
    },
    computed: {
        showRemindOrNot(){
           return this.is_show_remind ? 'open':'';
        }
    }
    // computed:{
    //     ...mapGetters({
    //         user : 'user/getData',
    //     }),
    // },
    // async beforeCreate() {
    //     if (process.client) {
    //         this.is_login = await this.$checkLogin(this.$store);
    //     }
    // }
}
</script>

<style>
.boxing-index-intro {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
}
.boxing-contain {    
    overflow: hidden;
    height: 100vh;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/boxing-index-background.png');
    background-color: black;
    background-repeat: no-repeat;
    background-position: center center; 
    background-size: 140%;
}
.boxing-contain .hooper {
    height: auto;
}
.background-video {
    /* position: fixed; */
    top: -3vh;
    min-width: 100vw;
    min-height: 100vh;
}
.boxing-index-intro-title {
    text-align: center;
    color: #FF2D51;
    font-size: 40px;
    display: block;
    margin: 15vh auto 20vh;
    /* width: 70vw; */
    font-family: 'MFLiHei_Nocom';
    font-weight: 500;
}
.boxing-index-intro h3 {
    color: #97A8AF;
    text-align: center;
    font-size: 18px; 
    margin-bottom: 20vh;
}
.boxing-intro-btn {
    margin: 0 auto 2vh;
    width: 135px;
}
.boxing-intro-btn button {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    border-style: none;
    cursor: pointer;
    font-family: 'MFLiHei_Nocom';
    color: #FFF;
    background-color: #FF2D51;
}
.boxing-intro-agree {
    font-size: 12px;
    color: #DCD8CF;
    text-align: center;
    padding-bottom: 3vh;
}
.boxing-intro-agree a,.boxing-intro-agree a:visited {
    color: #DCD8CF;
}

@media (min-width: 769px) {
    .boxing-contain {
        width: 450px;
        height: 100vh;
    }
    .background-video {
        min-height: 100vh;
        min-width: auto;
    }
    .boxing-index-intro {
        width: 450px;
        height: 100vh;
    }
    .boxing-index-intro-title {
        /* margin:10vh 0 35vh 0; 
        text-align: center;
        color: #EEEFEA;
        font-size: 35px; 
        text-shadow: 0 5px 10px rgba(0,0,0,.5) */
        display: block;
        margin: 150px auto 200px;
        width: 70%;

    }
    .boxing-intro-btn {
        margin: 0 auto 2vh;
        width: 135px; 
    }
    .boxing-intro-agree {
        font-size: 12px;
        color: #DCD8CF;
        text-align: center;
    }
    .boxing-intro-agree a,.boxing-intro-agree a:visited {
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
    .boxing-contain {
        height: 200vh;
    }
    .boxing-index-intro {
        position: absolute;
    }
}
</style>