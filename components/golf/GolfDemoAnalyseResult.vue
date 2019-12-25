<template>
    <div class="golf-demo-analyse-result-container">
        <p class="golf-demo-analyse-result-title main-color">分析結果</p>
        <div class="golf-demo-analyse-result-position-icon-container">
            <img v-for="img in icon_imgs" :key="img" :src="img" alt="">
        </div>
        <carousel perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="45" :paginationEnabled="false" :scrollPerPage="false" class="golf-demo-analyse-result-carousel">
            <slide v-for="img in result_imgs" :key="img" class="golf-demo-analyse-result-slide">
                <img class="golf-demo-analyse-result-slide-img" :src="img" />    
            </slide>
        </carousel>
        
    </div>
</template>

<script>
export default {
    data:()=>({
        result_imgs:[],
        icon_imgs:[
            "/golf/golf-demo-icon-position01.png",
            "/golf/golf-demo-icon-position02.png",
            "/golf/golf-demo-icon-position03.png",
            "/golf/golf-demo-icon-position04.png",
            "/golf/golf-demo-icon-position05.png",
            "/golf/golf-demo-icon-position06.png",
            "/golf/golf-demo-icon-position07.png",
            "/golf/golf-demo-icon-position08.png",
        ]
    }),
    props:{
        analyse_result:Object,
    },
    mounted() {
        if (process.client) {
            console.log(this.analyse_result);
            if (this.analyse_result.video_url) {
                let result_imgs = [];
                result_imgs[0] = this.analyse_result.video_url + "/01Address.png"
                result_imgs[1] = this.analyse_result.video_url + "/02MBS.png"
                result_imgs[2] = this.analyse_result.video_url + "/03TS.png"
                result_imgs[3] = this.analyse_result.video_url + "/04BDS.png"
                result_imgs[4] = this.analyse_result.video_url + "/05MDS.png"
                result_imgs[5] = this.analyse_result.video_url + "/06Impact.png"
                result_imgs[6] = this.analyse_result.video_url + "/07MFT.png"
                result_imgs[7] = this.analyse_result.video_url + "/08CFT.png"
                this.result_imgs = result_imgs;
            }
        }
    },
    destroyed() {
    },
}
</script>

<style>
.golf-demo-analyse-result-container {
    width: 100vw;
    max-width: 60vh;
    margin: 0 auto;
    background:url("/golf/golf-demo-bg-white.jpg");
    background-position: center;
    background-color:white;
    background-size: auto 100%;
    display: flex;
    flex-direction: column;
    overflow:hidden;
}
.golf-demo-analyse-result-title {
    width:100%;
    text-align:center;
    margin-top:20px;
    font-weight:bold;
}
.golf-demo-analyse-result-slide-img {
    width: 210px;
    height: 373px;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
}
.golf-demo-analyse-result-carousel {
    width: 100%;
    margin-top:30px;
}
.golf-demo-analyse-result-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 70%; */
}
.VueCarousel-slide-active .golf-demo-analyse-result-slide-img {
    width: 240px !important;
    height: 426px !important;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
}
.golf-demo-analyse-result-position-icon-container {
    margin-top: 18px;
    display: flex;
    flex-direction: row;
    justify-content:center;
}
.golf-demo-analyse-result-position-icon-container img {
    height: 51px;
}
</style>