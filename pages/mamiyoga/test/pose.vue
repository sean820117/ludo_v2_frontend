<template>
    <div>
        <div class="divide-page" v-if="!is_loaded" >
            <mamiyoga-mail-header class="mamiyoga-divide-header"></mamiyoga-mail-header>
            <h3>{{getTitle}}</h3>
            <mamiyoga-divide-video :course_data="course_data"
            @handleCourseVideoUpload="handleCourseVideoUpload"></mamiyoga-divide-video>
        </div>
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue';
import MamiyogaDivideVideo from '~/components/mamiyoga/MamiyogaDivideVideo.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    layout: 'mommiyoga',
    data:()=>({
        is_loaded: false,
        video_result: {},
        isLoading: false,
        fullPage: true,
        courses:[],
        course_id:'',
        course_data:{},
    }),
    components:{
        MamiyogaMailHeader,
        MamiyogaDivideVideo,
        MamiyogaAssayVideo,
        Loading,
    },
    async mounted() {
        if (process.client) {
            if(this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
            } else {
                this.courses = await require('~/config/mamiyoga-course');
            }
            this.course_id = 1;
            this.course_data = this.courses.find(course => this.course_id == course.id);
            console.log(this.course_id)
        }
    },
    methods:{
        closeAssayWindow(){
            this.is_loaded = false;
        },
        openVideoAssisant(){
            console.log('OK');
            this.showAssisant = true;
        },
        handleCourseVideoUpload(e) {
            this.is_loaded = false;
            console.log('OK');
            this.handleVideoUpload(e);
        },
    },
    computed:{
        getTitle(){
            if (this.course_data) {
                return this.course_data.title;
            } else {
                return '';
            }
        },
        getPoseAmount(){
            if (this.course_data) {
                return this.course_data.pose_amount;
            } else {
                return '';
            }
        },
    }
}
</script>

<style>
.divide-page {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.divide-page h3 {
    font-size: 24px;
    color: #51636F;
    text-align: center;
    font-weight: 400; 
    margin-bottom: 2vh; 
}
.mamiyoga-divide-header button {
    display: none;
}
@media (min-width: 769px) {
    .divide-page {
        width: 100%;
    }
}
</style>
