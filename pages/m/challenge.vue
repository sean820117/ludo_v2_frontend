<template>
  <section class="container">
    <div class="center_container">
      <header class="">
        <h1 class="title">
          搜尋挑戰
        </h1>
        <search-bar/>
      </header>
      
      <menu-bottom></menu-bottom>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import SearchBar from '~/components/SearchBar.vue'
import MenuBottom from '~/components/MenuBottom.vue'

export default {
  components: {
    AppLogo,
    SearchBar,
    MenuBottom
  },
  head: {
    title: 'Ludo'
  },
  data:() => ({
      tagButtonList:[
        {
          id:1,
          button_name: "劉軒",
          bgColor: "#2f4b84"
        },
        {
          id:2,
          button_name: "每天喝水2000cc",
          bgColor: "#f5ad1f"
        },
        {
          id:3,
          button_name: "成大新生解任務",
          bgColor: "#b10a24"
        },
        {
          id:4,
          button_name: "分享好音樂",
          bgColor: "#0a5d55"
        },
        {
          id:5,
          button_name: "台北電影節",
          bgColor: "#f65b02"
        },
      ],
      categoryButtonList:[
        {
          id:1,
          button_name: "學習",
          bgColor: "#2f4b84",
          category: "studying"
        },
        {
          id:2,
          button_name: "生活",
          bgColor: "#f5ad1f",
          category: "life"
        },
        {
          id:3,
          button_name: "運動",
          bgColor: "#29a496",
          category: "sport"
        },
        {
          id:4,
          button_name: "瘦身",
          bgColor: "#f88484",
          category: "fatcut"
        },
        {
          id:5,
          button_name: "美容",
          bgColor: "#ed986f",
          category: "beauty"
        },
        {
          id:6,
          button_name: "藝術",
          bgColor: "#0A5D55",
          category: "art"
        },
        {
          id:7,
          button_name: "活動",
          bgColor: "#B10A24",
          category: "activity"
        },
      ]
  }),
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  max-width: 768px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}
.center_container {
  max-width: 374px;
}

header {
  position: fixed;
  background: white;
  width: 374px;
}
.title {
  font-family: "HelveticaNeue-Medium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: bold;
  font-size: 20px;
  color: #434343;
  letter-spacing: 1px;
  padding-top: 8px;
  padding-bottom:5px;
  /* padding-left: 13px;
  padding-right: 10px; */
  line-height: 1.25;
  text-align: center;
  /* position: fixed;  */
  /* width: 348px; */
  background: white;
}
.center_container .search_bar {
  /* position: fixed; */
  /* top: 41px; */
  /* background: white; */
}

</style>

