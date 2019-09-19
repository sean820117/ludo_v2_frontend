<template>
    <div>
        <div style="background:#fff;">
            <mamiyoga-pay-header></mamiyoga-pay-header>
            <div class="pay-main-block">
                <div class="pay-little-title">付款資訊</div>
                <hr style="margin: 10px 0;opacity: .5;">
                <div style="height: calc(100vh - 165px);overflow: overlay;">
                    <input type="radio" name="pay-way" id="one-peop" class="pay-way-input" v-model="picked" :value="single_plan.price">
                    <input type="radio" name="pay-way" id="four-peop" class="pay-way-input" v-model="picked" :value="four_person_program.price">
                    <input type="radio" name="pay-way" id="company-peop" class="pay-way-input" v-model="picked" value=0>
                    <label class="select-pay-label for-one-peop" for="one-peop">
                        <div class="select-pay-way">
                            <span class="select-pay-circle"></span>
                            <div class="select-pay-data">
                                <p class="select-pay-title"><b>{{single_plan.slogan}}</b></p>
                                <p class="select-pay-title"><b>NTD&nbsp;{{single_plan.price}}</b></p>
                            </div>
                        </div>
                        <div class="select-pay-content">
                            <div class="select-pay-content-box">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-2.png" alt="">
                                <div>
                                    <p class="select-pay-content-title">1.寵愛自己馬上使用</p>
                                    <p style="font-weight:300;">付款後手機收到序號，即可使用『序號』直接登入兌換課程！</p>
                                </div>
                            </div>
                            <hr class="select-pay-content-line">
                            <div class="select-pay-content-box">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-1.png" alt="">
                                <div>
                                    <p class="select-pay-content-title">2.送禮及寵妻達人</p>
                                    <p style="font-weight:300;">課程為序號登入，付款取得序號後即可將序號送給朋友、愛妻使用！另外也可以搭配瑜珈墊更貼心！</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label class="select-pay-label  for-four-peop" for="four-peop">
                        <div class="select-pay-way">
                            <span class="select-pay-circle"></span>
                            <div class="select-pay-data">
                                <p class="select-pay-title"><b>{{four_person_program.slogan}}（4人以上）</b><br>一人NTD.1290</p>
                                <p class="select-pay-title"><b>NTD&nbsp;{{four_person_program.price}}</b></p>
                            </div>
                        </div>
                        <div class="select-pay-content">
                            <div class="select-pay-content-box">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-3.png" alt="">
                                <div>
                                    <p class="select-pay-content-title">1.收取課程序號並分享</p>
                                    <p style="font-weight:300;">另外三組課程序號將寄到妳的信箱，別忘了分享給好姊妹兌換課程，一起變美喔！</p>
                                </div>
                            </div>
                            <!-- <hr class="select-pay-content-line">
                            <div class="select-pay-content-box">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-4.png" alt="">
                                <div>
                                    <p class="select-pay-content-title">2.加價購兌換方式</p>
                                    <p style="font-weight:300;">我們將根據刷卡付款人提供地址，統一寄送至一處地址。</p>
                                </div>
                            </div> -->
                            <hr class="select-pay-content-line">
                            <p class="select-pay-content-title" style="margin-left:0;">我同意以下退費條款：</p>
                            <p style="font-weight:300;margin-left:0;" >姊妹揪起來方案於『索取兌換序號』開始後7天，只要4人皆尚未觀看，即可申請全退費。退費時4人皆須向LUDO提出申請，LUDO也將統一退費給當初姊妹揪起來的購買人，將不分別退費。學員之間的課程序號轉讓，均屬會員的私人行為，LUDO均不干涉。</p>

                        </div>
                    </label>
                    <label class="select-pay-label for-company-peop" for="company-peop">
                        <div class="select-pay-way">
                            <span class="select-pay-circle"></span>
                            <div class="select-pay-data">
                                <p class="select-pay-title"><b>企業方案（30人以上）</b><br>一人NTD.790起</p>
                                <p class="select-pay-title"><b>專人服務</b></p>
                            </div>
                        </div>
                        <div class="select-pay-content">
                            <div class="select-pay-content-box">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-5.png" alt="">
                                <div>
                                    <p class="select-pay-content-title">愛護職員的好方法</p>
                                    <p style="font-weight:300;">若對企業方案有興趣，請留下您的聯絡方式，我們將於1~3個工作天專人為您務！</p>
                                </div>
                            </div>
                            <hr class="select-pay-content-line">
                            <input class="company-input" placeholder="企業名稱" type="text" name="company-name" id="company-name" v-model="company_name">
                            <div class="company-input-box">
                                <input class="company-input" placeholder="姓名" type="text" name="contact-name" id="contact-name" v-model="contact_name">
                                <input class="company-input" placeholder="工作職稱" type="text" name="contact-position" id="contact-position" v-model="contact_position">
                            </div>
                            <div class="company-input-box">
                                <input class="company-input" placeholder="聯絡電話" type="tel" name="contact-tel" id="contact-tel" v-model="contact_tel">
                                <input class="company-input" placeholder="工作信箱" type="email" name="contact-mail" id="contact-mail" v-model="contact_mail">
                            </div>
                            <div class="company-input-box" style="justify-content: flex-end;">
                                <div class="company-input-submit-btn" @click="submitData">送出資料</div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <!-- <div class="additional-select">
                <p class="additional-select-title">獨家加價購</p>
                <hr style="opacity:.5;">
                <div style="display: flex;align-items:center;height:90px;">
                    <input type="checkbox" name="additional" id="additional-box">
                    <label for="additional-box" class="additional-box-label">
                        <div class="additional-box-label-icon">
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                    <div style="width:50px;height:50px;background: #fff;margin-right: 15px;"></div>
                    <div>
                        <p style="font-size:12px;color: #F7F7F7;font-weight: bold;margin-bottom: 10px;">『Easyoga』專業時尚花草瑜伽墊</p>
                        <div style="display:flex;align-items: center;justify-content: space-between;">
                            <div class="additional-calculation-box">
                                <span class="additional-calculatio-before"></span>
                                <div>1</div>
                                <span class="additional-calculatio-after"></span>
                            </div>
                            <p style="padding-right: 15px;color:#FF9898;font-size:14px;font-weight:bold;">$880</p>
                        </div>
                    </div>
                </div>
                <hr style="opacity:.5;">
            </div> -->
            <mamiyoga-pay-footer ftBtn="#FF9898" payFt="下一步" @openExchange="openExchange"
            :have_cost="check_coupon_ok" :selectPrice="countPrice(picked)" :can_pay="can_pay"></mamiyoga-pay-footer>
        </div>
        <mamiyoga-window-alert-box v-if="company_method">
            <div class="cancel-box" @click="company_method = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <div class="reg-text2" style="text-align: center;margin-top:35px;color:#707070;">收到您的資訊！<br>我們將於1~3個工作天聯絡您！</div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-5.png" alt="" style="margin-top:20px;width:30%;">
            <div class="company-input-submit-btn" style="margin:30px auto 0;" @click="company_method = false">好的</div>
        </mamiyoga-window-alert-box>

        <mamiyoga-window-alert-box v-if="open_exchange_box">
            <div class="cancel-box" @click="open_exchange_box = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <div class="reg-text" style="text-align: center;margin-top:35px;color:#707070;">兌換序號</div>
            <div class="reg-text2" style="text-align: center;margin-top:20px;color:#8F8F8F;">請輸入折扣序號</div>
            <input id="exchange-input" name="exchange-input" type="text" placeholder="請輸入半形英數字" v-model="get_coupon">
            <div class="mamiyoga-login-btn-to-signin" style="width: 90%;" @click="inputCoupon">兌換</div>
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
import MamiyogaPayFooter from '~/components/mamiyoga/MamiyogaPayFooter.vue'
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import axios from '~/config/axios-config'
import { mapMutations, mapGetters } from 'vuex';
export default {
    layout:'mommiyoga',
    data:()=>({
        company_method: false,
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
        picked:0,
        can_pay: true,

        company_name: '',
        contact_name: '',
        contact_position: '',
        contact_tel: '',
        contact_mail: '',

        open_exchange_box: false,
        check_coupon_ok: false,
        get_coupon: '',
        discount: 0,
    }),
    components: {
        MamiyogaPayHeader,
        MamiyogaPayFooter,
        MamiyogaWindowAlertBox,
    },
    async mounted(){
        if(process.client) {
            for (let i = 0; i < this.products.length; i++) {
                let send_data = {item_id: this.products[i].item_id};
                try {
                    const response = await axios.post('/apis/get-shop-item',send_data);
                    this.products[i].item_name = response.data.item_name
                    this.products[i].price = response.data.price
                    this.products[i].slogan = response.data.slogan
                    this.products[i].description = response.data.description
                } catch (error) {
                    alert('無法取得商品資訊')
                }
                
            }
            // await this.products.forEach(async (product) => {
            //     let send_data = {item_id: product.item_id};
            //     const response = await axios.post('/apis/get-shop-item',send_data);
            //     console.log(response);
            //     product.item_name = response.data.item_name
            //     product.price = response.data.price
            //     product.slogan = response.data.slogan
            //     product.description = response.data.description
            // });

            // console.log(this.products)
            if(sessionStorage['picked_plan']){
                this.picked = parseInt(sessionStorage['picked_plan'])
            }
            
            sessionStorage['current_coupon'] = null; // unset coupon

            this.single_plan = this.products.find(plan => plan.item_id == 'MY01')
            this.four_person_program = this.products.find(plan => plan.item_id == 'MY02')
            if(this.picked == 0) {
                this.can_pay = false
            } else {
                this.can_pay = true
            }
        }

    },
    methods:{
        async submitData(){
            if(this.company_name && this.contact_name && this.contact_position && this.contact_tel && this.contact_mail) {
                let send_user_id = '0000'
                let contact_data = '公司名稱：' + this.company_name + '／聯絡人姓名：' + this.contact_name + '／工作職稱：' + this.contact_position + '／聯絡電話：' + this.contact_tel + '／聯絡信箱：' + this.contact_mail
                if(this.user.user_id) {
                    send_user_id = this.user.user_id
                }
                // let send_data = {user_id:send_user_id,question_id:'企業方案聯絡',message: contact_data};
                // const form_res = await axios.post('/apis/send-feedback',send_data);
                this.$sendData('/apis/send-feedback',{user_id:send_user_id,question_id:'企業方案聯絡',message: contact_data})
                this.company_method = true;
            } else {
                window.alert('請填入所有欄位！')
            }
        },
        openExchange(){
            this.open_exchange_box = true;
        },
        async inputCoupon (){
            if(this.get_coupon) {
                let picked_plan = this.products.find(plan => plan.price == this.picked)
                let send_data = {coupon_id:this.get_coupon}
                
                // if(coupon_data.status == 200 && coupon_data.data.shop_item_id == picked_plan.item_id) {
                
                try {
                    const coupon_data = await axios.post('/apis/check-coupon',send_data);
                    // const coupon_data = this.$sendData('/apis/check-coupon',send_data)
                    console.log(coupon_data)
                    if(coupon_data.status == 200 && coupon_data.data.shop_item_id == picked_plan.item_id) { 
                        alert('輸入成功')
                        this.discount = coupon_data.data.discount
                        sessionStorage['count_picked_plan'] = this.countPrice(this.picked)
                        sessionStorage['current_coupon'] = this.get_coupon;
                        this.$router.push('/order')
                    } else {
                        sessionStorage['current_coupon'] = null;
                        alert('折扣碼錯誤，請確認方案是否選擇正確')
                    }
                } catch (error) {
                    sessionStorage['current_coupon'] = null;
                    alert('折扣碼錯誤')
                }
            } else {
                window.alert('請輸入折扣序號！')
            }
            // console.log('check')
            
            // const coupon_data = await axios.post('/apis/check-coupon',send_data);
        
        },
        countPrice(price) {
            if(this.discount != 0 && this.discount <= 1) {
                return price * (1 - this.discount)
            } else if(this.discount != 0 && this.discount > 1) {
                return price - this.discount
            } else {
                return price
            }
        }
    },
    watch: {
        picked: function(new_value,old_value) {
            sessionStorage['picked_plan'] = this.picked
            console.log(this.picked)
            if(this.picked == 0) {
                this.can_pay = false
            } else {
                this.can_pay = true
            }
            // debugger
        }
    },
    async beforeCreate() {
        if (process.client) {
            // this.ui_config = await require('~/config/mommiyoga-config')
            // this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                // if (!payed_or_not) {
                //     console.log("not payed");
                //     window.alert("尚未開通課程，請先前往購買～");
                //     this.$router.push('/mamiyoga/pay');
                // } else {
                //     console.log("payed")
                // }
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        
    },
}
</script>

<style>
.pay-way-input {
    display: none;
}
.pay-main-block {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
    height: 100vh; 
}
.pay-little-title {
    margin-top: 20px;
    font-size: 14px;
    color: #000;
}
.select-pay-label {
    display: block;
    overflow: hidden;
    height: 60px;
    transition: ease .8s;    
}
.for-four-peop, .for-company-peop {
    height: 70px;
}
.select-pay-way {
    width: 100%;
    height: 50px;
    background: #F7F7F7;
    border: solid 1px #707070;
    border-radius: 15px;
    margin: 10px auto;
    display: flex;
    align-items: center;
}
.for-four-peop .select-pay-way,.for-company-peop .select-pay-way{
    height: 60px;
}
#one-peop:checked ~ .for-one-peop .select-pay-way,
#four-peop:checked ~ .for-four-peop .select-pay-way,
#company-peop:checked ~ .for-company-peop .select-pay-way {
    border: #24798F solid 2px;
}
.select-pay-circle {
    width: 16px;
    height: 16px;
    background: #fff;
    border: #272727 solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-left: 15px;
    
}
#one-peop:checked ~ .for-one-peop .select-pay-circle:after,
#four-peop:checked ~ .for-four-peop .select-pay-circle:after,
#company-peop:checked ~ .for-company-peop .select-pay-circle:after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #24798F;
    display: block;
}
.select-pay-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    color: #272727;
    width: 80%;
}
#one-peop:checked ~ .for-one-peop .select-pay-data,
#four-peop:checked ~ .for-four-peop .select-pay-data,
#company-peop:checked ~ .for-company-peop .select-pay-data {
    color: #24798F;
}
.select-pay-title {
    font-size: 12px;
}
#one-peop:checked ~ .for-one-peop {
    height: 300px;
}
#four-peop:checked ~ .for-four-peop {
    height: 350px;
}
#company-peop:checked ~ .for-company-peop {
    height: 400px;
}
.select-pay-content {
    padding: 5px 25px 0;
}
.select-pay-content-box {
    display: flex;
    align-items: center;
    margin: 10px 0;
} 
.select-pay-content img {
    width: 50px;
}
.select-pay-content p {
    font-size: 12px;
    color: #24798F;
    margin-left: 15px;
}
.select-pay-content-title {
    font-weight: bold;
    margin-bottom: 5px;
}
.select-pay-content-line {
    background-color: #24798F;
    height: 1px;
    width: 90%;
    margin: 20px auto;
    border:none;
    opacity: .5;
}
.company-input {
    border: solid 1px #24798F;
    height: 30px;
    display: block;
    border-radius: 5px;
    width: 48%;
    margin: 5px 0;
    padding-left: 10px;
}
.company-input::placeholder {
    color: #24798F;
    font-weight: 500;
    font-size: 12px;
}
#company-name {
    width: 90%;
    margin: 5px auto;
}
.company-input-box {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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
    cursor:pointer;
}
.additional-select {
    width: 100%;
    height: 150px;
    background-color: #24798F;
    position: fixed;
    bottom: 50px;
}
.additional-select-title {
    color:#F7F7F7;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 0 5px 20px;
}
.additional-box-label {
    width: 25px;
    height: 25px;
    display:block;
    background: #fff;
    border: 2px solid #BFBDBD;
    border-radius: 5px;
    margin: 0 15px;
}
#additional-box {
    display: none;
}
.additional-box-label-icon {
    position: relative;
    display: none;
}
#additional-box:checked ~ .additional-box-label .additional-box-label-icon {
    display: block;
}
.additional-box-label span{
    background: #24798F;
    height: 4px;
    display: block;
    position: absolute;
    border-radius: 1px;
}
.additional-box-label span:first-child {
    width: 10px;
    transform: rotate(45deg);
    top: 11px;
    left: 1px;
}
.additional-box-label span:last-child {
    width: 15px;
    transform: rotate(135deg);
    top: 9px;
    left: 5px;
}
.additional-calculation-box {
    width: 80px;
    height: 25px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: #BFBDBD 1px solid;
    border-radius: 5px;
}
.additional-calculatio-before {
    width: 10px;
    height: 3px;
    background: #707070;
    border-radius: 3px;
}
.additional-calculatio-after {
    width: 12px;
    height: 3px;
    background: #707070;
    border-radius: 3px;
    position: relative;
}
.additional-calculatio-after::after {
    width: 2px;
    height: 12px;
    background: #707070;
    border-radius: 3px;
    content: '';
    position: absolute;
    top: -4px;
    left: 5px;
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
.reg-text2{
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
#exchange-input{
    width: 90%;
    height: 45px;
    border-radius: 5px;
    border: #707070 solid 1px;
    display: block;
    margin: 30px auto 15px;
    padding-left: 5px;
}
.mamiyoga-login-btn-to-signin {
    width: 100%;
    height: 45px;
    color: #F8F7F8;
    margin: 0 auto;
    background: #24798F;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    border-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (min-width: 769px) {
    .additional-select {
        max-width: 450px;
    }
}
</style>