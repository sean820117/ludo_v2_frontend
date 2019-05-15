<template>
  <div>
    <course-header bgColor="white" color="gray" />
    <nuxt/>
    <course-footer></course-footer>
  </div>
</template>

<script>
import CourseFooter from "~/components/CourseFooter.vue";
import CourseHeader from "~/components/CourseHeader.vue";
export default {
    components: {
        CourseFooter,
        CourseHeader,
    },
    head: {
        title: '讓備審飛 - 教你做出讓教授滿意的備審資料',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '台灣第一堂教你做備審資料的線上課程,讓所有人都能無負擔的考上理想大學' },
            { property : 'og:title' , content:"讓備審飛 - 教你做出讓教授滿意的備審資料"},
            { property : 'og:type' , content:"education tech."},
            { property : 'og:url' , content:"https://www.ludonow.com/go2university"},
            { property : 'og:image' , content:"https://s3-ap-southeast-1.amazonaws.com/ludo-beta/go2u-og-image.jpg"},
            { property : 'og:description' , content:"台灣第一堂教你做備審資料的線上課程,讓所有人都能無負擔的考上理想大學"},
            { property : 'og:site_name' , content:"www.ludonow.com"},
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
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
.category_buttom {
    border-radius: 15px;
    background-color: #2f4b84; /* default bgcolor */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

