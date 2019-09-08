<template>
    <div>
        <carousel :perPage="1" :centerMode="true"  :autoplay="false" :paginationPadding="5"
        :paginationSize="8" :paginationColor="'#D1D1D1'" :paginationActiveColor="'#707070'" 
        :loop="true"
        :spacePadding="10" :paginationEnabled="true" :scrollPerPage="false">
            <slide class="intro-wrap-block-second-slide-block">
                <div class="intro-wrap-block-second-slide">
                <div class="intro-wrap-block-second-content">
                    <p>課程皆有雙語發音，動作分段練習<br>&nbsp;</p>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-2.png" alt="">
                </div>
                </div>
            </slide>
            <slide class="intro-wrap-block-second-slide-block">
                <div class="intro-wrap-block-second-slide">
                <div class="intro-wrap-block-second-content">
                    <p>使用手機鏡頭拍攝練習動作<br>AI助教分析成果</p>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-3.png" alt="">
                </div>
                </div>
            </slide>
            <slide class="intro-wrap-block-second-slide-block">
                <div class="intro-wrap-block-second-slide">
                <div class="intro-wrap-block-second-content">
                    <p>依照媽媽的使用需求<br>規劃有系統的課程</p>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-4.png" alt="">
                </div>
                </div>
            </slide>
            <slide class="intro-wrap-block-second-slide-block">
                <div class="intro-wrap-block-second-slide">
                <div class="intro-wrap-block-second-content">
                    <p>來自日本橋本麻美老師親自傳授<br>產後修復完整課程</p>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-5.png" alt="">
                </div>
                </div>
            </slide>
            <slide class="intro-wrap-block-second-slide-block">
                <div class="intro-wrap-block-second-slide">
                <div class="intro-wrap-block-second-content">
                    <p>AI助教將分析成果及給予修正建議<br>&nbsp;</p>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-6.png" alt="">
                </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    mounted(){
        if (process.browser) {
            
        }
    }
}
</script>

<style>
.intro-wrap-block-second-slide-block {
    display: flex;
    align-items: center;
    justify-content: center;
}
.intro-wrap-block-second-content {
    width: 300px;
    height: 630px;
    margin: 20px 0 0;
    border-radius: 30px;
    background: linear-gradient(#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA,#E4E7E3,#E4E7E3,#DCD8CF);
}
.intro-wrap-block-second-content img {
    /* width: 90%; */
    height: 78%;
    display: block;
    margin: 0 auto;
}
.intro-wrap-block-second-content p {
    color:#707070;
    font-size: 14px;
    padding-top: 50px;
    margin-bottom: 20px;
    /* margin: 0 0 20px 15%; */
    text-align: center;
}

</style>