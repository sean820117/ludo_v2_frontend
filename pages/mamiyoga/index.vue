<template>
    <div>
        <div class="index-contain" v-if="!is_beta" style="min-height:300vh;overflow:visible;">
            <!-- <video muted loop autoplay playsinline class="background-video" >
                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-1.mp4" type="video/mp4">      
                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-2.mp4" type="video/mp4">      
            </video> -->
             <div class="background-video-contain">
                <video muted loop autoplay playsinline class="background-video" >
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-new-3.mp4" type="video/mp4">      
                </video>
            </div>
            <div class="mamiyoga-index-intro" style="position: absolute;">
                <mamiyoga-header bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox"></mamiyoga-header>
                <!-- <h2 class="mamiyoga-intro-title" v-html="title">
                    {{title}}
                </h2> -->
                <img :src="$t('index_img_title')" alt="" class="mamiyoga-intro-title">
                <div class="mamiyoga-intro-btn" @click="goTeach">
                    <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" :btnText="$t('index_button_free')"></mamiyoga-btn>
                </div>
                <div class="mamiyoga-intro-btn" @click="is_open = true">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_pay')" style="margin-bottom:5vh;" ></mamiyoga-btn>
                </div>
                <!-- <mamiyoga-login-select :is_beta="false"></mamiyoga-login-select> -->
                <mamiyoga-login-select v-if="!is_open && is_ui_config_loaded" :login_method="ui_config.view.signup_page.login_method"></mamiyoga-login-select>
                <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="/mamiyoga/agreement">用戶協議</a>&nbsp;和&nbsp;<a href="/mamiyoga/privacy">隱私政策</a></p>
                <!-- <p class="mamiyoga-intro-agree" v-html="$t('index_agree_text')"></p> -->
                <div  style="display:flex;justify-content:center;flex-direction: column;align-items:center;margin:2vh auto 0;width: 15%;cursor:pointer;"  @click="goDown">
                    <p class="mamiyoga-intro-agree" style="padding:0;cursor:pointer;" @click="goDownWrap">了解更多</p>
                    <img style="width:30px;margin:1vh 0 0;cursor:pointer;" @click="goDownWrap" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-goto.png" alt="">
                </div>
            </div>
            <div class="mamiyoga-intro-wrap" style="background:white;" id="wrap">
                <input type="radio" id="about-course" name="index-select" checked>
                <input type="radio" id="love-feedback" name="index-select">
                <div class="index-label-box" id="index-fixed-nav">
                    <label class="about-course-btn" for="about-course">課程介紹</label>
                    <label class="love-feedback-btn" for="love-feedback">愛心回饋</label>
                </div>
                <div class="about-course-block">
                    <div style="background: #24798F;padding-bottom:50px;">
                        <div class="intro-wrap-block-first">
                            <video loop controls autoplay playsinline muted id="index-first-video" class="index-wrap-video" poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video-preview.png">
                                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video.mp4">
                            </video>
                            <div class="intro-wrap-block-first-content">
                                <h1>Mami yoga日本人氣瑜珈</h1>
                                <p style="font-size:14px;margin:5px 0 0;font-weight:500;">講師 橋本麻美</p>
                                <p>使用期限：影片永久/AI助教一年</p>
                                <div style="margin: 20px 0;display:flex;align-items: center;justify-content:space-between;">
                                    <select name="pay-program" class="select-pay-program">
                                        <option value="for-one">獨享愛自己&nbsp;&nbsp;NTD.1590</option>
                                        <option value="for-four">姊妹揪起來(4人)&nbsp;NTD.5160</option>
                                        <option value="Hsinchu">企業方案(30人)&nbsp;專人服務</option>
                                    </select>
                                    <button class="goto-buy-btn" @click="$router.push('/mamiyoga/pay')">立即購買</button>
                                </div>
                            </div>
                            <img style="width:90%;display:block;margin:20px auto 40px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-data.png" alt="">
                            <div style="width:77%;margin: 0 auto;">
                                <h3 class="index-article-title">骨盆是產後恢復最重要的事</h3>
                                <p class="index-article-text" style="color:#272727;margin-top:10px;">生完小孩後感到身體不斷發熱嗎？<br>過了一週還是覺得骨盆依然沒有開始收緊嗎？</p>
                                <!-- <p class="index-article-text">產後即將進入新生活、工作、家事的無限循環，沒有時間上健身房與團體課來讓身體迅速復原。久而久之，脂肪容易囤積在下腹形成『游泳圈』，許多關節由於骨盆歪斜而承受不平衡地壓力，最後導致身體時常出現病痛。<br><br>黃金復原期只有短短的180天，在照顧孩子的同時又需要補充睡眠，半年的時間一下子就不見了。即使在醫院得到骨盆矯正，如果在生活中沒有長期改善，問題依然會發生。<br><br>許多媽媽會感嘆，出了月子中心半年後身體並沒有回到以前的狀態，反而時間越久越難恢復，早知道就要更積極的保養身體了。</p> -->
                                <h3 class="index-article-title">妳知道日本媽媽<br>從來沒有坐月子嗎？</h3>
                                <p class="index-article-text" style="color:#272727;margin-top:10px;margin-bottom:0;">日本是完全沒有坐月子習慣的，但這並不代表台灣的媽媽不需要！我們深入研究了日本媽媽在孕期體重管理到產後的修復，發現日本媽媽們貫徹了產後黃金修復要做的事情，而現在最流行也最有效的就是『產後瑜珈』。</p>
                                <router-link to="/mamiyoga/information" style="text-decoration:none;">
                                    <p class="index-article-text have-finger" style="color:#FF9898;text-align:right;font-weight:bold;margin-top:10px;margin-bottom:10px;">了解更多&nbsp;</p>
                                </router-link>
                                <!-- <p class="index-article-text">產後瑜珈最主要的功能就是幫助媽媽在半年期間迅速恢復腹部肌肉、S曲線、以及縮小骨盆，讓媽媽們在產後迅速恢復身材上的自信、也能帶來更好的健康生活！<br><br>在家就能做的『產後瑜珈』<br>這是一堂專門為『沒有時間』的產後媽媽們設計的線上產後瑜珈課程。<br><br>課程分為14個單元，共33種動作，分門別類幫妳從骨盆、腰部、小腿、水腫、骨頭密度、心情放鬆......等等，詳細的解說與動畫標示解決外出上課的問題。</p> -->
                                <img style="width:100%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-mami.png" alt="">
                                <h6 class="index-article-little-title">這是一堂專門為『沒有時間』的產後媽媽們設計的線上產後瑜珈課程。</h6>
                                <p class="index-article-text">課程分為14個單元，共33種動作，分門別類幫妳從骨盆、腰部、小腿、水腫、骨頭密度、心情放鬆......等等，詳細的解說與動畫標示解決外出上課的問題。</p>
                            </div>
                        </div>
                        <div style="position:relative;padding-top:85px;">
                            <div class="index-article-out-container">
                                <p class="index-article-out-container-text">獨家線上瑜珈助教</p>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ai-badge.png" alt="">
                            </div>
                            <p class="index-article-out-text">我們特地將12項重點動作製作了線上輔助媽媽的瑜珈助教，只要對動作有疑惑、不確定是否做得正確。只要上傳你的練習影片，助教就會將錯誤的部分標示並且回傳給妳喔！</p>
                            <button @click="$router.push('/mamiyoga/teach')" class="index-article-out-btn">馬上體驗</button>
                        </div>
                    </div>
                    <!-- <div class="intro-wrap-block-children">
                        <img class="intro-wrap-children-logo" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-children-logo-1.png" alt="">
                        <h5 style="font-size: 30px;text-align: center;">一份愛，越分享越多</h5>
                    </div> -->
                    <div class="intro-wrap-block-second" v-touch:swipe.left="nextSlides" v-touch:swipe.right="lastSlides">
                        <h4 class="intro-wrap-block-title">課程預覽</h4>
                        <div class="intro-wrap-block-second-hooper">
                            <div class="intro-wrap-block-second-slide ">
                                <div class="intro-wrap-block-second-content">
                                    <p>課程皆有雙語發音，動作分段練習<br>&nbsp;</p>
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-2.png" alt="">
                                </div>
                            </div>
                            <div class="intro-wrap-block-second-slide fade">
                                <div class="intro-wrap-block-second-content">
                                    <p>使用手機鏡頭拍攝練習動作<br>AI助教分析成果</p>
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-3.png" alt="">
                                </div>
                            </div>
                            <div class="intro-wrap-block-second-slide fade">
                                <div class="intro-wrap-block-second-content">
                                    <p>依照媽媽的使用需求<br>規劃有系統的課程</p>
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-4.png" alt="">
                                </div>
                            </div>
                            <div class="intro-wrap-block-second-slide fade">
                                <div class="intro-wrap-block-second-content">
                                    <p>來自日本橋本麻美老師親自傳授<br>產後修復完整課程</p>
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-5.png" alt="">
                                </div>
                            </div>
                            <div class="intro-wrap-block-second-slide fade">
                                <div class="intro-wrap-block-second-content">
                                    <p>AI助教將分析成果及給予修正建議<br>&nbsp;</p>
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-6.png" alt="">
                                </div>
                            </div>
                            <div class="hooper-dot">
                                <span class="dot" @click="currentSlide(1)"></span> 
                                <span class="dot" @click="currentSlide(2)"></span> 
                                <span class="dot" @click="currentSlide(3)"></span> 
                                <span class="dot" @click="currentSlide(4)"></span> 
                                <span class="dot" @click="currentSlide(5)"></span> 
                            </div>
                        </div>
                    </div>
                    <!-- <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;"> -->
                    <div class="intro-wrap-block-new-second">
                        <h4 class="intro-wrap-block-title">課程大綱</h4>
                        <div class="about-course-data-wrap">
                            <div class="about-course-data-block" v-for="(course,i) in course_data" 
                            :key="i" @click="toggleClass(i)" :class="show_list[i]">
                                <div class="about-course-data-num">單元{{i+1}}</div>
                                <div class="about-course-data-title">{{course.title}}</div>
                                <div class="about-course-data-circle" :class="show_list[i]">
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
                        <!-- <div class="about-course-data-wrap">
                            <div class="about-course-data-block"  @click="toggleClass(0)" :class="show_list[0]">
                                <div class="about-course-data-num">單元一</div>
                                <div class="about-course-data-title">骨盆矯正瑜珈</div>
                                <hr class="about-course-data-line">
                                <div class="about-course-data-content">
                                    <li>1-1 項目</li>
                                    <li>1-2 項目</li>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <!-- <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;"> -->
                    <div class="intro-wrap-block-third">
                        <div style="display:flex;justify-content:space-between;padding:20px 60px 0 50px;">
                            <div>
                                <h4 class="intro-wrap-block-title" style="margin:0;padding-top:35px;">評分與評論</h4>
                                <p style="color:#24798F;font-size:80px;font-weight:bold;margin-top:15px;height:80px;">4.8</p>
                            </div>
                            <img style="height:170px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-7.png" alt="">
                        </div>
                        <div class="intro-wrap-block-third-score">
                            <p style="color:#707070;font-size: 14px;letter-spacing:3px;">使用平均分數</p>
                            <img style="height: 20px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        </div>
                        <div v-touch:swipe.left="nextComments" v-touch:swipe.right="lastComments" style="overflow:hidden;">
                            <div class="intro-wrap-block-third-comment">
                                <div class="intro-wrap-block-third-comment-title">
                                    想成為溫柔的媽媽超人
                                </div>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                                <p class="intro-wrap-block-third-comment-text">30歲前生下大寶之後，隔了幾年懷了二寶，在這中間都有保持運動的良好習慣，平時除了跑步也參雜一些重訓在鍛鍊自己。產後運動選擇瑜伽，是因為瑜伽的道理是覺察身體有沒有回歸本位，35歲的我已經可以感覺到體力逐漸改變，雖然有運動的習慣支撐，但我想藉著這個機會好好的了解現在的身體，重新地學會呼吸，強悍又溫柔的照顧兩個孩子！</p>
                                <p class="intro-wrap-block-third-comment-from">陳太太 35歲 運動習慣者</p>
                            </div>
                            <div class="intro-wrap-block-third-comment">
                                <div class="intro-wrap-block-third-comment-title">
                                    讓我重新體驗到走路跟呼吸可以這麼舒服！
                                </div>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                                <p class="intro-wrap-block-third-comment-text">本來在懷孕之前工作很忙的時候就不太照顧自己的身體，常常在外飲食，高油高糖常常熬夜。因為這樣所以非常害怕產後憂鬱跟身體狀況，也害怕平常沒有運動習慣的我無法在產後自律的鍛鍊身材。朋友推薦我媽咪瑜伽是一個非常舒適且放鬆的方式。實際做了之後，我發現真的沒什麼壓力，只要照著老師的話去做，了解身體的結構，放鬆地去呼吸，感受身體，讓我覺得靠著一件簡單的方式，就重新調整生活。我也有信心可以一直維持做瑜伽的好習慣！</p>
                                <p class="intro-wrap-block-third-comment-from">Yuna 29歲 科技業上班族</p>
                            </div>
                            <div class="intro-wrap-block-third-comment">
                                <div class="intro-wrap-block-third-comment-title">
                                    想要把所有好的事情都給老婆
                                </div>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                                <p class="intro-wrap-block-third-comment-text">看著老婆從妊娠初期就吃盡苦頭，身為男性實在不知道自己能夠幫上什麼忙，可以幫她一些小事，可以關心她，可以陪伴她，但卻不能代替她痛，她身形的改變、她在意的生理變化，我都沒辦法經歷。在網路上查了許多資料，瑜伽是最好恢復身形的方法，安排完大小事情之後，送他這個小小的禮物，希望送給她自己的時間，讓她好好的放鬆。</p>
                                <p class="intro-wrap-block-third-comment-from">陳先生 34歲 </p>
                            </div>
                            <div class="intro-wrap-block-third-comment">
                                <div class="intro-wrap-block-third-comment-title">
                                    除了鼓足勇氣迎接我的第一個寶寶以外，<br>也迎接人生第一次的深層了解自我！
                                </div>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                                <p class="intro-wrap-block-third-comment-text">跟老公規劃好大寶的出生之後，一直非常焦慮自己能不能有耐心的去照顧好我們的寶貝，能不能健健康康的親餵他。從來沒有當過媽媽，自然非常緊張。老公一直用心地跟我溝通，給予我鼓勵，我們溝通之後，評估我的狀況，決定選一個最舒適的運動跟環境。生產後在月子中心的日子，每天學著照顧寶寶，等待餵奶的時間，其實也有點壓力，增加了運動的習慣，反而讓我可以好好靜下心來放鬆跟傾聽自己的情緒，我相信這個運動的過程可以幫助我沈澱自己，好好面對人生的新角色！</p>
                                <p class="intro-wrap-block-third-comment-from">欣鈺 25歲 頭胎</p>
                            </div>
                            <div class="intro-wrap-block-third-comment">
                                <div class="intro-wrap-block-third-comment-title">
                                    把保養身體變成習慣！
                                </div>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                                <p class="intro-wrap-block-third-comment-text">身為單身全職女性，常常會忽略忙碌的生活以及隨便的飲食給身體帶來的負擔。這些生活中的負擔就好像對自己欠了債，在經期來時讓身體疲累不堪、皮膚也狀況百出。雖然這個運動是標榜產後瑜伽，但其實做了之後發道理其實非常簡單，還沒有生育過的女性也受用無窮。掌握著這個基本的養生之道之後，懂的如何休息，就算面對高壓的工作，也可以好好照顧自己！</p>
                                <p class="intro-wrap-block-third-comment-from">B 23歲 上班族</p>
                            </div>
                            <div class="intro-wrap-block-third-comment">
                                <div class="intro-wrap-block-third-comment-title">
                                    舒服完美的使用者介面，良好的體驗
                                </div>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                                <p class="intro-wrap-block-third-comment-text">學校的體育學分修完之後，我跟我的室友就沒有繼續保持運動的習慣，所以我們買了媽咪瑜伽，每天約定好時間一起運動。雖然沒有生過寶寶（笑），但媽咪瑜伽其實整合了瑜伽最基本的概念，每天輕輕鬆鬆地做就可以把痠痛的筋骨伸展開。有那麼多的選擇，媽咪瑜伽最fit我們的需求，介面也很好看，使用起來非常方便，整體來說，讓整個做瑜伽的過程都很舒服(oﾟωﾟo)！</p>
                                <p class="intro-wrap-block-third-comment-from">Claire 20歲 大學生</p>
                            </div>
                            <div class="hooper-comment-dot">
                                <span class="comment-dot" @click="currentComment(1)"></span> 
                                <span class="comment-dot" @click="currentComment(2)"></span> 
                                <span class="comment-dot" @click="currentComment(3)"></span> 
                                <span class="comment-dot" @click="currentComment(4)"></span> 
                                <span class="comment-dot" @click="currentComment(5)"></span> 
                                <span class="comment-dot" @click="currentComment(6)"></span> 
                            </div>
                        </div>
                    </div>
                    <!-- <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;"> -->
                    <div class="intro-wrap-block-four" style="height: 550px;">
                        <h4 class="intro-wrap-block-title" style="margin-left: 40px;">收費方式</h4>
                        <!-- <div class="owl-carousel">
                            <div class="intro-wrap-four-pay float-left">
                                <h4>獨享愛自己</h4>
                                <p style="text-align: center;font-size: 17px;margin-top:5px;">&nbsp;&nbsp;&nbsp;</p>
                                <div class="intro-wrap-four-pay-price">
                                    <p style="font-size:14px;">一年</p>
                                    <p style="font-size:47px;">1590</p>
                                    <p style="font-size:14px;">NTD/人</p>
                                </div>
                                <p style="font-size:16px;text-align: center;">折合NTD132/月</p>
                                <div class="intro-wrap-four-pay-btn" @click="$router.push('/mamiyoga/pay')">
                                    立即購買
                                </div>
                                <div class="intro-wrap-four-pay-bottom">
                                    <div class="intro-wrap-four-pay-circle"  @click="$router.push('/mamiyoga/pay')"></div>
                                </div>
                            </div>
                            <div class="intro-wrap-four-pay ">
                                <h4>姊妹揪起來</h4>
                                <p style="text-align: center;font-size: 14px;margin-top:5px;">4人以上</p>
                                <div class="intro-wrap-four-pay-price">
                                    <p style="font-size:14px;">一年</p>
                                    <p style="font-size:47px;">1290</p>
                                    <p style="font-size:14px;">NTD/人</p>
                                </div>
                                <p style="font-size:16px;text-align: center;">折合NTD107/月</p>
                                <div class="intro-wrap-four-pay-btn" @click="$router.push('/mamiyoga/pay')">
                                    立即購買
                                </div>
                                <div class="intro-wrap-four-pay-bottom">
                                    <div class="intro-wrap-four-pay-circle" @click="$router.push('/mamiyoga/pay')"></div>
                                </div>
                                <div class="intro-wrap-four-pay-cost">-20%</div>
                            </div>
                            <div class="intro-wrap-four-pay ">
                                <h4>企業方案</h4>
                                <p style="text-align: center;font-size: 14px;margin-top:5px;">30人以上</p>
                                <div class="intro-wrap-four-pay-price">
                                    <p style="font-size:14px;">一年</p>
                                    <p style="font-size:47px;">990</p>
                                    <p style="font-size:14px;">NTD/人</p>
                                </div>
                                <p style="font-size:16px;text-align: center;">折合NTD82/月</p>
                                <div class="intro-wrap-four-pay-btn" @click="$router.push('/mamiyoga/pay')">
                                    立即購買
                                </div>
                                <div class="intro-wrap-four-pay-bottom">
                                    <div class="intro-wrap-four-pay-circle" @click="$router.push('/mamiyoga/pay')"></div>
                                </div>
                                <div class="intro-wrap-four-pay-cost">-40%</div>
                            </div>
                            <div class="intro-pay-dot-line">
                                <span class="intro-pay-dot" @click="currentPrice(1)"></span>
                                <span class="intro-pay-dot" @click="currentPrice(2)"></span>
                                <span class="intro-pay-dot" @click="currentPrice(3)"></span>
                            </div>
                        </div> -->
                        <mamiyoga-carousel></mamiyoga-carousel>
                    </div>
                    <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;">
                    <div class="intro-wrap-block-new-five" style="padding: 0 40px;">
                        <h4 class="intro-wrap-block-title" style="margin:0;padding-top:35px;">講師介紹</h4>
                        <h5 class="index-article-title" style="font-weight:bold;margin-top: 60px;">{{$t('about_first_content_name')}}</h5>
                        <p class="index-article-title" style="font-weight:bold;font-size:20px;">{{$t('about_first_content_name_en')}}</p>
                        <p class="about-articele-text" style="font-weight: bold;margin-top: 30px; margin-bottom: 5px;">{{$t('about_first_content_have')}}</p>
                        <p class="about-articele-text" style="margin-bottom: 10px;">Yoga Aliance RYT200<br>
                            maternity yoga instructor<br>
                            aerial yoga instructor<br>
                            Body Care professional course
                        </p>
                        <p class="about-articele-text" style="font-weight: bold; margin-bottom: 5px;">{{$t('about_first_content_course')}}</p>
                        <p class="about-articele-text">{{$t('about_first_content_course_text')}}</p>
                        <p class="about-articele-text" style="font-weight: bold;margin-top: 30px; margin-bottom: 5px;color:#24798F;">擔任日本屈指頂尖舞蹈跟唱歌<br>少女團體E-girl的私家貼身瑜珈指導</p>
                        <p class="about-articele-text" style="font-weight: bold;margin-top: 30px; margin-bottom: 5px;color:#24798F;">一週的固定班底課程20堂以上<br>Instagram的追蹤人數兩萬人以上</p>
                        <div class="about-teacher-pic"></div>
                    </div>
                    <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;">
                    <div class="intro-wrap-block-new-five" style="padding: 0 40px;">
                        <p class="intro-wrap-block-title" style="margin:0;padding-top:40px;color:#24798F;font-weight:600;">練習課表</p>
                        <p class="index-article-text" style="margin-top:15px;">我們為媽媽們設計了一套練習課表，交錯練習不同部位能有效地刺激肌肉的恢復狀況，早上、下午、晚上設想了媽媽與寶寶的生活步調，讓媽媽在家照顧寶寶時能夠一起做瑜珈。</p>
                    
                        <p class="intro-wrap-block-title" style="margin:0;color:#24798F;font-weight:600;">這堂課能夠幫助妳...</p>
                        <p class="index-article-text" style="margin-top:15px;font-weight: bold;">1、收緊骨盆<br>2、修復腹肌<br>3、減輕壓力<br>4、平衡自律神經<br>5、改善肩頸壓力<br>6、消除浮腫<br>7、改善骨頭密度</p>
                        <p class="intro-wrap-block-title" style="margin:0;color:#24798F;font-weight:600;">上課準備與提醒</p>
                        <p class="index-article-text" style="margin-top:15px;font-weight: bold;">這堂課需要準備：<br><br>1、舒適的居家運動衣物（例如：無/短袖、寬鬆長/短褲，瑜珈服）<br>2、緩衝地面的地墊、訓練墊或瑜珈墊<br>3、一顆積極想改變自己的心情</p>
                        <p class="intro-wrap-block-title" style="margin:0;color:#24798F;font-weight:600;">課程目標</p>
                        <p class="index-article-text" style="margin-top:15px;font-weight: bold;">在產後的黃金180天修復腹部肌肉、消除水腫、並且縮小骨盆。</p>
                        <p class="intro-wrap-block-title" style="margin:0;color:#24798F;font-weight:600;">適合對象</p>
                        <p class="index-article-text" style="margin-top:15px;font-weight: bold;">１、適合產後兩週~五年的女性。<br>２、</p>
                    </div>
                    <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;">
                    <div class="intro-wrap-block-five" style="padding: 0 40px;">
                        <h4 class="intro-wrap-block-title" style="margin:0;padding-top:35px;">獨家文章</h4>
                        <p style="font-size:12px;color:#707070;font-weight:lighter;">LUDO身體科學誌</p>
                        <a href="https://link.medium.com/X8MbmFeEaZ" style="text-decoration:none;">
                            <div class="intro-wrap-block-five-every">
                                <div class="intro-wrap-block-five-every-img" style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-five-1.png');"></div>
                                <h4 class="intro-wrap-block-five-every-title">令人擔憂的骨盆疼痛</h4>
                                <p class="intro-wrap-block-five-every-text">尺骨的功能與重要性<br>恥骨是骨盆之一。恥骨位於骨盆中央，尾骨位於骨盆下方，髖骨（髂骨、坐骨神經和恥骨）位於恥骨左側和右側。骨盆是這五塊&nbsp;....</p>
                                <img class="intro-wrap-block-five-every-next" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/arrow-point-to-right.png" alt="">
                            </div>
                        </a>
                        <a href="https://link.medium.com/CBFlHbjEaZ" style="text-decoration:none;">
                            <div class="intro-wrap-block-five-every">
                                <div class="intro-wrap-block-five-every-img" style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-five-2.png');"></div>
                                <h4 class="intro-wrap-block-five-every-title">產後憂鬱之路：找回身體的秩序</h4>
                                <p class="intro-wrap-block-five-every-text">生產後的媽媽們由於荷爾蒙與激素的緣故，有可能發生產後憂鬱的症狀：憂鬱、情緒不穩、焦慮、食慾不振等等，而爸爸們有時只能盡可能地安撫、陪伴與包容。&nbsp;....</p>
                                <img class="intro-wrap-block-five-every-next" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/arrow-point-to-right.png" alt="">
                            </div>
                        </a>
                        <a href="https://link.medium.com/InWnu5rEaZ" style="text-decoration:none;">
                            <div class="intro-wrap-block-five-every">
                                <div class="intro-wrap-block-five-every-img" style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-five-3.png');"></div>
                                <h4 class="intro-wrap-block-five-every-title">產後最重要的一件事：骨盆正位</h4>
                                <p class="intro-wrap-block-five-every-text">在孕期當中身形會逐漸改變，為了讓胎兒能夠有足夠的空間生長，母體的下半身會開始擴張，最明顯的是「骨盆變大」與「腹部皮膚延展」。&nbsp;....</p>
                                <img class="intro-wrap-block-five-every-next" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/arrow-point-to-right.png" alt="">
                            </div>
                        </a>
                        <a href="https://link.medium.com/RtAiXVtEaZ" style="text-decoration:none;">
                            <div class="intro-wrap-block-five-every">
                                <div class="intro-wrap-block-five-every-img" style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-five-4.png');"></div>
                                <h4 class="intro-wrap-block-five-every-title">產後修復瘦身180天秘技</h4>
                                <p class="intro-wrap-block-five-every-text">從胚型理論開始分析每個人適合的飲食與訓練來經營健康外，身邊紛紛出現許多女性朋友提出已經開始『變形』的身體該如何搶救。&nbsp;....</p>
                                <img class="intro-wrap-block-five-every-next" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/arrow-point-to-right.png" alt="">
                            </div>
                        </a>
                    </div>
                    <p style="margin-top:5vh;margin-bottom:0;color: #707070;font-size: 12px;text-align: center;">快和朋友分享吧！</p>
                    <div class="mamiyoga-assay-share-icon-box">
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-facebook.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/facebook_messenger?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-fb-icon-chat.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-twitter.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/wechat?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-wechat.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/share#url=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;title=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-more.png" alt="">
                            </a>
                        </div>
                    </div>
                    <p class="mamiyoga-intro-agree">&copy;2019 LUDO All Rights Reserved</p>
                </div>
            </div>
            <div class="index-footer" id="index-fixed-footer">立即付款</div>
         </div>
        <div class="index-contain" v-if="is_beta" style="min-height:300vh;overflow:visible;" >
            <div class="background-video-contain">
                <video muted loop autoplay playsinline class="background-video" >
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-2.mp4" type="video/mp4">      
                </video>
            </div>
            <div class="mamiyoga-index-intro" style="position: absolute;">
                <mamiyoga-header bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox"></mamiyoga-header>
                <!-- <h2 class="mamiyoga-intro-title" v-html="title">
                    {{title}}
                </h2> -->
                <img :src="$t('index_img_title')" alt="瑜珈" class="mamiyoga-intro-title" style="margin:10vh auto 19vh;">
                <div class="mamiyoga-intro-btn">
                    <router-link to="/mamiyoga/teach" style="text-decoration: none;">
                        <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" :btnText="$t('index_button_free')"></mamiyoga-btn>
                    </router-link>
                </div>
                <div class="mamiyoga-intro-btn" @click="openRemindBox">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_pay')" style="margin-bottom:5vh;"></mamiyoga-btn>
                </div>
                <mamiyoga-login-select :is_beta="true"></mamiyoga-login-select>
                <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="">用戶協議</a>&nbsp;和&nbsp;<a href="/mamiyoga/privacy">隱私政策</a></p>
                <!-- <p class="mamiyoga-intro-agree">&copy;2019 LUDO All Rights Reserved</p> -->
                <div  style="display:flex;justify-content:center;flex-direction: column;align-items:center;margin:2vh auto 0;width: 15%;cursor:pointer;"  @click="goDown">
                    <p class="mamiyoga-intro-agree" style="padding:0;cursor:pointer;" @click="goDown">了解更多</p>
                    <img style="width:30px;margin:1vh 0 0;cursor:pointer;" @click="goDown" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-goto.png" alt="">
                </div>
            
            </div>
            <div class="mamiyoga-intro-wrap" id="index-wrap">
                <img style="width:100%" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-secord.png" alt="瑜珈好處">
                <article class="mamiyoga-intro-wrap-block">
                    <div style="background:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-title-background.png');margin-top:5vh;background-repeat:no-repeat;background-size:cover;height:130px;justify-content:center;align-items:center;display:flex;margin-bottom:3vh;">
                        <h1  style="margin:0;line-height:47px;color:#24798F;font-size:40px;font-weight:bold;letter-spacing:4px;">Mami yoga<br>日本人氣瑜珈</h1>
                    </div>
                    <h5 id="title-first" style="margin-top:0;">你知道嗎？日本產後媽媽除了調整飲食，還會透過瑜珈來保養身體</h5>
                    <p>懷孕生產對每一個媽媽來說絕對是一個全新階段，<br>這也是世界上最美好、最滿足的事情之一。<br><br>
                    但身心的劇烈變化經常讓人無法負荷，瑜珈能夠幫助女性在這趟階段轉換的旅程之中更輕鬆的照顧好自己。<br><br>
                    別擔心，只要持續練習瑜珈，<br>就會更健康、更有活力、更加強壯！</p>
                </article>
                <article class="mamiyoga-intro-wrap-block">
                    <h2 id="title-secord">產後瘦身瑜珈是什麼</h2>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-1.png" alt="有氧舞蹈">
                    <p style="width:80%;margin:0 auto;">產後瑜珈是促進骨盆腔血液循環的運動，不管是剖腹產還是自然產，在這個期間都可依個人體質及傷口情況開始練習。</p>
                    <img style="margin-top:7vh;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-2.png" alt="肚皮舞">
                    <p style="width:80%;margin:0 auto;">產後瑜珈中的很多動作都有伸展、保護內臟及雕塑肌肉、增加彈性的功效。</p>
                </article>
                <article class="mamiyoga-intro-wrap-block">
                    <h3 id="title-third">把握產後黃金六個月<br>產後瘦身瑜珈消脂又緊實</h3>
                    <p>新媽媽可以好好把握時間，配合瑜珈動作，會讓你有意想不到的驚喜。<br><br>
                    適當產後瑜珈運動能改善血液循環、恢復皮膚張力以及減少脂肪堆積，更能消除腹部、臀部、大腿等處多餘的脂肪，恢復懷孕前的窈窕身姿。</p>
                </article>
                <video loop controls autoplay playsinline muted style="width:100%;margin:4vh 0 6vh;" poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video-preview.png">
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video.mp4">
                </video>
                <div class="mamiyoga-intro-btn">
                    <router-link to="/bmi" style="text-decoration: none;">
                        <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="先測BMI"></mamiyoga-btn>
                    </router-link>
                </div>
                <div class="mamiyoga-intro-btn">
                    <a href="/mamiyoga/teach" style="text-decoration: none;">
                        <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="體驗課程"></mamiyoga-btn>
                    </a>
                </div>
                <p style="margin-top:5vh;margin-bottom:0;color: #707070;font-size: 12px;text-align: center;">快和朋友分享吧！</p>
                <div class="mamiyoga-assay-share-icon-box">
                    <div class="mamiyoga-assay-share-icon">
                        <a href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-facebook.png" alt="">
                        </a>
                    </div>
                    <div class="mamiyoga-assay-share-icon">
                        <a href="https://www.addtoany.com/add_to/facebook_messenger?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-fb-icon-chat.png" alt="">
                        </a>
                    </div>
                    <div class="mamiyoga-assay-share-icon">
                        <a href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-twitter.png" alt="">
                        </a>
                    </div>
                    <div class="mamiyoga-assay-share-icon">
                        <a href="https://www.addtoany.com/add_to/wechat?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-wechat.png" alt="">
                        </a>
                    </div>
                    <div class="mamiyoga-assay-share-icon">
                        <a href="https://www.addtoany.com/share#url=http%3A%2F%2Fwww.ludonow.com%2Fmamiyoga&amp;title=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-more.png" alt="">
                        </a>
                    </div>
                </div>
                <p class="mamiyoga-intro-agree">&copy;2019 LUDO All Rights Reserved</p>
            </div>
        </div>



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
    </div>
</template>

<script>
import Vue from 'vue'
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaLoginSelect from '~/components/mamiyoga/MamiyogaLoginSelect.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import MamiyogaCarousel from '~/components/mamiyoga/MamiyogaCarousel.vue'
import Vue2TouchEvents from 'vue2-touch-events'
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config'
 
Vue.use(Vue2TouchEvents)
export default {
    // head(){
        // return  {
        //     script: [
        //         {src: 'https://code.jquery.com/jquery-3.4.1.min.js'},
        //         {src: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/owl.carousel.min.js'},
        //     ],
    //         title: 'MAMI YOGA',
    //         meta: [
    //             { charset: 'utf-8' },
    //             { hid: 'description', name: 'description', content: '' },
    //             { property : 'og:title' , content:""},
    //             { property : 'og:type' , content:"Mamiyoga"},
    //             { property : 'og:url' , content:"https://www.ludonow.com/mamiyoga"},
    //             { property : 'og:image' , content:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-to-facebook.jpg"},
    //             { property : 'og:description' , content:"yoga"},
    //             { property : 'og:site_name' , content:"www.ludonow.com"},
    //         ],
        // }
    // },
    layout:'mamiyoga',
    data:()=>({
        is_beta: false,
        is_open: false,
        slideIndex: 0,
        priceIndex: 0,
        commentIndex: 0,
        is_ui_config_loaded:false,
        ui_config: Object,
        course_data: Object,
        show_list: [],
        window_height: '',
    }),
    components: {
        MamiyogaHeader,
        MamiyogaBtn,
        MamiyogaLoginSelect,
        MamiyogaWindowAlertBox,
        MamiyogaCarousel
        // MamiyogaCarousel:()=>import('~/components/mamiyoga/MamiyogaCarousel.vue')
    },
    props: {
        title: String,
    },
    async mounted(){
        if(process.client) {
            window.onload = this.showSlides()
            window.onload = this.showComment()
            // window.onload = this.showPrice()
            // window.addEventListener('scroll',this.scrollHeight)
            window.onscroll = this.fixNav;
            this.ui_config = await require('~/config/mamiyoga-config')
            this.is_ui_config_loaded = true;
            this.course_data = await require('~/config/mamiyoga-course')
            localStorage.redirect = '/mamiyoga/menu';

            
            // $(".owl-carousel").owlCarousel();
            
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
    methods:{
        goTeach(){
            if (this.$i18n.locale == 'JP') {
                this.$router.push({path:'/jp/mamiyoga/teach'})
            } else if (this.$i18n.locale == 'zh-CN'){
                this.$router.push({path:'/zh-CN/mamiyoga/teach'})
            } else {
                this.$router.push({path:'/mamiyoga/teach'})
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
        showSlides() {
            var slides = document.getElementsByClassName("intro-wrap-block-second-slide");
            var dots = document.getElementsByClassName("dot");
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('slideInLeft');
                slides[i].classList.remove('slideIn');
                slides[i].classList.add('fade');  
                // slides[i].style.display = "none";  
            }
            // console.log(this.slideIndex)
            if (this.slideIndex > slides.length-1) {
                this.slideIndex = 0
            } else if( this.slideIndex < 0) {
                this.slideIndex = 4
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" index-dotactive", "");
            }
            slides[this.slideIndex].classList.add('slideIn');  
            slides[this.slideIndex].classList.remove('fade'); 
            // slides[this.slideIndex].style.display = "block";  
            dots[this.slideIndex].className += " index-dotactive";
            // setTimeout(this.showSlides.bind(this), 2000); // Change image every 2 seconds
        },
        showSlidesLeft() {
            var slides = document.getElementsByClassName("intro-wrap-block-second-slide");
            var dots = document.getElementsByClassName("dot");
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('slideInLeft');
                slides[i].classList.remove('slideIn');
                slides[i].classList.add('fade');  
                // slides[i].style.display = "none";  
            }
            // console.log(this.slideIndex)
            if (this.slideIndex > slides.length-1) {
                this.slideIndex = 0
            } else if( this.slideIndex < 0) {
                this.slideIndex = 4
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" index-dotactive", "");
            }
            slides[this.slideIndex].classList.add('slideInLeft');  
            slides[this.slideIndex].classList.remove('fade'); 
            // slides[this.slideIndex].style.display = "block";  
            dots[this.slideIndex].className += " index-dotactive";
            // setTimeout(this.showSlides.bind(this), 2000); // Change image every 2 seconds
        },
        nextSlides() {
            this.showSlides(this.slideIndex += 1);
        },
        lastSlides() {
            this.showSlidesLeft(this.slideIndex -= 1);
        },
        currentSlide(n) {
            this.showSlides(this.slideIndex = n-1);
        },
        showComment() {
            var slides = document.getElementsByClassName("intro-wrap-block-third-comment");
            var dots = document.getElementsByClassName("comment-dot");
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('slideInLeft');
                slides[i].classList.remove('slideIn');
                slides[i].classList.add('fade');  
                // slides[i].style.display = "none";  
            }
            // console.log(this.slideIndex)
            if (this.commentIndex > slides.length-1) {
                this.commentIndex = 0
            } else if( this.commentIndex < 0) {
                this.commentIndex = 5
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" comment-dotactive", "");
            }
            slides[this.commentIndex].classList.add('slideIn');  
            slides[this.commentIndex].classList.remove('fade'); 
            dots[this.commentIndex].className += " comment-dotactive";
        },
        showCommentLeft() {
            var slides = document.getElementsByClassName("intro-wrap-block-third-comment");
            var dots = document.getElementsByClassName("comment-dot");
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('slideInLeft');
                slides[i].classList.remove('slideIn');
                slides[i].classList.add('fade');  
                // slides[i].style.display = "none";  
            }
            // console.log(this.slideIndex)
            if (this.commentIndex > slides.length-1) {
                this.commentIndex = 0
            } else if( this.commentIndex < 0) {
                this.commentIndex = 5
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" comment-dotactive", "");
            }
            slides[this.commentIndex].classList.add('slideInLeft');  
            slides[this.commentIndex].classList.remove('fade'); 
            dots[this.commentIndex].className += " comment-dotactive";
        },
        nextComments() {
            this.showComment(this.commentIndex += 1);
        },
        lastComments() {
            this.showCommentLeft(this.commentIndex -= 1);
        },
        // currentSlide(n) {
        //     this.showSlides(this.commentIndex = n-1);
        // },
        // showPrice(){
        //     var slides = document.getElementsByClassName("intro-wrap-four-pay");
        //     var dots = document.getElementsByClassName("intro-pay-dot");
        //     for (var i = 0; i < slides.length; i++) {
        //         slides[i].classList.remove('slideInLeft');
        //         slides[i].classList.remove('slideIn');
        //         slides[i].classList.remove('float-left'); 
        //         // slides[i].classList.add('fade');  
        //     }
        //     // console.log(this.priceIndex)
        //     if (this.priceIndex > slides.length-1) {
        //         this.priceIndex = 0
        //     } else if( this.priceIndex < 0) {
        //         this.priceIndex = 2
        //     }
        //     for (i = 0; i < dots.length; i++) {
        //         dots[i].className = dots[i].className.replace(" intro-pay-dotactive", "");
        //     }
        //     console.log(this.priceIndex)
        //     slides[this.priceIndex].classList.add('slideIn');  
            
        //     slides[this.priceIndex].classList.add('float-left'); 
            
        //     // slides[this.priceIndex+1].classList.remove('fade');
           
            
        //     dots[this.priceIndex].className += " intro-pay-dotactive";
        // },
        // showPriceLeft(){
        //     var slides = document.getElementsByClassName("intro-wrap-four-pay");
        //     var dots = document.getElementsByClassName("intro-pay-dot");
        //     for (var i = 0; i < slides.length; i++) {
        //         slides[i].classList.remove('slideInLeft');
        //         slides[i].classList.remove('slideIn');
        //         slides[i].classList.add('fade');  
        //     }
        //     console.log(this.priceIndex)
        //     if (this.priceIndex > slides.length-1) {
        //         this.priceIndex = 0
        //     } else if( this.priceIndex < 0) {
        //         this.priceIndex = 2
        //     }
        //     for (i = 0; i < dots.length; i++) {
        //         dots[i].className = dots[i].className.replace(" intro-pay-dotactive", "");
        //     }
        //     slides[this.priceIndex].classList.add('slideInLeft');  
        //     slides[this.priceIndex].classList.remove('fade'); 
        //     dots[this.priceIndex].className += " intro-pay-dotactive";
        // },
        // nextPrice() {
        //     this.showPrice(this.priceIndex += 1);
        // },
        // lastPrice() {
        //     this.showPriceLeft(this.priceIndex -= 1);
        // },
        // currentPrice(n) {
        //     this.showPrice(this.priceIndex = n-1);
        // },
        toggleClass(index) {
            if (this.show_list[index] === 'open') {
                this.show_list = [];
            } else {
                this.show_list = [];
                this.show_list[index] = 'open'
            }
        },
        // scrollHeight(){
        //     this.window_height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // },
        fixNav(){
            let v_offset_top = document.getElementById('index-first-video').offsetTop;
            if(window.pageYOffset > v_offset_top) {
                document.getElementById('index-fixed-nav').classList.add('sticky')
                document.getElementById('index-fixed-footer').classList.add('footer-sticky')
            } else if (window.pageYOffset < v_offset_top) {
                document.getElementById('index-fixed-nav').classList.remove('sticky')
                document.getElementById('index-fixed-footer').classList.remove('footer-sticky')
            } 
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
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
/* .index-contain .hooper {
    height: auto;
} */
.mamiyoga-index-intro {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
}
.mamiyoga-intro-title {
    /* margin:10vh 0 35vh 0; 
    text-align: center;
    color: #EEEFEA;
    font-size: 35px; 
    text-shadow: 0 5px 10px rgba(0,0,0,.5) */
    display: block;
    margin: 10vh auto 25vh;
    width: 70vw;

}
.mamiyoga-intro-btn {
    margin: 0 auto 2vh; 
    width: 135px;
}
.mamiyoga-intro-agree {
    font-size: 12px;
    color: #DCD8CF;
    text-align: center;
    padding-bottom: 10px;
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
    height: 50px;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
}
.about-course-block {
    display: none;
    padding-bottom: 45px;
}
#about-course:checked ~ .index-label-box .about-course-btn,
#love-feedback:checked ~ .index-label-box .love-feedback-btn {
    opacity: 1;
    border-bottom: 2px solid #24798F;
}
#about-course:checked ~ .about-course-block {
    display: block;
}
.intro-wrap-block-first {
    width: 100vw;
    min-height: 610px;
    background-color: #F7F7F7;
    padding: 0 0 20px;
    border-radius: 0 0 40px 40px;

}
.intro-wrap-block-title {
    font-size: 18px;
    color:#707070;
    margin-left: 40px; 
}
.intro-wrap-block-first-content {
    font-size: 14px;
    padding: 5px 30px;
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
    width: 60%;
    height: 30px;
    color: #24798F;
    font-size: 13px;
    font-weight: 600;
}
.goto-buy-btn {
    width: 38%;
    height: 30px;
    border-style: none;
    border-radius: 5px;
    color: #f7f7f7;
    background: #FF9898;
}
.index-article-title {
    color: #24798F;
    font-size: 24px;
    text-align:left;
}
.index-article-little-title {
    font-size: 14px;
    margin: 15px 0;
}
.index-article-text {
    color: #707070;
    font-size: 14px;
    margin-bottom: 40px;
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
    color: #F7F7F7;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0px 5px 10px rgba(0,0,0,.2);
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
    width: 77%;
    margin: 0 auto;
}
.index-article-out-btn {
    width: 50%;
    border-style: none;
    margin: 60px auto 0;
    display: block;
    font-size: 17px;
    color: #F7F7F7;
    background: linear-gradient(180deg, #FF9A7B, #FF9898);
    height: 40px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.2);
}
.intro-wrap-block-second,
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
    min-height: 750px;
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
    width: 90%;
    background: #f7f7f7;
    border: 1px solid #bfbdbd;
    margin: 20px auto 0;
    border-radius: 10px;
}
.about-course-data-block {
    width: 85%;
    height: 50px;
    overflow: hidden;
    margin: 20px auto;
    text-align: center;
    transition: ease .4s;
    position: relative;
}
.about-course-data-block.open {
    height: 130px;
}
.about-course-data-block:nth-child(3).open,
.about-course-data-block:nth-child(4).open,
.about-course-data-block:nth-child(5).open,
.about-course-data-block:nth-child(6).open,
.about-course-data-block:nth-child(8).open,
.about-course-data-block:nth-child(10).open,
.about-course-data-block:nth-child(11).open,
.about-course-data-block:nth-child(12).open {
    height: 110px;
}
.about-course-data-block:nth-child(13).open {
    height: 140px;
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
    height: 690px;
    overflow: hidden;
}
.intro-wrap-block-second-content {
    width: 80%;
    height: 630px;
    margin: 20px 10% 0;
    border-radius: 30px;
    background: linear-gradient(#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA,#E4E7E3,#E4E7E3,#DCD8CF);
}
.intro-wrap-block-second-content img {
    /* width: 90%; */
    height: 78%;
    display: block;
    margin: 0 auto;
}
.intro-wrap-block-second-content p {
    color:#707070;
    font-size: 14px;
    padding-top: 50px;
    margin-bottom: 20px;
    /* margin: 0 0 20px 15%; */
    text-align: center;
}


.intro-wrap-children-logo {
    width: 70%;
    display: block;
    margin: 40px auto;
}
/* .intro-wrap-block-second-hooper .hooper-indicator {
    background-color:#D1D1D1;
    width: 7px;
    height: 7px;
    border-radius: 4px;
}
.intro-wrap-block-second-hooper .hooper-indicator.is-active,
.intro-wrap-block-second-hooper .hooper-indicator:hover {
    background: #707070;
} */
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
/* .float-left {
    float: left !important;
} */
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
.intro-wrap-block-third-comment {
    width: 85%;
    height: 300px;
    background: #F7F7F7;
    border-radius: 10px;
    margin: 30px auto;
    padding: 20px;
    position: relative;
}
.intro-wrap-block-third-comment-title {
    color: #24798F;
    font-size: 13px;
    font-weight: bold;
}
.intro-wrap-block-third-comment img {
    height: 15px;
    margin: 10px 0;
}
.intro-wrap-block-third-comment-text {
    color: #24798F;
    font-size: 13px;
    font-weight: 400;
}
.intro-wrap-block-third-comment-from {
    font-size: 12px;
    color: #707070;
    font-weight: 300;
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.hooper-comment-dot {
    display: flex;
    justify-content: center;
}
.comment-dot {
    width: 7px;
    height: 7px;
    background-color:#D1D1D1; 
    margin: 0 4px; 
    display: inline-block;
    border-radius: 4px;
}
.comment-dotactive {
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
    font-weight: lighter;
}
.intro-wrap-block-five-every-next {
    position: absolute;
    right: -10%;
    top: 50%;
    height: 15px;
}
.index-footer {
    height: 55px;
    width: 100%;
    background: #24798F;
    color: #EEEFEA;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 5px;
    font-size: 20px;
    visibility: hidden;
}
.footer-sticky {
    position: fixed;
    bottom: 0;
    z-index: 999;
    visibility: visible;
}
/*行銷變更內容*/
.background-video-contain {
    height: 100vh;
    overflow: hidden;
}
.mamiyoga-intro-wrap {
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    min-height: 200vh;
    padding-bottom: 5vh;
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



@media (min-width:769px) {
    .index-contain {
        width: 450px;
        /* height: 100vh; */
    }
    .mamiyoga-index-intro {
        width: 450px;
        height: 100vh;
    }
    .mamiyoga-intro-title {
        width: 70%;
    }
    .background-video {
        min-height: 100vh;
        width: auto;
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