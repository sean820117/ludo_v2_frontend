<template>
    <div class="course-menu">
        <div class="course-information" :style="{backgroundImage:'url('+bgImage+')'}">
            <mamiyoga-header btnText="紀錄" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
            <div class="course-information-select">
                <div class="course-information-content">
                    <p>教學理念</p>
                </div>
                <div class="course-information-content">
                    <p>講師介紹</p>
                </div>
            </div>
        </div>
        <div class="course-menu-box">
            <h3 v-html="menuTitle" class="course-menu-box-title">{{menuTitle}}</h3>
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
        height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA)
    }
    .course-information {
        position: relative;
        width: 100vw;
        height: 30vh;
    }
    .course-information-select {
        position: absolute;
        
        width: 250px;
        height: 50px;
        bottom: 0;
        left: 0;
    }
    .course-information-content {
        float: left;
        width: 65px;
        height: 25px;
        margin: 10px 10px;
    }
    .course-information-content p {
        color: white;
        font-size: 12px;
        text-align: center;
    }
    .course-menu-box-title {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        margin: 10px;
    }
}
</style>
