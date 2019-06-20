<template>
    <div class="mamiyoga-divide-block">
        <input type="radio" class="labels first-divide" id="first" name="divide" checked>
        <input type="radio" class="labels second-divide" id="second" name="divide">
        <input type="radio" class="labels third-divide" id="third" name="divide">
        <div class="mamiyoga-divide-select">
            <div class="divide-label-box">
                <label for="first" class="first-label">姿勢一</label>
                <label for="second" class="second-label">姿勢二</label>
                <label for="third" class="third-label">
                    <img src="/mamiyoga/ai-badge.svg" alt=""> 姿勢三
                </label>
            </div>
            <mamiyoga-divide-every-block class="mamiyoga-divide-block-detail first" :courseTime="3"></mamiyoga-divide-every-block>
            <mamiyoga-divide-every-block class="mamiyoga-divide-block-detail second" :courseTime="4"></mamiyoga-divide-every-block>
            <mamiyoga-divide-every-block class="mamiyoga-divide-block-detail third" :courseTime="5" :ai_teacher="true"></mamiyoga-divide-every-block>
        </div>
    </div>
</template>

<script>
import MamiyogaDivideEveryBlock from '~/components/mamiyoga/MamiyogaDivideEveryBlock.vue';
export default {
    components:{
        MamiyogaDivideEveryBlock,
    }
}
</script>

<style>
@media (max-width: 899px) {
    .mamiyoga-divide-block {
        width: 100vw;
        /* height: 80vh; */
        /* background: red; */
    }
    .labels {
        display: none;
    }
    .divide-label-box {
        width: 90vw;
        margin: 0 auto;
        display: flex;
        justify-content:space-evenly;
    }
    .divide-label-box label {
        color: white;
        font-size: 12px;
        background-color: #BFBDBD; 
        padding: .5vh 6vw;
        border-radius: 30px;
        margin: 0 3px;
        box-shadow: 2px 2px 7px rgba(0,0,0,.3);
        position: relative;
    }
    .divide-label-box img {
        position: absolute;
        top: -25px;
        left: 0;
    }
    .mamiyoga-divide-block-detail {
        display: none;
    }
    .first-divide:checked ~ .mamiyoga-divide-select .first-label,
    .second-divide:checked ~ .mamiyoga-divide-select .second-label {
        background-color: #97A8AF;
    }
    .third-divide:checked ~ .mamiyoga-divide-select .third-label {
        background-color: #24798F;
    }
    .first-divide:checked ~ .mamiyoga-divide-select .mamiyoga-divide-block-detail.first,
    .second-divide:checked ~ .mamiyoga-divide-select .mamiyoga-divide-block-detail.second,
    .third-divide:checked ~ .mamiyoga-divide-select .mamiyoga-divide-block-detail.third {
        display: block;
    }
}
</style>
