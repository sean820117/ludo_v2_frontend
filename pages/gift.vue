<template>
<div>
    <div class="desktop-gift-page" v-if="$mq === 'desktop'">
        <mamiyoga-desktop-nav-header bgColor="#24798f"></mamiyoga-desktop-nav-header>
        <div class="desktop-gift-content">
            <h3>眾多物質，<br>不如時時關心。</h3>
            <p>立即購買贈禮序號，送禮兌換超簡單。</p>
            <div class="info-desktop-red-btn" @click="goPay">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-gift.png" alt="">
                關心好禮
            </div>
        </div>
    </div>
    <div class="desktop-gift-page" v-else>
        <mamiyoga-hamburger-header></mamiyoga-hamburger-header>
        <h3>眾多物質，<br>不如時時關心。</h3>
        <p>立即購買贈禮序號，送禮兌換超簡單。</p>
        <div class="info-desktop-red-btn" @click="goPay" style="margin-left: 5%;">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-gift.png" alt="">
            關心好禮
        </div>
    </div>
        <!-- 新版alert -->
    <mamiyoga-new-window-alert-box v-if="show_alert" @closeBox="show_alert = false" :alertBtn="alertBtn"
    :alertTitle="alertTitle" :alertImg="alertImg" :alertText="alertText" :alertBtnColor="alertBtnColor"
    @enterBox="enterBox(nextGo)"></mamiyoga-new-window-alert-box>
</div>
</template>

<script>
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue'
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue'
import axios from '~/config/axios-config'
import { mapMutations, mapGetters } from 'vuex';
export default {
    data:()=>({
        is_login: false,

        show_alert: false,
        alertTitle: '',
        alertImg: '',
        alertText: '',
        alertBtn: '好的',
        alertBtnColor: '#24798F',
        nextGo: '',
    }),
    components: {
        MamiyogaDesktopNavHeader,
        MamiyogaHamburgerHeader,
    },
    async mounted(){
        if(process.client){
            this.is_login = await this.$checkLogin(this.$store);
        }
    },
    methods:{
        goPay(){
            if(!this.is_login){
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/gift`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_go_login')}`
                this.alertBtn = `${this.$t('teach_button_ok')}`
                this.nextGo = 'login'
            } else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/pay`)
            }
        },
        enterBox(i){
            if(i == '0'){
                this.show_alert = false
            }else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/${i}`)
            }
        },
    }
}
</script>

<style>
.desktop-gift-page {
    width: 100vw;
    height: 100vh;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-gift-background.jpg');
    background-position: 70%;
    background-repeat: no-repeat;
    background-size: cover;
}
.desktop-gift-content {
    width: 80%;
    max-width: 1366px;
    margin: 0 auto;
    padding-top: 100px;
}
.desktop-gift-page h3 {
    color: #fff;
    font-size:  40px;
    font-weight: 300;
    width: 90%;
    margin: 10px auto 0;
}
.desktop-gift-page p {
    color: #fff;
    font-size:  15px;
    font-weight: 400;
    margin: 15px auto;
    width: 90%;
}
.desktop-gift-page .info-desktop-red-btn{
    color: #F8F7F8;
    font-size: 16px;
    font-weight: bold;
    background: #C74F4F;
    border: 3px solid #C74F4F;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    margin-top: 35px;
    cursor: pointer;
    -webkit-user-select: none;
}
.desktop-gift-page .info-desktop-red-btn img {
    margin-right: 5px;
}
@media (min-width: 769px) {
    .desktop-gift-page{
        padding-top: 90px;
        background-position: center 100%;
    }
    .desktop-gift-page h3 {
        font-size:  65px;
        width: unset;
        margin: unset;
    }
    .desktop-gift-page p {
        font-size:  19px;
        font-weight: 400;
        width: unset;
        margin: 30px 0;
    }
}
</style>