<template>
    <div class="golf-demo-container">
        <golf-demo-intro v-if="stage==0" @nextStage="nextStage" @setUserId="setUserId"/>
        <!-- <golf-demo-select v-if="stage==1" @nextStage="nextStage"/> -->
        <golf-demo-recorder v-if="stage==2" @nextStage="nextStage" :user_id="user_id" @setRecorder="setRecorder" @setResult="setResult"/>
        <golf-demo-analyse-and-loading v-if="stage==3" @nextStage="nextStage" :video_recorder="video_recorder" @setResult="setResult"/>
        <!--  <golf-demo-analyse-result v-if="stage==4" @nextStage="nextStage" :analyse_result="analyse_result" @goStage="goStage"/> -->
    </div>
</template>

<script>
import GolfDemoIntro from '~/components/golf/GolfDemoIntro.vue';
import GolfDemoSelect from '~/components/golf/GolfDemoSelect.vue';
import GolfDemoRecorder from '~/components/golf/GolfDemoRecorder.vue';
import GolfDemoAnalyseAndLoading from '~/components/golf/GolfDemoAnalyseAndLoading.vue';
import GolfDemoAnalyseResult from '~/components/golf/GolfDemoAnalyseResult.vue';
import axios from 'axios';

export default {
    data:()=>({
        stage:0,
        user_id:"tester",
        video_recorder:{},
        analyse_result:{
            video_url:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/training/sport/output/golf_standard_1_ViMczM4CFeZDorQrosQquL",
        },
    }),
    components: {
        GolfDemoIntro,
        GolfDemoSelect,
        GolfDemoRecorder,
        GolfDemoAnalyseAndLoading,
        GolfDemoAnalyseResult,
    },
    async mounted() {
        if (process.client) {
        }
        await axios.get('http://localhost:5000/stop-estimation')
    },
    async destroyed() {
        await axios.get('http://localhost:5000/stop-estimation')
    },
    methods: {
        nextStage() {
            this.stage++;
            // skip stage 1
            if (this.stage == 1) {
                this.stage++;
            }
            if (this.stage == 4) {
                this.$router.push('/result?filename=' + this.analyse_result.file_name);
            }
            if (this.stage > 4) {
                this.stage = 0;
            }
        },
        setUserId(id) {
            this.user_id = id;
        },
        setRecorder(video_recorder) {
            this.video_recorder = video_recorder;
        },
        setResult(analyse_result) {
            this.analyse_result = analyse_result;
        },
        goStage(stage) {
            this.stage = stage;
        }
    },
}
</script>

<style>
.golf-demo-container {
    width: 100vw;
    min-height: -webkit-fill-available;
    /* height: 100vh; */
    background-color:black;
    display:flex;
}
h1 {
    color: white;
    font-size: 39px;
    text-align: center;
    width: 100%;
    height: fit-content;
}
.golf-demo-button-large {
    font-size: 25px;
    width: 297px;
    max-width: 90%;
    height: 60px;
    background: #C74F4F;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 20px;
}
.golf-demo-button-small {
    font-size: 17px;
    width: 78px;
    height: 38px;
    background: #C74F4F;
    color: white;
    border: none;
    border-radius: 10px;
}
.main-color {
    color:#334F25;
}
</style>