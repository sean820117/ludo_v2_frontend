<template>
    <div>
        <div class="index-contain" v-if="!is_beta" style="min-height:300vh;overflow:visible;">
            <!-- <video muted loop autoplay playsinline class="background-video" >
                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-1.mp4" type="video/mp4">      
                <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-index-2.mp4" type="video/mp4">      
            </video> -->
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
                <img :src="$t('index_img_title')" alt="" class="mamiyoga-intro-title">
                <div class="mamiyoga-intro-btn" @click="goTeach">
                    <mamiyoga-btn bgColor="#EEEFEA" ftColor="#707070" :btnText="$t('index_button_free')"></mamiyoga-btn>
                </div>
                <div class="mamiyoga-intro-btn" @click="is_open = true">
                    <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" :btnText="$t('index_button_pay')" style="margin-bottom:5vh;" ></mamiyoga-btn>
                </div>
                <!-- <mamiyoga-login-select :is_beta="false"></mamiyoga-login-select> -->
                <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="/mamiyoga/agreement">用戶協議</a>&nbsp;和&nbsp;<a href="/mamiyoga/privacy">隱私政策</a></p>
                <!-- <p class="mamiyoga-intro-agree" v-html="$t('index_agree_text')"></p> -->
                <div  style="display:flex;justify-content:center;flex-direction: column;align-items:center;margin:2vh auto 0;width: 15%;cursor:pointer;"  @click="goDown">
                    <p class="mamiyoga-intro-agree" style="padding:0;cursor:pointer;" @click="goDownWrap">了解更多</p>
                    <img style="width:30px;margin:1vh 0 0;cursor:pointer;" @click="goDownWrap" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-goto.png" alt="">
                </div>
            </div>
            <div class="mamiyoga-intro-wrap" style="background:white;" id="wrap">
                <div class="intro-wrap-block-first">
                    <h3 class="intro-wrap-block-title">課程介紹</h3>
                    <video loop controls autoplay playsinline muted style="width:100%;margin: 10px 0;" poster="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video-preview.png">
                        <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-wrap-video.mp4">
                    </video>
                    <div class="intro-wrap-block-first-content">『Mami yoga日本人氣瑜珈』<br><br>以教學影片結合動作校正AI，開設的互動式線上課程。<br>與日本人氣瑜珈老師橋本麻美合作，推出14堂課程包含33個動作，針對產後2~6個月黃金修復期的課程。<br>使用者能夠觀看教學影片，並透過手機鏡頭拍攝自己的練習動作，取得分析與修正建議。</div>
                    <img style="width:75%;display:block;margin:40px auto 0;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-1.png" alt="">
                </div>
                <div class="intro-wrap-block-children">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-children-logo-1.png" alt="">
                </div>
                <div class="intro-wrap-block-second" v-touch:swipe.left="nextSlides" v-touch:swipe.right="lastSlides">
                    <h3 class="intro-wrap-block-title">課程預覽</h3>
                    <div class="intro-wrap-block-second-hooper">
                        <div class="intro-wrap-block-second-slide fade">
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
                <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;">
                <div class="intro-wrap-block-third">
                    <div style="display:flex;justify-content:space-between;padding:20px 60px 0 50px;">
                        <div>
                            <h3 class="intro-wrap-block-title" style="margin:0;padding-top:35px;">評分與評論</h3>
                            <p style="color:#24798F;font-size:80px;font-weight:bold;margin-top:15px;height:80px;">4.8</p>
                        </div>
                        <img style="height:170px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-7.png" alt="">
                    </div>
                    <div class="intro-wrap-block-third-score">
                        <p style="color:#707070;font-size: 14px;letter-spacing:3px;">使用平均分數</p>
                        <img style="height: 20px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                    </div>
                </div>
                <hr style="color:#E8E8E8;margin: 0 10%;opacity:.5;">
                <div class="intro-wrap-block-five" style="padding: 0 40px;">
                    <h3 class="intro-wrap-block-title" style="margin:0;padding-top:35px;">獨家文章</h3>
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
                    <router-link to="/mamiyoga/teach" style="text-decoration: none;">
                        <mamiyoga-btn bgColor="#97A8AF" ftColor="#E8EAE6" btnText="體驗課程"></mamiyoga-btn>
                    </router-link>
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
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import Vue2TouchEvents from 'vue2-touch-events'

 
Vue.use(Vue2TouchEvents)
export default {
    // head(){
    //     return  {
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
    //     }
    // },
    layout:'mamiyoga',
    data:()=>({
        is_beta: false,
        is_open: false,
        slideIndex:0,
    }),
    components: {
        MamiyogaHeader,
        MamiyogaBtn,
        MamiyogaLoginSelect,
        Hooper,
        Slide,
        HooperPagination,
        MamiyogaWindowAlertBox,
    },
    props: {
        title: String,
    },
    mounted(){
        if(process.client) {
            window.onload = this.showSlides()
        }
        window.addEventListener('scroll',function(){
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        if(top > 600){
            document.getElementById('title-first').classList.add('slideInDown')    
        }
        if(top > 1000){
            document.getElementById('title-secord').classList.add('slideInDown')    
        }
        if(top > 1500){
            document.getElementById('title-third').classList.add('slideInDown')    
        }
        })
        
        
    },
    methods:{
        goTeach(){
            if (this.$i18n.locale == 'JP') {
                this.$router.push({path:'/jp/mamiyoga/teach'})
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
                slides[i].style.display = "none";  
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
            slides[this.slideIndex].style.display = "block";  
            dots[this.slideIndex].className += " index-dotactive";
            // setTimeout(this.showSlides.bind(this), 2000); // Change image every 2 seconds
        },
        nextSlides() {
            this.showSlides(this.slideIndex += 1);
        },
        lastSlides() {
            this.showSlides(this.slideIndex -= 1);
        },
        currentSlide(n) {
            this.showSlides(this.slideIndex = n-1);
        }
    },
    computed:{

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
    height: 100vh;
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
.intro-wrap-block-first {
    width: 100vw;
    height: 610px;
    background-color: #F7F7F7;
    padding: 20px 0;
    border-radius: 0 0 40px 40px;

}
.intro-wrap-block-title {
    font-size: 18px;
    color:#707070;
    margin-left: 20px; 
}
.intro-wrap-block-first-content {
    font-size: 14px;
    padding: 5px 30px;
    color: #707070;
}
.intro-wrap-block-second,
.intro-wrap-block-third,
.intro-wrap-block-five {
    width: 100vw;
    height: 750px;
    padding: 20px 0;
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
}
.intro-wrap-block-second-content {
    width: 90%;
    height: 630px;
    margin: 20px 5% 0;
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
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: .5s;
  animation-name: fade;
  animation-duration: .5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
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
        height: 100vh;
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