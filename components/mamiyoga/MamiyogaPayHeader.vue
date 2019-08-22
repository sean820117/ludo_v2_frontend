<template>
    <div class="pay-header">
        <div class="pay-header-logo"></div>
        <div class="pay-header-login-btn">登出</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.pay-header {
    width: 100vw;
    height: 45px;
    background: #F7F7F7;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    position: fixed;
    top:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.pay-header-logo {
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-header-logo.png');
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 80px;
    height: 40px;
}
.pay-header-login-btn {
    color: #24798F;
    font-size: 13px;
    font-weight: 500;
}
</style>