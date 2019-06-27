<template>
    <div>
        <mamiyoga-every-course 
        :course_data="course_data"></mamiyoga-every-course>
    </div>
</template>

<script>
import MamiyogaEveryCourse from '~/components/mamiyoga/MamiyogaEveryCourse.vue'
export default {
    data:()=>({
        courses:[],
        course_id:'',
        course_data:{},
    }),
    components: {
        MamiyogaEveryCourse,
    },
    async mounted() {
        if (process.client) {
            this.courses = await require('~/config/mamiyoga-course');
            this.course_id = this.$route.params.id;
            this.course_data = this.courses.find(course => this.course_id == course.id);
            console.log(this.course_id)
        }
    }
}
</script>

<style>

</style>
