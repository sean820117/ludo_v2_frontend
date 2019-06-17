<template>
    <div class="course-menu">
        <div class="course-information" style="backgroundImage:url('/mamiyoga/background-menu.png');">
            <mamiyoga-header btnText="登出" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
            <div class="course-information-select">
                <div class="course-information-content">
                    <p>講師介紹</p>
                </div>
                <div class="course-information-content">
                    <p>AI助教</p>
                </div>
                <div class="course-information-content">
                    <p>學習夥伴</p>
                </div>
            </div>
            <div class="course-mail-icon">
                <img src="/mamiyoga/menu-envelope.svg" alt="">
            </div>
        </div>
        <div class="course-menu-box">
            <h3 class="course-menu-box-title">日本mami人氣課程</h3>
            <mamiyoga-course-content></mamiyoga-course-content>
        </div>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaCourseContent from '~/components/mamiyoga/MamiyogaCourseContent.vue';
export default {
    props: {
        bgImage: String,
        menuTitle: String,
    },
    components: {
        MamiyogaHeader,
        MamiyogaCourseContent,
    }
}
</script>

<style>
@media (max-width:899px) {
    .course-menu {
        width: 100vw;
        min-height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA)
    }
    .course-information {
        position: relative;
        width: 100vw;
        height: 30vh;
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
    .course-menu-box-title {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        margin: 10px;
    }
}
</style>
