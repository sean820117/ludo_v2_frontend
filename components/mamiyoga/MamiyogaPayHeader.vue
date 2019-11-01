<template>
    <div class="pay-header">
        <div class="pay-flex-header">
            <div class="pay-header-logo" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/`)"></div>
            <div class="pay-header-login-btn" @click="logout">{{$t('desktop_header_user_3')}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({

    }),
    mounted(){
        if(process.client) {
            
        }
    },
    methods: {
        logout() {
            localStorage.redirect = "/";
            this.$router.push('/logout');
        }
    }
}
</script>

<style>
.pay-header {
    width: 100%;
    height: 45px;
    background: #F7F7F7;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    position: fixed;
    top:0;
    padding: 0 20px;
}
.pay-flex-header {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.pay-header-logo {
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-header-logo.png');
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 80px;
    height: 40px;
    cursor: pointer;
}
.pay-header-login-btn {
    color: #24798F;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
}
@media (min-width: 769px) {
    .pay-header {
        padding: 0 7vw;
    }
    .pay-flex-header {
        max-width: 1366px;
        margin: 0 auto;
    }
}
</style>