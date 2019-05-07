<template>
    <!-- 看課區段 -->
    <div class="course-video">
        <div class="course-video-contaniner">
            <div class="box1"> <router-link class="box1_link" to="/go2university#all-course">{{ null }}</router-link>{{ null }}</div>
            <div class="box2" :style="{color:currentCourse.color}">
                {{ currentSubCourse.title }}
                <br>
                <div class="box2-second-title"> {{ currentSubCourse.title2 }} </div>
            </div>
            <!-- <div class="box1 box1-small"></div> -->
        </div>
        
        <div class="course-video-area">
            <!-- <video v-if="currentVideo" :src="currentVideo" controls></video> -->
            <iframe class="course-video-iframe" :src="currentSubCourse.link" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <div class="course-video-list" v-if="course_id" :class="is_payed ? '':'no-drop'">
                <div 
                    v-for="item in currentCourse.sub_course" 
                    :key="item.id"
                    @click="changeCurrentSubCourse(item)">
                    <course-video-list-item :title="item.title" :title2="item.title2" :background="currentSubCourse.id == item.id ? '#a2a2a2':''"/>
                    <div v-if="item.id == 2 || item.id == 8" class="free-course">試看</div>
                </div>
            </div>
        </div>
        <course-video-list-light-box :is_payed="is_payed" :course="currentCourse" :lightBoxShowed.sync="lightBoxShowed" ></course-video-list-light-box>
        <div class="course-video-items" @click="showLightBox()">單元一覽 ></div>
    </div>
</template>

<script>
import CourseVideoListItem from '~/components/CourseVideoListItem.vue'
import CourseVideoListLightBox from '~/components/CourseVideoListLightBox.vue'

export default {
    data:() => ({
        lightBoxShowed:false,
        course_name:"",
        currentCourse:Object,
    }),
    components: {
        CourseVideoListItem,
        CourseVideoListLightBox,
    },
    props: {
        course_id: String,
        is_payed:Boolean,
        currentSubCourse:Object,
    },
    methods: {

        changeCurrentSubCourse(item) {
            if (this.is_payed || item.id == 2 || item.id == 8) {
                this.currentSubCourse = item;
                this.$emit('update:currentSubCourse', this.currentSubCourse);
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
    async mounted() {
        this.currentCourse  = await import('~/static/data/course/' + this.course_id + '.js');
        this.course_name = this.currentCourse.course_name;
    },
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
    .box1_link {
        color: white;
        line-height: 1.2em;
        /* text-decoration: underline; */
    }
    .box1_link:hover {
        color: #FFD72E;
        text-decoration: none;
    }
    .box1_link:active {
        color: white;
        text-decoration: none;
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
        margin-bottom: 30px;
    }
    .course-video-area .course-video-iframe {
        width: 480px;
        height: 480px;
    }
    .course-video-list {
        /* display: flex;
        flex-direction: column; */
        overflow-y: scroll;
        width:300px;
        height: 480px;
    }
    .course-video-list-m {
        display: none;
    }
}
.free-course {
    position: absolute;
    display: inline;
    z-index: 0;
    background: #ffc107;
    border-radius: 50px;
    padding: 3px 9px 3px 9px;
    right: 7px;
    bottom: 25px;
    font-size: 10px;
}
@media (max-width:899px) {
    /*看課區段*/
    .course-video{
        display: flex;
        width: 100vw;
        /* height: 70vh; */
        /* background-color: #324D5B; */
        background: black;

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
        padding-top: 50px;
        text-align: center;
        /*padding-left: 120px;*/

        color: white;
    }
    .box1_link {
        color: white;
        line-height: 1.2em;
        /* text-decoration: underline; */
    }
    .box1_link:hover {
        color: #FFD72E;
        text-decoration: none;
    }
    .box1_link:active {
        color: white;
        text-decoration: none;
    }
    .box2{
        /*background-color: white;*/
        float: left;
        width: 90%;
        /*height: 20%;*/
        padding-top: 17px;
        /*padding-bottom: 20px;*/

        text-align: center;
        font-size: 25px;
        font-weight: 50;
        line-height: 10px;
        color: white;
        line-height: 1em;
    }
    .box2-second-title {
        margin-top: 23px;
        margin-bottom: 23px;
        font-size: 17px;
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
        background-color: #A7A6A6;

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
}
</style>
