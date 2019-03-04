<template>
  <div class="course-item">
    <div class="image" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div :class="`tag tag-${tag}`">{{tagName}}</div>
    </div>
    <div class="content">
      <div class="name">{{name}}</div>
      <div class="description">{{description}}</div>
      <flat-button v-if="tag == 'start-course'" size="small" text="開始上課" color="grey" borderColor="grey" :link="link" hover="hover-fill-red"></flat-button>
      <flat-button v-else size="small" text="了解詳情" color="grey" borderColor="grey" :link="link" hover="hover-fill-yellow"></flat-button>
    </div>
  </div>
</template>
<script>
import FlatButton from '~/components/FlatButton.vue'

const TAG_NAMES = {
  'try-now': '立即體驗',
  preorder: '限時預購',
  'unlock-now': '立即解鎖',
  'start-course': '上課囉～',

}

export default {
  components: {
    FlatButton,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  computed: {
    tagName() {
      return TAG_NAMES[this.tag]
    },
  },
}
</script>
<style scoped>
.course-item{
  display: inline-block;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  text-align: center;
}
.image {
  position: relative;
  max-width: 400px;
  height: 200px;
  border: 2px solid lightgrey;
  border-radius: 30px;
  background-position: center;
  background-size: cover;
}
.tag{
  position: absolute;
  top: 10px;
  right: -15px;
  width: 100px;
  height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 50;
  line-height: 40px;
}
.tag-try-now{
  background-color: #FFD72E;
  color: #4A4A4A;
}
.tag-preorder{
  background-color: #E0185D;
  color: white;
}
.tag-unlock-now{
  background-color: #3E18E0;
  color: white;
}
.tag-start-course {
  background-color: #aa0018;
  color: white;
}
.content{
  padding: 10px;
}
.name{
  font-size: 20px;
  font-weight: 2;
  color: grey;
}
.description{
  margin-top: 8px;
  margin-bottom: 15px;
  line-height: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 10;
  color: grey;
}
</style>
