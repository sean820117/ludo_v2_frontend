<template>
    <div class="mamiyoga-explain">
        <div class="mamiyoga-explain-close" @click="closeBox">
            <img src="/mamiyoga/close-box.svg" alt="">
        </div>
        <div class="mamiyoga-explain-content">
            <hooper>
                <slide>
                   <h5>正面拍摄</h5>
                   <img src="/mamiyoga/explain-1.svg" alt="">
                   <p>将您的身体『正面』面向手机，拍摄距离约2公尺，让全身入镜，这样AI助教才能精准分析成果。</p>
                </slide>
                <slide>
                    <h5>侧面拍摄</h5>
                    <img src="/mamiyoga/explain-2.svg" alt="">
                    <p>将您的身体『侧面』面向手机，拍摄距离约2公尺，让全身入镜，这样AI助教才能精准分析成果。</p>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
        </div>
        <div style="margin-top:8vh;">
            <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" btnText="影片教学" style="margin-bottom:5vh;"></mamiyoga-btn>
        </div>
    </div>
</template>

<script>
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    components: {
        Hooper,
        Slide,
        HooperPagination,
        MamiyogaBtn,
    },
    methods: {
        closeBox(){
            this.$emit('closeExplain')
        }
    }
}
</script>

<style>
@media (min-width: 769px) {
    .mamiyoga-explain {
        width: 450px;
        height: 100vh;
        background: #24798F;
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .mamiyoga-explain-close {
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .mamiyoga-explain-content {
        width: 100%;
        height: 80vh;
        margin: 0 auto;
        padding-top: 10vh;
    }
    .mamiyoga-explain-content h5 {
        text-align: center;
        color: #F7F7F7;
        font-size: 20px;
    }
    .mamiyoga-explain-content img {
        display: block;
        margin: 3vh auto;
        height: 45vh;
        width: 85%;
    }
    .mamiyoga-explain-content p {
        color: white;
        font-size: 14px;
        font-weight: bold;
        width: 80%;
        margin: 5vh auto 0;
    }
    .mamiyoga-explain .hooper {
        height: 75vh;
    }
    
    .mamiyoga-explain .hooper-indicator {
        width: 7px;
        height: 7px;
        background-color: rgba(255,255,255,.4); 
        margin: 0 4px; 
    }
    .mamiyoga-explain .hooper-indicator.is-active, 
    .mamiyoga-explain .hooper-indicator:hover {
        background-color:#fff; 
    }
}
@media (max-width: 768px) {
    .mamiyoga-explain {
        width: 100vw;
        height: 100vh;
        background: #24798F;
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .mamiyoga-explain-close {
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .mamiyoga-explain-content {
        width: 90vw;
        height: 80vh;
        margin: 0 auto;
        padding-top: 5vh;
    }
    .mamiyoga-explain-content h5 {
        text-align: center;
        color: #F7F7F7;
        font-size: 20px;
    }
    .mamiyoga-explain-content img {
        display: block;
        margin: 3vh auto;
        height: 45vh;
        width: 100%;
    }
    .mamiyoga-explain-content p {
        color: white;
        font-size: 14px;
        font-weight: bold;
        width: 66vw;
        margin: 5vh auto 0;
    }
    .mamiyoga-explain .hooper {
        height: 75vh;
    }
    .mamiyoga-explain .hooper-indicator {
        width: 7px;
        height: 7px;
        background-color: rgba(255,255,255,.4); 
        margin: 0 4px; 
    }
    .mamiyoga-explain .hooper-indicator.is-active, 
    .mamiyoga-explain .hooper-indicator:hover {
        background-color:#fff; 
    }
    .mamiyoga-explain .hooper-pagination {
        bottom: -5vh;
    }
}
</style>
