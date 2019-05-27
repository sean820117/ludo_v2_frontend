<template>
    <div class="md-foot-block">
        <div class="md-foot-block-info">
            <p>讓狂人飛教育股份有限公司</p>
            <p>客服信箱<br>contact@flyingcrazyer.com</p>
        </div>
        <div class="md-foot-block-copyright">
            <p>Copyright &copy; 2019 FlyingCrazyer Inc.</p>
            <p>All rights reserved</p>
            <router-link to='/privacy'><p>privacy</p></router-link>
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
    font-size: 16px;
    padding: 20px 0 20px 0;
}
.md-foot-block-info p {
    margin-top:15px; 
    letter-spacing: 3px;
    font-weight: 400;
    line-height: 1.5em;
}
.md-foot-block-copyright p {
    font-size: 14px;
    letter-spacing: 1px;
    margin-top:15px; 
}
.md-foot-block-copyright a:active {
    color: #D2D2D2;
}
.md-foot-block-copyright a {
    color: #D2D2D2;
}
@media (max-width: 900px) {
    .md-foot-block-info{
        font-size: 16px !important;
    }
    .md-foot-block-copyright p {
        font-size: 14px !important;
    }
}
</style>
