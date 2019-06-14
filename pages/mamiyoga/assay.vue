<template>
    <div class="mamiyoga-assay-page">
        <video class="mamiyoga-assay-video" controls>
                <source :src="video_url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="goback-btn">
            <router-link to="/mamiyoga/teach">
                <!-- <div class="goback-line"></div> -->
                <img src="/mamiyoga/assay-back.svg" alt="">
            </router-link>
        </div>
        <div class="mamiyoga-assay-box">
            <div class="mamiyoga-assay-content"  :class="showContentOrNot"  >
                <div @click="showAssayContent" v-touch:swipe="showAssayContent">
                    <div class="mamiyoga-assay-title"><h3>分析結果</h3></div>
                </div>
                <div class="mamiyoga-assay-content-box">
                    <div class="mamiyoga-assay-content-li"  v-for="(tags, i) in reps_wrong_tags" :key="i">
                        <h4 class="mamiyoga-assay-content-time">第{{i+1}}回</h4>
                        <hooper class="mamiyoga-assay-content-detailed-box">
                            <slide class="mamiyoga-assay-content-detailed" v-for="(tag ,index) in tags" :key="index">{{tag}}</slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                    </div>
                </div>
                <div v-touch:swipe="showAssayContent" style="padding-top:12vh;">
                    <div class="mamiyoga-assay-share-box">
                        <p>喜歡這次的練習嗎？分享出去</p>
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
                    </div>
                    <div class="mamiyoga-assay-contact-box">
                        <p>分析結果不如預期嗎？</p>
                        <button class="mamiyoga-assay-contact-btn" @click="openContactBox()">聯絡我們</button>
                    </div>
                </div>
                <div class="mamiyoga-assay-contact-back" v-if="show_contact_box">
                    <div class="mamiyoga-assay-contact-open">
                        <div class="cancel-box" @click="show_contact_box = false">
                            <img src="/mamiyoga/cancel.svg" alt="">
                        </div>
                        <p>遇到了什麼問題嗎？</p>
                        <form action="">
                        <textarea name="message" id="" rows="7" class="contact-textarea" maxlength="150" 
                        required placeholder="你的回饋可以更好的幫助我們優化練習體驗" v-model="apple"></textarea>
                        <p style="text-align:right;margin:5px;">{{apple.length}}&nbsp;/&nbsp;150</p>
                        <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-space:0;margin-top:20px" @click="show_contact_box = false">送出</button>
                        </form>
                    </div>
                </div>
                <div class="mamiyoga-assay-contact-back" v-if="show_star_box && show">
                    <div class="mamiyoga-assay-contact-open">
                        <div class="cancel-box" @click="show_star_box = false">
                            <img src="/mamiyoga/cancel.svg" alt="">
                        </div>
                        <p>對這次的練習結果分析滿意嗎？</p>
                        <img src="/mamiyoga/star-box-human.svg" alt="">
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
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
import Vue2TouchEvents from 'vue2-touch-events'

 
Vue.use(Vue2TouchEvents)
export default {
    data:()=> ({
        video_url: 'test',
        reps_wrong_tags:[['脖子要稍微提高，不然會受傷唷！'],['做得非常正確唷！'],['手掌心是向內，感覺肌肉在支撐手臂']],
        show: false,
        show_contact_box: false,
        show_star_box: false,
        is_shown_star_box: false,
        apple: '',
    }),
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        MamiyogaBtn,
    },
    methods:{
        showAssayContent(){
            this.show = !this.show
            if(!this.is_shown_star_box)  {
                this.is_shown_star_box = true
                setTimeout(()=>{
                    this.show_star_box = true
                },10000)
            }  
        },
        openContactBox(){
            this.show_contact_box = true
        }
    },
    computed:{
        showContentOrNot(){
            return this.show ? 'open':'';
        } 
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
    .mamiyoga-assay-video {
        width: 100vw;
        height: 100vh;
    }
    .goback-btn {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .goback-line {
        width: 20px;
        height: 5px;
        background: #EEEFEA;
        transform: rotate(-45deg);
        position: absolute;
        top: 3px;
        left: 5px;
        border-radius: 25px;
    }
    .goback-line::after {
        content: '';
        width: 20px;
        height: 5px;
        background: #EEEFEA;
        transform: rotate(90deg);
        position: absolute;
        top: 8px;
        left: -8px;
        border-radius: 25px;
    }
    .mamiyoga-assay-box {
        width: 100vw;
        padding: 15px;
        position: relative;
        height: 30vh;
    }
    .mamiyoga-assay-content {
        background: white;
        width: 90vw;
        height: 95vh;
        margin: 0 auto;
        border-radius:20px; 
        padding: 0 15px 5px 15px;
        position: absolute;
        /* top: -30px; */
        left: 5vw;
        top: -50px;
        /* animation: uptosee 10s; */
        transition: 1s;
    }
    .mamiyoga-assay-content.open {
        top: -90vh;
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
    .mamiyoga-assay-title {
        width: 170px;
        height: 45px;
        background-color: #9BAEB2; 
        margin: 0 auto;
        padding: 5px;
        border-radius: 0 0 25px 25px;
        margin-bottom: 15px;
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
        max-width: 49vw;
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
        height: 15vh;
        /* margin-top: 15vh; */
    }
    .mamiyoga-assay-share-box p {
        color: #707070;
        text-align: center;
        font-size: 12px;
        margin-bottom: 1vh;
    }
    .mamiyoga-assay-share-icon-box {
        /* background: green; */
        width: 80vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
    }
    .mamiyoga-assay-share-icon {
        width: 15vw;
        /* background: white; */
        height: 10vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .mamiyoga-assay-contact-box {
        width: 60vw;
        height: 15vh;
        /* background: red; */
        margin: 7vh auto 0 ;
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
    }
    .mamiyoga-assay-contact-open {
        width: 260px;
        height: 320px;
        background: white;
        margin: 25vh auto;
        border-radius: 30px;
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
        background-image: url('/mamiyoga/star.svg') ;
        background-repeat: no-repeat;
        background-size: 75%; 
    }
    .stars.first:checked ~ .select-star .first-star,
    .stars.second:checked ~ .select-star .first-star,
    .stars.third:checked ~ .select-star .first-star,
    .stars.four:checked ~ .select-star .first-star,
    .stars.five:checked ~ .select-star .first-star {
        background-image: url('/mamiyoga/star-checked.svg');
    }
    .stars.second:checked ~ .select-star .second-star,
    .stars.third:checked ~ .select-star .second-star,
    .stars.four:checked ~ .select-star .second-star,
    .stars.five:checked ~ .select-star .second-star {
        background-image: url('/mamiyoga/star-checked.svg');
    }
    .stars.third:checked ~ .select-star .third-star,
    .stars.four:checked ~ .select-star .third-star,
    .stars.five:checked ~ .select-star .third-star {
        background-image: url('/mamiyoga/star-checked.svg');
    }
    .stars.four:checked ~ .select-star .four-star,
    .stars.five:checked ~ .select-star .four-star {
        background-image: url('/mamiyoga/star-checked.svg');
    }
    .stars.five:checked ~ .select-star .five-star {
        background-image: url('/mamiyoga/star-checked.svg');
    }

}
</style>
