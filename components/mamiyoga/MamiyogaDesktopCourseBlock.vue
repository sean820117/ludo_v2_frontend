<template>
    <div class="mamiyoga-desktop-course-outside-block">
        <div class="mamiyoga-desktop-course-block" :style="{backgroundImage: `url('${courseBg}')`}" @click="show_pose = true">
            <div class="mamiyoga-desktop-course-flex-block">
                <p>{{courseTitle}}</p>
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-close.png" alt="">
            </div>
            <div class="mamiyoga-desktop-course-block-gradual"></div>
            <div class="mamiyoga-desktop-course-block-hover">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-video-play.png" alt="">
            </div>
        </div>
        <div v-if="show_pose">
            <div class="mamiyoga-desktop-course-block-pose-list" v-for="(pose,index) in poses" :key="index">
                <div class="mamiyoga-desktop-course-block-pose-list-video" :style="{backgroundImage: `url('${courseBg}')`}">
                    <div class="mamiyoga-desktop-course-block-gradual"></div>
                    <div class="mamiyoga-desktop-course-block-hover">
                        <img style="width:25%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-video-play.png" alt="">
                    </div>
                </div>
                <div>
                    <p style="color:#707070;font-size: 13px;">動作{{parseInt(index)+1}}</p>
                    <p style="color:#707070;font-size: 16px;">{{pose.pose_brief}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        courseBg: String,
        courseTitle: String,
        have_pose: Boolean,

        poses: Array,
    },
    data:()=>({
        show_pose: false,
    })
}
</script>

<style>
.mamiyoga-desktop-course-outside-block {
    width: 30%;
    max-width: 450px;
}
.mamiyoga-desktop-course-block {
    width: 100%;
    height: 270px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px;
    box-shadow: 0 5px 8px rgba(0,0,0,.3);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 20px;
}
.mamiyoga-desktop-course-flex-block {
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.mamiyoga-desktop-course-block p {
    color: #FFFFFF;
    font-size: 19px;
}
.mamiyoga-desktop-course-block-gradual {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: linear-gradient(0deg, rgba(0,0,0,.5),transparent,transparent, transparent);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
.mamiyoga-desktop-course-block-hover {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0,0,0,.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.mamiyoga-desktop-course-block:hover .mamiyoga-desktop-course-block-hover {
    opacity: 1;
}
.mamiyoga-desktop-course-block-pose-list {
    display: flex;
    align-items: center;
    margin: 15px 0 15px;
}
.mamiyoga-desktop-course-block-pose-list-video {
    width: 40%;
    height: 60px;
    max-width: 115px;
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    cursor: pointer;
    margin-right: 10px;
}
.mamiyoga-desktop-course-block-pose-list-video .mamiyoga-desktop-course-block-gradual,
.mamiyoga-desktop-course-block-pose-list-video .mamiyoga-desktop-course-block-hover {
    border-radius: 5px;
}
.mamiyoga-desktop-course-block-pose-list-video:hover .mamiyoga-desktop-course-block-hover{
    opacity: 1;
}
</style>