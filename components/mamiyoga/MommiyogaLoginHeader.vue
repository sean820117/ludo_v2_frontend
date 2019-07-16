<template>
    <div class="mamiyoga-header">
        <div class="login-header-goback">
            <a @click="$router.go(-1)">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-goback.png" alt="">
            </a>
        </div>
        <div>
            <h3>{{headerTitle}}</h3>
        </div>
        <div class="mamiyoga-header-login">
            <!-- <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn">{{is_login === false ? '登入':'登出'}}</button> -->
            <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn mommiyoga-header-login-btn" v-if="!is_login" @click="$router.push('/mommiyoga/login')">密码登录</button>
            <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn" @click="$router.push('/logout')" v-else >登出</button>
        </div>
        
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
        headerTitle: String,
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
    position: relative;
    width: 100%;
    height: 60px;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 980;
}
/* .mamiyoga-header-logo {
    width: 30px;
    height: 30px;
    background: white;
    position: absolute;
    top: 2vh;
    left: 7vw;
} */
/* .mamiyoga-header-logo img {
    display: block;
    width: 30px;
    cursor: pointer;
} */
/* .mamiyoga-header-login {
    background: white;
    position: absolute;
    top: 3vh;
    right: 6vw;
} */
.mamiyoga-header-login-btn {
    width: 55px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    cursor: pointer;
}
.mamiyoga-header-login-btn.mommiyoga-header-login-btn {
    width: 80px;
}
.login-header-goback {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.login-header-goback img {
    display: block;
    width: 20px;
    height: 13px;
    cursor: pointer;
}
.mamiyoga-header h3 {
    color: #97a8af;
}

</style>
