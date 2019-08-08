<template>
    <div class="md-foot-block">
        <div class="md-foot-block-container">
            <div class="md-foot-block-info">
                <p>讓狂人飛教育股份有限公司</p>
                <p>客服信箱<br>contact@flyingcrazyer.com</p>
            </div>
            <div class="md-foot-block-copyright">
                <p>Copyright &copy; 2019 FlyingCrazyer Inc.</p>
                <p>All rights reserved<br>
                <router-link to='/privacy'>Privacy</router-link>
                <router-link to='/refund-policy'>Refund Policy</router-link></p>
            </div>
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
    height: 160px;
    background-color: #535353;
    text-align: left;
    color: white;
}
.md-foot-block-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.md-foot-block-info {
    font-size: 14px;
    padding: 20px 0 20px 0;
}
.md-foot-block-info p {
    margin-top:15px; 
    letter-spacing: 3px;
    font-weight: bolder;
    line-height: 1.5em;
}
.md-foot-block-copyright p {
    font-size: 14px;
    letter-spacing: 1px;
    margin-top:15px; 
    line-height: 1.5em;
    font-weight: bolder;
}
.md-foot-block-copyright a:active {
    color: #D2D2D2;
}
.md-foot-block-copyright a {
    color: white;
    display: inline-flex;
    margin: 0 10px 0 0;
    text-decoration: underline;
}
.md-foot-block-copyright p a:last-child {
    border-left: 1px solid white;
    padding-left: 10px;
}
@media (max-width: 500px) {
    .md-foot-block {
        height: 300px;
    }
    .md-foot-block-container {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding-left: 7vw;
    }
    .md-foot-block-info{
        font-size: 16px !important;
    }
    .md-foot-block-copyright p {
        font-size: 14px !important;
        font-weight: 400;
    }
}
</style>
