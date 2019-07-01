<template>
    <div class="about-page">
        <mamiyoga-login-header nextTo="/mamiyoga/menu"
        btnText="登出" bgColor="#9BAEB2" ftColor="#FFFFFF"></mamiyoga-login-header>
        <hooper>
            <slide class="about-teacher about-slide">
                <div class="about-title"><h3>教師介紹</h3></div>
                <div class="about-teacher-content">
                    <div>
                        <h3>桥本麻美</h3>
                        <h4>asami hashimoto</h4>
                    </div>
                    <p style="font-weight: bold; margin-bottom: 5px;">持有证照</p>
                    <p style="margin-bottom: 10px;">Yoga Aliance RYT200<br>
                        maternity yoga instructor<br>
                        aerial yoga instructor<br>
                        Body Care professional course
                    </p>
                    <p style="font-weight: bold; margin-bottom: 5px;">曾修习完毕相关课程</p>
                    <p>骨头导览指导者养成课程修习完毕</p>
                </div>
            </slide>
            <slide class="about-teacher about-slide">
                <div class="about-title"><h3>教师介绍</h3></div>
                <div class="about-teacher-content">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;随着这些年压力的累积，我的身体状况并不是很好，原本只是想要找到改善的方法，
                        所以花了不少力气寻寻觅觅。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;没想到，在经历过多次尝试后，让我有机会接触到了瑜珈。因此身体健康也渐渐获得改善
                        ，这促使了我变得更加专注练习，产生了良性循环还有更大的兴趣，不知不觉间，也获得
                        了执照认证与教学资格。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;我平时担任专业自由瑜珈的指导教练，一周至少固定开班20堂，不过往往会更超过这数字。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;除此之外，也担任过日本屈指顶尖舞蹈跟唱歌少女团体「E-girl」的贴身瑜珈指导哦！
                        而且我不但协助许许多多演艺圈人士的体态健康维护，也曾担任过名人的私人瑜珈课程指导。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;就算是在怀孕的时候，我也持续进行瑜珈教学，而且，我现在也还是个怀孕妈妈哦！
                        所以，我有特别设计产后恢复的相关课程。当然，也还有其他针对不一样烦恼需求的瑜珈课程
                        ，用来帮助不一样的你！<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;我最擅长的领域是治癒身体和心灵的放松瑜珈。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;在Instagram上也可看到我哦！目前追踪人数已经突破了两万！
                    </p>
                </div>
            </slide>
            <!-- <slide class="about-teacher about-for-mammy">
                <div class="about-title"><h3>給產後的女性</h3></div>
                <div class="about-teacher-content">
                    <p>給產後的女性：<br><br>
                    一般來說，女性要回復生產前的良好狀態，是需要十個月以上，這真的是段非常辛苦的日子。<br>
                    而且，產後也無暇休息，還要照顧寶寶們。這常會導致骨盤變得岌岌可危，有鬆脫現象，或者
                    子宮持續不斷出血。<br>
                    若是不顧自己的身體，總是把自己放在最後一位，又因為環境變化、家庭的壓力、甚至是缺乏
                    支持，就會衍生出很多後遺症。<br><br>
                    而這是我最不樂見的，希望媽媽們，能為了自己，也為了小寶寶，好好保養照顧。因此我設計
                    了一套program.即使是沒有辦法直接到瑜珈教室的媽媽們，或者是有著重重苦衷抽不開身的
                    人，都可以透過這套在家能自己實施的瑜珈動作練習，讓心情得到放鬆，身體得到休息。<br><br>
                    那怕只能盡到微薄的照料媽媽們的責任，我也願意認真設計，只要多那麼一位母親能夠因為這
                    堂課而有所幫助，變得有精神，變得很幸福，這樣就好了。<br><br>
                    因為媽媽們的幸福，就是小孩的幸福。<br>
                    而你們的幸福，也是我的願望。</p>

                </div>
            </slide>
            <slide class="about-teacher about-for-mammy">
                <div class="about-title"><h3>給廣大的女性族群</h3></div>
                <div class="about-teacher-content">
                    <p>給廣大的女性族群:<br><br>
                    有時候，女生們常常會壓力大到連自己都沒有發現。在每天每天的疲勞與壓力囤積中，不知不
                    覺習慣了，直到受不了時垮下去，已經為時已晚。<br>
                    所以，我希望能帶給大家一些瑜珈課程，讓女生朋友們也能每天都有煥然一新的重生感。<br><br>
                    瑜珈，能夠聯繫身體與心靈，並且給予我們自信。<br>
                    把瑜珈形容成讓每個人都能幸福活下去，變得更像自己喜歡模樣的香料，可一點都不為過哦！<br>
                    讓我們將生活撒入瑜珈這個香料吧！一起藉由瑜珈獲得平靜的心靈與自信的曼妙體態！<br><br>
                    我誠摯地推薦大家嘗試看看，有了瑜珈後，找尋到合適自己的生活方式！</p>
                </div>
            </slide> -->
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
import MamiyogaLoginHeader from '~/components/mamiyoga/MamiyogaLoginHeader.vue';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    layout:'mommiyoga',
    components: {
        MamiyogaLoginHeader,
        Hooper,
        Slide,
        HooperPagination,
    }
}
</script>

<style>

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
.about-teacher.about-slide .about-title {
    color: #97A8AF;
}
.about-teacher {
    background-color: white;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.about-teacher:first-child {
    background-image: url('/mamiyoga/about-back-1.png');
}
/* .about-teacher:nth-child(3) {
    background-image: url('/mamiyoga/about-back-2.png');
    background-position: 40%;
}
.about-teacher:last-child {
    background-image: url('/mamiyoga/about-back-3.png');
} */
.about-teacher-content {
    font-size: 12px;
    width: 80vw;
    height: auto;
    position: absolute;
    bottom: 10vh;
    color: #97A8AF;
}
.about-for-mammy .about-teacher-content {
    width: 90vw;
    padding: 5vw;
    color: #F7F7F7;
    /* background-color: rgba(0,0,0,.7); */
}
.about-teacher-content h3 {
    color: #97A8AF;
    font-size: 24px;
}
.about-teacher-content h4 {
    color: #97A8AF;
    font-size: 20px;
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
@media (min-width: 769px) {
    .about-page .hooper {
        width: 100%;
    }
    .about-teacher-content,
    .about-for-mammy .about-teacher-content {
        width: 80%;
    }
    .about-for-mammy .about-teacher-content {
        padding: 0;
    }
    
}
</style>
