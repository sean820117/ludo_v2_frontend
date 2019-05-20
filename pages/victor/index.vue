<template>
    <div style="height:100%">
        <input type="radio" id="checkseemore" style="position: fixed;"/>
        <div class="first-block">
            <!-- <img class="earphone" src="/resume/earphone.png" />
            <img class="earphone2" src="/resume/earphone2.png" /> -->
            <div class="cover-photo-container" :class="$mq"><img :style="{visibility: !show_second_block && $mq === 'desktop' ? 'visible':'visible'}" class="cover-photo"  src="/cover-victor.svg" /></div>
            <div class="slogan" :class="$mq" v-if="show_second_block">
                <div class="line1" :class="$mq" >
                    學習歷程全解析
                </div>
                <div class="line2" :class="$mq">
                    掌握必勝先機
                </div>
            </div>
            <label :class="$mq" class="seemore" for="checkseemore" @click="seeMore">
                瞭解更多
                <img :class="$mq" src="/Union 1.svg"/>
            </label>
        </div>
        <div class="scrolldown">
            <div class="seconds-block" :class="$mq" >
                <h3 class="title" :class="$mq">
                    升學「備審」將被「學習歷程」取代
                </h3>
                <h1 class="title" :class="$mq">您，準備好了嗎？<br></h1>
                <p class="content" :class="$mq">從今年九月起上高一生的新生<br>申請大學都需要準備「學習歷程」<br>除了考試外更有多元素養、跨校選修</p>
                <h2 class="title" :class="$mq">制度前所未有的複雜<br>讓學生家長都沒把握</h2>
            </div>
            <div class="four-block flex">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 296: (296 * 1.5)" :height="$mq === 'mobile' ? 80.174: 80.174 * 1.5" viewBox="0 0 296 80.174">
                    <g id="Group_142" data-name="Group 142" transform="translate(0 -4)">
                        <text id="學習歷程今年上路" transform="translate(148 43)" fill="#a42073" font-size="37" font-family="" font-weight="300"><tspan x="-148" y="0">學習歷程今年上路</tspan></text>
                        <text id="還沒高中的你都弄懂了嗎_" data-name="還沒高中的你都弄懂了嗎？" transform="translate(144.043 77.174)" fill="#a42073" font-size="20" font-family="" font-weight="600"><tspan x="-120" y="0">還沒高中的你都弄懂了嗎？</tspan></text>
                    </g>
                </svg>
                <div class="slide-show">
                    <!-- <img id="pre-img" src="/resume/nsleft.png">
                    <img id="next-img" src="/resume/nsleft.png"> -->
                    <div id="ss-container">
                        <img v-for="banner in banners" :key="banner.id" :class="$mq" :src="banner.url">
                    </div>
                </div>
                <svg style="margin-top:0px;" xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 200: 200 * 1.5" :height="$mq === 'mobile' ? 58: 58 * 1.5" viewBox="0 0 200 58">
                    <text id="全新規則是個挑戰_現在弄懂就能搶得先機" data-name="全新規則是個挑戰
                    現在弄懂就能搶得先機" transform="translate(100 21)" fill="#a42073" font-size="20" font-family="" font-weight="600"><tspan x="-80" y="0">全新規則是個挑戰</tspan><tspan y="0" font-family="" font-weight="700"></tspan><tspan x="-100" y="30">現在弄懂就能搶得先機</tspan></text>
                </svg>
            </div>
            
            <div class="seven-block" :class="$mq">
                <img src="/Group 581.jpg" style="width:100vw; max-width:811px;margin-bottom: -2px;" alt="">
            </div>
            <div class="slide-show" :class="$mq">
                <!-- <img id="pre-img" src="/resume/nsleft.png">
                <img id="next-img" src="/resume/nsleft.png"> -->
                <div id="ss-container2">
                    <img v-for="banner in banners2" :key="banner.id" :class="$mq" :src="banner.url">
                </div>
            </div>
            <div class="eight-block flex">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 252: (252 * 1.5)" :height="$mq === 'mobile' ? 59: (59 * 1.5)" viewBox="0 0 252 59">
                    <text id="錄播課程章節" transform="translate(126 45)" fill="#a42c67" font-size="42" font-family="" font-weight="600"><tspan x="-126" y="0">錄播課程章節</tspan></text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 152: (152 * 1.5)" :height="$mq === 'mobile' ? 62: (62 * 1.5)" viewBox="0 0 152 62">
                    <text id="_8堂課程_60分鐘_掌握未來60年" data-name="8堂課程   60分鐘
                    掌握未來60年" transform="translate(76 21)" fill="#707070" font-size="20" font-family="" font-weight="300"><tspan x="-75.02" y="0">8</tspan><tspan y="0" font-family="">堂課程</tspan><tspan y="0" xml:space="preserve">   60</tspan><tspan y="0" font-family="">分鐘</tspan><tspan y="0"></tspan><tspan font-family=""><tspan x="-61.12" y="34">掌握未來</tspan><tspan y="34" font-family="">60</tspan><tspan y="34">年</tspan></tspan></text>
                </svg>
                <svg v-if="$mq === 'mobile'" xmlns="http://www.w3.org/2000/svg" width="211" height="276" viewBox="0 0 211 276">
                    <text id="_01._學習歷程全解析_02._高中生涯如何規劃_03._全新課程題目差異_04._升高一暑假如何規劃_05._高一如何探索方向_06._高二如何累積課外經驗_07._高三如何準備考試_08._考完後選科系分析_" data-name="
                    01. 學習歷程全解析

                    02. 高中生涯如何規劃

                    03. 全新課程題目差異

                    04. 升高一暑假如何規劃

                    05. 高一如何探索方向

                    06. 高二如何累積課外經驗

                    07. 高三如何準備考試

                    08. 考完後選科系分析
                    " transform="translate(0 14)" fill="#a42c67" font-size="18" font-family="" font-weight="700"><tspan x="0" y="0"></tspan><tspan x="0" y="16">01. </tspan><tspan y="16" font-family="" font-weight="600">學習歷程全解析</tspan><tspan y="16"></tspan><tspan x="0" y="32"></tspan><tspan x="0" y="48">02. </tspan><tspan y="48" font-family="" font-weight="600">高中生涯如何規劃</tspan><tspan y="48"></tspan><tspan x="0" y="64"></tspan><tspan x="0" y="80">03. </tspan><tspan y="80" font-family="" font-weight="600">全新課程題目差異</tspan><tspan y="80"></tspan><tspan x="0" y="96"></tspan><tspan x="0" y="112">04. </tspan><tspan y="112" font-family="" font-weight="600">升高一暑假如何規劃</tspan><tspan y="112"></tspan><tspan x="0" y="128"></tspan><tspan x="0" y="144">05. </tspan><tspan y="144" font-family="" font-weight="600">高一如何探索方向</tspan><tspan y="144"></tspan><tspan x="0" y="160"></tspan><tspan x="0" y="176">06. </tspan><tspan y="176" font-family="" font-weight="600">高二如何累積課外經驗</tspan><tspan y="176"></tspan><tspan x="0" y="192"></tspan><tspan x="0" y="208">07. </tspan><tspan y="208" font-family="" font-weight="600">高三如何準備考試</tspan><tspan y="208"></tspan><tspan x="0" y="224"></tspan><tspan x="0" y="240">08. </tspan><tspan y="240" font-family="" font-weight="600">考完後選科系分析</tspan><tspan y="240"></tspan><tspan font-family=""><tspan x="0" y="256"></tspan></tspan></text>
                </svg>
                <svg v-if="$mq === 'desktop'" xmlns="http://www.w3.org/2000/svg" width="882.919" height="264" viewBox="0 0 882.919 264">
                    <g id="Group_589" data-name="Group 589" transform="translate(-538 -454.557)">
                        <text id="_01._學習歷程全解析_02._高中生涯如何規劃_03._全新課程題目差異_04._升高一暑假如何規劃" data-name="01. 學習歷程全解析

                    02. 高中生涯如何規劃

                    03. 全新課程題目差異

                    04. 升高一暑假如何規劃" transform="translate(538 490.557)" fill="#a42c67" font-size="34" font-family="" font-weight="700"><tspan x="0" y="0">01. </tspan><tspan y="0" font-family="" font-weight="600">學習歷程全解析</tspan><tspan y="0"></tspan><tspan x="0" y="36"></tspan><tspan x="0" y="72">02. </tspan><tspan y="72" font-family="" font-weight="600">高中生涯如何規劃</tspan><tspan y="72"></tspan><tspan x="0" y="108"></tspan><tspan x="0" y="144">03. </tspan><tspan y="144" font-family="" font-weight="600">全新課程題目差異</tspan><tspan y="144"></tspan><tspan x="0" y="180"></tspan><tspan x="0" y="216">04. </tspan><tspan y="216" font-family="" font-weight="600">升高一暑假如何規劃</tspan></text>
                        <text id="_05._高一如何探索方向_06._高二如何累積課外經驗_07._高三如何準備考試_08._考完後選科系分析" data-name="05. 高一如何探索方向

                    06. 高二如何累積課外經驗

                    07. 高三如何準備考試

                    08. 考完後選科系分析" transform="translate(1023.92 490.557)" fill="#a42c67" font-size="34" font-family="" font-weight="700"><tspan x="0" y="0">05. </tspan><tspan y="0" font-family="" font-weight="600">高一如何探索方向</tspan><tspan y="0"></tspan><tspan x="0" y="36"></tspan><tspan x="0" y="72">06. </tspan><tspan y="72" font-family="" font-weight="600">高二如何累積課外經驗</tspan><tspan y="72"></tspan><tspan x="0" y="108"></tspan><tspan x="0" y="144">07. </tspan><tspan y="144" font-family="" font-weight="600">高三如何準備考試</tspan><tspan y="144"></tspan><tspan x="0" y="180"></tspan><tspan x="0" y="216">08. </tspan><tspan y="216" font-family="" font-weight="600">考完後選科系分析</tspan></text>
                    </g>
                </svg>
            </div>
            <div class="nineth-block">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 325: (325 * 1.5)" :height="$mq === 'mobile' ? 139: (139 * 1.5)" viewBox="0 0 325 139">
                    <g id="Group_180" data-name="Group 180" transform="translate(-30 -2128)">
                        <text id="前1000人註冊藍天予教學網會員_即可免費觀看_全部_學習歷程錄播課" data-name="前1000人註冊藍天予教學網會員
                    即可免費觀看&quot;全部&quot;學習歷程錄播課" transform="translate(188 2149)" fill="#707070" font-size="20" font-family=""><tspan x="-142.246" y="0">前</tspan><tspan y="0" font-family="">1000</tspan><tspan y="0">人註冊藍天予教學網會員</tspan><tspan y="0" font-family=""></tspan><tspan x="-157.1" y="30">即可免費觀看</tspan><tspan y="30" font-family="">&quot;</tspan><tspan y="30">全部</tspan><tspan y="30" font-family="">&quot;</tspan><tspan y="30">學習歷程錄播課</tspan></text>
                        <g id="Group_179" data-name="Group 179">
                        <text id="再送實體1v1顧問諮詢_會考落點分析" data-name="再送實體1v1顧問諮詢+會考落點分析" transform="translate(193 2260)" fill="#707070" font-size="20" font-family=""><tspan x="-161.963" y="0">再送實體</tspan><tspan y="0" font-family="">1v1</tspan><tspan y="0">顧問諮詢</tspan><tspan y="0" font-family="">+</tspan><tspan y="0">會考落點分析</tspan></text>
                        <text id="目前已經有679人完成課程" transform="translate(188 2221)" fill="#707070" font-size="16" font-family=""><tspan x="-93.348" y="0">目前已經有</tspan><tspan y="0" font-family="">679</tspan><tspan y="0">人完成課程</tspan></text>
                        <line id="Line_8" data-name="Line 8" x2="57" transform="translate(30.5 2214.5)" fill="none" stroke="#707070" stroke-width="1"/>
                        <line id="Line_9" data-name="Line 9" x2="57" transform="translate(288.5 2214.5)" fill="none" stroke="#707070" stroke-width="1"/>
                        </g>
                    </g>
                </svg>
                <router-link to="/victor/signup">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="$mq === 'mobile' ? 240: (240 * 1.5)" :height="$mq === 'mobile' ? 60: (60 * 1.5)" viewBox="0 0 240 60">
                        <defs>
                            <filter id="Rectangle_179" x="0" y="0" width="240" height="60" filterUnits="userSpaceOnUse">
                            <feOffset dy="8" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="4" result="blur"/>
                            <feFlood flood-opacity="0.239"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <g id="Group_608" data-name="Group 608" transform="translate(-196 -353)">
                            <g transform="matrix(1, 0, 0, 1, 196, 353)" filter="url(#Rectangle_179)">
                            <rect id="Rectangle_179-2" data-name="Rectangle 179" width="216" height="36" rx="2" transform="translate(12 4)" fill="#9d1b5b"/>
                            </g>
                            <text id="Pressed" transform="translate(316 382)" fill="#fff" font-size="20" font-family=""><tspan x="-40" y="0">免費註冊</tspan></text>
                        </g>
                    </svg>
                </router-link>
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 200: (200 * 1.5)" :height="$mq === 'mobile' ? 58: (58 * 1.5)" viewBox="0 0 200 58">
                    <text id="加入_Facebook_社團_搶先收看最新解題直播" data-name="加入 Facebook 社團
                    搶先收看最新解題直播" transform="translate(100 21)" fill="#707070" font-size="20" font-family=""><tspan x="-89.473" y="0">加入</tspan><tspan y="0" xml:space="preserve" font-family=""> Facebook </tspan><tspan y="0">社團</tspan><tspan y="0" font-family=""></tspan><tspan x="-100" y="30">搶先收看最新解題直播</tspan></text>
                </svg>
                <a href="https://www.facebook.com/groups/350744379127084/">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="$mq === 'mobile' ? 240: (240 * 1.5)" :height="$mq === 'mobile' ? 60: (60 * 1.5)" viewBox="0 0 240 60">
                        <defs>
                            <filter id="Rectangle_179" x="0" y="0" width="240" height="60" filterUnits="userSpaceOnUse">
                            <feOffset dy="8" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="4" result="blur"/>
                            <feFlood flood-opacity="0.239"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <g id="Group_609" data-name="Group 609" transform="translate(-196 -353)">
                            <g transform="matrix(1, 0, 0, 1, 196, 353)" filter="url(#Rectangle_179)">
                            <g id="Rectangle_179-2" data-name="Rectangle 179" transform="translate(12 4)" fill="#fff" stroke="#a42073" stroke-width="2">
                                <rect width="216" height="36" rx="2" stroke="none"/>
                                <rect x="1" y="1" width="214" height="34" rx="1" fill="none"/>
                            </g>
                            </g>
                            <text id="Pressed" transform="translate(316 383)" fill="#a42073" font-size="20" font-family=""><tspan x="-40" y="0">加入社團</tspan></text>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="eight-block flex">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 128: (128 * 1.5)" :height="$mq === 'mobile' ? 45: (45 * 1.5)" viewBox="0 0 128 45">
                    <text id="常見問題" transform="translate(0 34)" fill="#a42073" font-size="32" font-family="" font-weight="600"><tspan x="0" y="0">常見問題</tspan></text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 267: (267 * 1.5)" :height="$mq === 'mobile' ? 46: (46 * 1.5)" viewBox="0 0 267 46">
                    <text id="Q_註冊後可以觀看幾次_A_無限次觀看無限次觀看無限次觀看" data-name="Q：註冊後可以觀看幾次？
                    A：無限次觀看無限次觀看無限次觀看" transform="translate(0 17)" fill="#707070" font-size="16" font-family=""><tspan x="0" y="0">Q</tspan><tspan y="0" font-family="">：註冊後可以觀看幾次？</tspan><tspan y="0"></tspan><tspan x="0" y="24">A</tspan><tspan y="24" font-family="">：無限次觀看無限次觀看無限次觀看</tspan></text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 251: (251 * 1.5)" :height="$mq === 'mobile' ? 70: (70 * 1.5)" viewBox="0 0 251 70">
                    <text id="Q_為什麼願意提供免費課程_A_不希望有學生因為不懂升學規則_而成為台灣教育實驗的犧牲品" data-name="Q：為什麼願意提供免費課程
                    A：不希望有學生因為不懂升學規則
                    而成為台灣教育實驗的犧牲品" transform="translate(0 17)" fill="#707070" font-size="16" font-family=""><tspan x="0" y="0">Q</tspan><tspan y="0" font-family="">：為什麼願意提供免費課程</tspan><tspan y="0"></tspan><tspan x="0" y="24">A</tspan><tspan y="24" font-family="">：不希望有學生因為不懂升學規則</tspan><tspan y="24"></tspan><tspan font-family=""><tspan x="0" y="48">而成為台灣教育實驗的犧牲品</tspan></tspan></text>
                </svg>

            </div>
            <div class="contact-us-block">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 152: (152 * 1.5)" :height="$mq === 'mobile' ? 53: (53 * 1.5)" viewBox="0 0 152 53">
                    <text id="聯絡我們" transform="translate(76 40)" fill="#fff" font-size="38" font-family="" font-weight="600"><tspan x="-76" y="0">聯絡我們</tspan></text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 142: (142 * 1.5)" :height="$mq === 'mobile' ? 96: (96 * 1.5)" viewBox="0 0 142 96.096">
                    <g id="Group_610" data-name="Group 610" transform="translate(-117 -2993.308)">
                        <text id="電話_02_2314-5818" data-name="電話
                    (02) 2314-5818" transform="translate(188 3005.308)" fill="#fff" font-size="11" font-family="" font-weight="600"><tspan x="-11" y="0">電話</tspan><tspan y="0" font-family="" font-weight="700"></tspan><tspan font-family="" font-weight="700"><tspan x="-37.611" y="20">(02) 2314-5818</tspan></tspan></text>
                        <text id="郵箱_endingcourt99_gmail.com" data-name="郵箱
                    endingcourt99@gmail.com" transform="translate(188 3066.404)" fill="#fff" font-size="11" font-family="" font-weight="600"><tspan x="-11" y="0">郵箱</tspan><tspan y="0" font-family="" font-weight="700"></tspan><tspan font-family="" font-weight="700"><tspan x="-70.458" y="20">endingcourt99@gmail.com</tspan></tspan></text>
                    </g>
                </svg>
                <img :src="is_ui_config_loaded ? ui_config.logo : ''" alt="logo">
            </div>
            <footer class="paynow" style="background:#A42073;">
                <router-link v-if="!is_login" to="/victor/signup">免費註冊</router-link>
                <router-link v-else to="/victor/course">開始上課</router-link>
            </footer>
        </div>
    </div>
</template>
<script>
import Titlebar from "~/components/resume/Titlebar"
import VueMq from 'vue-mq'
import Vue from 'vue'

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 600,
    desktop: Infinity,
  }
});

export default {
    layout:'victor',
    head () {
        return {
            script: [
                { src: "/resume/index.js"},
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
                { src: 'https://player.vimeo.com/api/player.js' }        
            ],
            link: [
                { rel: 'stylesheet', href: '/resume/index.css' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500' }
            ],
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1.0"},
                { charset: "UTF-8"},
                { hid: 'description', name: 'description', content: '' },
                { property : 'og:title' , content:""},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://www.ludonow.com/victor"},
                { property : 'og:image' , content:""},
                { property : 'og:description' , content:""},
                { property : 'og:site_name' , content:"www.ludonow.com"},
            ],
            title: '學習歷程',
        } 
    },
    components: {
        Titlebar,
    },
    data() {
        return {
            is_ui_config_loaded:false,
            is_login:true,
            ui_config: Object,
            show_second_block: true,
            swiperOption: {
                loop:true,
                effect : 'fade',
                speed: 500,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
            },
            banners: [
                {
                    url:'/victor-LP-1.png',
                    key:0
                },
                {
                    url:'/victor-LP-2.png',
                    key:1
                },
                {
                    url:'/victor-LP-3.png',
                    key:2
                },
                {
                    url:'/victor-LP-4.png',
                    key:3
                },
                {
                    url:'/victor-LP-5.png',
                    key:4
                },
                {
                    url:'/victor-LP-6.png',
                    key:5
                },
                {
                    url:'/victor-LP-7.png',
                    key:6
                },
                {
                    url:'/victor-LP-8.png',
                    key:7
                },
                {
                    url:'/victor-LP-9.png',
                    key:8
                },
            ],
            banners2: [
                {
                    url:'/victor-LP-4.svg',
                    key:0
                },
                {
                    url:'/victor-LP-5.svg',
                    key:1
                },
                {
                    url:'/victor-LP-6.svg',
                    key:2
                },
            ],
        }   
    },
    mounted: async function() {
        if (process.client) {
            this.ui_config = await require('~/config/victor-config')
            this.is_ui_config_loaded = true;
            this.is_login = await this.$checkLogin(this.$store);
            // this.$refs.mySwiper1.swiper.autoplay.start();
        }
    },
    methods: {
        seeMore() {
            this.show_second_block = false;
        },
    }
}
</script>

<style lang="postcss">
.cover-photo {
    width: 100vw;
    margin-top: 55px;
    /* position: absolute; */
    max-width:720px;
    margin-bottom: -4px;
}
.cover-photo-container {
    width:100vw;
    background:url('/bg-cover-victor.png');
    background-size: 100% 100%;
    text-align:center;
}
#checkseemore:checked ~ .first-block {
    height:unset !important;
}
.line1 {
    line-height: 1.4em;
    &.desktop { font-size:50px; width:100vw; text-align:center;}
}
.line2 {
    &.desktop { font-size:60px; width:100vw; text-align:center;}
}
.first-block {
    background: #A42073 !important;
}
.slogan {
    top: 48vh !important;
    &.desktop { width:100vw; left:0; position:unset !important; margin-top:20px}
}
.seemore {
    top: 80vh !important;
    cursor: pointer;
    &.desktop { 
        font-size:33px;
        width:100vw;
        display:flex;
        flex-direction:column;
        align-items: center;
        position:static;
        margin-bottom:100px;
        top:0;
        left:0;
    }
}
.seemore img {
    width:37px;
    &.desktop { width:50px; margin-top:20px;}
}
.seconds-block {
    margin-top:10px !important;
    &.desktop { margin-top:100px !important;margin-bottom: 150px;}
}
.third-block {
    margin-top: 0 !important;
}
.seven-block {
    width:100vw;
    background:url('/bg-cover-victor.png') !important;
    background-size: 100% 100% !important;
    text-align:center;
    padding-bottom: 0px !important;
    &.desktop {padding-bottom: 0px;}
}
.sevenblock-1 {
    font-weight: bold !important;
}
.main-color {
    color: #A42073;
}
.title {
    margin: 10px 10vw 10px 0;
    font-weight: unset !important;
    width:100vw;
    text-align: center;
    color: black;
    &.desktop {
        color: black;
        margin: 0px 10vw 50px 0;
    }
}
h1.title {
    font-size: 36px;
    &.desktop {
        color: black;
        font-size: 90px;
        line-height:1.2em;
    }
}
h3.title {
    font-size: 17px;
    &.desktop {
        color: black;
        font-size: 42px;
        line-height:1.2em;
    }
}
h2.title {
    font-size: 26px;
    &.desktop {
        color: black;
        font-size: 64px;
        line-height:1.5em;
    }
}
p.content {
    width: 80vw;
    margin-left: 10vw;
    font-size: 18px;
    color: black;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 100;
    &.desktop {
        line-height:1.5em;
        font-size: 45px;
        margin-bottom: 100px;
        margin-top: 200px;
    }
}
.four-block {
    background: #F5F5F5;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    height: fit-content !important;
}
.eight-block {
    padding:10px 0 30px 0;
    margin:0px;
    background: #F5F5F5 !important;
    flex-direction: column;
    align-items: center;
}
.eight-block svg{
    margin:10px 0 30px 0;
}
.nineth-block {
    padding:10px 0 30px 0;
    margin:0px;
    background: white;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
}
.nineth-block svg{
    margin:10px 0 30px 0;
}
.flex {
    display: flex;
    justify-content: center;
}
.slide-show img {
    width: 100vw !important;
    &.desktop {
        width:500px !important;
        height: ;
    }
}

.slide-show{
    &.desktop {
        height: 300px !important;
        display: flex;
        justify-content: center;
    }
}

.contact-us-block {
    padding:10px 0 80px 0;
    background: #535353;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
}
.contact-us-block svg{
    margin:10px 0 30px 0;
}
.swiper {
    /* height: 300px; */
    width: 100vw;
    max-width: 400px;
}
.swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
}
.swiper-slide img {
    width:90%;
}
.swiper-pagination {
    /* width:100vw; */
}
.swiper-button-prev {
    color: white;
}
.swiper-button-next {
    color: white;
}
</style>
