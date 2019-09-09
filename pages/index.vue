<template>
    <!-- <div v-show="!show_loading"> -->
    <div>
        <div class="index-contain" v-if="!is_beta" style="min-height:100vh;overflow:visible;">
            <!-- <video muted loop autoplay playsinline class="background-video" >
                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-1.mp4" type="video/mp4">      
                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-2.mp4" type="video/mp4">      
            </video> -->
             <div class="background-video-contain">
                <video muted loop autoplay playsinline class="background-video" >
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-new-title-1.mp4" type="video/mp4">      
                </video>
            </div>
            <div class="mamiyoga-index-intro" style="position: absolute;">
                <mamiyoga-header bgColor="#9BAEB2" ftColor="#FFF" @openRemindBox="openRemindBox"></mamiyoga-header>
                <!-- <mamiyoga-index-header bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-index-header> -->
                <!-- <h2 class="mamiyoga-intro-title" v-html="title">
                    {{title}}
                </h2> -->
                <img :src="$t('index_img_title')" alt="" class="mamiyoga-intro-title">
                <div class="mamiyoga-intro-btn" @click="goTeach">
                    <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" :btnText="$t('index_button_free')"></mamiyoga-btn>
                </div>
                <div class="mamiyoga-intro-btn" @click="$router.push(check_log)">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_pay')" style="margin-bottom:5vh;" ></mamiyoga-btn>
                </div>
                <!-- <mamiyoga-login-select :is_beta="false"></mamiyoga-login-select> -->
                <mamiyoga-login-select v-if="!is_open && is_ui_config_loaded && !is_android" :login_method="ui_config.view.signup_page.login_method"></mamiyoga-login-select>
                <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="/agreement">用戶協議</a>&nbsp;和&nbsp;<a href="/privacy">隱私政策</a></p>
                <!-- <p class="mamiyoga-intro-agree" v-html="$t('index_agree_text')"></p> -->
                <div  style="display:flex;justify-content:center;flex-direction: column;align-items:center;margin:2vh auto 0;width: 15%;cursor:pointer;"  @click="goDown">
                    <p class="mamiyoga-intro-agree" style="padding:0;cursor:pointer;user-select:none;" @click="goDownWrap">了解更多</p>
                    <img style="width:30px;margin:1vh 0 0;cursor:pointer;" @click="goDownWrap" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-goto.png" alt="">
                </div>
            </div>
            <div class="mamiyoga-intro-wrap" style="background:white;" id="wrap">
                <input type="radio" id="about-course" name="index-select" checked>
                <input type="radio" id="love-feedback" name="index-select">
                <div class="index-label-box" id="index-fixed-nav">
                    <label class="about-course-btn" for="about-course" @click="switchBlock = true">課程介紹</label>
                    <label class="love-feedback-btn" for="love-feedback" @click="switchBlock = false">免費觀看</label>
                </div>
                <div class="about-course-block" id="index-first-video" v-if="switchBlock">
                    <div style="background: #F8F7F8;">
                        <div class="intro-wrap-block-first">
                            <video loop controls autoplay playsinline muted  class="index-wrap-video" poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video-preview.png">
                                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video.mp4">
                            </video>
                            <!-- <div class="iframe-container">
                                <iframe src="https://player.vimeo.com/video/347109517?muted=1&loop=1&autoplay=1" style="width: 100%;height:100%;position:absolute;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            </div> -->
                            <div class="intro-wrap-block-first-content">
                                <div style="display:flex;align-items:center;justify-content: space-between;">
                                    <h1>Mami yoga日本人氣瑜珈</h1>
                                    <div style="display: flex;align-items: center;">
                                        
                                        <img @click="copyUrl()" style="width: 23px;margin-right:5px;cursor:pointer;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-share-link.png" alt="">
                                        <a style="display:block;width: 23px;height: 23px;margin-right:5px;" href="https://www.addtoany.com/add_to/line?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                                            <img style="width: 23px;margin-right:5px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-share-line.png" alt="">
                                        </a>
                                        <a style="display:block;width: 23px;height: 23px;margin-right:5px;" href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                                            <img style="width: 23px;margin-right:5px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-share-fb.png" alt="">
                                        </a>
                                        <p style="color:#24798F;">分享</p>
                                    </div>
                                </div>
                                <p style="font-size:14px;margin:5px 0 0;font-weight:500;">講師 橋本麻美</p>
                                <div style="display:flex;align-items:center;justify-content: space-between;">
                                    <p>使用期限：影片永久/AI助教一年</p>
                                </div>
                                <div style="margin: 20px 0;display:flex;align-items: center;justify-content:space-between;">
                                    <select name="pay-program" class="select-pay-program" v-model="select_plan">
                                        <option selected :value="single_plan.price">{{single_plan.slogan}}&nbsp;&nbsp;NTD&nbsp;{{single_plan.price}}</option>
                                        <option :value="four_person_program.price">{{four_person_program.slogan}}(4人)&nbsp;NTD&nbsp;{{four_person_program.price}}</option>
                                        <option value="0">企業方案(30人)&nbsp;專人服務</option>
                                    </select>
                                    <button class="goto-buy-btn" @click="goPay">立即購買</button>
                                </div>
                            </div>
                            <img style="width:90%;display:block;margin:10px auto 40px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-data.png" alt="">
                            <div style="width:77%;margin: 0 auto;">
                                <h3 class="index-article-title">骨盆是產後恢復最重要的事</h3>
                                <p class="index-article-text" style="color:#272727;margin-top:10px;">生完小孩後感到身體不斷發熱嗎？<br>產後一週還是覺得骨盆依然鬆弛嗎？<br>妳知道，這可能是一輩子病痛的開始嗎？</p>
                                <h3 class="index-article-title">日本媽媽<br>快速恢復身材的秘密</h3>
                                <p class="index-article-text" style="color:#272727;margin-top:10px;margin-bottom:0;">我們深入研究了日本媽媽，發現日本媽媽的產後休息時間平均只有兩週，而臺灣媽媽卻要....</p>
                                <router-link to="/information" style="text-decoration:none;">
                                    <p class="index-article-text have-finger" style="color:#FF9898;text-align:right;font-weight:bold;margin-top:20px;margin-bottom:40px;user-select:none;">了解更多&nbsp;</p>
                                </router-link>
                                <img style="width:100%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-mami.png" alt="">
                                <h6 class="index-article-little-title">這是一堂專門為『沒有時間』的產後媽媽們設計的產後瑜珈線上課程。</h6>
                                <p class="index-article-text" style="color:#272727;">課程分為14個單元，共33種動作，分門別類幫妳從骨盆、腰部、小腿、水腫、骨頭密度、心情放鬆等等，詳細動畫解說與姿勢校正，解決妳無暇外出上課的問題。</p>
                            </div>
                        </div>
                        <div class="index-article-use-video">
                                <p class="index-article-out-container-text">獨家線上瑜珈助教</p>
                                <video class="index-article-use-video-sample" loop autoplay playsinline muted>
                                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-show-sample-video-2.mp4">
                                </video>
                            <p class="index-article-out-text" style="text-align: center;font-size: 12px;">我們特地將12項重點動作製作了線上輔助媽媽的瑜珈助教，對動作有疑惑、不確定是否做得正確</p>
                            <p class="index-article-out-text" style="text-align: center;margin-top: 35px;font-size: 16px;">只要上傳妳的練習影片，助教就會將錯誤的部分標示並且回傳給妳喔！</p>
                            <button @click="$router.push('/teach')" class="index-article-out-btn">免費體驗</button>
                        </div>
                    </div>
                    <div class="intro-wrap-block-second">
                        <h4 class="intro-wrap-block-title">課程預覽</h4>         
                        <div class="intro-wrap-block-second-hooper">
                            <no-ssr><mamiyoga-carousel-preview></mamiyoga-carousel-preview></no-ssr>
                            <!-- <div class="intro-wrap-block-second-slide ">
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
                            </div> -->
                        </div>
                    </div>
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
                    </div>
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
                        <div style="overflow:hidden;">
                            <no-ssr><mamiyoga-carousel-comments></mamiyoga-carousel-comments></no-ssr>
                        </div>
                    </div>
                    <!-- <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;"> -->
                    <div class="intro-wrap-block-four" style="height: 550px;">
                        <h4 class="intro-wrap-block-title" style="margin-left: 40px;">收費方式</h4>
                        <no-ssr><mamiyoga-carousel></mamiyoga-carousel></no-ssr>
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
                        <p class="about-articele-text" style="font-weight: bold;margin-top: 30px; margin-bottom: 5px;color:#24798F;">擔任日本屈指頂尖女子歌舞團體<br>E-girls的私家貼身瑜珈指導</p>
                        <p class="about-articele-text" style="font-weight: bold;margin-top: 30px; margin-bottom: 5px;color:#24798F;">一週的固定班底課程20堂以上<br>Instagram的追蹤人數兩萬人以上</p>
                        <div class="about-teacher-pic"></div>
                    </div>
                    <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;">
                    <div>
                        <div style="padding: 0 40px;">
                            <p class="intro-wrap-block-title" style="margin:0;padding-top:40px;color:#24798F;font-weight:600;">練習課表</p>
                            <p class="index-article-text" style="font-size:14px;font-weight:bold;margin-top:15px;margin-bottom: 5px;">我們為媽媽們設計了一套練習課表</p>
                            <p class="index-article-text" style="font-weight:300;margin-bottom: 10px;">交錯練習不同部位能有效地刺激肌肉的恢復狀況，早上、下午、晚上設想了媽媽與寶寶的生活步調，讓媽媽在家照顧寶寶時能夠一起做瑜珈。</p>
                        </div>
                        <div class="intro-wrap-block-new-five-curriculum" style="height:400px;overflow:hidden;">
                            <!-- <div class="intro-wrap-block-new-five-curriculum-block ">
                                <p>產後1-2個月</p>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-curriculum-1.png" alt="">
                            </div>
                            <div class="intro-wrap-block-new-five-curriculum-block fade">
                                <p>廣大女性</p>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-curriculum-2.png" alt="">
                            </div>
                            <div class="intro-wrap-block-new-five-curriculum-block fade">
                                <p>產後3-6個月</p>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-curriculum-3.png" alt="">
                            </div>
                            <div class="intro-wrap-block-new-five-curriculum-block fade">
                                <p>產後6-18個月</p>
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-curriculum-4.png" alt="">   
                            </div>
                            <div class="intro-wrap-block-new-five-curriculum-dot">
                                <span class="curriculum-dot" @click="curriculumSlide(1)"></span> 
                                <span class="curriculum-dot" @click="curriculumSlide(2)"></span> 
                                <span class="curriculum-dot" @click="curriculumSlide(3)"></span> 
                                <span class="curriculum-dot" @click="curriculumSlide(4)"></span> 
                            </div> -->
                            <no-ssr><mamiyoga-carousel-curriculum></mamiyoga-carousel-curriculum></no-ssr>
                        </div>
                        <div style="padding: 0 40px;">
                            <p class="intro-wrap-block-title" style="margin:0;color:#24798F;font-weight:600;">這堂課能夠幫助妳...</p>
                            <p class="index-article-text" style="margin-top:15px;font-weight: bold;">1、收緊骨盆<br>2、修復腹肌<br>3、減輕壓力<br>4、平衡自律神經<br>5、改善肩頸壓力<br>6、消除浮腫<br>7、改善骨頭密度</p>
                            <p class="intro-wrap-block-title" style="margin:0;color:#24798F;font-weight:600;">上課準備與提醒</p>
                            <p class="index-article-text" style="margin-top:15px;font-weight: 300;"><b>這堂課需要準備：</b><br><br><b>1、舒適的居家運動衣物</b><br>&nbsp;&nbsp;（例如：無/短袖、寬鬆長/短褲或瑜珈服）<br><b>2、緩衝地面的地墊、訓練墊或瑜珈墊<br>3、一顆積極想改變自己的心情</b></p>
                            <p class="intro-wrap-block-title" style="margin:0;color:#24798F;font-weight:600;">課程目標</p>
                            <p class="index-article-text" style="margin-top:15px;font-weight: bold;">在產後的黃金180天修復腹部肌肉、消除水腫，並且縮小骨盆。<br>修復媽媽生產後的身體、恢復完美體態。</p>
                            <p class="intro-wrap-block-title" style="margin:0;color:#24798F;font-weight:600;">適合對象</p>
                            <p class="index-article-text" style="margin-top:15px;font-weight: bold;">１、產後恢復的媽媽<br>２、任何想要保養體態的人</p>
                        </div>
                    </div>
                    <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;">
                    <div class="intro-wrap-block-five" style="padding: 0 40px;">
                        <h4 class="intro-wrap-block-title" style="margin:0;padding-top:35px;">獨家文章</h4>
                        <p style="font-size:12px;color:#707070;font-weight:300;">LUDO身體科學誌</p>
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
            <div class="index-footer" id="index-fixed-footer" @click="clickToPay">前往付款</div>
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
                    <router-link to="/teach" style="text-decoration: none;">
                        <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" :btnText="$t('index_button_free')"></mamiyoga-btn>
                    </router-link>
                </div>
                <div class="mamiyoga-intro-btn" @click="openRemindBox">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_pay')" style="margin-bottom:5vh;"></mamiyoga-btn>
                </div>
                <mamiyoga-login-select :is_beta="true"></mamiyoga-login-select>
                <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="">用戶協議</a>&nbsp;和&nbsp;<a href="/privacy">隱私政策</a></p>
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
                    <a href="/teach" style="text-decoration: none;">
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
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-fb-icon-chat-1.png" alt="">
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
                <p class="mamiyoga-intro-agree">contact us: contact@ludonow.com</p>
            </div>
        </div>

        <mamiyoga-window-alert-box v-if="is_android && show_android_box">
            <div class="cancel-box" @click="show_android_box = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-writing-submit.png" alt="" style="margin-top:30px;width:60%;">
            <p ><strong style="line-height:20px;">AI助教優先支援 iOS 手機顯示<br>其他裝置持續努力中，敬請期待！</strong><br><br>輸入電子信箱，我們會在準備好時邀請您</p>
            <input class="android-input" style="width:90%;" placeholder="輸入電子信箱" type="email" name="android-mail" id="android-mail" v-model="android_mail">
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-spacing:0;margin-top:20px;background:#24798F;" @click="subscriber">{{$t('teach_assay_button_development')}}</button>
            </div>
        </mamiyoga-window-alert-box>

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
import Vue2TouchEvents from 'vue2-touch-events'
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config'
import { EMAIL_REGEX } from '~/components/regex.js'
 
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
        is_ui_config_loaded:false,
        ui_config: Object,
        course_data: Object,
        show_list: [],
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
        // show_loading: true,
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
        MamiyogaCarouselCurriculum
        // MamiyogaCarousel:()=>import('~/components/mamiyoga/MamiyogaCarousel.vue')
    },
    props: {
        title: String,
    },
    async mounted(){
        if(process.client) {
            if(navigator.userAgent.match(/android/i)){
                this.is_android = true
                this.show_android_box = true
            }
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
            localStorage.redirect = '/mamiyoga/menu';
            
            this.previewCourse = this.course_data[0]
            // console.log(this.previewCourse)
            
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

            // this.$gtag('config', 'UA-136264503-1');
            // console.log(this.products)
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
        toggleClass(index) {
            if (this.show_list[index] === 'open') {
                this.show_list = [];
            } else {
                this.show_list = [];
                this.show_list[index] = 'open'
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
            let send_data = {email:this.android_mail,name: 'Android用戶'}
            if(this.android_mail == '') {
                alert('請輸入電子信箱')
            } else if(!EMAIL_REGEX.test(this.android_mail)){
                alert('電子信箱格式錯誤')
            } else {
                const res = await axios.post('/apis/subscribe-mamiyoga',send_data);
                alert('已收到您的電子信箱！敬請期待～')
                this.show_android_box = false
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
    margin: 5vh auto 25vh;
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
    user-select: none;
}
.about-course-block,.love-feedback-block  {
    /* display: none; */
    padding-bottom: 45px;
}
#about-course:checked ~ .index-label-box .about-course-btn,
#love-feedback:checked ~ .index-label-box .love-feedback-btn {
    opacity: 1;
    border-bottom: 2px solid #24798F;
}
/* #about-course:checked ~ .about-course-block,
#love-feedback:checked ~ .love-feedback-block {
    display: block;
} */
.intro-wrap-block-first {
    width: 100vw;
    min-height: 610px;
    background-color: #F7F7F7;
    padding: 0 0 20px;
    /* border-radius: 0 0 40px 40px; */

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
.index-article-use-video {
    border-radius: 40px 40px 0 0;
    position: relative;
    padding-top: 40px;
    background: #1b7184;
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
    color: #F7F7F7;
    font-size: 29px;
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 1px 0px #FF9898,0px 5px 10px rgba(0,0,0,.5);
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
    width: 50%;
    border-style: none;
    margin: 30px auto 0;
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #F7F7F7;
    background: linear-gradient(180deg, #FF9A7B, #FF9898);
    height: 40px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.2);
    letter-spacing: 3px;
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
/* .intro-wrap-block-second-content {
    width: 80%;
    height: 630px;
    margin: 20px 10% 0;
    border-radius: 30px;
    background: linear-gradient(#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA,#E4E7E3,#E4E7E3,#DCD8CF);
}
.intro-wrap-block-second-content img {
    height: 78%;
    display: block;
    margin: 0 auto;
}
.intro-wrap-block-second-content p {
    color:#707070;
    font-size: 14px;
    padding-top: 50px;
    margin-bottom: 20px;
    text-align: center;
} */


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
    cursor: pointer;
}
.footer-sticky {
    position: fixed;
    bottom: 0;
    z-index: 999;
    visibility: visible;
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
.love-feedback-block .iframe-container {
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