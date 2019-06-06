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
              <label ><input v-if="!is_uploading" type="file" style="display:none;" @change="handleVideoUpload">上传影片</label>
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
            <!-- <loading class="loading-icon"
                color="#76FF00" width="80" height="80"
                :active="video_url" 
                >
            <div slot="after" style="color:white;">約{{}}秒後分析完成</div>    
            </loading> -->
            <div class="loading-content" v-if="is_uploading">
                <v-progress-circular :rotate="-90" :size="100" :width="15" :value="value" color="#76FF00">
                    {{ value + '%' }}
                </v-progress-circular>
            </div>
            <div class="result-video-content-box">
                <div class="result-video-content">
                  <!-- <div class="result-video-content-li" v-for="(tags, index) in reps_wrong_tags" :key="index">
                    <div class="result-video-content-time">第{{index+1}}次</div>
                    <p class="result-video-content-detailed" v-for="(tag ,index) in tags" :key="index">{{tag}}<br /></p>
                  </div> -->
                  <div class="result-video-content-li" v-for="(tags, i) in reps_wrong_tags" :key="i">
                    <div class="result-video-content-time">第{{i+1}}次</div>
                    <div class="result-video-content-detailed-box" >
                        <p class="result-video-content-detailed" v-for="(tag ,index) in tags" :key="index">{{tag}}</p>
                    </div>
                  </div>
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
// import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)


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
            this.is_uploading = true;
            this.interval = setInterval(() => {
                if (this.value >= 95) {
                    // return (this.value = 0)
                    clearInterval(this.interval)
                } else {
                    this.value += 1
                }
            }, 500)
            const res = await axios.post('/apis/video-upload',form)
            console.log(res.data)
            this.video_url = res.data.output_video_url;
            for(var i =0; i< res.data.reps_wrong_tags.length; i++){
              for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
                  if(res.data.reps_wrong_tags[i][j] == "s_e_1") res.data.reps_wrong_tags[i][j] = "低头";
                  else if (res.data.reps_wrong_tags[i][j] == "s_e_2") res.data.reps_wrong_tags[i][j] = "抬头";
                  else if (res.data.reps_wrong_tags[i][j] == "s_e_3") res.data.reps_wrong_tags[i][j] = "弯腰";
                  else if (res.data.reps_wrong_tags[i][j] == "s_e_4") res.data.reps_wrong_tags[i][j] = "膝盖过前";
                  else if (res.data.reps_wrong_tags[i][j] == "s_e_5") res.data.reps_wrong_tags[i][j] = "动作过快";
                  else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿势正确";
              }
            }
            console.log(res.data)
            this.reps_wrong_tags = res.data.reps_wrong_tags;
            this.value = 100;

            setTimeout(()=> {
                
                clearInterval(this.interval);
                this.is_uploading = false;
                this.value = 0;
            }, 1000)
            
            // window.alert('Done');
            this.$scrollTo('#result-box',"center");
        },
    },
    computed: {

    },
    data:() => ({
        video_url:'test',
        interval: {},
        value: 0,
        is_uploading:false,
        reps_wrong_tags:[
          // ['s_e_1','s_e_2'],['s_e_1','s_e_2']
        ],
    }),
    beforeDestroy () {
        clearInterval(this.interval)
    },
    mounted () {
        if (process.client) {
            // for(var i =0; i< this.reps_wrong_tags.length; i++){
            //   for(var j = 0; j<this.reps_wrong_tags[i].length; j++){
            //       console.log(this.reps_wrong_tags[i][j] == "s_e_1")
            //       if(this.reps_wrong_tags[i][j] == "s_e_1") {
            //         this.reps_wrong_tags[i][j] = "低頭";
            //       }
            //       else if (this.reps_wrong_tags[i][j] == "s_e_2") this.reps_wrong_tags[i][j] = "抬頭";
            //       else if (this.reps_wrong_tags[i][j] == "s_e_3") this.reps_wrong_tags[i][j] = "彎腰";
            //       else if (this.reps_wrong_tags[i][j] == "s_e_4") this.reps_wrong_tags[i][j] = "膝蓋過前";
            //       else if (this.reps_wrong_tags[i][j] == "correct") this.reps_wrong_tags[i][j] = "姿勢正確";
            //   }
            // }
        }
    },
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
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.result-video-content-time {
  font-weight: 500;
  padding: 0 5px;
  color: #000;
  min-width: 100px;
  border-right: 2px #76FF00 solid;
}
.result-video-content-detailed {
  padding: 0px 5px 5px 15px;
  font-size: 14px;
  align-self: auto;
  margin: 0;
  
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
.v-progress-circular {
  margin: 1rem;
}
</style>
