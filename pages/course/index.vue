<template>
    <div>
        <teacher-header/>
        <!-- 看課區段 -->
        <div class="course-video">
            <div class="course-video-contaniner">
                <div class="box1">讓備審飛 > 醫學學群</div>
                <div class="box2">
                    有效的簡歷撰寫
                    <br>
                    <div class="box2-second-title">醫學科系申請生該如何寫經歷，才有說服力</div>
                </div>
                
                <div class="box1 box1-small"></div>
            </div>
            <div class="course-video-area">
                <video src="https://dl.dropboxusercontent.com/s/4amhr9wxu9btcq1/2-0.mp4" controls></video>
                <div class="course-video-list">
                    <img :src="TempList" alt="">
                </div>
            </div>
        </div>
        <!-- 看課下方欄 -->
        <div class="course-status">
            <div class="course-status-wrapper">
                <div class="course-status-box">
                    <img :src="HiveFive" class="course-status-svg" alt="">
                    <div class="course-status-box-text">1200位同學</div>
                </div>
                <div class="course-status-devider"></div>
                <div class="course-status-box">
                    <img :src="Hourglass" class="course-status-svg-2" alt="">
                    <div class="course-status-box-text">總長度60分鐘</div>
                </div>
                <div class="course-status-devider"></div>
                <div class="course-status-box">
                    <img :src="InfiniteSymbol" class="course-status-svg" alt="">
                    <div class="course-status-box-text">5個練習服務</div>
                </div>
                <div class="course-status-devider-sm"></div>
                <div class="course-status-pricetag">課程售價</div>
                <div class="course-status-price">499元</div>
                <a href="confirm.html" class="course-status-buy-btn" style="text-decoration: none; color:white">馬上購買</a>
                <!-- </div> -->
            </div>
            <practice-input-box assistantId="03db9c50-f211-11e8-93e5-7514b94dfe78" />
        </div>
        <!-- 看課下方欄課程簡介結束 -->
    </div>
</template>

<script>
import TeacherHeader from '~/components/LudoTeacherHeader.vue'
import PracticeInputBox from '~/components/PracticeInputBox.vue'
import PracticeRecordBox from '~/components/PracticeRecordBox.vue'
import HiveFive from 'static/high-five.svg'
import Hourglass from 'static/hourglass.svg'
import InfiniteSymbol from 'static/infinite-symbol.svg'
import TempList from 'static/temp-list.png'
export default {
    head () {
        return {
            // script: [
            //     { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
            //     { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js' },
            // ],
            link: [
                { rel: 'stylesheet', href: '/bootstrap.css' }
            ]
        } 
    },
    components: {
        TeacherHeader,
        PracticeInputBox,
        PracticeRecordBox,
    },
    data:() => ({
        HiveFive: HiveFive,
        Hourglass:Hourglass,
        InfiniteSymbol:InfiniteSymbol,
        TempList,
    }),
}
</script>

<style>
*{
	position: relative;
}
html, body{
	padding: 0;
	margin: 0;
    height: 100%;
    font-family: arial, "Microsoft JhengHei", "微軟正黑體";
}
/*看課區段*/
.course-video{
	display: flex;
	width: 100vw;
	height: 700px;
	background-color: #324D5B;

	overflow: auto;

	/*垂直*/
	display: flex;
	justify-content: center;
    flex-direction: column;
    align-items: center;
	/*垂直*/
	
	
	animation: 
	coverphotoin 1s 0.5s both;
}
.course-video-contaniner{
	display: flex;
	width: 100vw;
	/*height: 50px;*/
	/*overflow: auto;*/
    margin-top: 20px;
	animation: 
	coverphotoin 1s 0.5s both;
}
.box1{
	/*background-color: black;*/
	float: left;
  	/* width: 20%; */
  	height: 20%;
  	padding-top: 85px;
  	padding-left: 120px;

  	color: white;
}
.box2{
	/*background-color: white;*/
	float: left;
  	width: 60%;
  	height: 20%;
  	padding-top: 70px;
  	padding-bottom: 20px;

  	text-align: center;
  	font-size: 40px;
  	font-weight: 50;
  	color: white;
}
.box2-second-title{
	/*background-color: white;*/
  	font-size: 25px;
}
.course-video-area{
	/* width: 80vw; */
	height: 480px;
    background-color: rgb(255,255,255,0.5);
    display: flex;
}
.course-video-area video {
    width: 480px;
    height: 480px;
}
.course-video-list {
    height: 100%;
}
.course-video-list img {
    height: inherit;
}
/*看課下方欄*/
.course-status{
	position: relative;
	width: 100vw;
	/*height: 200px;*/
	/*background-color: #F0F0F0;*/

	display: inline-flex;
	justify-content: center;
    flex-direction: column;
    align-items: center;
}
.course-status-wrapper{
	width: 1280px;
	height:120px;
	padding:10px;

	/*水平置中*/
	display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    /*水平置中*/

    overflow: auto;
}
.course-status-box{
	float: left;
  	width: 20%;
  	/*height: 150px;*/

  	padding: 5px;

  	/*水平置中*/
	display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    /*水平置中*/


  	text-align: center;
}
.course-status-svg{
	position: relative;
	display: flex;
	width: 50px;
	padding-right: 20px;
}
.course-status-svg-2{
	position: relative;
	display: flex;
	width: 50px;
	padding-right: 20px;
}
.course-status-box-text{
	position: relative;
	display: flex;
	color: #324D5B;
	font-size: 20px;
}
.course-status-devider{
	float: left;
  	width: 1px;
  	height: 60%;
  	background-color: #324D5B;
  	border-radius: 50px;
  	padding: 1px;

}
.course-status-devider-sm{
	float: left;
  	width: 1px;
  	height: 60%;
  	background-color: #324D5B;
  	border-radius: 50px;
  	padding: 1px;
}
.course-status-pricetag{
	float: left;
  	width: 10%;
  	/*height: 100px;*/

  	/*padding: 5px;*/
  	color: #324D5B;

  	text-align: center;
}
.course-status-price{
	float: left;
  	/*width: 20%;*/
  	/*height: 100px;*/

  	color: #324D5B;

  	text-align: center;
  	font-size: 40px;
}
.course-status-buy-btn{
	float: left;
	margin-left: 50px;

  	display: inline-block;
	text-decoration: none;
	text-align: center;
	line-height: 33px;

	width: 180px;
	height: 50px; 
	font-size: 18px;
	line-height: 50px;
	color: white;
	background-color: #E0185D;
	border-radius: 10px;

	transition: all 0.2s;
	transition-timing-function: ease;
}
.course-but-group-sm{
	display: flex;
	width: 100vw;
	height: 30px;
	background-color: orange;
}
@media (min-width: 900px){
	.course-video-items{
		display: none;
	}
	.course-status-pricetag-sm{
		display: none;
	}
	.course-status-price-sm{
		display: none;
	}
	.course-status-buy-btn-sm{
		display: none;
	}
	.buy-btn-section-sm{
		display: none;
	}
	.buy-info-section-sm{
		display: none;
	}
}
</style>
