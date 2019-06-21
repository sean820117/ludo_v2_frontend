<template>
    <div class="mamiyoga-assay-page">
        <div class="mamiyoga-assay-header" >
            <div class="mamiyoga-header-goback-btn" @click="clickCloseAssay">
                <img src="/mamiyoga/teach-goback.svg" alt="">
            </div>
            <div style="display:flex;">
                <div :style="{backgroundColor:'#9BAEB2',
                backgroundImage:'url(/mamiyoga/assay-comment-btn.svg)',
                marginRight:'10px'}" @click="openCommentBox" class="mamiyoga-header-login-btn">
                </div>
                <div :style="{backgroundColor:'#9BAEB2',backgroundImage:'url(/mamiyoga/assay-repeat-btn.svg)'}" class="mamiyoga-header-login-btn">
                    <label style="width:55px;height:25px;display:block;"><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="clickRetryButton"></label>
                </div>
            </div>
        </div>
        <video class="mamiyoga-assay-video" controls>
                <source :src="video_result.output_video_url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="mamiyoga-assay-box">
            <div class="mamiyoga-assay-content"  :class="showContentOrNot"  >
                <!-- <div @click="showAssayContent" v-touch:swipe="showAssayContent"> -->
                <div @click="showAssayContent" v-touch:swipe="showAssayContent">
                    <div class="mamiyoga-assay-title"><h3>分析結果</h3></div>
                </div>
                <div class="mamiyoga-assay-content-box">
                    <div class="mamiyoga-assay-content-li"  v-for="(tags, i) in video_result.reps_wrong_tags" :key="i">
                        <h4 class="mamiyoga-assay-content-time">第{{i+1}}回</h4>
                        <hooper class="mamiyoga-assay-content-detailed-box">
                            <slide class="mamiyoga-assay-content-detailed" v-for="(tag ,index) in tags" :key="index">{{tag}}</slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                    </div>
                    <!-- <div class="mamiyoga-assay-content-li">
                        <h4 class="mamiyoga-assay-content-time">第1回</h4>
                        <hooper class="mamiyoga-assay-content-detailed-box">
                            <slide class="mamiyoga-assay-content-detailed">姿勢正確</slide>
                            <slide class="mamiyoga-assay-content-detailed">動作過快</slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                    </div> -->
                </div>
                <div style="padding-top:5h;">
                    <div class="mamiyoga-assay-share-box">
                        <div class="assay-grade-box">
                            <p style="margin-bottom:0;">準確率</p>
                            <div class="mamiyoga-assay-grade-num">
                                <h3>76</h3>
                                <p>%</p>
                            </div>
                        </div>
                        <p style="margin-top:4vh;margin-bottom:0;">快和朋友們分享這次的練習成果吧！</p>
                        <div class="mamiyoga-assay-share-icon-box">
                            <div class="mamiyoga-assay-share-icon">
                                <img src="/mamiyoga/share-icon-facebook.svg" alt="">
                                <!-- <p>Facebook</p> -->
                            </div>
                            <div class="mamiyoga-assay-share-icon">
                                <img src="/mamiyoga/share-icon-chat.svg" alt="">
                                <!-- <p>messenger</p> -->
                            </div>
                            <div class="mamiyoga-assay-share-icon">
                                <img src="/mamiyoga/share-icon-twitter.svg" alt="">
                                <!-- <p>Twitter</p> -->
                            </div>
                            <div class="mamiyoga-assay-share-icon">
                                <img src="/mamiyoga/share-icon-wechat.svg" alt="">
                                <!-- <p>WeChat</p> -->
                            </div>
                            <div class="mamiyoga-assay-share-icon">
                                <img src="/mamiyoga/share-icon-more.svg" alt="">
                            </div>
                        </div>
                            <div class="mamiyoga-assay-contact-box" id="contact-us-box">
                            <p>分析結果不如預期嗎？</p>
                            <button class="mamiyoga-assay-contact-btn" @click="openContactBox()">聯絡我們</button>
                        </div>
                    </div>
                    
                </div>
                <div class="mamiyoga-assay-contact-back" v-if="show_contact_box">
                    <div class="mamiyoga-assay-contact-open">
                        <div class="cancel-box" @click="show_contact_box = false">
                            <img src="/mamiyoga/cancel.svg" alt="">
                        </div>
                        <p style="margin:10px auto 10px;width:150px;">您有遇到不了解的地方嗎？</p>
                        <div class="star-line-box">
                            <input type="radio" class="questions first" id="first" name="questions">
                            <input type="radio" class="questions second" id="second" name="questions">
                            <input type="radio" class="questions third" id="third" name="questions">
                            <input type="radio" class="questions four" id="four" name="questions">
                            <input type="radio" class="questions five" id="five" name="questions">
                            <div class="select-questions">
                                <label for="first" class="first-questions"></label>
                                <label for="second" class="second-questions"></label>
                                <label for="third" class="third-questions"></label>
                                <label for="four" class="four-questions"></label>
                                <label for="five" class="five-questions"></label>
                            </div>
                        </div>
                        <form action="">
                        <textarea name="message" id="" rows="7" class="contact-textarea" maxlength="150" 
                        required placeholder="謝謝您的回饋，讓我們儘速為您尋找解決方法" v-model="input_text"></textarea>
                        <p style="text-align:right;margin:5px;">{{input_text.length}}&nbsp;/&nbsp;150</p>
                        <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-space:0;margin-top:20px" @click="show_contact_box = false">送出</button>
                        </form>
                    </div>
                </div>
                <div class="mamiyoga-assay-contact-back" v-if="show_star_box && show">
                    <div class="mamiyoga-assay-contact-open">
                        <div class="cancel-box" @click="show_star_box = false">
                            <img src="/mamiyoga/cancel.svg" alt="">
                        </div>
                        <p>請問您滿意這次的分析結果嗎？</p>
                        <img src="/mamiyoga/star-box-human.png" alt="">
                        <div class="star-line-box">
                            <input type="radio" class="stars first" id="first" name="star">
                            <input type="radio" class="stars second" id="second" name="star">
                            <input type="radio" class="stars third" id="third" name="star">
                            <input type="radio" class="stars four" id="four" name="star">
                            <input type="radio" class="stars five" id="five" name="star">
                            <div class="select-star">
                                <label for="first" class="first-star"></label>
                                <label for="second" class="second-star"></label>
                                <label for="third" class="third-star"></label>
                                <label for="four" class="four-star"></label>
                                <label for="five" class="five-star"></label>
                            </div>
                            <button class="mamiyoga-assay-contact-btn" @click="show_star_box = false" style="width:90px;letter-space:0;margin-top:20px">送出</button>
                        </div>
                    </div>
                </div>
                <div class="mamiyoga-assay-contact-back" v-if="show_comment_box">
                    <div class="mamiyoga-assay-contact-open">
                        <div class="cancel-box" @click="show_comment_box = false">
                            <img src="/mamiyoga/cancel.svg" alt="">
                        </div>
                        <p>正在加緊腳步開發中！</p>
                        <img src="/mamiyoga/comment-box-human.svg" alt="" style="margin: 30px auto 40px;">
                        <div class="star-line-box">
                            <button class="mamiyoga-assay-contact-btn" @click="show_comment_box = false" style="width:90px;letter-space:0;margin-top:20px">期待</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
import Vue2TouchEvents from 'vue2-touch-events'

 
Vue.use(Vue2TouchEvents)
export default {
    props:{
        video_result: Object,
    },
    data:()=> ({
        video_url: '',
        reps_wrong_tags:[],
        show: false,
        show_contact_box: false,
        show_star_box: false,
        is_shown_star_box: false,
        input_text: '',
        show_assay: true,
        is_loaded: true,
        show_comment_box:false,
    }),
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        MamiyogaBtn,
        MamiyogaTeachHeader,
    },
    methods:{
        showAssayContent(){
            this.show = !this.show
            console.log()
            if(!this.is_shown_star_box)  {
                this.is_shown_star_box = true
                setTimeout(()=>{
                    this.show_star_box = true
                },10000)
            }  
        },
        openContactBox(){
            this.show_contact_box = true
        },
        clickRetryButton(e){
            this.$emit('handleRetryEvent',e)
        },
        clickCloseAssay(){
            this.$emit('closeAssayWindow')
        },
        openCommentBox(){
            this.show_comment_box = true
        }
        // showContactBox(){
        //     this.$scrollTo('#contact-us-box','nearest');
        // }
    },
    computed:{
        showContentOrNot(){
            return this.show ? 'open':'';
        },
        
    },
}
</script>

<style>
@media (max-width: 899px) {
    .mamiyoga-assay-page {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
        overflow: hidden;
        position: relative;
    }
    .goback-btn {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .mamiyoga-header-login-btn {
        width: 55px;
        height: 25px;
        display: block;
        border-radius: 20px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, .3);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 35%;
    }
    .mamiyoga-assay-page .mamiyoga-assay-header {
        width: 100vw;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        z-index: 995;
    }
    .mamiyoga-assay-page .mamiyoga-assay-video {
        width: 100vw;
        height: calc(100vh - 115px);
    }
    
    .mamiyoga-assay-page .mamiyoga-assay-box {
        width: 100vw;
        padding: 0 15px;
        position: relative;
        height: 30vh;
    }
    .mamiyoga-assay-page .mamiyoga-assay-content {
        background: white;
        width: 90vw;
        height: 95vh;
        margin: 0 auto;
        border-radius:20px; 
        padding: 0 15px 5px 15px;
        position: absolute;
        top: 0;
        left: 5vw;
        /* top: -50px; */
        /* animation: uptosee 10s; */
        transition: 1s;
    }
    .mamiyoga-assay-page .mamiyoga-assay-content.open {
        top: calc(-85vh + 30px);
    }
    /* @keyframes uptosee {
        0% {
            top: 30vh ;
        }
        25%{
            top: -30px;
        }
        100% {
            top: -30px;
        }
    } */
    .mamiyoga-assay-page .mamiyoga-assay-title {
        width: 170px;
        height: 45px;
        background-color: #9BAEB2; 
        margin: 0 auto;
        padding: 5px;
        border-radius: 0 0 25px 25px;
        margin-bottom: 2vh;
        text-align: center;
        color: #fff;
    }
    .mamiyoga-assay-content-box {
        width: auto;
        height: 25vh;
        overflow-y: auto;
        overflow-x: hidden; 
    }
    .mamiyoga-assay-content-li {
        width: 95%;
        min-height: 50px;
        display: inline-flex;
        align-items: center;
        color: white;
        border-radius: 10px;
        margin: 10px 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,.2)
    }
    .mamiyoga-assay-content-li:nth-child(odd) {
        background-color:#D6D6D6; 
    }
    .mamiyoga-assay-content-li:nth-child(even) {
        background-color: #9A9A9A;
    }
    .mamiyoga-assay-content-time {
        font-weight: 500;
        padding: 0 25px;
        min-width: 90px;
        border-right: 2px #fff solid;
        font-size: 14px;
    }
    .mamiyoga-assay-content-detailed {
        padding: 5px 15px;
        font-size: 13px;
        align-self: auto;
        margin-bottom: 0; 
        /* max-width: 49vw; */
    }
    .mamiyoga-assay-contact {
        width: 150px;
        height: 80px;
        margin: 15px auto 0 auto;
    }
    .mamiyoga-assay-contact-explain {
        text-align: center;
        font-size: 12px;
        color: #BFBFBF; 
        margin-bottom: 5px;
        
    }
    .hooper {
        height: auto;
        position: relative;
        
    }
    .hooper-prev.is-disabled, .hooper-prev {
        position: absolute;
        top: 53%;
        left: -15px;
    }
    .hooper-next.is-disabled, .hooper-next {
        position: absolute;
        top: 53%;
        right: 80px;
    }
    .hooper-prev.is-disabled,.hooper-next.is-disabled,.hooper-prev {
        display: none;
    }
    .mamiyoga-assay-share-box {
        /* background: red; */
        width:80vw;
        height: 60vh;
        overflow: scroll;
        /* margin-top: 15vh; */
    }
    .mamiyoga-assay-share-box::-webkit-scrollbar {
        display: none;
    }   
    .assay-grade-box {
        width:75vw;
        margin:10px auto 0;
    }
    .mamiyoga-assay-page .mamiyoga-assay-grade-num {
        display: flex;
        justify-content: center;
        align-items: baseline;
        height: 15vh;
    }
    .mamiyoga-assay-grade-num h3 {
        font-size:100px;
        color:#97A8Af;
        text-align:center;
        font-weight:bold;
    }
    .share-to-panter {
        width:75vw;
        height:1vh;
    }
    .mamiyoga-assay-share-box p {
        color: #707070;
        text-align: center;
        font-size: 12px;
        margin-bottom: 1vh;
    }
    .mamiyoga-assay-page .mamiyoga-assay-share-icon-box {
        /* background: green; */
        width: 80vw;
        height: 7vh;
        display: flex;
        justify-content: space-between;
        margin: 2vh 0 4vh; 
    }
    .mamiyoga-assay-page .mamiyoga-assay-share-icon {
        width: 15vw;
        /* background: white; */
        height: 7vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .mamiyoga-assay-page .mamiyoga-assay-contact-box {
        width: 60vw;
        height: 20vh;
        /* background: red; */
        margin: 1vh auto 0 ;
    }
    .mamiyoga-assay-contact-box p {
        font-size: 12px;
        color:black;
        text-align: center;
        margin-bottom:10px; 
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
    }
    .mamiyoga-assay-contact-back {
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .mamiyoga-assay-contact-open {
        width: 260px;
        height: 330px;
        background: white;
        margin: 25vh auto;
        border-radius: 20px;
        padding: 15px;
    }
    .cancel-box {
        /* background: red; */
        height: 30px;
        width: 30px;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
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
    .contact-textarea {
        background: #F4F2F2;
        border: #CBCBCB solid 1px;
        margin: 0 auto;
        display: block;
        border-radius: 10px;
        padding: 10px;
        width: 230px;
    }
    .star-line-box input {
        display: none;
    }
    .select-star {
        width: 90%;
        height: 30px;
        /* background: green; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px auto 5px;
    }
    .select-star label {
        /* display: block; */
        float: left;
        width: 30px;
        height: 30px;
        /* background: red; */
        margin: 0 4px ;
        background-image: url('/mamiyoga/star.png') ;
        background-repeat: no-repeat;
        background-size: 75%; 
    }
    .stars.first:checked ~ .select-star .first-star,
    .stars.second:checked ~ .select-star .first-star,
    .stars.third:checked ~ .select-star .first-star,
    .stars.four:checked ~ .select-star .first-star,
    .stars.five:checked ~ .select-star .first-star {
        background-image: url('/mamiyoga/star-checked.png');
    }
    .stars.second:checked ~ .select-star .second-star,
    .stars.third:checked ~ .select-star .second-star,
    .stars.four:checked ~ .select-star .second-star,
    .stars.five:checked ~ .select-star .second-star {
        background-image: url('/mamiyoga/star-checked.png');
    }
    .stars.third:checked ~ .select-star .third-star,
    .stars.four:checked ~ .select-star .third-star,
    .stars.five:checked ~ .select-star .third-star {
        background-image: url('/mamiyoga/star-checked.png');
    }
    .stars.four:checked ~ .select-star .four-star,
    .stars.five:checked ~ .select-star .four-star {
        background-image: url('/mamiyoga/star-checked.png');
    }
    .stars.five:checked ~ .select-star .five-star {
        background-image: url('/mamiyoga/star-checked.png');
    }
    .select-questions {
        display: flex;
        justify-content: space-evenly;
        margin: 17px 0;
    }
    .select-questions label {
        /* display: block; */
        float: left;
        width: 35px;
        height: 30px;
        /* background: red; */
        margin: 0 4px;
        background-repeat: no-repeat;
        background-size: contain; 
    }
    .select-questions .first-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-01.svg');
    }
    .questions.first:checked ~ .select-questions .first-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-checked-01.svg');
    }
    .select-questions .second-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-02.svg');
    }
    .questions.second:checked ~ .select-questions .second-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-checked-02.svg');
    }
    .select-questions .third-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-03.svg');
    }
    .questions.third:checked ~ .select-questions .third-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-checked-03.svg');
    }
    .select-questions .four-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-04.svg');
    }
    .questions.four:checked ~ .select-questions .four-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-checked-04.svg');
    }
    .select-questions .five-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-05.svg');
    }
    .questions.five:checked ~ .select-questions .five-questions {
        background-image: url('/mamiyoga/babyface-icon/babyface-icon-checked-05.svg');
    }
    #checkseecontact:checked ~ .assay-grade-box {
        
    }
}
</style>
