<template>
    <div class="explain-video-box-contain">
        <h4 style="color:#F7F7F7;font-size:14px;text-align:center;margin-top:3vh;">{{$t('sample_video_title')}}</h4>
        <div class="explain-video-box">
            <video controls playsinline src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-video-1.mp4" id="sample-video">
            </video>
        </div>
        <div class="explain-video-box-content">
            <div class="teach-content-li" v-for="(line,i) in $t('sample_video_text')"
            :key="i" >
                <p class="teach-content-num">{{i+1}}</p>
                <p>{{line}}</p>
            </div>
            <!-- <div class="teach-content-li">
                <p class="teach-content-num">1</p>
                <p>{{$t('sample_video_text_1')}}</p>
            </div>
            <p>{{$t('sample_video_text_2')}}</p>
            <p>{{$t('sample_video_text_3')}}</p>
            <p>{{$t('sample_video_text_4')}}</p>
            <p>{{$t('sample_video_text_5')}}</p>
            <p>{{$t('sample_video_text_6')}}</p>
            <p>{{$t('sample_video_text_7')}}</p>
            <p>{{$t('sample_video_text_8')}}</p>
            <p>{{$t('sample_video_text_9')}}</p> -->
        </div>
        <div class="explain-video-box-remind">
            <p v-html="$t('sample_video_remind_1')"></p>
            <img style="width:25px;height:25px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-question-btn.png" alt="">
            <p v-html="$t('sample_video_remind_2')"></p>
        </div>
        <button class="mamiyoga-btn" style="margin-bottom:5vh;background-color:#24798F;color:#E8EAE6;" @click="closeVideo">{{$t('sample_video_btn')}}</button>
    </div>
</template>

<script>
export default {
    methods:{
        closeVideo(){
            this.$emit('closeVideo');
        }
    }
}
</script>

<style>
.explain-video-box-contain {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    /* left: 0; */
    background: #000;
}
.explain-video-box video {
    width: 100%;
    margin: 0;
}
.explain-video-box-content {
    color:#fff;
    font-size: 12px;
    margin: 0 auto;
    width: 80%;
}
.explain-video-box-content p {
    margin-bottom: 1vh;
}
.explain-video-box-remind {
    color:#FF9898;
    font-size: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5vh 0 3vh;
}

.mamiyoga-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    cursor: pointer;
}
.teach-content-li {
    width: 85vw;
    min-height: 25px;
    /* background: red; */
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
}
.teach-content-num {
    border-radius: 30px;
    background-color: #97a9af;
    text-align: center;
    color: white;
    padding: 1px 5px;
    font-size: 12px;
}
@media (min-width: 769px) {
    .explain-video-box-contain {
        width: 450px;
    }
}
</style>
