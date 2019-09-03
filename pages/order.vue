<template>
    <div>
        <div style="background: #fff;">
            <mamiyoga-pay-header></mamiyoga-pay-header>
            <div class="pay-main-block">
                <div class="pay-order-title">訂單結帳</div>
                <hr style="margin: 10px 0;opacity: .5;">
                <form class="order-base-info" id="order-form" method="post" :action="form_action">
                    <div class="order-little-title">基本資訊</div>
                    
                    <label class="order-form-label" for="name" >姓名</label>
                    <input class="order-form-input" required type="text" v-model="order_name" name="name" id="name" placeholder="請輸入使用者名稱">
                    <label class="order-form-label" for="tel">聯絡電話</label>
                    <input class="order-form-input" required type="tel" v-model="order_phone" name="phone" id="phone" placeholder="0912345678">
                    <!-- <div class="order-verify-block">
                        <input type="text" class="order-form-input" style="width:40%;" placeholder="輸入手機驗證碼">
                        <div class="order-verify-btn" style="margin:0 5px;">認證</div>
                        <div class="order-verify-btn" style="border:#24798F 2px solid;color:#24798F;background:#fff;">重送</div>
                    </div> -->
                    <label class="order-form-label" for="tel">電子信箱</label>
                    <input class="order-form-input" required type="email" v-model="order_email" name="email" id="email" placeholder="建議輸入常用信箱">
                    <input type="hidden" name="item_id" :value="picked_plan.item_id">
                    <input type="hidden" name="coupon_id" v-model="order_coupon" value="">
                    <input type="hidden" name="payment_type" v-model="order_payment" value="">
                    <input type="hidden" name="return_url" :value="order_return">
                    <div class="reg-text2" :style="{color: hint_color, textAlign: 'right', height: '20px'}">{{hint}}</div>
                </form>
                <div class="order-base-info" style="margin-top:8vh;">
                    <!-- <div class="order-little-title" style="display:flex;align-items: flex-end;">寄送方式<span style="font-size: 12px;">（加價購必填）</span></div>
                    <select class="order-select-how-to" v-model="select_how">
                        <option value="1">貨到付款 $60</option>
                        <option value="2">7-11超商店到店 $60</option>
                    </select>
                    <input type="checkbox" name="same" id="same">
                    <label for="same" class="order-same-label">
                        <div class="order-same-checkbox">
                            <div class="order-same-checkbox-content">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <p class="order-same-text">同購買人資訊</p>
                    </label>
                    <div v-if="select_how == '1'">
                        <label class="order-form-label" for="recipient-name">收貨人姓名</label>
                        <input class="order-form-input" type="text" name="recipient-name" id="recipient-name" placeholder="請輸入收貨人名稱">
                        <label class="order-form-label" for="recipient-tel">聯絡電話</label>
                        <input class="order-form-input" type="tel" name="recipient-tel" id="recipient-tel" placeholder="（+886）953 840 329">
                        
                        <div style="display: flex;align-items: center;margin: 10px 0 5px;">
                            <label class="order-form-label" for="recipient-address-code" style="margin-right:5px;">居住城市</label>
                            <select class="order-form-input order-form-zipcode" name="recipient-address-code" id="recipient-address-code" v-model="select_county">
                                <option v-for="(city,index) in city" :key="index" :value="city.id">
                                    {{city.id}}
                                </option>
                            </select>
                            <label class="order-form-label" for="recipient-address-code" style="margin-right:5px;margin-left:15px;">區域</label>
                            <select class="order-form-input order-form-zipcode" name="recipient-address-city" id="recipient-address-city">
                                <option v-for="(county,index) in current_county" :key="index" :value="county.id">
                                    {{county.id +'&nbsp;'+ county.city}}
                                </option>
                            </select>
                        </div>
                        <label class="order-form-label" for="recipient-address">詳細地址</label>
                        <input class="order-form-input" type="text" name="recipient-address" id="recipient-address">
                    </div>
                    <div v-if="select_how == '2'">
                        <label class="order-form-label" for="shop-name">店到店名稱</label>
                        <input class="order-form-input" type="text" name="shop-name" id="shop-name" placeholder="">
                        <label class="order-form-label" for="shop-recipient-name">收貨人姓名</label>
                        <input class="order-form-input" type="text" name="shop-recipient-name" id="shop-recipient-name" placeholder="請輸入收貨人名稱">
                        <label class="order-form-label" for="shop-recipient-tel">聯絡電話</label>
                        <input class="order-form-input" type="tel" name="shop-recipient-tel" id="shop-recipient-tel" placeholder="（+886）953 840 329">
                    </div> -->
                    <mamiyoga-receipt-type :wordDark="true"></mamiyoga-receipt-type>
                    <input type="checkbox" name="agree" id="agree" style="display:none;">
                    <label for="agree" class="agree-checkbox-label-label">
                        <div class="agree-checkbox-label">
                            <div class="agree-checkbox">
                                <span></span>
                                <span></span>
                            </div>
                            <p style="margin-left: 5px;">我同意LUDO<router-link to="/refund" style="color:#000;">退款政策</router-link></p>
                        </div>
                    </label>
                </div>
            </div>
            <!-- <mamiyoga-pay-footer ftBtn="#24798F" payFt="前往付款"></mamiyoga-pay-footer> -->
            <mamiyoga-order-footer ftBtn="#24798F" payFt="前往付款"  discount="0" @goPay="goPay"
            :selectPrice="picked_plan.price" :selectDescription="picked_plan.description"></mamiyoga-order-footer>
        </div>
        <mamiyoga-window-alert-box v-if="is_payed">
            <div class="cancel-box" @click="is_payed = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <div class="reg-text2" style="text-align: center;margin-top:35px;color:#707070;">已將<b>付款交易通知</b>寄至您的<b>信箱</b>！<br>付款成功後將<b>寄送序號至您的手機！</b></div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-order-success.png" alt="" style="margin-top:20px;width:30%;">
            <div class="company-input-submit-btn" style="margin:30px auto 0;" @click="is_payed = false">好的</div>
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import Vue from 'vue'
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue';
// import MamiyogaPayFooter from '~/components/mamiyoga/MamiyogaPayFooter.vue';
import MamiyogaOrderFooter from '~/components/mamiyoga/MamiyogaOrderFooter.vue';
import MamiyogaReceiptType from '~/components/mamiyoga/MamiyogaReceiptType.vue'
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import twzipcode from 'twzipcode-data'
import axios from '~/config/axios-config'
import { EMAIL_REGEX } from '~/components/regex.js'
export default {
    layout: 'mommiyoga',
    data:()=>({
        select_how: '1',
        select_county: '臺北市',
        zipcode_data: {},
        zipcode: [],
        city: [],
        current_county: '',
        products: [
            {
                item_id: 'MY01',
            },
            {
                item_id: 'MY02',
            }
        ],
        single_plan: {},
        four_person_program: {},
        picked_plan:{},
        order_name: '',
        order_phone: '',
        order_email: '',
        order_coupon: '',
        order_payment: '',
        form_action: 'http://localhost:8080/apis/send-to-MPG-gateway',
        order_return: 'https://mamiyoga.ludonow.com/',

        hint:'',
        hint_color:'',
        is_payed: false,
    }),
    components: {
        MamiyogaPayHeader,
        // MamiyogaPayFooter,
        MamiyogaOrderFooter,
        MamiyogaReceiptType,
        MamiyogaWindowAlertBox,

    },
    async mounted(){
        if(process.client) {
            for (let i = 0; i < this.products.length; i++) {
                let send_data = {item_id: this.products[i].item_id};
                const response = await axios.post('/apis/get-shop-item',send_data);
                this.products[i].item_name = response.data.item_name
                this.products[i].price = response.data.price
                this.products[i].slogan = response.data.slogan
                this.products[i].description = response.data.description
                
            }
            // this.single_plan = this.products.find(plan => plan.item_id == 'MY01')
            // this.four_person_program = this.products.find(plan => plan.item_id == 'MY02')
            this.picked_plan = this.products.find(plan => plan.price == sessionStorage['picked_plan'])
            // console.log(this.picked_plan)
            this.zipcode_data = twzipcode()
            // console.log(this.zipcode_data)

            this.zipcode = this.zipcode_data.zipcodes
            this.city = this.zipcode_data.counties
            this.current_county  = this.zipcode.filter(c => c.county == this.select_county)

            // console.log(this.zipcode)
            // console.log(this.city)
        }
    },
    methods:{
        goPay(){
            console.log(this.order_name)
            console.log(this.order_phone)
            console.log(this.order_email)
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
            document.getElementById('order-form').submit();
        }
    },
    watch:{
        select_county: function(new_value,old_value) {
            // console.log(this.select_county)
            this.current_county  = this.zipcode.filter(c => c.county == this.select_county)
            // console.log(c)
            // let c = this.zipcode.filter(c => c.id == this.select_county)
            // console.log(c)
            // this.current_county = this.zipcode.filter(current => current.county == c.county)
            // console.log(this.current_county)
            // debugger
        }
    }
}
</script>

<style>
.pay-main-block {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
    height: 100vh; 
}
.pay-order-title {
    margin-top: 15px;
    font-size: 14px;
    color: #000;
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
.order-form-zipcode {
    width: 29%;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-order-btn.png');
    background-repeat: no-repeat;
    background-position: 95% center;
    background-size: 18%;
}
.order-verify-block {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px 0;
}
.order-verify-btn {
    width: 60px;
    height: 25px;
    background: #24798F;
    color: #f8f7f8;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
.order-select-how-to {
    width: 100%;
    border: #24798F solid 1px;
    border-radius: 5px;
    background-color: #fff;
    height: 30px;
    margin:10px 0;
    -webkit-appearance: none;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-order-btn.png');
    background-repeat: no-repeat;
    background-position: 99% center;
    background-size: 5%;
    padding-left: 5px;
    color: #24798F;
    font-weight: 500;
}
.order-same-label {
    display: flex;
    align-items: center;
}
.order-same-checkbox {
    width: 15px;
    height: 15px;
    border: #24798F solid 1px;
    border-radius: 4px;
    margin-right: 5px;
}
.order-same-checkbox-content {
    position: relative;
    display: none;
}
#same {
    display: none;
}
#same:checked ~ .order-same-label .order-same-checkbox-content {
    display: block;
}
#same:checked ~ .order-same-label .order-same-checkbox {
    background: #24798F;
}
.order-same-checkbox-content span{
    display: block;
    width: 8px;
    height: 3px;
    background: #fff;
    position: absolute;
}
.order-same-checkbox-content span:first-child {
    width: 5px;
    transform: rotate(45deg);
    top: 6px;
    left: 2px;
}
.order-same-checkbox-content span:last-child {
    transform: rotate(135deg);
    top: 5px;
    left: 4px;
}
.order-same-text {
    font-size: 12px;
    color: #24798F;
}

.agree-checkbox-label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500px;
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
.reg-text2{
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
.cancel-box {
    /* background: red; */
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.cancel-box img {
    width: 65%;
}
.company-input-submit-btn {
    width: 80px;
    height: 30px;
    background: #24798F;
    color: #F7F7F7;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    letter-spacing: 2px;
    margin-top: 15px;
    cursor: pointer;
}
</style>