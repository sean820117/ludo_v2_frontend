<template>
    <div class="mamiyoga-explain">
        <div class="mamiyoga-explain-close" @click="closeBox">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/close-box.png" alt="">
        </div>
        <div class="mamiyoga-explain-content">
            <!-- <hooper :autoPlay="true"> -->
            <!-- <hooper>
                <slide>
                    <h5>AI助教使用服裝建議</h5>
                    <p class="explain-light-text" style="margin-top: 5vh;">請盡量別穿著<b>全身寬鬆黑色</b>的衣物，以免導致無法判斷</p>
                    <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-1.png" alt="">
                    <p class="explain-light-text">請勿穿著<b>長裙類服飾</b>，以免導致無法判斷</p>
                    <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-2.png" alt="">
                    <p class="explain-light-text">請盡量別穿著<b>過於寬鬆</b>的衣物，以免導致無法判斷</p>
                    <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-3.png" alt="">
                </slide>
                <slide>
                   <h5>{{$t('explain_title_first')}}</h5>
                   <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-1.png" alt="">
                   <p class="explain-bold-text">{{$t('explain_text_first')}}</p>
                </slide>
                <slide>
                    <h5>{{$t('explain_title_secord')}}</h5>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-2.png" alt="">
                    <p class="explain-bold-text">{{$t('explain_text_secord')}}</p>
                </slide>
                <slide>
                    <h5 style="margin-bottom:4vh">{{$t('sample_video_title')}}</h5>
                    <div >
                        <img class="show-tip-img" :src="$t('explain_tip_img')" alt="">
                    </div>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper> -->
            <!-- <div class="hooper">
                <div class="slides fade">
                    <h5>{{$t('explain_title_first')}}</h5>
                    <p class="explain-light-text first-explain" style="margin-top: 5vh;" v-html="$t('explain_text_first_1')"></p>
                    <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-1-1.png" alt="">
                    <p class="explain-light-text first-explain" v-html="$t('explain_text_first_2')"></p>
                    <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-2-1.png" alt="">
                    <p class="explain-light-text first-explain" v-html="$t('explain_text_first_3')"></p>
                    <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-3-1.png" alt="">
                </div>
                <div class="slides fade">
                    <h5>{{$t('explain_title_secord')}}</h5>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-1.png" alt="">
                    <p class="explain-bold-text">{{$t('explain_text_secord')}}</p>
                </div>
                <div class="slides fade">
                    <h5>{{$t('explain_title_third')}}</h5>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-2.png" alt="">
                    <p class="explain-bold-text">{{$t('explain_text_third')}}</p>
                </div>
                <div class="slides fade">
                    <h5 style="margin-bottom:4vh">{{$t('sample_video_title')}}</h5>
                    <div >
                        <img class="show-tip-img" :src="$t('explain_tip_img')" alt="">
                    </div>
                </div>
                <div class="hooper-dot">
                    <span class="dot" @click="currentSlide(1)"></span> 
                    <span class="dot" @click="currentSlide(2)"></span> 
                    <span class="dot" @click="currentSlide(3)"></span> 
                    <span class="dot" @click="currentSlide(4)"></span> 
                </div>
            </div> -->
            <div class="hooper">
                <no-ssr>
                    <carousel :perPage="1" :centerMode="true"  :autoplay="false" :paginationPadding="3"
                    :paginationSize="8" :paginationColor="'#8DB9C5'" :paginationActiveColor="'#FFFFFF'" 
                    :loop="true"
                    :spacePadding="10" :paginationEnabled="true" :scrollPerPage="false">
                        <slide class="slides ">
                            <h5>{{$t('explain_title_first')}}</h5>
                            <div >
                                <img class="show-tip-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-explain-remind-1.png" alt="">
                            </div>
                            <!-- <p class="explain-light-text first-explain" style="margin-top:10px;" v-html="$t('explain_text_first_1')"></p>
                            <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-1-1.png" alt="">
                            <p class="explain-light-text first-explain" v-html="$t('explain_text_first_2')"></p>
                            <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-2-1.png" alt="">
                            <p class="explain-light-text first-explain" v-html="$t('explain_text_first_3')"></p>
                            <img class="explain-suggest-wear-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-suggest-3-1.png" alt=""> -->
                        </slide>
                        <slide class="slides ">
                            <h5>{{$t('explain_title_secord')}}</h5>
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-1.png" alt="">
                            <p class="explain-bold-text">{{$t('explain_text_secord')}}</p>
                        </slide>
                        <slide class="slides ">
                            <h5>{{$t('explain_title_third')}}</h5>
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-2.png" alt="">
                            <p class="explain-bold-text">{{$t('explain_text_third')}}</p>
                        </slide>
                        <slide class="slides ">
                            <h5 style="margin-bottom:4vh">{{$t('sample_video_title')}}</h5>
                            <div >
                                <img class="show-tip-img" :src="$t('explain_tip_img')" alt="">
                            </div>
                        </slide>
                    </carousel>
                </no-ssr>
            </div>
        </div>
        <div class="open-teach-video-btn">
            <button class="mamiyoga-btn explain-bottom-btn" style="letter-spacing:0;background-color:#FF9898;color:#f7f7f7;" @click="show_video = true">{{$t('explain_btn_video')}}</button>    
        </div>
        <div class="video-tips" v-if="show_video">
            <div class="video-tips-box">
                <video controls autoplay playsinline src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tip-video.mp4" id="tip-video"></video>
            </div>
            <div class="close-tips-box" @click="show_video = false">
                <p>Skip></p>
            </div>
        </div> 
    </div>
</template>

<script>
import Vue from 'vue';

import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import MamiyogaVideoSample from '~/components/mamiyoga/MamiyogaVideoSample.vue'
// import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
// import 'hooper/dist/hooper.css';
// import Vue2TouchEvents from 'vue2-touch-events'

// import VueCarousel from 'vue-carousel';
// import { Carousel, Slide } from 'vue-carousel';

// Vue.use(VueCarousel);
// Vue.use(Vue2TouchEvents)
export default {
    data:()=>({
        show_video: false,
        slideIndex:0,
    }),
    components: {
        MamiyogaBtn,
        MamiyogaVideoSample,
        // Hooper,
        // Slide,
        // HooperPagination,
        // Carousel :()=> import('vue-carousel'),
        // Slide:()=> import('vue-carousel'),
    },
    async mounted(){
        if(process.client){
            // window.onload = this.showSlides()
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
        },
        // showSlides() {
        //     var slides = document.getElementsByClassName("slides");
        //     var dots = document.getElementsByClassName("dot");
        //     for (var i = 0; i < slides.length; i++) {
        //         slides[i].style.display = "none";  
        //     }
        //     // console.log(this.slideIndex)
        //     if (this.slideIndex > slides.length-1) {
        //         this.slideIndex = 0
        //     } else if( this.slideIndex < 0) {
        //         this.slideIndex = 3
        //     }
        //     for (i = 0; i < dots.length; i++) {
        //         dots[i].className = dots[i].className.replace(" dotactive", "");
        //     }
        //     slides[this.slideIndex].style.display = "block";  
        //     dots[this.slideIndex].className += " dotactive";
        //     // setTimeout(this.showSlides.bind(this), 2000); // Change image every 2 seconds
        // },
        // nextSlides() {
        //     this.showSlides(this.slideIndex += 1);
        // },
        // lastSlides() {
        //     this.showSlides(this.slideIndex -= 1);
        // },
        // currentSlide(n) {
        //     this.showSlides(this.slideIndex = n-1);
        // }
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
    width: 100vw;
    height: 70vh;
    /* margin: 0 auto; */
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
.explain-suggest-wear-img {
    display: block;
    margin: 1vh auto 2vh!important;
    height: 11vh !important;
    width: auto;
}
.explain-light-text {
    color: white;
    font-size: 14px;
    font-weight: lighter;
    width: 55vw;
    margin: 1vh auto 0;
}
.explain-bold-text {
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 66vw;
    margin: 5vh auto 0;
}
.mamiyoga-explain .hooper {
    height: 75vh;
}
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: .5s;
  animation-name: fade;
  animation-duration: .5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

.mamiyoga-explain .dot {
    width: 7px;
    height: 7px;
    background-color: rgba(255,255,255,.4); 
    margin: 0 4px; 
    display: inline-block;
    border-radius: 4px;
}
.dotactive, .mamiyoga-explain .dot:hover {
  background-color: #fff !important;
}
.mamiyoga-explain .hooper-dot {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 5vh;
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
    bottom: 0;
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
.show-tip-img{
    height: 55vh !important;
}
.open-teach-video-btn {
    margin-top: 13vh;
}
.explain-bottom-btn {
    margin-top:1vh;
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
        padding-top: 5vh;
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
        margin: 4vh auto 0;
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
    .video-tips {
        width: 450px;
    }
    .video-tips-box {
        transform: rotate(0deg);
    }
    #tip-video {
        width: 85vh;
    }
    .close-tips-box {
        transform: rotate(0deg); 
        bottom: 20vh;
    }
    .show-tip-img{
        height: 45vh !important;
        min-height: 420px;
    }
    .open-teach-video-btn {
        margin-top: 8vh;
    }
    .first-explain {
        width: 240px !important;
    }
    .video-tips {
        width: 450px;
    }
    .video-tips-box {
        transform: rotate(0deg);
    }
    .close-tips-box {
        transform: rotate(0deg);
    }
    .explain-bottom-btn {
        margin-top:0;
    }
}

    

</style>
