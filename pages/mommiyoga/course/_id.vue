<template>
    <div>
        <mommiyoga-every-course 
        :course_data="course_data"></mommiyoga-every-course>
    </div>
</template>

<script>
import MommiyogaEveryCourse from '~/components/mamiyoga/MommiyogaEveryCourse.vue'
export default {
    data:()=>({
        courses:[],
        course_id:'',
        course_data:{},
    }),
    components: {
        MommiyogaEveryCourse,
    },
    async mounted() {
        if (process.client) {
            this.courses = await require('~/config/mommiyoga-course');
            this.course_id = this.$route.params.id;
            this.course_data = this.courses.find(course => this.course_id == course.id);
            console.log(this.course_id)
        }
    }
}
</script>

<style>

</style>
