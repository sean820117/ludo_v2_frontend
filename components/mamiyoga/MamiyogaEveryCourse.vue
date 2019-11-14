<template>
    <div class="mamiyoga-each-course">
        <mamiyoga-mail-header btnText="紀錄" bgColor="#9BAEB2" ftColor="white" nextTo="/menu"></mamiyoga-mail-header>
        <h3 v-html="getTitle"></h3>
        <div style="position:relative;">
            <!-- <video class="mamiyoga-course-video" controls>
                <source :src="getVideoUrl" type="video/mp4">
                Your browser does not support the video tag.
            </video> -->
            <div class="iframe-container">
                <!-- <iframe :src="getVideoUrl" style="width: 100%;height:100%;position:absolute;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> -->
                <iframe v-if="!is_switched" :src="getVideoUrl" style="width: 100%;height:100%;position:absolute;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                <iframe v-if="is_switched" :src="getJpVideoUrl" style="width: 100%;height:100%;position:absolute;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            <div class="course-bookmark">
                <img :src="getChapterFlag" alt="">
            </div>
        </div>
        <!-- <div class="mamiyoga-course-middle">
            <p>觀看次數&nbsp;110</p>
        </div> -->
        <div class="mamiyoga-course-bottom">
            <div class="switch-lang">
                <input type="radio" name="lang" id="lang-ch" checked>
                <input type="radio" name="lang" id="lang-jp">
                <div class="switch-lang-label">
                    <label @click="is_switched = false" class="switch-lang-btn btn-ch" for="lang-ch" style="float:left;margin-right:5px;">中文</label>
                    <label @click="is_switched = true" class="switch-lang-btn btn-jp" for="lang-jp">日文</label>
                </div>
            </div>
            <div class="mamiyoga-course-bottom-content first">
                <h5>{{$t('course_little_title_1')}}</h5>
                <div class="mamiyoga-course-bottom-first">
                    <p v-html="getCourseIntroduction">{{getCourseIntroduction}}</p>
                </div>
            </div>
            <div class="mamiyoga-course-bottom-content second">
                <h5>{{$t('course_little_title_2')}}</h5>
                <p>{{getPoseAmount + $t('course_little_text')}}</p>
                <div class="mamiyoga-course-bottom-second">
                    <div class="mamiyoga-course-bottom-second-content-li" v-for="(pose ,i) in getPoses" :key="i">
                        <!-- <img src="/mamiyoga/num/num01.svg" alt=""><p>{{pose_brief}}</p> -->
                        <p>{{i+1}}</p><p>{{pose.pose_brief}}</p>
                    </div>
                </div>
            </div>
            <div class="mamiyoga-go-to-divide-btn">
                    <!-- <div style="margin:5vh auto 2vh;line-height:35px;" class="course-divide-btn">
                        <router-link :to="'/mamiyoga/course/practice/' + goPractice" style="text-decoration:none;display:block;height:100%;">
                        動作教學
                        </router-link>
                    </div> -->
                    <div style="margin:5vh auto 2vh;line-height:35px;" class="course-divide-btn" @click="clickPractice">
                        {{$t('course_pose_btn')}}
                    </div>
                    <!-- <div style="position: relative;">
                        <div style="margin:2vh auto;line-height:35px;color:#EEEFEA;" @click="$router.push('/aiassistant')" class="course-divide-btn">
                            {{$t('menu_nav_text_record')}}
                        </div>
                        <div class="course-teach-question-box" @click="openExplainBox">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/quest-icon.png" alt="唐幼馨">
                        </div>
                    </div> -->
                <!-- <img @click="clickPractice" class="have-ai-icon" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ai-badge.png" alt="" v-if="getAiTeacher"> -->
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
    data:()=>({
        is_switched: false,
    }),
    components: {
        MamiyogaMailHeader,
        MamiyogaBtn,
    },
    methods:{
        clickPractice(){
            this.$emit('clickPractice')
            // sessionStorage["course_" + this.course_data.id + "_current_pose_id"] = 'first'
            // if(this.$i18n.locale == 'JP') {
            //     this.$router.push('/jp/course/practice/' + this.course_data.id)
            // } else if(this.$i18n.locale == 'zh-CN') {
            //     this.$router.push('/zh-CN/course/practice/' + this.course_data.id)
            // } else {
            //     this.$router.push('/course/practice/' + this.course_data.id)
            // }
        },
        openExplainBox(){
            this.$emit('openExplainBox')
        }
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
                // console.log(this.course_data);
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
        getJpVideoUrl(){
            if (this.course_data) {
                return this.course_data.video_url_jp;
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
        getPoses(){
            if (this.course_data) {
                return this.course_data.poses;
            } else {
                return [];
            }
        },
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
.iframe-container {
    width: 100vw;
    min-height:31vh;
    position:relative;
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
.switch-lang input {
    display: none;
}
.switch-lang-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width:40px;
    height:20px;
    background: #BFBDBD;
    color:#fff;
    padding:0;
    font-size:12px;
    border-radius: 20px;
    box-shadow: 1px 2px 6px rgba(0,0,0,.3);
}
.switch-lang-label {
    width: 85px;
    height: 25px;
    float: right;
}
.switch-lang-label label {
    cursor: pointer;
}
#lang-ch:checked ~ .switch-lang-label .switch-lang-btn.btn-ch,
#lang-jp:checked ~ .switch-lang-label .switch-lang-btn.btn-jp {
    background: #97A8AF;
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
.course-divide-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    cursor: pointer;
    background-color: #97A8AF;
    color: #EEEFEA;
}
.course-divide-btn a:visited {
    color: #EEEFEA;
}
.mamiyoga-go-to-divide-btn {
    position: relative;
}
.have-ai-icon {
    position: absolute;
    top: -2vh;
    left: 27vw;
    width: 40px;
    cursor: pointer;
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
.course-teach-question-box {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    left: calc(55vw + 70px);
}
.course-teach-question-box img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}
@media (min-width: 769px) {
    .mamiyoga-each-course,.mamiyoga-course-video,
    .mamiyoga-course-middle,.mamiyoga-course-bottom,
    .mamiyoga-course-bottom-content,
    .mamiyoga-course-bottom-first, .mamiyoga-course-bottom-second,
    .iframe-container {
        width: 100%;
    }
    .iframe-container {
        min-height: 260px;
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
    .have-ai-icon {
        top: -15px;
        left: 130px;
        width: 40px;
    }
    .course-teach-question-box {
        /* right: 30px;
        top: 270px; */
        left:320px;
    }
    
}
</style>
