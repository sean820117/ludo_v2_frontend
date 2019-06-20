<template>
    <div class="asamiyoga-about-page">
        <mamiyoga-teach-header nextTo="/asamiyoga/menu" titleColor="white" 
        headerTitle="教师介绍" btnText="登出" bgColor="#9BAEB2" ftColor="#FFFFFF"
        class="asamiyoga-about-header">
        </mamiyoga-teach-header>
        <div class="asamiyoga-about-teacher">
            <hooper>
                <slide>
                    <div style="margin:10vh 0 5vh;">
                        <h3>桥本麻美</h3>
                        <h4>asami hashimoto</h4>
                    </div>
                    <p style="font-weight:bold;margin-bottom:5px;">持有证照</p>
                    <p style="margin-bottom:10px;">Yoga Aliance RYT200<br>maternity yoga instructor<br>
                    aerial yoga instructor<br>Body Care professional course</p>
                    <p style="font-weight:bold;margin-bottom:5px;">曾修习完毕相关课程</p>
                    <p>骨头导览指导者养成课程修习完毕</p>
                </slide>
                <slide>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;随着这些年压力的累积，我的身体状况并不是很好，
                        原本只是想要找到改善的方法，所以花了不少力气寻寻觅觅。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;没想到，在经历过多次尝试后，让我有机会接触到了瑜珈
                    。因此身体健康也渐渐获得改善，这促使了我变得更加专注练习，产生了良性循环还有更大的兴趣，不知不觉间，也获得
                    了执照认证与教学资格。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;我平时担任专业自由瑜珈的指导教练，一周至少固定开
                    班20堂，不过往往会更超过这数字。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;除此之外，也担任过日本屈指顶尖舞蹈跟唱歌少女团体
                    「E-girl」的贴身瑜珈指导哦！而且我不但协助许许多多演艺圈人士的体态健康维护，
                    也曾担任过名人的私人瑜珈课程指导。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;就算是在怀孕的时候，我也持续进行瑜珈教学，而且
                    ，我现在也还是个怀孕妈妈哦！所以，我有特别设计产后恢复的相关课程。当然，
                    也还有其他针对不一样烦恼需求的瑜珈课程，用来帮助不一样的你！<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;我最擅长的领域是治愈身体和心灵的放松瑜珈。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;在Instagram上也可看到我哦！目前追踪人数已经突破了两万！
                    </p>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
        </div>
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/asamiyoga/MamiyogaTeachHeader.vue';
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
    .asamiyoga-about-page {
        width: 100vw;
        height: 100vh;
        background-image: url('/asamiyoga/about-back-1.png');
        background-repeat: no-repeat;
        background-position: center;
    }
    .asamiyoga-about-header {
        position: absolute;
    }
    .asamiyoga-about-header h3 {
        font-size: 12px;
        padding-left: 25px;
    }
    .asamiyoga-about-teacher {
        display: flex;
        justify-content: center;
    }
    .asamiyoga-about-page .hooper {
        width: 80vw;
        height: auto;
        position: absolute;
        bottom: 10vh;
    }
    .asamiyoga-about-teacher h3 {
        font-size: 24px;
        color: #F8F8F8; 
    }
    .asamiyoga-about-teacher h4 {
        font-size: 20px;
        color: #F8F8F8;
    }
    .asamiyoga-about-teacher p {
        color: #F7F7F7;
        font-size: 12px;
    }
    .asamiyoga-about-page .hooper-pagination {
        bottom: -5vh;
    }
    .asamiyoga-about-page .hooper-indicator {
        width: 7px;
        height: 7px;
        background-color: rgba(255,255,255,.4); 
        margin: 0 4px; 
    }
    .asamiyoga-about-page .hooper-indicator.is-active, 
    .asamiyoga-about-page .hooper-indicator:hover {
        background-color:#fff; 
    }
}
</style>
