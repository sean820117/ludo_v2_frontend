<template>
    <div class="banner">
        <img class="title-blue" src="~/static/resume/Group 153.png"/>
        <div class="login"><slot name="right-component"></slot></div>
    </div>
</template>
<style>
.banner{
    text-align: left;
    z-index: 10;
    position:fixed;
    top:0px;
    width: 100%;
    background: #FFF;
    height: 55px;
}
.banner .login{
    float:right;
    font-size: 14px;
    line-height: 55px;
    color:#0090FF;
    margin-right:20px;
}
.banner .title-blue{
    margin-left: 10px;
}
</style>