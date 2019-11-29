<template>
    <div class="mamiyoga-desktop-nav-header" :style="{backgroundColor: bgColor}">
        <div class="mamiyoga-desktop-nav" :style="{width: $i18n.locale == 'JP' ? '40%':'',minWidth: $i18n.locale == 'JP' ? '450px':''}">
            <img @click="$router.push(`${$i18n.locale == 'zh-TW' ? '/': '/' + $i18n.locale}`)" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-header-logo.png" alt="">
            <li id="go_index" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '/': '/' + $i18n.locale}`)">{{$t('desktop_header_menu_1')}}</li>
            <li id="go_menu" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/' +$i18n.locale}/menu`)">{{$t('desktop_header_menu_2')}}</li>
            <li id="go_syllabus" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/' +$i18n.locale}/syllabus`)">{{$t('desktop_header_menu_3')}}</li>
            <li :style="{display: $i18n.locale == 'JP' ? 'none':''}" id="go_info" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/' +$i18n.locale}/information`)">{{$t('desktop_header_menu_4')}}</li>
            <li :style="{display: $i18n.locale == 'JP' ? 'none':''}" @click="goOtherPage('https://lihi1.cc/UaaJ6')">{{$t('desktop_header_menu_5')}}</li>
            <li :style="{display: $i18n.locale == 'JP' ? 'none':''}" @click="goOtherPage('https://m.me/1557980337838066?ref=B9FG09FD9JA')">{{$t('desktop_header_menu_6')}}</li>
        </div>
        <div class="mamiyoga-desktop-header-btn">
            <div class="desktop-header-gift-btn" v-if="$i18n.locale !== 'JP'" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/gift`)">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-gift.png" alt="">
                {{$t('desktop_header_btn_1')}}
            </div>
            <div v-else style="width: 106px;"></div>
            <div v-if="!login_or_not" :style="{background: bgColor === '#24798f' ? '#fff':'#24798F',color: bgColor === '#24798f' ? '#24798f':'#fff', border: bgColor ==='#24798f' ? '2px #fff solid':'2px #24798f solid'}" class="desktop-header-go-mami" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/login`)">{{$t('desktop_signup_n_login')}}</div>
            <img v-else class="desktop-header-user" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-header-user.png" alt="">
            <div  v-if="$i18n.locale == 'zh-TW'" class="desktop-header-user-menu">
                <div  class="desktop-header-user-menu-block">
                    <li @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/' +$i18n.locale}/member`)">{{$t('desktop_header_user_1')}}</li>
                    <hr class="desktop-header-user-menu-line">
                    <li @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/' +$i18n.locale}/information`)">{{$t('desktop_header_user_2')}}</li>
                    <hr class="desktop-header-user-menu-line">
                    <li @click="logout">{{$t('desktop_header_user_3')}}</li>
                </div>
            </div>
            <div v-else  class="desktop-header-user-menu" style="bottom: -80px;">
                <div  class="desktop-header-user-menu-block-jp">
                    <li @click="logout">{{$t('desktop_header_user_3')}}</li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex';

export default {
    data:()=>({
        login_or_not: false,
        show_menu: false,
    }),
    props: {
        bgColor: String,
    },
    async mounted(){
        if(process.client) {
            this.login_or_not = await this.$checkLogin(this.$store);
            if(!this.login_or_not) {

            }
        }
    },
    methods:{
        goOtherPage(page){
            window.location.href = page;
        },
        showUserMenu(){
            this.show_menu = !this.show_menu
        },
        logout() {
            localStorage.redirect = "/";
            this.$router.push('/logout');
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    }
}
</script>

<style>
.mamiyoga-desktop-nav-header {
    width: 100vw;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    position: fixed;
    top: 0;
    z-index: 1000;
}
.mamiyoga-desktop-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65%;
    max-width: 850px;
}
.mamiyoga-desktop-nav img {
    width: 20%;
    cursor: pointer;
    max-width: 40px;
}
.mamiyoga-desktop-nav li {
    list-style: none;
    color: #F8F7F8;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding-bottom: 2px;
}
.mamiyoga-desktop-header-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.mamiyoga-desktop-header-btn img{ 
    margin-right: 5px;
}
.mamiyoga-desktop-header-btn .desktop-header-gift-btn,
.mamiyoga-desktop-header-btn .desktop-header-go-mami {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    padding: 0 15px;
    margin-left: 10px;
    cursor: pointer;
    height: 60px;
}
.mamiyoga-desktop-header-btn .desktop-header-gift-btn{
    border: 2px solid #fff;
}
.mamiyoga-desktop-header-btn .desktop-header-gift-btn:hover{
    border: 2px solid #FF9898;
    background:#FF9898;
}
.mamiyoga-desktop-header-btn .desktop-header-go-mami{
    background: #FF9898;
}
.desktop-header-user {
    margin-left: 15px;
    margin-right: 0 !important;
}
.desktop-header-user:hover ~ .desktop-header-user-menu {
    display: flex;
}
.desktop-header-user-menu:hover {
    display: flex;
}
.desktop-header-user-menu {
    position: absolute;
    width: 100%;
    height: 220px;
    bottom: -165px;
    margin-left: 10px;
    display: none;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 999;
}
.desktop-header-user-menu-block,.desktop-header-user-menu-block-jp {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 25px;
    border-radius: 5px;
}
.desktop-header-user-menu-block::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 10px 6px;
    border-color: transparent transparent #fff transparent;
    top: 63px;
    right: 26px;
}
.desktop-header-user-menu-block-jp::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 10px 6px;
    border-color: transparent transparent #fff transparent;
    top:150px;
    right: 26px;
}
.desktop-header-user-menu-block li,.desktop-header-user-menu-block-jp li {
    list-style: none;
    margin: 10px 0;
    cursor: pointer;
    color: #707070;
    font-size: 15px;
    font-weight: 500;
}
.desktop-header-user-menu-line {
    width: 80%;
    height: 1px;
    background: rgba(0,0,0,.5);
}
.click-active{
    border-bottom: 2px #fff solid;
}
</style>