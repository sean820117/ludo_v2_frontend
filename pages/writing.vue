<template>
    <div class="writing-page">
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <div class="writing-main">
            <div class="pay-little-title">文章投稿</div>
            <hr style="margin: 5px 0;opacity: .5;">
            <div>
                <img class="writing-baby" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-writing-baby.png" alt="">
                <div class="writing-title">將你的心得或是知識分享給大家吧！</div>
                <p class="writing-text">LUDO會將你的文章<br>分享在等待AI助教時，給大家觀看！</p>
                <textarea name="share-your-article" id="share-your-article" cols="30" rows="10" placeholder="請輸入文字"></textarea>
                <div class="company-input-submit-btn" style="float:right;">送出</div>
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