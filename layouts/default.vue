<template>
  <div>
    <nuxt/>
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
    mobile: 769,
    desktop: Infinity,
  }
});

export default {
  data:()=>({
    check_lang: '',
  }),
  head: {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { id:"ze-snippet" ,src: 'https://static.zdassets.com/ekr/snippet.js?key=a844136e-f47b-428d-bd65-0af9ed880cbc' },
    ]
  },
  async mounted() {
    if (process.client) {
      if (!this.$route.path.includes("/signup") && !this.$route.path.includes("/login")) {
        localStorage.redirect = this.$route.path;
        console.log('save:' + localStorage.redirect)
      }
    }
  }
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
  margin: 0;
  padding: 0;
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
.category_buttom {
    border-radius: 15px;
    background-color: #2f4b84; /* default bgcolor */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

