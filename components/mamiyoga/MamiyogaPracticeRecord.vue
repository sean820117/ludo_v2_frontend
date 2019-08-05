<template>
    <div class="practice-record">
        <div class="practice-record-intro" :style="{backgroundImage:'url('+bgImg+')',}">
            <div class="practice-record-intro-close-box"></div>
            <div class="practice-record-intro-title">
                <div :style="{backgroundImage:'url('+photoBy+')'}"></div>
                <div class="practice-record-intro-title-font">
                    <h3 v-text="recordTitle">{{recordTitle}}</h3>
                    <p>拍攝時間建議：</p><p v-html="recordTime">{{recordTime}}</p><p>&nbsp;秒</p>
                </div>
            </div>
            <div class="practice-record-intro-btn-container">
                <mamiyoga-square-btn class="practice-record-intro-btn" 
                bgColor="#D1D1D1" ftColor="#707070" btnText="回到課程"></mamiyoga-square-btn>
                <mamiyoga-square-btn class="practice-record-intro-btn"
                bgColor="#97A8AF" ftColor="#ECEDE8" btnText="上傳影片"></mamiyoga-square-btn>
            </div>
        </div>
        
    </div>
</template>

<script>
import MamiyogaSquareBtn from '~/components/mamiyoga/MamiyogaSquareBtn.vue'
export default {
    props: {
        bgImg: String,
        photoBy: String,
        recordTitle: String,
        recordTime: String,
    },
    components: {
        MamiyogaSquareBtn,
    }
}
</script>

<style>
@media (max-width: 899px) {
    .practice-record-intro {
        width: 100vw;
        height: 40vh;
        padding:15px;
        position: relative;
    }
    .practice-record-intro-close-box {
        width: 30px;
        height: 30px;
        background-image: url('/mamiyoga/practice-record-close.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        float: right;
    }
    .practice-record-intro-title {
        width: 75vw;
        height: 65px;
        position: absolute;
        bottom: 15vh;
    }
    .practice-record-intro-title div:first-child {
        width: 50px;
        height: 65px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; 
        margin-right: 10px; 
        float: left;
    }
    .practice-record-intro-title-font {
        height: 65px;
        float: left;
        color: white;
        margin-top: 15px; 
    }
    .practice-record-intro-title-font h3 {
        font-size: 22px;
        font-weight: bold;
    }
    .practice-record-intro-title-font p {
        float: left;
        font-size: 14px;
    }
    .practice-record-intro-title-font p:nth-child(3) {
        font-style: italic;
        margin-top: 2px;
    }
    .practice-record-intro-btn-container {
        width: 90vw;
        float: left;
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: space-around;
    }
    .practice-record-intro-btn {
        float: left;
    }
}

</style>
