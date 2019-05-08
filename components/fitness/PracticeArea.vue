<template>
    <div class="practice-area-bg-container">
        <div class="practice-area-container">
            <h1 class="title green-color">やってみよう！</h1>
            <p class="practice-area-content">正しい姿勢は、
半分の努力で2倍結果を叶えます。<br>優秀なAIコーチと一緒にあなたの姿勢を改善しよう！<br><br>今すぐあなたのスクワットビデオをアップロード</p>
            <!-- <flat-button size="medium" bgColor="#76FF00" color="black" hover="hover-fill-yellow" borderColor="#76FF00" text="上傳影片" type="file" change="handleVideoUpload"/> -->
            <button
                :class="'flat-button btn-medium'"
                :style="{background: '#76FF00', borderColor: '#76FF00', color:'black'}"
            >
                <label ><input type="file" style="display:none;" @change="handleVideoUpload">アップロード</label>
            </button>
        </div>
        <div class="result-container">
            <h1 class="title green-color">分析結果</h1>
            <video v-if="video_url" class="result-video" controls>
                <source :src="video_url" type="video/mp4">
                <!-- <source src="movie.ogg" type="video/ogg"> -->
            Your browser does not support the video tag.
            </video> 
            <loading 
                :active="!video_url" 
                v-else ></loading>
        </div>  
    </div>
</template>

<script>
import FlatButton from "~/components/FlatButton.vue";
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';

export default {
    components: {
        FlatButton,
        Loading,
    },
    methods: {
        async handleVideoUpload(e) {
            let form = new FormData();
            form.append('file',e.target.files[0])
            form.append('pose_type','squat')
            this.video_url = ""
            let res = await axios.post('/apis/video-upload',form)
            this.video_url = res.data.output_video_url;
            console.log(res)
            window.alert('Done');
        },
    },
    data:() => ({
        video_url:'test',
    }),
}
</script>

<style>
.practice-area-bg-container {
    /* width:100vw; */
    /* height: 100vh; */
    background:black;
}
.practice-area-container {
    width:100vw;
    height: 100vh;
    background: url('/bg-practice.png');
    display: flex;
    flex-direction: column;
    align-items: center;
}
.green-color {
  color: #76FF00 !important;
}
.green-bg-color {
  background: #76FF00 !important;
}
h1.title {
  /* display: block; */
  width: 100%;
  margin-top: 15vh;
  /* font-weight: 200; */
  font-size: 25px;
  text-align: center;
}
.practice-area-content {
    font-size: 18px;
    color: white;
    text-align: center;
    width:80vw;
    margin-top: 20vh;
    margin-bottom: 15vh;
}
.result-container {
    height: 100vh;
    width: 100vw;
}
.result-video {
    width: 80vw;
    margin-left:10vw; 
    margin-top: 5vh;
    /* height: 10vh; */
}
.btn-medium {
  width: 180px;
  height: 37px;
  border: 2px solid white;
  text-decoration: none;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
}
.flat-button {
  min-width: 81px;
  height: 40px;
  border-radius: 30px;
  display: inline-block;
  background-color: transparent;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  cursor: pointer;
}
.flat-button a {
  text-decoration: none;
  color: inherit;
}

.flat-button a:hover {
  text-decoration: none;
  /* color: initial; */
}
.flat-button a:active {
  text-decoration: none;
  color: initial;
}

.flat-button:focus {
  outline: 0;
  text-decoration: none;
  color: inherit;
}
</style>
