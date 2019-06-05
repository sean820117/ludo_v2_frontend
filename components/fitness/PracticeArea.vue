<template>
    <div class="practice-area-bg-container">
        <div class="practice-area-container">
            <h1 class="title green-color">马上练习</h1>
            <p class="practice-area-content">正确的运动姿势事半功倍，<br>优秀的AI教练帮助您改善姿势！<br><br>立即上传您的深蹲影片体验</p>
            <!-- <flat-button size="medium" bgColor="#76FF00" color="black" hover="hover-fill-yellow" borderColor="#76FF00" text="上傳影片" type="file" change="handleVideoUpload"/> -->
            <button
                :class="'flat-button btn-medium'"
                :style="{background: '#76FF00', borderColor: '#76FF00', color:'black'}"
            >
              <label ><input v-if="showFileInput" type="file" style="display:none;" @change="handleVideoUpload">上传影片</label>
                <!-- <label ><input type="file" style="display:none;" @change="handleVideoUpload">上传影片</label> -->
            </button>
        </div>
        <div class="result-container" id="result-box">
            <h1 class="title green-color" style="padding-top:10vh">分析结果</h1>
            <video v-if="video_url" class="result-video" controls>
                <source :src="video_url" type="video/mp4">
                <!-- <source src="movie.ogg" type="video/ogg"> -->
            Your browser does not support the video tag.
            </video>
            <loading 
                :active="!video_url" 
                v-else ></loading>
            <div class="result-video-content-box">
                <div class="result-video-content">
                  <div class="result-video-content-li">
                    <h4 class="result-video-content-time">第一次</h4>
                    <p class="result-video-content-detailed">頭兒肩膀膝腳趾</p>
                  </div>
                  <div class="result-video-content-li">
                    <h4 class="result-video-content-time">第二次</h4>
                    <p class="result-video-content-detailed">頭兒肩膀膝腳趾頭兒肩膀膝腳趾</p>
                  </div>
                  <div class="result-video-content-li">
                    <h4 class="result-video-content-time">第二十五次</h4>
                    <p class="result-video-content-detailed">頭兒肩膀膝腳趾頭兒肩膀膝腳趾頭兒肩膀膝腳趾頭兒肩膀膝腳趾頭兒肩膀膝腳趾頭兒肩膀膝腳趾頭兒肩膀膝腳趾頭兒肩膀膝腳趾頭兒肩膀膝腳趾頭兒肩膀膝腳趾</p>
                  </div>
                  <div class="result-video-content-li">
                    <h4 class="result-video-content-time">第二次</h4>
                    <p class="result-video-content-detailed">頭兒肩膀膝腳趾頭兒肩膀膝腳趾</p>
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
            this.showFileInput = false;
            let res = await axios.post('/apis/video-upload',form)
            this.showFileInput = true;
            this.video_url = res.data.output_video_url;
            console.log(res)
            window.alert('Done');
            this.$scrollTo('#result-box',"center");
        },
    },
    computed: {

    },
    data:() => ({
        video_url:'test',
        showFileInput: true,
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
  padding-top: 15vh;
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
    min-height: 100vh;
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
.result-video-content-box {
  width: 100vw;
  padding: 15px;
}
.result-video-content {
  background: white;
  width: 90vw;
  min-height: 50vh;
  margin: 2vh auto 0 auto;
  border-radius:20px; 
  padding: 15px 15px;
}
.result-video-content-li {
  width: 100%;
  min-height: 30px;
  margin-bottom:10px; 
  /* background: red; */
  display: inline-flex;
  align-items: center;
}
.result-video-content-time {
  font-weight: 500;
  padding: 0 5px;
  color: #000;
  min-width: 100px;
  border-right: 2px #76FF00 solid;
}
.result-video-content-detailed {
  padding: 10px 5px 10px 15px;
  font-size: 14px;
  align-self: auto;
  
}
</style>
