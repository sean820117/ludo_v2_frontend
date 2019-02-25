<template>
    <div class="ludoheader">
        <header class="">
            <h1 class="title">
                搜尋挑戰
            </h1>
            <search-bar/>
        </header>
    </div>
</template>

<script>
import SearchBar from '~/components/SearchBar.vue'
export default {
    data:() => ({
    }),
    props: {
        margin: String,
    },
    components: {
        SearchBar,
    },
}
</script>

<style>
.ludoheader {
    display: flex;
    justify-content: space-between;
}
header {
    display: flex;
    flex-direction: column;
}
.title {
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
</style>
