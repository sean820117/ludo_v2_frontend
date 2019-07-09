<template>
    <button 
        class="category_button_medium category_button" 
        :style="{background: bgColor}"
        >
        <div 
            class="category_button_medium_inner_text"
            :style="{fontSize:fontSize}"
            >
            {{buttonInnerText}}
        </div>
    </button>
</template>

<script>

export default {
    data:() => ({
    }),
    props: {
        buttonInnerText: String,
        bgColor:String,
        category:String,
        fontSize:String,
    },
}
</script>


<style>
.category_button_medium {
    width: 226px;
    height: 68px;
    border-radius: 15px;
    background-color: #2f4b84; /* default bgcolor */
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-left: 4px;
    margin-right: 4px;
}
.category_button_medium_inner_text {
    /* height: 26px; */
    font-family: HelveticaNeue;
    font-size: 19px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}
</style>
