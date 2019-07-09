<template>
    <div>
        <yoga-front-introduce class="yoga-front-cover" bgImage="/yoga/Yoga-front-cover-pic.jpg" unit="単元一" title="体側伸ばしで体を元気に" textColor="white" :join="378" :minute="7" :aiTeacher="1"></yoga-front-introduce>
        <yoga-course-information id="course-info" unit="単元一" title="体側伸ばしで体を元気に" src="/yoga/Yoga-course-video.mp4" courseTip="安楽座で座り<br>息を吸って 右手を上に上げ<br>吐きながら 体を右に軽く開きます<br>ゆっくり下ろします<br>息を吸って 左手を上げ<br>吐いて体を左に軽く開きます<br>3~5回繰り返します"></yoga-course-information>
        <yoga-upload-video id="course-video" bgImage="/yoga/Yoga-upload-video-pic.png"></yoga-upload-video>
    </div>
</template>

<script>
import YogaFrontIntroduce from '~/components/yoga/YogaFrontIntroduce.vue';
import YogaCourseInformation from '~/components/yoga/YogaCourseInformation.vue';
import YogaUploadVideo from '~/components/yoga/YogaUploadVideo.vue';
import Vue from 'vue';
import VueMq from 'vue-mq';


Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 992,
    desktop: Infinity,
  }
});

export default {
    components: {
        YogaFrontIntroduce,
        YogaCourseInformation,
        YogaUploadVideo,
    },
}
</script>

<style>
@media (max-width: 899px) {
 

}
</style>
