<template>
    <div class="mamiyoga-divide-block">
        <input v-for="pose in getPoses" :key="pose.pose_id" :name="pose" :checked="pose.pose_id == 'first'"
        type="radio" class="labels" :class="pose.pose_id+'-divide'" :id="pose.pose_id">

        <div class="mamiyoga-divide-select">
            <div class="divide-label-box">
                <label :for="pose.pose_id" :class="pose.pose_id+'-label'" 
                v-for="(pose,i) in getPoses" :key="i" >
                <img src="/mamiyoga/ai-badge.svg" v-show="pose.pose_ai" > 動作{{i+1}}
                </label>
            </div>
            <mamiyoga-divide-every-block v-for="pose in getPoses" :key="pose.pose_id"
            class="mamiyoga-divide-block-detail" :class="pose.pose_id" 
            @handleCourseVideoUpload="handleCourseVideoUpload" :ai_teacher="pose.pose_ai"
            :course_data="course_data">
                <div slot="divide-video">
                    <video class="mamiyoga-divide-every-video" controls>
                        <source :src="pose.pose_video" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
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
    props:{
        course_data:Object,
        have_ai: false,
    },
    components:{
        MamiyogaDivideEveryBlock,
    },
    methods:{
        handleCourseVideoUpload(e){
            this.$emit('handleCourseVideoUpload',e)
        }
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
@media (max-width: 899px) {
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
    }
    .divide-label-box img {
        position: absolute;
        top: -25px;
        left: 0;
    }
    .mamiyoga-divide-block-detail {
        display: none;
    }
    .first-divide:checked ~ .mamiyoga-divide-select .first-label,
    .second-divide:checked ~ .mamiyoga-divide-select .second-label,
    .third-divide:checked ~ .mamiyoga-divide-select .third-label {
        background-color: #97A8AF;
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
}
</style>
