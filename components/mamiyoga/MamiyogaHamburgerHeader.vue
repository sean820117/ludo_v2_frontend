<template>
    <div>
        <div class="mamiyoga-header hamburger" :class="open_menu ? 'open':''">
            <router-link to="/">
            <div class="mamiyoga-header-logo">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/header-logo.png" alt="瑜伽課程">
            </div>
            </router-link>

            <div class="mamiyoga-hamburger" @click="open_menu = !open_menu" :class="open_menu ? 'open':''">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="mamiyoga-hamburger-menu" :class="open_menu ? 'open':''">
            <nav class="mamiyoga-hamburger-nav">
                <li @click="$router.push('/')">服務介紹</li>
                <li @click="$router.push('menu')">課程影片</li>
                <li @click="$router.push('/syllabus')">孕動日記</li>
                <li @click="$router.push('/information')">媽咪知識</li>
                <li @click="goOtherPage('https://lihi1.cc/UaaJ6')">媽咪社群</li>
                <li @click="goOtherPage('https://m.me/1557980337838066?ref=B9FG09FD9JA')">專人服務</li>
            </nav>
            <div class="click-to-activation" @click="$router.push('/activation-code')">我有兌換序號</div>
            <div v-if="!login_or_not" class="mamiyoga-hamburger-btn" style="background: #fff;color:#24798f; border: 2px solid #24798;" @click="$router.push('/login')">註冊/登入</div>
            <div v-else class="mamiyoga-hamburger-btn" style="background: #fff;color:#24798f; border: 2px solid #24798;" @click="$router.push('/member')">學員中心</div>
            <div class="mamiyoga-hamburger-btn" style="background: transparent; border: 2px solid #fff;" @click="$router.push('/gift')">
                <img style="margin-right:5px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-gift.png" alt="">
                贈禮
            </div>
            
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex';
export default {
    data:()=>({
        open_menu: false,
        login_or_not: false,
    }),
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
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    }
}
</script>

<style>
.mamiyoga-header {
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 9;
}
.mamiyoga-header.hamburger.open {
    z-index: 1001;
    position: fixed;
    top:0;
}
.mamiyoga-header-logo {
    width: 30px;
    height: 30px;
}
.mamiyoga-header-logo img {
    display: block;
    width: 30px;
}
.mamiyoga-hamburger {
    width: 30px;
    height: 30px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
}
.mamiyoga-hamburger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 90%;
  background: #fff;
  border-radius: 9px;
  opacity: 1;
  right: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}
.mamiyoga-hamburger span:nth-child(1) {
  top: 3px;
}

.mamiyoga-hamburger span:nth-child(2),.mamiyoga-hamburger span:nth-child(3) {
  top: 12px;
}

.mamiyoga-hamburger span:nth-child(4) {
  top: 21px;
}

.mamiyoga-hamburger.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  right: 50%;
}

.mamiyoga-hamburger.open span:nth-child(2) {
  transform: rotate(45deg);
}

.mamiyoga-hamburger.open span:nth-child(3) {
  transform: rotate(-45deg);
}

.mamiyoga-hamburger.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  right: 50%;
}
.mamiyoga-hamburger-menu {
    display: none;
    position: fixed;
    background: #24798F;
    width: 100%;
    height: 100vh;
    top: 0;
}
.mamiyoga-hamburger-menu.open {
    display: block;
    z-index: 1000;
}
.mamiyoga-hamburger-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
}
.mamiyoga-hamburger-nav li {
    color: #F8F7F8;
    font-size: 19px;
    font-weight: 500;
    list-style: none;
    margin-bottom: 30px;
}
.mamiyoga-hamburger-nav li:last-child {
    margin-bottom: 0px;
}
.mamiyoga-hamburger-btn {
    width: 50%;
    height: 50px;
    background: #FF9898;
    border-radius: 5px;
    margin: 0 auto 2vh;
    color: #F8F7F8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    font-weight: 500;
}
.click-to-activation {
    color: #fff;
    border-bottom: 1px solid #fff;
    width: fit-content;
    margin: 0 auto 20px;
}
</style>