<template>
    <div class="course-container">
        <div class="upper-block">
            <Titlebar/>
            <div class="c-title">
                <course-title :numberTitle="'第一堂課'" :courseTitle="'能代東預上大'" />
            </div>
            <div class="q-container">
                <question-bar :question="'課程開始前，可以幫我先填個問卷嗎？'"/>
            </div>
            <video-play :playerID="'cp1'" :videourl="videoUrl" />
        </div>
        <div>
            <course-container ref="courseContainer" :labelName="'whatever-you-want'">
                <video-list @videoSrcChanged="updateVideoSrc" slot="first-content" ref="vlist"/>
                <ai-judgment slot="second-content" />
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
export default {
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
        updateVideoSrc(id){
            this.videoUrl = 'https://player.vimeo.com/video/'+id;
        }
    },
    data:() => ({
        videoUrl: 'https://player.vimeo.com/video/319395957',
    }),
    mounted: function() {
        window.onload = (function(){
            this.$refs.courseContainer.resetSize();
            this.$refs.vlist.adjustHeight();
        }).bind(this);
    },
}
</script>

<style>
*{
    margin:0px;
    font-family: 'Noto Sans TC', sans-serif;
}
html, body, #__nuxt, #__layout, #__layout > div{
    height: 100%;
    background: #0090FF;
}
.course-container{
    height: 100%;
    display: grid;
    grid-template-rows: min-content auto;
}
.upper-block{
    padding-bottom: 10px;
}
.c-title{
    padding-top: 60px;
    margin-bottom: 5px;
}
.q-container{
    box-sizing: border-box;
    width: 100%;
    border-left: solid rgba(0,0,0,0) 10px;
    border-right: solid rgba(0,0,0,0) 10px;
}
</style>