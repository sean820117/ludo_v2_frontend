<template>
    <div class="video-list-item">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        course_id: String,
        title:String,
    },
}
</script>

<style>
.video-list-item {
    height: 50px;
    width: 100%;
    font-size: 14px;
    padding-left: 20px;
    padding-top: 10px;
    color: #324D5B;
    background: #EDEDED;
    border: #324D5B 1px solid;
    font-weight: bold;
    cursor: pointer;
}
</style>
