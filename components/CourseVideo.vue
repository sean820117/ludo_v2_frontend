<template>
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
        <div class="course-video-items">單元一覽 ></div>
    </div>
</template>

<script>
import TempList from 'static/temp-list.png'
export default {
    data:() => ({
        TempList,
    }),
}
</script>

<style>
@media (min-width:900px) {
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
}
@media (max-width:899px) {
    /*看課區段*/
    .course-video{
        display: flex;
        width: 100vw;
        /* height: 70vh; */
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
        height: 40%;
        /*overflow: auto;*/
        /*垂直*/
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        /*垂直*/
        
        margin-top: 30px;
        animation: 
        coverphotoin 1s 0.5s both;
    }
    .box1{
        /*background-color: black;*/
        float: left;
        width: 100%;
        /*height: 20%;*/
        padding-top: 100px;
        text-align: center;
        /*padding-left: 120px;*/

        color: white;
    }
    .box2{
        /*background-color: white;*/
        float: left;
        width: 90%;
        /*height: 20%;*/
        padding-top: 50px;
        /*padding-bottom: 20px;*/

        text-align: center;
        font-size: 35px;
        font-weight: 50;
        line-height: 10px;
        color: white;
    }
    .box2-second-title {
        margin-top: 50px;
        font-size: 25px;
        line-height: 1.2em;
    }
    .course-video .box1.small{
        padding: 0;
        height: 5px;
    }
    .course-video-area {
        width: 100vw;
        /* height: 50%; */
        /* margin: 100px; */
        background-color: rgb(255,255,255,0.5);
    }
    .course-video-area video {
        width: 100%;
    }
    .course-video-items{
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 35px;
        background-color: #2E2D2D;

        text-align: center;
        font-size: 20px;
        line-height: 20px;

        padding: 8px;
        color: white;
    }
    .course-video-list {
        display: none;
    }
}
</style>
