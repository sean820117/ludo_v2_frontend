<template>
    <div style="height:100%">
        <Titlebar/>
        <div class="c-title">
            <course-title
                :numberTitle="'第一堂課'"
                :courseTitle="'能代東預上大'"
            />
        </div>
        <div class="q-container">
            <question-bar :question="'課程開始前，可以幫我先填個問卷嗎？'"/>
        </div>
        <video-play :videourl="'https://player.vimeo.com/video/319395957'" />
    </div>
</template>
<script>
import Titlebar from "~/components/resume/Titlebar"
import CourseTitle from "~/components/resume/CourseTitle"
import QuestionBar from "~/components/resume/QuestionBar"
import VideoPlay from "~/components/resume/VideoPlay"
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
    background: #0090FF;
}
.c-title{
    margin-top: 80px;
    margin-bottom: 21px;
}
.q-container{
    box-sizing: border-box;
    width: 100%;
    border-left: solid rgba(0,0,0,0) 10px;
    border-right: solid rgba(0,0,0,0) 10px;
}
</style>