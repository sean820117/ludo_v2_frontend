<template>
  <div :style="{background:'black'}">
    <course-header bgColor="transparent" color="#76FF00" />
    <section class="intro" :class="$mq">
      <!-- <img class="bg-img" v-if="$mq == 'desktop'" :src="go2u01" alt=""> -->
      <img class="bg-img" src="/fitness-bg-01.png" alt="">
      <div class="wrapper container" :class="$mq">
        <div class="row align-items-center banner-button" :class="$mq">
          <section class="course col-lg-6 col-sm-12 align-self-center">
            <h1 class="green-color">運動</h1>
            <h5>即刻開始</h5>
            <div class="actions" v-if="$mq == 'desktop'">
              <flat-button size="big" text="課程介紹" link="/fitness/course/01" hover="hover-fill-white" :dl="true"/>
              <flat-button size="big" bgColor="#76FF00" color="black" hover="hover-fill-yellow" borderColor="#76FF00" text="體驗練習" link="/fitness/course/drew01"/>
            </div>
            <div class="actions" v-if="$mq == 'mobile'">
              <flat-button size="medium" text="課程介紹" link="/fitness/course/drew" hover="hover-fill-white" :dl="true"/>
              <flat-button size="medium" bgColor="#76FF00" color="black" hover="hover-fill-yellow" borderColor="#76FF00" text="體驗練習" link="/fitness/course/drew01"/>
            </div>
          </section>
        </div>
      </div>
    </section>
    <teacher-intro></teacher-intro>
    <course-intro></course-intro>
    <!-- <div class="QA-section" :class="$mq">
      <div class="QA-title">課程相關問題 Q＆A</div>
      <div class="QA-question">01.請問備審課程在哪上課？上課時間為？</div>
      <div class="QA-answer">讓備審飛系列課程為『線上課程』喔！<br>當課程上線後，隨時隨地都可以透過手機、平板、與電腦上課。所以，在此平台上看課程影片，完全沒有時間和地點的問題！</div>
      <div class="QA-question">02.我可以在哪裡獲得備審建議？</div>
      <div class="QA-answer">備審的所有修改建議，都可以透過臉書私訊或網站進行，只要啟動 Messenger 聊天機器人或網站練習區，並輸入你的備審資料，就能得到修改建議。<br>我們結合了備審專家與AI應用，讓你隨時隨地都能得到切中通點的建議。</div>
      <div class="QA-question">03.課程可以看幾次？</div>
      <div class="QA-answer">讓備審飛的課程可以一直看一直看！<br>看到你的備審資料不想做為止！</div>
      <div class="QA-question">04.「備審建議機器人」一天可以用幾次？</div>
      <div class="QA-answer">只要付費之後，你所購買的學群機器人將可以體驗無限多次！我們期待你能大量有效的真實練習！</div>
      <div class="QA-question">​​05.會有真人幫我把我的備審資料改到好嗎？</div>
      <div class="QA-answer">不會的，讓備審飛系列課程完全都是透過 AI 人工智能為您檢測。</div>
      <div class="QA-question">06.請問支援什麼付款方式？</div>
      <div class="QA-answer">信用卡與金融卡線上刷卡、超商代碼繳費。<br><br>信用卡線上刷卡<br>於付款頁面按下「購買」鍵後，即會轉往「紅陽科技」支付平台。海外用戶請記得先開啟「跨境付款」功能，不然會無法交易。另紅陽科技頁面之「手機號碼」欄位，請於開頭加上「國際電話區域碼」。目前可支援的卡別有：VISA、MasterCard、JCB、銀聯卡（中國以及海外地區可能會有系統延遲的狀況，交易成功後需要 12 至 15 分鐘後才會在讓備審飛平台收到交易成功之訊息以及通知信件）<br><br>超商代碼繳費<br>於付款頁面點選「超商付款」，取得該課程的付款代碼後，在期限內至以下超商進行代碼繳費即可。超商付款需手續費 26 元。一般來說 30 分鐘內，就會在你的「驗證信箱」收到購買成功的通知信件，超商付款詳細流程，可參考此篇文章。<br><br>可繳費超商：7-11、全家、萊爾富、OK 超商</div>
      <div class="QA-question">07.我未在繳費期限完成繳費怎麼辦？</div>
      <div class="QA-answer">超過繳費期限後，原本的「超商繳費代碼」會自動失效。只要重新進行購買程序，將會產生新的訂單，於新的繳費期限內繳費即可。</div>
      <div class="QA-question">08.我要如何確定付款成功？</div>
      <div class="QA-answer">當系統收到你的款項時，會寄送「付款成功通知信件」至你的「驗證信箱」，收件匣未看到的話，可以至垃圾信件匣查看。</div>
      <div class="QA-question">09.還有其他問題怎麼辦？</div>
      <div class="QA-answer">歡迎寫信與我們聊聊：<br>contact@flyingcrazyer.com</div>
    </div> -->
    <div class="fixed-buy-button-container">
        <router-link class="fixed-buy-button" to="/fitness/confirm">
            前往購買
        </router-link>
    </div>
    <course-footer></course-footer>
  </div>
</template>

<script>
import FlatButton from "~/components/FlatButton.vue";
import CourseItem from "~/components/teacher/CourseItem.vue";
import CourseFooter from "~/components/CourseFooter.vue";
import CourseHeader from "~/components/CourseHeader.vue";
import TeacherIntro from "~/components/fitness/TeacherIntro.vue";
import CourseIntro from "~/components/fitness/CourseIntro.vue";

import Vue from 'vue'
import VueMq from 'vue-mq'
import axios from '~/config/axios-config';
import { mapMutations, mapGetters } from 'vuex';

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
      link: [{ rel: "stylesheet", href: "/bootstrap.css" }],
      // link: [{ rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" }],
    };
  },
  props: {
    
  },
  components: {
    FlatButton,
    // CourseItem,
    CourseFooter,
    CourseHeader,
    TeacherIntro,
    CourseIntro,
  },
  data:() => ({
  }),
  computed: mapGetters({
      user : 'user/getData',
  }),
  async mounted() {
    let isLogin = await this.$checkLogin(this.$store)
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
.green-color {
  color: #76FF00 !important;
}
.green-bg-color {
  background: #76FF00 !important;
}
h1.title {
  display: block;
  width: 100%;
  margin-top: 30px;
  /* font-weight: 200; */
  font-size: 25px;
  text-align: center;
}
.intro {
  position: relative;
  width: 100%;
  /* height: 100%; */
  /* min-height: 90vh; */
  /* background-color: #324d5b; */
  color: lightgrey;
  /* padding-top: 80px; */

  &.desktop { padding-top: 80px; }
  &.mobile { padding-top: 0px; }
}
.wrapper {
  /* height: 90vh; */
  position: absolute;
  
  
  /* display: flex; */
  justify-content: center;
  &.desktop { top: 63%; left: 1%;}
  &.mobile { top: 20%; }
}
.wrapper h1 {
  font-size: 132px;
  color: #76FF00;
  text-align: center;
}
.wrapper h5 {
  font-size: 62px;
  color: white;
  text-align: center;
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
  /* margin-top: 50px; */
  width: 60vw;
  height: 60vw;
  /* margin-left: 10vw; */

  &.mobile { width: 100vw;height: 100vw;}
}
.go2u-ad-campaign {
  background: black;
  padding: 10px 0 10px 0;
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
}

.go2u-ad-campaign-sub {
  background: black;
  padding: 10px 0 10px 0;
  text-align: center;
  color: white;
  font-size: 20px;
  margin-top: -7px;
}
.go2u-ad-campaign-sub span {
  font-weight: bold;
}

.go2u-desktop {
  width: 60vw;
  margin-left: 20vw;
}
.go2u-mobile {
  width: 100vw;
}
.go2u-mobile img {
  width: 100vw;
}
.go2u-desktop img {
  width: 100%;
}
.intro-buttons {
  display: flex;
  justify-content: center;
  margin-top: -50vw;
  margin-bottom: 33vw;
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
.go-buy {
  position: fixed;
  right: 7vw;
  top: 75vh;
  width: 60px;
  height: 60px;
  background: rgb(255, 215, 46);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}
.go-buy:hover {
  color: white;
}
.go-buy-cart::before {
  font-size: 30px;
  color: white;
}

@font-face{
  font-family:"Glyphicons Halflings";
  src:url(https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/fonts/glyphicons-halflings-regular.eot);
  src:url(https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/fonts/glyphicons-halflings-regular.eot?#iefix) format("embedded-opentype"),url(https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/fonts/glyphicons-halflings-regular.woff2) format("woff2"),url(https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/fonts/glyphicons-halflings-regular.woff) format("woff"),url(https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/fonts/glyphicons-halflings-regular.ttf) format("truetype"),url(https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format("svg")
}

.glyphicon-shopping-cart:before{
  content:"\e116"
}
.glyphicon {
  position:relative;
  top:1px;
  display:inline-block;
  font-family:"Glyphicons Halflings";
  font-style:normal;
  font-weight:400;
  line-height:1;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
.fixed-buy-button-container {
    display: flex;
    position: fixed;
    bottom: 0px;
    width: 100vw;
    height: 50px;
    background: #76FF00;
    box-shadow: -1px 0px 20px 1px lightgrey;
    justify-content: center;
    align-items: center;
}
.fixed-buy-button {
    border: none;
    /* background: #E0185D; */
    color: black;
    font-size: 20px;
    border-radius: 20px;
    /* padding: 5px 50px; */
    text-decoration: none;
}
.fixed-buy-button:active {
    color: white;
}
.fixed-buy-button:hover {
    color: white;
}
</style>
