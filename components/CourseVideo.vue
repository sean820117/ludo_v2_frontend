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
            <!-- <video v-if="currentVideo" :src="currentVideo" controls></video> -->
            <iframe class="course-video-iframe" :src="currentVideo" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <div class="course-video-list" v-if="course_id" :class="is_payed ? '':'no-drop'">
                <div 
                    v-for="item in courseDataSet[course_id].sub_course" 
                    :key="item.title"
                    @click="changeCurrentVideo(item.link)">
                    <course-video-list-item :title="item.title"/>
                </div>
            </div>
        </div>
        <div class="course-video-list-light-box" v-if="lightBoxShowed" :class="is_payed ? '':'no-drop'">
            <div class="course-video-list-m" v-if="course_id">
                <div 
                    v-for="item in courseDataSet[course_id].sub_course" 
                    :key="item.title"
                    @click="changeCurrentVideo(item.link);hideLightBox()">
                    <course-video-list-item :title="item.title"/>
                </div>
            </div>
            <div class="course-video-list-m-back">
                <button class="course-video-list-m-back-btn" @click="hideLightBox()">返回</button>
            </div>
        </div>
        <div class="course-video-items" @click="showLightBox()">單元一覽 ></div>
    </div>
</template>

<script>
import CourseVideoListItem from '~/components/CourseVideoListItem.vue'

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

export default {
    data:() => ({
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
        currentVideo: "",
        lightBoxShowed:false,
    }),
    components: {
		CourseVideoListItem,
    },
    props: {
        course_id: String,
        is_payed:Boolean,
    },
    methods: {
        changeCurrentVideo(link) {
            if (this.is_payed) {
                this.currentVideo = link;
            } else {
                window.alert("購買後即可觀看");
            }
        },
        showLightBox() {
            this.lightBoxShowed = true;
        },
        hideLightBox() {
            this.lightBoxShowed = false;
        }
    },
    mounted: function () {
        this.currentVideo = this.courseDataSet[this.course_id].sub_course[0].link;
    },
}
</script>

<style>
.no-drop {
    cursor: no-drop;
}
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
    .course-video-area .course-video {
        width: 480px;
        height: 480px;
    }
    .course-video-list {
        /* display: flex;
        flex-direction: column; */
        overflow: scroll;
        width:300px;
    }
    .course-video-list-m {
        display: none;
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
    .course-video-iframe {
        width: 100vw;
        height: 100vw;
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
        margin-top: -7px;
    }
    .course-video-list {
        display: none;
    }
    .course-video-list-light-box {
        position: fixed;
        height: 100vh;
        top: 60px;
        width: 100vw;
        background: #324D5B;
        z-index: 2;
    }
    .course-video-list-m {
        height: 70vh;
        /* padding-bottom: 20vh; */
        
        width: 100vw;
        overflow: scroll;
    }
    .course-video-list-m-back {
        width: 100vw;
        height: 20vh;
        background: #324D5B;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .course-video-list-m-back-btn {
        font-size: 16px;
        width: 135px;
        height: 38px;
        border-radius: 23px;
        background: #FFD72E;
    }
}
</style>
