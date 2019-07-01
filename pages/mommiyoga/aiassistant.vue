<template>
    <div>
        <div class="aiassistant-page" v-if="!open_explain">
            <mamiyoga-mail-header headerTitle="AI助教" nextTo="/mamiyoga/menu" mailheaderTitle="white"></mamiyoga-mail-header>
            <div class="aiassistant-intro">
                <p>正确的运动姿势事半功倍，<br>优秀的AI教练帮助您改善姿势！<br><br>立即上传您的影片体验。</p>
                <div>
                    <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" btnText="影片教学" style="margin-bottom:5vh;"></mamiyoga-btn>
                </div>
                <div class="teach-question-box" @click="open_explain = true">
                    <img src="/mamiyoga/teach-question-btn.svg" alt="">
                </div>
            </div>
            <div class="aiassistant-container">
                <h4>所有动作</h4>
                <mommiyoga-aiassistant-pose-block v-for="array in have_ai_array" 
                :key="array.id" :poseText="array.title" :goRecord="array.id"></mommiyoga-aiassistant-pose-block>
            </div>
        </div>
        <mommiyoga-explain-block v-if="open_explain" @closeExplain="closeExplain"></mommiyoga-explain-block>
    </div>
</template>

<script>
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue'
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import MommiyogaAiassistantPoseBlock from '~/components/mamiyoga/MommiyogaAiassistantPoseBlock.vue'
import MommiyogaExplainBlock from '~/components/mamiyoga/MommiyogaExplainBlock.vue'
export default {
    layout:'mommiyoga',
    components: {
        MamiyogaMailHeader,
        MamiyogaBtn,
        MommiyogaAiassistantPoseBlock,
        MommiyogaExplainBlock,
    },
    data:()=>({
        open_explain: false,
    }),
    props: {
        courses:Array,
        have_ai_array:Array,
    },
    methods: {
        closeExplain(){
            this.open_explain = false
        }
    },
    async mounted() {
        if (process.client) {
            this.courses = await require('~/config/mommiyoga-course')
            this.have_ai_array = this.courses.filter(course => course.ai_teacher === true)
        }
    },
    computed:{
        // getHaveAi(){
        //     if (this.courses) {
        //         const result_array = this.courses.filter(course => course.tags.find(ai_teacher => ai_teacher === true));
        //         return result_array;
        //     } else {
        //         return [];
        //     }
        // },
    },
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
