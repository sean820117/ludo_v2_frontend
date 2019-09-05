<template>
    <div class="contactus-page">
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <div class="contactus-main">
            <div class="pay-little-title">聯絡我們</div>
            <hr style="margin: 5px 0;opacity: .5;">
            <img class="contactus-logo" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-contact-ludo-logo.png" alt="">
            <a href="https://www.facebook.com/ludonow/" style="text-decoration:none;">
                <div class="contactus-big-btn">
                    <div class="contactus-big-btn-img" style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-contact-fb.png')"></div>
                    LUDO Now如荼生活
                </div>
            </a>
            <a href="mailto:contact@ludonow.com" style="text-decoration:none;">
                <div class="contactus-big-btn">
                    <div class="contactus-big-btn-img" style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-contact-mail.png')"></div>
                    contact@ludonow.com
                </div>
            </a>
        </div>
        <mamiyoga-member-bottom-btn></mamiyoga-member-bottom-btn>
    </div>
</template>

<script>
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
import MamiyogaMemberBottomBtn from '~/components/mamiyoga/MamiyogaMemberBottomBtn.vue'
import { mapMutations, mapGetters } from 'vuex';
export default {
    layout: 'mommiyoga',
    components:{
        MamiyogaPayHeader,
        MamiyogaMemberBottomBtn,
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
                let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
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
}
</script>

<style>
.contactus-page {
    min-height: 100vh;
}
.contactus-main {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
}
.pay-little-title {
    margin-top: 20px;
    font-size: 14px;
    color: #000;
}
.contactus-logo {
    width: 40vw;
    display: block;
    margin: 5vh auto;
}
.contactus-big-btn {
    width: 60vw;
    height: 45px;
    color: #272727;
    margin: 15px auto;
    border: #272727 1px solid;
    /* background: #24798F; */
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    /* letter-spacing: 2px; */
    display: flex;
    align-items: center;
    /* justify-content: center; */
    cursor: pointer;
}
.contactus-big-btn-img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
@media (min-width: 769px) {
    .contactus-page {
        background: #fff;
    }
    .contactus-logo {
        max-width: 200px;
    }
    .contactus-big-btn {
        width: 67%;
    }
}
</style>