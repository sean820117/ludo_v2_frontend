<template>
    <div class="canvas-test">
        <mamiyoga-video-player :src="vidResult" :width="'700px'" :height="'300px'"
        :teacherPic="'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-teacher-remind-new.png'"></mamiyoga-video-player>
    </div>
</template>

<script>
import MamiyogaVideoPlayer from '~/components/mamiyoga/MamiyogaVideoPlayer.vue';
export default {
    layout: '',
    data:()=>({
        vidResult: '',
    }),
    components:{
        MamiyogaVideoPlayer,
    },
    mounted(){
        this.vidResult = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_3_B.mp4';
    }
}
</script>

<style>
/* html,body {
    object-fit: fill;
} */
</style>