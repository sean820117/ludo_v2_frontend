<template>
    <div class="teach-page">
        <mamiyoga-teach-header btnText="登入" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-teach-header>
        <h4>體驗練習</h4>
        <mamiyoga-course-block style="margin-top:20px" bgImage="/mamiyoga/background-teach.png"
        blockColor="white" blockTitle="伸展兩側手臂"></mamiyoga-course-block>
        <p class="teach-content-text">正確的運動姿勢事半功倍，<br>優秀的AI教練幫助您改善姿勢！<br><br>立即上傳您的影片體驗！</p>
        <mamiyoga-btn btnText="講師介紹" bgColor="#DCD8CF" ftColor="#6E6E6E" style="margin-top:15vh;margin-bottom:15px" class="teach-upload"></mamiyoga-btn>
        <!-- <mamiyoga-btn btnText="上傳影片" bgColor="#9BAEB2" ftColor="#FFF" class="teach-upload" @click="goToAssay()"></mamiyoga-btn> -->
        <button class="teach-assay-btn" @click="goToAssay()">上傳影片</button>
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue';
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
export default {
    components: {
        MamiyogaTeachHeader,
        MamiyogaCourseBlock,
        MamiyogaBtn,
    },
    methods: {
        goToAssay(){
            document.location.href='/mamiyoga/assay';
            // return console.log('YA');
        },
    }
}
</script>

<style>
@media (max-width:899px) {
    .teach-page {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    }
    .teach-upload button {
        box-shadow:5px 5px 10px rgba(0,0,0,.2);
    }
    .teach-page h4 {
        font-size: 30px;
        color: #51636F;
        text-align: center;
        font-weight: 400;
    }
    .teach-content-text {
        text-align: center;
        font-weight: 400;
        font-size: 13px;
        margin-top: 5vh;
        color: #272727;
    }
    .teach-assay-btn {
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
        box-shadow:5px 5px 10px rgba(0,0,0,.2);
        background: #9BAEB2;
        color: #fff;
    }
}
</style>
