<template>
    <div>
        <div class="order-footer">
            <div class="order-footer-see" @click="open_order = true">訂單明細</div>
            <div class="order-footer-cost">共計  NTD.5,060</div>
            <div class="order-footer-btn" :style="{backgroundColor:ftBtn}">{{payFt}}</div>
        </div>
        <mamiyoga-window-alert-box v-if="open_order">
            <div class="cancel-box" @click="open_order = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <div style="padding: 0 20px;">
                <p style="color:#24798F;font-size:14px;font-weight:500;text-align:left;margin-bottom: 3px;">訂單明細</p>
                <hr style="width: 100%;height:2px;background: #24798F;border-style:none;">
                <p class="order-footer-show">『Mami yoga』日本人氣瑜珈-姊妹揪起來方案</p>
                <div class="order-footer-show-pay">
                    <p>課程售價</p>
                    <p>NTD.5,160</p>
                </div>
                <div class="order-footer-show-pay order-pink">
                    <p>優惠折扣</p>
                    <p>－NTD.160</p>
                </div>
                 <hr style="border-style:none;height:1px;background:#707070;opacity:.5;margin-top:40px;">
                 <p style="color:#24798F;font-size:14px;font-weight:bold;text-align:right;margin-top: 10px;">NTD.5,000</p>
            </div>
           
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
export default {
    data:()=>({
        open_order: false,
    }),
    props: {
        ftBtn: String,
        payFt: String,
    },
    components: {
        MamiyogaWindowAlertBox,
    }
}
</script>

<style>
.order-footer {
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -1px 10px rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
}
.order-footer-see {
    font-size: 14px;
    font-weight: bold;
    color: #24798F;
    border: solid 2px #24798F;
    padding: 1px 10px;
    border-radius: 3px;
    cursor: pointer;
}
.order-footer-btn {
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 17px;
}
/* .pay-footer-cost {
    float: left;
    width: calc(100% - 100px);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
}
*/
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
.order-footer-show {
    text-align: left !important;
}
.order-footer-show-pay {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
.order-footer-show-pay p {
    margin: 0 0 5px !important;

}
.order-pink p {
    color:#FF9898 !important;
}
@media (min-width: 769px) {
    .order-footer {
        max-width: 450px;
    }
}
</style>