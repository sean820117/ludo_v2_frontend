<template>
    <div class="member-bottom-btn">
        <div class="member-big-btn" style="background:#97A8AF;" v-if="!is_serialno" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/menu`)">{{$t('member_text_btn_7')}}</div>
        <div class="member-big-btn" style="background:#24798F;" v-else @click="openExchange">{{$t('member_activation_title')}}</div>
        <div class="member-big-btn member-big-btn-center" style="margin-top:1vh;" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/member`)">{{$t('member_title')}}</div>
    </div>
</template>

<script>
export default {
    props: {
        is_serialno: false
    },
    methods:{
        openExchange(){
            this.$emit('openExchange');
        }
    }
}
</script>

<style>
.member-bottom-btn {
    width: 100%;
    position: fixed;
    bottom: 5vh;
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
.member-big-btn-center {
    border: #24798F 2px solid !important;
    background: #fff !important;
    color: #24798F !important;
}
@media (min-width: 769px) {
    .member-big-btn {
        width: 80% !important;
    }
}
</style>