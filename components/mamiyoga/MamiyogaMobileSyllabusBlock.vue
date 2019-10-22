<template>
    <div class="mobile-syllabus-block" :style="{backgroundImage: `url('${bgImg}')`}">
        <div class="mobile-syllabus-block-text">{{courseTitle}}</div>
        <div class="mobile-syllabus-block-fade"></div>
    </div>
</template>

<script>
export default {
    props: {
        bgImg: String,
        courseTitle: String,
    }
}
</script>

<style>
.mobile-syllabus-block {
    width: 100%;
    height: 150px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 15px;
    color: #fff;
}
.mobile-syllabus-block-text {
    z-index: 8;
}
.mobile-syllabus-block-fade {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: linear-gradient(0deg, rgba(0,0,0,.5),transparent,transparent, transparent);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
@media (min-width: 769px) {
    .mobile-syllabus-block {
        width: 30%;
        max-width: 450px;
        height: 270px;
    }
}
</style>