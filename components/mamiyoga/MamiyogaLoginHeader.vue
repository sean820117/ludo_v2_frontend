<template>
    <div class="mamiyoga-header">
        <div class="mail-header-goback">
            <a @click="$router.go(-1)">
                <img src="/mamiyoga/teach-goback.svg" alt="">
            </a>
        </div>
        <router-link :to="{path:loginTo}" style="text-decoration:none;">
        <div class="mamiyoga-header-login">
            <!-- <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn">{{is_login === false ? '登入':'登出'}}</button> -->
            <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn" v-if="!is_login" @click="$router.push('/mamiyoga/login')">登入</button>
            <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn" @click="$router.push('/logout')" v-else >登出</button>
        </div>
        </router-link>
    </div>
</template>

<script>
import MamiyogaSmallBtn from '~/components/mamiyoga/MamiyogaSmallBtn.vue';
export default {
    data:()=>({
        is_login:false,
    }),
    props: {
        bgColor: String,
        ftColor: String,
        btnText: String,
        loginTo: String,
    },
    components: {
        MamiyogaSmallBtn,
    },
    async mounted() {
        if (process.client) {
            this.is_login = await this.$checkLogin(this.$store);
        }
    },
}
</script>

<style>
.mamiyoga-header {
    position: fixed;
    /* position: relative; */
    width: 100vw;
    height: 60px;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 900;
}
.mamiyoga-header-logo {
    width: 30px;
    height: 30px;
    /* background: white; */
    /* position: absolute;
    top: 2vh;
    left: 7vw; */
}
.mamiyoga-header-logo img {
    display: block;
    width: 30px;
}
.mamiyoga-header-login {
    /* background: white; */
    /* position: absolute;
    top: 3vh;
    right: 6vw; */
}
.mamiyoga-header-login-btn {
    width: 55px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
}
.mail-header-goback {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.mail-header-goback img {
    display: block;
}
@media (min-width: 769px) {
    .mamiyoga-header {
        width: 450px;
    }
}
</style>
