<template>
    <div>
        <div class="teach-page" v-if="!is_loaded">
            <mamiyoga-teach-header btnText="登入" bgColor="#9BAEB2" ftColor="#FFF" nextTo="/mamiyoga"></mamiyoga-teach-header>
            <div class="teach-title-video-box">
                <div class="teach-title-box">
                <h6>體驗練習</h6>
                </div>
                <div class="teach-course-info">
                    <div></div>
                    <div>
                        <h3>伸展兩側手臂</h3>
                        <p>拍攝時間建議：30-45秒</p>
                    </div>
                </div>
                <div class="teach-question-box">
                    <img src="/mamiyoga/teach-question-btn.svg" alt="">
                </div>
            </div>
            <div class="teach-detail-box">
                <h6>姿勢步驟</h6>
                <div class="teach-content-text">
                    <p>站在墊子上面，把雙腳張開，腳掌距離稍微比腰還要寬一點，並用兩手壓住前後的骨盆。<br><br>接著，將骨盆往前後移動，切記，練習的時候，不要駝背。<br><br>然後，我們要重複這個動作各10次。</p>
                </div>
                <mamiyoga-btn btnText="講師介紹" bgColor="#EEEFEA" ftColor="#6E6E6E" style="margin-top:5vh;margin-bottom:15px" class="teach-upload"></mamiyoga-btn>
                <button class="teach-assay-btn" >
                    <label><input type="file" style="display:none;" @change="handleVideoUpload">上傳影片</label>  
                </button>
            </div>
        </div>
        
        <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent" @closeAssayWindow="closeAssayWindow" v-else :video_result="video_result"></mamiyoga-assay-video>
        <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div>
    </div>
</template>

<script>

import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue';
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    // layout: "mamiyoga",
    // data(){
    //     return {
            
    //     }
    // },
    data:()=> ({
        is_loaded: false,
        isLoading: false,
        fullPage: true,
        video_result: {},
    }),
    components: {
        MamiyogaTeachHeader,
        MamiyogaCourseBlock,
        MamiyogaBtn,
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
                  else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿势正确";
              }
            }
            this.isLoading = false;
            console.log(res.data)
            this.reps_wrong_tags = res.data.reps_wrong_tags;
            this.video_result = res.data;
            this.is_loaded = true;
            // setTimeout(()=> {
            //     clearInterval(this.interval);
            //     this.is_uploading = false;
            //     this.value = 0;
            //     this.is_showing = true;
            // }, 1000)
            // setTimeout(()=> {
            //     this.$scrollTo('#result-box',"start");
            // },1500)
            // window.alert('Done');
        },
        handleRetryEvent(e){
            console.log("ok");
            this.is_loaded = false;
            this.handleVideoUpload(e);
        },
        closeAssayWindow(){
            this.is_loaded = false;
        }
        // goToAssay(){
        //     this.isLoading = true;
        //     setTimeout(()=>{
        //         
        //     },3000)
            
        //     // return console.log('YA');
        // },
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
    .teach-title-box {
        width: 100vw;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        z-index: 998;
    }
    .teach-title-box h6 {
        font-size: 14px;
        color: #97A8AF;
        text-align: center;
        font-weight: 400;
    }
    .teach-title-video-box {
        width: 100vw;
        height: 40vh;
        position: absolute;
        top: 0;
        background-image: url('/mamiyoga/teach-title-img.png'); 
        z-index: 0;
    }
    .teach-course-info {
        width: 70vw;
        height: 75px;
        position: absolute;
        top: 23vh;
        margin-left: 5vw;
    }
    .teach-course-info div:first-child {
        height: 62px;
        width: 55px;
        float: left;
        background-repeat: no-repeat;
        background-image: url('/mamiyoga/teach-photoby.svg');
        background-position: center center;
    }
    .teach-course-info div:last-child {
        float: left;
        padding: 10px 0 0 10px;
    } 
    .teach-course-info h3 {
        color: #ECEDE8;
        font-size: 22px;
    }
    .teach-course-info p {
        color: #ecede8;
        font-size:14px;
        margin-top: 4px;
    }
    .teach-question-box {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 33vh;
        right: 6vw;
    }
    .teach-detail-box {
        width: 100vw;
        height: 55vh;
        position: absolute;
        top: 45vh;
    }
    .teach-detail-box h6 {
        font-size: 14px;
        color: #000;
        font-weight: 400;
        padding-left: 15px; 
    }
    .teach-content-text {
        font-weight: 400;
        font-size: 12px;
        color: #707070;
        padding: 20px 30px 0;
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
        background: #97A8AF;
        color: #fff;
    }
    .vld-overlay .vld-background {
        background-color:black;
    }
    .vld-icon svg {
        stroke: #DCD8CF;
    }
}
</style>
