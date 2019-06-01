<template>
    <div class="signup-pay-page">
        <div class="sp-title">履歷課程與評測</div>
        <div class="sp-subtitle">使用一季 NT$299</div>
        <div class="main-block">
            <div v-if="!is_login">
                <div class="reg-title">{{ !directReg ? '註冊/登入' : '直接註冊' }}</div>
                <div class="reg-subtitle">{{ !directReg ? '付款前需先註冊成為會員' : '輸入信箱、密碼及基本資訊後完成付款即可成為會員' }}</div>
                <div class="third-party">
                    <third-party-icons :login_method="{ FB : true, google:true, line:false}" />
                </div>
                <div class="reg-directly" @click="toggleDriectReg" v-if="!directReg">本地註冊</div>
            </div>
            <div>
                <form id="basic-form" v-if="!directReg && is_login && !next_step_or_not">
                    <div class="reg-block-title">基本資訊</div>
                    <input id="input_name" v-model="customer_name" name="name" class="reg-column-input" type="text" placeholder="您的大名" @click="$scrollTo('#input_name')" @change="checkBasicInfo"/>
                    <input id="input_phone" v-model="phone" name="phone" class="reg-column-input" type="text" placeholder="行動電話" @click="$scrollTo('#input_phone')" @change="checkBasicInfo"/>
                    <input id="input_email" v-model="email" name="email" class="reg-column-input" type="text" placeholder="電子信箱" @click="$scrollTo('#input_email')" @change="checkBasicInfo"/>
                </form>
                
                <form id="directly-reg-form" v-if="directReg">
                    <input id="input_email_2" v-model="email" name="email" class="reg-column-input" type="text" placeholder="電子信箱" @click="$scrollTo('#input_email_2')"/>
                    <input id="input_password" v-model="password" name="password" class="reg-column-input" type="password" placeholder="密碼(長度需大於八個字且英數字混合)" @click="$scrollTo('#input_password')"/>
                    <input id="input_password_check" v-model="confirm_password" name="password-check" class="reg-column-input" type="password" placeholder="確認密碼" @click="$scrollTo('#input_password_check')"/>
                    <div class="reg-block-title" v-if="next_step_or_not">基本資訊</div>
                    <input id="input_name_2" v-if="next_step_or_not" v-model="customer_name" name="name" class="reg-column-input" type="text" placeholder="您的大名" @click="$scrollTo('#input_name_2')" @change="checkBasicInfo"/>
                    <input id="input_phone_2" v-if="next_step_or_not" v-model="phone" name="phone" class="reg-column-input" type="text" placeholder="行動電話" @click="$scrollTo('#input_phone_2')" @change="checkBasicInfo"/>
                </form>
            </div>
            <div class="reg-directly" @click="checkSignupInfo" v-if="directReg && !next_step_or_not" style="margin-top: 20px;">下一步</div>
            <div class="reg-subtitle" :style="{ color : hint_color , margin: '5px'}">{{ hint }}</div>
            <div v-if="next_step_or_not || is_login">
                <div class="reg-block-title" id="payment-type">付款方式</div>
                <div class="payment-contract">
                    讓狂人飛與日商恩沛股份有限公司提供之「AFTEE」後支付服務獨家合作，是收到商品後才付款的支付方式。
                    <br>
                    不須輸入繁瑣的個人資料，也不須登錄會員即可立即免費使用！
                    <br>
                    將於下單後 24 小時內透過簡訊寄送繳費通知，您可透過便利商店代收服務或 ATM 繳費等方式完成付款手續。
                    <br><br>
                    ・注意事項
                    <br>
                    透過由日商恩沛股份有限公司提供之「AFTEE」後支付服務完成的交易，
                    <br>
                    需依本服務之必要範圍內提供個人資料，
                    <br>
                    並將交易相關給付款項請求債權轉讓予日商恩沛股份有限公司。
                    <br>
                    關於個人資料處理事宜，請瀏覽以下網址：
                    <br>
                    <a href="https://aftee.tw/privacypolicy/">{{ 'https://aftee.tw/privacypolicy/' }}</a>
                    <br>
                    初次使用AFTEE時，最高使用額度為10,000元。
                    <br>
                    若款項超過繳費期限，將根據當次的金額加收年利率20%的支付遲延損害金。
                    <br>
                    未成年的使用者，請事先徵得法定代理人或監護人之同意方可使用AFTEE。
                    <br><br>
                </div>
                <input type="checkbox" id="agree-contract" v-model="agree_contract_or_not" @change="checkAgreeContract(agree_contract_or_not)">
                <span class="checkmark"></span>
                <label class="agree-label" for="agree-contract">我同意上述課程合約</label>
                <receipt-type :wordDark="true" @onReceiptTypeChange="onReceiptTypeChange"/>
                <div class="payment-container">
                    <div class="payment-info">
                        <div class="price">共計　新台幣　299 元</div>
                        <div class="go-pay" :class="agree_contract_or_not ? '' : 'unchecked'" @click="agree_contract_or_not ? onSubmit() : () => {}">前往付款</div>
                    </div>
                </div>
            </div>
            <v-dialog :width="'300px'" :clickToClose="false" @closed="$router.push('/resume/course')"/>
            <loading 
                :active="processing_user_data_or_not" 
                color="#1785db"
                loader="dots"
            ></loading>
        </div>
        <div class="aftee_banner">
            <img src="https://aftee.tw/start/banner/banner/AFTEE-bn01_468x200.png" alt="">
        </div>
    </div>
</template>
<script>
import ThirdPartyIcons from "~/components/resume/ThirdPartyIcons"
import ReceiptType from "~/components/resume/ReceiptType"
import { mapMutations, mapGetters } from 'vuex';
import { EMAIL_REGEX } from '~/components/regex.js'
import Loading from 'vue-loading-overlay';
import shortid from 'shortid';
import axios from '~/config/axios-config'
import { sha256 } from 'js-sha256';
import { Base64 } from 'js-base64';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    layout: 'resume',
    head () {
        return {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
            ],
            script: [
                { src: 'https://auth.aftee.tw/v1/aftee.js' , async : true}
            ],
        } 
    },
    components: {
        ThirdPartyIcons,
        ReceiptType,
        Loading,
    },
    data:() => ({
        customer_name: '',
        next_step_or_not: false,
        phone: '',
        email: '',
        password: '',
        confirm_password: '',
        hint: '',
        hint_color: '',
        directReg: false,
        displayReceipt: false,
        processing_user_data_or_not: false,
        is_login:false,
        sended_basic_info_ga_or_not: false,
        payed_or_not:false,
        agree_contract_or_not: false,
        receipt: {
            receipt_personal:'/',
            receipt_uniform:'',
            receipt_type:'e-receipt',
        },
        aftee_data : {
          amount:299,
          customer:{
            address:'none',
            customer_name:"",
            email:'',
            phone_number:'',
          },
          items:[
            {
              item_count:1,
              item_name:'履歷課程與評測(一個月)',
              item_price:299,
              shop_item_id:'resume_01',
            }
          ],
          sales_settled:true,
          shop_transaction_no:'R01' + shortid.generate(),
          user_no:'test001',
      },
      aftee_pub_key: '87coKSnCS0aLXis4-bwbjQ',
      aftee_secret_key: '-uEazf32mvD3MUVo6BvuBw',
    }),
    computed: mapGetters({
      user : 'user/getData',
	}),	
    methods: {
        toggleDriectReg(){
            this.directReg = !this.directReg;
        },
        showReceipt(){
            this.displayReceipt = true;
        },
        sortObject(obj) {
            return Object.keys(obj).sort().reduce(function (result, key) {
                result[key] = obj[key];
                return result;
            }, {});
        },
        getCheckSum(obj) {
            let all_value = '';
            Object.keys(obj).forEach(key => {
                console.log(key); 
                if (key == "items") {
                    obj[key].forEach(item => {
                    item = this.sortObject(item);
                    Object.values(item).forEach(value => {
                        all_value += value.toString();
                    });
                    });
                } else if(key == 'customer') {
                    obj[key] = this.sortObject(obj[key]);
                    Object.values(obj[key]).forEach(value => {
                    all_value += value.toString();
                    });
                } else if (key == 'shop_transaction_no' || key == "checksum"){

                } else {
                    all_value += obj[key].toString();  
                }
            });
            all_value = this.aftee_secret_key + "," + all_value
            console.log(all_value);
            all_value = sha256(all_value);
            console.log(all_value);
            all_value = Base64.encode(all_value);
            console.log(all_value);
            // return all_value;
            return all_value ;
        },
        setAfteeConfig(customer_name,phone_number,email,user_id) {
            this.aftee_data.customer.customer_name = customer_name;
            this.aftee_data.customer.phone_number = phone_number;
            this.aftee_data.customer.email = email;
            this.aftee_data.user_no = user_id;

            this.aftee_data = this.sortObject(this.aftee_data);
            let checksum = this.getCheckSum(this.aftee_data);
            this.aftee_data.checksum = checksum;
            Aftee.config({
                pub_key: this.aftee_pub_key,
                payment: this.aftee_data,
                authenticated: function(token,user_no) {
                    console.log("token : " + token)
                },
                cancelled: function(token,user_no) {
                    console.log("cancelled : " + user_no)
                    location.reload();
                },
                failed: function(response) {
                    console.log(response);
                    window.alert('付款失敗！請洽服務人員')
                },
                succeeded: this.succeededCallback,
                error: function(name,message,errors) {
                    console.log(errors);
                    window.alert('付款失敗！請洽服務人員')
                },
            });
        },
        async succeededCallback(response) {
            console.log("aftee payed succeed")
            console.log(response)
            let result_data = this.aftee_data;
            result_data.receipt = this.receipt;

            try {
              let response = await axios.post('/apis/aftee-result',result_data)
              if (response.data.status == '200') {
                  console.log("payed success")
              } else {
                  console.log(response)
              }
            } catch (error) {
                console.log(error)
            }
            this.$gtag('event', 'purchase', {
                "transaction_id": this.aftee_data.shop_transaction_no,
                "value": 299,
                "currency": "TWD",
                "tax": 2.85,
                "items": [
                    {
                    "id": "resume_01",
                    "name": "履歷範本課程(一個月)",
                    "brand": "讓狂人飛",
                    "category": "online AI course",
                    "quantity": 1,
                    "price": 299
                    },
                ],
            });
            this.$gtag('event', 'Virtual', {
                'event_category': 'EC',
            });
            this.$modal.show('dialog', {
                title: '付款成功!',
                text: `您的訂單編號：${this.aftee_data.shop_transaction_no}<br>現在就開始跟著狂人寫履歷吧！`,
                buttons: [
                    {
                        title: '進入課程',       // Button title
                        default: true,    // Will be triggered by default if 'Enter' pressed.
                        handler: () => {this.$router.push('/resume/course')} // Button click handler
                    },
                ],
            });
        },
        startAftee() {
            if (!this.user) {
                this.hint = "註冊失敗！";
                this.hint_color = "red";
                return
            }
            this.setAfteeConfig(this.customer_name,this.phone,this.email,this.user.user_id);
            setTimeout(() => {
                Aftee.start();
                this.processing_user_data_or_not = false;
            },3000);
        },
        onReceiptTypeChange(receipt) {
            this.receipt = receipt;
            console.log(this.receipt);
        },
        async onSubmit() {
            if (this.email.length === 0) {
                this.hint = '請填寫電子信箱欄位'
                this.hint_color = "red"
                this.$scrollTo("#payment-type");
                return
            } else if(!this.is_login && this.password.length === 0) {
                this.hint = '請填寫密碼欄位'
                this.hint_color = "red"
                this.$scrollTo("#payment-type");
                return
            } else if (!EMAIL_REGEX.test(this.email)) {
                this.hint = '電子信箱格式錯誤'
                this.hint_color = "red"
                this.$scrollTo("#payment-type");
                return
            } else if (!this.is_login && this.password.length < 8) {
                this.hint = '密碼需大於八個字且英數字混合'
                this.hint_color = "red"
                this.$scrollTo("#payment-type");
                return
            } else if (this.password != this.confirm_password && !this.is_login) {
                this.hint = '密碼與確認密碼不符'
                this.hint_color = "red"
                this.$scrollTo("#payment-type");
                return
            } else if (this.phone.length != 10) {
                this.hint = '行動電話格式錯誤，請輸入十位數字電話號碼'
                this.hint_color = "red"
                this.$scrollTo("#payment-type");
                return
            } else if (!this.customer_name) {
                this.hint = '請填寫姓名'
                this.hint_color = "red"
                this.$scrollTo("#payment-type");
                return
            }

            this.hint = null
            this.hint_color = ""
            this.processing_user_data_or_not = true;
            this.$gtag('event', 'checkout_progress', {
                "items": [
                    {
                    "id": "resume_01",
                    "name": "履歷範本課程(一個月)",
                    "brand": "讓狂人飛",
                    "category": "online AI course",
                    "quantity": 1,
                    "price": 299
                    },
                ],
                'checkout_step' : 4,
            });
            this.$gtag('event', 'set_checkout_option', {
                "checkout_step": 4,
                "checkout_option": "tap go pay",
                "value": "true"
            });
            
            try {
                if (!this.is_login) {
                    let result = await this.signup(this.email, this.password, this.confirm_password);
                    if (result) {
                        this.startAftee();
                    }
                    this.$gtag('event', 'checkout_progress', {
                        "items": [
                            {
                            "id": "resume_01",
                            "name": "履歷範本課程(一個月)",
                            "brand": "讓狂人飛",
                            "category": "online AI course",
                            "quantity": 1,
                            "price": 299
                            },
                        ],
                        'checkout_step' : 5,
                    });
                    this.$gtag('event', 'set_checkout_option', {
                        "checkout_step": 5,
                        "checkout_option": "go to aftee",
                        "value": "true"
                    });
                    
                } else {
                    this.startAftee();
                    this.$gtag('event', 'checkout_progress', {
                        "items": [
                            {
                            "id": "resume_01",
                            "name": "履歷範本課程(一個月)",
                            "brand": "讓狂人飛",
                            "category": "online AI course",
                            "quantity": 1,
                            "price": 299
                            },
                        ],
                        'checkout_step' : 5,
                    });
                    this.$gtag('event', 'set_checkout_option', {
                        "checkout_step": 5,
                        "checkout_option": "go to aftee",
                        "value": "true"
                    });
                    
                }
            } catch (error) {
                console.log(error);
                this.processing_user_data_or_not = false;
            }
        },
        async signup(email,password,repeated_password) {
            console.log("go sign up")
            try {
              let response = await axios.post('/signup',{email:email,password:password,repeated_password:repeated_password,from:this.$route.path})
              if (response.data.status == '200') {
                  console.log("signup success")

                  let login_result = await this.$checkLogin(this.$store);
                  return true;
                //   this.$router.push('/login-redirect')
              } else {
                  if (response.data.message == "此郵件已註冊!") {
                      await this.login(email,password);
                      return true;
                  } else {
                    this.hint = '註冊失敗 - ' + response.data.message;
                    this.hint_color = "red"
                  }
                  console.log(response)
                  return false;
              }
            } catch (error) {
              this.hint = '註冊失敗'
              this.hint_color = "red"
              console.log(error);
              return false;
            }
        },
        async login(email,password) {
            try {
                let response = await axios.post('/login',{email:email,password:password})
                if (response.data.status == '200') {
                    console.log("login success")
                    console.log(response)
                    let login_result = await this.$checkLogin(this.$store);
                    // this.$router.push('/login-redirect')
                } else {
                    console.log(response)
                    this.hint = response.data.message;
                    this.hint_color = "red"
                }
            } 
            catch (error) {
                console.log(error)
                this.hint = "傳送失敗，請重新嘗試"
                this.hint_color = "red"
            }
        },
        checkSignupInfo() {
            this.next_step_or_not = true;
            // if (this.email && this.password && this.confirm_password) {
                this.$gtag('event', 'begin_checkout', {
                    "items": [
                        {
                        "id": "resume_01",
                        "name": "履歷範本課程(一個月)",
                        "brand": "讓狂人飛",
                        "category": "online AI course",
                        "quantity": 1,
                        "price": 299
                        },
                    ],
                    'checkout_step' : 1,
                });
                this.$gtag('event', 'set_checkout_option', {
                    "checkout_step": 1,
                    "checkout_option": "signup",
                    "value": "local"
                });
            // }
        },
        checkBasicInfo() {
            if (this.email && this.customer_name && this.phone) {
                if (!this.sended_basic_info_ga_or_not) {
                    
                    this.$gtag('event', 'checkout_progress', {
                        "items": [
                            {
                            "id": "resume_01",
                            "name": "履歷範本課程(一個月)",
                            "brand": "讓狂人飛",
                            "category": "online AI course",
                            "quantity": 1,
                            "price": 299
                            },
                        ],
                        'checkout_step' : 2,
                    });
                    this.$gtag('event', 'set_checkout_option', {
                        "checkout_step": 2,
                        "checkout_option": "input basic info",
                        "value": "complete"
                    });
                    this.sended_basic_info_ga_or_not = true;
                }
            }
        },
        checkAgreeContract(agree_contract_or_not) {
            if (this.agree_contract_or_not) {
                
                this.$gtag('event', 'checkout_progress', {
                    "items": [
                        {
                        "id": "resume_01",
                        "name": "履歷範本課程(一個月)",
                        "brand": "讓狂人飛",
                        "category": "online AI course",
                        "quantity": 1,
                        "price": 299
                        },
                    ],
                    'checkout_step' : 3,
                });
                this.$gtag('event', 'set_checkout_option', {
                    "checkout_step": 3,
                    "checkout_option": "agree contract",
                    "value": "true"
                });
            }
        }
    },
    async mounted() {
        if (process.client) {
            this.is_login = await this.$checkLogin(this.$store);
            console.log("user id" + this.user.user_id);
            localStorage.redirect = this.$route.path;

            let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
            if (!payed_or_not) {
                console.log("not payed");
            } else {
                console.log("payed")
                this.$modal.show('dialog', {
                    text: '您已購買過此課程',
                    buttons: [
                        {
                            title: '點此進入課程',       // Button title
                            default: true,    // Will be triggered by default if 'Enter' pressed.
                            handler: () => {this.$router.push('/resume/course')} // Button click handler
                        },
                    ],
                });
            }

            this.$gtag('event', 'add_to_cart', {
                "items": [
                    {
                    "id": "resume_01",
                    "name": "履歷範本課程(一個月)",
                    "brand": "讓狂人飛",
                    "category": "online AI course",
                    "quantity": 1,
                    "price": 299
                    },
                ]
            });

            if (this.is_login) {
                this.email = this.user.email;
                this.$gtag('event', 'begin_checkout', {
                    "items": [
                        {
                        "id": "resume_01",
                        "name": "履歷範本課程(一個月)",
                        "brand": "讓狂人飛",
                        "category": "online AI course",
                        "quantity": 1,
                        "price": 299
                        },
                    ],
                    'checkout_step' : 1,
                });
                this.$gtag('event', 'set_checkout_option', {
                    "checkout_step": 1,
                    "checkout_option": "login",
                    "value": "fb/google"
                });
            }
        }
    },
}
</script>
<style>
a{
    text-decoration: none;
}
textarea:focus, input:focus{
    outline: none;
}
.signup-pay-page{
    text-align: center;
    min-height: 100vh;
}
.sp-title{
    color: #007CDC;
    margin: auto;
    padding-top: 66px;
    font-size: 41px;
    font-weight: 500;
}
.sp-subtitle{
    color: #007CDC;
    margin: auto;
    font-size: 26px;
    font-weight: 500;
}
.main-block{
    position: relative;
    text-align: left;
    margin: 43px auto;
    width: 82vw;
    max-width: 475px;
    padding: 22px 24px 48px 24px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}
.reg-title{
    font-size: 21px;
}
.reg-subtitle{
    font-size: 13px;
    color: #8F8F8F;
}
.third-party{
    margin: 42px auto;
    text-align: center;
}
.reg-directly{
    width: 90px;
    height: 36px;
    margin: auto;
    line-height: 36px;
    text-align: center;
    background: #1785DB;
    color: white;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
}
.reg-block-title{
    margin-top: 30px;
    font-size: 21px;
}
.reg-column-input{
    padding: 0px 10px;
    height: 27px;
    width: 100%;
    border-radius: 8px;
    border: none;
    background: #F3F3F3;
    margin-top: 15px;
}
.payment-contract{
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 12px;
}
.agree-label{
    position: relative;
    top: -6px;
    margin-left: 13px;
    font-size: 13px;
    color: #8F8F8F;
}
#agree-contract{
    margin-left: 5px;	    position: absolute;
    transform: scale(1.8);	    z-index: 10;
    width: 20px;
    height: 20px;
    opacity: 0;
    cursor: pointer;
}
.checkmark {
    display: inline-block;
    height: 20px;
    width: 20px;
    border: 2px solid #a2a2a2;
    border-radius: 3px;
    background-color: white;
}
#agree-contract:hover ~ .checkmark{
    border: 2px solid #b0b0b0;
}
#agree-contract:checked ~ .checkmark {
    border: none;
    background-color: #0090FF;
}
 .checkmark:after {
    content: "";
    position: relative;
    display: none;
}
#agree-contract:checked ~ .checkmark:after {
    display: block;
}
.checkmark:after {
    left: 7px;
    top: 1px;
    width: 7px;
    height: 13px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
#agree-contract:checked ~ .agree-label{
    color: #007CDC;
}
.payment-container{
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0px;
    box-shadow: 0px -5px 5px -5px rgba(0,0,0,0.3);
}
.payment-info{
    display: grid;
    width: 100%;
    grid-template-columns: 60% 40%;
    text-align: center;
    line-height: 48px;
}
.payment-info .price{
    font-size: 14px;
    font-weight: 500;
}
.payment-info .go-pay{
    background: #0090FF;
    color: white;
    font-size: 17px;
    cursor: pointer;
}
.payment-info .go-pay.unchecked {
    background: #7ec7ff;
    color: white;
    font-size: 17px;
    cursor: not-allowed;
}	
.aftee_banner {
    display: flex;
    align-items: center;
    justify-content: center;
}
.aftee_banner img {
    width: 100vw;
    max-width: 400px;
}
</style>