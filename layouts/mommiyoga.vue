<template>
  <div class="mami_layout">
    <div class="mami_back">
        <nuxt/>
    </div>
</div>
</template>

<script>
import VueMq from 'vue-mq'
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex';

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    iphone: 400,
    mobile: 500,
    desktop: Infinity,
  }
});

export default {
    components: {
        // Titlebar,
        // ResumeFooter,
    },
    data:() => ({
        // ui_config:Object,
        // is_ui_config_loaded:false,
        is_login:false,
    }),
    computed: { 
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    head() {
        return  {
            title: 'MAMI YOGA',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { hid: 'description', name: 'description', content: '以教學影片結合動作校正AI，開設的互動式線上課程。與日本人氣瑜珈老師橋本麻美合作，推出14堂課程包含33個動作，針對產後2~6個月黃金修復期的課程。使用者能夠觀看教學影片，並透過手機鏡頭拍攝自己的練習動作，取得分析與修正建議。' },
                { property : 'og:title' , content:"Mami Yoga 日本人氣瑜珈"},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://mamiyoga.ludonow.com"},
                { property : 'og:image' , content:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/facebook-share-preview.jpg"},
                { property : 'og:description' , content:"以教學影片結合動作校正AI，開設的互動式線上課程。與日本人氣瑜珈老師橋本麻美合作，推出14堂課程包含33個動作，針對產後2~6個月黃金修復期的課程。使用者能夠觀看教學影片，並透過手機鏡頭拍攝自己的練習動作，取得分析與修正建議。"},
                { property : 'og:site_name' , content:"https://mamiyoga.ludonow.com"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/head_logo.ico' },
                { rel: 'apple-touch-icon', href: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/apple-icon.png' }
            ],
            script: [
            ],
            
        }
    },
    // Android用戶跳轉
    // beforeCreate(){
    //     if(process.client) {
    //         if(navigator.userAgent.match(/android/i)){
    //             alert('目前僅開放iOS系統使用，Android系統敬請期待！')
    //             this.$router.push('/')
    //         }
    //     }
    // },
    async mounted() {
        if (process.client) {
            this.is_login = await this.$checkLogin(this.$store);
            window.fbAsyncInit = function() {
                FB.init({
                appId            : '1075325352502513',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v5.0'
                });
            };

            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
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

html, body, #__nuxt, #__layout, #__layout > div{
    height: 100vh;
    width: 100vw;
    margin: 0;
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

@media (min-width:769px) {
    /* html, body, #__nuxt, #__layout, #__layout > div{
        height: 100vh;
        width: 450px;
        margin: 0 auto;
    }
    html {
        background-color: black;
    } */
    .mami_layout{
        min-height: 100vh;
        background: black ;
    }
    .mami_back {
        width: 450px;
        margin: 0 auto;
    }
}

</style>

