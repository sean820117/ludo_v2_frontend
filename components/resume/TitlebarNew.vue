<template>
    <div class="banner">
        <router-link :to="'/' +product_name"><img class="title-img" :src="logo_src"/></router-link>
        <div class="login"><slot name="right-component"></slot></div>
    </div>
</template>
<script>
export default {
    props: {
        logo_src:String,
        product_name:String,
    },
}
</script>

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
.banner .title-img{
    margin-left: 10px;
    height: 80%;
    margin-top: 10px;
}
</style>