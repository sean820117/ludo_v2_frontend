<template>
    <div class="mamiyoga-course-content">
        <input type="radio" class="labels first-series" id="first" name="series" checked>
        <input type="radio" class="labels second-series" id="second" name="series">
        <input type="radio" class="labels third-series" id="third" name="series">
        <input type="radio" class="labels four-series" id="four" name="series">
        <div class="mamiyoga-course-select" style="padding-bottom:3vh;">
            <div class="label-box">
                <label for="first" class="first-label">姿勢矯正</label>
                <label for="second" class="second-label">伸展舒緩</label>
                <label for="third" class="third-label">減脂瘦身</label>
                <label for="four" class="four-label">呼吸放鬆</label>
            </div>
            <div class="first-series-container mamiyoga-all-course">
                <h5>矯正媽媽們產後不良姿勢來緩解疼痛</h5>
                <router-link to="/mamiyoga/course1" style="color:black;text-decoration:none;">
                    <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                    blockColor="white" blockTitle="骨盆矯正的姿勢" unitSrc="/mamiyoga/course/unit01.svg"
                    ></mamiyoga-course-block>
                </router-link>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="改善疼痛症狀的伸展" unitSrc="/mamiyoga/course/unit02.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="改善疼痛症狀的伸展" unitSrc="/mamiyoga/course/unit03.svg"
                ></mamiyoga-course-block>
            </div>
            <div class="second-series-container mamiyoga-all-course">
                <h5>幫助媽媽們提升睡眠品質</h5>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="伸展鼠蹊部的姿勢" unitSrc="/mamiyoga/course/unit04.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="睡醒好狀態的姿勢" unitSrc="/mamiyoga/course/unit05.svg"
                ></mamiyoga-course-block>
            </div>
            <div class="third-series-container mamiyoga-all-course">
                <h5>塑造出比產前更漂亮的身體曲線</h5>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="舒緩疲勞與倦怠感" unitSrc="/mamiyoga/course/unit06.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="鬆弛的肚子變得緊實" unitSrc="/mamiyoga/course/unit07.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="鬆弛的肚子變得緊實" unitSrc="/mamiyoga/course/unit08.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="鬆弛的肚子變得緊實" unitSrc="/mamiyoga/course/unit09.svg"
                ></mamiyoga-course-block>
            </div>
            <div class="four-series-container mamiyoga-all-course">
                <h5>釋放媽媽們的產後壓力</h5>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="舒緩疲勞與倦怠感" unitSrc="/mamiyoga/course/unit10.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="鬆弛的肚子變得緊實" unitSrc="/mamiyoga/course/unit11.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="鬆弛的肚子變得緊實" unitSrc="/mamiyoga/course/unit12.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="鬆弛的肚子變得緊實" unitSrc="/mamiyoga/course/unit13.svg"
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu-old.png"
                blockColor="white" blockTitle="鬆弛的肚子變得緊實" unitSrc="/mamiyoga/course/unit14.svg"
                ></mamiyoga-course-block>
            </div>
        </div>
    </div>
</template>

<script>
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
export default {
    components: {
        MamiyogaCourseBlock,
    }
}
</script>

<style>
@media (max-width:899px) {
    .labels {
        display: none;
    }
    .label-box {
        width: 90vw;
        margin: 0 auto;
        display: flex;
        justify-content:space-around;
    }
    .label-box label {
        color: white;
        font-size: 12px;
        background-color: #D1D1D1; 
        padding: .5vh 2.8vw;
        border-radius: 30px;
        margin: 0 3px;
    }
    .first-series:checked ~ .mamiyoga-course-select .first-label,
    .second-series:checked ~ .mamiyoga-course-select .second-label,
    .third-series:checked ~ .mamiyoga-course-select .third-label,
    .four-series:checked ~ .mamiyoga-course-select .four-label {
        background-color: #97A8AF;
    }
    .first-series-container,.second-series-container,
    .third-series-container,.four-series-container {
        display: none;
    }
    .first-series:checked ~ .mamiyoga-course-select .first-series-container,
    .second-series:checked ~ .mamiyoga-course-select .second-series-container,
    .third-series:checked ~ .mamiyoga-course-select .third-series-container,
    .four-series:checked ~ .mamiyoga-course-select .four-series-container {
        display: block;
    }
    .mamiyoga-all-course h5 {
        text-align: center;
        font-size: 12px;
        color: #585757;
        font-weight: 400;
        margin-top: 2vh; 
    }
}
</style>
