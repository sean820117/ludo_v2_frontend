<template>
    <div class="mamiyoga-each-course">
        <mamiyoga-mail-header btnText="紀錄" bgColor="#9BAEB2" ftColor="white" nextTo="/mamiyoga/menu"></mamiyoga-mail-header>
        <h3>{{getTitle}}</h3>
        <div style="position:relative;">
            <video class="mamiyoga-course-video" controls>
                <source :src="getVideoUrl" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="course-bookmark">
                <img :src="getChapterFlag" alt="">
            </div>
        </div>
        <div class="mamiyoga-course-middle">
            <p>观看次数&nbsp;110</p>
        </div>
        <div class="mamiyoga-course-bottom">
            <!-- <div class="mamiyoga-course-bottom-content first">
                <h5></h5>
                <div class="mamiyoga-course-bottom-first">
                    <p v-html="getCourseIntroduction">{{getCourseIntroduction}}</p>
                </div>
            </div> -->
            <div class="mamiyoga-course-bottom-content second">
                <h5>动作步骤</h5>
                <!-- <p>{{getPoseAmount}}</p> -->
                <!-- <div class="mamiyoga-course-bottom-second">
                    <div class="mamiyoga-course-bottom-second-content-li" v-for="(pose ,i) in getPoses" :key="i">
                        <p>{{i+1}}</p><p>{{pose.pose_brief}}</p>
                    </div>
                </div> -->
                <div class="mamiyoga-course-bottom-second">
                    <div class="mamiyoga-course-bottom-second-content-li" v-for="(description ,i) in getDescription" :key="i">
                        <p>{{i+1}}</p><p>{{description}}</p>
                    </div>
                </div>
            </div>
            <div class="mamiyoga-go-to-divide-btn">
                <router-link :to="'/mamiyoga/course/practice/' + goPractice"   style="text-decoration:none;">
                    <mamiyoga-btn btnText="上传影片" bgColor="#97A8AF" ftColor="#EEEFEA" style="margin:5vh 0 2vh;" class="course-divide-btn"></mamiyoga-btn>
                </router-link>
                <!-- <img src="/mamiyoga/ai-badge.svg" alt="" v-if="getAiTeacher"> -->
            </div>
        </div>
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue'
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
export default {
    props:{
        course_data:Object,
    },
    components: {
        MamiyogaMailHeader,
        MamiyogaBtn,
    },
    computed: {
        getTitle(){
            if (this.course_data) {
                return this.course_data.title;
            } else {
                return '';
            }
        },
        getChapterFlag(){
            if (this.course_data) {
                return this.course_data.chapter_flag;
            } else {
                return '';
            }
        },
        getPoseAmount(){
            if (this.course_data.poses) {
                console.log(this.course_data);
                return this.course_data.poses.length;
            } else {
                return '';
            }
        },
        getVideoUrl(){
            if (this.course_data) {
                return this.course_data.video_url;
            } else {
                return '';
            }
        },
        getAiTeacher(){
            if(this.course_data) {
                return this.course_data.ai_teacher;
            } else {
                return '';
            }
        },
        goPractice(){
            if(this.course_data) {
                return this.course_data.id;
            } else {
                return '';
            }
        },
        getCourseIntroduction(){
            if (this.course_data) {
                return this.course_data.course_introduction;
            } else {
                return '';
            }
        },
        // getPoses(){
        //     if (this.course_data) {
        //         return this.course_data.poses;
        //     } else {
        //         return [];
        //     }
        // },
        getDescription(){
            if (this.course_data) {
                return this.course_data.pose_description
            } else {
                return []
            }
        }
    }
}
</script>

<style>

.mamiyoga-each-course {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.mamiyoga-course-video {
    width: 100vw;
    height: auto;
}
.course-bookmark {
    width: 30px;
    position: absolute;
    top: -10px;
    left: 20px;
}
.mamiyoga-each-course h3 {
    font-size: 24px;
    color: #51636F;
    text-align: center;
    font-weight: 400; 
    margin-bottom: 2vh; 
}
.mamiyoga-course-middle {
    width: 100vw;
    /* background: green; */
    padding: 1vh 5vw;
    text-align: right;
    border-bottom: solid thin rgba(112,112,112,.3); 
}
.mamiyoga-course-middle p {
    font-size: 12px;
    color: #5C5C5C;
}
.mamiyoga-course-bottom {
    /* background: red; */
    width: 100vw;
    /* height: 57vh; */
    margin-top:2vh; 
    padding: 0 5vw 3vh;
}
.mamiyoga-course-bottom-content {
    /* background: gray; */
    width: 90vw;
    height: auto;
}
.mamiyoga-course-bottom-content.first {
    margin-bottom: 1vh;
}
.mamiyoga-course-bottom-content h5 {
    font-size: 14px;
    color: #272727;
    font-weight: 400;
}
.mamiyoga-course-bottom-content p {
    font-size: 12px;
    color: #707070;
}
.mamiyoga-course-bottom-first,.mamiyoga-course-bottom-second {
    width: 90vw;
    padding: 3vw;
}
.course-divide-btn button {
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
}
.mamiyoga-go-to-divide-btn {
    position: relative;
}
.mamiyoga-go-to-divide-btn img {
    position: absolute;
    top: -2vh;
    left: 27vw;
}
.mamiyoga-course-bottom-second-content-li {
    min-height: 25px;
}
.mamiyoga-course-bottom-second-content-li p:first-child {
    float: left;
    background-color: #98A9AF;
    padding: 1px 5px;
    border-radius: 10px;
    color: white;
    margin: 0 6px 6px 0;  
}
.mamiyoga-course-bottom-second-content-li img {
    width: 20px;
    height: 15px;
    margin: 2px 2px 0 0;
    float: left;
}
@media (min-width: 769px) {
    .mamiyoga-each-course,.mamiyoga-course-video,
    .mamiyoga-course-middle,.mamiyoga-course-bottom,
    .mamiyoga-course-bottom-content,
    .mamiyoga-course-bottom-first, .mamiyoga-course-bottom-second {
        width: 100%;
    }
    .mamiyoga-course-middle {
        padding: 8px 25px;
    }
    .mamiyoga-course-bottom-first, .mamiyoga-course-bottom-second {
        padding: 15px 0 15px 15px;
    }
    .mamiyoga-course-bottom {
        margin-top:30px;
        padding: 0 25px 10px;
    }
    .mamiyoga-go-to-divide-btn img {
        top: -15px;
        left: 130px;
    }
    
}
</style>
