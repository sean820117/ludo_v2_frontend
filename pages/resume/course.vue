<template>
    <div class="course-container" :style="{background:getBaseColor}">
        <div v-if="is_ui_config_loaded" class="upper-block">
            <div class="chapter-title">
                <course-title :numberTitle="getTitle" :courseTitle="getSubtitle" />
            </div>
            <div class="q-container">
                <question-bar :question="'課程開始前，可以幫我先填個問卷嗎？'"/>
            </div>
            <video-play :playerID="'player1'" :videourl="getVideoUrl" />
        </div>
        <div>
            <course-container ref="courseContainer" :label_name="'whatever-you-want'" :label_amount="3">
                <video-list @videoSrcChanged="updateChapter" slot="first-content" ref="vlist" :chapters="is_ui_config_loaded ? ui_config.chapters : []" />
                <ai-judgment slot="second-content" :ai_id="getAIModelId" :current_chapter="current_chapter"/>
                <download-resource slot="third-content"/>
            </course-container>
        </div>
    </div>
</template>
<script>
import Titlebar from "~/components/resume/Titlebar"
import CourseTitle from "~/components/resume/CourseTitle"
import QuestionBar from "~/components/resume/QuestionBar"
import VideoPlay from "~/components/resume/VideoPlay"
import CourseContainer from "~/components/resume/CourseContainer"
import VideoList from "~/components/resume/VideoList"
import AiJudgment from "~/components/resume/AiJudgment"
import DownloadResource from "~/components/resume/DownloadResource"

import { mapMutations, mapGetters } from 'vuex';

export default {
    layout:'resume',
    components: {
        Titlebar,
        CourseTitle,
        QuestionBar,
        VideoPlay,
        CourseContainer,
        VideoList,
        AiJudgment,
        DownloadResource,
    },
    methods: {
        handleToggleCross(){
            setTimeout(this.$refs.courseContainer.resetSize,100);
        },
        updateChapter(chapter){
            this.current_chapter = chapter;
            this.$scrollTo("#player1");
        }
    },
    data:() => ({
        baseVideoUrl: 'https://player.vimeo.com/video/',
        is_ui_config_loaded:false,
        ui_config: {},
        current_chapter:{},
    }),
    computed: {
        ...mapGetters({
            user : 'user/getData',
        }),
        getTitle: function() {
            return this.is_ui_config_loaded ? this.current_chapter.title : '';
        },
        getSubtitle: function() {
            return this.is_ui_config_loaded ? this.current_chapter.subtitle : '';
        },
        getVideoUrl: function() {
            return this.is_ui_config_loaded ?  this.baseVideoUrl + this.current_chapter.video_id : this.baseVideoUrl + '111';
        },
        getBaseColor: function() {
            return this.is_ui_config_loaded ?  this.ui_config.base_color : '';
        },
        getAIModelId: function() {
            return this.is_ui_config_loaded ?  this.current_chapter.ai_id : '';
        },
    },
    mounted: async function() {
        
    },
    async beforeCreate() {
        if (process.client) {
            this.ui_config = await require('~/config/resume-config')
            this.is_ui_config_loaded = true;
            this.current_chapter = this.ui_config.chapters[0];
            // window.onload = (function(){
            //     this.$refs.courseContainer.resetSize();
            //     this.$refs.vlist.adjustHeight();
            // }).bind(this);
            // setTimeout(() => {
            //     this.$refs.courseContainer.resetSize();
            //     this.$refs.vlist.adjustHeight();
            // },3000);
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未開通課程，請先前往購買～");
                this.$router.push('/resume/pay');
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
    // async asyncData (context) {
        
    //     return { ui_config: ui_config, is_ui_config_loaded:is_ui_config_loaded,current_chapter:current_chapter}
    // }
}
</script>

<style>
html, body, #__nuxt, #__layout, #__layout > div{
    height: 100%;
}
textarea:focus, input:focus{
    outline: none;
}
.course-container{
    min-height: 100%;
    display: grid;
    grid-template-rows: min-content auto;
    background: #0090FF;
}
.upper-block{
    padding-bottom: 10px;
}
.chapter-title{
    padding-top: 60px;
    margin-bottom: 10px;
}
.q-container{
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (min-width: 900px) {
    .chapter-title{
        padding-top: 80px;
        margin-bottom: 10px;
    }
    .number-title {
        font-size: 50px !important;
        color: white;
        font-weight: 400;
    }
}
</style>