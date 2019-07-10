<template>
    <div>
        <button v-html="btnText" 
        :style="{backgroundColor:bgColor,color:ftColor,fontFamily:family,}" class="course-btn">{{btnText}}</button>
    </div>
</template>

<script>
export default {
    props: {
        bgColor: String,
        ftColor: String,
        btnText: String,
        family: String,
    }
}
</script>

<style>
.course-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    border-style: none;
    cursor: pointer;
}

</style>
