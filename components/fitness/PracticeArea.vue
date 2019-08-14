<template>
    <div class="practice-area-bg-container">
        <div class="practice-area-container">
            <h1 class="title green-color">马上练习</h1>
            <p class="practice-area-content">正确的运动姿势事半功倍，<br>优秀的AI教练帮助您改善姿势！<br><br>立即上传您的深蹲影片体验</p>
            <!-- <flat-button size="medium" bgColor="#76FF00" color="black" hover="hover-fill-yellow" borderColor="#76FF00" text="上傳影片" type="file" change="handleVideoUpload"/> -->
            <input type="text" v-model="pose_id" class="pose-id-input"/>
            <button
                :class="'flat-button btn-medium'"
                :style="{background: '#76FF00', borderColor: '#76FF00', color:'black'}"
            >
              <label ><input v-if="!is_uploading" type="file" style="display:none;" @change="handleVideoUpload">上传影片</label>
                <!-- <label ><input type="file" style="display:none;" @change="handleVideoUpload">上传影片</label> -->
            </button>
        </div>
        <div class="loading-content" v-if="is_uploading">
                <v-progress-circular :rotate="-90" :size="100" :width="15" :value="value" color="#76FF00">
                    {{ value + '%' }}
                </v-progress-circular>
        </div>
        <div class="result-container" v-if="is_showing" id="result-box">
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
            <!-- <div class="loading-content" v-if="is_uploading">
                <v-progress-circular :rotate="-90" :size="100" :width="15" :value="value" color="#76FF00">
                    {{ value + '%' }}
                </v-progress-circular>
            </div> -->
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
            this.video_url = ""
            this.is_uploading = true;
            console.log(this.pose_id);
            var data = await this.$poseUpload(e.target.files[0],"test",this.pose_id,'jp',true)
            console.log(data.status)
            if(!data) {
                alert('網路錯誤')
                this.isLoading = false;
            } else if(data.status == 102) {  
                let timeout_limit = 0;
                let get_result_interval = setInterval(() => {
                axios.post('/apis/get-pose-result',{user_id:"test",pose_id:this.pose_id,createdAt:data.createdAt})
                    .then((response) => {
                        // console.log(response)
                        console.log(response.data.result.status)
                        if (response.data.result.status == 200) {
                            console.log(response.data.result);
                            this.video_url = response.data.result.video_url;
                            this.value = 100;
                            this.is_uploading = false;
                            this.value = 0;
                            this.is_showing = true;
                            setTimeout(()=> {
                                this.$scrollTo('#result-box',"start");
                            },1500)
                            clearInterval(get_result_interval);
                        } else if(response.data.result.status == 102) { 
                            console.log("還沒跑完");
                        } else if(response.data.result.status == 204) {
                            console.log("未偵測到動作");
                            alert('未偵測到動作')
                            this.isLoading = false;
                            clearInterval(get_result_interval);
                        } else {
                            alert('unkrown error')
                            console.log(response);
                            this.isLoading = false;
                            clearInterval(get_result_interval);
                        }
                    })
                    .catch((error) => {
                        console.log("fail");
                        alert('unknown error')
                        this.isLoading = false;
                        clearInterval(get_result_interval);
                    })
                    timeout_limit += 1;
                    if (timeout_limit >=100) {
                        alert("timeout");
                        clearInterval(get_result_interval);
                    }
                    this.value += 3;
                }, 3000);
                console.log('上傳成功');
            } else {
                console.log(data.status)
                alert('Network error')
            }
            // this.isLoading = false;
            // this.is_loaded = true;
        },
    },
    computed: {

    },
    data:() => ({
        video_url:'test',
        interval: {},
        value: 0,
        is_uploading:false,
        is_showing: false,
        reps_wrong_tags:[],
        pose_id:"yoga_27",
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
.pose-id-input {
  border-color: white;
  color: white;
  margin-bottom: 10px;
}
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
