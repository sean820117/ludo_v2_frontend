<template>
    <div class="video-list-item">
        <div class="title">{{ title }}</div>
        <div class="title2">{{ title2 }}</div>
    </div>
</template>

<script>
export default {
    props: {
        course_id: String,
        title:String,
        title2:String,
    },
}
</script>

<style scoped>
.video-list-item {
    height: 60px;
    width: 100%;
    font-size: 14px;
    padding-left: 20px;
    padding-top: 10px;
    color: #324D5B;
    background: #EDEDED;
    border: #324D5B 1px solid;
    /* font-weight: bold; */
    cursor: pointer;
    overflow: hidden;
}
.title {
    font-weight: bold;
    font-size: 16px;
}
</style>
