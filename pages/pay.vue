<template>
    <div>
        <div style="background:#fff;">
            <mamiyoga-pay-header></mamiyoga-pay-header>
            <div class="desktop-pay-flex-main-block">
                <div class="desktop-pay-main-block">
                    <div class="pay-main-block">
                        <div class="pay-little-title">{{$mq === 'desktop' ? '選擇方案':'付款資訊'}}</div>
                        <hr style="margin: 10px 0;opacity: .5;">
                        <div class="select-method-block">
                            <div v-for="(product,i) in products" :key="i">
                                <input type="radio" name="pay-way" :id="`${i}_prog`" @click="togglePrice(i)"
                                class="pay-way-input" v-model="picked" :value="product.price" >
                                <label v-if="product.code_amount == 1" class="select-pay-label for-one-peop" :for="`${i}_prog`" :class="show_detail[i]">
                                    <div class="select-pay-way">
                                        <span class="select-pay-circle"></span>
                                        <div class="select-pay-data">
                                            <p class="select-pay-title"><b>{{product.slogan}}</b><br><span>{{ getItemAmount(product.item_amount) }}</span></p>
                                            <p class="select-pay-title"><b>NTD&nbsp;{{product.price}}</b></p>
                                        </div>
                                    </div>
                                    <div class="select-pay-content">
                                        
                                        <div class="select-pay-content-box">
                                            <img :src=" product.item_img ? product.item_img : 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-1.png'" alt="">
                                            <div>
                                                <p class="select-pay-content-title">{{ product.description }}</p>
                                                <!-- <p style="font-weight:300;">課程為序號登入，付款取得序號後即可將序號送給朋友、愛妻使用！另外也可以搭配瑜珈墊更貼心！</p> -->
                                            </div>
                                        </div>
                                        <hr class="select-pay-content-line">
                                        <div class="select-pay-content-box">
                                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-2.png" alt="">
                                            <div>
                                                <p class="select-pay-content-title">1.寵愛自己馬上使用</p>
                                                <p style="font-weight:300;">付款後手機收到序號，即可使用『序號』直接登入兌換課程！</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </label>
                                <label v-if="product.code_amount > 1" class="select-pay-label  for-four-peop" :for="`${i}_prog`" :class="show_detail[i]">
                                    <div class="select-pay-way">
                                        <span class="select-pay-circle"></span>
                                        <div class="select-pay-data">
                                            <p class="select-pay-title"><b>{{ product.slogan }}</b><br><span>{{ getItemAmount(product.item_amount) }}</span></p>
                                            <p class="select-pay-title"><b>NTD&nbsp;{{product.price}}</b></p>
                                        </div>
                                    </div>
                                    <div class="select-pay-content">
                                        <div class="select-pay-content-box">
                                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-3.png" alt="">
                                            <div>
                                                <p class="select-pay-content-title">1.收取課程序號並分享</p>
                                                <p style="font-weight:300;">2組課程序號將寄到妳的手機，別忘了分享給好姊妹兌換課程，一起變美喔！</p>
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
                                        <p style="font-weight:300;margin-left:0;" >多人方案於『索取兌換序號』開始後7天，只要所有序號皆尚未兌換過，即可申請全退費。退費時須向LUDO提出申請，LUDO也將統一退費給當初的購買人，將不分別退費。學員之間的課程序號轉讓，均屬會員的私人行為，LUDO均不干涉。</p>

                                    </div>
                                </label>
                            </div>
                            <!-- <input type="radio" name="pay-way" id="one-peop" class="pay-way-input" v-model="picked" :value="single_plan.price">
                            <input type="radio" name="pay-way" id="four-peop" class="pay-way-input" v-model="picked" :value="four_person_program.price"> -->
                            <input type="radio" name="pay-way" id="company-peop" class="pay-way-input" v-model="picked" :value="0" @click="togglePrice(100)">
                            
                            <!-- <label class="select-pay-label for-company-peop" for="company-peop" :class="show_detail[100]">
                                <div class="select-pay-way">
                                    <span class="select-pay-circle"></span>
                                    <div class="select-pay-data">
                                        <p class="select-pay-title"><b>企業方案（30人以上）</b><br>一人NTD.790起</p>
                                        <p class="select-pay-title"><b>專人服務</b></p>
                                    </div>
                                </div>
                                <div class="select-pay-content">
                                    <div class="select-pay-content-box">
                                        <img :src="'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-img-5.png'" alt="">
                                        <div>
                                            <p class="select-pay-content-title">愛護職員的好方法</p>
                                            <p style="font-weight:300;">若對企業方案有興趣，請留下您的聯絡方式，我們將於1~3個工作天專人為您務！</p>
                                        </div>
                                    </div>
                                    <hr class="select-pay-content-line">
                                    <input class="company-input" :placeholder="$t('pay_method_input_1')" type="text" name="company-name" id="company-name" v-model="company_name">
                                    <div class="company-input-box">
                                        <input class="company-input" :placeholder="$t('pay_method_input_2')" type="text" name="contact-name" id="contact-name" v-model="contact_name">
                                        <input class="company-input" :placeholder="$t('pay_method_input_3')" type="text" name="contact-position" id="contact-position" v-model="contact_position">
                                    </div>
                                    <div class="company-input-box">
                                        <input class="company-input" :placeholder="$t('pay_method_input_4')" type="tel" name="contact-tel" id="contact-tel" v-model="contact_tel">
                                        <input class="company-input" :placeholder="$t('pay_method_input_5')" type="email" name="contact-mail" id="contact-mail" v-model="contact_mail">
                                    </div>
                                    <div class="company-input-box" style="justify-content: flex-end;">
                                        <div class="company-input-submit-btn" :style="{width: $i18n.locale == 'JP' ? '130px':''}" @click="submitData">{{$t('pay_method_input_btn')}}</div>
                                    </div>
                                </div>
                            </label> -->
                        </div>
                    </div>
                    <div class="pay-main-block show-desktop" :class="picked !== '' ? '':'un-check-agree'">
                        <div class="pay-little-title">{{$t('pay_method_cost_title')}}</div>
                        <hr style="margin: 10px 0;opacity: .5;">
                        <input id="desktop-exchange-input" name="desktop-exchange-input" type="text" :placeholder="$t('pay_method_cost_input')" v-model="get_coupon" @change="check_coupon">
                        <div class="reg-text2" :style="{color: coupon_hint_color, height: '20px'}">{{coupon_hint}}</div>
                        <!-- <div class="pay-little-title">付款方式</div>
                        <hr style="margin: 10px 0;opacity: .5;"> -->
                    </div>
                    <div class="pay-main-block show-desktop" :class="picked !== '' ? '':'un-check-agree'">
                        <div class="pay-little-title">{{$t('order_title')}}</div>
                        <hr style="margin: 10px 0;opacity: .5;">
                        <form class="order-base-info" id="order-form" method="post" :action="form_action">
                            <label class="order-form-label" for="name" >{{$t('pay_method_input_2')}}</label>
                            <input class="order-form-input" required type="text" v-model="order_name" name="name" id="name" :placeholder="$t('order_input_1_placeholder')">
                            <label class="order-form-label" for="tel">{{$t('pay_method_input_4')}}</label>
                            <input class="order-form-input" required type="tel" v-model="order_phone" name="phone" id="phone" placeholder="0912345678">
                            <!-- <div class="order-verify-block">
                                <input type="text" class="order-form-input" style="width:40%;" placeholder="輸入手機驗證碼">
                                <div class="order-verify-btn" style="margin:0 5px;">認證</div>
                                <div class="order-verify-btn" style="border:#24798F 2px solid;color:#24798F;background:#fff;">重送</div>
                            </div> -->
                            <label class="order-form-label" for="tel">{{$t('desktop_login_mail')}}</label>
                            <input class="order-form-input" required type="email" v-model="order_email" name="email" id="email" :placeholder="$t('order_input_2_placeholder')">
                            <input type="hidden" name="item_id" :value="select_plan.item_id">
                            <input type="hidden" name="coupon_id" :value="coupon_id">
                            <input type="hidden" name="payment_type" v-model="order_payment" value="">
                            <input type="hidden" name="return_url" :value="order_return">
                            <input type="hidden" name="client_back_url" :value="client_back_url">
                            <input type="hidden" name="user_id" :value="getUserID">
                            <div class="reg-text2" :style="{color: hint_color, textAlign: 'right', height: '20px'}">{{hint}}</div>
                        </form>
                        <mamiyoga-receipt-type :wordDark="true"></mamiyoga-receipt-type>
                    </div>
                </div>
            </div>
            <div class="go-outside-page-block">
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
                <div class="go-outside-page-btn" :style="{backgroundColor: check_agree ? '#FF9898':'#C9C9C9'}" @click="goPay">{{$t('order_desktop_btn')}}</div>
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
            <mamiyoga-pay-footer ftBtn="#FF9898" :payFt="$t('pay_method_mobile_next_btn')" @openExchange="openExchange" 
            :haveCoupon="discount" :desSelectPrice="picked" :discount="countDiscount(picked)"
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
            <div class="reg-text" style="text-align: center;margin-top:35px;color:#707070;">{{$t('member_activation_title')}}</div>
            <div class="reg-text2" style="text-align: center;margin-top:20px;color:#8F8F8F;">{{$t('pay_method_cost_input')}}</div>
            <input id="exchange-input" name="exchange-input" type="text" :placeholder="$t('pay_method_mobile_input')" v-model="get_coupon">
            <div class="mamiyoga-login-btn-to-signin" style="width: 90%;" @click="inputCoupon">{{$t('pay_method_mobile_input_btn')}}</div>
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
import MamiyogaPayFooter from '~/components/mamiyoga/MamiyogaPayFooter.vue'
import MamiyogaReceiptType from '~/components/mamiyoga/MamiyogaReceiptType.vue'
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import axios from '~/config/axios-config'
import { EMAIL_REGEX } from '~/components/regex.js'
import { mapMutations, mapGetters } from 'vuex';
export default {
    data:()=>({
        company_method: false,
        products: [
            {
                item_id: 'MY09',
            },
            {
                item_id: 'MY10',
            },
            {
                item_id: 'MY11',
            },
            {
                item_id: 'MY12',
            },
            {
                item_id: 'MY08',
            },
            {
                item_id: 'MY06',
            },
            {
                item_id: 'MY07',
            },
            
        ],
        single_plan: {},
        four_person_program: {},
        picked: 0,
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

        order_name: '',
        order_phone: '',
        order_email: '',
        order_coupon: '',
        order_payment: '',
        coupon_id: 'null',
        form_action: 'https://api.ludonow.com/apis/send-to-ecpay',
        order_return: 'https://mamiyoga.ludonow.com/pay-success',
        client_back_url: 'https://mamiyoga.ludonow.com/order',
        select_plan: {},

        hint:'',
        hint_color:'',

        check_agree: false,
        coupon_hint: '',
        coupon_hint_color: '',

        show_detail:[],
    }),
    components: {
        MamiyogaPayHeader,
        MamiyogaPayFooter,
        MamiyogaWindowAlertBox,
        MamiyogaReceiptType,
    },
    async mounted(){
        if(process.client) {

            setTimeout(() => {
                // console.log('hide zE');
                this.$hideZendesk();
            }, 10000);

            for (let i = 0; i < this.products.length; i++) {
                let send_data = {item_id: this.products[i].item_id};
                try {
                    const response = await axios.post('/apis/get-shop-item',send_data);
                    this.products[i].slogan = response.data.slogan
                    this.products[i].price = response.data.price
                    this.products[i].slogan = response.data.slogan
                    this.products[i].description = response.data.description
                    this.products[i].code_amount = response.data.code_amount
                    this.products[i].item_amount = response.data.item_amount
                    this.products[i].item_img = response.data.item_img
                    // console.log(response)
                } catch (error) {
                    alert('無法取得商品資訊')
                }
                
            }
            // console.log(this.products)
            // await this.products.forEach(async (product) => {
            //     let send_data = {item_id: product.item_id};
            //     const response = await axios.post('/apis/get-shop-item',send_data);
            //     console.log(response);
            //     product.slogan = response.data.slogan
            //     product.price = response.data.price
            //     product.slogan = response.data.slogan
            //     product.description = response.data.description
            // });

            // console.log(this.products)
            if(sessionStorage['method_picked_plan']){
                this.picked = parseInt(sessionStorage['method_picked_plan'])
            }
            
            sessionStorage['current_coupon'] = null; // unset coupon

            // this.single_plan = this.products.find(plan => plan.item_id == 'MY01')
            // this.four_person_program = this.products.find(plan => plan.item_id == 'MY02')
            if(this.picked == 0) {
                this.can_pay = false
            } else {
                this.can_pay = true
            }
        }

    },
    methods:{
        getItemAmount(item_amount){
            return item_amount <= 100 ? `剩餘${item_amount}組`:``
        },
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
                    // console.log(coupon_data)
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
        },
        countDiscount(price){
            let dis = this.discount
            // console.log(dis)
            if(this.picked > 1990) {
                let pick = this.picked/4
                return 1990 - pick + dis
            } else {
                return  1990 - this.picked + dis
            }
        },
        async check_coupon(){
            if(this.get_coupon !== '') {
                let picked_plan = this.products.find(plan => plan.price == this.picked)
                let send_data = {coupon_id:this.get_coupon}

                try {
                    const coupon_data = await axios.post('/apis/check-coupon',send_data);
                    // const coupon_data = this.$sendData('/apis/check-coupon',send_data)
                    // console.log(coupon_data)
                    if(coupon_data.status == 200 && coupon_data.data.shop_item_id == picked_plan.item_id) { 
                        // alert('輸入成功')
                        this.discount = coupon_data.data.discount
                        this.coupon_hint = `輸入成功，折扣後再折${this.discount}元`
                        this.coupon_hint_color = 'red'
                        sessionStorage['count_picked_plan'] = this.countPrice(this.picked)
                        sessionStorage['current_coupon'] = this.get_coupon;
    
                        this.coupon_id = this.get_coupon
                    } else {
                        sessionStorage['current_coupon'] = null;
                        this.coupon_hint = '折扣碼錯誤，請確認方案是否選擇正確'
                        this.coupon_hint_color = 'red'
                        this.discount = 0
                        this.coupon_id = 'null'
                    }
                } catch (error) {
                    sessionStorage['current_coupon'] = null;
                    this.coupon_hint = '折扣碼錯誤'
                    this.coupon_hint_color = 'red'
                    this.discount = 0

                    this.coupon_id = 'null'
                }
            }
        },
        goPay(){
            if(this.picked == 0 && this.check_agree) {
                this.submitData();
            } else {
            if(this.check_agree) {
                if (this.order_email.length === 0) {
                    this.hint = `${this.$t('order_remind_1')}`
                    this.hint_color = "red"
                    return
                } else if (!EMAIL_REGEX.test(this.order_email)) {
                    this.hint = `${this.$t('order_remind_2')}`
                    this.hint_color = "red"
                    return
                } else if (this.order_phone.length != 10) {
                    this.hint = `${this.$t('order_remind_3')}`
                    this.hint_color = "red"
                    return
                } else if (!this.order_name) {
                    this.hint = `${this.$t('order_remind_4')}`
                    this.hint_color = "red"
                    return
                }

                localStorage['order_name'] = this.order_name
                localStorage['order_phone'] = this.order_phone
                localStorage['order_email'] = this.order_email

                document.getElementById('order-form').submit();
                }
            }    
        },
        togglePrice(index){
            if (this.show_detail[index] === 'open') {
                this.show_detail = [];
            } else {
                this.show_detail = [];
                this.show_detail[index] = 'open'
            }
        }
    },
    watch: {
        picked: function(new_value,old_value) {
            sessionStorage['picked_plan'] = this.picked
            this.check_coupon()
            console.log(this.picked)
            if(this.picked == 0) {
                this.can_pay = false
            } else {
                this.can_pay = true
                this.select_plan = this.products.find(plan => plan.price == this.picked)
            }
            // debugger
        },
    },
    async beforeCreate() {
        if (process.client) {
            // this.ui_config = await require('~/config/mommiyoga-config')
            // this.is_ui_config_loaded = true;

            // let login_or_not = await this.$checkLogin(this.$store);
            // if (login_or_not == false) {
            //     window.alert("尚未登入帳號，請先前往註冊～");
            //     this.$router.push('/signup');
            // } else {
            //     let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
            //     // if (!payed_or_not) {
            //     //     console.log("not payed");
            //     //     window.alert("尚未開通課程，請先前往購買～");
            //     //     this.$router.push('/mamiyoga/pay');
            //     // } else {
            //     //     console.log("payed")
            //     // }
            // }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        getUserID() {
            if (this.user) {
                if (this.user.user_id) {
                    return this.user.user_id
                }
            }
            return this.order_phone;
        },
    },
}
</script>

<style>
.fb_dialog,
.fb_dialog_advanced {
    bottom: 40pt !important;
}
.pay-way-input {
    display: none;
}
.pay-main-block {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
    /* height: 100vh;  */
    padding-bottom: 90px;
}
.pay-main-block.show-desktop {
    display: none;
}
.pay-little-title {
    margin-top: 20px;
    font-size: 14px;
    color: #000;
}
.select-method-block {
    /* height: calc(100vh - 165px); */
    overflow: overlay;
}
.select-pay-label {
    display: block;
    overflow: hidden;
    height: 60px;
    transition: ease .8s;    
}
.open .select-pay-way {
    border: #24798F solid 2px;
}
.open .select-pay-circle:after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #24798F;
    display: block;
}
.for-one-peop.open {
    height: 300px;
}
.for-four-peop.open {
    height: 350px;
}
.for-company-peop.open{
    height: 400px;
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
.select-pay-title span {
    color : red;
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
    white-space:pre-wrap;
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
.go-outside-page-block {
    display: none;
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
    /* .additional-select {
        max-width: 450px;
    } */
    .pay-main-block {
        width: 30% !important;
        height: auto;
        margin: 0;
        padding-bottom: 0;
    }
    .pay-main-block.show-desktop {
        display: block;
    }
    .desktop-pay-flex-main-block {
        padding: 25px 7vw 200px;
    }
    .desktop-pay-main-block {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        max-width: 1366px;
        margin: 0 auto;
    }
    .pay-little-title {
        font-weight: bold;
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
    .go-outside-page-block {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        bottom: 15vh;
        left: calc(50% - 80px);
        width: 160px;
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
    .go-outside-page-btn {
        width: 140px;
        height: 45px;
        background:#C9C9C9;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-top: 20px;
        cursor:pointer;
    }
    .un-check-agree {
        opacity: .3;
        -webkit-user-select: none; 
        -moz-user-select: none;
    }
    #desktop-exchange-input {
        width: 100%;
        border-style: none;
        border-bottom: 1px solid rgba(0,0,0,.2);
        font-size: 17px;
        margin-top: 10px;
        height: 30px;
    }
    #desktop-exchange-input::placeholder {
        font-size: 15px;
    }
    #desktop-exchange-input:focus {
        border-bottom: 1px solid #24798F;
    }
}
@media (min-width: 769px) and (max-width: 1200px) {
    #four-peop:checked ~ .for-four-peop{
        height: 390px;
    }
    .select-pay-content {
        padding: 5px 0 0;
    }
    .desktop-pay-footer-title {
        font-size: 15px !important;
    }
    .desktop-pay-footer-little-text {
        font-size: 12px !important;
    }
}
</style>