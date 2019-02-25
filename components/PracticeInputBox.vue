<template>
    <!-- 課程練習區段 -->
    <div class="course-practice" v-if="currentSubCourse.assistant_id">
        <div class="courses-session-title">開始練習</div>
        <div class="course-practice-area">
            <textarea-autosize v-model="content" class="start-type" :placeholder="currentSubCourse.placeholder"></textarea-autosize>
            <!-- <div class="start-devider"></div> -->
            <div class="start-btns">
                <!-- <div class="upload-img">上傳圖片</div>
                <div class="upload-video">上傳影片</div>
                <div class="upload-voice">上傳聲音</div> -->
                
                
                
                <div class="upload-send" @click="sendToEvaluation(content)" >送出</div>
                <!-- <practice-record-box :rank="rank" /> -->
            </div>
            <div class="upload-send-sm" @click="sendToEvaluation(content)" >送出</div>
        </div>
        <div class="upload-result">
            <div class="upload-result-label" v-if="rank"> 批改結果 </div>
            <div class="upload-result-label2" v-if="rank"> 你的等級 </div>
            <div class="upload-result-rank">{{ rank }} <img class="upload-loading" v-if="isLoading == true" :src="loadingGIF" alt="loading" ></div>
            <div class="upload-result-advise" v-if="rank">{{ advise }}</div>
            <div class="example-title" v-if="rank">進步範例</div>
            <div class="example" v-if="rank">
                <div class="example-content">{{ getExample(rank) }}</div>
            </div>
        </div>
    </div>
    <!-- 課程練習區段結束 -->
</template>

<script>
import Vue from 'vue'
import VueTextareaAutosize from 'vue-textarea-autosize' // https://www.npmjs.com/package/vue-textarea-autosize
import axios from '~/config/axios-config';
import PracticeRecordBox from '~/components/PracticeRecordBox.vue'
import loadingGIF from 'static/loading.gif'

import CourseData01 from 'static/data/course/01.js'
import CourseData02 from 'static/data/course/02.js'
import CourseData03 from 'static/data/course/03.js'
import CourseData04 from 'static/data/course/04.js'
import CourseData05 from 'static/data/course/05.js'
import CourseData06 from 'static/data/course/06.js'
import CourseData07 from 'static/data/course/07.js'
import CourseData08 from 'static/data/course/08.js'
import CourseData09 from 'static/data/course/09.js'
import CourseData10 from 'static/data/course/10.js'
import CourseData11 from 'static/data/course/11.js'

Vue.use(VueTextareaAutosize)
export default {
    data:() => ({
        content:"",
        rank:"",
        loadingGIF,
        isLoading:false,
        advise:"",
        courseDataSet: {
            "01": CourseData01,
            "02": CourseData02,
            "03": CourseData03,
            "04": CourseData04,
            "05": CourseData05,
            "06": CourseData06,
            "07": CourseData07,
            "08": CourseData08,
            "09": CourseData09,
            "10": CourseData10,
            "11": CourseData11,
        },
    }),
    props: {
        course_id: String,
        currentSubCourse: Object,
    },
    components: {
        PracticeRecordBox,
    },
    methods: {
        sendToEvaluation(content) {
            if (localStorage.try_time >= 3) {
                window.alert("免費體驗已達上限，如果想繼續練習請先購買課程呦")
                return;
            }
            let setRank = this.setRank;
            let setAdvise = this.setAdvise;
            let setIsLoading = this.setIsLoading;
            let assistant_id = this.currentSubCourse.assistant_id;
            // console.log("send" + this.assistant_id)
            console.log("content: " + content)
            if(content.length < 1) {
                window.alert("請輸入內容！")
            } else {
                setIsLoading(true);
                setRank("");
                axios.post('/apis/ai-assistant/evaluate/'+ assistant_id + '?course_id=' + this.course_id,{content:content,course_id:this.course_id})
                    .then((response) => {
                        if (response.status == '200') {
                            console.log("evaluate success")
                            setIsLoading(false);
                            console.log(response.data.score)
                            setRank(response.data.score);
                            setAdvise(response.data.score);
                            if (!localStorage.try_time) {
                                localStorage.try_time = 0
                            }
                            console.log(localStorage.try_time);
                            localStorage.try_time = parseInt(localStorage.try_time) + 1;
                        } else {
                            console.log(response)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
        setRank(rank) {
            this.rank = rank;
        },
        setIsLoading(boolean) {
            this.isLoading = boolean;
        },
        setAdvise(rank) {
            // if(rank == "A") {
            //     this.advise = "灣得佛！你這次寫得有描述而且夠具體喔！未來你從備審到求職，應該都會有巨大加分了:D";
            // } else if(rank == "B") {
            //     this.advise = "寫得還不錯，你有領略到概要了！但除了相關之外，還需要寫得更具體一些，包含到實際獎項或是數字佐證等等的，才能寫出A級描述喔！";
            // } else if(rank == "C") {
            //     this.advise = "除了純粹寫出經歷外，請記得也要寫上與相關科系有效的描述喔！";
            // }
            this.advise = this.currentSubCourse.comments[rank];
        },
        getExample(rank) {
            const courseData = this.courseDataSet[this.course_id];
            if (courseData) {
                let example_list = this.currentSubCourse[rank];
                if (example_list && example_list.length >= 1 ) {
                    let rand = Math.floor((Math.random() * example_list.length));
                    console.log(rand);
                    return example_list[parseInt(rand)]
                } else {
                    return ""
                }
            } else {
                return ""
            }
        }
    }
}
</script>

<style>
/*課程練習區段*/
.course-practice{
	display: flex;
	width: 100vw;
	/*background-color: #F0F0F0;*/

	display: inline-flex;
	justify-content: center;
    flex-direction: column;
    align-items: center;

    padding-top: 50px;
}
.course-practice-area{
	display: flex;
	width: 80vw;
	min-height: 300px;
	background-color: #F5F5F5;

	display: inline-flex;
	justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 10px;
    margin-top: 15px;
}
.start-type{
	color: black;
	font-size: 20px;
	font-weight: 100;
	margin-top: 45px;
    margin-bottom: 25px;
    min-height: 200px;
    background: transparent;
    width: 90%;
    resize: none;
    border: none;
}
.start-type:focus {
    outline: none !important;
    border:1px solid darkgrey;
    box-shadow: 0 0 10px #719ECE;
}
.start-type::-webkit-input-placeholder {
  color: darkgrey;
  padding-top:25px;
  padding-left: 10%;
  font-size: 20px;
  font-weight: bold;
  width: 80%;
  text-align: center;
}

.start-type:-moz-placeholder { /* Firefox 18- */
  color: darkgrey;
  padding-top:25px;
  padding-left: 10%;
  font-size: 20px;
  font-weight: bold;
  width: 80%;  
  text-align: center;
}

.start-type::-moz-placeholder {  /* Firefox 19+ */
  color: darkgrey;
  padding-top:25px;
  padding-left: 10%;
  font-size: 20px;
  font-weight: bold;
  width: 80%;  
  text-align: center;
}

.start-type:-ms-input-placeholder {
  color: darkgrey;
  padding-top:25px;
  padding-left: 10%;
  font-size: 20px;
  font-weight: bold;
  width: 80%;  
  text-align: center;
}

.start-type::placeholder {
  color: darkgrey;
  padding-top:25px;
  padding-left: 10%;
  font-size: 20px;
  font-weight: bold;
  width: 80%;  
  text-align: center;
}
.start-devider{
	width: 90%;
	height: 2px;
	background-color: darkgrey;
	border-radius: 50px;
}
.start-btns{
    /* padding-top: 25px; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 25px;
}
.upload-img{
	float: left;
	display: inline-block;
	text-decoration: none;
	text-align: center;
	line-height: 33px;
	/*background-color: white;*/

	margin-left: 3px;
	margin-right: 3px;

	width: 130px;
	height: 50px; 
	font-size: 18px;
	line-height: 50px;
	color: white;
	background-color: darkgrey;
	/*border: 2px solid grey;*/
	border-radius: 10px;

	transition: all 0.2s;
	transition-timing-function: ease;
}
.upload-video{
	float: left;
	display: inline-block;
	text-decoration: none;
	text-align: center;
	line-height: 33px;
	/*background-color: white;*/
	
	margin-left: 3px;
	margin-right: 3px;

	width: 130px;
	height: 50px; 
	font-size: 18px;
	line-height: 50px;
	color: white;
	background-color: darkgrey;
	/*border: 2px solid grey;*/
	border-radius: 10px;

	transition: all 0.2s;
	transition-timing-function: ease;
}
.upload-voice{
	float: left;
	display: inline-block;
	text-decoration: none;
	text-align: center;
	line-height: 33px;
	/*background-color: white;*/
	
	margin-left: 3px;
	margin-right: 3px;

	width: 130px;
	height: 50px;
	font-size: 18px;
	line-height: 50px;
	color: white;
	background-color: darkgrey;
	/*border: 2px solid grey;*/
	border-radius: 10px;

	transition: all 0.2s;
	transition-timing-function: ease;
}
.upload-loading {
    /* width: 60px; */
    animation: titlein 0.5s 0s both;
}
.upload-result {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: coverphotoin 1s 0.5s both;
    width: 100vw;
    background-color: #FCFCFC;
    padding-top: 35px;
    padding-bottom: 35px;
    margin-top: 50px;
}
.upload-result-label {
    font-weight: 200;
    font-size: 35px;
    color: grey;
    animation: titlein 1s both;
}
.upload-result-label2 {
    /* width: 200px; */
    margin-top: 50px;
    font-weight: 200;
    font-size: 25px;
    color: darkgrey;
    animation: titlein 1s both;
}
.upload-result-rank {
    margin-top: -50px;
    font-weight: 50;
    font-size: 200px;
    color: #324D5B;
    animation: titlein 1s both;
}
.upload-result-advise {
    width: 80%;
    text-align: justify;
    /* font-weight: 200; */
    font-size: 18px;
    color: darkgrey;
    animation: titlein 1s both;
}
.upload-send{
    cursor: pointer;
	float: right;
	display: inline-block;
	text-decoration: none;
	text-align: center;
	line-height: 33px;
	/*background-color: white;*/

	margin-left: 3px;
	margin-right: 3px;

	width: 130px;
	height: 50px;
	font-size: 18px;
	line-height: 50px;
	color: white;
	background-color: orange;
	/*border: 2px solid grey;*/
	border-radius: 10px;

	transition: all 0.2s;
	transition-timing-function: ease;
}
@media (min-width: 900px){
	.upload-send-sm{
		display: none;
	}
}
.courses-session-title{
	display: flex;
	margin-top: 20px;
	font-weight: 200;
	font-size: 35px;
	color: grey;

	animation: 
	titlein 1s 1.8s both;
}
.courses-session-second-title{
	display: flex;
	margin-top: 20px;
	/* font-weight: 200; */
	font-size: 20px;
	color: grey;
    width: 80%;
    text-align: center;
	animation: 
	titlein 1s 1.8s both;
}
@keyframes titlein{
	0%{
		transform: translate(0,-30%);
		opacity: 0;
	}
	100%{
		transform: translate(0,0);
		opacity: 1;
	}
}
.example {
    background: #324D5B;
    border-radius: 20px;
    width: 80%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
.example-title {
    width: 150px;
    height: 40px;
    color: #324D5B;
    text-align: center;
    font-size: 20px;
    font-weight: 50;
    line-height: 35px;
    margin-top: 60px;
    animation: titlein 1s 1.8s both;
}
.example-content {
    margin-top: 20px;
    padding: 18px;
    background-color: #324D5B;
    border-radius: 20px;
    text-align: left;
    /* font-weight: 200; */
    font-size: 18px;
    color: lightgrey;
    width: 95%;
    animation: titlein 1s 1.8s both;
}
@media (max-width: 899px){
	.upload-send-sm{
        cursor: pointer;
        float: right;
        display: inline-block;
        text-decoration: none;
        text-align: center;
        line-height: 33px;
        /*background-color: white;*/

        margin-left: 3px;
        margin-right: 3px;

        width: 130px;
        height: 50px;
        font-size: 18px;
        line-height: 50px;
        color: white;
        background-color: orange;
        /*border: 2px solid grey;*/
        border-radius: 10px;

        transition: all 0.2s;
        transition-timing-function: ease;
    }
    .upload-send{
        display: none;
    }
    .upload-result {
        flex-wrap: wrap;
        justify-content: center;
    }
    .upload-result-advise {
        text-align: left;
        margin-left: 0px;
        width: 80%;
    }
    .upload-result-rank {
        font-size: 100px;
        width: 60px;
        margin-top: 0px;
    }
    .upload-loading {
        width: 60px;
        height: 60px;
    }
}
</style>
