<template>
  <div :style="{visibility: is_ui_config_loaded ? 'visible':'hidden'} ">
    <titlebar :logo_src="is_ui_config_loaded ? ui_config.logo : ''" :project_name="is_ui_config_loaded ? ui_config.project_name : ''">
        <div v-if="is_login" slot="right-component" @click="$router.push('/logout')" :style="{ color : is_ui_config_loaded ? ui_config.base_color : '' }">登出</div>
        <div v-else slot="right-component" @click="$router.push('/resume/signup')" :style="{ color : is_ui_config_loaded ? ui_config.base_color : '' }">登入</div>
    </titlebar>
    <nuxt/>
    <loading 
        :active="!is_ui_config_loaded" 
        color="#1785db"
        loader="dots"
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
            title: '履歷範本 - 找工作的加速器',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '狂人履歷線上課程，讓你 60 分鐘超越別人 60 天的準備。' },
                { property : 'og:title' , content:"履歷範本 - 找工作的加速器"},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://www.ludonow.com/resume"},
                { property : 'og:image' , content:"https://www.ludonow.com/resume-og-img.jpg"},
                { property : 'og:description' , content:"狂人履歷線上課程，讓你 60 分鐘超越別人 60 天的準備。"},
                { property : 'og:site_name' , content:"www.ludonow.com"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
        }
    },
    async mounted() {
        if (process.client) {
            
            this.ui_config = await require('~/config/resume-config')
            this.is_ui_config_loaded = true;
            // console.log(this.ui_config.title);
            if (!this.$route.path.includes("/signup") && !this.$route.path.includes("/login") ) {
                localStorage.redirect = this.$route.path;
                console.log("save redirect : " + localStorage.redirect);
            }
            this.is_login = await this.$checkLogin(this.$store);
        }
    },
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

