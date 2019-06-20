<template>
    <div class="course-menu">
        <div class="asamiyoga-course-information">
            <mamiyoga-header btnText="登出" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
            <div class="asamiyoga-course-information-select">
                <div class="mamiyoga-course-information-content">
                    <router-link to="/asamiyoga/about" style="text-decoration:none;">
                        <p>讲师介绍</p>
                    </router-link>
                </div>
                <div class="mamiyoga-course-information-content">
                   <router-link to="/asamiyoga/aiassistant" style="text-decoration:none;">
                        <p>AI助教</p>
                    </router-link>
                </div>
                <div class="mamiyoga-course-information-content">
                    <p>学习伙伴</p>
                </div>
            </div>
            <div class="course-mail-icon">
                <img src="/mamiyoga/menu-envelope.svg" alt="">
            </div>
        </div>
        <div class="course-menu-box">
            <mamiyoga-course-content></mamiyoga-course-content>
        </div>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/asamiyoga/MamiyogaHeader.vue';
import MamiyogaCourseContent from '~/components/asamiyoga/MamiyogaCourseContent.vue';
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
    .asamiyoga-course-information {
        position: relative;
        width: 100vw;
        height: 30vh;
        background-image:url('/asamiyoga/background-menu.png');
    }
    .asamiyoga-course-information-select {
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
    .mamiyoga-course-information-content {
        float: left;
        width: 65px;
        height: 25px;
    }
    .mamiyoga-course-information-content:first-child p {
        border-right:1px solid #fff;
        /* padding-right: 6px;  */
    }
    .mamiyoga-course-information-content:nth-child(2) p {
        border-right:1px solid #fff;
    }
    .mamiyoga-course-information-content p {
        color: white;
        font-size: 12px;
        text-align: center;
    }
    .course-mail-icon {
        position: absolute;
        bottom: 2vh;
        right: 6vw;
    }
}
</style>
