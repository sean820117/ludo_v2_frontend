<template>
<div>
    <div class="desktop-gift-page" v-if="$mq === 'desktop'">
        <mamiyoga-desktop-nav-header bgColor="#24798f"></mamiyoga-desktop-nav-header>
        <div class="desktop-gift-content">
            <h3>眾多物質，<br>不如時時關心。</h3>
            <p>立即購買贈禮序號，送禮兌換超簡單。</p>
            <div class="info-desktop-red-btn" @click="$router.push('/pay')">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-gift.png" alt="">
                關心好禮
            </div>
        </div>
    </div>
    <div class="desktop-gift-page" v-else>
        <mamiyoga-hamburger-header></mamiyoga-hamburger-header>
        <h3>眾多物質，<br>不如時時關心。</h3>
        <p>立即購買贈禮序號，送禮兌換超簡單。</p>
        <div class="info-desktop-red-btn" @click="$router.push('/pay')" style="margin-left: 5%;">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-gift.png" alt="">
            關心好禮
        </div>
    </div>
</div>
</template>

<script>
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue'
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue'
export default {
    components: {
        MamiyogaDesktopNavHeader,
        MamiyogaHamburgerHeader,
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