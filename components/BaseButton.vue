<template>
    <button 
        class="base_button"
        :style="{background: bgColor}"
        >
        <div class="button_name">{{buttonInnerText}}</div>
    </button>
</template>

<script>
export default {
    props: {
        buttonInnerText: String,
        bgColor:String,
    },
}
</script>

<style>
.base_button {
    /* width: 81px; */
    height: 28px;
    border-radius: 50px;
    display: flex;
    background-color: #2f4b84; /*defalt*/
}
.button_name {
    margin-left: 18px;
    margin-right: 18px;
    font-family: HelveticaNeue;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.15;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
}
</style>
