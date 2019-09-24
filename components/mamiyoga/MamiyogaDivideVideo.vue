<template>
    <div class="mamiyoga-divide-block">
        <input v-for="pose in getPoses" :key="pose.pose_id" :name="pose" :checked="pose.pose_id == current_pose_id"
        type="radio" class="labels" :class="pose.pose_id+'-divide'" :id="pose.pose_id" v-model="current_pose_id" :value="pose.pose_id">

        <div class="mamiyoga-divide-select">
            <div class="divide-label-box">
                <label :for="pose.pose_id" :class="`${pose.pose_id}-label ${pose.pose_ai ? 'label-with-ai':''}`" 
                v-for="(pose,i) in getPoses" :key="i" >
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ai-badge.png" v-show="pose.pose_ai" > {{$t('course_practice_label')+(i+1)}}
                </label>
            </div>
            <mamiyoga-divide-every-block v-for="pose in getPoses" :key="pose.pose_id"
            class="mamiyoga-divide-block-detail" :class="pose.pose_id" :current_pose_id="current_pose_id"
            @handleCourseVideoUploadAndroid="handleCourseVideoUploadAndroid"
            @handleCourseVideoUpload="handleCourseVideoUpload" @openRecordBox="openRecordBox"
            :ai_teacher="pose.pose_ai" :course_data="course_data">
                <div slot="divide-title">
                    <h4>{{pose.pose_brief}}</h4>
                    <!-- <div v-if="pose.pose_ai" style="width:100%;height:30px;"></div> -->
                </div>
                <div slot="divide-video" style="position:relative" @click="is_played = true">
                    <video class="mamiyoga-divide-every-video" controls preload="auto" playsinline>
                        <source :src="pose.pose_video + '#t=0.1'" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <!-- <div class="mamiyoga-course-intro-title" v-if="pose.pose_ai && !is_played">
                        <div class="mommiyoga-course-photo-img" v-if="!is_see">
                            <div class="mamiyoga-course-photo-by" v-show="!pose.is_front"></div>
                            <div class="mamiyoga-course-photo-by" v-show="pose.is_front"></div>
                        </div>
                        <div class="mamiyoga-course-intro-title-font">
                            <h5>{{pose.pose_brief}}</h5>
                            <p>{{$t('course_time_text')}}</p><p>{{getRecordTime}}</p><p>&nbsp;秒</p>
                        </div>
                    </div> -->
                </div>
                <div slot="divide-text">
                    <div class="mamiyoga-course-bottom-second-content-li" 
                    v-for="(description,index) in pose.pose_description" :key="index">
                        <p>{{index+1}}</p>
                        <p>{{description}}</p>
                    </div>
                </div>
                <!-- <p v-for="(pose_description,index) in getDescription" :key="index">
                    {{pose_description}}
                </p> -->
            </mamiyoga-divide-every-block>
        </div>
        
    </div>
</template>

<script>
import MamiyogaDivideEveryBlock from '~/components/mamiyoga/MamiyogaDivideEveryBlock.vue';

export default {
    mounted(){
        if(process.client) {
            // if(sessionStorage["course_" + this.course_data.id + "_current_pose_id"]){
            //     this.current_pose_id = sessionStorage["course_" + this.course_data.id + "_current_pose_id"];
            //     // console.log(this.current_pose_id);
            // }
        }
    },
    data:()=>({
        is_see: false,
        is_played: false,
        current_pose_id: 'first',
        current_pose:[],
    }),
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        current_pose_id: function (new_value, old_value) {
            sessionStorage["course_" + this.course_data.id + "_current_pose_id"] = this.current_pose_id;
            // console.log(`sessionStorage["course_${this.course_data.id}_current_pose_id"]`);
            // console.log(sessionStorage["course_" + this.course_data.id + "_current_pose_id"]);
        },
        course_data: function(new_value, old_value) {
            if(this.course_data){
                if(sessionStorage["course_" + this.course_data.id + "_current_pose_id"]){
                    this.current_pose_id = sessionStorage["course_" + this.course_data.id + "_current_pose_id"];
                    // console.log(this.current_pose_id);
                }
            }
            // debugger
        },
    },
    props:{
        course_data:Object,
        have_ai: false,
    },
    components:{
        MamiyogaDivideEveryBlock,
    },
    methods:{
        handleCourseVideoUpload(e){
            let target_pose = this.course_data.poses.find(pose => this.current_pose_id == pose.pose_id);
            if(target_pose) {
                if (target_pose.input_id) {
                    e.input_id = target_pose.input_id;
                }
            }
            this.$emit('handleCourseVideoUpload',e)
        },
        handleCourseVideoUploadAndroid(e){
            let target_pose = this.course_data.poses.find(pose => this.current_pose_id == pose.pose_id);
            if(target_pose) {
                if (target_pose.input_id) {
                    e.input_id = target_pose.input_id;           
                }
            }
            console.log('_second' + e.input_id);
            this.$emit('handleCourseVideoUploadAndroid',e);
        },
        openRecordBox(){
            this.$emit('openRecordBox')
        }
        // showRemind(){
        //     this.$emit('showRemind')
        // }
    },
    computed:{
        getPoses(){
            if (this.course_data.poses) {
                return this.course_data.poses;
            } else {
                return [];
            }
        },
    },
}
</script>

<style>
.mamiyoga-divide-block {
    width: 100vw;
    /* height: 80vh; */
    /* background: red; */
}
.labels {
    display: none;
}
.divide-label-box {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content:space-evenly;
}
.divide-label-box label {
    color: white;
    font-size: 12px;
    background-color: #BFBDBD; 
    padding: .5vh 6vw;
    border-radius: 30px;
    margin: 0 3px;
    box-shadow: 2px 2px 7px rgba(0,0,0,.3);
    position: relative;
    cursor: pointer;
}
/* .label-with-ai {
    background-color:#24798F;
} */
.divide-label-box img {
    position: absolute;
    top: -15px;
    left: 0;
    width: 35px;
}
.mamiyoga-divide-block-detail {
    display: none;
}
.first-divide:checked ~ .mamiyoga-divide-select .first-label,
.second-divide:checked ~ .mamiyoga-divide-select .second-label,
.third-divide:checked ~ .mamiyoga-divide-select .third-label {
    background-color: #97A8AF;
}
.first-divide:checked ~ .mamiyoga-divide-select .first-label.label-with-ai,
.second-divide:checked ~ .mamiyoga-divide-select .second-label.label-with-ai,
.third-divide:checked ~ .mamiyoga-divide-select .third-label.label-with-ai {
    background-color:#24798F;
}
.first-divide:checked ~ .mamiyoga-divide-select .mamiyoga-divide-block-detail.first,
.second-divide:checked ~ .mamiyoga-divide-select .mamiyoga-divide-block-detail.second,
.third-divide:checked ~ .mamiyoga-divide-select .mamiyoga-divide-block-detail.third {
    display: block;
}
.mamiyoga-course-bottom-second-content-li {
    min-height: 25px;
}
.mamiyoga-course-bottom-second-content-li p:first-child {
    float: left;
    background-color: #98A9AF;
    padding:1px 5px;
    border-radius: 10px;
    color: white;
    margin: 0 6px 6px 0;  
}
.mamiyoga-divide-block-detail h4 {
    font-size: 14px;
    color: #707070;
    text-align: center;
    margin: 2vh 0 1.5vh;
}

.mamiyoga-course-intro-title {
    width: 90%;
    height: 65px;
    position: absolute;
    bottom: 70px;
    left: 5vw;
}
.mamiyoga-course-photo-by {
    width: 50px;
    height: 65px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    margin-right: 10px; 
    float: left;
}
/* .mamiyoga-course-photo-img .mamiyoga-course-photo-by:first-child {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mommiyoga-teach-photoby-1.png');
}
.mamiyoga-course-photo-img .mamiyoga-course-photo-by:nth-child(2) {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mommiyoga-teach-photoby-2.png');
} */
.mommiyoga-course-photo-img .mamiyoga-course-photo-by:first-child {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-photoby-1.png');
}
.mommiyoga-course-photo-img .mamiyoga-course-photo-by:nth-child(2) {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-photoby-2.png');
}
.mamiyoga-course-intro-title-font {
    height: 65px;
    float: left;
    color: white;
    margin-top: 20px; 
}
.mamiyoga-course-intro-title-font h5 {
    font-size: 1.2em;
    font-weight: bold;
}
.mamiyoga-course-intro-title-font p {
    float: left;
    font-size: 14px;
}
.mamiyoga-course-intro-title-font p:nth-child(3) {
    font-style: italic;
    margin-top: 2px;
}







@media (min-width: 769px) {
    .mamiyoga-divide-block,.divide-label-box,
    .mamiyoga-divide-every-video {
        width: 100%;
    }
    .divide-label-box label {
        padding:5px 35px;
        margin-bottom:15px;
    }
    .mamiyoga-divide-every-video {
        height: 300px;
    }
}
</style>
