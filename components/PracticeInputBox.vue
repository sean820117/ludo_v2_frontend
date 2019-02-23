<template>
    <!-- 課程練習區段 -->
    <div class="course-practice">
        <div class="courses-session-title">開始練習</div>
        <div class="course-practice-area">
            <textarea-autosize v-model="content" class="start-type" placeholder="假設今天你是一個醫學科系申請生，請輸入你的經歷，以及嘗試簡短但具體的描述你的經歷。
(例如：我曾擔任班長，在開學短短7天內讓全班35人完成了420項老師的代辦工作)。"></textarea-autosize>
            <!-- <div class="start-devider"></div> -->
            <div class="start-btns">
                <!-- <div class="upload-img">上傳圖片</div>
                <div class="upload-video">上傳影片</div>
                <div class="upload-voice">上傳聲音</div> -->
                
                
                <div class="upload-result">
                    <div class="upload-result-label" v-if="rank"> 等級認證： </div>
                    <div class="upload-result-rank">{{ rank }} <img class="upload-loading" v-if="isLoading == true" :src="loadingGIF" alt="loading" ></div>
                    <div class="upload-result-advise" v-if="rank">{{ advise }}</div>
                </div>
                <div class="upload-send" @click="sendToEvaluation(content)" >送出</div>
                <!-- <practice-record-box :rank="rank" /> -->
            </div>
            <div class="upload-send-sm" @click="sendToEvaluation(content)" >送出</div>
        </div>
        <div class="example" v-if="rank">
            <div class="example-title">進步範例</div>
            <div class="example-content">{{ getExample(rank) }}</div>
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
    },
    components: {
        PracticeRecordBox,
    },
    methods: {
        sendToEvaluation(content) {
            let setRank = this.setRank;
            let setAdvise = this.setAdvise;
            let setIsLoading = this.setIsLoading;
            let assistant_id = this.courseDataSet[this.course_id].assistant_id;
            // console.log("send" + this.assistant_id)
            console.log("content: " + content)
            if(content.length < 5) {
                window.alert("請輸入更多內容！")
            } else {
                setIsLoading(true);
                setRank("");
                axios.post('/apis/ai-assistant/evaluate/'+ assistant_id,{content:content})
                    .then((response) => {
                        if (response.status == '200') {
                            console.log("evaluate success")
                            setIsLoading(false);
                            console.log(response.data.score)
                            setRank(response.data.score);
                            setAdvise(response.data.score);
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
            if(rank == "A") {
                this.advise = "灣得佛！你這次寫得有描述而且夠具體喔！未來你從備審到求職，應該都會有巨大加分了:D";
            } else if(rank == "B") {
                this.advise = "寫得還不錯，你有領略到概要了！但除了相關之外，還需要寫得更具體一些，包含到實際獎項或是數字佐證等等的，才能寫出A級描述喔！";
            } else if(rank == "C") {
                this.advise = "除了純粹寫出經歷外，請記得也要寫上與醫學相關科系有效的描述喔！";
            }
        },
        getExample(rank) {
            const courseData = this.courseDataSet[this.course_id];
            if (courseData) {
                let example_list = courseData.examples.filter(example => example.rank == rank);
                let rand = Math.floor((Math.random() * example_list.length));
                console.log(example_list[rand].content);
                return example_list[rand].content
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

    padding-bottom: 35px;
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
    justify-content: space-between;
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
    color: #324D5B;
    font-size: 25px;
    display: flex;
    /* margin-top: -20px; */
}
.upload-result-label {
    /* width: 200px; */
}
.upload-result-rank {
    /* width: 60px; */
    font-size: 60px;
    color: #324D5B;
    font-size: 200px;
    line-height: 0.8;
    animation: titlein 1s 0s both;
    margin-top: -20px;
    display: inline-flex;
}
.upload-result-advise {
    font-size: 20px;
    margin-left: 50px;
    width: 50%;
    margin-top: 20px;
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
    /* display: flex;
    justify-content: center; */
}
.example-title {
    font-size: 20px;
    color: white;
    margin-top: 10px;
    width: 100%;
    text-align: center;
}
.example-content {
    font-size: 14px;
    margin-top: 10px;
    color: white;
    width: 80%;
    margin-left: 10%;
    /* display: flex; */
    text-align: center;
    padding-bottom: 10px;
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
        text-align: center;
        margin-left: 0px;
        width: 80%;
    }
    .upload-result-rank {
        font-size: 100px;
        width: 60px;
    }
    .upload-loading {
        width: 60px;
        height: 60px;
    }
}
</style>
