<template>
    <div class="course-container" :style="{background:'#A42073'}">
        <div v-if="is_ui_config_loaded" class="upper-block">
            <div class="c-title">
                <course-title :numberTitle="getTitle" :courseTitle="getSubtitle" />
            </div>
            <div class="q-container" v-if="false">
                <question-bar :question="'課程開始前，可以幫我先填個問卷嗎？'"/>
            </div>
            <video-play :playerID="'cp1'" :videourl="getVideoUrl" />
        </div>
        <div>
            <course-container ref="courseContainer" :labelName="'whatever-you-want'">
                <video-list @videoSrcChanged="updateChapter" slot="first-content" ref="vlist" :chapters="is_ui_config_loaded ? ui_config.chapters : []" />
                <!-- <ai-judgment slot="second-content" />
                <download-resource slot="third-content"/> -->
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

export default {
    layout:'victor',
    head () {
        return {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500' }
            ],
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1.0"},
                { charset: "UTF-8"}
            ]
        } 
    },
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
        }
    },
    data:() => ({
        baseVideoUrl: 'https://player.vimeo.com/video/',
        is_ui_config_loaded:false,
        ui_config: {},
        current_chapter:{},
    }),
    computed: {
        getTitle: function() {
            return this.is_ui_config_loaded ? this.current_chapter.title : '';
        },
        getSubtitle: function() {
            return this.is_ui_config_loaded ? this.current_chapter.subtitle : '';
        },
        getVideoUrl: function() {
            return this.is_ui_config_loaded ?  this.baseVideoUrl + this.current_chapter.video_id : '';
        },
    },
    mounted: async function() {
        if (process.client) {
            // window.onload = (function(){
                this.$refs.courseContainer.resetSize();
                this.$refs.vlist.adjustHeight();
            // }).bind(this);
            if (await this.$checkLogin(this.$store) == false) {
                this.$router.push('/victor');
            } 
        }
    },
    async asyncData (context) {
        const ui_config = await require('~/config/victor-config')
        const is_ui_config_loaded = true;
        const current_chapter = ui_config.chapters[0];
        return { ui_config: ui_config, is_ui_config_loaded:is_ui_config_loaded,current_chapter:current_chapter}
    }
}
</script>

<style>
*{
    margin:0px;
    font-family: 'Noto Sans TC', sans-serif;
}
html, body, #__nuxt, #__layout, #__layout > div{
    height: 100%;
}
textarea:focus, input:focus{
    outline: none;
}
.course-container{
    height: 100%;
    display: grid;
    grid-template-rows: min-content auto;
    background: #0090FF;
}
.upper-block{
    padding-bottom: 10px;
}
.c-title{
    padding-top: 60px;
    margin-bottom: 10px;
}
.q-container{
    box-sizing: border-box;
    width: 100%;
    border-left: solid rgba(0,0,0,0) 10px;
    border-right: solid rgba(0,0,0,0) 10px;
}
</style>