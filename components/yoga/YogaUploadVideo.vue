<template>
    <div>
    <div class="yoga-upload" :style="{backgroundImage:'url('+bgImage+')',backgroundRepeat:'no-repeat',backgroundPosition:'47%',backgroundSize:'cover'}">
        <div class="yoga-upload-title" >
            <h2>やってみよう！</h2>
        </div>
        <div class="yoga-upload-contact">
            <p>先生の動きをまねて<br>撮ったビデオをアップロード。<br><br><br>優秀なAIコーチと<br>一緒にあなたの姿勢を改善しよう！</p>
        </div>
        <div class="yoga-upload-goto-start">
            <button class="yoga-upload-goto-start-btn" @click="goToCourse">コースをみる</button>
        </div>
        <div class="yoga-upload-video-box">
            <button class="yoga-upload-video-btn">
            <label><input v-if="showFileInput" type="file" style="display:none;" @change="yogaVideoUpload">アップロード</label>
            </button>
        </div>
    </div>
    <div class="yoga-assay" id="course-assay">
        <!-- <video class="yoga-assay-video" controls><source src="/yoga/Yoga-video-assay-text.MOV">您的瀏覽器不支援此 HTML5 影片標籤</video> -->
        <video v-if="video_url" class="yoga-assay-video" controls>
                <source :src="video_url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <loading active="!video_url" v-else></loading>
        <div class="yoga-assay-box">
            <div class="yoga-assay-content">
                <h3>分析結果</h3>
                <div class="yoga-assay-content-li">
                    <h4 class="yoga-assay-content-time">一回目</h4>
                    <p class="yoga-assay-content-detailed">もうちょっと頭をあげてね</p>
                </div>
                <div class="yoga-assay-content-li">
                    <h4 class="yoga-assay-content-time">二回目</h4>
                    <p class="yoga-assay-content-detailed">パーフェクト</p>
                </div>
                <div class="yoga-assay-content-li">
                    <h4 class="yoga-assay-content-time">三十回目</h4>
                    <p class="yoga-assay-content-detailed">もうちょっと頭をあげてねもうちょっと頭をあげてねもうちょっと頭をあげてねもうちょっと頭をあげてね</p>
                </div>
                <div class="yoga-assay-content-li">
                    <h4 class="yoga-assay-content-time">三十一回目</h4>
                    <p class="yoga-assay-content-detailed">もうちょっと頭をあげてねもうちょっと頭をあげてねもうちょっと頭をあげてねもうちょっと頭をあげてね</p>
                </div>
                <div class="yoga-assay-contact">
                    <p class="yoga-assay-contact-explain">分析結果がズレてる場合</p>
                    <button class="yoga-assay-contact-btn">お問い合わせ</button>
                </div>
            </div>
        </div>
        
    </div>
    </div>
</template>

<script>
import FlatButton from "~/components/FlatButton.vue";
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
export default {
    data:()=> ({
        video_url:'test',
        showFileInput: true,
    }),
    components: {
        FlatButton,
        Loading,
    },
    props: {
        bgImage: String,
    },
    methods: {
        goToCourse(){
            this.$scrollTo('#course-info',"start");
        },
        async yogaVideoUpload(e) {
            let form = new FormData();
            form.append('file',e.target.files[0])
            form.append('pose_type','squat')
            this.video_url = ""
            this.showFileInput = false;
            let res = await axios.post('/apis/video-upload',form)
            this.showFileInput = true;
            this.video_url = res.data.output_video_url;
            console.log(res)
            window.alert('Done');
            this.$scrollTo('#course-assay',"center");
        },
    },
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
        padding-top:10vh;
    }
    .yoga-upload-title h2 {
        color: #99cba5;
        font-size: 10vw;
        text-align: center;
    }
    .yoga-upload-contact {
        margin-top: 10vh;
    }
    .yoga-upload-contact p {
        font-size: 17px;
        text-align: center;
        color: white;
    }
    .yoga-upload-goto-start {
        width: 200px;
        height: 55px;
        margin: 16vh auto 2vh auto;
    }
    .yoga-upload-goto-start-btn {
        width: 200px;
        height: 50px;
        border-style:none; 
        border-radius: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        line-height: 36px;
        cursor: pointer;
        background: transparent;
        color: white;
        border: 3px solid white;
    }
    .yoga-upload-video-box {
        width: 200px;
        height: 55px;
        margin: 0 auto;
    }
    .yoga-upload-video-btn {
        width: 200px;
        height: 50px;
        border-style:none; 
        border-radius: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        line-height: 36px;
        cursor: pointer;
        background: #99cba5;
        color: white;
    }
    .yoga-assay {
        width: 100vw;
        min-height: 100vh;
        background-color: #99CBA5;
    }
    .yoga-assay-video {
        width: 100vw;
        height: 50vh;
        background-color: #000;
    }
    .yoga-assay-box {
        width: 100vw;
        padding: 15px;
    }
    .yoga-assay-content {
        background: white;
        width: 90vw;
        min-height: 40vh;
        margin: 0 auto;
        border-radius:20px; 
        padding: 15px 15px 5px 15px;
    }
    .yoga-assay-content h3 {
        color: #99CBA5;
        text-align: center;
        margin-bottom:15px; 
        font-size:20px; 
    }
    .yoga-assay-content-li {
        width: 100%;
        min-height: 30px;
        margin-bottom:10px; 
        display: inline-flex;
        align-items: center;
    }
    .yoga-assay-content-time {
        font-weight: 500;
        padding: 0 5px;
        color: #99CBA5;
        min-width: 90px;
        border-right: 2px #DEDEDE solid;
        font-size: 14px;
    }
    .yoga-assay-content-detailed {
        padding: 10px 0 10px 15px;
        font-size: 12px;
        align-self: auto;
        color: #99CBA5;
    }
    .yoga-assay-contact {
        width: 150px;
        height: 80px;
        margin: 10px auto 0 auto;
    }
    .yoga-assay-contact-explain {
        text-align: center;
        font-size: 12px;
        color: #BFBFBF; 
    }
    .yoga-assay-contact-btn {
        width: 130px;
        height: 50px;
        background: #99CBA5;
        border-style:none;
        color: white; 
        border-radius: 25px;
        margin: 5px 10px; 
        box-shadow: 0 2px 10px rgba(0, 0, 0, .16)
    }
}
</style>
