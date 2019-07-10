<template>
    <div class="course-header">
        <router-link :to="{path:logoTo}">
        <div class="course-header-logo">
            <img :src="logoImg" alt="">
        </div>
        </router-link>
        <!-- <router-link :to="{path:loginTo}" style="text-decoration:none;"> -->
        <div class="course-header-login">
            <!-- <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn">{{is_login === false ? '登入':'登出'}}</button> -->
            <!-- <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn" v-if="!is_login" @click="$router.push('/mamiyoga/login')">{{$t('header_login')}}</button>
            <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn" @click="$router.push('/logout')" v-else >登出</button> -->
             <button :style="{backgroundColor:bgColor,color:ftColor,fontFamily:family}" class="course-header-login-btn" >登入</button>
        </div>
        <!-- </router-link> -->
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
        logoTo: String,
        logoImg: String,
        family: String,
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
.course-header {
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.course-header-logo {
    width: 30px;
    height: 30px;
}
.course-header-logo img {
    display: block;
    width: 30px;
}
.course-header-login-btn {
    width: 63px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
}
@media (min-width: 769px) {
    .course-header {
        position: relative;
        width: 100%;
        height: 60px;
        /* background: red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
    .course-header-logo {
        width: 30px;
        height: 30px;
        /* background: white; */
        /* position: absolute;
        top: 2vh;
        left: 7vw; */
    }
    .course-header-logo img {
        display: block;
        width: 30px;
    }
    .course-header-login-btn {
        width: 63px;
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
