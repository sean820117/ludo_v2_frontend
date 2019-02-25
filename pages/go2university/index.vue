<template>
  <div class="campaign_container">
    <mq-layout mq="medium">
      <img class="campaign_background" :src="campaignBgMobile" alt="">
    </mq-layout>
    <mq-layout mq="large">
      <img class="campaign_background" :src="campaignBg" alt="">
    </mq-layout>
    <div class="word_part">
      <div class="count_down_label" :class="$mq" ><i>上線倒數</i></div>
      <div class="count_down" :class="$mq">{{ day }} <span class="small_unit" :class="$mq" >天</span> {{ hr }} <span class="small_unit" :class="$mq" >時</span> {{ min }} <span class="small_unit" :class="$mq" >分</span> {{ sec }} <span class="small_unit" :class="$mq" >秒</span></div>
      <div class="count_down_label" :class="$mq" ><i>搶先訂閱</i></div>
      <form class="subscribe_form" :class="$mq" action="https://api.ludonow.com/apis/subscribe-go2university">
        <input type="email" name="email" class="subscribe_email" :class="$mq" placeholder="輸入email..." v-model="email"/>
        <button class="subscribe_send" :class="$mq" @click="sendSubscribe">訂閱</button>
      </form>
      <div class="or">or</div>
      <a href="https://m.me/2018930911516278?ref=9aB25EjxH"><img class="msg_button" :src="msgButton" alt="" :class="$mq"></a> 
    </div>
  </div>
</template>

<script>
import campaignBg from 'static/campaign-bg.jpg'
import campaignBgMobile from 'static/campaign-bg-m.jpg'
import msgButton from 'static/msg-button.png'
import go2uOgImage from 'static/go2u-og-image.png'
import axios from '~/config/axios-config';
import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    medium: 1280,
    large: Infinity,
  }
});

export default {
    head: {
      titleTemplate: '讓備審飛 - 教你做出讓教授滿意的備審資料',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property : 'og:title' , content:"讓備審飛 - 教你做出讓教授滿意的備審資料"},
        { property : 'og:type' , content:"education tech."},
        { property : 'og:url' , content:"https://www.ludonow.com/go2university"},
        { property : 'og:image' , content:"https://www.ludonow.com"+go2uOgImage},
        { property : 'og:description' , content:"台灣第一堂教你做備審資料的線上課程,讓所有人都能無負擔的考上理想大學"},
        { property : 'og:site_name' , content:"www.ludonow.com"},
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: '台灣第一堂教你做備審資料的線上課程,讓所有人都能無負擔的考上理想大學' }
      ]
    },
    data:() => ({
        campaignBg,
        campaignBgMobile,
        msgButton,
        go2uOgImage,
        email:"",
        day: 0, 
        hr: 0, 
        min: 0, 
        sec: 0,
    }),
    methods: {
        sendSubscribe(e) {
          e.preventDefault();
          if (this.email) {
            axios.get('/apis/subscribe-go2university?email='+this.email)
                .then((response) => {
                    if (response.status == '200') {
                        console.log("send success")
                        window.alert("訂閱成功！");
                    } else {
                        console.log(response)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
          } else {
            window.alert("請輸入email");
          }
          
        },
        countdown() {
          const end = Date.parse(new Date('2019-02-26T12:00:00'.concat('.000+08:00')))
          const now = Date.parse(new Date())
          const msec = end - now
          let day = parseInt(msec / 1000 / 60 / 60 / 24)
          let hr = parseInt(msec / 1000 / 60 / 60 % 24)
          let min = parseInt(msec / 1000 / 60 % 60)
          let sec = parseInt(msec / 1000 % 60)
          this.day = day
          this.hr = hr > 9 ? hr : '0' + hr
          this.min = min > 9 ? min : '0' + min
          this.sec = sec > 9 ? sec : '0' + sec
          const that = this
          // console.log(this.day+this.hr+this.min+this.sec);
          setTimeout(function () {
            that.countdown()
          }, 1000)
        },
    },
    mounted: function () {
      this.countdown()
      console.log(go2uOgImage);
    },
}
</script>

<style lang="postcss">
html, body{
	padding: 0;
	margin: 0;
  height: 100%;
  font-family: arial, "Microsoft JhengHei", "微軟正黑體";
}
.campaign_background {
  width: 100%;
  position: absolute;
  z-index: -1;
}
.word_part {
  position: absolute;
  margin-top: 40%;
  width: 100%;
  text-align:center;
}
.count_down_label {
  font-size: 60px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 40px;
  &.medium { font-size: 2em; }
  &.large { font-size: 60px; }
}
.count_down {
  
  color: white;
  /* font-size: 140px; */
  text-align: center;
  /* width: 100%; */
  border: white 1px solid;
  display: unset;
  padding: 0 20px;
  &.medium { font-size: 28px; }
  &.large { font-size: 140px; }
}
.small_unit {
  /* font-size: 70px; */
  &.medium { font-size: 14px; }
  &.large { font-size: 70px; }
}
.subscribe_form {
  background: white;
  border-radius: 15px;
  /* width: 500px; */
  /* height: 50px; */
  margin: 0 auto;
  text-align: left;
  display: flex;
  justify-content: space-between;
  &.medium { width: 300px; height: 30px;}
  &.large { width: 500px; height: 50px;}
}
.subscribe_email {
  border: none;
  /* font-size: 14px; */
  margin-left: 20px;
  /* margin-top: 10px;
  margin-bottom: 10px; */
  /* width: 350px; */
  &.medium { width: 200px; font-size: 14px; margin-bottom: 3px; margin-top: 3px;}
  &.large { width: 350px; font-size: 20px; margin-bottom: 10px; margin-top: 10px;}
}
.subscribe_send {
  /* font-size: 30px; */
  background: #FFD03D;
  padding: 0 10px 0 10px;
  color: white;
  height: 100%;
  border-radius: 15px;
  border: none;
  font-weight: bold;
  &.medium { font-size: 20px; }
  &.large { font-size: 30px; }
}
.or {
  font-size: 40px;
  color: white;
  margin: 10px 0;
}
.msg_button {
  /* width: 300px; */
  cursor: pointer;
  &.medium { width: 200px; }
  &.large { width: 300px; }
}
</style>