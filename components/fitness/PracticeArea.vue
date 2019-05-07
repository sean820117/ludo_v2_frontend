<template>
    <div class="practice-area-bg-container">
        <div class="practice-area-container">
            <h1 class="title green-color">馬上練習</h1>
            <p class="practice-area-content">正確的運動姿勢事半功倍，<br>優秀的AI教練幫助您改善姿勢！<br><br>立即上傳您的深蹲影片體驗。</p>
            <flat-button size="medium" bgColor="#76FF00" color="black" hover="hover-fill-yellow" borderColor="#76FF00" text="上傳影片" type="file" @change.native="handleVideoUpload()"/>
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
    methods: {
        async handleVideoUpload(e) {
            let form = new FormData();
            form.append('file',e.target.files[0])
            let res = await axios.post('/apis/video-upload',form)
            console.log(res)
            window.alert('done');
        },
    },
}
</script>

<style>
.practice-area-bg-container {
    width:100vw;
    height: 100vh;
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
  margin-top: 30px;
  /* font-weight: 200; */
  font-size: 25px;
  text-align: center;
}
.practice-area-content {
    font-size: 18px;
    color: white;
    text-align: center;
    width:80vw;
    margin-top: 30vh;
}
</style>
