<template>
    <div>
        <div class="writing-page">
            <mamiyoga-pay-header></mamiyoga-pay-header>
            <div class="writing-main">
                <div class="pay-little-title">文章投稿</div>
                <hr style="margin: 5px 0;opacity: .5;">
                <div>
                    <img class="writing-baby" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-writing-baby.png" alt="">
                    <div class="writing-title">將妳的心得或是知識分享給大家吧！</div>
                    <p class="writing-text">LUDO會將妳的文章<br>分享在等待AI助教時，給大家觀看！</p>
                    <textarea name="share-your-article" id="share-your-article" maxlength="250" cols="30" rows="10" placeholder="請輸入空格以內的字數喔！" v-model="writing_text"></textarea>
                    <div class="company-input-submit-btn" style="float:right;" @click="submitText">送出</div>
                </div>
            </div>
            <mamiyoga-member-bottom-btn style="margin-top:10vh;position:unset;"></mamiyoga-member-bottom-btn>
        </div>
        <mamiyoga-window-alert-box v-if="is_submited">
            <div class="cancel-box" @click="is_submited = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <div class="reg-text2" style="text-align: center;margin-top:35px;color:#707070;">收到您的投稿！</div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-writing-submit.png" alt="" style="margin-top:50px;width:60%;">
            <div class="company-input-submit-btn" style="margin:80px auto 0;" @click="is_submited = false">好的</div>
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
import MamiyogaMemberBottomBtn from '~/components/mamiyoga/MamiyogaMemberBottomBtn.vue'
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config'
export default {
    layout: 'mommiyoga',
    data:()=>({
        writing_text: '',
        is_submited: false,
    }),
    components: {
        MamiyogaPayHeader,
        MamiyogaMemberBottomBtn,
        MamiyogaWindowAlertBox,
    },
    async beforeCreate() {
        if (process.client) {
            // this.ui_config = await require('~/config/mommiyoga-config')
            // this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                // if (!payed_or_not) {
                //     console.log("not payed");
                //     window.alert("尚未開通課程，請先前往購買～");
                //     this.$router.push('/mamiyoga/pay');
                // } else {
                //     console.log("payed")
                // }
            }
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    methods: {
        async submitText(){
            if(this.writing_text != '') {
                let send_user_id = '0000'
                let writing_data = this.writing_text
                if(this.user.user_id) {
                    send_user_id = this.user.user_id
                }
                let send_data = {user_id:send_user_id,question_id:'文章投稿',message: writing_data};
                const form_res = await axios.post('/apis/send-feedback',send_data);
                this.is_submited = true
            }
        }
    }
}
</script>

<style>
.writing-main {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
}
.pay-little-title {
    margin-top: 20px;
    font-size: 14px;
    color: #000;
}
.writing-baby {
    width: 40vw;
    display: block;
    margin: 2vh auto;
}
.writing-title {
    font-size: 16px;
    color: #24798F;
    text-align: center;
    font-weight: bold;
}
.writing-text {
    font-size: 12px;
    text-align: center;
    color: #707070;
    margin: 2vh 0;
}
#share-your-article {
    width: 100%;
    height: 20vh;
    border: #24798F 2px solid;
    border-radius: 10px;
    padding: 10px;
}
.company-input-submit-btn {
    width: 80px;
    height: 30px;
    background: #24798F;
    color: #F7F7F7;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    letter-spacing: 2px;
    margin-top: 15px;
}
.cancel-box {
    /* background: red; */
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
.reg-text2{
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
.company-input-submit-btn {
    width: 80px;
    height: 30px;
    background: #24798F;
    color: #F7F7F7;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    letter-spacing: 2px;
    margin-top: 15px;
    cursor: pointer;
}
@media (min-width: 769px) {
    .writing-page {
        background: #fff;
        min-height: 100vh;
    }
    .writing-baby {
        max-width: 150px; 
    }
}
</style>