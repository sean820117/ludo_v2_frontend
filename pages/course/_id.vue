<template>
    <div>
        <course-header/>
        <course-video v-if="course_id" :course_id="course_id"/>
        <course-status/>
		<practice-input-box v-if="course_id" :course_id="course_id" />
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


export default {
    head () {
        return {
            link: [
                { rel: 'stylesheet', href: '/bootstrap.css' }
            ]
        } 
	},
	mounted(){
        /* init params */
        this.course_id = this.$route.params.id;
        let store = this.$store;
        // this.$checkLogin(store);
        
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
