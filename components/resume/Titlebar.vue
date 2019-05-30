<template>
    <div class="project_header" id="header">
        <router-link :to="'/' + project_name"><img class="title-blue" :src="logo_src"/></router-link>
        <div class="login"><slot name="right-component"></slot></div>
    </div>
</template>
<script>
export default {
    props: {
        logo_src:String,
        project_name:String,
    },
}
</script>

<style>
.project_header{
    text-align: left;
    z-index: 10;
    position:fixed;
    top:0px;
    width: 100%;
    background: #FFF;
    height: 55px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
}
.project_header .login{
    float:right;
    font-size: 14px;
    line-height: 55px;
    color:transparent;
    margin-right:20px;
    cursor: pointer;
}
.project_header .title-blue{
    margin-left: 10px;
    height: 80%;
    margin-top: 5px;
}
@media (min-width: 900px) {
    .project_header .title-blue{
        margin-left: 12vw !important;
    }
    .project_header .login{
        margin-right:12vw !important;
    }
}
</style>