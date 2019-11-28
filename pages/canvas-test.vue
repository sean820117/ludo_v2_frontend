<template>
    <div class="canvas-test">
        <!-- <mamiyoga-video-player :vidResult="vidResult"
        :imgArray="imgArray" :src="''" :width="''" :height="''" ></mamiyoga-video-player> -->
        <mamiyoga-video-player :vidResult="vidResult" :vidW="'300px'" :vidH="'300px'"
        :imgArray="imgArray" :teacherPic="'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-teacher-remind-new.png'"></mamiyoga-video-player>
    </div>
</template>

<script>
import MamiyogaVideoPlayer from '~/components/mamiyoga/MamiyogaVideoPlayer.vue';
export default {
    layout: '',
    data:()=>({
        vidResult: '',
        imgArray: [],
    }),
    components:{
        MamiyogaVideoPlayer,
    },
    mounted(){
        this.vidResult = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/L13_3_B.mp4';
        this.imgArray = ['https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-teacher-remind-new.png']
        console.log(this.imgArray + 'page')
    }
}
</script>

<style>
/* html,body {
    object-fit: fill;
} */
</style>