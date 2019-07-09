<template>
    <div class="mamiyoga-divide-every">
        <slot name="divide-title"></slot>
        <!-- <video class="mamiyoga-divide-every-video" controls>
                <source :src="pose_video" type="video/mp4">
                Your browser does not support the video tag.
        </video> -->
        <slot name="divide-video"></slot>
        <div class="mamiyoga-divide-every-middle">
            <img src="/mamiyoga/eye.svg" alt=""><p>110</p>
        </div>
        <div class="mamiyoga-divide-every-bottom-content">
            <h5>動作步驟</h5>
            <div class="mamiyoga-divide-every-bottom">
                <!-- <p v-for="pose in getPoseExplain" :key="pose.pose_id" >{{pose.pose_description}}</p> -->
                <slot name="divide-text"></slot>
            </div>
            <button class="teach-assay-btn" v-if="ai_teacher">
                <label><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="clickCourseVideoUpload">上傳影片</label>  
            </button>
        </div>
        
    </div>
</template>

<script>
// import MamiyogaAssayVideo from '~/components/mamiyoga/MamiyogaAssayVideo.vue';
// import axios from '~/config/axios-config';
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data:()=>({
        course_data: {},
    }),
    props:{
        courseTime:Number,
        ai_teacher: false,
        pose_video: String,
    },
    components: {
        // Loading,
        // MamiyogaAssayVideo,
    },
    methods: {
        clickCourseVideoUpload(e){
            this.$emit('handleCourseVideoUpload',e)
        }
    },
    computed:{
        getPoseExplain(){
            if (this.course_data.poses) {
                console.log(this.course_data.poses)
                return this.course_data.poses;
            } else {
                return [];
            }
        }
        
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
    padding: 2vh 5vw;
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
