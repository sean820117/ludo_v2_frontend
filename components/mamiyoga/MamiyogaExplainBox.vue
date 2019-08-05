<template>
    <div class="mamiyoga-explain">
        <div class="mamiyoga-explain-close" @click="closeBox">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/close-box.png" alt="">
        </div>
        <div class="mamiyoga-explain-content">
            <hooper :autoPlay="true">
                <slide>
                   <h5>{{$t('explain_title_first')}}</h5>
                   <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-1.png" alt="">
                   <p>{{$t('explain_text_first')}}</p>
                </slide>
                <slide>
                    <h5>{{$t('explain_title_secord')}}</h5>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-2.png" alt="">
                    <p>{{$t('explain_text_secord')}}</p>
                </slide>
                <slide>
                    <h5 style="margin-bottom:4vh">{{$t('sample_video_title')}}</h5>
                    <div >
                        <img style="height:55vh;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tips-pic.png" alt="">
                        <!-- <div v-for="(line,i) in $t('sample_video_text')"
                        :key="i" class="tips-text">
                            <p>{{line}}</p>
                            <img style="width:10px;height:8px;margin:5px auto" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/down-arrow.png" alt="">
                        </div> -->
                    </div>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
            <!-- <carousel :perPageCustom="[[300,1]]">
                <slide>
                   <h5>{{$t('explain_title_first')}}</h5>
                   <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-1.png" alt="">
                   <p>{{$t('explain_text_first')}}</p>
                </slide>
                <slide>
                    <h5>{{$t('explain_title_secord')}}</h5>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-2.png" alt="">
                    <p>{{$t('explain_text_secord')}}</p>
                </slide>
            </carousel> -->
        </div>
        <div style="margin-top:8vh;">
            <!-- <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" :btnText="$t('explain_btn_video')" style="margin-bottom:5vh;"></mamiyoga-btn> -->
            <button class="mamiyoga-btn" style="letter-spacing:0;margin-bottom:5vh;background-color:#FF9898;color:#f7f7f7;" @click="show_video = true">{{$t('explain_btn_video')}}</button>    
        </div>
        <div class="video-tips" v-if="show_video">
            <div class="video-tips-box">
                <video controls autoplay playsinline src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tip-video.mp4" id="tip-video"></video>
            </div>
            <div class="close-tips-box" @click="show_video = false">
                <p>Skip></p>
            </div>
        </div>
        <!-- <mamiyoga-video-sample v-if="show_video" @closeVideo="closeVideo"></mamiyoga-video-sample> -->
        <!-- <div class="explain-video-box-contain" v-if="show_video">
            <div class="explain-video-box">
                <video controls autoplay playsinline src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-video-1.mp4" id="sample-video">
                </video>
            </div>
        </div> -->
    </div>
</template>

<script>
import Vue from 'vue';

import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import MamiyogaVideoSample from '~/components/mamiyoga/MamiyogaVideoSample.vue'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

// import VueCarousel from 'vue-carousel';
// import { Carousel, Slide } from 'vue-carousel';

// Vue.use(VueCarousel);
export default {
    data:()=>({
        show_video: false,
    }),
    components: {
        MamiyogaBtn,
        MamiyogaVideoSample,
        Hooper,
        Slide,
        HooperPagination,
        // Carousel,
        // Slide,
    },
    async mounted(){
        if(process.client){
            // let video = document.getElementById('sample-video')
            // if(video) {
            //     video.onended = ()=> {
            //         this.show_video = false;
            //     }
            // } else false
        }
    },
    methods: {
        closeBox(){
            this.$emit('closeExplain')
        },
        closeVideo(){
            this.show_video = false
        }
    }
}
</script>

<style>
.mamiyoga-explain {
    width: 100vw;
    height: 100vh;
    background: #24798F;
    position: fixed;
    top: 0;
    z-index: 999;
}
.mamiyoga-explain-close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
.mamiyoga-explain-content {
    width: 90vw;
    height: 70vh;
    margin: 0 auto;
    padding-top: 45px;
}
.mamiyoga-explain-content h5 {
    text-align: center;
    color: #F7F7F7;
    font-size: 20px;
}
.mamiyoga-explain-content img {
    display: block;
    margin: 3vh auto;
    height: 35vh;
    width: auto;
}
.mamiyoga-explain-content p {
    color: white;
    font-size: 12px;
    font-weight: bold;
    width: 66vw;
    margin: 5vh auto 0;
}
.mamiyoga-explain .hooper {
    height: 65vh;
}
.mamiyoga-explain .hooper-indicator {
    width: 7px;
    height: 7px;
    background-color: rgba(255,255,255,.4); 
    margin: 0 4px; 
}
.mamiyoga-explain .hooper-indicator.is-active, 
.mamiyoga-explain .hooper-indicator:hover {
    background-color:#fff; 
}
.mamiyoga-explain .hooper-pagination {
    bottom: -5vh;
}
.mamiyoga-explain-close img {
    width: 30px;
    height: 30px;
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
.tips-text p {
    margin:5px auto 0;
    text-align:center;
}
.tips-text:last-child img{
    display: none;
}
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
@media (min-width: 769px) {
    .mamiyoga-explain {
        width: 450px;
        height: 100vh;
        background: #24798F;
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .mamiyoga-explain-close {
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .mamiyoga-explain-content {
        width: 100%;
        height: 80vh;
        margin: 0 auto;
        padding-top: 10vh;
    }
    .mamiyoga-explain-content h5 {
        text-align: center;
        color: #F7F7F7;
        font-size: 20px;
    }
    .mamiyoga-explain-content img {
        display: block;
        margin: 3vh auto;
        height: 45vh;
        /* width: 85%; */
        width: auto;
    }
    .mamiyoga-explain-content p {
        color: white;
        font-size: 14px;
        font-weight: bold;
        width: 80%;
        margin: 5vh auto 0;
    }
    .mamiyoga-explain .hooper {
        width: 100%;
        height: 75vh;
    }
    
    .mamiyoga-explain .hooper-indicator {
        width: 7px;
        height: 7px;
        background-color: rgba(255,255,255,.4); 
        margin: 0 4px; 
    }
    .mamiyoga-explain .hooper-indicator.is-active, 
    .mamiyoga-explain .hooper-indicator:hover {
        background-color:#fff; 
    }
    .mamiyoga-explain .hooper-pagination {
        bottom: 5vh;
    }
}

    

</style>
