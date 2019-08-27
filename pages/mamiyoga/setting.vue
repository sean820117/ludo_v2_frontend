<template>
    <div>
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <div class="writing-main">
            <div class="pay-little-title">基本設定</div>
            <hr style="margin: 5px 0;opacity: .5;">
            <div class="writing-block">
                <div class="writing-block-title">聯絡資訊</div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">姓名</div>
                    <div>梁若茜</div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">聯絡電話</div>
                    <div>0953-840-329</div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">帳號</div>
                    <div>使用Facebook登入</div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">密碼</div>
                    <div>使用Facebook登入</div>
                </div>
            </div>
            <div class="writing-block" style="margin-top: 4vh;">
                <div class="writing-block-title">寄送資訊</div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">收件人</div>
                    <div>梁若茜</div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">聯絡電話</div>
                    <div>0953-840-329</div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">地址</div>
                    <div>台北市大同區錦西街62號3樓</div>
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
.writing-main {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
}
.pay-little-title {
    margin-top: 20px;
    font-size: 14px;
    color: #000;
}
.writing-block {
    width: 80%;
    margin: 2vh auto;
}
.writing-block-title {
    color: #24798F;
    border-bottom: #24798F 2px solid;
    padding-bottom: 1vh;
    font-weight: 600;
}
.writing-block-content {
    display: flex;
    align-items: center;
    font-size: 12px;
    border-bottom: 1px #24798F solid;
    padding: 1vh 0;
    color: #707070;
}
.writing-block-content-title {
    color: #24798F;
    font-weight: 600;
    width: 30%;
}
</style>