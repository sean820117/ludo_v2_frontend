<template>
    <div class="golf-demo-analyse-result-container">
        <p class="golf-demo-analyse-result-title main-color">分析結果</p>
        <div class="golf-demo-analyse-result-position-icon-container">
            <img v-for="(img,index) in icon_imgs" :key="index" :src="current_img_index != index ? img + '.png' : img + '-active.png'" alt="">
        </div>
        <carousel @pageChange="pageChange" :perPage="1" :centerMode="true"  :autoplay="false" :navigationEnabled="true"
            :spacePadding="45" :paginationEnabled="false" :scrollPerPage="false" class="golf-demo-analyse-result-carousel">
            <slide v-for="img in result_imgs" :key="img" class="golf-demo-analyse-result-slide">
                <img class="golf-demo-analyse-result-slide-img" :src="img" />    
            </slide>
        </carousel>
        <div v-if="result_imgs.length >= 0" class="golf-demo-analyse-result-button-container">
            <img class="golf-demo-analyse-result-button" src="/golf/restart.png" @click="goStage(2)"/>
            <img class="golf-demo-analyse-result-button" src="/golf/download.png" @click="downloadResult" />
            <!-- <img class="golf-demo-analyse-result-button" src="/golf/line.png" @click="shareResult"/> -->
            <!-- <img class="golf-demo-analyse-result-button" src="/golf/close.png" @click="nextStage"/> -->
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        result_imgs:[],
        current_img_index:0,
        icon_imgs:[
            "/golf/golf-demo-icon-position01",
            "/golf/golf-demo-icon-position02",
            "/golf/golf-demo-icon-position03",
            "/golf/golf-demo-icon-position04",
            "/golf/golf-demo-icon-position05",
            "/golf/golf-demo-icon-position06",
            "/golf/golf-demo-icon-position07",
            "/golf/golf-demo-icon-position08",
        ],
    }),
    mounted() {
        if (process.client) {
            let video_url = 'http://localhost:5000/output/' + this.$route.query.filename;
            if (video_url) {
                let result_imgs = [];
                result_imgs[0] = video_url + "/01Address.png"
                result_imgs[1] = video_url + "/02MBS.png"
                result_imgs[2] = video_url + "/03TS.png"
                result_imgs[3] = video_url + "/04BDS.png"
                result_imgs[4] = video_url + "/05MDS.png"
                result_imgs[5] = video_url + "/06Impact.png"
                result_imgs[6] = video_url + "/07MFT.png"
                result_imgs[7] = video_url + "/08CFT.png"
                this.result_imgs = result_imgs;
            } else {
                alert("未偵測到您的揮桿動作，請對準白框再嘗試");
            }
            history.pushState("1", "result", "");
        }
    },
    methods: {
        goStage(stage) {
            this.$router.push('/golf?stage=2')
        },
        nextStage() {
            this.$router.push('/golf?stage=1')
        },
        downloadResult() {
            // for(var i = 0;i<this.result_imgs.length;i++){
                var link = document.createElement('a');
                var str = this.result_imgs[this.current_img_index]
                // link.href = str.substring(0, str.length - 4);
                link.href = str
                // link.download = new Date().getTime().toString() + "-" + this.current_img_index + ".jpg";
                link.download = ""
                link.click();
            // }
        },
        shareResult() {
            let share_url = "https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(this.result_imgs[this.current_img_index]);
            window.location.href = share_url;
        },
        pageChange(i) {
            this.current_img_index = i;
        }
    },
    destroyed() {
    },
}
</script>

<style>
.golf-demo-analyse-result-container {
    width: 100vw;
     /* max-width: 60vh; */
    height: 100vh;
    margin: 0 auto;
    background:url("/golf/golf-demo-bg-white.jpg");
    background-position: center;
    background-color:white;
    background-size: 100% auto;
    display: flex;
    flex-direction: column;
    overflow:hidden;
}
.golf-demo-analyse-result-title {
    width:100%;
    text-align:center;
    margin-top:10px;
    font-weight:bold;
    font-size: 20px;
}
.golf-demo-analyse-result-slide-img {
    /* width: 270px;
    height: 480px; */
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
}
.golf-demo-analyse-result-carousel {
    width: 100%;
    margin-top:10px;
}
.golf-demo-analyse-result-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 70%; */
}
.VueCarousel-slide-active .golf-demo-analyse-result-slide-img {
    /* width: 300px !important;
    height: 532px !important; */
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
}
.golf-demo-analyse-result-position-icon-container {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content:center;
}
.golf-demo-analyse-result-position-icon-container img {
    height: 51px;
}
.golf-demo-analyse-result-button-container {
    display:flex;
    flex-direction: row;
    margin: 10px auto;
    width: 100%;
    max-width: 400px;
    justify-content: space-evenly;
}
</style>