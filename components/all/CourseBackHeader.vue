<template>
    <div class="course-back-header">
        <div class="course-back-header-goback">
            <a @click="$router.go(-1)">
                <img :src="backImg" alt="">
            </a>
        </div>
        <div>
            <h4 :style="{color:titleColor}">{{headerTitle}}</h4>
        </div>
        <div class="course-back-header-login">
            <!-- <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn">{{is_login === false ? '登入':'登出'}}</button> -->
            <!-- <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn mommiyoga-header-login-btn" v-if="!is_login" @click="$router.push('/mommiyoga/login')">密码登录</button>
            <button :style="{backgroundColor:bgColor,color:ftColor}" class="mamiyoga-header-login-btn" @click="$router.push('/logout')" v-else >登出</button> -->
             <button :style="{backgroundColor:bgColor,color:ftColor,fontFamily:family}" class="course-back-header-login-btn" >登入</button>
        </div>
        
    </div>
</template>

<script>
export default {
    // data:()=>({
    //     is_login:false,
    // }),
    props: {
        bgColor: String,
        ftColor: String,
        btnText: String,
        loginTo: String,
        backImg: String,
        headerTitle: String,
        titleColor: String,
        family: String,
    },
    // async mounted() {
    //     if (process.client) {
    //         this.is_login = await this.$checkLogin(this.$store);
    //     }
    // },
}
</script>

<style>
.course-back-header {
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 980;
}

.course-back-header-login-btn {
    width: 63px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    cursor: pointer;
}
.course-back-header-goback {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.course-back-header-goback img {
    display: block;
    width: 20px;
    height: 13px;
    cursor: pointer;
}

</style>
