<template>
    <div class="mamiyoga-divide-every">
        <h4>骨盆矯正的姿勢</h4>
        <video class="mamiyoga-divide-every-video" controls>
                <source :src="video_url" type="video/mp4">
                Your browser does not support the video tag.
        </video>
        <div class="mamiyoga-divide-every-middle">
            <img src="/mamiyoga/eye.svg" alt=""><p>110</p>
        </div>
        <div class="mamiyoga-divide-every-bottom-content">
            <h5>姿勢步驟</h5>
            <p>{{courseTime}}分鐘</p>
            <div class="mamiyoga-divide-every-bottom">
                <p>站在墊子上面，把雙腳張開，腳掌距離稍微比腰還要寬一點，並用兩手壓住前後的骨盆。<br><br>接著，將骨盆往前後移動，切記，練習的時候，不要駝背。<br><br>然後，我們要重複這個動作各10次。</p>
                
            </div>
            <button class="teach-assay-btn" v-if="ai_teacher">
                <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="handleVideoUpload">上傳影片</label>  
            </button>
        </div>
        <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent"  @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video>
        <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div>
    </div>
</template>

<script>
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data:()=>({
        is_loaded: false,
        video_result: {},
        isLoading: false,
        fullPage: true,
    }),
    props:{
        courseTime:Number,
        ai_teacher: false,
    },
    components: {
        Loading,
        MamiyogaAssayVideo,
    },
    methods: {
        async handleVideoUpload(e) {
            this.isLoading = true;
            let form = new FormData();
            form.append('file',e.target.files[0])
            form.append('pose_id','yoga_6')
            form.append('language','zh-tw')
            const res = await axios.post('/apis/video-upload',form)
            console.log(res.data)
            for(var i =0; i< res.data.reps_wrong_tags.length; i++){
              for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
                  if(res.data.reps_wrong_tags[i][j] == "y_6_1") res.data.reps_wrong_tags[i][j] = "膝蓋彎曲";
                  else if (res.data.reps_wrong_tags[i][j] == "y_6_2") res.data.reps_wrong_tags[i][j] = "膝蓋彎曲";
                  else if (res.data.reps_wrong_tags[i][j] == "y_6_3") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
                  else if (res.data.reps_wrong_tags[i][j] == "y_6_4") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
                  else if (res.data.reps_wrong_tags[i][j] == "y_6_5") res.data.reps_wrong_tags[i][j] = "軸心不穩";
                  else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿勢正確";
              }
            }
            this.$emit('openVideoAssisant');
            this.isLoading = false;
            console.log(res.data)
            this.reps_wrong_tags = res.data.reps_wrong_tags;
            this.video_result = res.data;
            this.is_loaded = true;
        },
        handleRetryEvent(e){
            console.log("ok");
            this.is_loaded = false;
            this.handleVideoUpload(e);
        },
        closeAssayWindow(){
            this.is_loaded = false;
        },
    }

}
</script>

<style>
@media (max-width: 899px) {
    .mamiyoga-divide-every h4 {
        font-size: 12px;
        color: #707070;
        text-align: center;
        margin: 2vh 0 1.5vh;
    }
    .mamiyoga-divide-every-video {
        width: 100vw;
        height: 30vh;
    }
    .mamiyoga-divide-every-middle {
        width: 100vw;
        /* background: green; */
        padding: 1vh 5vw;
        text-align: right;
        border-bottom: solid thin rgba(112,112,112,.3); 
    }
    .mamiyoga-divide-every-middle p {
        font-size: 12px;
        color: #5C5C5C;
    }
    .mamiyoga-divide-every-middle img {
        width: 18px;
        float: left;
        margin-left: 77vw;
    }
    .mamiyoga-divide-every-bottom-content {
        /* background: gray; */
        width: 100vw;
        height: auto;
        padding: 2vh 5vw;
    }
    .mamiyoga-divide-every-bottom-content h5 {
        font-size: 14px;
        color: #272727;
        font-weight: 400;
    }
    .mamiyoga-divide-every-bottom-content p {
        font-size: 12px;
        color: #707070;
    }
    .mamiyoga-divide-every-bottom {
        padding: 2vh 5vw 0;
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
