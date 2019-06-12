<template>
    <div class="mamiyoga-select-login">
        <p>其他登錄方式</p>
        <div class="mamiyoga-select-login-box">
            <div class="mamiyoga-select-login-icon">
                <img src="/mamiyoga/intro-icon-facebook.svg" alt="">
            </div>
            <div class="mamiyoga-select-login-icon">
                <img src="/mamiyoga/intro-icon-google.svg" alt="">
            </div>
            <div class="mamiyoga-select-login-icon">
                <img src="/mamiyoga/intro-icon-wechat.svg" alt="">
            </div>
            <div class="mamiyoga-select-login-icon">
                <img src="/mamiyoga/intro-icon-more.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 899px) {
    .mamiyoga-select-login {
        width: 70vw;
        height: 80px;
        /* background: red; */
        margin: 10px auto;
    }
    .mamiyoga-select-login p {
        font-size: 12px;
        text-align: center;
        color: #DCD8CF;
        margin-bottom: 5px;
    }
    .mamiyoga-select-login-box {
        width: 100%;
        height: 50px;
        /* background-color:green;  */
    }
    .mamiyoga-select-login-icon {
        float: left;
        width: 20%;
        height: 100%;
        margin: 0 2.5%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background: white; */
    }
}
</style>
