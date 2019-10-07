<template>
    <div class="course-container" :style="{background:getBaseColor}">
        <div v-if="is_ui_config_loaded" class="upper-block">
            <div class="chapter-title">
                <course-title :numberTitle="getTitle" :courseTitle="getSubtitle" />
            </div>
            <video-play :playerID="'player1'" :videourl="getVideoUrl" />
        </div>
        <div>
            <course-container ref="courseContainer" :label_name="'whatever-you-want'" :label_amount="1">
                <video-list @videoSrcChanged="updateChapter" slot="first-content" ref="vlist" :chapters="is_ui_config_loaded ? ui_config.chapters : []" />
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

import { mapMutations, mapGetters } from 'vuex';

export default {
    layout:'victor',
    components: {
        Titlebar,
        CourseTitle,
        QuestionBar,
        VideoPlay,
        CourseContainer,
        VideoList,
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
            this.ui_config = await require('~/config/victor-config')
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
            let login_or_not = localStorage.victor == "true" ? true:false;
            if (!login_or_not) {
                this.$router.push('/victor');
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