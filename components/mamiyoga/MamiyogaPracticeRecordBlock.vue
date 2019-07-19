<template>
    <div>
        <div class="practice-record-block" :style="{backImage:'url('+recordImg+')'}">
            <div class="notice-box" v-if="have_notice"></div>
            <p class="practice-record-block-time" v-text="recordDate">{{recordDate}}</p>
            <div class="starmark-box" @click="checkStar">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star.png" alt="" v-show="!check_star">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star-checked.png" v-show="check_star" alt="">
            </div>
            <div class="practice-record-bak" @click="is_playing = true"></div>
        </div>
        <div class="practice-record-video" v-if="is_playing">
            <mommiyoga-record-video @closeRecordWindow="closeRecordWindow"
            :video_url="video_url" :score="score" :reps_wrong_tags="tags"
            ></mommiyoga-record-video>
        </div>
    </div>
</template>

<script>
import MommiyogaRecordVideo from '~/components/mamiyoga/MommiyogaRecordVideo.vue'
export default {
    data:()=>({
        have_notice: false,
        check_star: false,
        is_playing: false,
        
    }),
    components:{
        MommiyogaRecordVideo,
    },
    props: {
        recordDate: String,
        recordImg: String,
        video_url: String,
        score: Number,
        tags: Array,
        // record_video_url: String,
    },
    methods: {
        checkStar(){
            this.check_star = !this.check_star;
            localStorage[this.video_url+'check_star'] = !localStorage[this.video_url+'check_star'];

        },
        closeRecordWindow(){
            this.is_playing = false;
        }
        // openRecordVideo(){
        //     this.$emit('openRecordVideo');
        // }
    },
    mounted(){
        this.check_star = localStorage[this.video_url+'check_star']
    }
    // computed:{
    //     showVideo(){
    //         return this.is_playing ? 'show':'';
    //     }
    // }

}
</script>

<style>
.practice-record-block {
    width: 90vw;
    height: 120px;
    margin: 3vh 5vw 0;
    background: black;
    position: relative;
    cursor: pointer;
}
.notice-box {
    width: 30px;
    height: 30px;
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-record-notice.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: -2vh;
    right: 3vw;
}
.practice-record-block-time {
    color: white;
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 12px;
}
.starmark-box {
    width: 30px;
    height: 30px;
    /* background-image: url('/mamiyoga/star.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat; */
    position: absolute;
    bottom: 10px;
    right: 3vw;
    cursor: pointer;
}
.starmark-box img {
    width: 25px;
}
.practice-record-bak {
    width: 100%;
    height: 120px;
    /* margin: 3vh 5vw 0; */
}
/* .practice-record-video {
    display: none;
}
.practice-record-video.show {
    display: block;
    position: fixed;
    top: 0;
    width: 450px;
    z-index: 999;
} */
.practice-record-video {
    display: block;
    position: fixed;
    top: 0;
    width: 450px;
    z-index: 999;
}
@media (min-width: 769px) {
    .practice-record-block {
        width: 390px;
        margin: 30px auto 0;
    }
    .notice-box {
        bottom: -15px;
        right: 29px;
    }
    .starmark-box {
        bottom: 15px;
        right: 25px;
    }
}
@media (max-width: 769px) and  (orientation:landscape) {
    .practice-record-block {
        margin-top: 7vh; 
    }
}
</style>
