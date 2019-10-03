<template>
    <div class="mirror-id">
        <div id="show-mirror">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mirror-phone-1.png" alt="">
            <div id="show-mirror-img" :style="{backgroundImage: 'url(https://ludo-beta.s3-ap-southeast-1.amazonaws.com/training/sport/output/guest/'+receipt_img+'.jpg)'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return  {
            title: 'MAMI YOGA',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { hid: 'description', name: 'description', content: '以教學影片結合動作校正AI，開設的互動式線上課程。與日本人氣瑜珈老師橋本麻美合作，推出14堂課程包含33個動作，針對產後2~6個月黃金修復期的課程。使用者能夠觀看教學影片，並透過手機鏡頭拍攝自己的練習動作，取得分析與修正建議。' },
                { property : 'og:title' , content:"Mami Yoga 日本人氣瑜珈"},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://mamiyoga.ludonow.com"},
                { property : 'og:image' , content:`https://ludo-beta.s3-ap-southeast-1.amazonaws.com/training/sport/output/guest/${this.$route.params.id}.jpg`},
                { property : 'og:description' , content:"以教學影片結合動作校正AI，開設的互動式線上課程。與日本人氣瑜珈老師橋本麻美合作，推出14堂課程包含33個動作，針對產後2~6個月黃金修復期的課程。使用者能夠觀看教學影片，並透過手機鏡頭拍攝自己的練習動作，取得分析與修正建議。"},
                { property : 'og:site_name' , content:"https://mamiyoga.ludonow.com"},
            ],    
        }
    },
    data:()=>({
        receipt_img: '',
    }),
    mounted(){
        if(process.client) {
            this.receipt_img = this.$route.params.id;
            console.log(this.receipt_img)
        }
    },
}
</script>

<style>
.mirror-id {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
#show-mirror {
    position: relative;
    width: 80%;
    height: 70vh;
    margin: 10px auto 50px;
    padding: 10px;
}
#show-mirror-img {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
#show-mirror img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
}
</style>