<template>
    <div class="video-tips" v-if="first_show">
        <div class="video-tips-box">
            <video controls autoplay playsinline src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tip-video.mp4" id="tip-video"></video>
        </div>
        <div class="close-tips-box" @click="first_show = false">
            <p>Skip></p>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        first_show: true
    }),
    mounted(){
        let tip = document.getElementById('tip-video')
        tip.onended = function(){
            this.first_show = false
        }.bind(this);
    },
    methods: {
        closeTipVideo(){
            this.$emit('closeTipVideo');
        }
    }
}
</script>

<style>
.video-tips {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}
.video-tips-box {
    transform: rotate(90deg);
    position:fixed;
    top: 21vh;
}
#tip-video {
    width: 85vh;
}
.close-tips-box {
    width: 45px;
    height: 30px;
    position: fixed;
    color: #fff;
    transform: rotate(90deg);
    bottom: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
