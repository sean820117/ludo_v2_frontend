<template>
    <div class="setting-page">
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <div class="writing-main">
            <div class="pay-little-title">基本設定</div>
            <hr style="margin: 5px 0;opacity: .5;">
            <div class="writing-block">
                <div class="writing-block-title">聯絡資訊</div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">姓名</div>
                    <div></div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">聯絡電話</div>
                    <div></div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">帳號</div>
                    <div></div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">密碼</div>
                    <div></div>
                </div>
            </div>
            <!-- <div class="writing-block" style="margin-top: 4vh;">
                <div class="writing-block-title">寄送資訊</div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">收件人</div>
                    <div></div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">聯絡電話</div>
                    <div></div>
                </div>
                <div class="writing-block-content">
                    <div class="writing-block-content-title">地址</div>
                    <div></div>
                </div>
            </div> -->
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
.writing-block {
    width: 80%;
    margin: 2vh auto;
}
.writing-block-title {
    color: #24798F;
    border-bottom: #24798F 2px solid;
    padding-bottom: 1vh;
    font-weight: 600;
}
.writing-block-content {
    display: flex;
    align-items: center;
    font-size: 12px;
    border-bottom: 1px #24798F solid;
    padding: 1vh 0;
    color: #707070;
}
.writing-block-content-title {
    color: #24798F;
    font-weight: 600;
    width: 30%;
}
@media (min-width:769px) {
    .setting-page {
        background: #fff;
        min-height: 100vh;
    }
}
</style>