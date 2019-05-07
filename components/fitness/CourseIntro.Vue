<template>
    <div class="course-intro-container">
      <h1 class="title green-color">課程簡介</h1>
      <img class="course-intro-photo" src="/fitness-course-intro.jpg" alt="">
      <h2 class="sub-title">什麼是運動治療？</h2>
      <div class="course-intro-content">
          由美國職業籃球隊(NBA)私人運動傷害防護師，同時也是芝加哥『Rebound Fitness』運動復健訓練中心創辦人-Greg Cadichon, A.T.C率領的『Rebound Fitness』運動傷害防護團隊來台授課三位國際運動醫學專家：骨科醫師、運動傷害防護員（AT）與物理治療師（PT）的利用現場的ACL特殊臨床案例展示Gerg團隊一條龍的治療手法專精手法實作課程，將會實際的帶每位學員操作課堂上所提到的訓練技巧以及注意事項；透過自身的練習與體驗，讓每位學員更能學以致用，當學員回到自身工作岡位的時候，更能夠實際運用到工作職場。除了可以深入學習，美國職業團隊徒手治療手法、獨家評估手法、最新臨床科技與治療技術、手術復健領域整合秘笈。讓你上完課程後可以快速找出傷害的根源，精準治療、評估運動員的各種狀況以不同觀點來治療、如何使用運動治療來搭配復健療程，大大增加自己的競爭力！課程當中還有別的地方聽不到的〈獨家分享-從防護員到奧運選手御用診所創業成功祕訣〉。
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
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
h2.sub-title {
  display: block;
  width: 100%;
  margin-top: 50px;
  /* font-weight: 200; */
  font-size: 21px;
  text-align: center;
  color: white;
}
.course-intro-container {
    display: flex;
    width: 100vw;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background: #000000;
}
.course-intro-photo {
    width: 305px;
    margin-top: 20px;

}
.course-intro-content {
    font-size: 18px;
    color:#A7A6A6;
    margin: 20px 30px 20px 30px;
}
</style>
