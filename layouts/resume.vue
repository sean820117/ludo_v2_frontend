<template>
  <div :style="{visibility: is_ui_config_loaded ? 'visible':'hidden'} ">
    <titlebar :logo_src="is_ui_config_loaded ? ui_config.logo : ''" :project_name="is_ui_config_loaded ? ui_config.project_name : ''" :style="{ background : is_ui_config_loaded ? ui_config.base_color : '' , color : 'white' }">
        <div v-if="user.user_id != ''" slot="right-component" @click="$router.push('/logout')" :style="{ background : is_ui_config_loaded ? ui_config.base_color : '' , color : 'white' }">登出</div>
        <div v-else slot="right-component" @click="$router.push('/resume/login')" :style="{ background : is_ui_config_loaded ? ui_config.base_color : '' , color : 'white' }">登入</div>
    </titlebar>
    <nuxt/>
    <resume-footer></resume-footer>
  </div>
  
</template>

<script>
import Titlebar from "~/components/resume/Titlebar"
import ResumeFooter from "~/components/resume/ResumeFooter.vue";
import VueMq from 'vue-mq'
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex';

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
        ResumeFooter,
    },
    data:() => ({
        ui_config:Object,
        is_ui_config_loaded:false,
        is_login:false,
    }),
    computed: { 
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    head() {
        return  {
            title: '履歷範本 - 找工作的加速器',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { hid: 'description', name: 'description', content: '狂人履歷線上課程，讓你 60 分鐘超越別人 60 天的準備。' },
                { property : 'og:title' , content:"履歷範本 - 找工作的加速器"},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://www.ludonow.com/resume"},
                { property : 'og:image' , content:"https://www.ludonow.com/resume/resume-og-img.jpg"},
                { property : 'og:description' , content:"狂人履歷線上課程，讓你60分鐘超越別人60天的準備。"},
                { property : 'og:site_name' , content:"www.ludonow.com"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/fc-logo.ico' }
            ],
            script: [
                { src: 'https://player.vimeo.com/api/player.js' },
                { id:"ze-snippet" ,src: 'https://static.zdassets.com/ekr/snippet.js?key=1254e916-e473-4d23-904e-63c6886e6497' },
            ],
        }
    },
    async mounted() {
        if (process.client) {
            this.$scrollTo("#header");
            this.ui_config = await require('~/config/resume-config')
            let loader = this.$loading.show({
                color:"#1785db",
                loader:"dots",
                opacity: 0.8,
            });
            setTimeout(() => {
                this.is_ui_config_loaded = true;    
                loader.hide();
            }, 1000);
            
            if (!this.$route.path.includes("/signup") && !this.$route.path.includes("/login") ) {
                localStorage.redirect = this.$route.path;
                console.log("save redirect : " + localStorage.redirect);
            }
            this.is_login = await this.$checkLogin(this.$store);

            // set ga and fb pixel
            let gtag_config = {}
            let campaign = {};
            // if (this.$route.query.utm_source && this.$route.query.utm_medium) {
            //     campaign = {
            //         source: this.$route.query.utm_source, // utm_source
            //         medium: this.$route.query.utm_medium, // utm medium
            //         name: this.$route.query.utm_campaign,
            //     }
            // } else {
            //     campaign = {
            //         source: '(direct)', // utm_source
            //         medium: '(none)', // utm medium
            //     }
            // }
            gtag_config.campaign = campaign;
            if (this.$route.path === "/resume" || this.$route.path === "/resume/") {
                console.log("true");
                gtag_config.page_title = 'LP cover';
                gtag_config.page_path = '/0_cover';
            }

            if (this.is_login) {
                gtag_config.user_id = this.user.user_id;
            } 

            this.$gtag('config', 'UA-123332732-3', gtag_config);
            this.$fbq("init",this.ui_config.fbq_id);
            this.$fbq("track","PageView");
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
  overflow-x: hidden;
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

</style>

