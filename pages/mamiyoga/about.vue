<template>
    <div class="about-page">
        <mamiyoga-teach-header nextTo="/mamiyoga/menu"
        btnText="登出" bgColor="#9BAEB2" ftColor="#FFFFFF"></mamiyoga-teach-header>
        <hooper>
            <slide class="about-teacher about-slide">
                <div class="about-title"><h3>教師介紹</h3></div>
            </slide>
            <slide class="about-teacher">
                <div class="about-title"><h3>教師介紹</h3></div>
            </slide>
            <slide class="about-teacher">
                <div class="about-title"><h3>給產後的女性</h3></div>
            </slide>
            <slide class="about-teacher">
                <div class="about-title"><h3>給廣大的女性族群</h3></div>
            </slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    components: {
        MamiyogaTeachHeader,
        Hooper,
        Slide,
        HooperPagination,
    }
}
</script>

<style>
@media (max-width:899px) {
    .about-page .mamiyoga-teach-header {
        position: absolute;
    }
    .about-title {
        color: #F7F7F7;
        font-size: 12px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* text-align: center; */
    }
    .about-teacher {
        background-image: url('/mamiyoga/about-back-1.png');
        
    }
    .about-teacher:nth-child(3) {
        background-image: url('/mamiyoga/about-back-2.png');
        background-position: 40%;
    }
    .about-page .hooper {
        width: 100vw;
        height: 100vh;
    }
    .about-page .hooper-pagination {
        bottom: 3vh;
    }
    .about-page .hooper-indicator {
        width: 7px;
        height: 7px;
        background-color: rgba(255,255,255,.4); 
        margin: 0 4px; 
    }
    .about-page .hooper-indicator.is-active, 
    .about-page .hooper-indicator:hover {
        background-color:#fff; 
    }
}
</style>
