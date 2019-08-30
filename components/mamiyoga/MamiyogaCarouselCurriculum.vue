<template>
    <div>
        <flicking :options="{gap: 20}" :tag="'div'">
            <div class="intro-wrap-block-new-five-curriculum-block ">
                <p>產後1-2個月</p>
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-curriculum-1.png" alt="">
            </div>
            <div class="intro-wrap-block-new-five-curriculum-block">
                <p>廣大女性</p>
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-curriculum-2.png" alt="">
            </div>
            <div class="intro-wrap-block-new-five-curriculum-block">
                <p>產後3-6個月</p>
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-curriculum-3.png" alt="">
            </div>
            <div class="intro-wrap-block-new-five-curriculum-block">
                <p>產後6-18個月</p>
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-curriculum-4.png" alt="">   
            </div>
        </flicking>
    </div>
</template>

<script>
import Vue from "vue";
import VueFlicking from "@egjs/vue-flicking";
Vue.use(VueFlicking);
export default {
    mounted(){
        if (process.browser) {
            const VueFlicking = require("@egjs/vue-flicking");
            Vue.use(VueFlicking);
        }
    }
}
</script>

<style>
.intro-wrap-block-new-five-curriculum-block {
    width: 300px;
}
.intro-wrap-block-new-five-curriculum-block p {
    color: #24798F;
    font-size: 14px;
    font-weight: 500;
    margin: 15px 0;
    text-align: center;
}
.intro-wrap-block-new-five-curriculum-block img {
    width: 100%;
}
</style>