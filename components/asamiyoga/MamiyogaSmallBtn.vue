<template>
    <div>
        <button v-html="btnText" :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-btn-small">{{btnText}}</button>
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
@media (max-width: 899px) {
    .mamiyoga-btn-small {
        width: 55px;
        height: 25px;
        border-radius:20px;
        font-weight: 500;
        font-size: 12px;
        text-align: center;
        border-style: none;
        box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    }
}
</style>
