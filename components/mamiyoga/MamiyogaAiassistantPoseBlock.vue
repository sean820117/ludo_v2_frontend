<template>
    <div>
        <!-- <router-link :to="'/mamiyoga/course/practice/'+goPractice" style="text-decoration:none;"> -->
            <div class="aiassistant-pose-block" :style="{backgroundImage:'url('+bgImg+')'}" @click="goPracticePage()">
                <div class="course-bookmark">
                    <img :src="unitSrc" alt="">
                </div>
                <div>
                    <p style="font-size:20px;font-weight:bold;">{{poseText}}</p>
                    <p style="font-size:12px">建議拍攝時間：20-45秒</p>
                </div>
            </div>
        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
    props: {
        poseText: String,
        bgImg: String,
        unitSrc: String,
        goPractice: String,
        getCurrentPoseId: String
    },
    methods:{
        goPracticePage(){
            sessionStorage['course_'+this.goPractice + '_current_pose_id'] = this.getCurrentPoseId
            if(this.$i18n.locale == 'jp') {
                this.$router.push('/jp/mamiyoga/course/practice/'+ this.goPractice)
            } else if (this.$i18n.locale == 'zh-CN') {
                this.$router.push('/zh-CN/mamiyoga/course/practice/'+ this.goPractice)
            } else {
                this.$router.push('/mamiyoga/course/practice/'+ this.goPractice)
            }
            
            
        }
    }
    
}
</script>

<style>

.aiassistant-pose-block {
    width: 90vw;
    height: 24vh;
    /* background: black; */
    margin: 20px auto;
    border-radius: 10px; 
    display: flex;
    align-items: flex-end;
    padding: 10px 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    cursor: pointer;
}
.aiassistant-pose-block p {
    color: white;
}
.course-bookmark {
    width: 30px;
    position: absolute;
    top: -5px;
    left: 15px;
}
@media (min-width: 769px) {
    .aiassistant-pose-block {
        width: 90%;
        height: 200px;
    }
}
</style>
