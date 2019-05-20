<template>
    <div class="header">
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
.header{
    text-align: left;
    z-index: 10;
    position:fixed;
    top:0px;
    width: 100%;
    background: #FFF;
    height: 55px;
}
.header .login{
    float:right;
    font-size: 14px;
    line-height: 55px;
    color:transparent;
    margin-right:20px;
    cursor: pointer;
}
.header .title-blue{
    margin-left: 10px;
    height: 80%;
    margin-top: 10px;
}
</style>