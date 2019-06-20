<template>
    <div class="course-block" :style="{backgroundImage:'url('+bgImage+')',backgroundSize:'cover'}">
        <div class="course-bookmark">
            <img :src="unitSrc" alt="">
        </div>
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
                        <img :src="poseSrc" alt="">
                        
                    </div>
                    <div class="course-block-icon">
                        <img :src="timeSrc" alt="">
                        
                    </div>
                    <div class="course-block-icon">
                        <img :src="aiSrc" alt="">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bgImage: String,
        blockColor: String,
        blockTitle: String,
        poseText: Number,
        timeText: Number,
        aiText: Number,
        poseSrc: String,
        timeSrc: String,
        aiSrc: String,
        unitSrc: String,
    },
}
</script>

<style>
@media (max-width: 899px) {
    .course-block {
        position: relative;
        width: 90vw;
        height: 26vh;
        /* background: red; */
        margin: 3vh auto 0;
        border-radius: 2vh;
        box-shadow: 0 3px 10px rgba(0,0,0,.2);
    }
    .course-bookmark {
        width: 30px;
        position: absolute;
        top: -5px;
        left: 15px;
    }
    /* .course-bookmark p {
        position: absolute;
        top: 10px;
        left: 13px;
        width: 20px;
        line-height: 13px;
        font-size: 12px;
        text-align: center;
    } */
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
        width: 45vw;
        height: 7vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 10px;
    }
    .course-block-icon {
        float: left;
        width: 15vw;
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
}
</style>
