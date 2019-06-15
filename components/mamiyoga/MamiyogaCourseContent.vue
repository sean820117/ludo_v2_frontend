<template>
    <div class="mamiyoga-course-content">
        <input type="radio" class="labels first-series" id="first" name="series" checked>
        <input type="radio" class="labels second-series" id="second" name="series">
        <input type="radio" class="labels third-series" id="third" name="series">
        <input type="radio" class="labels four-series" id="four" name="series">
        <div class="mamiyoga-course-select">
            <div class="label-box">
                <label for="first" class="first-label">姿勢矯正</label>
                <label for="second" class="second-label">伸展舒緩</label>
                <label for="third" class="third-label">減脂瘦身</label>
                <label for="four" class="four-label">呼吸放鬆</label>
            </div>
            <div class="first-series-container">
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu.png"
                blockColor="white" blockTitle="骨盆矯正的姿勢" 
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu.png"
                blockColor="white" blockTitle="改善疼痛症狀的伸展" 
                ></mamiyoga-course-block>
            </div>
            <div class="second-series-container">
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu.png"
                blockColor="white" blockTitle="伸展鼠蹊部的姿勢" 
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu.png"
                blockColor="white" blockTitle="睡醒好狀態的姿勢" 
                ></mamiyoga-course-block>
            </div>
            <div class="third-series-container">
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu.png"
                blockColor="white" blockTitle="舒緩疲勞與倦怠感" 
                ></mamiyoga-course-block>
                <mamiyoga-course-block bgImage="/mamiyoga/background-menu.png"
                blockColor="white" blockTitle="鬆弛的肚子變得緊實" 
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
}
</style>
