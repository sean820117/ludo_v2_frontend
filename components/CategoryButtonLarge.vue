<template>
    <button 
        v-if="toggled === false"
        @click="toggled = !toggled"
        class="category_button_large" 
        :style="{background: bgColor}"
        >
        <div class="category_button_large_inner_text">
            {{buttonInnerText}}
        </div>
    </button>
    <img 
        v-else
        @click="toggled = !toggled"
        class="category_button_large category_button_large_toggled_img"
        :src="categorys[category]"
        >
</template>

<script>
import btnActivityImg from 'static/btn-activity.svg'
import btnArtImg from 'static/btn-art.svg'
import btnBeautyImg from 'static/btn-beauty.svg'
import btnFatcutImg from 'static/btn-fatcut.svg'
import btnLifeImg from 'static/btn-life.svg'
import btnSportImg from 'static/btn-sport.svg'
import btnStudyingImg from 'static/btn-studying.svg'

export default {
    data:() => ({
        toggled:false,
        categorys:{
            'activity':btnActivityImg,
            'art':btnArtImg,
            'beauty':btnBeautyImg,
            'fatcut':btnFatcutImg,
            'life':btnLifeImg,
            'sport':btnSportImg,
            'studying' : btnStudyingImg,
        },
    }),
    props: {
        buttonInnerText: String,
        bgColor:String,
        category:String,
    },
}
</script>


<style>
.category_button_large {
    width: 348px;
    height: 97px;
    border-radius: 15px;
    background-color: #2f4b84; /* default bgcolor */
    display: flex;
    justify-content: center;
    align-items: center;
}
.category_button_large_inner_text {
    height: 36px;
    font-family: HelveticaNeue;
    font-size: 25px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}
.category_button_large_toggled_img {
    /* width: 348px; */
    height: 191px;
}
</style>
