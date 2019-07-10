<template>
<div><router-link :to="'/mommiyoga/course/' + goCourse" style="color:#000;">
    <div class="course-block">
        <div class="course-aimark">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ai-badge.png" alt="" v-if="have_ai">
        </div>
        <div class="course-block-background" :style="{backgroundImage:'url(https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-preview-'+bgImage+'.jpg)',backgroundSize:'cover'}"></div>
        <div class="course-block-contain" :style="{backgroundColor:blockColor}">
            <div class="course-block-title">
                <h4 v-html="blockTitle"></h4>
                <div class="course-block-detail">
                    <!-- <div class="course-block-icon">
                        <img src="/mamiyoga/course-block-icon-pose.svg" alt="">
                        <p>{{poseText}}個姿勢</p>
                    </div>
                    <div class="course-block-icon">
                        <img src="/mamiyoga/course-block-icon-time.svg" alt="">
                        <p>長度{{timeText}}分鐘</p>
                    </div>
                    <div class="course-block-icon">
                        <img src="/mamiyoga/course-block-icon-ai.svg" alt="">
                        <p>{{aiText}}個AI練習</p>
                    </div> -->
                    
                    <div class="course-block-icon">
                        <img :src="'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-time-'+timeSrc+'.png'" alt="">
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</router-link></div>
</template>

<script>
export default {
    data:()=>({
        
    }),
    props: {
        bgImage: String,
        blockColor: String,
        blockTitle: String,
        poseText: Number,
        timeText: Number,
        aiText: Number,
        timeSrc: String,
        goCourse: String,
        have_ai: false,
    },
}
</script>

<style>

.course-block {
    position: relative;
    width: 90vw;
    height: 26vh;
    /* background: red; */
    margin: 3vh auto 0;
    border-radius: 2vh;
    box-shadow: 0 3px 10px rgba(0,0,0,.2);
}
.course-aimark {
    width: 30px;
    position: absolute;
    top: -15px;
    right: 15px;
}
.course-aimark img {
    width: 45px;
    height: 45px;
}
.course-block-background {
    /* position: absolute;
    top: 0; */
    width: 100%;
    height: 18vh;
    border-radius: 2vh 2vh 0 0;
    background-repeat: no-repeat;
    background-position: center center;
}
.course-block-contain {
    position: absolute;
    width: 90vw;
    height: 8vh;
    bottom: 0;
    border-radius: 0 0 2vh 2vh;
    padding: 0;
}
.course-block-title {
    width: 88vw;
    height: 8vh;
    /* background: blue; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.course-block-title h4 {
    margin-left:10px; 
    font-size:12px;
    font-weight: 400; 
}
.course-block-detail {
    /* background: green; */
    width: 25vw;
    height: 75px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
}
.course-block-icon {
    float: left;
    background: white;
    display: flex;
    justify-content: center;
    flex-wrap:wrap; 
}
.course-block-icon p {
    font-size: 10px;
    color: #97A8AF;
}
.course-block-icon:nth-child(2) {
    border-left: 1px solid #97A8AF;
    border-right: 1px solid #97A8AF;
    box-sizing: border-box;
}
/* .course-block-icon img {
    height: 20px;
    margin-bottom: 5px; 
} */
.course-block-icon img {
    height: 4vh;
}
@media (min-width: 769px) {
    .course-block {
        width: 90%;
        height: 250px;
        margin: 25px auto 0;
    }
    .course-block-contain {
        width: 100%;
        height: 75px;
    }
    .course-block-background {
        height: 175px;
    }
    .course-block-title {
        width: 90%;
        height: 75px;
    }
    .course-block-detail {
        width: 30%;
    }
    .course-block-icon img {
        height: 35px;
    }
}
@media (max-width: 769px) and  (orientation:landscape) {
    .course-block {
        height: 50vh;
        margin-top: 7vh;
    }
    .course-block-background {
        height: 40vh;
    }
    .course-block-contain,.course-block-title {
        height: 13vh;
    }
    .course-block-icon img {
        height: 7vh;
    }
}

</style>
