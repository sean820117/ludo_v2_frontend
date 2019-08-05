<template>
  <div class="bmi_layout">
    <bmi-header></bmi-header>
    <nav class="bmi-tag">
        <h1 class="nav-label" id="label-bmi"  @click="$router.push('/bmi')">BMI值計算機</h1>
        <h5 class="nav-label" id="label-tdee"  @click="$router.push('/bmi/tdee')">TDEE值計算機</h5>
    </nav>
    <nuxt/>
    <footer class="bmi-index-content">
        <p style="margin:5vh 0 1vh;font-weight:300;color:#969696;">&copy;2019 LUDO All Rights Reserved</p>
    </footer>
  </div>
  
</template>

<script>

import VueMq from 'vue-mq'
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex';
import BmiHeader from '~/components/bmi/BmiHeader.vue'

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 400,
    desktop: Infinity,
  }
});

export default {
    components: {
        BmiHeader,
    },
    data:() => ({
        // ui_config:Object,
        // is_ui_config_loaded:false,
        // is_login:false,
    }),
    computed: { 
        // ...mapGetters({
        //     user : 'user/getData',
        // }),
    },
    head() {
        return  {
            title: 'BMI計算',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { name: 'keywords', content: 'BMI怎麼算,BMI是什麼,BMI計算,bmi年齡標準,bmi年齡對照,bmi值'},
                { hid: 'description', name: 'description', content: '' },
                { property : 'og:title' , content:"BMI值｜線上計算器"},
                { property : 'og:type' , content:"website"},
                { property : 'og:url' , content:"http://www.ludonow.com/bmi"},
                { property : 'og:image' , content:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-fb-share.jpg"},
                { property : 'og:description' , content:"BMI值計算公式: BMI = 體重(公斤) / 身高2(公尺2)五秒回饋，馬上測出你的身材，在台灣人口在哪個區間"},
                { property : 'og:site_name' , content:"LUDONOW.COM"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/logo.ico' }
            ],
            script: [
                // { src: 'https://player.vimeo.com/api/player.js' },
                // { id:"ze-snippet" ,src: 'https://static.zdassets.com/ekr/snippet.js?key=1254e916-e473-4d23-904e-63c6886e6497' },
            ],
        }
    },
    // async mounted() {
    //     if (process.client) {
            
    //         this.is_login = await this.$checkLogin(this.$store);
    //     }
    // },
}
</script>

<style lang="postcss">
body {
  font-family: arial, "Microsoft JhengHei", "微軟正黑體" !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* background: #FDFCF7; */
  overflow-x: hidden;

}

/* html, body, #__nuxt, #__layout, #__layout > div{
    height: 100vh;
    width: 100vw;
    margin: 0;
    background-color: #FDFCF5; 
    
} */
.bmi_layout {
    height: 100vh;
    width: 100vw;
    margin: 0;
    background-color: #FDFCF5; 
}


*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
/* width */
::-webkit-scrollbar {
    width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border: none;
    border-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}

.contact-us-block {
    padding:10px 0 30px 0;
    background: #535353;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
}
.contact-us-block img{
    margin:30px 0 10px 0;
}


::placeholder {
    color:#DE396C;
}
.bmi-tag {
    display: flex;
    justify-content: space-evenly;
}
.nav-label {
    color: #989898;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
}
.active {
    color: #3855A3;
    border-bottom: 2px solid #3855A3;
    font-size: 17px;
}
.bmi-index-content {
    padding:  0 10px;
}
.bmi-index-content p, .bmi-index-content h2, .bmi-index-content h3 {
    text-align: center;
    font-size: 12px; 
    margin-top: 10px; 
    color: #707070;
    font-weight:bold;
}

.bmi-index-form {
    width: 250px;
    margin: 20px auto 0;
}
.bmi-index-form p {
    text-align: left;
    margin-bottom: 5px; 
}
.bmi-index-form-input-li {
    margin: 15px 0;
}
.bmi-index-form-input-label input {
    display: none;
}
.bmi-index-form-input-label {
    display: flex;
    justify-content: space-between;
}
.bmi-index-form-input-label label {
    color:#FFF;
    background: #C3C3C3;
    padding: 10px 52px;
    border-radius: 5px;
    cursor: pointer;
}
.bmi-index-form-input-label #girl:checked ~ .first-label,
.bmi-index-form-input-label #boy:checked ~ .second-label {
    background: #3855A3;
}
.bmi-index-form-input-label #tdeegirl:checked ~ .first-label,
.bmi-index-form-input-label #tdeeboy:checked ~ .second-label {
    background: #3855A3;
}

.bmi-index-form-input-value input, 
.bmi-index-form-input-value select {
    display: block;
    width: 250px;
    height: 40px;
    border: solid 1px rgba(0,0,0,.3);
    border-radius: 5px;
}
.bmi-index-form-input-button {
    width: 250px;
    height: 45px;
    color:white; 
    border-radius: 5px;
    border-style: none; 
    font-size: 17px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 7px 2px;
    cursor: pointer;
}
@media (min-width:769px) {
    .bmi-tag {
        width: 400px;
        margin: 0 auto;
    }
}
</style>

