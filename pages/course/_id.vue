<template>
    <div>
        <mamiyoga-every-course v-if="!open_explain" @openExplainBox="openExplainBox"
        :course_data="course_data"></mamiyoga-every-course>
        <no-ssr><mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box></no-ssr>
    </div>
</template>

<script>
import MamiyogaEveryCourse from '~/components/mamiyoga/MamiyogaEveryCourse.vue'
import MamiyogaExplainBox from '~/components/mamiyoga/MamiyogaExplainBox.vue'
import { mapMutations, mapGetters } from 'vuex';
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
            } else if(this.$i18n.locale == 'zh-CN') {
                this.courses = await require('~/config/mamiyoga-course-zhcn');
            } else {
                this.courses = await require('~/config/mamiyoga-course');
            }
            this.course_id = this.$route.params.id;
            this.course_data = this.courses.find(course => this.course_id == course.id);
            // console.log(this.course_id)
        }
    },
    async beforeCreate() {
        if (process.client) {
            // this.ui_config = await require('~/config/mommiyoga-config')
            // this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                if (!payed_or_not) {
                    console.log("not payed");
                    window.alert("尚未開通課程，請先前往購買～");
                    this.$router.push('/pay');
                } else {
                    console.log("payed")
                }
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
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
