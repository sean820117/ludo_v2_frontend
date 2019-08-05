<template>
    <div>
        <mamiyoga-every-course 
        :course_data="course_data"></mamiyoga-every-course>
    </div>
</template>

<script>
import MamiyogaEveryCourse from '~/components/mamiyoga/MamiyogaEveryCourse.vue'
export default {
    layout: 'mommiyoga',
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
            if(this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
            } else {
                this.courses = await require('~/config/mamiyoga-course');
            }
            this.course_id = this.$route.params.id;
            this.course_data = this.courses.find(course => this.course_id == course.id);
            console.log(this.course_id)
        }
    }
}
</script>

<style>

</style>
