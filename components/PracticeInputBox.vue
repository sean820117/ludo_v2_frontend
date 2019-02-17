<template>
    <!-- 課程練習區段 -->
    <div class="course-practice">
        <div class="courses-session-title">開始練習</div>
        <div class="course-practice-area">
            <textarea-autosize v-model="content" class="start-type" placeholder="|...開始輸入練習吧！"></textarea-autosize>
            <div class="start-devider"></div>
            <div class="start-btns">
                <!-- <div class="upload-img">上傳圖片</div>
                <div class="upload-video">上傳影片</div>
                <div class="upload-voice">上傳聲音</div> -->
                <div class="upload-send" @click="sendTest" >送出</div>
                <practice-record-box :rank="rank" />
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

Vue.use(VueTextareaAutosize)
export default {
    data:() => ({
        content:"",
        rank:"",
    }),
    props: {
        assistantId: String,
    },
    components: {
        PracticeRecordBox,
    },
    methods: {
        sendTest() {
            let setRank = this.setRank;
            console.log("send" + this.assistantId)
            console.log("content: " + this.content)
            axios.post('/apis/ai-assistant/evaluate/'+this.assistantId,{content:this.content})
                .then((response) => {
                    if (response.status == '200') {
                        console.log("evaluate success")
                        console.log(response.data.score)
                        setRank(response.data.score);
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
	font-size: 25px;
	font-weight: 100;
	/* padding-top: 45px; */
    padding-bottom: 65px;
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
  padding-top:45px;
  font-size: 35px;
  text-align: center;
}

.start-type:-moz-placeholder { /* Firefox 18- */
  color: darkgrey;
  padding-top:45px;
  font-size: 35px;  
  text-align: center;
}

.start-type::-moz-placeholder {  /* Firefox 19+ */
  color: darkgrey;
  padding-top:45px;
  font-size: 35px;  
  text-align: center;
}

.start-type:-ms-input-placeholder {
  color: darkgrey;
  padding-top:45px;
  font-size: 35px;  
  text-align: center;
}

.start-type::placeholder {
  color: darkgrey;
  padding-top:45px;
  font-size: 35px;  
  text-align: center;
}
.start-devider{
	width: 90%;
	height: 2px;
	background-color: darkgrey;
	border-radius: 50px;
}
.start-btns{
	padding-top: 25px;
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
