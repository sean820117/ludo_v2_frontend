<template>
<body>
  <section class="intro">
    <div class="wrapper container">
      <div class="row align-items-center">
        <section class="course col-lg-6 col-sm-12 align-self-center">
          <h3>你聽過安麗嗎？</h3>
          <div class="actions">
            <flat-button size="big" text="課程介紹"/>
          </div>
        </section>
        <section class="teacher col-lg-6 col-sm-12">
          <div class="profile"/>
          <div class="name">您老師</div>
          <div
            class="description"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam sapiente mollitia esse voluptatem, aliquid ea eius alias cum! Culpa numquam consequuntur dolore, velit accusamus porro ut modi doloribus aliquid praesentium laudantium corporis voluptate eos, doloremque iure, iusto mollitia quidem quae corrupti assumenda cum eveniet eligendi deserunt sed nemo.</div>
        </section>
      </div>
    </div>
  </section>
  <section class="all-courses container">
    <h2 class="title">所有課程</h2>
    <div class="row">
      <div class="course-item col-lg-6 col-sm-12" v-for="course in courses" :key="course.id">
        <course-item
          :name="course.name"
          :description="course.description"
          :imageUrl="course.imageUrl"
          :tag="course.tag"
        ></course-item>
      </div>
    </div>
  </section>
  <section class="course-intro">
    <h2 class="title">課程簡介</h2>
  </section>
</body>
</template>

<script>
import FlatButton from "~/components/FlatButton.vue";
import CourseItem from "~/components/teacher/CourseItem.vue";
export default {
  head() {
    return {
      link: [{ rel: "stylesheet", href: "/bootstrap.css" }]
    };
  },
  props: {
    // mock data
    courses: {
      type: Array,
      default: () => ([{
        id: 1,
        name: '一夜成為大Seafood',
        description: '想要爽開雙B坐擁豪宅嗎？當seafood就對了！感恩！讚嘆！',
        imageUrl: 'https://img.chinatimes.com/newsphoto/2017-09-15/656/20170915003444.jpg',
        tag: 'try-now',
      }, {
        id: 2,
        name: '寶可夢大師訓練課程',
        description: '如何旅行20年還只有10歲？',
        imageUrl: 'https://www.newmobilelife.com/wp-content/uploads/2016/08/9262ade44ed04ed52547df21822bbdea.jpg',
        tag: 'preorder',
      }, {
        id: 3,
        name: '做出完美黑暗料理',
        description: '特級廚師小當家破天荒開班授課！絕對讓您吃料理像吃了大麻一樣！',
        imageUrl: 'https://cdn2.ettoday.net/images/991/d991908.jpg',
        tag: 'unlock-now',
      }]),
    },
  },
  components: {
    FlatButton,
    CourseItem
  }
};
</script>

<style scoped>
* {
  position: relative;
}
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
h2.title {
  margin-bottom: 20px;
  font-weight: 200;
  font-size: 35px;
  text-align: center;
}
.intro {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background-color: #324d5b;
  color: lightgrey;
}
.wrapper {
  height: 90vh;
}
.row {
  height: 100%;
}
.course {
  text-align: center;
}
.course h3 {
  margin-bottom: 35px;
  font-weight: 200;
  font-size: 50px;
}
.teacher .profile {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url("https://via.placeholder.com/300.png");
  background-position: center;
}
.teacher .name {
  font-size: 25px;
}
.all-courses {
  width: 100%;
  background-color: white;
  padding: 20px;
}
.course-item {
  text-align: center;
}
.course-intro {
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
