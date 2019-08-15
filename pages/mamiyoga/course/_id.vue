<template>
    <div>
        <mamiyoga-every-course v-if="!open_explain" @openExplainBox="openExplainBox"
        :course_data="course_data"></mamiyoga-every-course>
        <mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box>
    </div>
</template>

<script>
import MamiyogaEveryCourse from '~/components/mamiyoga/MamiyogaEveryCourse.vue'
import MamiyogaExplainBox from '~/components/mamiyoga/MamiyogaExplainBox.vue'
export default {
    layout: 'mommiyoga',
    data:()=>({
        courses:[],
        course_id:'',
        course_data:{},
        open_explain: false,
    }),
    components: {
        MamiyogaEveryCourse,
        MamiyogaExplainBox,
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
            // console.log(this.course_id)
        }
    },
    methods:{
        closeExplain(){
            this.open_explain = false
        },
        openExplainBox(){
            this.open_explain = true

        }
    }
}
</script>

<style>

</style>
