<template>
    <div>
        <div class="pay-footer" v-if="$mq !== 'desktop'">
            <div class="pay-footer-tag" style="background:#24798F;cursor:pointer;" v-if="!have_cost" @click="openExchange">折扣碼輸入</div>
            <div class="pay-footer-tag" v-else></div>
            <div class="pay-footer-cost">共計<b>&nbsp;&nbsp;NTD&nbsp;{{selectPrice}}</b></div>
            <div class="pay-footer-btn" v-if="can_pay" :style="{backgroundColor:ftBtn}" @click="$router.push('/order')">{{payFt}}</div>
            <div class="pay-footer-btn" v-else style="background-color: #707070">{{payFt}}</div>
        </div>
        <div class="desktop-pay-footer" v-else>
            <p class="desktop-pay-footer-title">Mami yoga日本人氣瑜珈線上課程</p>
            <p class="desktop-pay-footer-title" style="font-weight: 500;">新台幣{{desSelectPrice}}元</p>
            <s class="desktop-pay-footer-little-text">NTD.1990/人</s>
            <p class="desktop-pay-footer-red-text">- NTD&nbsp;{{haveCoupon}}</p>
            <p class="desktop-pay-footer-title">=</p>
            <p class="desktop-pay-footer-title" style="font-size: 26px;">NTD&nbsp;{{selectPrice}}元</p>
            <p class="desktop-pay-footer-red-text" style="font-size: 15px;">共省下{{discount}}元</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        ftBtn: String,
        payFt: String,
        selectPrice: Number,
        can_pay: Boolean,
        have_cost: Boolean,
        desSelectPrice: Number,
        haveCoupon: Number,
        discount: Number,
    },
    methods:{
        openExchange(){
            this.$emit('openExchange');
        }
    }
}
</script>

<style>
.pay-footer {
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -1px 10px rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
}
.pay-footer-tag {
    width: 22%;
    height: 30px;
    background: linear-gradient(#FF9A7B,#FF9898);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
    color: #F8F7F8;
    user-select: none;
}
.pay-footer-cost {
    /* float: left; */
    /* width: calc(100% - 100px); */
    height: 50px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-size: 14px;
    font-weight: lighter;
}
.pay-footer-btn {
    float: right;
    width: 30%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 17px;
    cursor: pointer;
}
@media (min-width: 769px) {
    .desktop-pay-footer {
        width: 100vw;
        height: 100px;
        background: #FAFAFA;
        position: absolute;
        bottom: 0;
        display: inline-flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 0 7vw;
    }
    .desktop-pay-footer-title {
        font-size: 23px;
        color: #24798F;
        font-weight: bold;
    }
    .desktop-pay-footer-little-text {
        font-size: 19px;
        color: #24798F;
    }
    .desktop-pay-footer-red-text {
        color: #FF5050;
        font-size: 20px;
        font-weight: 600;
    }
}
</style>