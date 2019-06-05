<template>
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
</template>

<script>
import FlatButton from "~/components/FlatButton.vue";
import axios from '~/config/axios-config';
export default {
    data:()=> ({
        video_url:'test',
        showFileInput: true,
    }),
    components: {
        FlatButton,
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
}
</style>
