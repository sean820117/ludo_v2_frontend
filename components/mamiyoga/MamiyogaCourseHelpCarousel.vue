<template>
    <div>
        <div v-if="$mq == 'iphone'">
            <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="35" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-third-comment-block">
                   <div class="intro-wrap-block-help">
                       <p>這堂課能幫助妳</p>
                       <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course-help-img-3.png" alt="">
                       <div class="intro-wrap-block-help-btn" @click="getFreeCourse">免費觀看</div>
                   </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-help">
                        <p>上課準備與提醒</p>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course-help-img-4.png" alt="">
                        <div class="intro-wrap-block-help-btn" @click="$router.push('/teach')">馬上體驗</div>
                   </div>
                </slide>
            </carousel>
        </div>
        <div v-if="$mq == 'mobile'">
            <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="45" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-third-comment-block">
                   <div class="intro-wrap-block-help">
                       <p>這堂課能幫助妳</p>
                       <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course-help-img-3.png" alt="">
                       <div class="intro-wrap-block-help-btn" @click="getFreeCourse">免費觀看</div>
                   </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-help">
                        <p>上課準備與提醒</p>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course-help-img-4.png" alt="">
                        <div class="intro-wrap-block-help-btn" @click="$router.push('/teach')">馬上體驗</div>
                   </div>
                </slide>
            </carousel>
        </div>
        <div v-if="$mq == 'desktop'">
            <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="50" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-third-comment-block">
                   <div class="intro-wrap-block-help">
                       <p>這堂課能幫助妳</p>
                       <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course-help-img-3.png" alt="">
                       <div class="intro-wrap-block-help-btn" @click="getFreeCourse">免費觀看</div>
                   </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-help">
                        <p>上課準備與提醒</p>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course-help-img-4.png" alt="">
                        <div class="intro-wrap-block-help-btn" @click="$router.push('/teach')">馬上體驗</div>
                   </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    mounted(){
        if (process.browser) {
            
        }
    },
    methods:{
        getFreeCourse(){
            this.$emit('getFreeCourse');
        }
    }
}
</script>

<style>
.intro-wrap-block-help {
    width: 95%;
    height: 300px;
    background: #F7F7F7;
    margin: 10px auto 20px;
    padding: 5px;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    border-radius: 10px;
}
.intro-wrap-block-help-btn {
    width: 160px;
    height: 42px;
    position: absolute;
    left: calc(50% - 80px);
    bottom: -20px;
    background: linear-gradient(180deg,#FF9A7B,#FF9898);
    color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: bold;
}
.intro-wrap-block-help img {
    width: 95%;
    display: block;
    margin: 0 auto;
}
.intro-wrap-block-help p {
    color:#24798F;
    font-size: 18px;
    font-weight: bold;
    margin: 25px 10px;
}




.intro-wrap-block-third-comment {
    width: 300px;
    height: 330px;
    background: #F7F7F7;
    border-radius: 10px;
    margin: 30px auto;
    padding: 20px;
    position: relative;
}
.intro-wrap-block-third-comment-title {
    color: #24798F;
    font-size: 13px;
    font-weight: bold;
}
.intro-wrap-block-third-comment img {
    height: 15px;
    margin: 10px 0;
}
.intro-wrap-block-third-comment-text {
    color: #24798F;
    font-size: 13px;
    font-weight: 400;
}
.intro-wrap-block-third-comment-from {
    font-size: 12px;
    color: #707070;
    font-weight: 300;
    position: absolute;
    bottom: 20px;
    right: 20px;
}
</style>