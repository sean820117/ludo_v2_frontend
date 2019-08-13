<template>
    <div>
        <div class="aiassistant-page" v-if="!open_explain">
            <!-- <div class="aiassistant-intro">
                <p>正確的運動姿勢事半功倍，<br>優秀的AI教練幫助您改善姿勢！<br><br>立即上傳您的影片體驗。</p>
                <div>
                    <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" btnText="影片教學" style="margin-bottom:5vh;"></mamiyoga-btn>
                </div>
                <div class="teach-question-box" @click="open_explain = true">
                    <img src="/mamiyoga/teach-question-btn.svg" alt="">
                </div>
            </div> -->
            <div class="course-information" >
                <mamiyoga-header btnText="登出" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
                <div class="course-information-select">
                    <div class="course-information-content">
                        <router-link to="/mamiyoga/about" style="text-decoration:none;"><p>{{$t('menu_nav_text_teacher')}}</p></router-link>
                    </div>
                    <div class="course-information-content">
                        <router-link to="/mamiyoga/menu" style="text-decoration:none;"><p>所有課程</p></router-link>
                    </div>
                    <div class="course-information-content">
                        <p>{{$t('menu_nav_text_friend')}}</p>
                    </div>
                </div>
                <div class="course-mail-icon">
                    <img style="width:25px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/menu-envelope.png" alt="">
                </div>
            </div>
            
            <div class="aiassistant-container">
                <h4>所有動作</h4>
                <mamiyoga-aiassistant-pose-block v-for="(pose,i) in have_ai_pose" :key="i"
                :poseText="pose.pose_brief" :unitSrc="pose.chapter_flag" :bgImg="pose.ai_preview_img"
                :goPractice="pose.course_id"
                ></mamiyoga-aiassistant-pose-block>
                
            </div>
        </div>
        <mamiyoga-explain-box v-if="open_explain" @closeExplain="closeExplain"></mamiyoga-explain-box>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue'
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import MamiyogaAiassistantPoseBlock from '~/components/mamiyoga/MamiyogaAiassistantPoseBlock.vue'
import MamiyogaExplainBox from '~/components/mamiyoga/MamiyogaExplainBox.vue'
export default {
    layout:'mommiyoga',
    data:()=>({
        open_explain: false,
        courses: [],
        have_ai_course: [],
        have_ai_pose: [],
        // have_ai_pose: {},
    }),
    async mounted(){
        if (process.client) {
            if (this.$i18n.locale == 'JP') {
                this.courses = await require('~/config/mamiyoga-course-jp');
            } else {
                this.courses = await require('~/config/mamiyoga-course');
            }
            let ai_course = this.courses.filter(course => course.poses.find(pose => pose.pose_ai === true))
            // let all_ai_pose = ai_course.poses
            
            console.log(ai_course)
            let ai_poses = []
    
            for(var i = 0; i<ai_course.length;i++){
                ai_poses = ai_course[i].poses
                console.log(ai_poses)
                for(var j =0;j<ai_poses.length;j++){
                    let pose = ai_poses[j]
                    pose.chapter_flag = ai_course[i].chapter_flag
                    pose.course_id = ai_course[i].id
                    console.log(pose)
                    if(pose.pose_ai === true) {
                        this.have_ai_pose.push(pose)
                    }
                }
            }
            
            console.log(this.have_ai_pose)
            // let have_ai_pose = {}
            // for(var i=0;i< ai_course.length; i++) {
            //     let ai_poses = ai_course[i].poses
            //     // console.log(ai_poses.length)
            //     for(var j=0;j<ai_poses.length;j++){
            //         if(ai_poses[j].pose_ai){
            //             have_ai_pose += [ai_poses[j]]
            //         }
            //         have_ai_pose = ai_poses[j]
            //         // console.log("course " + i + " pose " +j+" is " +ai_poses[j].pose_ai)
            //         // this.have_ai_course = have_ai_pose.filter(pose => pose.pose_ai === true)
            //     }
            // }
            // console.log(have_ai_pose)
            // this.have_ai_course = have_ai_pose.filter(pose => pose.pose_ai === true)
            // this.have_ai_pose = this.have_ai_course.poses.filter(pose => pose.pose_ai === true)
        }
    },
    components: {
        MamiyogaHeader,
        MamiyogaBtn,
        MamiyogaAiassistantPoseBlock,
        MamiyogaExplainBox,
    },
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
    margin-top: 2vh;
    padding-bottom: 10px;
}
.aiassistant-container h4 {
    text-align: center;
    font-size: 14px;
    color: #51636F;
    font-weight: 400;
    /* border-bottom: solid 1px rgba(112,112,112,.3); */
    /* padding-bottom: 1vh; */
    margin: 0 5vw;
}
.teach-question-box {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 33vh;
    right: 6vw;
}
.course-information {
    position: relative;
    width: 100vw;
    height: 30vh;
    background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-menu-background-1.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center center;
}
.course-information-select {
    position: absolute;
    width: 60vw;
    height: 50px;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
}
.course-information-content {
    float: left;
    width: 65px;
    height: 25px;
}
.course-information-content:first-child p {
    border-right:1px solid #fff;
    padding-right: 6px; 
}
.course-information-content:nth-child(2) p {
    border-right:1px solid #fff;
}
.course-information-content p {
    color: white;
    font-size: 12px;
    text-align: center;
}
.course-mail-icon {
    position: absolute;
    bottom: 2vh;
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
        margin-top: 20px; 
    }
    .course-information {
        width: 100%;
    }
    .course-information-select {
        width: 60%;
    }
    .course-mail-icon {
        bottom: 20px;
        right: 30px;
    }
}
</style>
