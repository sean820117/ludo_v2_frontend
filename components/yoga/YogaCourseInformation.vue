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
        <button class="yoga-course-next" @click="goToVideo"><img src="/yoga/Yoga-course-next.svg" alt=""></button>
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
    methods: {
        goToVideo(){
            this.$scrollTo('#course-video',"start");
        }
    }
}
</script>

<style>
@media (max-width: 899px) {
    .yoga-course-info {
        width: 100vw;
        min-height: 100vh;
    }
    .yoga-course-title {
        width: 90vw;
        color: #99CBA5;
        text-align: center;
        padding: 15px 0 5px 0;
        margin: 0 auto 10px;
    }
    .yoga-course-title h2 {
        font-size: 8vw; 
    }
    .yoga-course-title p {
        font-size: 20px; 
        margin-bottom: 4px; 
    }
    .yoga-course-video {
        width: 100vw;
        height: 50vh;
    }
    .yoga-course-tips {
        width: 80vw;
        height: auto;
        border-radius:30px; 
        box-shadow: 0 4px 10px rgba(183, 183, 183, .6);
        margin: 3vh auto 0 auto;
    }
    .yoga-course-tips p {
        text-align: center;
        line-height: 22px;
        font-size: 12px;
        color: #707070;
        padding: 3vh;
    }
    .yoga-course-next {
        width: 40px;
        height: 25px;
        margin: 3vh 44%;
        border-style: none;
        background: transparent;
    }
}
</style>
