<template>
    <div>
        <div class="mamiyoga-divide-every">
            <slot name="divide-title"></slot>
            <!-- <video class="mamiyoga-divide-every-video" controls>
                    <source :src="pose_video" type="video/mp4">
                    Your browser does not support the video tag.
            </video> -->
            <slot name="divide-video"></slot>
            <!-- <div class="mamiyoga-divide-every-middle">
                <img src="/mamiyoga/eye.svg" alt=""><p>110</p>
            </div> -->
            <div class="mamiyoga-divide-every-bottom-content">
                <h5>{{$t('course_tips_text')}}</h5>
                <div class="mamiyoga-divide-every-bottom">
                    <!-- <p v-for="pose in getPoseExplain" :key="pose.pose_id" >{{pose.pose_description}}</p> -->
                    <slot name="divide-text"></slot>
                </div>
                <button class="teach-assay-btn" v-if="ai_teacher">
                    <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="clickCourseVideoUpload">{{$t('course_practice_btn')}}</label>  
                </button>
                <!-- <div v-if="ai_teacher" style="display: flex;justify-content: center;">
                    <button class="ai-use-btn" v-if="ai_teacher" @click="openRecordBox">{{$t('course_practice_btn')}}</button> 
                    <button class="ai-use-btn" v-if="ai_teacher" @click="show_remind = true">{{$t('teach_button_upload')}}</button>
                </div> -->
            </div>
        </div>
        <mamiyoga-window-alert-box v-show="show_remind">
            <div class="cancel-box" @click="show_remind = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <p style="color:#FF9898;font-size:14px;font-weight:bold;">{{$t('course_practice_remind_title')}}</p>
            <div class="upload-remind-box" :style="{backgroundImage:'url('+getBackground+')'}"></div>
            <!-- <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top:40px;width:40%;"> -->
            <p style="color:#24798F;font-size:13px;font-weight:bold;margin:10px 0 20px;">{{getRemind}}</p>
            <div class="star-line-box">
                <button class="teach-assay-btn" v-if="is_android" style="width:70px;padding:0;background-color:#24798F;" @click="clickCourseVideoUploadAndroid">
                    {{$t('teach_button_ok')}}
                </button>
                <button class="teach-assay-btn" v-else style="width:70px;padding:0;background-color:#24798F;">
                    <label style="width:70px;height:35px;display:flex;align-items:center;justify-content:center;cursor:pointer;"><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="clickCourseVideoUpload">{{$t('teach_button_ok')}}</label>  
                </button>

            </div>
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
// import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
// import axios from '~/config/axios-config';
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data:()=>({
        show_remind: false,
        is_android: false,
        // select_data:[],
    }),
    props:{
        courseTime:Number,
        ai_teacher: false,
        pose_video: String,
        course_data: Object,
        current_pose_id: String,
    },
    mounted(){
        if(process.client) {
            if(navigator.userAgent.match(/android/i)){
                this.is_android = true;
            }  else {
                this.is_android = false;
            }
        }
    },
    components: {
        MamiyogaWindowAlertBox,
        // Loading,
        // MamiyogaAssayVideo,
    },
    methods: {
        clickCourseVideoUpload(e){
            this.$emit('handleCourseVideoUpload',e)
            this.show_remind = false
        },
        clickCourseVideoUploadAndroid(e){
            this.$emit('handleCourseVideoUploadAndroid',e)
            this.show_remind = false
            console.log('_first');
        },
        openRecordBox(){
            this.$emit('openRecordBox')
        }
        // showRemind(){
        //     this.$emit('showRemind')
        // }
    },
    computed:{
        getRemind(){
            if(this.current_pose_id) {
                let select_data = this.course_data.poses.find(pose => sessionStorage["course_" + this.course_data.id + "_current_pose_id"] == pose.pose_id)
                return select_data.remind_text
            } else {
                return ''
            }
        },
        getBackground(){
            if(this.current_pose_id) {
                let select_data = this.course_data.poses.find(pose => sessionStorage["course_" + this.course_data.id + "_current_pose_id"] == pose.pose_id)
                return select_data.remind_img
            } else {
                return ''
            }
        }
        // getPoseExplain(){
        //     if (this.course_data.poses) {
        //         console.log(this.course_data.poses)
        //         return this.course_data.poses;
        //     } else {
        //         return [];
        //     }
        // }
        
    }

}
</script>

<style>
.mamiyoga-divide-every-video {
    width: 100vw;
    height: 30vh;
}
.mamiyoga-divide-every-middle {
    width: 100vw;
    /* background: green; */
    padding: 1vh 5vw;
    text-align: right;
    border-bottom: solid thin rgba(112,112,112,.3); 
}
.mamiyoga-divide-every-middle p {
    font-size: 12px;
    color: #5C5C5C;
}
.mamiyoga-divide-every-middle img {
    width: 18px;
    float: left;
    margin-left: 77vw;
}
.mamiyoga-divide-every-bottom-content {
    /* background: gray; */
    width: 100vw;
    height: auto;
    padding: 2vh 5vw 3vh;
}
.mamiyoga-divide-every-bottom-content h5 {
    font-size: 14px;
    color: #272727;
    font-weight: 400;
}
.mamiyoga-divide-every-bottom-content p {
    font-size: 12px;
    color: #707070;
}
.mamiyoga-divide-every-bottom {
    padding: 2vh 5vw 0;
    
}
.ai-use-btn {
    width: 100px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0; 
    text-align: center;
    display: block;
    margin: 20px 10px 0;
    border-style: none;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #9BAEB2;
    color: #fff;
    cursor: pointer;
}
.teach-assay-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #9BAEB2;
    color: #fff;
    cursor: pointer;
}
.upload-remind-box {
    width: 150px;
    height: 135px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

}
@media (min-width: 769px) {
    .mamiyoga-divide-every-video {
        width: 100%;
        height: 300px;
    }
    .mamiyoga-divide-every-bottom-content {
        width: 100%;
        padding: 0 25px 10px;
        margin-top: 30px; 
    }
    .mamiyoga-divide-every-middle {
        width: 100%;
        padding: 8px 25px;
    }
    .mamiyoga-divide-every-middle img {
        margin-left: 355px;
    }
    .mamiyoga-divide-every-bottom {
        padding: 15px 15px 0;
    }
}
</style>
