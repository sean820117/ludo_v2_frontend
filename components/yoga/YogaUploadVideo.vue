<template>
    <div class="yoga-upload" :style="{backgroundImage:'url('+bgImage+')',backgroundRepeat:'no-repeat',backgroundPosition:'47%',backgroundSize:'cover'}">
        <div class="yoga-upload-title">
            <h2>やってみよう！</h2>
        </div>
        <div class="yoga-upload-contact">
            <p>先生の動きをまねて<br>撮ったビデオをアップロード。<br><br><br>優秀なAIコーチと<br>一緒にあなたの姿勢を改善しよう！</p>
        </div>
        <div class="yoga-upload-goto-start">
            <flat-button size="big" bgColor="transparent" color="white" hover="" borderColor="white" text="コースをみる" link=""/>
        </div>
        <div class="yoga-upload-video-btn">
            <flat-button size="big" bgColor="#99cba5" color="white" hover="" borderColor="#99cba5" text="アップロード" link=""/>
        </div>
    </div>
</template>

<script>
import FlatButton from "~/components/FlatButton.vue";
import axios from '~/config/axios-config';
export default {
    components: {
        FlatButton,
    },
    props: {
        bgImage: String,
    }
}
</script>

<style>
@media (max-width: 899px) {
    .yoga-upload {
        width: 100vw;
        height: 100vh;
        /* background-image: url("/yoga/Yoga-upload-video-pic.png");
        background-size: cover;
        background-position: 47%; */
    }
    .yoga-upload-title {
        padding-top:80px;
    }
    .yoga-upload-title h2 {
        color: #99cba5;
        font-size: 10vw;
        text-align: center;
    }
    .yoga-upload-contact {
        margin-top: 80px;
    }
    .yoga-upload-contact p {
        font-size: 17px;
        text-align: center;
        color: white;
    }
    .yoga-upload-goto-start {
        width: 200px;
        height: 55px;
        margin: 25vh auto 10px auto;
    }
    .yoga-upload-video-btn {
        width: 200px;
        height: 55px;
        margin: 0 auto;
    }
}
</style>
