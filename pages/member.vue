<template>
    <div class="member-page" style="padding-bottom: 5vh;background: #fff;">
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <p class="member-title">{{$t('member_title')}}</p>
        
        <div class="member-big-btn" style="margin-top: 5vh;" @click="$router.push(check_lang + '/activation-code')">{{$t('member_text_btn_1')}}</div>
        <div class="member-big-btn" @click="$router.push(check_lang + '/pay')">{{$t('member_text_btn_2')}}</div>
        <!-- <div class="member-big-btn" >{{$t('member_text_btn_3')}}</div> -->
        <hr class="member-line">
        <div class="member-big-btn" @click="$router.push(check_lang + '/writing')">{{$t('member_text_btn_4')}}</div>
        <!-- <div class="member-big-btn" @click="$router.push(check_lang + '/setting')">{{$t('member_text_btn_5')}}</div> -->
        <div class="member-big-btn" @click="$router.push(check_lang + '/contactus')">{{$t('member_text_btn_6')}}</div>

        <div class="member-big-btn" style="background:#97A8AF;margin-top:10vh;" @click="$router.push('/menu')">{{$t('member_text_btn_7')}}</div>
    </div>
</template>

<script>
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
import { mapMutations, mapGetters } from 'vuex';
export default {
    data:()=>({
        check_lang: '',
    }),
    components:{
        MamiyogaPayHeader,
    },
    mounted(){
        if(process.client) {
            if(this.$i18n.locale == 'jp') {
                this.check_lang = '/jp'
            } else if (this.$i18n.locale == 'zh-CN') {
                this.check_lang = '/zh-CN'
            } else {
                this.check_lang = ''
            }
        }
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
                //     this.$router.push('/pay');
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
}
</script>

<style>
.member-title {
    color: #24798F;
    font-size: 21px;
    padding-top: 70px;
    text-align: center;
    font-weight: 600;
}
.member-big-btn {
    width: 60%;
    height: 45px;
    color: #F8F7F8;
    margin: 15px auto;
    background: #24798F;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.member-line {
    height: 7px;
    width: 10%;
    border-style: none;
    background: #97A8AF;
    margin: 35px auto;
    border-radius: 15px;
}
@media (min-width: 769px) {
    .member-page {
        min-height: 100vh; 
    }
    .member-page .member-big-btn {
        max-width: 270px;
    }
}
</style>