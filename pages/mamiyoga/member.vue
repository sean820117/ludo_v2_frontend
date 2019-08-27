<template>
    <div class="member-page" style="padding-bottom: 5vh;background: #fff;">
        <mamiyoga-pay-header></mamiyoga-pay-header>
        <p class="member-title">學員中心</p>
        
        <div class="member-big-btn" style="margin-top: 5vh;" @click="$router.push('/mamiyoga/serialno')">我的序號</div>
        <div class="member-big-btn" @click="$router.push('/mamiyoga/pay')">購買課程</div>
        <div class="member-big-btn" >學員點數</div>
        <hr class="member-line">
        <div class="member-big-btn" @click="$router.push('/mamiyoga/writing')">文章投稿</div>
        <div class="member-big-btn" @click="$router.push('/mamiyoga/setting')">基本設定</div>
        <div class="member-big-btn" @click="$router.push('/mamiyoga/contactus')">聯絡我們</div>

        <div class="member-big-btn" style="background:#97A8AF;margin-top:10vh;" @click="$router.push('/mamiyoga/menu')">回到課程</div>
    </div>
</template>

<script>
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
export default {
    layout: 'mommiyoga',
    components:{
        MamiyogaPayHeader,
    }
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
}
</style>