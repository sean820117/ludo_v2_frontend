<template>
  <div>
    <course-header/>
    <section class="intro" :class="$mq">
      <img class="bg-img" v-if="$mq == 'desktop'" :src="go2u01" alt="">
      <img class="bg-img" v-else-if="$mq == 'mobile'" :src="go2u21" alt="">
      <div class="wrapper container" :class="$mq">
        <div class="row align-items-center banner-button" :class="$mq">
          <section class="course col-lg-6 col-sm-12 align-self-center">
            <!-- <h3>你聽過安麗嗎？</h3> -->
            <div class="actions" v-if="$mq == 'desktop'">
              <flat-button size="big" text="課程介紹" link="#intro"/>
              <flat-button size="big" bgColor="#FFD72E" color="#324D5B" borderColor="#FFD72E" text="體驗練習" link="https://www.ludonow.com/course/01"/>
            </div>
            <div class="actions" v-if="$mq == 'mobile'">
              <flat-button size="medium" text="課程介紹" link="#intro"/>
              <flat-button size="medium" bgColor="#FFD72E" color="#324D5B" borderColor="#FFD72E" text="體驗練習" link="https://www.ludonow.com/course/01"/>
            </div>
          </section>
          <!-- <section class="teacher col-lg-6 d-none d-lg-block d-xl-block">
            <div class="profile">
              <div class="profile-image" />
            </div>
            <div class="name">您老師</div>
            <div
              class="description"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam sapiente mollitia esse voluptatem, aliquid ea eius alias cum! Culpa numquam consequuntur dolore, velit accusamus porro ut modi doloribus aliquid praesentium laudantium corporis voluptate eos, doloremque iure, iusto mollitia quidem quae corrupti assumenda cum eveniet eligendi deserunt sed nemo.</div>
          </section> -->
        </div>
      </div>
    </section>
    <!-- <section class="teacher row d-lg-none d-xl-none">
      <h2 class="title">老師簡介</h2>
      <div class="profile">
        <div class="profile-image" />
      </div>
      <div class="name">您老師</div>
      <div
        class="description"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam sapiente mollitia esse voluptatem, aliquid ea eius alias cum! Culpa numquam consequuntur dolore, velit accusamus porro ut modi doloribus aliquid praesentium laudantium corporis voluptate eos, doloremque iure, iusto mollitia quidem quae corrupti assumenda cum eveniet eligendi deserunt sed nemo.</div>
    </section> -->
    <section class="all-courses" id="all-course">
      <div class="container">
        <h2 class="title">所有課程</h2>
        <div class="row">
          <div class="course-item col-lg-6 col-sm-12" v-for="course in courses" :key="course.id">
            <course-item
              :name="course.name"
              :description="course.description"
              :imageUrl="course.imageUrl"
              :tag="course.tag"
              :link="course.link"
            ></course-item>
          </div>
        </div>
      </div>
    </section>
    <!-- <input id="read-more" type="checkbox" />
    <section class="course-intro">
      <div class="container">
        <h2 class="title">課程簡介</h2>
        <article class="course-content">
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <img src="https://via.placeholder.com/1920x1080.png" />
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <img src="https://via.placeholder.com/2000x500.png" />
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
          <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit. Qui consequatur voluptatem incidunt, illum earum velit dolore in mollitia impedit id, dolorem atque ea, repellendus ullam natus perferendis laborum accusantium est, aut quisquam nisi quae! Rerum laboriosam sapiente amet libero quo.</p>
        </article>
      </div>
      <div class="read-more">
        <label for="read-more">閱讀更多</label>
      </div>
    </section> -->
    <div v-if=" $mq == 'desktop' " id="intro">
      <div class="go2u-desktop"  v-for="img in go2uDesktop" :key="img">
        <img :src="img" alt="">
        <button v-if="img == go2uDesktop[4]" class="buy-now-btn" href="#all-course">
          <a href="#all-course">  
            <img :class="$mq" :src="go2uBuy" alt="">
          </a>
        </button>
      </div>
    </div>
    <div v-else-if=" $mq == 'mobile' " id="intro">
      <div class="go2u-mobile"  v-for="img in go2uMobile" :key="img">
        <img :src="img" alt="">
        <button v-if="img == go2uMobile[6]" class="buy-now-btn" >
          <a href="#all-course">  
            <img :class="$mq" :src="go2uBuy" alt="">
          </a>
        </button>
      </div>
    </div>
    <course-footer></course-footer>
  </div>
</template>

<script>
import FlatButton from "~/components/FlatButton.vue";
import CourseItem from "~/components/teacher/CourseItem.vue";
import CourseFooter from "~/components/CourseFooter.vue";
import CourseHeader from "~/components/CourseHeader.vue";
import Vue from 'vue'
import VueMq from 'vue-mq'

import go2uBuy from 'static/go2u-desktop/buy.png';
/* desktop img */
import go2u01 from 'static/go2u-desktop/01.jpg';
import go2u04 from 'static/go2u-desktop/04.jpg';
import go2u05 from 'static/go2u-desktop/05.jpg';
import go2u06 from 'static/go2u-desktop/06.jpg';
import go2u07 from 'static/go2u-desktop/07.jpg';
import go2u08 from 'static/go2u-desktop/08.jpg';
import go2u09 from 'static/go2u-desktop/09.jpg'; 
import go2u10 from 'static/go2u-desktop/10.jpg';
/* mobile img */
import go2u21 from 'static/go2u-mobile/21.jpg';
import go2u22 from 'static/go2u-mobile/22.jpg';
import go2u23 from 'static/go2u-mobile/23.jpg';
import go2u24 from 'static/go2u-mobile/24.jpg';
import go2u25 from 'static/go2u-mobile/25.jpg';
import go2u26 from 'static/go2u-mobile/26.jpg';
import go2u27 from 'static/go2u-mobile/27.jpg';
import go2u28 from 'static/go2u-mobile/28.jpg';
import go2u29 from 'static/go2u-mobile/29.jpg';
import go2u30 from 'static/go2u-mobile/30.jpg';
/* course img */
import go2uCourse01 from 'static/go2u-course/course01.jpg';
import go2uCourse02 from 'static/go2u-course/course02.jpg';
import go2uCourse03 from 'static/go2u-course/course03.jpg';
import go2uCourse04 from 'static/go2u-course/course04.jpg';
import go2uCourse05 from 'static/go2u-course/course05.jpg';
import go2uCourse06 from 'static/go2u-course/course06.jpg';
import go2uCourse07 from 'static/go2u-course/course07.jpg';
import go2uCourse08 from 'static/go2u-course/course08.jpg';
import go2uCourse09 from 'static/go2u-course/course09.jpg';
import go2uCourse10 from 'static/go2u-course/course10.jpg';
import go2uCourse11 from 'static/go2u-course/course11.jpg';

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 992,
    desktop: Infinity,
  }
});


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
        name: '醫學學群',
        description: '適用科系：醫學系',
        imageUrl: go2uCourse01,
        tag: 'try-now',
        link: "/course/01",
      }, {
        id: 2,
        name: '社會科學學群',
        description: '適用科系：心理系、社會系、經濟系',
        imageUrl: go2uCourse02,
        tag: 'try-now',
        link: "/course/02",
      }, {
        id: 3,
        name: '法政學群',
        description: '適用科系：法律系、政治系',
        imageUrl: go2uCourse03,
        tag: 'try-now',
        link: "/course/03",
      }, {
        id: 4,
        name: '生命科學學群',
        description: '適用科系：生科系、生技系',
        imageUrl: go2uCourse04,
        tag: 'try-now',
        link: "/course/04",
      }, {
        id: 5,
        name: '電機資訊學群',
        description: '適用科系：資工系、電機系',
        imageUrl: go2uCourse05,
        tag: 'try-now',
        link: "/course/05",
      }, {
        id: 6,
        name: '建築與設計學群',
        description: '適用科系：建築系、設計系',
        imageUrl: go2uCourse06,
        tag: 'try-now',
        link: "/course/06",
      }, {
        id: 7,
        name: '數理化學學群',
        description: '適用科系：數學、化學、物理、地質、地科',
        imageUrl: go2uCourse07,
        tag: 'try-now',
        link: "/course/07",
      }, {
        id: 8,
        name: '工程學群',
        description: '適用科系：材料系、化工系、土木系、機械系',
        imageUrl: go2uCourse08,
        tag: 'try-now',
        link: "/course/08",
      }, {
        id: 9,
        name: '教育學群',
        description: '適用科系：教育系',
        imageUrl: go2uCourse09,
        tag: 'try-now',
        link: "/course/09",
      }, {
        id: 10,
        name: '文史哲學群',
        description: '適用科系：哲學系、外文系、歷史系',
        imageUrl: go2uCourse10,
        tag: 'try-now',
        link: "/course/10",
      }, {
        id: 11,
        name: '管理學群',
        description: '適用科系：企管系、財經系、會計系',
        imageUrl: go2uCourse11,
        tag: 'try-now',
        link: "/course/11",
      },
      ]),
    },
  },
  components: {
    FlatButton,
    CourseItem,
    CourseFooter,
    CourseHeader,
  },
  data:() => ({
    go2uDesktop:[
      go2u04,
      go2u05,
      go2u06,
      go2u07,
      go2u08,
      go2u09,
      go2u10,
    ],
    go2uMobile:[
      go2u22,
      go2u23,
      go2u24,
      go2u25,
      go2u26,
      go2u27,
      go2u28,
      go2u29,
      go2u30,
    ],
    go2u01, // desktop banner
    go2u21, // mobile banner
    go2uBuy,
  }),
  mounted() {
    console.log(this.$mq);
  },
};
</script>

<style lang="postcss" scoped>
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
  display: block;
  width: 100%;
  margin-bottom: 20px;
  font-weight: 200;
  font-size: 35px;
  text-align: center;
}
.intro {
  position: relative;
  width: 100%;
  /* height: 100%; */
  /* min-height: 90vh; */
  background-color: #324d5b;
  color: lightgrey;
  /* padding-top: 80px; */

  &.desktop { padding-top: 80px; }
  &.mobile { padding-top: 60px; }
}
.wrapper {
  /* height: 90vh; */
  position: absolute;
  
  
  /* display: flex; */
  justify-content: center;
  &.desktop { top: 63%; left: 1%;}
  &.mobile { top: 70%; }
}
.banner-button {
  width: 100vw;
  /* &.desktop { top: 63%; left: 1%;} */
  &.mobile { width: 100vw; }
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
.bg-img {
  /* position: absolute; */
  /* z-index: -1; */
  width: 100%;
}
.actions button {
  margin: 5px;
}
.teacher {
  padding: 35px;
  border-radius: 20px;
  background: rgba(255,255,255,0.3);
}
.teacher .profile {
  width: 100%;
  text-align: center;
}
.teacher .profile-image {
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url("https://via.placeholder.com/300.png");
  background-position: center;
}
.teacher .name {
  width: 100%;
  margin: 15px;
  text-align: center;
  font-size: 25px;
}
.all-courses {
  width: 100%;
  background-color: #F7F7F7;
  padding: 20px;
}
.course-item {
  text-align: center;
}
.course-intro {
  position: relative;
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  height: 80vh;
  overflow: hidden;
}
.read-more {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-180deg,rgba(255,255,255,0) 0%,#fff 70%);
}
.read-more label {
  padding: 5px;
  border-width: 3px;
  border-style: solid;
  cursor: pointer;
  font-size: 20px;
}
#read-more {
  display: none;
}
#read-more:checked ~ .course-intro .read-more {
  display: none;
}
#read-more:checked ~ .course-intro {
  overflow: visible !important;
  height: auto !important;
}
.course-content {
  color: darkgrey;
}
.course-content p {
  margin: 20px 0;
  font-size: 17px;
  font-weight: 50;
  line-height: 1.2;
}
.course-content img {
  max-width: 100%;
}
.go2u-desktop {
  width: 80%
}
.go2u-mobile {
  width: 100%
}
.go2u-desktop img {
  width: 100%
}
.buy-now-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;
}
.buy-now-btn a {
  width: 100%;
}
.buy-now-btn img {
  &.desktop { width: 40%; margin-top: -11%;}
  &.mobile { width: 80%; margin-top: -16%; }
}
</style>
