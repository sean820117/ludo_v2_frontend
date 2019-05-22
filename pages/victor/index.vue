<template>
    <div :style="{height: show_second_block ? '100%' : ''}">
        <input type="radio" id="checkseemore" style="position: fixed;"/>
        <div class="first-block">
            <div class="cover-photo-container" :class="$mq">
                <h3 class="title" :class="$mq" v-if="!show_second_block && $mq === 'desktop'">升學「備審」將被「學習歷程」取代</h3>
                <h1 class="title" :class="$mq" v-if="!show_second_block && $mq === 'desktop'">您，準備好了嗎？</h1>
                <img :style="{visibility: !show_second_block && $mq === 'desktop' ? 'hidden':''}" class="cover-photo"  src="/cover-victor.svg" /></div>
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
            <div class="seconds-block" :class="$mq">
                <h3 class="title" :class="$mq" v-if="$mq === 'mobile'">
                    升學「備審」將被「學習歷程」取代
                </h3>
                <h1 class="title" :class="$mq" v-if="$mq === 'mobile'">您，準備好了嗎？<br></h1>
                <p class="content" :class="$mq">從今年九月起上高一生的新生<br>申請大學都需要準備「學習歷程」<br>除了考試外更有多元素養、跨校選修</p>
                <h2 class="title" :class="$mq">制度前所未有的複雜<br>讓學生家長都沒把握</h2>
            </div>
            <div class="four-block flex">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 296: (296 * 1)" :height="$mq === 'mobile' ? 80.174: 80.174 * 1" viewBox="0 0 296 80.174">
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
                <svg style="margin-top:0px;" xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 200: 200 * 1" :height="$mq === 'mobile' ? 58: 58 * 1" viewBox="0 0 200 58">
                    <text id="全新規則是個挑戰_現在弄懂就能搶得先機" data-name="全新規則是個挑戰
                    現在弄懂就能搶得先機" transform="translate(100 21)" fill="#a42073" font-size="20" font-family="" font-weight="600"><tspan x="-80" y="0">全新規則是個挑戰</tspan><tspan y="0" font-family="" font-weight="700"></tspan><tspan x="-100" y="30">現在弄懂就能搶得先機</tspan></text>
                </svg>
            </div>
            
            <div class="seven-block" :class="$mq">
                <img src="/Group 581.jpg" style="width:100vw; max-width:600px;margin-bottom: -3px;" alt="">
            </div>
            <div class="slide-show" :class="$mq">
                <!-- <img id="pre-img" src="/resume/nsleft.png">
                <img id="next-img" src="/resume/nsleft.png"> -->
                <div id="ss-container2">
                    <img v-for="banner in banners2" :key="banner.id" :class="$mq" :src="banner.url">
                </div>
            </div>
            <div class="eight-block flex">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 252: (252 * 1)" :height="$mq === 'mobile' ? 59: (59 * 1)" viewBox="0 0 252 59">
                    <text id="錄播課程章節" transform="translate(126 45)" fill="#a42c67" font-size="42" font-family="" font-weight="600"><tspan x="-126" y="0">錄播課程章節</tspan></text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 152: (152 * 1)" :height="$mq === 'mobile' ? 62: (62 * 1)" viewBox="0 0 152 62">
                    <text id="_8堂課程_60分鐘_掌握未來60年" data-name="8堂課程   60分鐘
                    掌握未來60年" transform="translate(76 21)" fill="#707070" font-size="20" font-family="" font-weight="300"><tspan x="-75.02" y="0">8</tspan><tspan y="0" font-family="">堂課程</tspan><tspan y="0" xml:space="preserve">   60</tspan><tspan y="0" font-family="">分鐘</tspan><tspan y="0"></tspan><tspan font-family=""><tspan x="-61.12" y="34">掌握未來</tspan><tspan y="34" font-family="">60</tspan><tspan y="34">年</tspan></tspan></text>
                </svg>
                <svg v-if="$mq === 'mobile'" xmlns="http://www.w3.org/2000/svg" width="211" height="276" viewBox="0 0 211 276">
                    <text id="_01._學習歷程全解析_02._會考制度介紹_03._國高中志向確立_04._特色課程解說_05._高中轉類組影響_06._大學學群分類與職涯關係_07._校系課程地圖說明_08._升學制度變化與應對教戰_" data-name="
                    01. 學習歷程全解析

                    02. 會考制度介紹

                    03. 國高中志向確立

                    04. 特色課程解說

                    05. 高中轉類組影響

                    06. 大學學群分類與職涯關係

                    07. 校系課程地圖說明

                    08. 升學制度變化與應對教戰
                    " transform="translate(0 14)" fill="#a42c67" font-size="18" font-family="" font-weight="700"><tspan x="0" y="0"></tspan><tspan x="0" y="16">01. </tspan><tspan y="16" font-family="" font-weight="600">學習歷程全解析</tspan><tspan y="16"></tspan><tspan x="0" y="32"></tspan><tspan x="0" y="48">02. </tspan><tspan y="48" font-family="" font-weight="600">會考制度介紹</tspan><tspan y="48"></tspan><tspan x="0" y="64"></tspan><tspan x="0" y="80">03. </tspan><tspan y="80" font-family="" font-weight="600">國高中志向確立</tspan><tspan y="80"></tspan><tspan x="0" y="96"></tspan><tspan x="0" y="112">04. </tspan><tspan y="112" font-family="" font-weight="600">特色課程解說</tspan><tspan y="112"></tspan><tspan x="0" y="128"></tspan><tspan x="0" y="144">05. </tspan><tspan y="144" font-family="" font-weight="600">高中轉類組影響</tspan><tspan y="144"></tspan><tspan x="0" y="160"></tspan><tspan x="0" y="176">06. </tspan><tspan y="176" font-family="" font-weight="600">大學學群分類與職涯關係</tspan><tspan y="176"></tspan><tspan x="0" y="192"></tspan><tspan x="0" y="208">07. </tspan><tspan y="208" font-family="" font-weight="600">校系課程地圖說明</tspan><tspan y="208"></tspan><tspan x="0" y="224"></tspan><tspan x="0" y="240">08. </tspan><tspan y="240" font-family="" font-weight="600">升學制度變化與應對教戰</tspan><tspan y="240"></tspan><tspan font-family=""><tspan x="0" y="256"></tspan></tspan></text>
                </svg>
                <svg v-if="$mq === 'desktop'" xmlns="http://www.w3.org/2000/svg" width="882.919" height="264" viewBox="0 0 882.919 264">
                    <g id="Group_589" data-name="Group 589" transform="translate(-538 -454.557)">
                        <text id="_01._學習歷程全解析_02._會考制度介紹_03._國高中志向確立_04._特色課程解說" data-name="01. 學習歷程全解析

                    02. 會考制度介紹

                    03. 國高中志向確立

                    04. 特色課程解說" transform="translate(538 490.557)" fill="#a42c67" font-size="34" font-family="" font-weight="700"><tspan x="0" y="0">01. </tspan><tspan y="0" font-family="" font-weight="600">學習歷程全解析</tspan><tspan y="0"></tspan><tspan x="0" y="36"></tspan><tspan x="0" y="72">02. </tspan><tspan y="72" font-family="" font-weight="600">會考制度介紹</tspan><tspan y="72"></tspan><tspan x="0" y="108"></tspan><tspan x="0" y="144">03. </tspan><tspan y="144" font-family="" font-weight="600">國高中志向確立</tspan><tspan y="144"></tspan><tspan x="0" y="180"></tspan><tspan x="0" y="216">04. </tspan><tspan y="216" font-family="" font-weight="600">特色課程解說</tspan></text>
                        <text id="_05._高中轉類組影響_06._大學學群分類與職涯關係_07._校系課程地圖說明_08._升學制度變化與應對教戰" data-name="05. 高中轉類組影響

                    06. 大學學群分類與職涯關係

                    07. 校系課程地圖說明

                    08. 升學制度變化與應對教戰" transform="translate(1023.92 490.557)" fill="#a42c67" font-size="34" font-family="" font-weight="700"><tspan x="0" y="0">05. </tspan><tspan y="0" font-family="" font-weight="600">高中轉類組影響</tspan><tspan y="0"></tspan><tspan x="0" y="36"></tspan><tspan x="0" y="72">06. </tspan><tspan y="72" font-family="" font-weight="600">大學學群分類與職涯關係</tspan><tspan y="72"></tspan><tspan x="0" y="108"></tspan><tspan x="0" y="144">07. </tspan><tspan y="144" font-family="" font-weight="600">校系課程地圖說明</tspan><tspan y="144"></tspan><tspan x="0" y="180"></tspan><tspan x="0" y="216">08. </tspan><tspan y="216" font-family="" font-weight="600">升學制度變化與應對教戰</tspan></text>
                    </g>
                </svg>
            </div>
            <div class="nineth-block" :class="$mq" v-if="$mq === 'mobile'">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 325: (325 * 1)" :height="$mq === 'mobile' ? 139: (139 * 1)" viewBox="0 0 325 139">
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
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="$mq === 'mobile' ? 240: (240 * 1)" :height="$mq === 'mobile' ? 60: (60 * 1)" viewBox="0 0 240 60">
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
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 200: (200 * 1)" :height="$mq === 'mobile' ? 58: (58 * 1)" viewBox="0 0 200 58">
                    <text id="加入_Facebook_社團_搶先收看最新解題直播" data-name="加入 Facebook 社團
                    搶先收看最新解題直播" transform="translate(100 21)" fill="#707070" font-size="20" font-family=""><tspan x="-89.473" y="0">加入</tspan><tspan y="0" xml:space="preserve" font-family=""> Facebook </tspan><tspan y="0">社團</tspan><tspan y="0" font-family=""></tspan><tspan x="-100" y="30">搶先收看最新解題直播</tspan></text>
                </svg>
                <a href="https://www.facebook.com/groups/350744379127084/">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="$mq === 'mobile' ? 240: (240 * 1)" :height="$mq === 'mobile' ? 60: (60 * 1)" viewBox="0 0 240 60">
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
            <div class="nineth-block" :class="$mq" v-else>
                <svg xmlns="http://www.w3.org/2000/svg" :width="1360.072 * 0.5" :height="258.435 * 0.5" viewBox="0 0 1360.072 258.435">
                    <text id="前1000人註冊藍天予教學網會員_即可免費觀看_全部_學習歷程錄播課" data-name="前1000人註冊藍天予教學網會員
                    即可免費觀看&quot;全部&quot;學習歷程錄播課" transform="translate(680.261 35)" fill="#707070" font-size="33" font-family=""><tspan x="-234.706" y="0">前</tspan><tspan y="0" font-family="">1000</tspan><tspan y="0">人註冊藍天予教學網會員</tspan><tspan y="0" font-family=""></tspan><tspan x="-259.214" y="50">即可免費觀看</tspan><tspan y="50" font-family="">&quot;</tspan><tspan y="50">全部</tspan><tspan y="50" font-family="">&quot;</tspan><tspan y="50">學習歷程錄播課</tspan></text>
                    <g id="Group_599" data-name="Group 599" transform="translate(0 170.435)">
                        <text id="目前已經有679人完成課程" transform="translate(691.711 67)" fill="#707070" font-size="62" font-family=""><tspan x="-361.722" y="0">目前已經有</tspan><tspan y="0" font-family="">679</tspan><tspan y="0">人完成課程</tspan></text>
                        <line id="Line_8" data-name="Line 8" x2="246.108" transform="translate(0 45.335)" fill="none" stroke="#707070" stroke-width="1"/>
                        <line id="Line_9" data-name="Line 9" x2="246.108" transform="translate(1113.964 45.335)" fill="none" stroke="#707070" stroke-width="1"/>
                    </g>
                </svg>
                <div class="two-options">
                    <div class="single-option">
                        <svg xmlns="http://www.w3.org/2000/svg" width="183" height="55" viewBox="0 0 366 110">
                            <text id="再送實體1v1顧問諮詢_會考落點分析" data-name="再送實體1v1顧問諮詢
                        +會考落點分析" transform="translate(183 40)" fill="#707070" font-size="38" font-family=""><tspan x="-182.634" y="0">再送實體</tspan><tspan y="0" font-family="">1v1</tspan><tspan y="0">顧問諮詢</tspan><tspan y="0" font-family=""></tspan><tspan font-family=""><tspan x="-125.096" y="57">+</tspan><tspan y="57" font-family="">會考落點分析</tspan></tspan></text>
                        </svg>
                        <router-link to="/victor/signup">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="$mq === 'mobile' ? 240: (240 * 1)" :height="$mq === 'mobile' ? 60: (60 * 1)" viewBox="0 0 240 60">
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
                    </div>
                    <div class="single-option">
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="55" viewBox="0 0 380 110">
                            <text id="加入_Facebook_社團_搶先收看最新解題直播" data-name="加入 Facebook 社團
                            搶先收看最新解題直播" transform="translate(190 40)" fill="#707070" font-size="38" font-family=""><tspan x="-169.998" y="0">加入</tspan><tspan y="0" xml:space="preserve" font-family=""> Facebook </tspan><tspan y="0">社團</tspan><tspan y="0" font-family=""></tspan><tspan x="-190" y="57">搶先收看最新解題直播</tspan></text>
                        </svg>
                        <a @click.prevent="goFBGroup('https://www.facebook.com/groups/350744379127084/')">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="$mq === 'mobile' ? 240: (240 * 1)" :height="$mq === 'mobile' ? 60: (60 * 1)" viewBox="0 0 240 60">
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
                </div>
            </div>
            <div class="eight-block flex" :class="$mq">
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 128: (128 * 1)" :height="$mq === 'mobile' ? 45: (45 * 1)" viewBox="0 0 128 45">
                    <text id="常見問題" transform="translate(0 34)" fill="#a42073" font-size="32" font-family="" font-weight="600"><tspan x="0" y="0">常見問題</tspan></text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 267: (267 * 1)" :height="$mq === 'mobile' ? 46: (46 * 1)" viewBox="0 0 267 46">
                    <text id="Q_註冊後可以觀看幾次_A_無限次觀看無限次觀看無限次觀看" data-name="Q：註冊後可以觀看幾次？
                    A：無限次觀看無限次觀看無限次觀看" transform="translate(0 17)" fill="#707070" font-size="16" font-family=""><tspan x="0" y="0">Q</tspan><tspan y="0" font-family="">：註冊後可以觀看幾次？</tspan><tspan y="0"></tspan><tspan x="0" y="24">A</tspan><tspan y="24" font-family="">：無限次觀看無限次觀看無限次觀看</tspan></text>
                </svg>
                <svg style="margin-left: -16px;" xmlns="http://www.w3.org/2000/svg" :width="$mq === 'mobile' ? 251: (251 * 1)" :height="$mq === 'mobile' ? 70: (70 * 1)" viewBox="0 0 251 70">
                    <text id="Q_為什麼願意提供免費課程_A_不希望有學生因為不懂升學規則_而成為台灣教育實驗的犧牲品" data-name="Q：為什麼願意提供免費課程
                    A：不希望有學生因為不懂升學規則
                    而成為台灣教育實驗的犧牲品" transform="translate(0 17)" fill="#707070" font-size="16" font-family=""><tspan x="0" y="0">Q</tspan><tspan y="0" font-family="">：為什麼願意提供免費課程</tspan><tspan y="0"></tspan><tspan x="0" y="24">A</tspan><tspan y="24" font-family="">：不希望有學生因為不懂升學規則</tspan><tspan y="24"></tspan><tspan font-family=""><tspan x="0" y="48">而成為台灣教育實驗的犧牲品</tspan></tspan></text>
                </svg>

            </div>
            
            <router-link v-if="!is_login" to="/victor/signup">
                <footer class="paynow" style="background:#A42073;">
                    免費註冊
                </footer>
            </router-link>
            <router-link v-else to="/victor/course">
                <footer class="paynow" style="background:#A42073;">
                    開始上課
                </footer>
            </router-link>
            
        </div>
    </div>
</template>
<script>
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
            link: [
                { rel: 'stylesheet', href: '/resume/index.css' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500' }
            ],
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1.0"},
                { charset: "UTF-8"},
                { hid: 'description', name: 'description', content: '得勝者文教，帶你秒懂108課綱—學習歷程' },
                { property : 'og:title' , content:"學習歷程 - 得勝者文教"},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://www.ludonow.com/victor"},
                { property : 'og:image' , content:""},
                { property : 'og:description' , content:"得勝者文教，帶你秒懂108課綱—學習歷程"},
                { property : 'og:site_name' , content:"www.ludonow.com"},
            ],
            title: '學習歷程 - 得勝者文教',
        } 
    },
    data() {
        return {
            is_ui_config_loaded:false,
            is_login:true,
            ui_config: Object,
            show_second_block: true,
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
            
            this.arrangeLandingPage();
            if (process.env.NODE_ENV === "production") {
                this.$fb.enable();
                this.$fb.track();
            }
            // this.$refs.mySwiper1.swiper.autoplay.start();
        }
    },
    methods: {
        seeMore() {
            this.show_second_block = false;
            if (process.env.NODE_ENV === "production") {
                this.$fb.track('ViewContent');
            }
        }, 
        goFBGroup(url) {
            this.$fb.query('trackCustom', 'join_group')
            window.location.href = url;
        },
        arrangeLandingPage(){
            var imgContainer = document.getElementById("ss-container");
            var imgContainer2 = document.getElementById("ss-container2");
            var slideTimer = null, imgIndex = 0, slideInterval = 3000;
            var slideTimer2 = null,imgIndex2 = 0;
            $(imgContainer.children[0]).show();
            $(imgContainer2.children[0]).show();
            slideTimer = setTimeout(()=>switchImg(1,imgContainer,slideTimer,imgIndex), slideInterval);
            slideTimer2 = setTimeout(()=>switchImg(1,imgContainer2,slideTimer2,imgIndex2), slideInterval);
            // $("#pre-img").click(()=>switchImg(-1));
            // $("#next-img").click(()=>switchImg(1));
            function switchImg(factor,element,stimer,theImgIndex){
                clearTimeout(stimer);
                $(element.children[theImgIndex]).fadeOut(500,function(){
                    var imgLength = element.children.length;
                    theImgIndex = (theImgIndex+imgLength+1*factor)%imgLength;
                    $(element.children[theImgIndex]).fadeIn(500);
                    stimer = setTimeout(()=>switchImg(1,element,stimer,theImgIndex), slideInterval);
                });
            }
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
    &.desktop { text-align:center;}
}
.line2 {
    &.desktop { text-align:center;}
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
    &.desktop { margin-top:50px !important;margin-bottom: 50px;}
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
        /* margin: 0px 10vw 50px 0; */
    }
}
h1.title {
    font-size: 36px;
    &.desktop {
        color: white;
        font-size: 45px;
        position: absolute;
        top:180px;
    }
}
h3.title {
    font-size: 17px;
    &.desktop {
        color: white;
        font-size: 25px;
        /* margin-top: 100px; */
        position: absolute;
        top:130px;
    }
}
h2.title {
    font-size: 26px;
    &.desktop {
        font-size: 29px;
        color:#A42073;
        margin-top: 20px;
        line-height: 1.5em;
    }
}
p.content {
    width: 80vw;
    margin-left: 10vw;
    font-size: 18px;
    color: black;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 400;
    &.desktop {
        font-size: 20px;
        color:#A42073;
    }
}
.four-block {
    background: #F5F5F5;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 50px;
    height: fit-content !important;
}
.eight-block {
    padding:10px 0 30px 0;
    margin:0px;
    background: #F5F5F5 !important;
    flex-direction: column;
    align-items: center;
    &.desktop { padding:50px 0 50px 0;}
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
    &.desktop { padding:50px 0 50px 0;}
}
.nineth-block svg{
    margin:10px 0 30px 0;
}

.two-options {
    display: flex;
}
.single-option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin-top: 10px;
    margin-bottom: 10px;
    &.desktop {
        height: 300px !important;
        display: flex;
        justify-content: center;
    }
}

.contact-us-block {
    padding:10px 0 80px 0 !important;
    background: #535353;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
}
.contact-us-block img{
    /* padding:10px 0 30px 0; */
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
