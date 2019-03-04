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
              <flat-button size="big" text="課程介紹" link="#intro" hover="hover-fill-white"/>
              <flat-button size="big" bgColor="#FFD72E" color="#324D5B" hover="hover-fill-yellow" borderColor="#FFD72E" text="體驗練習" link="/course/01"/>
            </div>
            <div class="actions" v-if="$mq == 'mobile'">
              <flat-button size="medium" text="課程介紹" link="#intro" hover="hover-fill-white"/>
              <flat-button size="medium" bgColor="#FFD72E" color="#324D5B" hover="hover-fill-yellow" borderColor="#FFD72E" text="體驗練習" link="/course/01"/>
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
        <iframe v-if="img == go2uDesktop[2]" class="go2u-ad" src="https://www.youtube.com/embed/0PW1eBjfREk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        <iframe v-if="img == go2uMobile[2]" class="go2u-ad" :class="$mq" src="https://www.youtube.com/embed/0PW1eBjfREk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img :src="img" alt="">
        <button v-if="img == go2uMobile[6]" class="buy-now-btn" >
          <a href="#all-course">  
            <img :class="$mq" :src="go2uBuy" alt="">
          </a>
        </button>
      </div>
    </div>
    <div class="QA-section" :class="$mq">
      <div class="QA-title">課程相關問題 Q＆A</div>
      <div class="QA-question">01.請問備審課程在哪上課？上課時間為？</div>
      <div class="QA-answer">讓備審飛系列課程為『線上課程』喔！<br>當課程上線後，隨時隨地都可以透過手機、平板、與電腦上課。所以，在此平台上看課程影片，完全沒有時間和地點的問題！</div>
      <div class="QA-question">02.我可以在哪裡獲得備審建議？</div>
      <div class="QA-answer">備審的所有修改建議，都可以透過臉書私訊或網站進行，只要啟動 Messenger 聊天機器人或網站練習區，並輸入你的備審資料，就能得到修改建議。<br>我們結合了備審專家與AI應用，讓你隨時隨地都能得到切中通點的建議。</div>
      <div class="QA-question">03.課程可以看幾次？</div>
      <div class="QA-answer">讓備審飛的課程可以一直看一直看！<br>看到你的備審資料不想做為止！</div>
      <div class="QA-question">04.「備審建議機器人」一天可以用幾次？</div>
      <div class="QA-answer">只要付費之後，你所購買的學群機器人將可以體驗無限多次！我們期待你能大量有效的真實練習！</div>
      <div class="QA-question">05.還有其他問題怎麼辦？</div>
      <div class="QA-answer">歡迎寫信與我們聊聊：<br>go2universitynow@flyingcrazyer.com</div>
      <div class="QA-question">06.請問支援什麼付款方式？</div>
      <div class="QA-answer">信用卡與金融卡線上刷卡、超商代碼繳費。<br><br>信用卡線上刷卡<br>於付款頁面按下「購買」鍵後，即會轉往「紅陽科技」支付平台。海外用戶請記得先開啟「跨境付款」功能，不然會無法交易。另紅陽科技頁面之「手機號碼」欄位，請於開頭加上「國際電話區域碼」。目前可支援的卡別有：VISA、MasterCard、JCB、銀聯卡（中國以及海外地區可能會有系統延遲的狀況，交易成功後需要 12 至 15 分鐘後才會在讓備審飛平台收到交易成功之訊息以及通知信件）<br><br>超商代碼繳費<br>於付款頁面點選「超商付款」，取得該課程的付款代碼後，在期限內至以下超商進行代碼繳費即可。超商付款需手續費 26 元。一般來說 30 分鐘內，就會在你的「驗證信箱」收到購買成功的通知信件，超商付款詳細流程，可參考此篇文章。<br><br>可繳費超商：7-11、全家、萊爾富、OK 超商</div>
      <div class="QA-question">07.我未在繳費期限完成繳費怎麼辦？</div>
      <div class="QA-answer">超過繳費期限後，原本的「超商繳費代碼」會自動失效。只要重新進行購買程序，將會產生新的訂單，於新的繳費期限內繳費即可。</div>
      <div class="QA-question">08.我要如何確定付款成功？</div>
      <div class="QA-answer">當系統收到你的款項時，會寄送「付款成功通知信件」至你的「驗證信箱」，收件匣未看到的話，可以至垃圾信件匣查看。</div>
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
import axios from '~/config/axios-config';
import { mapMutations, mapGetters } from 'vuex';

import go2uBuy from 'static/go2u-desktop/buy.png';
/* desktop img */
import go2u01 from 'static/go2u-desktop/01.jpg';
import go2u04 from 'static/go2u-desktop/04.jpg';
import go2u05 from 'static/go2u-desktop/05.jpg';
// import go2u06 from 'static/go2u-desktop/06.jpg';
import go2u07 from 'static/go2u-desktop/07.jpg';
import go2u07b from 'static/go2u-desktop/07-5.jpg';
import go2u08 from 'static/go2u-desktop/08.jpg';
import go2u09 from 'static/go2u-desktop/09.jpg'; 
import go2u10 from 'static/go2u-desktop/10.jpg';
/* mobile img */
import go2u21 from 'static/go2u-mobile/21.jpg';
import go2u22 from 'static/go2u-mobile/22.jpg';
// import go2u23 from 'static/go2u-mobile/23.jpg';
import go2u24 from 'static/go2u-mobile/24.jpg';
import go2u25 from 'static/go2u-mobile/25.jpg';
import go2u26 from 'static/go2u-mobile/26.jpg';
import go2u27 from 'static/go2u-mobile/27.jpg';
import go2u27b from 'static/go2u-mobile/27-5.jpg';
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
        id: "01",
        name: '醫學學群',
        description: '適用科系：醫學系',
        imageUrl: go2uCourse01,
        tag: 'try-now',
        link: "/course/01",
      }, {
        id: "02",
        name: '社會科學學群',
        description: '適用科系：心理系、社會系、經濟系',
        imageUrl: go2uCourse02,
        tag: 'try-now',
        link: "/course/02",
      }, {
        id: "03",
        name: '法政學群',
        description: '適用科系：法律系、政治系',
        imageUrl: go2uCourse03,
        tag: 'try-now',
        link: "/course/03",
      }, {
        id: "04",
        name: '生命科學學群',
        description: '適用科系：生科系、生技系',
        imageUrl: go2uCourse04,
        tag: 'try-now',
        link: "/course/04",
      }, {
        id: "05",
        name: '電機資訊學群',
        description: '適用科系：資工系、電機系',
        imageUrl: go2uCourse05,
        tag: 'try-now',
        link: "/course/05",
      }, {
        id: "06",
        name: '建築與設計學群',
        description: '適用科系：建築系、設計系',
        imageUrl: go2uCourse06,
        tag: 'try-now',
        link: "/course/06",
      }, {
        id: "07",
        name: '數理化學學群',
        description: '適用科系：數學、化學、物理、地質、地科',
        imageUrl: go2uCourse07,
        tag: 'try-now',
        link: "/course/07",
      }, {
        id: "08",
        name: '工程學群',
        description: '適用科系：材料系、化工系、土木系、機械系',
        imageUrl: go2uCourse08,
        tag: 'try-now',
        link: "/course/08",
      }, {
        id: "09",
        name: '教育學群',
        description: '適用科系：教育系',
        imageUrl: go2uCourse09,
        tag: 'try-now',
        link: "/course/09",
      }, {
        id: "10",
        name: '文史哲學群',
        description: '適用科系：哲學系、外文系、歷史系',
        imageUrl: go2uCourse10,
        tag: 'try-now',
        link: "/course/10",
      }, {
        id: "11",
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
      // go2u06,
      go2u07,
      go2u07b,
      go2u08,
      go2u09,
      go2u10,
    ],
    go2uMobile:[
      go2u22,
      // go2u23,
      go2u24,
      go2u25,
      go2u26,
      go2u27,
      go2u27b,
      go2u28,
      go2u29,
      go2u30,
    ],
    go2u01, // desktop banner
    go2u21, // mobile banner
    go2uBuy,
  }),
  computed: mapGetters({
      user : 'user/getData',
  }),
  async mounted() {
    let isLogin = await this.$checkLogin(this.$store)
    if (this.user.user_id) {
      let res = await axios.post('/apis/get-payed-courses',{user_id:this.user.user_id});
      
      res.data.Items.forEach((item) => {
        this.courses.forEach((course) => {
          if(item.product_id == course.id) {
            console.log(item.product_id + " matched");
            course.tag = "start-course"
          }
        })
      });
    }
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
.go2u-ad {
  margin-top: 50px;
  width: 60vw;
  height: 36vw;
  margin-left: 10vw;

  &.mobile { margin-left: 10vw; width: 80vw;height: 48vw;}
}

.go2u-desktop {
  width: 80%;
  margin-left: 10%;
}
.go2u-mobile {
  width: 100vw;
}
.go2u-mobile img {
  width: 100vw;
}
.go2u-desktop img {
  width: 100vw;
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
.QA-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
}
.QA-title {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 50px;
  color: grey;
}
.QA-question {
  font-size: 24px;
  border-bottom: lightgrey 2px solid;
  width: 70%;
  color: grey;
  word-wrap: break-word;
}
.QA-answer{
  font-size: 20px;
  color: grey;
  width: 65%;
  margin-top: 20px;
  margin-bottom: 40px;
  word-wrap: break-word;
}
</style>
