<template>
    <div>
        <mommiyoga-every-course @handleCourseVideoUpload="handleCourseVideoUpload"
        :course_data="course_data" v-if="!is_loaded"></mommiyoga-every-course>
        <mommiyoga-teach-assay @handleRetryEvent="handleRetryEvent" 
        :show_record_btn="true" :goRecord="course_data.id" :pose_id="pose_id"
        @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mommiyoga-teach-assay>
        <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div>
    </div>
</template>

<script>
import MommiyogaEveryCourse from '~/components/mamiyoga/MommiyogaEveryCourse.vue'
import MommiyogaTeachAssay from '~/components/mamiyoga/MommiyogaTeachAssay.vue';
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    layout: 'mommiyoga',
    data:()=>({
        courses:[],
        course_id:'',
        course_data:{},
        is_loaded: false,
        isLoading: false,
        fullPage: true,
        video_result: {},
        pose_id:'',
    }),
    components: {
        MommiyogaEveryCourse,
        MommiyogaTeachAssay,
        Loading,
    },
    async mounted() {
        if (process.client) {
            this.courses = await require('~/config/mommiyoga-course');
            this.course_id = this.$route.params.id;
            this.course_data = this.courses.find(course => this.course_id == course.id);
            this.pose_id = 'yoga_'+this.course_data.upload_id;
            console.log(this.course_id)

        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    async beforeCreate() {
        if (process.client) {
            this.ui_config = await require('~/config/mommiyoga-config')
            this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/mommiyoga/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                if (!payed_or_not) {
                    console.log("not payed");
                    window.alert("尚未開通課程，請先前往購買～");
                    this.$router.push('/resume/pay');
                } else {
                    console.log("payed")
                }
            }
        }
    },
    methods: {
        async handleVideoUpload(e) {
            this.isLoading = true;
            let form = new FormData();
            form.append('file',e.target.files[0])
            form.append('pose_id',this.pose_id)
            form.append('language','zh-tw')
            const res = await axios.post('/apis/video-upload',form)
            console.log(res.data)
            // for(var i =0; i< res.data.reps_wrong_tags.length; i++){
            //   for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
            //       if(res.data.reps_wrong_tags[i][j] == "y_6_1") res.data.reps_wrong_tags[i][j] = "膝盖弯曲";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_2") res.data.reps_wrong_tags[i][j] = "膝盖弯曲";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_3") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_4") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_5") res.data.reps_wrong_tags[i][j] = "轴心不稳";
            //       else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿势正确";
            //   }
            // }
            for(var i =0; i< res.data.reps_wrong_tags.length; i++){
              for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
                   res.data.reps_wrong_tags[i][j] = this.course_data.upload_notices[res.data.reps_wrong_tags[i][j]]
                   console.log(this.course_data.upload_notices[res.data.reps_wrong_tags[i][j]])
              }
            }
            this.isLoading = false;
            console.log(res.data)
            console.log(res.data.reps_wrong_tags)
            this.reps_wrong_tags = res.data.reps_wrong_tags;
            this.video_result = res.data;
            this.is_loaded = true;
            // setTimeout(()=> {
            //     clearInterval(this.interval);
            //     this.is_uploading = false;
            //     this.value = 0;
            //     this.is_showing = true;
            // }, 1000)
            // setTimeout(()=> {
            //     this.$scrollTo('#result-box',"start");
            // },1500)
            // window.alert('Done');
        },
        handleRetryEvent(e){
            console.log("ok");
            this.is_loaded = false;
            this.handleVideoUpload(e);
        },
        closeAssayWindow(){
            this.is_loaded = false;
        },
        handleCourseVideoUpload(e) {
            this.is_loaded = false;
            console.log('OK');
            this.handleVideoUpload(e);
        },
    },
}
</script>

<style>
.vld-overlay .vld-background {
    background-color:black;
}
.vld-icon svg {
    stroke: #DCD8CF;
}
</style>
