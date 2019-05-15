<template>
    <div class="signup-pay-page">
        <titlebar/>
        <div class="sp-title">履歷課程與評測</div>
        <div class="sp-subtitle">履歷課程與評測</div>
        <div class="main-block">
            <div class="reg-title">註冊</div>
            <div class="reg-subtitle">付款前需先註冊成為會員</div>
            <div class="third-party">
                <third-party-icons/>
            </div>
            <div class="reg-directly">直接註冊</div>
            <div>
                <form>
                    <div class="reg-block-title">基本資訊</div>
                    <input name="name" class="reg-column-input" type="text" placeholder="您的大名"/>
                    <input name="phone" class="reg-column-input" type="text" placeholder="行動電話"/>
                    <input name="email" class="reg-column-input" type="text" placeholder="電子信箱"/>
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
            <div class="receipt-text">
                我們使⽤電⼦發票, 將會於得獎時以簡訊與您聯繫
                <br>或可按此選擇使⽤載具儲存 / 輸⼊統⼀編號等
            </div>
            <div class="receipt-method">
                <input type="radio" id="e-receipt" name="receipt-carrier" value="e-receipt" checked>
                <input type="radio" id="personal-carrier" name="receipt-carrier" value="personal-carrier">
                <input type="radio" id="uid-receipt" name="receipt-carrier" value="uid-receipt">
                <label for="e-receipt" class="e-receipt">電子發票</label>
                <label for="personal-carrier" class="personal-carrier">個人載具</label>
                <label for="uid-receipt" class="uid-receipt">統一編號</label>
                <div class="receipt-number">
                    <input class="personal-carrier" type="text" name="personal-carrier-number" placeholder="輸入個人載具代碼"/>
                    <input class="uid-receipt" type="text" name="uid-receipt" placeholder="輸入統一編號"/>
                </div>
            </div>
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
import Titlebar from "~/components/resume/Titlebar"
import ThirdPartyIcons from "~/components/resume/ThirdPartyIcons"
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
        Titlebar,
        ThirdPartyIcons,
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
    text-align: center;
    height: 100%;
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
    padding: 22px 24px 48px 24px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);
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
    margin-bottom: 15px;
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
.receipt-text{
    margin: 15px 0px;
    font-size: 11px;
    color: #D4D4D4;
}
.receipt-method{
    display: grid;
    grid-template-rows: 30px auto;
    grid-template-columns: 33% 33% 34%;
}
.receipt-method label{
    text-align: center;
    line-height: 30px;
    color: #8F8F8F;
    font-size: 11px;
    border-radius: 2px;
}
.receipt-method input{
    display: none;
}
#e-receipt:checked ~ .e-receipt,
#personal-carrier:checked ~ .personal-carrier,
#uid-receipt:checked ~ .uid-receipt{
    background: #DADADA;
    color: black;
}
.receipt-number{
    padding: 25px 0px 13px 0px;
    grid-column: 1 / 4;
}
.receipt-number input{
    background: white;
    border: none;
    border-bottom: 1px solid #DDD;
    display: none;
    padding: 0px 10px;
    height: 27px;
    width: 100%;
    font-size: 11px;
}
#personal-carrier:checked ~ .receipt-number .personal-carrier,
#uid-receipt:checked ~ .receipt-number .uid-receipt{
    display: block;
}
</style>