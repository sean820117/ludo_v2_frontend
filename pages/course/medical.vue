<template>
    <div>
        <course-header/>
        <course-video/>
        <course-status/>
		<practice-input-box assistantId="03db9c50-f211-11e8-93e5-7514b94dfe78" />
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



export default {
    head () {
        return {
            link: [
                { rel: 'stylesheet', href: '/bootstrap.css' }
            ]
        } 
	},
	mounted(){
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
