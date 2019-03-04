<template>
    <div>
        <course-header/>
        <course-video v-if="course_id" :course_id="course_id" :is_payed="is_payed" :currentSubCourse.sync="currentSubCourse"/>
        <course-status :base_people.sync="base_people" :is_payed.sync="is_payed" :course_id="course_id"/>
		<practice-input-box v-if="course_id" :is_payed="is_payed" :course_id="course_id" :currentSubCourse.sync="currentSubCourse"/>
        <div class="go2u-desktop" :class="$mq" v-for="img in go2uDesktop" :key="img">
            <img :src="img" alt="" v-if="img == go2uDesktop[0] || img == go2uDesktop[1]">
            <img :src="img" alt="" v-if="img == go2uDesktop[2] && $mq == 'desktop'">
            <img :src="img" alt="" v-if="img == go2uDesktop[3] && $mq == 'mobile'">
            <button v-if="(img == go2uDesktop[2] && $mq == 'desktop') || (img == go2uDesktop[3] && $mq == 'mobile')" class="buy-now-btn" href="#all-course">
                <router-link :to="`/confirm/${course_id}`"> 
                    <img :class="$mq" :src="go2uBuy" alt="">
                </router-link>
            </button>
        </div>
        <div v-if="course_id == '01'" class="medical-ad"><a href="https://lihi.cc/Fif8z"><img :src="medicalAd" alt="https://lihi.cc/Fif8z"></a></div>
        <course-footer/>
    </div>
</template>

<script>
import CourseHeader from '~/components/CourseHeader.vue'
import CourseVideo from '~/components/CourseVideo.vue'
import CourseStatus from '~/components/CourseStatus.vue'
import PracticeInputBox from '~/components/PracticeInputBox.vue'
import PracticeRecordBox from '~/components/PracticeRecordBox.vue'
import CourseFooter from '~/components/CourseFooter.vue'

import medicalAd from 'static/go2u-desktop/medical-ad.jpg'

import go2u05 from 'static/go2u-desktop/05.jpg';
import go2u07b from 'static/go2u-desktop/07-5.jpg';
import go2u08 from 'static/go2u-desktop/08.jpg';
import go2u28 from 'static/go2u-mobile/28.jpg';
import go2uBuy from 'static/go2u-desktop/buy.png';
import CourseData01 from 'static/data/course/01.js'
import CourseData02 from 'static/data/course/02.js'
import CourseData03 from 'static/data/course/03.js'
import CourseData04 from 'static/data/course/04.js'
import CourseData05 from 'static/data/course/05.js'
import CourseData06 from 'static/data/course/06.js'
import CourseData07 from 'static/data/course/07.js'
import CourseData08 from 'static/data/course/08.js'
import CourseData09 from 'static/data/course/09.js'
import CourseData10 from 'static/data/course/10.js'
import CourseData11 from 'static/data/course/11.js'


import axios from '~/config/axios-config';
import { mapMutations, mapGetters } from 'vuex';
import Vuex from 'vuex';
import Vue from 'vue'
import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 992,
    desktop: Infinity,
  }
});

export default {
    head () {
        return {
            link: [
                { rel: 'stylesheet', href: '/bootstrap.css' }
            ]
        } 
    },
    computed: mapGetters({
        user : 'user/getData',
    }),
	async created(){
    },
    async mounted(){
        /* init params */
        this.course_id = this.$route.params.id;
        let store = this.$store;
        let login_status = await this.$checkLogin(store);
        
        this.currentSubCourse = this.courseDataSet[this.course_id].sub_course[7];
        if (!this.courseDataSet[this.course_id]) {
          window.alert('網址錯誤');
          this.$router.go(-1);
        } else {
          this.product_name = this.courseDataSet[this.course_id].product_name;
        }  
        if(login_status) {
            await this.checkIsPayed();
        } else {
            this.is_payed = false;
        }
        this.base_people = this.courseDataSet[this.course_id].base_people;
        console.log(this.base_people);
      },
    components: {
		CourseHeader,
		CourseVideo,
		CourseStatus,
        PracticeInputBox,
		PracticeRecordBox,
		CourseFooter,
    },
    data:() => ({
        course_id:"",
        is_payed:false,
        currentSubCourse:Object,
        base_people:0,
        medicalAd,
        courseDataSet: {
            "01": CourseData01,
            "02": CourseData02,
            "03": CourseData03,
            "04": CourseData04,
            "05": CourseData05,
            "06": CourseData06,
            "07": CourseData07,
            "08": CourseData08,
            "09": CourseData09,
            "10": CourseData10,
            "11": CourseData11,
        },
        go2uDesktop:[
            go2u05,
            go2u07b,
            go2u08,
            go2u28,
        ],
        go2uBuy,
    }),
    methods: {
        async checkIsPayed() {  
            const user_id = this.user.user_id;
            const product_id = this.course_id;
            if(user_id) {
                let response = await axios.post('/apis/check-is-payed',{product_id:product_id,user_id:user_id})
                let response2 = await axios.post('/apis/check-is-payed',{product_id:"12",user_id:user_id})
                if (response.data.status == '200' && response2.data.status == '200') {
                    console.log("check-is-payed success")
                    if(response.data.result == 1 || response2.data.result == 1) {
                        this.is_payed = true;
                    } else {
                        this.is_payed = false;
                    }
                } else {
                    console.log(response)
                    this.is_payed = false;
                }
            }
        },
    }
}
</script>

<style lang="postcss">
*{
	position: relative;
}
html, body{
	padding: 0;
	margin: 0;
    height: 100%;
    font-family: arial, "Microsoft JhengHei", "微軟正黑體";
}
.medical-ad {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    padding-top: 50px;
}
.medical-ad img {
    width: 50vw;
    height: 14vw;
}
.go2u-desktop {
  width: 80vw;
  margin-left: 10vw;
  margin-bottom: 5%;

  &.mobile { width: 90vw; margin-left: 5vw; }
}
.go2u-desktop img {
  width: 100%;
}
.buy-now-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;
}
.buy-now-btn a {
  width: 100%;
}
.buy-now-btn img {
  &.desktop { width: 40%; margin-top: -11%;}
  &.mobile { width: 80%; margin-top: -16%; }
}
</style>
