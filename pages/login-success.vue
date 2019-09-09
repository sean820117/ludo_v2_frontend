<template>
    <div>
        <div class="login-success-page">
            <div class="mamiyoga-header">
                <div class="mamiyoga-header-logo"></div>
                <div class="mamiyoga-header-login">
                    <div class="mamiyoga-header-cancel-btn" @click="goIndex()"></div>
                </div>
            </div>
            <div class="reg-text" style="margin-top:5vh;">註冊成功</div>
            <img style="width:40%;margin: 4vh 0;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-login-success.png" alt="">
            <div class="reg-text2" style="width:67%;max-width: 320px;font-size:13px;margin:0 0 2vh;color:#24798F;">歡迎成為『Mami yoga』的學員，讓我們<br>跟著麻美老師一起變美吧！</div>
        
            <div class="btn-login-and-signup-container" style="flex-wrap: wrap;"> 
                <div class="mamiyoga-login-btn-to-signin" @click="goPay()">購買課程</div>
                <div class="mamiyoga-login-btn-to-signin" style="margin-top:2vh;background:#fff;color: #24798F;border:#24798f 2px solid;" @click="exchange = true">我有序號</div>  
            </div>
        </div>
        <mamiyoga-window-alert-box v-if="exchange">
            <div class="cancel-box" @click="exchange = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <div class="reg-text" style="text-align: center;margin-top:35px;color:#707070;">兌換序號</div>
            <div class="reg-text2" style="text-align: center;margin-top:20px;color:#8F8F8F;">請輸入課程兌換序號</div>
            <input id="exchange-input" name="exchange-input" type="text" placeholder="請輸入半形英數字" v-model="input_serialno">
            <div class="mamiyoga-login-btn-to-signin" style="width: 90%;" @click="checkInputSerialno">兌換</div>
        </mamiyoga-window-alert-box>
    </div>
</template>
<script>
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config';
export default {
    layout: 'mommiyoga',
    data:()=>({
        exchange: false,
        input_serialno: '',
    }),
    components:{
        MamiyogaWindowAlertBox,
    },
    async beforeCreate() {
        // if (process.client) {
        //     if(localStorage['is_signup_success']){
        //             window.alert("你已經註冊了");
        //             this.$router.push('/menu')
        //     }
        // }
    },
    methods:{
        goIndex(){
            // localStorage['is_signup_success'] = true
            this.$router.push('/menu')
        },
        goPay(){
            // localStorage['is_signup_success'] = true
            this.$router.push('/pay')
        },
        async checkInputSerialno(){
            if(this.input_serialno != '') {
                let send_data = {user_id: this.user.user_id, code_id: this.input_serialno, course_id: 'mamiyoga'}
                console.log(send_data)
                try {
                    const serialno_code = await axios.post('/apis/redeem-activation-code',send_data)
                    alert('輸入成功！已為您開通課程～')
                    this.$router.push('/menu')
                } catch(error) {
                    alert('序號錯誤或已開通，請確認是否輸入正確值')
                }    
            } else {
                alert('請輸入序號！')
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        
    },
}
</script>
<style>
.login-success-page {
    text-align: center;
    min-height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}
.login-success-page .mamiyoga-header {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
}
.login-success-page .mamiyoga-header-logo {
    width: 30px;
    height: 30px;
}
.login-success-page .mamiyoga-header .mamiyoga-header-login-btn {
    color: #FFF;
    width: 55px;
    height: 25px;
    border-radius: 20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
}
.mamiyoga-header-cancel-btn {
    width: 15px;
    height: 15px;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
}
.reg-text{
    /* padding-top: 80px; */
    font-size: 21px;
    font-weight: 500;
}
.reg-text2{
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
.btn-login-and-signup-container {
    display: flex;
    margin-top: 3vh;
    justify-content: flex-end;
    width: 67%;
    /* margin-left: 16.5vw; */
}
.mamiyoga-login-btn-to-signin {
    width: 100%;
    height: 45px;
    color: #F8F7F8;
    margin: 0 auto;
    background: #24798F;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    border-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cancel-box {
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.cancel-box img {
    width: 65%;
}
#exchange-input{
    width: 90%;
    height: 45px;
    border-radius: 5px;
    border: #707070 solid 1px;
    display: block;
    margin: 30px auto 15px;
    padding-left: 5px;
}
@media (min-width: 769px) {
    .login-success-page .mamiyoga-header {
        width: 450px;
    }
}
</style>