<template>
    <div class="mamiyoga-each-course">
        <mamiyoga-mail-header btnText="紀錄" bgColor="#9BAEB2" ftColor="white" nextTo="/mamiyoga/menu"></mamiyoga-mail-header>
        <h3 v-html="courseTitle">{{courseTitle}}</h3>
        <div style="position:relative;">
            <video class="mamiyoga-course-video" controls>
                <source :src="video_url" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="course-bookmark">
                <img :src="src" alt="">
            </div>
        </div>
        <div class="mamiyoga-course-middle">
            <p>觀看次數&nbsp;110</p>
        </div>
        <div class="mamiyoga-course-bottom">
            <div class="mamiyoga-course-bottom-content first">
                <h5>課程簡介</h5>
                <p>{{courseTime}}分鐘</p>
                <div class="mamiyoga-course-bottom-first">
                    <p>骨盆位於身體上半部跟下半部的中間點，它不單單只是分隔開身體，也扮演著支撐身體的重要角色哦。
                        <br>為什麼說它重要呢？讓我們一起觀看麻美老師的說明與教學
                    </p>
                </div>
            </div>
            <div class="mamiyoga-course-bottom-content second">
                <h5>姿勢簡介</h5>
                <p>{{poseHave}}個姿勢</p>
                <div class="mamiyoga-course-bottom-second">
                    <p>一、骨盆矯正的姿勢<br>二、躺著也可以做的骨盆矯正的姿勢<br>三、產後矯正姿勢</p>
                </div>
            </div>
            <router-link to="/mamiyoga/divide1" style="text-decoration:none;">
                <mamiyoga-btn btnText="影片分段" bgColor="#97A8AF" ftColor="#EEEFEA" style="margin-bottom:3vh;" class="course-divide-btn"></mamiyoga-btn>
            </router-link>
        </div>
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue'
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
export default {
    props:{
        courseTitle:String,
        courseTime:Number,
        poseHave:Number,
        src: String,
    },
    components: {
        MamiyogaMailHeader,
        MamiyogaBtn,
    }
}
</script>

<style>
@media (max-width: 899px) {
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
        height: 57vh;
        margin-top:2vh; 
        padding: 0 5vw;
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
}
</style>
