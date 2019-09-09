<template>
    <div class="pay-footer">
        <div class="pay-footer-tag" style="background:#24798F;cursor:pointer;" v-if="!have_cost" @click="openExchange">折扣碼輸入</div>
        <div class="pay-footer-tag" v-else></div>
        <div class="pay-footer-cost">共計<b>&nbsp;&nbsp;NTD&nbsp;{{selectPrice}}</b></div>
        <div class="pay-footer-btn" v-if="can_pay" :style="{backgroundColor:ftBtn}" @click="$router.push('/order')">{{payFt}}</div>
        <div class="pay-footer-btn" v-else style="background-color: #707070">{{payFt}}</div>
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
    .pay-footer {
        max-width: 450px;
    }
}
</style>