<template>
    <div class="asamiyoga-header">
        <div class="asamiyoga-header-logo">
            <img src="/mamiyoga/header-logo.png" alt="">
        </div>
        <router-link :to="{path:loginTo}" style="text-decoration:none;">
        <div class="asamiyoga-header-login">
            <button v-html="btnText" :style="{backgroundColor:bgColor,color:ftColor}" class="asamiyoga-header-login-btn">{{btnText}}</button>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        bgColor: String,
        ftColor: String,
        btnText: String,
        loginTo: String,
    },
    components: {
    },
}
</script>

<style>
@media (max-width: 899px) {
    .asamiyoga-header {
        position: relative;
        width: 100vw;
        height: 60px;
        /* background: red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        
    }
    .asamiyoga-header-logo {
        width: 30px;
        height: 30px;
        /* background: white; */
    }
    .asamiyoga-header-logo img {
        display: block;
        width: 30px;
    }
    .asamiyoga-header-login {
        /* background: white; */
    }
    .asamiyoga-header-login-btn {
        width: 65px;
        height: 25px;
        border-radius:20px;
        font-weight: 500;
        font-size: 12px;
        text-align: center;
        border-style: none;
        box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    }
}
</style>
