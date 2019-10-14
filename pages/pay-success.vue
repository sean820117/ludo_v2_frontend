<template>
    <div>
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <div class="pay-success-content">
            <p>已將付款交易通知寄至您的信箱！<br>付款成功後將寄送序號至您的手機！</p>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-order-success.png" alt="">
            <div class="member-big-btn" style="margin-top:7vh;background:#FF9898;" @click="$router.push('/activation-code')">兌換序號</div>
        </div>
        
    </div>
</template>

<script>
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
export default {
    components:{
        MamiyogaPayHeader,
    }
}
</script>

<style>
.pay-success-content {
    margin-top: 15vh;
    text-align: center;
    color: #707070;
    font-size: 14x;
}
.pay-success-content img {
    display: block;
    height: 30vh;
    margin: 3vh auto;
}
.member-big-btn {
    width: 60%;
    height: 45px;
    color: #F8F7F8;
    margin: 15px auto;
    background: #24798F;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
@media (min-width: 769px) {
    .pay-success-content {
        margin-top: 100px;
        font-size: 19px;
    }
    .pay-success-content img {
        height: 350px;
        margin: 40px auto;
    }
    .member-big-btn {
        width: 270px;
    }
}
</style>