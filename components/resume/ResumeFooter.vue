<template>
    <div class="md-foot-block">
                <div class="md-foot-block-info">
                    <p>連絡電話&nbsp;&nbsp;(+886)0900-000-000</p>
                    <p>客服信箱&nbsp;&nbsp;contact@flyingcrazyer.com</p>
                </div>
                <div class="md-foot-block-copyright">
                    <p>Copyright &copy; 2019 FlyingCrazyer Inc.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex';

export default {
    
}
</script>
<style>
.md-foot-block {
    width: 100vw;
    height: 330px;
    background-color: #535353;
    text-align: center;
    color: #D2D2D2;
}
.md-foot-block-info {
    font-size: 22px;
    padding: 50px;
}
.md-foot-block-info p {
    margin-top:15px; 
    letter-spacing: 3px;
    font-weight: 400;
}
.md-foot-block-copyright p {
    font-size: 18px;
    letter-spacing: 1px;
    margin-top:15px; 
}
</style>
