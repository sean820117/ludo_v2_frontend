<template>
    <div class="yoga-header-nav" :style="{background: bgColor}">
        <div class="yoga-header-title-box">
            <img :src="YogaHeaderTitle" class="yoga-header-title-img">
            <div class="yoga-header-hamburger" @click="openCourseMenu()"  :class="showMenu">
                <div class="yoga-header-hamburger-line"></div>
            </div>
        </div>
        <div class="yoga-header-content-box" :class="showMenu">
            <div class="yoga-header-content">
                <ul>
                    <li>課堂簡介</li>
                    <li>體驗練習</li>
                    <li>課堂單元</li>
                    <li>我要購買</li>
                </ul>
                <div class="yoga-header-btn-box">
                    <button class="yoga-header-btn">聯絡我們</button>
                </div>
                <div class="yoga-header-login-box">
                    <button class="yoga-header-login-btn">登入／註冊</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import YogaHeaderTitle from '~/static/yoga/Yoga-header-title.svg';

export default {
    data:()=>({
        YogaHeaderTitle: YogaHeaderTitle,
        showing: false,
    }),
    components:{
        
    },
    props: {
        bgColor: String,
    },
    methods: {
        openCourseMenu(){
            this.showing = !this.showing ;
        }
    },
    computed: {
        showMenu(){
            return this.showing ? 'open':'';
        }
    },
}
</script>

<style>
@media (max-width: 899px) {
    .yoga-header-nav {
        width: 100vw;
        height: 50px;
    }
    .yoga-header-title-box {
        position: relative;
        display: flex;
        width: 100vw;
        height: 50px;
        align-items: center;
        justify-content: center;
        background: white;
        z-index: 999;
    }
    .yoga-header-title-img {
        width: 60vw;
        height: auto;
    }
    .yoga-header-hamburger {
        position: absolute;
        width: 30px;
        height: 30px;
        background: white;
        top: 12px;
        right: 12px;
    }
    .yoga-header-hamburger-line {
        position: absolute;
        width: 18px;
        height: 2px;
        background-color: #99CBA5;
        right: 5px;
        top: 12px;
        transition-duration: 0.4s;
    }
    .yoga-header-hamburger-line::after,.yoga-header-hamburger-line::before {
        position: absolute;
        width: 18px;
        height: 2px;
        background-color: #99CBA5;
        content: '';
        transition-duration: 0.4s;
    }
    .yoga-header-hamburger-line::after {
        top: -6px;
    }
    .yoga-header-hamburger-line::before {
        top:6px;
    }
    .yoga-header-hamburger.open .yoga-header-hamburger-line {
        background-color: transparent;
    }
    .yoga-header-hamburger.open .yoga-header-hamburger-line::after {
        transform: rotate(-45deg);
        top: 0;
    }
    .yoga-header-hamburger.open .yoga-header-hamburger-line::before {
        transform: rotate(45deg);
        top: 0;
    }
    .yoga-header-content-box {
        position: absolute;
        width: 100vw;
        height: 100vh;
        /* background: black; */
        transition: .7s ease;
        background-color: white; 
        /* top: 50px; */
        /* left: -100vw; */
        /* display: flex;
        justify-content: center;
        align-items: center; */
        top: calc(-100vh+50px);
    }
    .yoga-header-content-box.open {
        /* left: 0; */
        top: 50px;
        z-index: 2;
    }
    .yoga-header-content {
        width: 100vw;
        height: calc(100vh-50px);
        margin: auto;
        padding: 20px;
    }
    .yoga-header-content ul {
        text-align: center;
        list-style: none;
        padding: 0;
        margin-top: 10vh; 
    }
    .yoga-header-content li {
        margin: 25px 0;
        font-size: 22px;
        font-weight: bold;
        color: #AAAAAA; 
    }
    .yoga-header-btn-box {
        width: 110px;
        height: 35px;
        margin: 13vh auto 0;
    }
    .yoga-header-btn {
        width: 110px;
        height: 35px;
        border-style: none;
        color: #FFF;
        background-color: #99CBA5;
        border-radius: 5px; 
        font-size: 16px; 
        font-weight: 400;
    }
    .yoga-header-login-box {
        background: transparent;
        width: 120px;
        height: 35px;
        margin: 12vh auto 0;
    }
    .yoga-header-login-btn {
        width: 120px;
		height: 35px; 
		font-size: 16px;
        color: #8b8b8b;
        border-style: none;
        border: solid #A2A2A2 2px; 
        border-radius: 30px;
        background: transparent;
        box-shadow: 0 0px 5px rgba(0,0,0,0.2),0 0px 4px rgba(0,0,0,0.2) inset;
        font-weight: 400;
    }
    
}
</style>
