<template>
    <div>
        <div class="index-contain" style="min-height:100vh;overflow:visible;">
             <div class="background-video-contain" >
                <div style="width:100%;height:100vh;background: rgba(0, 0, 0,0.2);position: absolute;"></div>
                <video muted loop autoplay playsinline class="background-video" >
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-new-title-4.mp4" type="video/mp4">      
                </video>
            </div>
            <div class="mamiyoga-index-intro" style="position: absolute;">
                <mamiyoga-header bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox"></mamiyoga-header>
                <h1 id="mamiyoga-index-title">互動式<br>線上瑜珈課程</h1>
                <h2 id="mamiyoga-index-title-des">更美好的日常，從照顧自己開始</h2>
                <p id="mamiyoga-index-title-eng">The Daily Life we love, Mami yoga</p>
                <img :src="$t('index_img_title')" alt="" class="mamiyoga-intro-title">
                <div  style="display:flex;justify-content:center;flex-direction: column;align-items:center;margin:2vh auto 0;width: 15%;cursor:pointer;"  @click="goDown">
                    <p class="mamiyoga-intro-agree" style="padding:0;cursor:pointer;user-select:none;" @click="goDownWrap">了解更多</p>
                    <img style="width:30px;margin:1vh 0 0;cursor:pointer;" @click="goDownWrap" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-goto.png" alt="">
                </div>
            </div>
            <div class="mamiyoga-intro-wrap" style="background:white;" id="wrap">

                <div class="index-label-box" id="index-fixed-nav">
                    <div style="display: flex;align-items: center;justify-content: space-evenly;width: 100%;">
                        <p class="index-footer-title">Mami yoga日本人氣瑜珈</p>
                        <p class="index-footer-title" style="color:#FF9898;font-size: 16px;">NTD.1590<s class="index-footer-title" style="font-size: 12px;margin-left:10px;">NTD.1990</s></p>
                    </div>
                    <div class="index-footer-content">
                        <div class="index-footer-btn" style="color:#EEEFEA;background: #24798F;" @click="clickToPay">我 要 購 買</div>
                        <div class="index-footer-btn" style="color:#24798F;" @click="$router.push('/mirror-mirror')">體 驗 魔 鏡</div>
                    </div>
                </div>
                <div class="about-course-block" id="index-first-video" v-if="switchBlock">
                    <div style="background: linear-gradient(180deg,#FCF8ED, white);">
                        <div style="width:85%;margin:0 auto;padding-top:40px;">
                            <h3 class="index-article-title">失眠、焦慮、腰痠背痛？<br>忙碌的媽咪們，辛苦了！</h3>
                            <h6 class="index-article-little-title">卸貨小寶貝後，媽咪的身心需要重新調整</h6>
                            <div>
                                <div style="display:flex;align-items:center;width: 95%;margin: 20px auto 10px;">
                                    <div style="display:flex;align-items:center;">
                                        <img style="width:15%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                        <p class="index-article-text" style="margin: 0 0 0 10px;">每日壓力歸零</p>
                                    </div>
                                    <div style="display:flex;align-items:center;">
                                        <img style="width:15%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                        <p class="index-article-text" style="margin: 0 0 0 10px;">加強身體循環</p>
                                    </div>
                                </div>
                                <div style="display:flex;align-items:center;width: 95%;margin: 10px auto 20px;">
                                    <div style="display:flex;align-items:center;">
                                        <img style="width:15%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                        <p class="index-article-text" style="margin: 0 0 0 10px;">逐步改善體態</p>
                                    </div>
                                    <div style="display:flex;align-items:center;">
                                        <img style="width:15%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                        <p class="index-article-text" style="margin: 0 0 0 10px;">維持身心平衡</p>
                                    </div>
                                </div>
                            </div>
                            <img style="width:100%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-1.png" alt="">
                            <h6 class="index-article-little-title" style="margin-top: 50px;">一堂不需要出門的輕運動課程</h6>
                             <p class="index-article-text" style="margin-top:15px;margin-bottom: 40px;">為了寶貝 24 小時待命，無暇出門運動的妳，<br>每日居家舒緩方案，對抗身體不適和負面情緒！</p>
                        </div>
                            <img style="width:90%;margin: 0 auto 45px;display: block;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-2-1.png" alt="">
                    </div>
                    <hr style="color:#E8E8E8;margin: 0 10%;opacity:.2;">
                    <div style="background: linear-gradient(180deg, rgba(255,247,247,.49),rgba(212,222,227,.41),rgba(36,121,143,.08),rgba(36,121,143,.08),rgba(36,121,143,.08));">
                        <div style="padding-top:40px;">
                            <h3 class="index-article-title" style="width:85%;margin:0 auto;">妳知道日本媽媽<br>快速恢復身材的秘訣嗎？</h3>
                            <p class="index-article-text" style="width:85%;margin:10px auto 0;font-weight: 500;">我們與 Kokorokarada Anshin Lab 人氣老師橋本麻美合作，為臺灣媽咪們準備了一堂不用出門的輕運動課程</p>
                            <img style="width:100%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-3.png" alt="">
                            <router-link to="/information" style="text-decoration:none;">
                                <p class="index-article-text have-finger" style="color:#FF9898;text-align:right;font-weight:bold;width:85%;margin:20px auto 40px;user-select:none;font-size:16px;">了解更多&nbsp;</p>
                            </router-link>
                        </div>
                        <div class="index-article-use-video">
                            <p class="index-article-out-container-text">「自拍魔鏡」</p>
                            <p class="index-article-out-container-text-li">媽咪們最貼心的練習夥伴</p>
                            <img style="margin:35px 0;width: 100%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-4-1.png" alt="">
                            <p class="index-article-out-text" style="text-align: center;font-size: 16px;">用手機拍下自己的練習動作<br>即可獲得專業的動作調整建議！</p>
                            <div style="display: flex;align-items: center;justify-content: space-evenly;margin: 60px 0 40px;">
                                <div class="index-article-out-icon">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-icon-1.png" alt="">
                                    <p>隨時練習</p>
                                </div>
                                <div class="index-article-out-icon">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-icon-2.png" alt="">
                                    <p>專業分析</p>
                                </div>
                                <div class="index-article-out-icon">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-icon-3.png" alt="">
                                    <p>練習記錄</p>
                                </div>
                            </div>
                            <button @click="$router.push('/mirror-mirror')" style="font-size: 26px;border-radius: 16px;" class="index-article-out-btn">免費檢測</button>
                        </div>
                    </div>
                    <div style="background: linear-gradient(180deg,#FFFDF7, white);padding-top: 40px;">
                        <p class="index-article-out-container-text" style="color:#24798F;text-shadow:none;">「 孕動日記 」</p>
                        <h6 class="index-article-little-title" style="margin-bottom: 5px;text-align:center;">每天十分鐘，讓心情跟身體重新開機！</h6>
                        <p class="index-article-text" style="margin-bottom: 10px;text-align:center;">針對媽咪設計的專屬功能，按照主題式課表練習</p>
                        <div class="intro-wrap-block-new-five-curriculum" style="height:400px;overflow:hidden;">
                            <no-ssr><mamiyoga-carousel-curriculum></mamiyoga-carousel-curriculum></no-ssr>
                        </div>
                        <img id="get-course-link" @click="goOtherPage('https://m.me/1557980337838066?ref=B9FG09FD9JA')" style="cursor:pointer;width: 80%;display: block;margin: 0 auto 20px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-5-1.png" alt="">
                        <!-- 四段式課程大綱 -->
                        <div class="intro-wrap-block-new-second">
                            <h4 class="intro-wrap-block-title" style="color:#24798F;">主題式單元</h4>
                            <div class="about-course-data-wrap" :class="show_menu"  >
                                <div class="about-course-data-block" @click="toggleMenu()">
                                    <div class="about-course-data-num" :class="show_menu">探索課程</div>
                                    <div class="about-course-data-title" :class="show_menu">點擊打開課程大綱</div>
                                    <div class="about-course-data-circle outside" :class="show_menu">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <hr class="about-course-data-line" style="display:none;" :class="show_menu">
                                </div>
                                <div class="about-course-series-data-block" :class="show_series[0]">
                                    <div class="about-course-data-block"  @click="toggleSeries(0)">
                                        <div class="about-course-data-title series">矯正疼痛</div>
                                        <div class="about-course-data-circle outside series" :class="show_series[0]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line" >
                                    </div>
                                    <div class="about-course-data-block" v-for="(course,i) in getRectifys" 
                                    :key="i" @click="toggleClassA(i)" :class="show_listA[i]">
                                        <div class="about-course-data-num">單元{{i+1}}</div>
                                        <div class="about-course-data-title">{{course.title}}</div>
                                        <div class="about-course-data-circle" :class="show_listA[i]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line">
                                        <div class="about-course-data-content">
                                            <li  v-for="(pose,j) in course.poses" :key="j"
                                            >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                                        </div>
                                        <hr class="about-course-data-line">
                                    </div>
                                </div>
                                <div class="about-course-series-data-block" :class="show_series[1]">
                                    <div class="about-course-data-block"  @click="toggleSeries(1)">
                                        <div class="about-course-data-title series">舒壓安眠</div>
                                        <div class="about-course-data-circle outside series" :class="show_series[1]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line" >
                                    </div>
                                    <div class="about-course-data-block" v-for="(course,i) in getAlleviates" 
                                    :key="i" @click="toggleClassB(i)" :class="show_listB[i]">
                                        <div class="about-course-data-num">單元{{i+4}}</div>
                                        <div class="about-course-data-title">{{course.title}}</div>
                                        <div class="about-course-data-circle" :class="show_listB[i]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line">
                                        <div class="about-course-data-content">
                                            <li  v-for="(pose,j) in course.poses" :key="j"
                                            >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                                        </div>
                                        <hr class="about-course-data-line">
                                    </div>
                                </div>
                                <div class="about-course-series-data-block" :class="show_series[2]">
                                    <div class="about-course-data-block"  @click="toggleSeries(2)">
                                        <div class="about-course-data-title series">美體塑身</div>
                                        <div class="about-course-data-circle outside series" :class="show_series[2]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line" >
                                    </div>
                                    <div class="about-course-data-block" v-for="(course,i) in getBeautys" 
                                    :key="i" @click="toggleClassD(i)" :class="show_listD[i]">
                                        <div class="about-course-data-num">單元{{i+6}}</div>
                                        <div class="about-course-data-title">{{course.title}}</div>
                                        <div class="about-course-data-circle" :class="show_listD[i]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line">
                                        <div class="about-course-data-content">
                                            <li  v-for="(pose,j) in course.poses" :key="j"
                                            >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                                        </div>
                                        <hr class="about-course-data-line">
                                    </div>
                                </div>
                                <div class="about-course-series-data-block" :class="show_series[3]">
                                    <div class="about-course-data-block"  @click="toggleSeries(3)">
                                        <div class="about-course-data-title series">調和心靈</div>
                                        <div class="about-course-data-circle outside series" :class="show_series[3]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line" >
                                    </div>
                                    <div class="about-course-data-block" v-for="(course,i) in getBlends" 
                                    :key="i" @click="toggleClassC(i)" :class="show_listC[i]">
                                        <div class="about-course-data-num">單元{{i+10}}</div>
                                        <div class="about-course-data-title">{{course.title}}</div>
                                        <div class="about-course-data-circle" :class="show_listC[i]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line">
                                        <div class="about-course-data-content">
                                            <li  v-for="(pose,j) in course.poses" :key="j"
                                            >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                                        </div>
                                        <hr class="about-course-data-line">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style="color:#E8E8E8;margin: 30px 10% 0;opacity:.2;">
                    <div style="background: linear-gradient(180deg,rgba(0,193,244,.2),rgba(0,193,244,.08),rgba(212,222,227,.41), white);padding-top: 40px; overflow: hidden;">
                        <p class="index-article-out-container-text new-mami" style="color:#24798F;text-shadow:none;position: absolute;">「 媽咪新手村 」</p>
                        <img style="width: 110%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-7-1.png" alt="">
                        <h6 class="index-article-little-title" style="margin-bottom: 5px;text-align:center;font-size:20px;">初為人母一定有非常多驚喜與疑惑吧！</h6>
                        <p class="index-article-text" style="margin: 0 auto 50px;width: 90%;font-size:16px;">媽咪新手村提供從產前到產後全方位知識攻略，<br>陪媽咪們一起解任務！</p>
                        <div class="go-new-mamimura">
                            
                            <img id="go-to-club" @click="goOtherPage('https://lihi1.cc/UaaJ6')" style="cursor:pointer;width: 40%;position: absolute;bottom: 40px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-btn.png" alt="">
                        </div>
                        <hr style="color:#E8E8E8;margin: 0 10% 50px;opacity:.2;">
                    </div>

                    <div>
                        <h4 class="intro-wrap-block-title" style="color:#24798F;">Mami yoga / Youtube / 瑜珈教室<br>有什麼不同？</h4>
                        <img style="width: 90%;display: block;margin: 20px auto 50px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-9-1.png" alt="">
                    </div>
                    <hr style="color:#E8E8E8;margin: 30px 10% 0;opacity:.2;">
                    <div style="margin-top: 20px;">
                        <p class="intro-wrap-block-title" style="color:#24798F;font-weight: bold;">官方認證</p>
                        <div class="index-official-certification">
                            <p>Kokorokarada Anshin Lab</p>
                            <p>日本銷售 No.1 孕婦保健品牌</p>
                            <p>日本線上 No.1 產後瑜珈教學影片</p>
                            <p>觀看次數達 280 萬人次</p>
                        </div>
                        <div class="index-official-certification">
                            <p>LUDO</p>
                            <p>台灣科技部認證運動分析技術</p>
                            <p>日本 NEDO TCP 唯一認證海外團隊</p>
                            <p style="margin:6px auto 0px;">進駐 SPIN Accelerator Taiwan</p>
                            <p style="margin:0px auto ;">亞洲第一運動加速器</p>
                        </div>
                        <div class="index-official-certification">
                            <p>白鹿動畫</p>
                            <p>電影KANO 視覺特效</p>
                            <p>Netflix 路人超能100 視覺特效</p>
                            <p>銀魂電影版視覺特效</p>
                        </div>
                    </div>
                    <div>
                        <p class="intro-wrap-block-title" style="color:#24798F;font-weight: bold;">使用者回饋</p>
                        <no-ssr><mamiyoga-carousel-comment-ins></mamiyoga-carousel-comment-ins></no-ssr>
                    </div>
                    <div style="margin-top:40px;">
                        <h4 class="intro-wrap-block-title" style="color:#24798F;margin-left: 40px;">收費方式</h4>
                        <no-ssr><mamiyoga-carousel></mamiyoga-carousel></no-ssr>
                    </div>  
                    <!-- 三段式常見問題 -->
                    <div class="intro-wrap-block-new-second">
                        <h4 class="intro-wrap-block-title" style="color:#24798F;">常見問題</h4>
                        <div class="about-course-data-wrap qa" :class="show_qa">
                            <div class="about-course-data-block" @click="toggleQA()">
                                <div class="about-course-data-num" :class="show_qa">探索內容</div>
                                <div class="about-course-data-title" :class="show_qa">點擊打開常見問題</div>
                                <div class="about-course-data-circle outside" :class="show_qa">
                                    <span></span>
                                    <span></span>
                                </div>
                                <hr class="about-course-data-line" style="display:none;" :class="show_qa">
                            </div>
                            <div class="about-course-data-block qa" v-for="(qa,i) in qa_data" 
                            :key="i" @click="toggleQAClass(i)" :class="show_qa_list[i]">
                                <div class="about-course-data-num">{{qa.des}}</div>
                                <div class="about-course-data-title">{{qa.title}}</div>
                                <div class="about-course-data-circle" :class="show_qa_list[i]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <hr class="about-course-data-line">
                                <div class="about-course-data-content" v-html="qa.content"></div>
                                <hr class="about-course-data-line">
                            </div>
                        </div>
                    </div>
                    <p style="margin-top:5vh;margin-bottom:0;color: #707070;font-size: 12px;text-align: center;">快和朋友分享吧！</p>
                    <div class="mamiyoga-assay-share-icon-box">
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-facebook.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/facebook_messenger?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-fb-icon-chat-1.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-twitter.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/wechat?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-wechat.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/share#url=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;title=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-more.png" alt="">
                            </a>
                        </div>
                    </div>
                    <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="/agreement">用戶協議</a>&nbsp;和&nbsp;<a href="/privacy">隱私政策</a></p>
                    <p class="mamiyoga-intro-agree">&copy;2019 LUDO All Rights Reserved<br>contact@ludonow.com</p>
                </div>
                <div class="love-feedback-block" id="index-love-feedback" v-if="!switchBlock">
                    <h3 v-html="previewCourse.title"></h3>
                    <div style="position:relative;">
                        <div class="iframe-container">
                            <iframe v-if="!is_switched" :src="previewCourse.video_url" style="width: 100%;height:100%;position:absolute;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            <iframe v-if="is_switched" :src="previewCourse.video_url_jp" style="width: 100%;height:100%;position:absolute;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>
                        <div class="course-bookmark">
                            <img :src="previewCourse.chapter_flag" alt="">
                        </div>
                    </div>
                    <div class="mamiyoga-course-bottom">
                        <div class="switch-lang">
                            <input type="radio" name="lang" id="lang-ch" checked>
                            <input type="radio" name="lang" id="lang-jp">
                            <div class="switch-lang-label">
                                <label @click="is_switched = false" class="switch-lang-btn btn-ch" for="lang-ch" style="float:left;margin-right:5px;">中文</label>
                                <label @click="is_switched = true" class="switch-lang-btn btn-jp" for="lang-jp">日文</label>
                            </div>
                        </div>
                        <div class="mamiyoga-course-bottom-content first">
                            <h5>課程簡介</h5>
                            <div class="mamiyoga-course-bottom-first">
                                <p v-html="previewCourse.course_introduction"></p>
                            </div>
                        </div>
                        <div class="mamiyoga-course-bottom-content second">
                            <h5>動作簡介</h5>
                            <p>3個動作</p>
                            <div class="mamiyoga-course-bottom-second">
                                <div class="mamiyoga-course-bottom-second-content-li" v-for="(pose ,i) in previewCourse.poses" :key="i">
                                    <p>{{i+1}}</p><p>{{pose.pose_brief}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="mamiyoga-go-to-divide-btn">
                            <button @click="goPreview" class="mamiyoga-go-btn course-divide-btn" style="background-color:#97A8AF;color:#EEEFEA;margin:5vh auto 2vh;">動作練習</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="index-footer" id="index-fixed-footer">
            </div>
         </div>
        <!-- 電腦版提示 -->
        <mamiyoga-window-alert-box v-if="$mq == 'desktop' && is_desktop" class="desktop-window">
            <div class="cancel-box" @click="is_desktop= false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-2.png" alt="" style="margin-top:30px;width:45%;">
            <p style="margin:5px 0 ;font-size: 16px;"><br><br>手機為最佳使用體驗<br>桌機版正在加緊腳步開發</p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-spacing:0;margin-top:20px;background:#24798F;" @click="is_desktop = false">好的</button>
            </div>
        </mamiyoga-window-alert-box>

        <!-- Android版提示(已關閉) -->
        <mamiyoga-window-alert-box v-if="is_android && show_android_box">
            <div class="cancel-box" @click="show_android_box = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-writing-submit.png" alt="" style="margin-top:30px;width:60%;">
            <p ><strong style="line-height:20px;">AI助教優先支援 iOS 手機顯示<br>其他裝置預計九月底開通，敬請期待！</strong><br><br>輸入電子信箱，我們會在準備好時邀請您</p>
            <input class="android-input" style="width:90%;" placeholder="輸入電子信箱" type="email" name="android-mail" id="android-mail" v-model="android_mail">
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-spacing:0;margin-top:20px;background:#24798F;" @click="subscriber">{{$t('teach_assay_button_development')}}</button>
            </div>
        </mamiyoga-window-alert-box>

        <!-- 上線預告(已關閉) -->
        <mamiyoga-window-alert-box v-if="is_open">
            <div class="cancel-box" @click="is_open = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top:40px;width:40%;">
            <p v-html="$t('teach_assay_text_development')"></p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px" @click="is_open = false">{{$t('teach_assay_button_development')}}</button>
            </div>
        </mamiyoga-window-alert-box>

        <!-- 複製連接 -->
        <div class="item" style="position:fixed;bottom:-100px;">
            <input type="text" value="https://mamiyoga.ludonow.com" class="copy-area" id="urlCopied"> 
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaIndexHeader from '~/components/mamiyoga/MamiyogaIndexHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaLoginSelect from '~/components/mamiyoga/MamiyogaLoginSelect.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import MamiyogaCarousel from '~/components/mamiyoga/MamiyogaCarousel.vue';
import MamiyogaCarouselPreview from '~/components/mamiyoga/MamiyogaCarouselPreview.vue'
import MamiyogaCarouselComments from '~/components/mamiyoga/MamiyogaCarouselComments.vue'
import MamiyogaCarouselCurriculum from '~/components/mamiyoga/MamiyogaCarouselCurriculum.vue'
import MamiyogaCourseHelpCarousel from '~/components/mamiyoga/MamiyogaCourseHelpCarousel.vue'
import MamiyogaCarouselCommentIns from '~/components/mamiyoga/MamiyogaCarouselCommentIns.vue'
import Vue2TouchEvents from 'vue2-touch-events'
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config'
import { EMAIL_REGEX } from '~/components/regex.js'
 
Vue.use(Vue2TouchEvents)
export default {
    layout:'mamiyoga',
    data:()=>({
        is_open: false,
        slideIndex: 0,
        is_ui_config_loaded:false,
        ui_config: Object,

        course_data: [],
        qa_data: Object, 
        show_menu: [],
        show_series: [],
        show_listA: [],
        show_listB: [],
        show_listC: [],
        show_listD: [],
        show_qa: [],
        show_qa_list: [],

        window_height: '',
        previewCourse: {},
        is_switched: false,
        switchBlock: true,
        select_plan: 0,
        products: [
            {
                item_id: 'MY01',
            },
            {
                item_id: 'MY02',
            }
        ],
        single_plan: {},
        four_person_program: {},
        go_to_where: '/login',
        check_log: '/login',

        is_android: false,
        show_android_box: false,
        android_mail: '',
        is_desktop: true,
    }),
    components: {
        MamiyogaHeader,
        MamiyogaIndexHeader,
        MamiyogaBtn,
        MamiyogaLoginSelect,
        MamiyogaWindowAlertBox,
        MamiyogaCarousel,
        MamiyogaCarouselPreview,
        MamiyogaCarouselComments,
        MamiyogaCarouselCurriculum,
        MamiyogaCourseHelpCarousel,
        MamiyogaCarouselCommentIns
    },
    props: {
        title: String,
    },
    async mounted(){
        if(process.client) {
            //  Android用戶顯示視窗
            // if(navigator.userAgent.match(/android/i)){
            //     this.is_android = true
            //     this.show_android_box = true
            // }


            // window.onload = this.showSlides()
            // window.addEventListener('scroll',this.scrollHeight)
            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                this.go_to_where = '/login'
                this.check_log = '/login'
            } else {
                this.go_to_where = '/pay'
                let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                if (!payed_or_not) {
                    this.check_log = '/pay'
                } else {
                    this.check_log = '/menu'
                }
                
            }


            window.onscroll = this.fixNav;
            this.ui_config = await require('~/config/mamiyoga-config')
            this.is_ui_config_loaded = true;
            this.course_data = await require('~/config/mamiyoga-course')
            this.qa_data = await require('~/config/mamiyoga-qa')
            
            this.previewCourse = this.course_data[0]
            
            for (let i = 0; i < this.products.length; i++) {
                let send_data = {item_id: this.products[i].item_id};
                const response = await axios.post('/apis/get-shop-item',send_data);
                this.products[i].item_name = response.data.item_name
                this.products[i].price = response.data.price
                this.products[i].slogan = response.data.slogan
                this.products[i].description = response.data.description
                
            }
            this.single_plan = this.products.find(plan => plan.item_id == 'MY01')
            this.four_person_program = this.products.find(plan => plan.item_id == 'MY02')
            this.select_plan = this.single_plan.price

            // this.$scrollTo('#index-fixed-nav',"start");
            
        }
        // window.addEventListener('scroll',function(){
        // let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        // if(top > 600){
        //     document.getElementById('title-first').classList.add('slideInDown')    
        // }
        // if(top > 1000){
        //     document.getElementById('title-secord').classList.add('slideInDown')    
        // }
        // if(top > 1500){
        //     document.getElementById('title-third').classList.add('slideInDown')    
        // }
        // })
    },
    beforeDestroy(){
        window.onscroll = null
    },
    // async beforeCreate() {
    //     if (process.client) {
    //         // this.ui_config = await require('~/config/mommiyoga-config')
    //         // this.is_ui_config_loaded = true;
    //         let loader = await this.$loading.show({
    //             color:"#1785db",
    //             loader:"dots",
    //             opacity: 0.8,
    //         });
    //         let show_loading = this.show_loading;
    //         window.onload = this.onloadEventHandler
    //         setTimeout(() => {
    //             loader.hide();
    //         }, 2000);
    //     }
    // },
    methods:{
        onloadEventHandler(){
            console.log('ya')
            this.show_loading = false
        },
        goTeach(){
            if (this.$i18n.locale == 'JP') {
                this.$router.push({path:'/jp/teach'})
            } else if (this.$i18n.locale == 'zh-CN'){
                this.$router.push({path:'/zh-CN/teach'})
            } else {
                this.$router.push({path:'/teach'})
            }
        },
        openRemindBox(){
            this.is_open = true;
        },
        goDown(){
            this.$scrollTo('#index-wrap',"start");
        },
        goDownWrap(){
            this.$scrollTo('#wrap','start')
        },
        toggleMenu(){
            if(this.show_menu === 'long-style'){
                this.show_menu = []
            } else {
                this.show_menu = 'long-style'
            }
        },
        toggleSeries(index) {
            if (this.show_series[index] === 'open') {
                this.show_series = [];
            } else {
                this.show_series = [];
                this.show_series[index] = 'open'
            }
        },
        toggleClassA(index) {
            if (this.show_listA[index] === 'open') {
                this.show_listA = [];
            } else {
                this.show_listA = [];
                this.show_listA[index] = 'open'
            }
        },
        toggleClassB(index) {
            if (this.show_listB[index] === 'open') {
                this.show_listB = [];
            } else {
                this.show_listB = [];
                this.show_listB[index] = 'open'
            }
        },
        toggleClassC(index) {
            if (this.show_listC[index] === 'open') {
                this.show_listC = [];
            } else {
                this.show_listC = [];
                this.show_listC[index] = 'open'
            }
        },
        toggleClassD(index) {
            if (this.show_listD[index] === 'open') {
                this.show_listD = [];
            } else {
                this.show_listD = [];
                this.show_listD[index] = 'open'
            }
        },
        toggleQA(){
            if(this.show_qa === 'long-style'){
                this.show_qa = []
            } else {
                this.show_qa = 'long-style'
            }
        },
        toggleQAClass(index) {
            if (this.show_qa_list[index] === 'open') {
                this.show_qa_list = [];
            } else {
                this.show_qa_list = [];
                this.show_qa_list[index] = 'open'
            }
        },
        fixNav(){
            let v_offset_top = document.getElementById('wrap').offsetTop;
            // let f_offset_top = document.getElementById('index-love-feedback').offsetTop;
            if(window.pageYOffset > v_offset_top) {
                document.getElementById('index-fixed-nav').classList.add('sticky')
                document.getElementById('index-fixed-footer').classList.add('footer-sticky')
            } else if (window.pageYOffset < v_offset_top) {
                document.getElementById('index-fixed-nav').classList.remove('sticky')
                document.getElementById('index-fixed-footer').classList.remove('footer-sticky')
            }
            //  else if (window.pageYOffset > f_offset_top) {
            //     document.getElementById('index-fixed-nav').classList.add('sticky')
            //     document.getElementById('index-fixed-footer').classList.add('footer-sticky')
            // } else if (window.pageYOffset < f_offset_top) {
            //     document.getElementById('index-fixed-nav').classList.remove('sticky')
            //     document.getElementById('index-fixed-footer').classList.remove('footer-sticky')
            // }

        },
        getFreeCourse(){
            let course = document.getElementById('love-feedback-label');
            course.click();
        },
        goPreview(){
            sessionStorage["course_1_current_pose_id"] = 'first'
            this.$router.push('/test/pose')
        },
        goPay(){
            sessionStorage['picked_plan'] = this.select_plan;
            this.$router.push('/pay')
        },
        copyUrl(){
            // document.body.appendChild(input);
            // document.body.removeChild(input);
            let Url = document.getElementById("urlCopied");
            // Url.value = message;
            console.log(Url)
            console.log(Url.value.length)
            Url.select();
            Url.setSelectionRange(0, Url.value.length)
            document.execCommand('Copy');
            // Url.innerHTML = window.location.href;
            // console.log(Url.innerHTML)
            // Url.select();
            // document.execCommand("copy");
            window.alert('已複製連結')
            this.$scrollTo('#wrap','start')
        },
        clickToPay(){
            this.$router.push(this.go_to_where)
        },
        async subscriber(){
            // let send_data = {email:this.android_mail,name: 'Android用戶'}
            if(this.android_mail == '') {
                alert('請輸入電子信箱')
            } else if(!EMAIL_REGEX.test(this.android_mail)){
                alert('電子信箱格式錯誤')
            } else {
                this.$sendData('/apis/subscribe-mamiyoga',{email:this.android_mail,name: 'Android用戶'})
                // const res = await axios.post('/apis/subscribe-mamiyoga',send_data);
                alert('已收到您的電子信箱！敬請期待～')
                this.show_android_box = false
            }
        },
        goOtherPage(page){
            window.location.href = page;
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        getRectifys(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'rectify'));
                return result_array;
            } else {
                return [];
            }
        },
        getAlleviates(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'alleviate'));
                return result_array;
            } else {
                return [];
            }
        },
        getBeautys(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'beauty'));
                return result_array;
            } else {
                return [];
            }
        },
        getBlends(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'blend'));
                return result_array;
            } else {
                return [];
            }
        },
    },
    watch:{
        // window_height: function(oldValue,newValue){
        //     let sticky = document.getElementById('index-fixed-nav').offsetTop;
        //     if(window.offsetTop >= sticky) {
        //         document.getElementById('index-fixed-nav').classList.add('sticky')
        //     } else {
        //         document.getElementById('index-fixed-nav').classList.remove('sticky')
        //     }
        // }
    }
}
</script>

<style>
@font-face {
    font-family: 'ShueiGoGinStd';
    src: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/A-OTF-GothicMB101Pro-Ultra.otf');
}
.index-contain {    
    overflow: hidden;
    min-height: 300vh;
    height: auto;
}
.mamiyoga-index-intro {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
}
#mamiyoga-index-title{
    width: 85vw;
    margin: 3vh auto;
    color: #FCF9F2;
    font-size: 39px;
    font-weight: bold;
}
#mamiyoga-index-title-des {
    width: 85vw;
    margin: 0 auto 1vh;
    font-size: 19px;
    color: #F7F7F7;
    font-weight: 500;
}
#mamiyoga-index-title-eng {
    width: 85vw;
    margin: 0 auto;
    font-size: 16px;
    color: #F7F7F7;
    font-weight: 500;
}
.mamiyoga-intro-title {
    display: block;
    margin: 30vh auto 3vh;
    width: 25vw;

}
.mamiyoga-intro-btn {
    margin: 0 auto 2vh; 
    width: 135px;
}
.mamiyoga-intro-agree {
    font-size: 12px;
    color: #DCD8CF;
    text-align: center;
    padding-bottom: 3px;
    line-height: 20px;
}
.mamiyoga-intro-agree a,.mamiyoga-intro-agree a:visited {
    color: #DCD8CF;
}
.background-video {
    /* position: fixed; */
    top: -3vh;
    /* width: auto; */
    width: auto;
    min-height: 100vh;
}
.hooper {
    width: 100vw;
    height: 100vh;
}
.cancel-box {
    /* background: red; */
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.cancel-box img {
    width: 65%;
}
.mamiyoga-assay-contact-open p {
    color: #707070;
    text-align: center;
    font-size: 12px;
    margin: 30px 0 10px;
}
.mamiyoga-assay-contact-open img {
    display: block;
    margin: 0 auto;
    width: 50%;
}
.mamiyoga-assay-contact-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #9BAEB2;
    color: #fff;
    cursor: pointer;
}
.mamiyoga-intro-wrap input {
    display: none;
}
.index-label-box {
    width: 100%;
    height: 85px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
    padding: 5px 0;
}
.sticky {
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 0 10px 10px rgba(0,0,0,.1);
}
.index-label-box label {
    color: #24798F;
    font-size: 16px;
    font-weight: bold;
    opacity: .5;
    user-select: none;
}
.about-course-block,.love-feedback-block  {
    padding-bottom: 90px;
}
#about-course:checked ~ .index-label-box .about-course-btn,
#love-feedback:checked ~ .index-label-box .love-feedback-btn {
    opacity: 1;
    border-bottom: 2px solid #24798F;
}
.intro-wrap-block-first {
    width: 100vw;
    padding-bottom: 10px;
    background-color: #F7F7F7;

}
.intro-wrap-block-title {
    font-size: 18px;
    color:#707070;
    margin-left: 40px; 
}
.intro-wrap-block-first-content {
    font-size: 14px;
    padding: 5px 30px 0;
    color: #707070;
}
.index-wrap-video {
    width: 100%;
    margin: 0 0 10px;
}
.intro-wrap-block-first-content h1 {
    color: #24798F;
    font-size: 16px;
    font-weight: bold;
}
.select-pay-program {
    border: 1px solid #24798F;
    background: white;
    border-radius: 5px;
    width: 68%;
    height: 30px;
    color: #24798F;
    font-size: 13px;
    font-weight: 600;
}
.goto-buy-btn {
    width: 30%;
    height: 30px;
    border-style: none;
    border-radius: 5px;
    color: #f7f7f7;
    background: linear-gradient(180deg, #FF9A7B ,#FF9898);
    letter-spacing: 3px;
    font-weight: 600;
    box-shadow: 0px 3px 5px rgba(0,0,0,.2);
    font-size: 14px;
    padding:0;
}
.index-article-title {
    color: #24798F;
    font-size: 24px;
    text-align:left;
}
.index-article-little-title {
    font-size: 16px;
    margin: 20px 0 15px;
}
.index-article-text {
    color: #707070;
    font-size: 14px;
    margin-bottom: 40px;
    font-weight: 300;
}
.have-finger {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.have-finger::after {
    width: 25px;
    height: 25px;
    display: block;
    content: '';
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tap.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    float: right;
}
.index-article-use-video {
    border-radius: 40px 40px 0 0;
    position: relative;
    padding-top: 40px;
    background: #24798F;
    /* background: #33838f; */
    padding-bottom: 50px;
}
.index-article-use-video-sample {
    display: block;
    margin: 20px auto 10px;
    width: 65%;
}
.index-article-use-video-sample-img {
    position: absolute;
    top: 82px;
    width: 80%;
    left: 10%;
}
.index-article-out-container {
    width: 70%;
    height: 70px;
    position: absolute;
    top: -30px;
    left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #24798F, #97A8AF);
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
.index-article-out-container-text {
    color: #F8F7F8;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 5px 10px rgba(0,0,0,.2);
}
.index-article-out-container-text.new-mami {
    width: 100%;
}
.index-article-out-container-text-li {
    color: #f7f7f7;
    font-size: 26px;
    text-align: center;
    margin-top: 15px;
}
.index-article-out-icon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 25%;
}
.index-article-out-icon img {
    height: 70px;

}
.index-article-out-icon p {
    color: #F8F7F8;
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
}
.index-article-out-container img {
    width: 50px;
    position: absolute;
    right: 5%;
    top: -25px;
}
.index-article-out-text {
    color: #F8F7F8;
    font-size: 14px;
    font-weight: 600;
    width: 75%;
    margin: 0 auto;
}
.index-article-out-btn {
    width: 60%;
    border-style: none;
    margin: 30px auto 0;
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #F7F7F7;
    background: linear-gradient(180deg, #FF9A7B, #FF9898);
    height: 60px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.2);
    letter-spacing: 3px;
}
.index-official-certification {
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-10.png');
    height: 150px;
    margin: 40px auto;
    width: 80%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
}
.index-official-certification p {
    color: #707070;
    font-size: 12px;
    text-align: center;
    margin: 6px 0;
}
.index-official-certification p:first-child {
    font-size: 14px;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-bottom: 15px;
    padding-top: 20px;
}

.intro-wrap-block-third,
.intro-wrap-block-four,
.intro-wrap-block-five {
    width: 100vw;
    height: 750px;
    padding: 20px 0;
}
.intro-wrap-block-third {
    height: 630px;
}
.intro-wrap-block-new-second {
    width: 100%;
    /* min-height: 750px; */
    padding: 20px 0;
}
.intro-wrap-block-new-five {
    width: 100%;
    min-height: 500px;
    padding: 20px 0;
    background: url('');
    position: relative;
}
.about-teacher-pic {
    position: absolute;
    width: 200px;
    height: 400px;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-intro-about-back.png');
    background-size: cover;
    background-repeat: no-repeat;
    bottom: -5px;
    right: 0px;
}
.about-course-data-wrap {
    width: 85%;
    background: #f7f7f7;
    border: 1px solid #bfbdbd;
    margin: 20px auto 0;
    border-radius: 10px;
    max-height: 80px;
    min-height: 0;
    overflow: hidden;
    transition: ease .4s;
}
.about-course-data-wrap.qa.long-style {
    min-height: 650px;
    max-height: 1200px;
}
.about-course-data-wrap.long-style{
    min-height: 370px;
    max-height: 1200px;
}
.about-course-data-num.long-style,
.about-course-data-title.long-style{
    color: #24798F;
}
.about-course-data-line.long-style {
    display: block !important;
}
.about-course-data-circle.outside.series {
    top: 8px;
}
.about-course-data-circle.outside.series.open {
    transform: rotate(-180deg);
}
.about-course-data-circle.outside.series span {
    background: #24798f;
}
.about-course-data-circle.outside span:first-child,
.about-course-data-circle.outside span:last-child {
    width: 4px;
    height: 15px;
}
.about-course-data-circle.outside span:first-child {
    right: 4px;
}
.about-course-data-circle.outside span:last-child {
    right: 12px;
}
.about-course-data-circle.outside.long-style{
    transform: rotate(-180deg);
}
.about-course-data-circle.outside.long-style span {
    background: #24798F;
}
.about-course-series {
    height: 50px;
    overflow: hidden;
}
.about-course-series.open {
    min-height: 270px;
    max-height: 300px;
}
.about-course-series-data-block {
    overflow: hidden;
    max-height: 70px;
    min-height: 0;
    transition: ease .4s;
}
/* .about-course-series-data-block:nth-child(2),
.about-course-series-data-block:nth-child(3) {
    max-height:70px;
}
 */
 .about-course-series-data-block:nth-child(5) {
    max-height: 80px;
}
.about-course-series-data-block.open {
    min-height: 260px;
    max-height: 500px;
}
.about-course-series-data-block:nth-child(3).open {
    min-height: 180px;
    max-height: 400px;
}
.about-course-series-data-block:nth-child(4).open {
    min-height: 260px;
    max-height: 500px;
}
.about-course-series-data-block:nth-child(5).open {
    min-height: 430px;
    max-height: 520px;
}
.about-course-data-block {
    width: 85%;
    height: 55px;
    overflow: hidden;
    margin: 15px auto 0;
    text-align: center;
    transition: ease .4s;
    position: relative;
}
.about-course-data-block.open {
    height: 110px;
}
.about-course-series-data-block:nth-child(2).open .about-course-data-block:nth-child(2).open,
.about-course-series-data-block:nth-child(2).open .about-course-data-block:nth-child(3).open,
.about-course-series-data-block:nth-child(4).open .about-course-data-block:nth-child(3).open,
.about-course-series-data-block:nth-child(4).open .about-course-data-block:nth-child(5).open,
.about-course-series-data-block:nth-child(5).open .about-course-data-block:nth-child(5).open {
    height: 130px !important;
}
.about-course-series-data-block:nth-child(5).open .about-course-data-block:nth-child(6).open {
    height: 140px !important;
}
.about-course-data-block.qa.open {
    height: 110px;
}
.about-course-data-block:nth-child(4).qa.open {
    height: 190px;
}
.about-course-data-block:nth-child(5).qa.open,
.about-course-data-block:nth-child(9).qa.open {
    height: 130px;
}
.about-course-data-block:nth-child(6).qa.open {
    height: 470px;
}
.about-course-data-block.qa .about-course-data-content {
    width: 85%;
}
.about-course-data-block:nth-child(6).qa .about-course-data-content {
    width: 100%;
}
.about-course-data-block.qa:last-child{
    margin-bottom: 15px;
}
.about-course-data-num {
    font-size: 12px;
    font-weight: 600;
    color:#272727;
}
.about-course-data-title {
    color: #272727;
    font-weight: 300;
    font-size: 16px;
}
.about-course-data-title.series {
    font-size: 19px;
    font-weight:bold;
    color:#24798f;
    padding: 6px 0;
}
.about-course-data-line {
    opacity: .3;
    margin: 10px 0;
}
.about-course-data-circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 18px;
    right: 5px;
    transition: ease .4s;
}
.about-course-data-circle.open {
    transform: rotate(-180deg);
}
.about-course-data-circle span:first-child,
.about-course-data-circle span:last-child {
    width: 2px;
    height: 10px;
    background: #272727;
    position: absolute;
    top: 5px;
}
.about-course-data-circle span:first-child {
    transform: rotate(45deg);
    right: 7px;
}
.about-course-data-circle span:last-child {
    transform: rotate(135deg);
    right: 13px;
}
.about-course-data-content {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    font-size: 12px;
    color: #707070;
}
.about-course-data-content li {
    list-style-type: none;
    text-align: left;
    color: #707070;
    /* font-weight: lighter; */
    font-size: 12px;
}
.intro-wrap-block-second {
    position: relative;
}
.intro-wrap-block-five {
    height: 1050px;
}
.intro-wrap-block-second-hooper {
    width: 100%;
    padding-bottom: 40px;
    /* height: 690px; */
    overflow: hidden;
}

.intro-wrap-children-logo {
    width: 70%;
    display: block;
    margin: 40px auto;
}

.slideIn {
    animation: slidein .5s ;
}
@keyframes slidein {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: .5s;
  animation-name: fade;
  animation-duration: .5s;
  display: none;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
.slideInLeft {
  animation: slideInLeft .5s;
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}



.intro-wrap-block-second .dot {
    width: 7px;
    height: 7px;
    background-color:#D1D1D1; 
    margin: 0 4px; 
    display: inline-block;
    border-radius: 4px;
}
.index-dotactive, .intro-wrap-block-second .dot:hover {
  background-color: #707070 !important;
}
.intro-wrap-block-second .hooper-dot {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 3vh;
}

.intro-wrap-block-third-score {
    display: flex;
    align-items: center;
    padding: 0 40px;
    justify-content: space-between;
    margin-top: 15px;
}
.curriculum-dot {
    width: 7px;
    height: 7px;
    background-color:#D1D1D1; 
    margin: 0 4px; 
    display: inline-block;
    border-radius: 4px;
}
.curriculum-dotactive {
    background: #707070 !important;
}
.intro-pay-dot-line {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.intro-pay-dot {
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background: #D1D1D1;
    margin: 0 4px;
}
.intro-pay-dotactive {
    background: #707070 !important;
}
.about-articele-text {
    color: #707070;
    font-size: 12px;
}


.intro-wrap-block-five-every {
    width: 95%;
    height: 220px;
    border: 1px solid rgba(191, 189, 189, .5);
    border-radius: 5px;
    margin-top: 20px;
    position: relative;
}
.intro-wrap-block-five-every-img {
    width: 90%;
    height: 80px;
    margin: 10px auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 
}
.intro-wrap-block-five-every-title {
    font-size: 15px;
    margin-left: 5%;
    color: #707070;
}
.intro-wrap-block-five-every-text {
    font-size: 12px;
    margin: 5px 5% 10px;
    color: #707070;
    font-weight: 300;
}
.intro-wrap-block-five-every-next {
    position: absolute;
    right: -10%;
    top: 50%;
    height: 15px;
}
.index-footer {
    height: 60px;
    width: 100%;
    background: #F7F7F7;
    color: #EEEFEA;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 5px;
    font-size: 20px;
    visibility: hidden;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 -5px 10px rgba(0,0,0,.1);
}
.index-footer-content {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.index-footer-title {
    font-size: 16px;
    font-weight: bold;
    color:#24798F;
    letter-spacing: 0;
}
.index-footer-tag {
    font-size: 14px;
    background: #24798F;
    font-weight: 400;
    padding: 5px 15px;
    letter-spacing: 0;
}
.index-footer-btn {
    width: 48%;
    height: 40px;
    border-radius: 10px;
    border: 3px solid #24798F;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer-sticky {
    position: fixed;
    bottom: 0;
    z-index: 999;
    /* visibility: visible; */
}
.love-feedback-block {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.love-feedback-block h3 {
    font-size: 24px;
    color: #51636F;
    text-align: center;
    font-weight: 400; 
    padding-top: 30px;
    margin-bottom: 2vh; 
}
.love-feedback-block .iframe-container, .about-course-block .iframe-container {
    width: 100%;
    min-height:31vh;
    position:relative;
}
.love-feedback-block .course-bookmark {
    width: 30px;
    position: absolute;
    top: -10px;
    left: 20px;
}
.switch-lang input {
    display: none;
}
.switch-lang-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width:40px;
    height:20px;
    background: #BFBDBD;
    color:#fff;
    padding:0;
    font-size:12px;
    border-radius: 20px;
    box-shadow: 1px 2px 6px rgba(0,0,0,.3);
}
.switch-lang-label {
    width: 85px;
    height: 25px;
    float: right;
}
#lang-ch:checked ~ .switch-lang-label .switch-lang-btn.btn-ch,
#lang-jp:checked ~ .switch-lang-label .switch-lang-btn.btn-jp {
    background: #97A8AF;
}
.mamiyoga-course-bottom {
    /* background: red; */
    width: 100vw;
    /* height: 57vh; */
    margin-top:2vh; 
    padding: 0 5vw 3vh;
}
.mamiyoga-course-bottom-content {
    /* background: gray; */
    width: 90vw;
    height: auto;
}
.mamiyoga-course-bottom-content.first {
    margin-bottom: 1vh;
}
.mamiyoga-course-bottom-content h5 {
    font-size: 14px;
    color: #272727;
    font-weight: 400;
}
.mamiyoga-course-bottom-content p {
    font-size: 12px;
    color: #707070;
}
.mamiyoga-course-bottom-first,.mamiyoga-course-bottom-second {
    width: 90vw;
    padding: 3vw;
}
.course-divide-btn button {
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
}
.mamiyoga-go-to-divide-btn {
    position: relative;
}
.mamiyoga-go-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    cursor: pointer;
}
.mamiyoga-course-bottom-second-content-li {
    min-height: 25px;
}
.mamiyoga-course-bottom-second-content-li p:first-child {
    float: left;
    background-color: #98A9AF;
    padding: 1px 5px;
    border-radius: 10px;
    color: white;
    margin: 0 6px 6px 0;  
}
.intro-wrap-block-second-hooper .eg-flick-viewport {
    height: 700px !important;
}
.android-input {
    display: block;
    margin: 0 auto;
    /* width: 90%; */
    height: 35px;
    border: #BFBDBD 1px solid;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.1);
    text-align: center;
}
.go-new-mamimura {
    position: relative;
    height: 200px;
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-8-1.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -20px 10px;
}
.go-new-mamimura img {
    right: 10vw;
}
/*行銷變更內容*/
.background-video-contain {
    height: 100vh;
    overflow: hidden;
}
.mamiyoga-intro-wrap {
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    min-height: 100vh;
    padding-bottom: 1vh;
}
.mamiyoga-intro-wrap-block {
    margin: 0 auto;
    width: 90%;
}
.mamiyoga-intro-wrap-block h1,
.mamiyoga-intro-wrap-block h2,
.mamiyoga-intro-wrap-block h3,
.mamiyoga-intro-wrap-block h5 {
    color: #24798F;
    font-size: 20px;
    text-align: center;
    margin: 6vh auto;
}
.mamiyoga-intro-wrap-block img {
    display: block;
    margin: 3vh auto;
}
.mamiyoga-intro-wrap-block p {
    color: #707070;
    font-size: 13px;
    text-align: center;
}
.mamiyoga-intro-wrap .mamiyoga-assay-share-icon-box {
    width: 80%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    margin: 2vh auto 4vh; 
}
.mamiyoga-intro-wrap .mamiyoga-assay-share-icon {
    width: 15vw;
    height: 7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;  
}
.mamiyoga-assay-share-icon img {
    width: 36px;
    height: 36px;
    cursor: pointer;
}
#title-first,#title-secord,#title-third {
    opacity: 0;
}

.slideInDown {
    opacity: 1 !important;
    animation: slideInDown 1s both;
    animation-duration: 1s;
}
@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeIn {
    opacity: 1 !important;
    animation: fadeIn 1s both;
    animation-duration: 1s;
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.desktop-window .mamiyoga-assay-contact-open {
    width: 350px;
    height: 500px;
}


@media (min-width:769px) {
    #mamiyoga-index-title,
    #mamiyoga-index-title-des,
    #mamiyoga-index-title-eng {
        width: 85%;
    }
    .index-contain {
        width: 450px;
        /* height: 100vh; */
    }
    .mamiyoga-index-intro {
        width: 450px;
        height: 100vh;
    }
    .mamiyoga-intro-title {
        width: 30%;
    }
    .background-video {
        min-height: 100vh;
        width: auto;
    }
    .index-article-out-container-text.new-mami {
        width: 450px;
    }
    .intro-wrap-block-first,
    .intro-wrap-block-second,
    .intro-wrap-block-third, 
    .intro-wrap-block-four, 
    .intro-wrap-block-five {
        width: 450px;
    }
    .sticky, .footer-sticky {
        max-width: 450px;
    }
    .index-article-use-video {
        background: #33838f;
    }
    .mamiyoga-each-course,.mamiyoga-course-video,
    .mamiyoga-course-middle,.mamiyoga-course-bottom,
    .mamiyoga-course-bottom-content,
    .mamiyoga-course-bottom-first, .mamiyoga-course-bottom-second,
    .iframe-container {
        width: 100%;
    }
    .iframe-container {
        min-height: 260px;
    }
    .mamiyoga-course-middle {
        padding: 8px 25px;
    }
    .mamiyoga-course-bottom-first, .mamiyoga-course-bottom-second {
        padding: 15px 0 15px 15px;
    }
    .mamiyoga-course-bottom {
        margin-top:30px;
        padding: 0 25px 10px;
    }
    .mamiyoga-go-to-divide-btn img {
        top: -15px;
        left: 130px;
    }
    .go-new-mamimura img {
        right: 35px;
    }
    /*行銷網頁版*/
    .mamiyoga-intro-wrap-block h5 {
        margin: 40px auto;
    }
    .mamiyoga-intro-wrap-block img {
        margin: 25px auto;
    }
    .mamiyoga-intro-wrap .mamiyoga-assay-share-icon-box {
        height: 35px;
    }
    .mamiyoga-intro-wrap .mamiyoga-assay-share-icon {
        height:35px;
    }
    
}
@media (max-width: 400px) {
    .background-video {
        top: -4vh;
    }
}
@media (max-width: 350px) {
    .background-video {
        margin-top: -22vh;
    }
}
@media (max-width: 830px) and  (orientation:landscape) {
    .index-contain {
        height: 200vh;
    }
    .mamiyoga-index-intro {
        position: absolute;
    }
}
</style>