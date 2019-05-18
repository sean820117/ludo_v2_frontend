<template>
    <div class="signup-pay-page">
        <div class="main-block">
            <div>
                <form id="basic-form" v-if="!directReg">
                    <div class="reg-block-title">基本資訊</div>
                    <input name="name" class="reg-column-input" type="text" placeholder="您的大名"/>
                    <input name="phone" class="reg-column-input" type="text" placeholder="行動電話"/>
                    <input name="email" class="reg-column-input" type="text" placeholder="電子信箱"/>
                </form>
                <form id="directly-reg-form" v-if="directReg">
                    <input name="email" class="reg-column-input" type="text" placeholder="電子信箱"/>
                    <input name="password" class="reg-column-input" type="password" placeholder="密碼"/>
                    <input name="password-check" class="reg-column-input" type="password" placeholder="確認密碼"/>
                    <div class="reg-block-title">基本資訊</div>
                    <input name="name" class="reg-column-input" type="text" placeholder="您的大名"/>
                    <input name="phone" class="reg-column-input" type="text" placeholder="行動電話"/>
                </form>
            </div>
            <div class="reg-block-title">付款方式</div>
            <div class="payment-contract">
                我們與 Aftee 合作，讓您無論透過 ATM 轉帳、臨櫃繳款、或是信用卡刷卡，都能享有14天內付款之服務，讓您安心上課，先學先贏！
                <br><br>
                我們與您的課程合約服務包含：
                <br><br>
                高算年共愛滿品入從如次樂當行力提日住地國他長稱象館學景弟日便我目度越則破動苦當別行。
                <br><br>
                模口星一的帶山說子得常之克光！設心轉早有東注！希裡同資來動告詩，利組資持報是種兒坐術濟國戲散於商源政般，線滿原沒示性多點成推來就指；錯臺在親……生式我們他工新叫；二選總方天不出間話東一去女！園座之本維切主方正談研物。
            </div>
            <input type="checkbox" id="agree-contract">
            <label class="agree-label" for="agree-contract">我同意上述課程合約</label>
            
            <receipt-type :wordDark="true"/>
            <div class="payment-container">
                <div class="payment-info">
                    <div class="price">共計　新台幣　99 元</div>
                    <div class="go-pay">前往付款</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ThirdPartyIcons from "~/components/resume/ThirdPartyIcons"
import ReceiptType from "~/components/resume/ReceiptType"
export default {
    head () {
        return {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500' }
            ],
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1.0"},
                { charset: "UTF-8"}
            ]
        } 
    },
    components: {
        ThirdPartyIcons,
        ReceiptType,
    },
    data:() => ({
        directReg: false,
        displayReceipt: false,
    }),
    methods: {
        toggleDriectReg(){
            this.directReg = !this.directReg;
        },
        showReceipt(){
            this.displayReceipt = true;
        }
    },
}
</script>
<style>
*{
    margin:0px;
    font-family: 'Noto Sans TC', sans-serif;
}
html, body, #__nuxt, #__layout, #__layout > div{
    height: 100%;
    background: white;
}
a{
    text-decoration: none;
}
textarea:focus, input:focus{
    outline: none;
}
.signup-pay-page{
    padding-top: 43px;
    text-align: center;
    height: 100%;
}
.main-block{
    position: relative;
    text-align: left;
    margin: auto;
    margin-bottom: 30px;
    width: 82vw;
    padding: 22px 24px 48px 24px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}
.reg-block-title{
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
    font-size: 11px;
}
.agree-label{
    position: relative;
    top: -3px;
    margin-left: 13px;
    font-size: 13px;
    color: #8F8F8F;
}
#agree-contract{
    margin-left: 5px;
    transform: scale(1.8);
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
}
</style>