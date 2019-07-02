<template>
    <div class="square-btn">
        <button :style="{backgroundColor:bgColor,color:ftColor}" v-html="btnText">{{btnText}}
        </button>
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

.square-btn {
    width: 100px;
    height: 35px;
    border-radius: 5px;
}
.square-btn button {
    border-style: none;
    width: 100px;
    height: 35px;
    border-radius: 5px;
    letter-spacing: 3px;
    display: block;
}

</style>
