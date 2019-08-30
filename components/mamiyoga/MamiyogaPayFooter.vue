<template>
    <div class="pay-footer">
        <div class="pay-footer-tag"></div>
        <div class="pay-footer-cost">共計<b>&nbsp;&nbsp;NTD&nbsp;{{selectPrice}}</b></div>
        <div class="pay-footer-btn" :style="{backgroundColor:ftBtn}" @click="$router.push('/mamiyoga/order')">{{payFt}}</div>
    </div>
</template>

<script>

export default {
    props: {
        ftBtn: String,
        payFt: String,
        selectPrice: Number,
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