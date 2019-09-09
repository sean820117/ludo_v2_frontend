<template>
    <div>
        <div class="serialno-page" style="background:#fff;">
            <mamiyoga-pay-header></mamiyoga-pay-header>
            <div class="serialno-main">
                <div class="pay-little-title">序號資訊</div>
                <hr style="margin: 5px 0;opacity: .5;">
                <div class="serialno-number-block" v-if="serialno_data != ''">
                    <div class="serialno-number-base-data" v-for="(serialno,i) in serialno_data" :key="i" stagger="150" >
                        <p class="serialno-number-date">{{setRecordDate(serialno.created_timestamp)}}</p>
                        <p class="serialno-number-text">寄送手機：{{serialno.phone}}</p>
                        <p class="serialno-number-text">訂單號碼：{{serialno.order_id}}</p>
                        <hr style="margin-top: 15px;opacity: .5;border-style:none;height:1px;background:#24798F;">
                        <div class="serialno-every-number" v-for="(code, index) in serialno.codes" :key="index">
                            <div class="serialno-number">
                                <p style="color:#24798F;font-weight:600;">{{code.code}}</p>
                                <p style="color:#FF9898;" v-if="!code.available">已啟用</p>
                                <p style="color:#707070;" v-else>尚未啟用</p>
                            </div>
                            <p style="font-size: 12px;font-weight:lighter;"></p>
                        </div>
                    </div>
                </div>
                <div class="serialno-number-block" v-else>
                    <p class="serialno-number-text" style="font-size: 15px;text-align: center;">尚無序號資料</p>
                </div>
            </div>
            <mamiyoga-member-bottom-btn style="margin-top:10vh;position:unset;" :is_serialno="true" @openExchange="open_exchange = true"></mamiyoga-member-bottom-btn>
        </div>
        <mamiyoga-window-alert-box v-if="open_exchange">
            <div class="cancel-box" @click="open_exchange = false">
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
import Vue from 'vue'
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
import MamiyogaMemberBottomBtn from '~/components/mamiyoga/MamiyogaMemberBottomBtn.vue'
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config';
export default {
    layout: 'mommiyoga',
    components: {
        MamiyogaPayHeader,
        MamiyogaMemberBottomBtn,
        MamiyogaWindowAlertBox,
    },
    data:()=>({
        serialno_data: [
            {
                codes: [
                    {
                        code: '',
                        available: false,
                    }
                ],
            }
        ],
        open_exchange: false,
        input_serialno: '',
    }),
    async beforeCreate() {
        if (process.client) {
            // this.ui_config = await require('~/config/mommiyoga-config')
            // this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/login');
            } else {
                // let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                let send_data = {user_id:this.user.user_id,item_id:'MY01'}
                const form_res = await axios.post('/apis/get-order-info',send_data);
                if(form_res.status == 200) {
                    let temp_data = form_res.data
                    // this.serialno_data = form_res.data
                    console.log(form_res.data)
                    for(var i = 0;i < temp_data.length; i++) {
                        // let codes = this.serialno_data[i].codes//['juju'] => [{code:'juju',available:true},]
                        for(var j = 0;j <temp_data[i].codes.length;j++) {
                            // let code = this.serialno_data[i].codes[j]
                            try {
                                const code_res = await axios.post('/apis/get-activation-code', {code_id: temp_data[i].codes[j]})
                                temp_data[i].codes[j] = {code: temp_data[i].codes[j], available: code_res.data.available}
                            } catch (error) {
                                
                            }
                        }
                    }
                    this.serialno_data = temp_data
                } else {
                    alert('unknown error')
                }
            }
        }
    },
    methods:{
        setRecordDate(date){
            let update = new Date(date) 
            let day = update.getDate() < 10 ? '0'+update.getDate() : update.getDate();
            let month = (update.getMonth()+1) < 10 ? '0'+(update.getMonth()+1) : (update.getMonth()+1);
            return update.getFullYear()+'/'+month+'/'+day;
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
.serialno-main {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
    /* min-height: 100vh; */
    background: white;
    /* height: 100vh;  */
}
.pay-little-title {
    margin-top: 20px;
    font-size: 14px;
    color: #000;
}
.serialno-number-block {
    width: 80%;
    /* height: 45vh; */
    margin: 2vh auto 0;
}
.serialno-number-base-data {
    margin-top: 3vh;
}
.serialno-number-date {
    font-size: 14px;
    color: #000000;
    font-weight: bold;
    margin-bottom: 10px;
}
.serialno-number-text {
    font-size: 12px;
    color: #707070;
    font-weight: 500;
}
.serialno-every-number {
    padding-right: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(36, 121, 143,.5);
}
.serialno-number {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
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
@media (min-width: 769px) {
    .serialno-page {
        min-height: 100vh;
    }
}
</style>