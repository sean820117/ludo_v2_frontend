<template>
    <div class="double-ten-container">
        <div class="count-down-banner single-block">限時倒數 <p>{{ `${d}天${h}小時${m}分${s}秒` }}</p></div>
        <div v-if="$mq == 'desktop'">
            <div class="single-block" v-for="i in pic_list" :key="i">
                <img :id="`block-img-${i}`" v-if="i != 1 && i != 10 && i != 15 && i != 16" :src="`/double-ten/快銷業面電腦版@2x ${i}.jpg`"/>
                <a v-else-if="i == 10" href="https://lihi1.com/b1A2i" @click="scrollToBottom"><img :src="`/double-ten/快銷業面電腦版@2x ${i}.jpg`"/></a>
                <a v-else href="#block-img-16" @click="scrollToBottom"><img :src="`/double-ten/快銷業面電腦版@2x ${i}.jpg`"/></a>
            </div>
        </div>
        <div v-if="$mq == 'mobile'">
            <div class="single-block" v-for="i in pic_list_mobile" :key="i">
                <img :id="`block-img-${i}`" v-if="i != 1 && i != 7 && i != 16 && i != 17 && i != 18" :src="`/double-ten/Mamiyoga@2x ${i}.jpg`"/>
                <a v-else-if="i == 7" href="https://lihi1.com/b1A2i" @click="scrollToBottom"><img :src="`/double-ten/Mamiyoga@2x ${i}.jpg`"/></a>
                <a v-else href="#block-img-16" @click="scrollToBottom"><img :src="`/double-ten/Mamiyoga@2x ${i}.jpg`"/></a>
            </div>
        </div>
        <div class="single-block">
            <form class="order-base-info" id="order-form" method="post" :action="form_action">
                <div class="order-little-title">購買資訊</div>
                <div class="order-little-title">Mamiyoga 雙十連假愛自己x1 NT.1010 </div>
                <label class="order-form-label" for="name" >姓名</label>
                <input class="order-form-input" required type="text" v-model="order_name" name="name" id="name" placeholder="請輸用戶名稱">
                <label class="order-form-label" for="tel">聯絡電話</label>
                <input class="order-form-input" required type="tel" v-model="order_phone" name="phone" id="phone" placeholder="0912345678">
                <label class="order-form-label" for="email">電子信箱</label>
                <input class="order-form-input" required type="email" v-model="order_email" name="email" id="email" placeholder="建議輸入常用信箱">
                <input type="hidden" name="item_id" :value="'MY03'">
                <input type="hidden" name="return_url" :value="client_back_url">
                <input type="hidden" name="client_back_url" :value="client_back_url">
                <input type="hidden" name="user_id" :value="'temp_user_1010'">
                <div class="reg-text2" :style="{color: hint_color, textAlign: 'right', height: '20px'}">{{hint}}</div>
                <input type="checkbox" name="agree" id="agree" style="display:none;" v-model="check_agree">
                <label for="agree" class="agree-checkbox-label-label">
                    <div class="agree-checkbox-label">
                        <div class="agree-checkbox">
                            <span></span>
                            <span></span>
                        </div>
                        <p style="margin-left: 5px;">我同意LUDO<router-link to="/refund" style="color:#000;">退款政策</router-link></p>
                    </div>
                </label>
                <button class="submit-button" type="submit" @click="goPay()" :disabled="!check_agree" :style="{background: !check_agree ? 'lightgrey' : '#24798F'}">送出</button>
            </form>
        </div>
    </div>

</template>

<script>
import { EMAIL_REGEX } from '~/components/regex.js'
import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    // iphone: 400,
    mobile: 800,
    desktop: Infinity,
  }
});
export default {
    head() {
        return  {
            title: 'MAMI YOGA',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { hid: 'description', name: 'description', content: '以教學影片結合動作校正AI，開設的互動式線上課程。與日本人氣瑜珈老師橋本麻美合作，推出14堂課程包含33個動作，針對產後2~6個月黃金修復期的課程。使用者能夠觀看教學影片，並透過手機鏡頭拍攝自己的練習動作，取得分析與修正建議。' },
                { property : 'og:title' , content:"Mami Yoga 日本人氣瑜珈"},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://mamiyoga.ludonow.com"},
                { property : 'og:image' , content:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/facebook-share-preview.jpg"},
                { property : 'og:description' , content:"以教學影片結合動作校正AI，開設的互動式線上課程。與日本人氣瑜珈老師橋本麻美合作，推出14堂課程包含33個動作，針對產後2~6個月黃金修復期的課程。使用者能夠觀看教學影片，並透過手機鏡頭拍攝自己的練習動作，取得分析與修正建議。"},
                { property : 'og:site_name' , content:"https://mamiyoga.ludonow.com"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/head_logo.ico' },
                { rel: 'apple-touch-icon', href: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/apple-icon.png' }
            ],
            script: [
                // { src: 'https://player.vimeo.com/api/player.js' },
                { id:"ze-snippet" ,src: 'https://static.zdassets.com/ekr/snippet.js?key=a844136e-f47b-428d-bd65-0af9ed880cbc' },
            ],
        }
    },
    data:()=>({
        order_name: '',
        order_phone: '',
        order_email: '',
        form_action: 'https://api.ludonow.com/apis/send-to-ecpay',
        // form_action: 'http://localhost:8080/apis/send-to-MPG-gateway',
        order_return: 'https://mamiyoga.ludonow.com/double-ten',
        client_back_url: 'https://mamiyoga.ludonow.com/double-ten',
        hint:'',
        hint_color:'red',
        check_agree:false,
        d:0,
        h:0,
        m:0,
        s:0,
        pic_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        pic_list_mobile:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    }),
    mounted() {
        if (process.client) {
            let target_date = Date.parse("2019/10/11");
            let count_downter = setInterval(() => {
                let cur_left_time = target_date - Date.now();
                this.s = parseInt(cur_left_time / 1000) % 60;
                this.m = parseInt(cur_left_time / 1000 / 60) % 60;
                this.h = parseInt(cur_left_time / 1000 / 60 / 60) % 24;
                this.d = parseInt(cur_left_time / 1000 / 60 / 60 / 24);
            }, 1000);
        }
    },
    methods : {
        goPay(){
            if (this.order_email.length === 0) {
                this.hint = '請填寫電子信箱欄位'
                this.hint_color = "red"
                return
            } else if (!EMAIL_REGEX.test(this.order_email)) {
                this.hint = '電子信箱格式錯誤'
                this.hint_color = "red"
                return
            } else if (this.order_phone.length != 10) {
                this.hint = '行動電話格式錯誤，請輸入十位數字電話號碼'
                this.hint_color = "red"
                return
            } else if (!this.order_name) {
                this.hint = '請填寫姓名'
                this.hint_color = "red"
                return
            }
            localStorage['order_name'] = this.order_name;
            localStorage['order_email'] = this.order_email;
            localStorage['order_phone'] = this.order_phone;

            document.getElementById('order-form').submit();
        },
        scrollToBottom() {
            window.scrollTo(0,document.body.scrollHeight);
        }
    },
}
</script>

<style scoped>
.double-ten-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100vw;
    overflow-x: hidden; */
    background: #000;
}
.single-block {
    max-width: 1280px;
    width: 100%;
    background: #fff;
}
.single-block img{
    width: 100%;
    display: block;
}
.count-down-banner {
    background: rgb(230,102,104);
    color: white;
    text-align: center;
    width: 100%;
    position: fixed;
    padding: 10px;
    font-size: 20px;
}
.count-down-banner p{
    color: #000;
    display: inline;
}
.order-base-info {
    max-width: 500px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto 50px auto;
    /* align-items: center; */
}
.order-base-info button{
    width: 100px;
    align-self: center;
    height: 40px;
    border-radius: 10px;
    border: 3px solid lightgray;
    font-size: 16px;
    font-weight: 700;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: white;
    background: lightgray;
}
.order-little-title {
    margin-top: 20px;
    font-size: 16px;
    color: #24798F;
    font-weight: bold;
}
.order-form-label {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    display: block;
    margin: 10px 0 5px;
}
.order-form-label::before {
    content: '*';
    color: #FF9898;
}
.order-form-input {
    width: 100%;
    border: solid 1px #BFBDBD;
    border-radius: 5px;
    height: 30px;
    padding-left: 5px;
}
.order-form-input::placeholder {
    color:#D1D1D1;
}
.agree-checkbox-label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500px;
    margin-bottom: 30px; 
}
.agree-checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #24798F;
    border-radius: 2px;
    position: relative
}
.agree-checkbox span {
    width: 13px;
    height: 3px;
    background: #fff;
    display: none;
    position: absolute;
}
.agree-checkbox span:first-child {
    transform: rotate(45deg);
    top: 9px;
    left: 1px;
    width: 8px;
}
.agree-checkbox span:last-child {
    transform: rotate(135deg);
    top: 7px;
    left: 4px;
}
#agree:checked ~ .agree-checkbox-label-label .agree-checkbox {
    background: #24798F;
}
#agree:checked ~ .agree-checkbox-label-label .agree-checkbox span {
    display: block;
}
#agree:checked ~ .order-base-info button {
    background: #24798F;
}
.reg-text2{
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
</style>