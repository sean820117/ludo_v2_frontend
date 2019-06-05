<template>
    <div class="yoga-course-info">
        <div class="yoga-course-title">
            <p v-html="unit"></p>
            <h2 v-html="title"></h2>
        </div>
        <video class="yoga-course-video" controls><source :src="src"></video>
        <div class="yoga-course-tips">
            <p v-html="courseTip"></p>
        </div>
        <div class="yoga-course-next"><img src="/yoga/Yoga-course-next.svg" alt=""></div>
    </div>
</template>

<script>
export default {
    props: {
        unit: String,
        title: String,
        src: String,
        courseTip: String,
    },
}
</script>

<style>
@media (max-width: 899px) {
    .yoga-course-info {
        width: 100vw;
        height: 100vh;
    }
    .yoga-course-title {
        width: 100vw;
        height: 110px;
        color: #99CBA5;
        text-align: center;
        padding: 20px 0;
    }
    .yoga-course-title h2 {
        font-size: 8vw; 
    }
    .yoga-course-title p {
        font-size: 20px; 
    }
    .yoga-course-video {
        width: 100vw;
        height: 50vh;
    }
    .yoga-course-tips {
        width: 80vw;
        height: 25vh;
        border-radius:30px; 
        box-shadow: 0 4px 10px rgba(183, 183, 183, .6);
        margin: 2vh auto 0 auto;
    }
    .yoga-course-tips p {
        text-align: center;
        line-height: 22px;
        font-size: 12px;
        color: #707070;
        padding: 3vh;
    }
    .yoga-course-next {
        width: 24px;
        height: 14px;
        margin: 30px auto 0 auto;
    }
}
</style>
