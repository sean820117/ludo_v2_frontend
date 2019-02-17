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
                    <div class="upload-result-label"> 等級認證： </div>
                    <img class="upload-loading" v-if="isLoading == true" :src="loadingGIF" alt="loading" >
                    <div class="upload-result-rank" v-else-if="rank">{{ rank }}</div>
                    <div class="upload-result-advise" v-if="rank">{{ advise }}</div>
                </div>
                <div class="upload-send" @click="sendToEvaluation" >送出</div>
                <!-- <practice-record-box :rank="rank" /> -->
            </div>
            <div class="upload-send-sm">送出</div>
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

Vue.use(VueTextareaAutosize)
export default {
    data:() => ({
        content:"",
        rank:"",
        loadingGIF,
        isLoading:false,
        advise:"",
    }),
    props: {
        assistantId: String,
    },
    components: {
        PracticeRecordBox,
    },
    methods: {
        sendToEvaluation() {
            let setRank = this.setRank;
            let setAdvise = this.setAdvise;
            let setIsLoading = this.setIsLoading;
            console.log("send" + this.assistantId)
            console.log("content: " + this.content)

            setIsLoading(true);
            setRank("");
            axios.post('/apis/ai-assistant/evaluate/'+this.assistantId,{content:this.content})
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
</style>
