<template>
  <div :style="{visibility: is_ui_config_loaded ? 'visible':'hidden'} ">
    <titlebar :logo_src="is_ui_config_loaded ? ui_config.logo : ''" :project_name="is_ui_config_loaded ? ui_config.project_name : ''">
        <div v-if="is_login" slot="right-component" @click="$router.push('/logout')" :style="{ color : is_ui_config_loaded ? ui_config.base_color : '' }">登出</div>
        <div v-else slot="right-component" @click="$router.push('/victor/signup')" :style="{ color : is_ui_config_loaded ? ui_config.base_color : '' }">登入</div>
    </titlebar>
    <nuxt/>
    <div class="contact-us-block" v-if="$route.path !== '/victor'" style="width:100vw;">
        <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 152: (152 * 1.5)" :height="$mq === 'mobile' ? 53: (53 * 1.5)" viewBox="0 0 152 53">
            <text id="聯絡我們" transform="translate(76 40)" fill="#fff" font-size="38" font-family="PingFangTC-Semibold, PingFang TC" font-weight="600"><tspan x="-76" y="0">聯絡我們</tspan></text>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 142: (142 * 1.5)" :height="$mq === 'mobile' ? 96: (96 * 1.5)" viewBox="0 0 142 96.096">
            <g id="Group_610" data-name="Group 610" transform="translate(-117 -2993.308)">
                <text id="電話_02_2314-5818" data-name="電話
            (02) 2314-5818" transform="translate(188 3005.308)" fill="#fff" font-size="11" font-family="PingFangTC-Semibold, PingFang TC" font-weight="600"><tspan x="-11" y="0">電話</tspan><tspan y="0" font-family="Helvetica-Bold, Helvetica" font-weight="700"></tspan><tspan font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="-37.611" y="20">(02) 2314-5818</tspan></tspan></text>
                <text id="郵箱_endingcourt99_gmail.com" data-name="郵箱
            endingcourt99@gmail.com" transform="translate(188 3066.404)" fill="#fff" font-size="11" font-family="PingFangTC-Semibold, PingFang TC" font-weight="600"><tspan x="-11" y="0">郵箱</tspan><tspan y="0" font-family="Helvetica-Bold, Helvetica" font-weight="700"></tspan><tspan font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="-70.458" y="20">endingcourt99@gmail.com</tspan></tspan></text>
            </g>
        </svg>
        <img :src="is_ui_config_loaded ? ui_config.logo : ''" alt="logo">
    </div>
    <loading 
        :active="!is_ui_config_loaded" 
        color="#A42073"
        loader="dots"
        opacity="0.8"
    ></loading>
  </div>
  
</template>

<script>
import Titlebar from "~/components/resume/Titlebar"
import Loading from 'vue-loading-overlay';
import VueMq from 'vue-mq'
import Vue from 'vue'
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 400,
    desktop: Infinity,
  }
});

export default {
    components: {
        Titlebar,
        Loading,
    },
    data:() => ({
        ui_config:Object,
        is_ui_config_loaded:false,
        is_login:false,
    }),
    head() {
        return  {
            title: '學習歷程 - 得勝者文教',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '得勝者文教，帶你秒懂108課綱—學習歷程' },
                { property : 'og:title' , content:"學習歷程 - 得勝者文教"},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://www.ludonow.com/victor"},
                { property : 'og:image' , content:""},
                { property : 'og:description' , content:"得勝者文教，帶你秒懂108課綱—學習歷程"},
                { property : 'og:site_name' , content:"www.ludonow.com"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
        }
    },
    async mounted() {
        if (process.client) {
            this.ui_config = await require('~/config/victor-config')
            // console.log(this.ui_config.title);
            if (!this.$route.path.includes("/signup") && !this.$route.path.includes("/login") ) {
                localStorage.redirect = this.$route.path;
                console.log("save redirect : " + localStorage.redirect);
            }
            this.is_ui_config_loaded = true;
            this.is_login = await this.$checkLogin(this.$store);
            

        }
    },
}
</script>

<style>
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
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
/* width */
::-webkit-scrollbar {
width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
background: #f1f1f1; 
border: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
background: #888; 
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

</style>

