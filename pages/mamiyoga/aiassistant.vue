<template>
    <div class="aiassistant-page">
        <mamiyoga-mail-header headerTitle="AI助教"></mamiyoga-mail-header>
        <div class="aiassistant-intro">
            <p>正確的運動姿勢事半功倍，<br>優秀的AI教練幫助您改善姿勢！<br><br>立即上傳您的影片體驗。</p>
            <mamiyoga-square-btn bgColor="#D1D1D1" ftColor="#707070" btnText="開始教學"></mamiyoga-square-btn>
        </div>
        <div class="aiassistant-container">
            <h4>所有動作</h4>
            <mamiyoga-aiassistant-pose-block poseText="產後矯正姿勢"></mamiyoga-aiassistant-pose-block>
            <mamiyoga-aiassistant-pose-block poseText="產後矯正姿勢"></mamiyoga-aiassistant-pose-block>
            <mamiyoga-aiassistant-pose-block poseText="產後矯正姿勢"></mamiyoga-aiassistant-pose-block>
            <mamiyoga-aiassistant-pose-block poseText="產後矯正姿勢"></mamiyoga-aiassistant-pose-block>
        </div>
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue'
import MamiyogaSquareBtn from '~/components/mamiyoga/MamiyogaSquareBtn.vue'
import MamiyogaAiassistantPoseBlock from '~/components/mamiyoga/MamiyogaAiassistantPoseBlock.vue'
export default {
    components: {
        MamiyogaMailHeader,
        MamiyogaSquareBtn,
        MamiyogaAiassistantPoseBlock,
    }
}
</script>

<style>
@media (max-width: 899px) {
    .aiassistant-page {
        width: 100vw;
        min-height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    }
    .aiassistant-intro {
        width: 90vw;
        height: 30vh;
        margin: 1vh 5vw;
        border-radius: 10px;
        background-image: url('/mamiyoga/teach-title-img.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;  
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .aiassistant-intro p {
        width: 100%;
        text-align: center;
        color: white;
        font-size: 14px;
        margin: 6vh 0 1vh;
    }
    .aiassistant-container {
        width: 100vw;
        height: auto;
        margin: 1vh 0 0;
        padding-bottom: 10px;
    }
    .aiassistant-container h4 {
        text-align: center;
        font-size: 18px;
        color: #51636F;
        font-weight: 400;
        border-bottom: solid 1px rgba(112,112,112,.3);
        padding-bottom: 1vh;
        margin: 0 5vw;
    }
}
</style>
