<template>
    <div>
        <div class="aiassistant-page" v-if="!open_explain">
            <mamiyoga-mail-header :headerTitle="$t('menu_nav_text_record')" mailheaderTitle="white"></mamiyoga-mail-header>
            <div class="aiassistant-intro">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/aiassistant-title.png" alt="" class="aiassistant-title-img">
                <p v-html="$t('aiaiassistant_title_text')"></p>
                <!-- <div>
                    <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" btnText="影片教学" style="margin-bottom:5vh;"></mamiyoga-btn>
                </div> -->
                <div class="aiassistant-teach-question-box" @click="open_explain = true">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-question-btn.png" alt="">
                </div>
            </div>
            <div class="aiassistant-container">
                <h4>{{$t('aiaiassistant_content_title')}}</h4>
                <mommiyoga-aiassistant-pose-block v-for="array in have_ai_array" 
                :key="array.id" :poseText="array.title" :goRecord="array.upload_id"
                :bgImg="array.id"></mommiyoga-aiassistant-pose-block>
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
import { mapMutations, mapGetters } from 'vuex';
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
        courses: [],
        have_ai_array: [],
    }),
    // props: {
    //     courses:Array,
    //     have_ai_array:Array,
    // },
    methods: {
        closeExplain(){
            this.open_explain = false
        }
    },
    async mounted() {
        if (process.client) {
            if (this.$i18n.locale == 'zh-CN') {
                this.courses = await require('~/config/mommiyoga-course')
            } else {
                this.courses = await require('~/config/mommiyoga-course-zhtw')
            }
            this.have_ai_array = this.courses.filter(course => course.ai_teacher === true)
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    async beforeCreate() {
        if (process.client) {
            this.ui_config = await require('~/config/mommiyoga-config')
            this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/mommiyoga/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                if (!payed_or_not) {
                    console.log("not payed");
                    window.alert("尚未開通課程，請先前往購買～");
                    this.$router.push('/resume/pay');
                } else {
                    console.log("payed")
                }
            }
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
    height: 41vh;
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
.aiassistant-title-img {
    height: 18vh;
    margin-top: 7vh;

}
.aiassistant-intro p {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 14px;
    margin: 0 0 1vh;
}
.aiassistant-container {
    width: 100vw;
    height: auto;
    margin-top: 36vh;
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
.aiassistant-teach-question-box {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 33vh;
    right: 6vw;
    cursor: pointer;
}
.aiassistant-teach-question-box img {
    width: 30px;
    height: 30px;
}
@media (min-width: 769px) {
    .aiassistant-page,.aiassistant-container {
        width: 100%;
    }
    .aiassistant-intro {
        height: 360px;
        width: 450px;
    }
    .aiassistant-teach-question-box {
        top: 300px;
        right: 35px;
    }
    .aiassistant-container {
        margin-top: 320px; 
    }
    .aiassistant-container h4 {
        margin: 0 30px;
    }
    .aiassistant-title-img {
        width: 150px;
        height: 131px;
        margin-top: 70px; 
    }
    .aiassistant-intro p {
        margin: 0 0 10px;
    }
}
@media (max-width: 769px) and  (orientation:landscape) {
    .aiassistant-intro {
        height: 60vh;
    }
    .aiassistant-title-img {
        margin-top: 12vh; 
    }
    .aiassistant-teach-question-box {
        top: 47vh;
    }
    .aiassistant-container {
        margin-top: 50vh; 
    }
}
</style>
