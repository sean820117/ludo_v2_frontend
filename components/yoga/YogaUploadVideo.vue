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
            <label><input v-if="!is_uploading" type="file" style="display:none;" @change="yogaVideoUpload">アップロード</label>
            </button>
        </div>
    </div>
    <div class="loading-content" v-if="is_uploading">
                <v-progress-circular :rotate="-90" :size="100" :width="15" :value="value" color="#99CBA5">
                    {{ value + '%' }}
                </v-progress-circular>
    </div>
    <div class="yoga-assay" id="course-assay">
        <!-- <video class="yoga-assay-video" controls><source src="/yoga/Yoga-video-assay-text.MOV">您的瀏覽器不支援此 HTML5 影片標籤</video> -->
        <video v-if="video_url" class="yoga-assay-video" controls>
                <source :src="video_url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <!-- <loading active="!video_url" v-else></loading> -->
        <div class="yoga-assay-box">
            <div class="yoga-assay-content">
                <div class="yoga-assay-title"><h3>分析結果</h3></div>
                <div class="yoga-assay-content-box">
                    <div class="yoga-assay-content-li"  v-for="(tags, i) in reps_wrong_tags" :key="i">
                        <h4 class="yoga-assay-content-time">{{i+1}}回目</h4>
                        <hooper class="yoga-assay-content-detailed-box">
                            <slide class="yoga-assay-content-detailed" v-for="(tag ,index) in tags" :key="index">{{tag}}</slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                    </div>
                </div>
                <!-- <div class="yoga-assay-contact">
                    <p class="yoga-assay-contact-explain">分析結果がズレてる場合</p>
                    <button class="yoga-assay-contact-btn">お問い合わせ</button>
                </div> -->
            </div>
        </div>
        
    </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
import FlatButton from "~/components/FlatButton.vue";
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vuetify/dist/vuetify.min.css'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

Vue.use(Vuetify)

export default {
    data:()=> ({
        video_url:'test',
        interval: {},
        value: 0,
        is_uploading: false,
        is_showing: false,
        reps_wrong_tags:[['頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭頭','手手手手手手','手手手手手手'],['頭頭頭頭頭頭頭頭頭','手手手手手手'],['頭頭頭頭頭頭頭頭頭','手手手手手手'],['頭頭頭頭頭頭頭頭頭','手手手手手手'],['頭頭頭頭頭頭頭頭頭','手手手手手手'],['頭頭頭頭頭頭頭頭頭','手手手手手手'],['頭頭頭頭頭頭頭頭頭','手手手手手手']],
    }),
    beforeDestroy () {
        clearInterval(this.interval)
    },
    components: {
        FlatButton,
        Loading,
        Hooper,
        Slide,
        HooperNavigation,
    },
    props: {
        bgImage: String,
    },
    methods: {
        goToCourse(){
            this.$scrollTo('#course-info',"start");
        },
    //    async yogaVideoUpload(e) {
    //         let form = new FormData();
    //         form.append('file',e.target.files[0])
    //         form.append('pose_id','squat01') //正式上線會使用'yoga01'
    //         this.video_url = ""
    //         this.is_uploading = true;
    //         this.interval = setInterval(() => {
    //             if (this.value >= 95) {
    //                 // return (this.value = 0)
    //                 clearInterval(this.interval)
    //             } else {
    //                 this.value += 1
    //             }
    //         }, 500)
    //         const res = await axios.post('/apis/video-upload',form)
    //         console.log(res.data)
    //         this.video_url = res.data.output_video_url;
    //         // this.video_url = res.data.location;
    //         // for(var i =0; i< res.data.reps_wrong_tags.length; i++){
    //         //   for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
    //         //       if(res.data.reps_wrong_tags[i][j] == "s_e_1") res.data.reps_wrong_tags[i][j] = "低头";
    //         //       else if (res.data.reps_wrong_tags[i][j] == "s_e_2") res.data.reps_wrong_tags[i][j] = "抬头";
    //         //       else if (res.data.reps_wrong_tags[i][j] == "s_e_3") res.data.reps_wrong_tags[i][j] = "弯腰";
    //         //       else if (res.data.reps_wrong_tags[i][j] == "s_e_4") res.data.reps_wrong_tags[i][j] = "膝盖过前";
    //         //       else if (res.data.reps_wrong_tags[i][j] == "s_e_5") res.data.reps_wrong_tags[i][j] = "动作过快";
    //         //       else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿势正确";
    //         //   }
    //         // }
    //         console.log(res.data)
    //         this.reps_wrong_tags = res.data.reps_wrong_tags;
    //         this.value = 100;

    //         setTimeout(()=> {
                
    //             clearInterval(this.interval);
    //             this.is_uploading = false;
    //             this.value = 0;
    //             this.is_showing = true;
    //         }, 1000)
            
    //         // window.alert('Done');
    //         setTimeout(()=> {
    //             this.$scrollTo('#course-assay',"start");
    //         },1500)
    //     },
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
        display: block;
        width: 90vw;
        height: 55vh;
        background-color: #000;
        margin: auto;
    }
    .yoga-assay-box {
        width: 100vw;
        padding: 15px;
        position: relative;
        min-height: 45vh;
    }
    .yoga-assay-content {
        background: white;
        width: 90vw;
        min-height: 41vh;
        margin: 0 auto;
        border-radius:20px; 
        padding: 0 15px 5px 15px;
        position: absolute;
        top: -30px;
        left: 5vw;
    }
    .yoga-assay-title {
        width: 170px;
        height: 45px;
        background-color: #99cba5; 
        margin: 0 auto;
        padding: 5px;
        border-radius: 0 0 25px 25px;
        margin-bottom: 15px;
    }
    .yoga-assay-title h3 {
        color: #FFF;
        text-align: center;
        /* margin-bottom:15px;  */
        font-size:20px; 
        text-shadow: 0 0 5px rgba(0,0,0,.3);
    }
    .yoga-assay-content-box {
        width: auto;
        height: 20vh;
        overflow-y: auto;
        overflow-x: hidden; 
    }
    .yoga-assay-content-li {
        width: 95%;
        min-height: 50px;
        display: inline-flex;
        align-items: center;
        color: white;
        border-radius: 10px;
        margin: 10px 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,.2)
    }
    .yoga-assay-content-li:nth-child(odd) {
        background-color:#D6D6D6; 
    }
    .yoga-assay-content-li:nth-child(even) {
        background-color: #9A9A9A;
    }
    .yoga-assay-content-time {
        font-weight: 500;
        padding: 0 15px;
        min-width: 90px;
        border-right: 2px #fff solid;
        font-size: 14px;
    }
    .yoga-assay-content-detailed {
        padding: 5px 25px;
        font-size: 13px;
        align-self: auto;
        margin-bottom: 0; 
    
    }
    .yoga-assay-contact {
        width: 150px;
        height: 80px;
        margin: 15px auto 0 auto;
    }
    .yoga-assay-contact-explain {
        text-align: center;
        font-size: 12px;
        color: #BFBFBF; 
        margin-bottom: 5px;
        
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
    .loading-content {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, .8);
        z-index: 999;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hooper {
        height: auto;
        position: relative;
        
    }
    .hooper-prev.is-disabled, .hooper-prev {
        position: absolute;
        top: 53%;
        left: -15px;
    }
    .hooper-next.is-disabled, .hooper-next {
        position: absolute;
        top: 53%;
        right: 80px;
    }
    .hooper-prev.is-disabled,.hooper-next.is-disabled,.hooper-prev {
        display: none;
    }
}
</style>
