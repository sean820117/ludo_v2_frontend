<template>
    <div class="info-page" :class="input_date ? 'after-input':''">
        <mamiyoga-hamburger-header v-if="$mq !== 'desktop'" ></mamiyoga-hamburger-header>
        <div class="info-wrap-block-first" v-if="$mq !== 'desktop'">
            <div v-if="!input_date">
                <div style="width:77%;margin: 0 auto;">
                    <h2 class="index-article-title" style="text-align: center;font-size: 35px;">{{$t('desktop_header_menu_4')}}</h2>
                    <div class="info-desktop-red-btn" v-if="!want_recommend" @click="getProject" style="margin: 20px auto 40px;">{{$t('desktop_info_btn_1')}}</div>
                    <div v-if="want_recommend" class="which-mami-flex" style="margin: 20px auto 40px;">
                        <input type="radio" name="which_mami" id="pregnant">
                        <input type="radio" name="which_mami" id="mami">
                        <label for="pregnant" class="info-desktop-red-btn pregnant" style="margin-top: 0;" @click="show_date_input = true , is_pregnant = true">{{$t('desktop_info_btn_2')}}</label>
                        <label for="mami" class="info-desktop-red-btn mami" style="margin-top: 0;" @click="show_date_input = true , is_pregnant = false">{{$t('desktop_info_btn_3')}}</label>
                    </div>
                    <div v-if="want_recommend && show_date_input" class="info-get-user-date">
                        <p>{{is_pregnant ? $t('desktop_info_input_1'):$t('desktop_info_input_2')}}</p>
                        <input type="date" name="date" id="date" v-model="user_date" placeholder="YYYY-MM-DD" style="width:100%;">
                        <div class="reg-text2" :style="{color: hint_color, textAlign: 'left', height: '20px'}">{{hint}}</div>
                        <div class="info-desktop-red-btn" @click="inputDate" style="width: 110px;margin: 35px auto 0;">{{$t('desktop_info_btn_4')}}</div>
                    </div>
                </div>
                <div style="width:77%;margin: 0 auto;">
                    <h3 class="index-article-title">骨盆是產後恢復最重要的事</h3>
                    <h6 class="index-article-little-title" style="color:#272727;margin-top:10px;">生完小孩後感到身體不斷發熱嗎？<br>產後一週還是覺得骨盆依然鬆弛嗎？<br>妳知道，這可能是一輩子病痛的開始嗎？</h6>
                    <p class="index-article-text">產後隨即進入新生活、工作、家事的無限循環，根本沒有時間上健身房與團體課來讓身體迅速復原。久而久之，脂肪容易囤積在下腹形成『游泳圈』，許多關節由於骨盆歪斜而承受不平衡的壓力，最後導致身體時常出現病痛。<br><br>黃金復原期只有短短的180天，在照顧孩子的同時又需要補充睡眠，半年的關鍵期一下子就錯過了。即使在醫院矯正骨盆，如果在生活中沒有長期改善，下半生還是難逃病痛纏身。<br><br>許多媽媽感嘆，出了月子中心半年內身體沒有回到以前的狀態，時間越久反而越難恢復，早知道就該更積極的保養身體了。</p>
                    <h3 class="index-article-title">日本媽媽<br>快速恢復身材的秘密</h3>
                    <h6 class="index-article-little-title" style="color:#272727;margin-top:10px;">我們深入研究了日本媽媽，發現日本媽媽的產後休息時間平均只有兩週，而臺灣媽媽卻要四週。從孕期體重管理到產後的修復，日本媽媽們貫徹了產後黃金修復的行動；而現在最流行也最有效的就是：『產後瑜珈』。</h6>
                    <p class="index-article-text">產後瑜珈最主要的功能就是幫助媽媽迅速恢復腹部肌肉、S曲線、以及縮小骨盆，讓媽媽們在產後迅速重拾對身材的自信、也能帶來身心的健康生活！<br><br>在家就能做的『產後瑜珈』<br>這是一堂專門為『沒有時間』的產後媽媽們設計的產後瑜珈線上課程。<br><br>課程分為14個單元，共33種動作，分門別類幫妳從骨盆、腰部、小腿、水腫、骨頭密度、心情放鬆等等，詳細動畫解說與姿勢矯正，解決妳無暇外出上課的問題。</p>
                </div>
            </div>
            <div v-else>
                <div class="info-pink-date">
                    <h6>{{is_pregnant ? $t('desktop_info_tag_1') : $t('desktop_info_tag_2')}}</h6>
                    <p>{{user_input_date}}</p>
                </div>
                <div class="info-white-article-block">
                    <div class="info-white-article-tag">{{$t('desktop_info_article')}}</div>
                    <h3 class="index-article-title">妳知道日本媽媽<br>快速恢復身材的秘訣嗎？</h3>
                    <h6 class="index-article-little-title" style="color:#272727;margin:25px 0 30px;width: unset;font-size: 20px;">日本媽媽的產後休息時間平均只有兩週，我們深入研究了日本媽媽在孕期體重管理到產後的修復，發現日本媽媽們貫徹了產後黃金修復要做的事情，而現在最流行也最有效的就是『產後瑜珈』。</h6>
                    <p style="color:#707070;">產後瑜珈最主要的功能就是幫助媽媽在半年期間迅速恢復腹部肌肉、S曲線、以及縮小骨盆，讓媽媽們在產後迅速恢復身材上的自信、也能帶來更好的健康生活！<br><br>在家就能做的『產後瑜珈』<br>這是一堂專門為『沒有時間』的產後媽媽們設計的線上產後瑜珈課程。<br><br>課程分為14個單元，共33種動作，分門別類幫妳從骨盆、腰部、小腿、水腫、骨頭密度、心情放鬆......等等，詳細的解說與動畫標示解決外出上課的問題。</p>
                    <div class="info-desktop-red-btn" style="margin: 20vh auto 0;" :style="{fontSize: $i18n.locale == 'JP'? '13px':''}" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/pay`)">{{$t('desktop_info_article_btn')}}</div>
                </div>
            </div>
        </div>
        <div v-else>
            <mamiyoga-desktop-nav-header bgColor="#24798f"></mamiyoga-desktop-nav-header>
            <div v-if="!input_date">
                <div class="info-wrap-block-first">
                    <div class="info-page-first-outside">
                        <div class="info-page-first-block">
                            <h3 class="index-article-title">骨盆是產後恢復最重要的事</h3>
                            <h6 class="index-article-little-title" style="color:#272727;margin-top:10px;">生完小孩後感到身體不斷發熱嗎？<br>產後一週還是覺得骨盆依然鬆弛嗎？</h6>
                            <div class="info-desktop-red-btn" v-if="!want_recommend" @click="getProject">{{$t('desktop_info_btn_1')}}</div>
                            <div v-if="want_recommend" class="which-mami-flex">
                                <input type="radio" name="which_mami" id="pregnant">
                                <input type="radio" name="which_mami" id="mami">
                                <label for="pregnant" class="info-desktop-red-btn pregnant" @click="show_date_input = true , is_pregnant = true">{{$t('desktop_info_btn_2')}}</label>
                                <label for="mami" class="info-desktop-red-btn mami" @click="show_date_input = true , is_pregnant = false">{{$t('desktop_info_btn_3')}}</label>
                            </div>
                            <div v-if="want_recommend && show_date_input" class="info-get-user-date">
                                <p>{{is_pregnant ? $t('desktop_info_input_1'):$t('desktop_info_input_2')}}</p>
                                <input type="date" name="date" id="date" v-model="user_date" placeholder="YYYY-MM-DD">
                                <div class="reg-text2" :style="{color: hint_color, textAlign: 'left', height: '20px'}">{{hint}}</div>
                                <div class="info-desktop-red-btn" @click="inputDate" style="width: 80px;">{{$t('desktop_info_btn_4')}}</div>
                            </div>
                        </div>
                        <div class="info-page-second-block">
                            <p>產後即將進入新生活、工作、家事的無限循環，沒有時間上健身房與團體課來讓身體迅速復原。久而久之，脂肪容易囤積在下腹形成『游泳圈』，許多關節由於骨盆歪斜而承受不平衡地壓力，最後導致身體時常出現病痛。<br><br>黃金復原期只有短短的180天，在照顧孩子的同時又需要補充睡眠，半年的時間一下子就不見了。即使在醫院得到骨盆矯正，如果在生活中沒有長期改善，問題依然會發生。<br><br>許多媽媽會感嘆，出了月子中心半年後身體並沒有回到以前的狀態，反而時間越久越難恢復，早知道就要更積極的保養身體了。</p>
                        </div>
                    </div>
                    <img @click="goDown" style="display: block;margin: 8vh auto 0;cursor: pointer;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-info-down.png" alt="">
                </div>
                <div class="info-wrap-block-first desktop-two" id="two-article">
                    <div class="info-page-first-outside">
                        <div class="info-page-first-block">
                            <h3 class="index-article-title">妳知道日本媽媽<br>快速恢復身材的秘訣嗎？</h3>
                            <h6 class="index-article-little-title" style="color:#272727;margin-top:10px;">日本媽媽的產後休息時間平均只有兩週，我們深入研究了日本媽媽在孕期體重管理到產後的修復，發現日本媽媽們貫徹了產後黃金修復要做的事情，而現在最流行也最有效的就是『產後瑜珈』。</h6>
                        </div>
                        <div class="info-page-second-block">
                            <p>產後瑜珈最主要的功能就是幫助媽媽在半年期間迅速恢復腹部肌肉、S曲線、以及縮小骨盆，讓媽媽們在產後迅速恢復身材上的自信、也能帶來更好的健康生活！<br><br>在家就能做的『產後瑜珈』<br>這是一堂專門為『沒有時間』的產後媽媽們設計的線上產後瑜珈課程。<br><br>課程分為14個單元，共33種動作，分門別類幫妳從骨盆、腰部、小腿、水腫、骨頭密度、心情放鬆......等等，詳細的解說與動畫標示解決外出上課的問題。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else style="display: flex;">
                <div class="info-pink-date">
                    <h6>{{is_pregnant ? $t('desktop_info_tag_1') : $t('desktop_info_tag_2')}}</h6>
                    <p>{{user_input_date}}</p>
                </div>
                <div class="info-white-article">
                    <div class="info-white-article-block">
                        <div class="info-white-article-tag">{{$t('desktop_info_article')}}</div>
                        <!-- <h3 class="index-article-title">妳知道日本媽媽<br>快速恢復身材的秘訣嗎？</h3>
                        <h6 class="index-article-little-title" style="color:#272727;margin:25px 0 30px;width: unset;font-size: 20px;">日本媽媽的產後休息時間平均只有兩週，我們深入研究了日本媽媽在孕期體重管理到產後的修復，發現日本媽媽們貫徹了產後黃金修復要做的事情，而現在最流行也最有效的就是『產後瑜珈』。</h6>
                        <p style="color:#707070;">產後瑜珈最主要的功能就是幫助媽媽在半年期間迅速恢復腹部肌肉、S曲線、以及縮小骨盆，讓媽媽們在產後迅速恢復身材上的自信、也能帶來更好的健康生活！<br><br>在家就能做的『產後瑜珈』<br>這是一堂專門為『沒有時間』的產後媽媽們設計的線上產後瑜珈課程。<br><br>課程分為14個單元，共33種動作，分門別類幫妳從骨盆、腰部、小腿、水腫、骨頭密度、心情放鬆......等等，詳細的解說與動畫標示解決外出上課的問題。</p> -->
                        <mamiyoga-medium-article :m_data="m_data"></mamiyoga-medium-article>
                        <div class="info-desktop-red-btn" style="margin: 20vh auto 0;" :style="{fontSize: $i18n.locale == 'JP'? '13px':''}" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/pay`)">{{$t('desktop_info_article_btn')}}</div>
                    </div>
                </div>
            </div>
        </div>
        <hr v-if="!input_date" style="color:#E8E8E8;margin: 0 10%;opacity:.5;">
        <div v-if="!input_date" class="intro-wrap-block-five" style="padding: 0 40px;">
            <h4 class="intro-wrap-block-title" style="margin:0;">獨家文章</h4>
            <p class="intro-wrap-block-text">LUDO身體科學誌</p>
            <div class="article-flex-box">
                <div class="medium-article-block-outside" v-for="(post,i) in m_data" :key="i" >
                    <div class="intro-wrap-block-five-every" @click="goOtherPage(post.post_url)">
                        <div class="intro-wrap-block-five-every-img" :style="{backgroundImage: 'url('+ post.post_img+ ')'}"></div>
                        <h2 class="intro-wrap-block-five-every-title">{{post.post_title}}</h2>
                        <p class="intro-wrap-block-five-every-text" v-html="post.preview_text.innerHTML.substr(0,50) + '...'"></p>
                    </div>
                    <img class="intro-wrap-block-five-every-next" @click="goOtherPage(post.post_url)" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/arrow-point-to-right.png" alt="">
                </div>
            </div>
            <!-- <div class="article-flex-box">
                <div class="intro-wrap-block-five-every" v-for="(post,i) in up_data" :key="i" @click="goOtherPage(post.post_url)">
                    <div class="intro-wrap-block-five-every-img" :style="{backgroundImage: 'url('+ post.post_img+ ')'}"></div>
                    <h2 class="intro-wrap-block-five-every-title">{{post.post_title}}</h2>
                    <p class="intro-wrap-block-five-every-text" v-html="post.preview_text.innerHTML.substr(0,50) + '...'"></p>
                    <img class="intro-wrap-block-five-every-next" @click="goOtherPage(post.post_url)" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/arrow-point-to-right.png" alt="">
                </div>
            </div>
            <div class="article-flex-box">
                <div class="intro-wrap-block-five-every" v-for="(post,i) in down_data" :key="i" @click="goOtherPage(post.post_url)">
                    <div class="intro-wrap-block-five-every-img" :style="{backgroundImage: 'url('+ post.post_img+ ')'}"></div>
                    <h2 class="intro-wrap-block-five-every-title">{{post.post_title}}</h2>
                    <p class="intro-wrap-block-five-every-text" v-html="post.preview_text.innerHTML.substr(0,50) + '...'"></p>
                    <img class="intro-wrap-block-five-every-next" @click="goOtherPage(post.post_url)" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/arrow-point-to-right.png" alt="">
                </div>
            </div> -->
            <!-- <div class="article-flex-box">
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
            </div>
            <div class="article-flex-box">
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
            </div> -->
        </div>
        <!-- <div class="info-footer">
            <div class="index-label-box" id="index-fixed-nav">
                    
                <div class="index-label-inside-box">
                    <p class="index-footer-title">Mami yoga日本人氣瑜珈</p>
                    <p class="index-footer-title delect-text">NTD.1590<s class="index-footer-title" style="font-size: 12px;margin-left:10px;">NTD.1990</s></p>
                </div>
                <div class="index-footer-content">
                    <div class="index-footer-btn" style="color:#EEEFEA;background: #24798F;" @click="clickToPay">我 要 購 買</div>
                    <div class="index-footer-btn" style="color:#24798F;" @click="$router.push('/mirror-mirror')">體 驗 魔 鏡</div>
                </div>
                
            </div>
            <div class="index-footer-btn" style="color:#EEEFEA;background: #24798F;" @click="clickToPay">我 要 購 買</div>
            <div class="index-footer-btn" style="color:#24798F;" @click="$router.push('/mirror-mirror')">體 驗 魔 鏡</div>

        </div> -->
        <!-- 愛心進度條 -->
        <div v-if="is_loading" id="loading">
            <svg id="loading-icon" viewBox="0 0 32 29.6">
                <path class="path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
	            C30,20.335,16,28.261,16,28.261z" fill="none" stroke-width="1" stroke="#FF9898"></path>
            </svg>
        </div>
        <!-- 新版alert -->
        <mamiyoga-new-window-alert-box v-if="show_alert" @closeBox="show_alert = false" :alertBtn="alertBtn"
        :alertTitle="alertTitle" :alertImg="alertImg" :alertText="alertText" :alertBtnColor="alertBtnColor"
        @enterBox="enterBox(nextGo)"></mamiyoga-new-window-alert-box>
    </div>
</template>
<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue'
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue'
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue'
import MamiyogaNewWindowAlertBox from '~/components/mamiyoga/MamiyogaNewWindowAlertBox.vue'
import MamiyogaMediumArticle from '~/components/mamiyoga/MamiyogaMediumArticle.vue'
import { mapMutations, mapGetters } from 'vuex';
// import {default as gg} from  'axios'
import axios from '~/config/axios-config'



export default {
    data:()=>({
        is_login: false,
        payed_or_not: false,
        go_to_where: '/signup',
        want_recommend: false,
        show_date_input: false,
        is_pregnant : false,
        user_date: '',

        input_date: false,
        is_loading: false,
        hint: '',
        hint_color: '',
        user_input_date: '',

        login_or_not:false,

        show_alert: false,
        alertTitle: '',
        alertImg: '',
        alertText: '',
        alertBtn: '好的',
        alertBtnColor: '#24798F',
        nextGo: '',

        m_data: [],
        up_data: [],
        down_data: [],
    }),
    components: {
        MamiyogaTeachHeader,
        MamiyogaHamburgerHeader,
        MamiyogaDesktopNavHeader,
        MamiyogaNewWindowAlertBox,
        MamiyogaMediumArticle,
    },
    // async asyncData () {
    //     const { data } = await gg.get('https://medium.com/feed/@ludonow')
    //     return { m_data: data }
    // },
    async mounted(){
        if(process.client) {
            location.href = '#';
            this.login_or_not = await this.$checkLogin(this.$store);
            if (this.login_or_not == false) {
                this.is_login = false
            } else {
                this.is_login = true
                this.payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
                // if(this.user.free_trial_starting_time){
                if(this.user.pregnant_data){
                    this.input_date = true
                    if(this.user.pregnant_data.is_pregnant){
                        this.is_pregnant = true
                        let d = this.user.pregnant_data.before_pregnant_date
                        this.user_input_date = (d.slice(0,4)) + '年' + (d.slice(5,7)) + '月' + (d.slice(8,10)) + '日'
                    } else {
                        this.is_pregnant = false
                        let current_date = new Date();
                        let current_time = current_date.getTime();
                        let user_time = Date.parse(this.user.pregnant_data.after_pregnant_date)
                        this.user_input_date = Math.floor((current_time - user_time) / 86400000) + '日'
                    }
                }
                // }
            }

            const { data } = await axios.get("/apis/mamiyoga-get-all-medium-articles")
            this.m_data = data
            console.log(this.m_data)
            this.getArticleUrl()
            this.up_data = data.slice(0,2)
            this.down_data = data.slice(2,4)
            

            if(this.$mq === 'desktop'){
                document.getElementById('go_info').classList.add('click-active');
            }
            
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    methods: {
        clickToPay(){
            this.$router.push(this.go_to_where)
        },
        goDown(){
            this.$scrollTo('#two-article',"start");
        },
        getProject(){
            if(this.login_or_not){
                if(!this.payed_or_not) {
                    localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/information`
                    this.show_alert = true
                    this.alertText = `${this.$t('desktop_go_pay')}`
                    this.alertBtn = `${this.$t('teach_button_ok')}`
                    this.nextGo = 'pay'
                } else {
                    this.want_recommend = true
                }
            } else{
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/information`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_go_login')}`
                this.alertBtn = `${this.$t('teach_button_ok')}`
                this.nextGo = 'login'
                // localStorage.redirect = '/information'
                // alert('請先前往註冊或登入！')
                // this.$router.push('/login')
            }
            
        },
        async inputDate(){
            if(this.user_date !== '') {
                let dateFormat = /^(\d{4})-(\d{2})-(\d{2})$/
                if(dateFormat.test(this.user_date)) {
                    let pregnant_data = {
                        is_pregnant: this.is_pregnant, 
                        after_pregnant_date: !this.is_pregnant ? this.user_date :'',
                        before_pregnant_date: this.is_pregnant ? this.user_date:''
                    }
                    const res = await axios.post('/apis/mamiyoga-set-pregnant-info',{pregnant_data: pregnant_data});
                    console.log(res)

                    this.$store.commit('user/updataPregnantData',pregnant_data);
                    // alert('已收到～')
                    this.is_loading = true
                    this.getUserTime();
                    setTimeout(() => {
                        this.input_date = true
                        this.is_loading = false
                    }, 3000);
                }else {
                    this.hint = '請依照格式填寫日期～'
                    this.hint_color = 'red'
                }
            }
        },
        getUserTime(){
            if(this.pregnant_data){
                if(this.pregnant_data.is_pregnant == true){
                    this.is_pregnant = true
                    let d = this.pregnant_data.before_pregnant_date
                    let user_input_date = (d.slice(0,4)) + '年' + (d.slice(5,7)) + '月' + (d.slice(8,10)) + '日'
                    this.user_input_date = user_input_date
                } else {
                    this.is_pregnant = false
                    let current_date = new Date();
                    let current_time = current_date.getTime();
                    let user_time = Date.parse(this.pregnant_data.after_pregnant_date)
                    let user_input_date = Math.floor((current_time - user_time) / 86400000) + '天'
                    this.user_input_date = user_input_date
                }
            }
        },
        enterBox(i){
            if(i == '0'){
                this.show_alert = false
            }else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/${i}`)
            }
        },
        getArticleUrl(){
            let url_array = []
            for(let i = 0; i < this.m_data.length; i++) {
                // console.log(this.m_data[i].post_content)
                let el = document.createElement('html')
                el.innerHTML = this.m_data[i].post_content
                // console.log(el)
                let a_tag = el.getElementsByTagName("a")
                url_array = Array.from(a_tag)
                let article_url = url_array.find(tag => tag.innerText == this.m_data[i].post_title)
                if(article_url) {
                    let h = article_url.getAttribute("href")
                    this.m_data[i].post_url = h
                }
                let fig_tag = el.getElementsByTagName("img")
                let fig_array = Array.from(fig_tag)
                let first_fig = fig_array[0]
                if(first_fig) {
                    let img = first_fig.getAttribute("src")
                    this.m_data[i].post_img = img
                }
                let main_content = el.getElementsByTagName("p")
                let content_array = Array.from(main_content)
                let first_content = content_array[0]
                if(first_content){
                    this.m_data[i].preview_text = first_content
                }
            }
        },
        goOtherPage(page){
            window.location.href = page
        }
    },
}
</script>
<style>
.reg-text2{
    margin-top: 11px;
    font-size: 13px;
    color: #8F8F8F;
}
.info-page {
    background: #EDEDED;
    padding-bottom: 95px;
}
.privacy-header button {
    display: none;
}
.info-wrap-block-first {
    width: 100%;
    min-height: 610px;
    background-color: #EDEDED;
    padding: 0 0 20px;
    /* border-radius: 0 0 40px 40px; */
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
.info-page .intro-wrap-block-title {
    font-size: 18px;
    color:#707070;
    margin-left: 40px; 
    padding-top:35px;
}
.info-page .intro-wrap-block-text {
    font-size: 12px;
    color: #707070;
    font-weight: 300;
}
.intro-wrap-block-five {
    width: 100%;
    /* height: 750px; */
    padding: 20px 0;
    /* height: 1050px; */
}
.intro-wrap-block-five-every {
    width: 95%;
    height: 220px;
    border: 1px solid rgba(191, 189, 189, .5);
    border-radius: 5px;
    margin-top: 20px;
    position: relative;
    cursor: pointer;
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
    /* position: absolute;
    right: -10%;
    top: 50%; */
    margin-left: 20px;
    height: 15px;
    cursor: pointer;
}
.info-footer {
    /* height: 60px; */
    width: 100%;
    background: #F7F7F7;
    color: #EEEFEA;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    position: fixed;
    bottom: 0;
    z-index: 999;
}
.index-label-box {
    width: 100%;
    /* height: 85px; */
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
    padding: 5px 0;
}
.index-label-inside-box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}
.sticky {
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 0 10px 10px rgba(0,0,0,.1);
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
.delect-text {
    color:#FF9898;
    font-size: 16px;
}
.index-footer-tag {
    font-size: 14px;
    background: #24798F;
    font-weight: 400;
    padding: 5px 15px;
    letter-spacing: 0;
}
.info-wrap-block-first .info-desktop-red-btn,
.info-white-article .info-desktop-red-btn{
    color: #F8F7F8;
    font-size: 16px;
    font-weight: bold;
    background: #C74F4F;
    border: 3px solid #C74F4F;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    margin-top: 35px;
    cursor: pointer;
    -webkit-user-select: none;
}
.which-mami-flex {
    display: flex;
}
.which-mami-flex input {
    display: none;
}
.info-desktop-red-btn.pregnant {
    margin-right: 5px;
    background:#FF9898;
    border-color:#FF9898;
}
.info-desktop-red-btn.mami {
    background:#FFF;
    color:#C74F4F;
}
#pregnant:checked ~ .info-desktop-red-btn.mami {
    border-color: #D1D1D1;
    color: #D1D1D1;
}
#mami:checked ~ .info-desktop-red-btn.pregnant {
    background: #d1d1d1;
    border-color: #d1d1d1;
}
.info-get-user-date {
    width: 60%;
    margin: 4vh auto 40px;
}
.info-get-user-date p {
    font-size: 12px;
    color: #707070;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
}
.info-get-user-date input {
    background: transparent;
    border-style: none;
    border-bottom: 1px #707070 solid;
    height: 30px;
    font-size: 14px;
}
.info-get-user-date input::placeholder {
    color: #D1D1D1;
}
#loading {
    position: fixed;
    width: 100%;
    min-height: 100vh;
    z-index: 999;
    background: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
#loading-icon {
    width: 100px;
}
.path {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: 3s drawing-svg 1s infinite;
}
@keyframes drawing-svg {
  100% {
    stroke-dashoffset: 0;
  }
}
.info-pink-date{
    position: absolute;
    top: 0;
    width: 100%;
    height: 140px;
    padding-top: 16px;
    background: #FF9898; 
}
.info-pink-date h6 {
    color: #ff9898;
    font-weight: 500;
    font-size: 15px;
    background: #fff;
    padding: 5px 25px;
    border-radius: 25px;
    width: fit-content;
    margin: 0 auto;
}
.info-pink-date p {
    font-size: 35px;
    color: #fff;
    margin-top: 25px;
    text-align: center;
}
.info-page.after-input {
    min-height: 100vh;
    padding-bottom: 20px;
}
.info-white-article-block {
    width: 85%;
    margin: 110px auto 0;
}
.info-white-article-tag {
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #24798f;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    border-radius: 25px;
    margin: 0 auto 30px;
}
.medium-article-block-outside {
    /* width: 50%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
@media(min-width: 769px) {
    .info-header {
        background: #F8F7F8;
    }
    .info-header img {
        width: 60px;
        margin: 20px 0 0 30px;
        cursor: pointer;
    }
    .info-page {
        background: #fff;
        padding-bottom: 160px;
    }
    .info-page.after-input {
        padding-bottom: 50px;
    }
    .info-page .intro-wrap-block-five {
        width: 100vw;
        height: auto;
    }
    .info-page .info-wrap-block-first {
        min-height: 85vh;
        background: #F8F7F8;
        padding: 25vh 0 0;
    }
    .info-page-first-outside {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        width: 80%;
        max-width: 1366px;
        margin: 0 auto;
    }
    .info-page .index-article-title {
        font-size: 48px;
        font-weight: bold;
    }
    .info-page .index-article-little-title {
        font-size: 25px;
        width: 35vw;
        margin: 15px 0 0;
    }
    .info-page-first-block {
        width: 100%;
    }
    .info-page-second-block {
        width: 60%;
    }
    .info-page-second-block p {
        color: #707070;
        font-size: 18px;
    }

    .info-page .intro-wrap-block-title {
        text-align: center;
        font-size: 30px;
        padding-top: 60px;
    }
    .info-page .intro-wrap-block-text {
        text-align: center;
        font-size: 37px;
        margin-top: 1vh;
        margin-bottom: 5vh;
    }
    .info-page .article-flex-box {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        max-width: 1366px;
        margin: 0 auto;
    }
    .info-page .article-flex-box a {
        max-width: 400px;
    }
    .intro-wrap-block-five-every {
        width: 85%;
        min-width: 270px;
        max-width: 350px;
    }
    .info-page .info-wrap-block-first.desktop-two {
        background:#fff;
        padding: 10vh 0 0 ;
        min-height: 45vh;
    }
    #index-fixed-nav {
        display: none;
    }
    .index-label-box {
        width: 100%;
        height: 100px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: unset;
        box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
        padding: 0 10vw;
    }
    .index-label-inside-box {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
    .index-footer-title {
        font-size: 25px;
        font-weight: bold;
        color:#24798F;
        letter-spacing: 0;
    }
    .delect-text {
        color:#FF9898;
        font-size: 25px;
    }
    .index-footer-tag {
        font-size: 14px;
        background: #24798F;
        font-weight: 400;
        padding: 5px 15px;
        letter-spacing: 0;
    }
    .index-footer-btn {
        width: 40%;
        height: 40px;
        border-radius: 10px;
        border: 3px solid #24798F;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .footer-sticky {
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .index-footer-content {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .info-get-user-date {
        margin: 4vh 0 0;
        width: 100%;
    }
    .info-pink-date {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        min-width: 350px;
        max-width: 550px;
        height: 100vh;
        background: #FF9898; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0;
    }
    .info-pink-date h6 {
        font-size: 25px;
        width: unset;
        margin: unset;
    }
    .info-pink-date p {
        font-size: 50px;
        color: #fff;
        margin-top: 25px;
        text-align: unset;
    }
    .info-white-article {
        width: 100%;
        display: flex;
    }
    .info-white-article::before{
        content: '';
        width: 40vw;
        min-width: 350px;
        max-width: 550px;
        height: 100vh;
        display: inline-block;
    }
    .info-white-article-block {
        width: 40%;
        margin: 180px auto 0;
    }
    .info-white-article-tag {
        margin: 0 auto 50px;
    }
    .medium-article-block-outside {
        width: 45%;
        justify-content: center;
    }

}
@media (min-width: 769px) and (max-width: 860px) {
    .info-page .info-wrap-block-first {
        padding: 25vh 5vw 5vh;
    }
    .info-page .info-wrap-block-first.desktop-two {
        padding: 10vh 5vw 10vh;
    }
    .info-page .index-article-title {
        font-size: 2.5em;
    }
    .info-page .index-article-little-title {
        width: 95%;
        font-size: 1.5em;
    }
    .index-footer-title {
        font-size: 21px;
    }
}
</style>