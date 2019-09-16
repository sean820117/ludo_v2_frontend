<template>
    <div class="campaign-page">
        <div class="campaign-block">
            <div class="campaign-header">骨盆，是孕育生命能量起源的中心</div>
            <h3>骨盆歪斜</h3>
            <p>下身水腫、生理痛、肥胖等問題跟著來...</p>
            <div style="position:relative;margin-top:10px;">
                <img style="width:100%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/campaign-img-1.png" alt="">
                <div class="go-index-btn">前往搶救骨盆</div>
            </div>
            <h4>不需要去瑜珈教室，<br>每天只要十分鐘，<br>自己在家裡就可以練習！</h4>
            <div class="campaign-header campaign-middle">讓我們一起改善歪斜吧！</div>
        </div>
        <div class="campaign-block">
            <div class="campaign-header">骨盆，是孕育生命能量起源的中心</div>
            <h3>久坐是一種慢性自殺？</h3>
            <img style="width:100%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/campaign-img-2.jpg" alt="">
            <p style="font-size:17px;font-weight:400;">下半身水腫、生理痛，屁股變大<br>都和臀部的肌肉與骨盆的健康相關</p>
            <img style="height:12%;display:block;margin:15px auto;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/campaign-img-3.png" alt="">
            <p style="width:90%;margin: 15px auto;text-align:left;">臀部長時間受壓迫，下半身肌肉易僵硬，影響血液循環，也讓身體重心偏移，造成骨盆歪斜</p>
            <img style="height:12%;display:block;margin:15px auto;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/campaign-img-4.png" alt="">
            <p style="width:90%;margin: 15px auto;text-align:left;">代謝會變差，無法正常排除老廢物質造成肥胖，更會影響女生的子宮機能，導致生理痛以及虛寒變得更加嚴重。</p>
            <div class="campaign-header campaign-middle">讓我們一起改善姿勢吧！</div>
        </div>
        <div class="campaign-block">
            <div class="campaign-header" style="font-size:23px;">呼吸對了，身體就好了！</div>
            <div class="campaign-third">
                <h3 style="font-size:23px;margin-top:0;">生來就會呼吸，為什麼還要學？</h3>
            </div>
            <p style="font-size:17px;font-weight:400;">呼吸法為「擴張生命量能的技巧」<br>也被視為促進身體健康與活力的呼吸練習</p>
            <img style="height:12%;display:block;margin:15px auto;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/campaign-img-5.png" alt="">
            <p style="width:90%;margin: 0 auto;">呼吸調息法有助穩定情緒</p>
            <img style="height:12%;display:block;margin:15px auto;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/campaign-img-6.png" alt="">
            <p style="width:90%;margin: 0 auto;">平衡血壓及心跳率、放鬆身體和大腦、<br>紓解日常生活中的壓力與疲勞</p>
            <div class="campaign-header campaign-middle">讓我們一起練習呼吸法吧！</div>
        </div>
        <div>
            <img class="campaign-preview" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-2.png" alt="">
            <div class="campaign-bottom">
                <div>
                    <p>Mami yoga日本人氣瑜珈</p>
                    <p style="color:#707070;font-size:14px;font-weight:300;margin-top:1px;">使用期限：影片永久/AI助教一年</p>
                </div>
                <div style="display: flex;align-items: center;justify-content:space-between;margin-top:10px;">
                    <div class="campaign-cost">限時折</div>
                    <s style="color:#6F6F6F;font-size:20px;">$1590</s>
                    <p style="color:#C45050;font-size:30px;">$1290</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'mamiyoga',
    data:()=>({
        slideIndex: 0,
    }),
    mounted(){
        if(process.client){
            window.onload = this.carousel()
        }
    },
    methods: {
        carousel(){
            let block = document.getElementsByClassName('campaign-block')
            for(var i=0;i<block.length;i++){
                block[i].style.display = 'none';
            }
            this.slideIndex++
            if(this.slideIndex > block.length) {
                this.slideIndex = 1
            }
            block[this.slideIndex-1].style.display = 'block'
            setTimeout(() => {
                this.carousel()
            }, 10000);

            // setInterval(() => {
                
            // }, 5000);
        }
    }
}
</script>

<style>
.campaign-page {
    padding-bottom: 30px;
}
.campaign-header{
    width: 100%;
    height: 70px;
    background: #24798F;
    color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
}
.campaign-page h3,.campaign-page h4, .campaign-page p {
    color: #24798F;
    text-align: center;
    font-weight: bold;
}
.campaign-page h3{
    font-size: 28px;
    margin-top: 20px;
}
.campaign-page h4 {
    font-size: 22px;
    margin-top: 60px;
}
.campaign-page p {
    font-size: 16px;
}
.campaign-block {
    height: 950px; 
}
.go-index-btn {
    background: #C45050;
    color: #F7F7F7;
    width: 70%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    font-size: 30px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    position: absolute;
    bottom: -25px;
    left: calc(50vw - 35%);
}
.campaign-third {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/campaign-img-7.jpg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 340px;
    padding-top:10px;
}
.campaign-middle {
    font-size: 26px;
    margin-top: 40px;
}
.campaign-preview {
    width: 60%;
    margin: 30px auto;
    display: block;
}
.campaign-bottom {
    width: 75%;
    margin: 0 auto;
}
.campaign-bottom p {
    text-align: left;
}
.campaign-cost {
    background: #C45050;
    padding: 5px 15px;
    font-size: 24px;
    color: #F7F7F7;
    font-weight: 500;
}
</style>