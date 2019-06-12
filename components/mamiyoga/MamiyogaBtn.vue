<template>
    <div>
        <button v-html="btnText" :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-btn">{{btnText}}</button>
    </div>
</template>

<script>
export default {
    props: {
        bgColor: String,
        ftColor: String,
        btnText: String,
    }
}
</script>

<style>
@media (max-width:899px) {
    .mamiyoga-btn {
        width: 135px;
        height: 35px;
        border-radius:20px;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 3px; 
        text-align: center;
        display: block;
        margin: 10px auto;
        border-style: none;
    }
}
</style>
