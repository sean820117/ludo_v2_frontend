<template>
    <div class="practice-record">
        <div class="practice-record-intro" :style="{backgroundImage:'url(/mommiyoga/course/course-preview-'+bgImg+'.jpg)',}">
            <a @click="$router.go(-1)">
                <div class="practice-record-intro-close-box"></div>
            </a>
            <div class="practice-record-intro-title">
                <!-- <div :style="{backgroundImage:'url('+photoBy+')'}"></div> -->
                <div class="practice-record-photo-by" v-show="is_front"></div>
                <div class="practice-record-photo-by" v-show="!is_front"></div>
                <div class="practice-record-intro-title-font">
                    <h3 v-text="recordTitle">{{recordTitle}}</h3>
                    <p>拍摄时间建议：</p><p v-html="recordTime">{{recordTime}}</p><p>&nbsp;秒</p>
                </div>
            </div>
            <div class="practice-record-intro-btn-container">
                <router-link :to="'/mommiyoga/course/' + goCourse">
                    <mamiyoga-square-btn class="practice-record-intro-btn" 
                    bgColor="#D1D1D1" ftColor="#707070" btnText="回到课程"></mamiyoga-square-btn>
                </router-link>
                <!-- <mamiyoga-square-btn class="practice-record-intro-btn"
                bgColor="#97A8AF" ftColor="#ECEDE8" btnText="上传影片">
                </mamiyoga-square-btn> -->
                <div class="practice-record-square-btn">
                    <button class="practice-record-intro-btn">
                        <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="clickCourseVideoUpload">上传影片</label>  
                    </button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import MamiyogaSquareBtn from '~/components/mamiyoga/MamiyogaSquareBtn.vue'
export default {
    props: {
        bgImg: String,
        photoBy: String,
        recordTitle: String,
        recordTime: String,
        goCourse:String,
        is_front: false,
    },
    components: {
        MamiyogaSquareBtn,
    },
    methods: {
        clickCourseVideoUpload(e){
            this.$emit('handleCourseVideoUpload',e)
        }
    }
}
</script>

<style>

.practice-record-intro {
    width: 100vw;
    height: 40vh;
    padding:15px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 35% center;
}
.practice-record-intro-close-box {
    width: 30px;
    height: 30px;
    background-image: url('/mamiyoga/practice-record-close.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    float: right;
}
.practice-record-intro-title {
    width: 100vw;
    height: 65px;
    position: absolute;
    bottom: 10vh;
    left: 8vw;
}
.practice-record-photo-by {
    width: 50px;
    height: 65px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    margin-right: 10px; 
    float: left;
}
.practice-record-photo-by:first-child {
    background-image: url('/mommiyoga/teach-photoby-1.svg');
}
.practice-record-photo-by:nth-child(2) {
    background-image: url('/mommiyoga/teach-photoby-2.svg');
}
.practice-record-intro-title-font {
    height: 65px;
    float: left;
    color: white;
    margin-top: 15px; 
}
.practice-record-intro-title-font h3 {
    font-size: 1.2em;
    font-weight: bold;
}
.practice-record-intro-title-font p {
    float: left;
    font-size: 14px;
}
.practice-record-intro-title-font p:nth-child(3) {
    font-style: italic;
    margin-top: 2px;
}
.practice-record-intro-btn-container {
    width: 90vw;
    float: left;
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: space-around;
}
.practice-record-intro-btn {
    float: left;
}
.practice-record-square-btn {
    width: 100px;
    height: 35px;
    border-radius: 5px;
}
.practice-record-square-btn .practice-record-intro-btn {
    background-color: #97A8AF;
    color: #ECEDE8;
    border-style: none;
    width: 100px;
    height: 35px;
    border-radius: 5px;
    letter-spacing: 3px;
    display: block;
}
@media (min-width: 769px) {
    .practice-record-intro {
        width: 100%;
        height: 400px;
    }
    .practice-record-intro-title,
    .practice-record-intro-btn-container  {
        width: calc(100% - 30px);
    }
    .practice-record-intro-title {
        bottom: 100px;
        left: 60px;
    }
}

</style>
