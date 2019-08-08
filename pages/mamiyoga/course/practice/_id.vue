<template>
    <div>
        <div class="divide-page" v-if="!is_loaded" >
            <mamiyoga-mail-header class="mamiyoga-divide-header"></mamiyoga-mail-header>
            <h3 v-html="getTitle"></h3>
            <mamiyoga-divide-video :course_data="course_data"
            @handleCourseVideoUpload="handleCourseVideoUpload"></mamiyoga-divide-video>
        </div>
        <mamiyoga-assay-video @handleRetryEvent="handleRetryEvent"  @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mamiyoga-assay-video>
        <!-- <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div> -->
        

        <div class="loading-bar" v-if="isLoading">
            <div style="width: 100%;height: 15vh;display:flex;align-items:center;">
                <div class="bar-back">
                    <div id="bar-container">
                        <div id="bar"></div>
                    </div>
                    <p style="margin-left:2%;font-size:14px;">{{show_value}}</p>
                </div>
            </div>
            <div style="margin:5vh auto;">
                <p style="color:#fff;text-align:center;margin:0 auto 10px;width:80%;font-size:13px;" v-html="$t('start_experience_uptext')"></p>
                <div class="mamiyoga-show-article" @click="changeArticle">
                    <p v-html="post_article"></p>
                    <img style="position:absolute;width:30px;bottom:20px;right:25px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tap.png" alt="">
                </div>
            </div>
            <div style="width:100%;height:50px;display:flex;justify-content:center;">
                <button v-show="play_assay" class="see-assay-btn" @click="isLoading = false, is_loaded = true">{{$t('start_experience_btn_3')}}</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue';
import MamiyogaDivideVideo from '~/components/mamiyoga/MamiyogaDivideVideo.vue';
import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    layout: 'mommiyoga',
    data:()=>({
        is_loaded: false,
        video_result: {},
        isLoading: false,
        fullPage: true,
        courses:[],
        course_id:'',
        course_data:{},

        user_id:'',
        lang_click:'',
        show_value: 0,
        articles:[],
        post_article:'',
        last_article_id:'',
        play_assay: false,
        current_pose_id:'first',

    }),
    components:{
        MamiyogaMailHeader,
        MamiyogaDivideVideo,
        MamiyogaAssayVideo,
        MamiyogaWindowAlertBox,
        Loading,
    },
    async mounted() {
        if (process.client) {
            if(this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
                this.articles = await require('~/config/mamiyoga-post');
                this.post_article = this.articles[0].post_article;
                this.lang_click = 'jp'
            } else {
                this.courses = await require('~/config/mamiyoga-course');
                this.articles = await require('~/config/mamiyoga-post');
                this.post_article = this.articles[0].post_article;
                this.lang_click = 'zh-tw'
            }
            this.course_id = this.$route.params.id;
            this.course_data = this.courses.find(course => this.course_id == course.id);
            console.log(this.course_data)

            this.current_pose_id = sessionStorage["course_" + this.course_data.id + "_current_pose_id"];
        }
    },
    methods:{
        async handleVideoUpload(e) {
            this.isLoading = true;
            const pose_id = "yoga_" + e.input_id;
            console.log(pose_id);
            if(this.$i18n.locale == 'JP') {
                this.show_value = '待ちます'
            } else {
                this.show_value = '等待上傳'
            }
            var data = await this.$poseUpload(e.target.files[0],'0002',pose_id,this.lang_click)
            console.log(data.status)
            if(!data) {
                if(this.$i18n.locale == 'JP') {
                    alert('network error')
                } else {
                    alert('網路錯誤')
                }
                this.isLoading = false;
            } else if(data.status == 102) {  
                
                // for(var i =0; i< data.reps_wrong_tags.length; i++){
                //     for(var j = 0; j<data.reps_wrong_tags[i].length; j++){
                //         if(data.reps_wrong_tags[i][j] == "1") data.reps_wrong_tags[i][j] = "摆动过小";
                //         else if (data.reps_wrong_tags[i][j] == "2") data.reps_wrong_tags[i][j] = "摆动过大";
                //         else if (data.reps_wrong_tags[i][j] == "0") data.reps_wrong_tags[i][j] = "姿势正确";
                //     }
                // }   
                let timeout_limit = 0;
                let get_result_interval = setInterval(() => {
                axios.post('/apis/get-pose-result',{user_id:'0002',pose_id:pose_id,createdAt:data.createdAt})
                    .then((response) => {
                        // console.log(response)
                        console.log(response.data.result.status)
                        if (response.data.result.status == 200) {
                            console.log(response.data.result);
                            this.video_result = response.data.result;
                            clearInterval(get_result_interval);
                        } else if(response.data.result.status == 102) { 
                            console.log("還沒跑完");
                        } else if(response.data.result.status == 204) {
                            console.log("未偵測到動作");
                            alert('動きを検知していません')
                            this.isLoading = false;
                            clearInterval(get_result_interval);
                            clearInterval(id);
                        } else {
                            alert('unknown error')
                            console.log(response);
                            this.isLoading = false;
                            clearInterval(get_result_interval);
                            clearInterval(id);
                        }
                    })
                    .catch((error) => {
                        console.log("fail");
                        alert('unknown error')
                        this.isLoading = false;
                        clearInterval(get_result_interval);
                        clearInterval(id);
                    })
                    timeout_limit += 1;
                    if (timeout_limit >=100) {
                        console.log("unknown error, contact developers~");
                        clearInterval(get_result_interval);
                        clearInterval(id);
                    }
                }, 3000);
                console.log('上傳成功');
                let bar = document.getElementById('bar');
                let width = 0;
                let id = setInterval(()=>{
                    if("reps_wrong_tags" in this.video_result) {
                        width = 100
                        document.getElementById('bar').style.width = width+'%';
                        this.show_value = width + '%'
                        this.play_assay = true
                        console.log(this.video_result.reps_wrong_tags)
                        clearInterval(id)
                        for(var i =0; i< this.video_result.reps_wrong_tags.length; i++){
                            for(var j = 0; j<this.video_result.reps_wrong_tags[i].length; j++){
                                // if(data.reps_wrong_tags[i][j] == "1") data.reps_wrong_tags[i][j] = "摆动过小";
                                // else if (data.reps_wrong_tags[i][j] == "2") data.reps_wrong_tags[i][j] = "摆动过大";
                                // else if (data.reps_wrong_tags[i][j] == "0") data.reps_wrong_tags[i][j] = "姿势正确";
                                data.reps_wrong_tags[i][j] = this.course_data.upload_notices[res.data.reps_wrong_tags[i][j]]
                            }
                        }   
                        // for(var i =0; i< this.video_result.reps_wrong_tags.length; i++){
                        //     for(var j = 0; j<this.video_result.reps_wrong_tags[i].length; j++){
                        //         if(this.video_result.reps_wrong_tags[i][j] == "1") this.video_result.reps_wrong_tags[i][j] = "肩が開いていない";
                        //         else if (this.video_result.reps_wrong_tags[i][j] == "2") this.video_result.reps_wrong_tags[i][j] = "体が後ろに傾いています";
                        //         else if (this.video_result.reps_wrong_tags[i][j] == "3") this.video_result.reps_wrong_tags[i][j] = "体が前に傾いています";
                        //         else if (this.video_result.reps_wrong_tags[i][j] == "4") this.video_result.reps_wrong_tags[i][j] = "背中が曲がっています";
                        //         else if (this.video_result.reps_wrong_tags[i][j] == "5") this.video_result.reps_wrong_tags[i][j] = "手がまっすぐ伸ばしていない";
                        //         else if (this.video_result.reps_wrong_tags[i][j] == "6") this.video_result.reps_wrong_tags[i][j] = "手を完全にあげていない";
                        //         else if (this.video_result.reps_wrong_tags[i][j] == "7") this.video_result.reps_wrong_tags[i][j] = "体が完全に伸ばしていません";
                        //         else if (this.video_result.reps_wrong_tags[i][j] == "8") this.video_result.reps_wrong_tags[i][j] = "座っていません";
                        //         else if (this.video_result.reps_wrong_tags[i][j] == "0") this.video_result.reps_wrong_tags[i][j] = "正解";
                        //     }
                        // }
                    } else {
                        if(width <=95) width++;
                        document.getElementById('bar').style.width = width+'%';
                        this.show_value = width + '%'
                    }
                },400)
            } else {
                console.log(data.status)
                alert('Network error')
            }
            // this.isLoading = true;
            // let form = new FormData();
            // form.append('file',e.target.files[0])
            // form.append('pose_id','yoga_6')
            // form.append('language','zh-tw')
            // const res = await axios.post('/apis/video-upload',form)
            // console.log(res.data)
            // for(var i =0; i< res.data.reps_wrong_tags.length; i++){
            //   for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
            //       if(res.data.reps_wrong_tags[i][j] == "y_6_1") res.data.reps_wrong_tags[i][j] = "膝蓋彎曲";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_2") res.data.reps_wrong_tags[i][j] = "膝蓋彎曲";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_3") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_4") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_5") res.data.reps_wrong_tags[i][j] = "軸心不穩";
            //       else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿勢正確";
            //   }
            // }
            // this.isLoading = false;
            // console.log(res.data)
            // this.reps_wrong_tags = res.data.reps_wrong_tags;
            // this.video_result = res.data;
            // this.is_loaded = true;
        },
        handleRetryEvent(e){
            console.log("ok");
            this.is_loaded = false;
            this.handleVideoUpload(e);
        },
        closeAssayWindow(){
            this.is_loaded = false;
        },
        openVideoAssisant(){
            console.log('OK');
            this.showAssisant = true;
        },
        handleCourseVideoUpload(e) {
            this.is_loaded = false;
            console.log('OK');
            this.handleVideoUpload(e);
        },
        changeArticle(){
            let x = 0;
            x = Math.floor(Math.random()*10)
            if (this.last_article_id == ''){
                this.last_article_id = x
                this.post_article = this.articles[x].post_article
                // console.log(x)
            }
            else{
                while(this.last_article_id == x){
                    x = Math.floor(Math.random()*10)
                }
                this.last_article_id = x
                this.post_article = this.articles[x].post_article
                // console.log(x)
            }
        }
    },
    computed:{
        getTitle(){
            if (this.course_data) {
                return this.course_data.title;
            } else {
                return '';
            }
        },
        getPoseAmount(){
            if (this.course_data) {
                return this.course_data.pose_amount;
            } else {
                return '';
            }
        },
    }
}
</script>

<style>
.divide-page {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.divide-page h3 {
    font-size: 24px;
    color: #51636F;
    text-align: center;
    font-weight: 400; 
    margin-bottom: 2vh; 
}
.mamiyoga-divide-header button {
    display: none;
}
.loading-bar {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: fixed;
    top: 0;
    /* left: 0;  */
    z-index: 999;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; */
}
.bar-back {
    width: 80%;
    height: 30px;
    background:#BFBDBD;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
#bar-container {
    width: 70%;
    height: 15px;
    background-color: #ddd; 
    border-radius: 15px;
    /* margin: 0 auto; */
}
#bar {
    width: 1%;
    height: 15px;
    background-color: #24798F;
    border-radius: 15px;
}   
.mamiyoga-show-article {
    width: 80vw;
    height: 300px;
    background: white;
    border-radius: 20px;
    padding: 0 15px;
    /* text-align: center; */
    color:#8699A0;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin: 0 auto;
    position: relative;
}
.see-assay-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    background: #24798F;
    color: #fff;
    border-style: none;
    font-size: 14px;
}
@media (min-width: 769px) {
    .divide-page {
        width: 100%;
    }
}
</style>
