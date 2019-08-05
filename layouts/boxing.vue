<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import VueMq from 'vue-mq'
import Vue from 'vue'
// import { mapMutations, mapGetters } from 'vuex';

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 400,
    desktop: Infinity,
  }
});

export default {
    // data:() => ({
    //     is_login:false,
    // }),
    // computed: { 
    //     ...mapGetters({
    //         user : 'user/getData',
    //     }),
    // },
    head() {
        return  {
            title: 'BOXING',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { hid: 'description', name: 'description', content: '' },
                { property : 'og:title' , content:""},
                { property : 'og:type' , content:""},
                { property : 'og:url' , content:"https://www.ludonow.com/boxing"},
                { property : 'og:image' , content:""},
                { property : 'og:description' , content:""},
                { property : 'og:site_name' , content:"www.ludonow.com"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/fc-logo.ico' }
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
@font-face {
    font-family: 'MFLiHei_Nocom';
    src: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/MFLiHei_Noncommercial-Regular.ttf');
}

body {
  font-family: arial, "Microsoft JhengHei", "微軟正黑體" !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
    html, body, #__nuxt, #__layout, #__layout > div{
        height: 100vh;
        width: 450px;
        margin: 0 auto;
    }
    html {
        background-color: black;
    }
}

</style>

