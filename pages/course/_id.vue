<template>
    <div>
        <course-header/>
        <course-video v-if="course_id" :course_id="course_id" :is_payed="is_payed" :currentSubCourse.sync="currentSubCourse"/>
        <course-status :is_payed="is_payed" :course_id="course_id"/>
		<practice-input-box v-if="course_id" :course_id="course_id" :currentSubCourse.sync="currentSubCourse"/>
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
	async mounted(){
        await this.checkIsPayed();
    },
    async created(){
        /* init params */
        this.course_id = this.$route.params.id;
        let store = this.$store;
        // await this.$checkLogin(store);
        
        this.currentSubCourse = this.courseDataSet[this.course_id].sub_course[0];
        if (!this.courseDataSet[this.course_id]) {
          window.alert('網址錯誤');
          this.$router.go(-1);
        } else {
          this.product_name = this.courseDataSet[this.course_id].product_name;
        }  
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
        is_payed:true,
        currentSubCourse:Object,
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
                }
            }
        },
    }
}
</script>

<style>
*{
	position: relative;
}
html, body{
	padding: 0;
	margin: 0;
    height: 100%;
    font-family: arial, "Microsoft JhengHei", "微軟正黑體";
}
</style>
