<template>
    <div>
        <div class="aiassistant-page" v-if="!open_explain">
            <mamiyoga-mail-header headerTitle="AI助教" nextTo="/mamiyoga/menu" mailheaderTitle="white"></mamiyoga-mail-header>
            <div class="aiassistant-intro">
                <p>正確的運動姿勢事半功倍，<br>優秀的AI教練幫助您改善姿勢！<br><br>立即上傳您的影片體驗。</p>
                <div>
                    <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" btnText="影片教學" style="margin-bottom:5vh;"></mamiyoga-btn>
                </div>
                <div class="teach-question-box" @click="open_explain = true">
                    <img src="/mamiyoga/teach-question-btn.svg" alt="">
                </div>
            </div>
            <div class="aiassistant-container">
                <h4>所有動作</h4>
                <mamiyoga-aiassistant-pose-block poseText="產後矯正姿勢"></mamiyoga-aiassistant-pose-block>
                <mamiyoga-aiassistant-pose-block poseText="產後矯正姿勢"></mamiyoga-aiassistant-pose-block>
                <mamiyoga-aiassistant-pose-block poseText="產後矯正姿勢"></mamiyoga-aiassistant-pose-block>
                <mamiyoga-aiassistant-pose-block poseText="產後矯正姿勢"></mamiyoga-aiassistant-pose-block>
            </div>
        </div>
        <mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box>
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue'
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import MamiyogaAiassistantPoseBlock from '~/components/mamiyoga/MamiyogaAiassistantPoseBlock.vue'
import MamiyogaExplainBox from '~/components/mamiyoga/MamiyogaExplainBox.vue'
export default {
    layout:'mommiyoga',
    components: {
        MamiyogaMailHeader,
        MamiyogaBtn,
        MamiyogaAiassistantPoseBlock,
        MamiyogaExplainBox,
    },
    data:()=>({
        open_explain: false,
    }),
    methods: {
        closeExplain(){
            this.open_explain = false
        }
    }
}
</script>

<style>

.aiassistant-page {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.aiassistant-intro {
    width: 100vw;
    height: 40vh;
    background-color: #24798F; 
    position: absolute;
    top: 0;
    /* background-image: url('/mamiyoga/teach-title-img.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;   */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.aiassistant-intro p {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 14px;
    margin: 13vh 0 1vh;
}
.aiassistant-container {
    width: 100vw;
    height: auto;
    margin-top: 34vh;
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
.teach-question-box {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 33vh;
    right: 6vw;
}
@media (min-width: 769px) {
    .aiassistant-page,.aiassistant-container {
        width: 100%;
    }
    .aiassistant-intro {
        height: 360px;
        width: 450px;
    }
    .teach-question-box {
        top: 300px;
        right: 35px;
    }
    .aiassistant-container {
        margin-top: 320px; 
    }
}
</style>
