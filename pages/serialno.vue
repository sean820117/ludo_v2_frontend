<template>
    <div class="serialno-page" style="background:#fff;">
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <div class="serialno-main">
            <div class="pay-little-title">序號資訊</div>
            <hr style="margin: 5px 0;opacity: .5;">
            <div class="serialno-number-block">
                <div class="serialno-number-base-data">
                    <p class="serialno-number-date"></p>
                    <p class="serialno-number-text"></p>
                    <p class="serialno-number-text"></p>
                    <hr style="margin-top: 15px;opacity: .5;border-style:none;height:1px;background:#24798F;">
                    <div class="serialno-every-number">
                        <div class="serialno-number">
                            <p style="color:#24798F;"></p>
                            <p style="color:#FF9898;"></p>
                        </div>
                        <p style="font-size: 12px;font-weight:lighter;"></p>
                    </div>
                </div>
            </div>
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
    components: {
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
.serialno-main {
    padding-top: 45px;
    margin: 0 auto;
    width: 90%;
    /* height: 100vh;  */
}
.pay-little-title {
    margin-top: 20px;
    font-size: 14px;
    color: #000;
}
.serialno-number-block {
    width: 80%;
    height: 45vh;
    margin: 6vh auto 0;
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

@media (min-width: 769px) {
    .serialno-page {
        min-height: 100vh;
    }
}
</style>