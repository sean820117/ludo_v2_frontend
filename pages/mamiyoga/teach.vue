<template>
    <div class="teach-page">
        <mamiyoga-header btnText="登入" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-header>
        <mamiyoga-course-block style="margin-top:30px" bgImage="/mamiyoga/background-teach.png"
        blockColor="white" blockTitle="伸展兩側手臂"></mamiyoga-course-block>
        <mamiyoga-btn btnText="上傳影片" bgColor="#9BAEB2" ftColor="#FFF" style="margin-top:45vh;" class="teach-upload"></mamiyoga-btn>
    </div>
</template>

<script>
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
export default {
    components: {
        MamiyogaHeader,
        MamiyogaCourseBlock,
        MamiyogaBtn,
    }
}
</script>

<style>
@media (max-width:899px) {
    .teach-page {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    }
    .teach-upload button {
        box-shadow:5px 5px 10px rgba(0,0,0,.1);
    }
}
</style>
