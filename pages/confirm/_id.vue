<template>
  <div class="body">
    <page-header></page-header>
    <main class="container">
      <section class="title">
        <h1>《讓備審飛》線上課程付款頁面 - {{ product_name }}全課堂</h1>
      </section>
      <form class="row" @submit="onSubmit" :action="payment_url" method="post">
        <section class="choices col-lg-6 col-sm-12">
          <radio-button :disabled="true" :active="prices[0].active" @click.native="window.alert('此優惠已結束～')" :text="'$ ' + prices[0].price + '/全課堂(超早鳥已經售罄)'" />
          <radio-button :active="prices[1].active" @click.native="handlePriceSelecet(1)" :text="'$'+prices[1].price + '/全課堂(3/20前早鳥搶購中)'" />
          <radio-button :disabled="true" :active="prices[2].active" @click.native="window.alert('此方案尚未開啟～')" :text="'$ ' + prices[2].price + '/全課堂(原價)'" />
          <radio-button :active="prices[3].active" @click.native="handlePriceSelecet(3)" text="$4999 全部科系一次買起來" />
        </section>
        <section class="purchase col-lg-6 col-sm-12">
          <div class="purchase-content">
            <label for="coupon">付款方式</label><v-select :clearable="false" :options="[{label:'信用卡',value:'credit-card'},{label:'網路銀行',value:'web-atm'},{label:'超商代收',value:'store-pay'},{label:'免費序號兌換',value:'coupon'}]" v-model="payment_type"></v-select>
            <label for="customer">購買人</label><input id="customer" name="customer" v-model="customer" type="text" />
            <label for="phone">聯絡電話</label><input id="phone" name="phone" v-model="phone" type="text" />
            <label for="email">電子信箱</label><input id="email" name="email" v-model="email" type="email" />
            <label for="coupon">免費序號兌換</label><input id="coupon" name="coupon" v-model="coupon" type="text" placeholder="選填"/>
            <input type="hidden" name="price" v-model="selected_price">
            <input type="hidden" name="product_name" v-model="product_name">
            <input type="hidden" name="user_id" v-model="user.user_id">
            <input type="hidden" name="product_id" v-model="course_id">
            <input type="hidden" name="payment_type" v-model="payment_type.value">
            <div class="error">{{errors}}</div>
            <button type="submit" role="button" class="forwarding">{{ !coupon ? "前往付款" : "前往兌換" }}</button>
          </div>
        </section>
      </form>
    </main>
    <div id="push" />
    <v-dialog/>
  </div>
</template>
<script>
import axios from '~/config/axios-config';
import { mapMutations, mapGetters } from 'vuex';
import Vuex from 'vuex';
import PageHeader from "~/components/confirm/Header.vue";
import RadioButton from "~/components/confirm/RadioButton.vue";
import vSelect from 'vue-select';
import Vue from 'vue'
import VModal from 'vue-js-modal'
import VueClipboard from 'vue-clipboard2'
import { EMAIL_REGEX } from '~/components/regex.js'

Vue.use(VueClipboard)
Vue.use(VModal, { dialog: true })
Vue.component('v-select', vSelect);

import CourseData01 from 'static/data/course/01.js'
import CourseData02 from 'static/data/course/02.js'
import CourseData03 from 'static/data/course/03.js'
import CourseData04 from 'static/data/course/04.js'
import CourseData05 from 'static/data/course/05.js'
import CourseData06 from 'static/data/course/06.js'
import CourseData07 from 'static/data/course/07.js'
import CourseData08 from 'static/data/course/08.js'
import CourseData09 from 'static/data/course/09.js'
import CourseData10 from 'static/data/course/10.js'
import CourseData11 from 'static/data/course/11.js'

export default {
  data() {
    return {
      errors: null,
      customer: '',
      phone: '',
      email: '',
      coupon:'',
      course_id:"",
      payment_url:"",
      payment_type:{label:'信用卡',value:'credit-card'},
      product_name:"",
      shared_time:0,
      share_url:"",
      prices:[
        {
          active: false,
          price:499,
        },
        {
          active: true,
          price:1200,
        },
        {
          active: false,
          price:2200,
        },
        {
          active: false,
          price:4999,
        }
      ],
      selected_price: 0,
      courseDataSet: {
          "01": CourseData01,
          "02": CourseData02,
          "03": CourseData03,
          "04": CourseData04,
          "05": CourseData05,
          "06": CourseData06,
          "07": CourseData07,
          "08": CourseData08,
          "09": CourseData09,
          "10": CourseData10,
          "11": CourseData11,
      },
    }
  },
  computed: mapGetters({
      user : 'user/getData',
  }),
  methods: {
    onSubmit(e) {
      if (this.customer.length === 0 || this.phone.length === 0 || this.email.length === 0) {
        this.errors = '請填寫所有欄位'
        e.preventDefault();
        return
      }
      if (!EMAIL_REGEX.test(this.email)) {
        this.errors = '電子信箱格式錯誤'
        e.preventDefault();
        return
      }
      if (this.selected_price < 399) {
        this.errors = '錯誤'
        e.preventDefault();
        return
      }
      if (!this.user.user_id) {
        this.errors = '請先登入'
        e.preventDefault();
        return
      }
      
      if(this.coupon) {
        e.preventDefault();
        this.checkCoupon();
        this.errors = "序號驗證中"
      } else if(!this.payment_type) {
        this.errors = '請選擇付款狀態'
        e.preventDefault();
        return
      }

      this.errors = null
      // @TODO
      alert('確認付款？')
      // window.location.href = process.env.apiUrl + payment_url + "?customer=" + customer + "&phone=" + phone + "&price=" + selected_price 
    },
    doCopy: function () {
      this.$copyText('安安，做備審做到懷疑人生了嗎？我發現這裏有個蠻棒的備審資料教學，你從我這個連結來買的話可以現折$50元喔！來看吧 ' + this.share_url).then(function (e) {
        alert('複製成功')
        console.log(e)
      }, function (e) {
        alert('複製失敗')
        console.log(e)
      })
    },
    async checkCoupon() {
      const coupon = this.coupon;
      let response = await axios.post('/apis/use-coupon',{coupon_id:coupon,activity_id:"1"})
      this.handlePriceSelecet(0);

      if (response.data.status == '200') {
          console.log(response.data.result);
          if(response.data.result == "1") {
            console.log("coupon check success")
            let res2 = await axios.post('/apis/coupon-pay',{coupon_id:coupon,product_id:this.course_id,cash_flow:"coupon",user_id:this.user.user_id,price:0,customer:this.customer,phone:this.phone,email:this.email})
            if (res2.status == 200) {
              console.log("coupon pay success")
              window.alert("兌換" + this.product_name + "成功！");
              // this.$route.go(-1);
              this.$router.push('/go2university');
            } else {
              window.alert("此組序號已經使用過囉～");
            }
          }
      } else {
          console.log(response)
          window.alert("兌換失敗！ 請檢察登入狀態或聯絡我們");
      }
    },
    async checkIsPayed() {  
      const user_id = this.user.user_id;
      const product_id = this.course_id;
      console.log(this.user.user_id)
      let response = await axios.post('/apis/check-is-payed',{product_id:product_id,user_id:user_id})
      let response2 = await axios.post('/apis/check-is-payed',{product_id:"12",user_id:user_id})
      if (response.data.status == '200' && response2.data.status == '200') {
          console.log("check-is-payed success")
          if(response.data.result == 1 || response2.data.result == 1) {
            window.alert("您已購買過此課程囉～");
            this.$router.push('/go2university');
          }
      } else {
          console.log(response)
      }
    },
    handlePriceSelecet(selected) {
        let selected_price_item = this.prices[selected];
        this.prices.forEach(element => {
          element.active = false;
        });

        selected_price_item.active = true;
        this.selected_price = selected_price_item.price;
        
        if(this.selected_price == 4999) {
          this.course_id = "12";
        } else {
          this.course_id = this.$route.params.id;
        }
    },
    showDialog() {
      this.$modal.show('dialog', {
        title: '分享優惠活動',
        text: '歡迎挑戰 $399 分享價，只要把以下訊息含網址貼給6個以上朋友，並且至少有6個朋友點入看完課程網頁，你就可以馬上以$399購買課程。而你的朋友從你給的網址點入的話，他們也可以馬上折$50喔！<br><br>※朋友點入進度請看(0/6)<br>​​※網址是連到備審課程的，沒有毒<br>​​※分享內文文字可以改，但請不要改網址<br><br><span style="background:grey;color:white;">「安安，做備審做到懷疑人生了嗎？我發現這裏有個蠻棒的備審資料教學，你從我這個連結來買的話可以現折$50元喔！來看吧 ' + this.share_url+ '」</span>',
        buttons: [
          {
            title: '一鍵複製',
            handler: () => { this.doCopy() }
          },
        ]
      },
      {
        width: '300px'
      })  
    },
    hideDialog() {
      this.$modal.hide('dialog');
    },
    async getSharedTime() {
      try {
        let response = await axios.post('/apis/get-shared-time',{activity_id:"1",user_id:this.user.user_id})
        if(response.data.status == 200) {
          this.shared_time = response.data.result;
        }
      } catch (error) {
        window.alert("發生錯誤請重新進入");
      }
      
    }
  },
  head() {
    return {
      link: [{ rel: "stylesheet", href: "/bootstrap.css" }]
    };
  },
  components: {
    PageHeader,
    RadioButton,
  },
  async mounted(){
      /* init params */
      if (!process.server) {
        
        this.selected_price = this.prices[0].price;
        this.payment_url = process.env.apiUrl + "/apis/suntech-pay";
        console.log(localStorage.activity_id);
        // if(localStorage.activity_id == 1) {
        //   this.prices[0].price = 449
        // }
        this.product_name = this.courseDataSet[this.course_id].course_name;
        console.log(this.product_name);
      }
  },
  async created(){
      /* init params */
      if (!process.server) {
        this.course_id = this.$route.params.id;
        let store = this.$store;
        await this.$forceLogin(store);
        if (!this.courseDataSet[this.course_id]) {
          window.alert('網址錯誤');
          this.$router.go(-1);
        } else {

        }
        await this.checkIsPayed();
        // await this.getSharedTime();
        this.share_url = process.env.baseUrl + "/go2university/share?id=" + this.user.user_id ;
      }
  },
};
</script>
<style scoped>
.share-url-label {
  display: inline;
  background: grey;
  color: white;
}
.body {
  box-sizing: border-box;
  height: 100vh;
}
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  margin-bottom: 5%;
}
h1 {
  color: grey;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
}
.choices {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.choices .radio-button {
  margin: 10px;
  max-width: 500px;
}
.purchase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background: white;
}
.purchase-content {
  width: 80%;
  margin-bottom: 100px;
}
.purchase label, .purchase input {
  width: 100%;
}
.purchase label {
  text-align: left;
  color: grey;
  font-size: 14px;
  font-weight: 400;
}
.purchase input {
  margin-bottom: 5px;
  height: 30px;
  border: none;
  border-bottom: 1px solid grey;
}
.forwarding {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: #E0185D;
  color: white;
  text-align: center;
  cursor: pointer;
}
#push {
  height: 80px;
}
.error {
  color: red;
}
@media (min-width: 899px) {
  h1 {
    font-size: 30px;
  }
  .forwarding {
    position: inherit;
    max-width: 150px;
    margin-top: 30px;
    border-radius: 10px;
  }
  .forwarding:hover {
    transform: translate(0, -5%);
  }
  #push {
    height: 0;
  }
}
</style>
