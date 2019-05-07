<template>
    <div class="teacher-intro-container">
      <h1 class="title green-color">老師簡介</h1>
      <img class="teacher-intro-photo" src="/fitness-teacher.png" alt="">
      <p class="teacher-intro-name green-color">Drew</p>
      <div class="teacher-intro-content">運動傷害專業背景之職業健身教練，指導超過千名學生、幫助職業田徑選手調整身心狀態、針對一般人修復身體與日常照護運動。</div>
      <h2 class="sub-title">職業資歷</h2>
      <h3 class="content green-color">8年</h3>
      <h2 class="sub-title">專業證照</h2>
      <h3 class="content green-color">ACE-Certified Personal Trainer</h3>
      <img class="more" src="/btn-more.png" alt="">
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
.teacher-intro-container {
    display: flex;
    width: 100vw;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background: #151515;
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
h3.content {
  display: block;
  width: 100%;
  margin-top: 20px;
  /* font-weight: 200; */
  font-size: 21px;
  text-align: center;
}
.teacher-intro-photo {
    width: 80px;
    margin-top: 60px;
}
.teacher-intro-name {
    font-size: 21px;
    margin-top: 10px;
    font-style: oblique;
    font-weight: bold;
}
.teacher-intro-content {
    /* margin-top: 20px; */
    font-size: 18px;
    color:white;
    margin: 20px 30px 0px 30px;
}
.more {
    width: 45px;
    margin-top: 60px;
    margin-bottom: 30px;
}
</style>
