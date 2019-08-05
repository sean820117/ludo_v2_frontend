<template>
    <div class="yoga-header" :style="{background: bgColor}">
        <div class="yoga-header-back">
            <img :src="YogaHeaderBack" class="yoga-header-title-back">
        </div>
        <div class="yoga-header-tag">
            <img :src="YogaHeaderTag" class="yoga-header-title-tag">
        </div>
    </div>
</template>

<script>
import YogaHeaderBack from '~/static/yoga/Yoga-header-back.svg';
import YogaHeaderTag from '~/static/yoga/Yoga-header-tag.svg';
export default {
    data:()=>({
        YogaHeaderBack: YogaHeaderBack,
        YogaHeaderTag: YogaHeaderTag,
    }),
    props: {
        bgColor: String,
    }
}
</script>

<style>
@media (max-width: 899px) {
    .yoga-header {
        width: 100vw;
        height: 60px;
        display: inline-flex;
        align-items: center;
		justify-content: center;
		flex-direction: row;
		z-index: 1;

    }
    .yoga-header-tag {
        width: 30px;
        height: 45px;
        position: absolute;
        right: 15px;
        top: 15px;
    }
    .yoga-header-title-tag {
        width: 75%;
    }
}
</style>
