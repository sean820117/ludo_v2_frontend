<template>
    <div class="serialno-page" style="background:#fff;">
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <div class="serialno-main">
            <div class="pay-little-title">序號資訊</div>
            <hr style="margin: 5px 0;opacity: .5;">
            <div class="serialno-number-block">
                <div class="serialno-number-base-data">
                    <p class="serialno-number-date">2019/09/05</p>
                    <p class="serialno-number-text">寄送手機：0953******</p>
                    <p class="serialno-number-text">訂單號碼：09000003434532553840329</p>
                    <hr style="margin-top: 15px;opacity: .5;border-style:none;height:1px;background:#24798F;">
                    <div class="serialno-every-number">
                        <div class="serialno-number">
                            <p style="color:#24798F;">dvfsbkrgm14t45</p>
                            <p style="color:#FF9898;">已啟用</p>
                        </div>
                        <p style="font-size: 12px;font-weight:lighter;">AI助教使用到期日期 : 2020/9/5</p>
                    </div>
                </div>
            </div>
        </div>
        <mamiyoga-member-bottom-btn></mamiyoga-member-bottom-btn>
    </div>
</template>

<script>
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
import MamiyogaMemberBottomBtn from '~/components/mamiyoga/MamiyogaMemberBottomBtn.vue'
export default {
    layout: 'mommiyoga',
    components: {
        MamiyogaPayHeader,
        MamiyogaMemberBottomBtn,
    }
}
</script>

<style>
.serialno-main {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
    /* height: 100vh;  */
}
.pay-little-title {
    margin-top: 20px;
    font-size: 14px;
    color: #000;
}
.serialno-number-block {
    width: 80%;
    height: 45vh;
    margin: 6vh auto 0;
}
.serialno-number-date {
    font-size: 14px;
    color: #000000;
    font-weight: bold;
    margin-bottom: 10px;
}
.serialno-number-text {
    font-size: 12px;
    color: #707070;
    font-weight: 500;
}
.serialno-every-number {
    padding-right: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(36, 121, 143,.5);
}
.serialno-number {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
}

@media (min-width: 769px) {
    .serialno-page {
        min-height: 100vh;
    }
}
</style>