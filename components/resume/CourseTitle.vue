<template>
    <div class="title-bar">
        <div class="number-title">{{numberTitle}}</div>
        <div class="course-title">{{courseTitle}}</div>
    </div>
</template>
<script>
export default {
    props: {
        numberTitle: String,
        courseTitle:String,
    },
}
</script>
<style>
.title-bar{
    margin: auto;
    text-align: center;
}
.number-title{
    font-size: 25px;
    color: white;
}
.course-title{
    font-size: 30px;
    color: white;
}
</style>