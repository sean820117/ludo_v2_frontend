<template>
    <div>
        <div class="aiassistant-page" v-if="!open_explain">
            <mamiyoga-mail-header headerTitle="AI助教" nextTo="/asamiyoga/menu" mailheaderTitle="white"></mamiyoga-mail-header>
            <div class="aiassistant-intro">
                <p>正确的运动姿势事半功倍，<br>优秀的AI教练帮助您改善姿势！<br><br>立即上传您的影片体验。</p>
                <!-- <div>
                    <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" btnText="影片教學" style="margin-bottom:5vh;"></mamiyoga-btn>
                </div> -->
                <div class="teach-question-box" @click="open_explain = true">
                    <img src="/mamiyoga/teach-question-btn.svg" alt="">
                </div>
            </div>
            <div class="aiassistant-container">
                <h4>所有动作</h4>
                <mamiyoga-aiassistant-pose-block v-for="aitake in aitakes" :key="aitake.id" 
                :poseText="aitake.title" :aitakeTo="aitake.taketo"
                ></mamiyoga-aiassistant-pose-block>
            </div>
        </div>
        <mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box>
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/asamiyoga/MamiyogaMailHeader.vue'
import MamiyogaBtn from '~/components/asamiyoga/MamiyogaBtn.vue'
import MamiyogaAiassistantPoseBlock from '~/components/asamiyoga/MamiyogaAiassistantPoseBlock.vue'
import MamiyogaExplainBox from '~/components/asamiyoga/MamiyogaExplainBox.vue'
export default {
    components: {
        MamiyogaMailHeader,
        MamiyogaBtn,
        MamiyogaAiassistantPoseBlock,
        MamiyogaExplainBox,
    },
    data:()=>({
        open_explain: false,
        aitakes:[
            {
                id:'1',
                title: '用空气启动身体',
                taketo: '',
            },
            {
                id:'2',
                title: '减缓腰部酸痛',
                taketo: '',
            },
            {
                id:'3',
                title: '',
                taketo: '',
            },
        ],
    }),
    methods: {
        closeExplain(){
            this.open_explain = false
        }
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
}
</style>
