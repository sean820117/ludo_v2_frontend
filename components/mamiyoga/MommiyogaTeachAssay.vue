<template>
    <div class="mamiyoga-assay-page">
        <div class="mamiyoga-assay-header" >
            <div class="mamiyoga-header-goback-btn" @click="clickCloseAssay">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/teach-goback.png" alt="">
            </div>
            <div style="display:flex;">
                <router-link to="/mommiyoga/aiassistant">
                    <div :style="{backgroundColor:'#9BAEB2',
                    backgroundImage:'url(https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/assay-record-btn.svg)',
                    marginRight:'10px'}" class="mamiyoga-header-login-btn" v-if="show_record_btn">
                    </div>
                </router-link>
                <div :style="{backgroundColor:'#9BAEB2',
                backgroundImage:'url(https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/assay-comment-btn.svg)',
                marginRight:'10px'}" @click="openCommentBlock" class="mamiyoga-header-login-btn">
                </div>
                <div :style="{backgroundColor:'#9BAEB2',backgroundImage:'url(https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/assay-repeat-btn.svg)'}" class="mamiyoga-header-login-btn">
                    <label style="width:55px;height:25px;display:block;"><input type="file" style="display:none;" accept="video/*" capture="camcorder" @change="clickRetryButton"></label>
                </div>
            </div>
        </div>
        <video class="mamiyoga-assay-video" controls>
                <source :src="video_result.output_video_url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="mamiyoga-open-icon" @click="showAssayContent" :class="showContentOrNot">
            <p>分析结果</p>
        </div>
        <div class="mamiyoga-open-background" :class="showContentOrNot"></div>
        <div class="mamiyoga-close-icon" @click="showAssayContent" :class="showContentOrNot"></div>
        <div class="mamiyoga-assay-box">
            <div class="mamiyoga-assay-content"  :class="showContentOrNot"  >
                <!-- <div @click="showAssayContent" v-touch:swipe="showAssayContent"> -->
                <div style="cursor:pointer;" @click="showAssayContent" v-touch:swipe="showAssayContent">
                    <div class="mamiyoga-assay-title"><h3>分析结果</h3></div>
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
                            <p style="margin-bottom:0;">准确率</p>
                            <div class="mamiyoga-assay-grade-num">
                                <h3>{{video_result.score}}</h3>
                                <p>%</p>
                            </div>
                        </div>
                        <p style="margin-top:4vh;margin-bottom:0;" class="share-text">快和朋友们分享这次的练习成果吧！</p>
                        <div class="mamiyoga-assay-share-icon-box">
                            <div class="mamiyoga-assay-share-icon">
                                <a href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmommiyoga&amp;linkname=" target="_blank">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-facebook.png" alt="">
                                </a>
                            </div>
                            <div class="mamiyoga-assay-share-icon">
                                <a href="https://www.addtoany.com/add_to/facebook_messenger?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmommiyoga&amp;linkname=" target="_blank">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-chat.png" alt="">
                                </a>
                            </div>
                            <div class="mamiyoga-assay-share-icon">
                                <a href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmommiyoga&amp;linkname=" target="_blank">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-twitter.png" alt="">
                                </a>
                            </div>
                            <div class="mamiyoga-assay-share-icon">
                                <a href="https://www.addtoany.com/add_to/wechat?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fmommiyoga&amp;linkname=" target="_blank">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-wechat.png" alt="">
                                </a>
                            </div>
                            <div class="mamiyoga-assay-share-icon">
                                <a href="https://www.addtoany.com/share#url=http%3A%2F%2Fwww.ludonow.com%2Fmommiyoga&amp;title=" target="_blank">
                                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-more.png" alt="">
                                </a>
                            </div>
                        </div>
                            <div class="mamiyoga-assay-contact-box" id="contact-us-box">
                            <p>分析结果不如预期吗？</p>
                            <button class="mamiyoga-assay-contact-btn" @click="show_contact_box = true">联络我们</button>
                        </div>
                    </div>
                    
                </div>
                
                <div class="mamiyoga-assay-contact-block" :class="showContactOrNot">
                    <mamiyoga-window-alert-box>
                        <div class="cancel-box" @click="show_contact_box = false">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
                        </div>
                        <p style="margin:10px auto 10px;width:150px;">您有遇到不了解的地方吗？</p>
                        <div class="star-line-box">
                            <input type="radio" class="questions first" id="answer-first" name="questions" value="verybad" v-model="impress">
                            <input type="radio" class="questions second" id="answer-second" name="questions" value="bad" v-model="impress">
                            <input type="radio" class="questions third" id="answer-third" name="questions" value="normal" v-model="impress">
                            <input type="radio" class="questions four" id="answer-four" name="questions" value="notbad" v-model="impress">
                            <input type="radio" class="questions five" id="answer-five" name="questions" value="good" v-model="impress"> 
                            <div class="select-questions">
                                <label for="answer-first" class="first-questions">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-01.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-checked-01.png" alt="">
                                </label>
                                <label for="answer-second" class="second-questions">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-02.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-checked-02.png" alt="">
                                </label>
                                <label for="answer-third" class="third-questions">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-03.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-checked-03.png" alt="">
                                </label>
                                <label for="answer-four" class="four-questions">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-04.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-checked-04.png" alt="">
                                </label>
                                <label for="answer-five" class="five-questions">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-05.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/babyface-icon/babyface-icon-checked-05.png" alt="">
                                </label>
                            </div>
                        </div>
                        <form action="">
                        <textarea name="message" id="" rows="7" class="contact-textarea" maxlength="150" style="resize:none;"
                        required placeholder="谢谢您的回馈，让我们尽速为您寻找解决方法" v-model="input_text"></textarea>
                        <p style="text-align:right;margin:5px;">{{input_text.length}}&nbsp;/&nbsp;150</p>
                        </form>
                        <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-space:0;margin-top:5px" @click="sendIdea()">送出</button>
                    </mamiyoga-window-alert-box>
                </div>
                
                <div class="mamiyoga-assay-star-block" :class="showStarOrNot">
                    <mamiyoga-window-alert-box>
                        <div class="cancel-box" @click="show_star_box = false">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
                        </div>
                        <p>请问您满意这次的分析结果吗？</p>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star-box-human.png" alt="">
                        <div class="star-line-box">
                            <input type="radio" class="stars first" id="first" value="one" name="star" v-model="picked_star">
                            <input type="radio" class="stars second" id="second" value="two" name="star" v-model="picked_star">
                            <input type="radio" class="stars third" id="third" value="three" name="star" v-model="picked_star">
                            <input type="radio" class="stars four" id="four" value="four" name="star" v-model="picked_star">
                            <input type="radio" class="stars five" id="five" value="five" name="star" v-model="picked_star">
                            <div class="select-star">
                                <label for="first" class="first-star">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star-checked.png" alt="">
                                </label>
                                <label for="second" class="second-star">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star-checked.png" alt="">
                                </label>
                                <label for="third" class="third-star">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star-checked.png" alt="">
                                </label>
                                <label for="four" class="four-star">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star-checked.png" alt="">
                                </label>
                                <label for="five" class="five-star">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star.png" alt="">
                                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star-checked.png" alt="">
                                </label>
                            </div>
                            <button class="mamiyoga-assay-contact-btn" @click="sendStarValue()" style="width:90px;letter-space:0;margin-top:5px">送出</button>
                        </div>
                    </mamiyoga-window-alert-box>
                </div>
                
                <div class="mamiyoga-assay-comment-box" :class="showCommentOrNot">
                    <mamiyoga-window-alert-box>
                        <div class="cancel-box" @click="openCommentBlock">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
                        </div>
                        <p>正在加紧脚步开发中！</p>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top: 20px;width:40%;">
                        <p style="font-size:13px;margin:15px 0px;">这是个可以分享影片<br>获得匿名学习夥伴回馈的功能</p>
                        <div class="star-line-box">
                            <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-space:0;margin-top:20px" @click="openCommentBlock">期待</button>
                        </div>
                    </mamiyoga-window-alert-box>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue'
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
import Vue2TouchEvents from 'vue2-touch-events'
import axios from '~/config/axios-config';
import { mapMutations, mapGetters } from 'vuex';

 
Vue.use(Vue2TouchEvents)
export default {
    props:{
        video_result: Object,
        show_record_btn: false,
        goRecord:String,
        pose_id: String,
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
        // show_comment_box:false,
        show_comment_box:false,
        picked_star:'',
        impress: '', 
    }),
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        MamiyogaBtn,
        MamiyogaTeachHeader,
        MamiyogaWindowAlertBox,
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
            this.show_contact_box = !this.show_contact_box;    
        },
        clickRetryButton(e){
            this.$emit('handleRetryEvent',e)
        },
        clickCloseAssay(){
            this.$emit('closeAssayWindow')
        },
        // openCommentBox(){
        //     this.show_comment_box = true
        // }
        openCommentBlock(){
            this.show_comment_box = !this.show_comment_box
        },
        closeAlertBox(){
            this.show_contact_box = false
        },
        async sendStarValue(){
            this.show_star_box = false;
            let send_user_id = '0000'
            let send_data = {user_id:send_user_id,question_id:this.pose_id+'_q1',rating:this.picked_star};
            if (this.user.user_id != '') {
                send_user_id = this.user.user_id
            }
            const form_res = await axios.post('/apis/send-feedback',send_data);
            console.log(form_res)
        },
        async sendIdea(){
            this.show_contact_box = false;
            let send_user_id = '0000'
            if (this.user.user_id != '') {
                send_user_id = this.user.user_id
            }
            let send_data = {user_id:send_user_id,question_id:this.pose_id+'_q2',rating:this.impress,text:this.input_text};
            console.log(send_data)
            const form_res = await axios.post('/apis/send-feedback',send_data);
            console.log(form_res.data.status)
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        showContentOrNot(){
            return this.show ? 'open':'';
        },
        showCommentOrNot(){
            return this.show_comment_box ? 'open':'';
        },
        showContactOrNot(){
            return this.show_contact_box ? 'open':'';
        },
        showStarOrNot(){
            return this.show_star_box && this.show ? 'open':'';
        },
    },
    
}
</script>

<style>
.mamiyoga-assay-page {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    overflow: hidden;
    position: relative;
}
.mamiyoga-header-goback-btn {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.mamiyoga-header-goback-btn img {
    width: 20px;
    height: 13px;
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
    cursor: pointer;
}
.mamiyoga-header-login-btn label {
    cursor: pointer;
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
.mamiyoga-assay-share-icon img {
    width: 36px;
    height: 36px;
    cursor: pointer;
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
    cursor: pointer;
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
    width: 80%;
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
    width: 25px;
    height: 30px;
    /* background: red; */
    margin: 0 4px ;
    /* background-image: url('/mamiyoga/star.png') ;
    background-repeat: no-repeat;
    background-size: 75%;  */
    cursor: pointer;
}
.select-star label img {
    width: 95%;
}
.select-star label img:last-child {
    display: none;
}
.stars.first:checked ~ .select-star .first-star img:first-child,
.stars.second:checked ~ .select-star .first-star img:first-child,
.stars.third:checked ~ .select-star .first-star img:first-child,
.stars.four:checked ~ .select-star .first-star img:first-child,
.stars.five:checked ~ .select-star .first-star img:first-child {
    display: none;
}
.stars.first:checked ~ .select-star .first-star img:last-child,
.stars.second:checked ~ .select-star .first-star img:last-child,
.stars.third:checked ~ .select-star .first-star img:last-child,
.stars.four:checked ~ .select-star .first-star img:last-child,
.stars.five:checked ~ .select-star .first-star img:last-child {
    display: block;
}
.stars.second:checked ~ .select-star .second-star img:first-child,
.stars.third:checked ~ .select-star .second-star img:first-child,
.stars.four:checked ~ .select-star .second-star img:first-child,
.stars.five:checked ~ .select-star .second-star img:first-child {
    display: none;
}
.stars.second:checked ~ .select-star .second-star img:last-child,
.stars.third:checked ~ .select-star .second-star img:last-child,
.stars.four:checked ~ .select-star .second-star img:last-child,
.stars.five:checked ~ .select-star .second-star img:last-child {
    display: block;
}
.stars.third:checked ~ .select-star .third-star img:first-child,
.stars.four:checked ~ .select-star .third-star img:first-child,
.stars.five:checked ~ .select-star .third-star img:first-child {
    display: none;
}
.stars.third:checked ~ .select-star .third-star img:last-child,
.stars.four:checked ~ .select-star .third-star img:last-child,
.stars.five:checked ~ .select-star .third-star img:last-child {
    display: block;
}
.stars.four:checked ~ .select-star .four-star img:first-child,
.stars.five:checked ~ .select-star .four-star img:first-child {
    display: none;
}
.stars.four:checked ~ .select-star .four-star img:last-child,
.stars.five:checked ~ .select-star .four-star img:last-child {
    display: block;
}
.stars.five:checked ~ .select-star .five-star img:first-child {
    display: none;
}
.stars.five:checked ~ .select-star .five-star img:last-child {
    display: block;
}

.select-questions {
    display: flex;
    justify-content: space-evenly;
    margin: 12px 0;
}
.select-questions label {
    /* display: block; */
    float: left;
    width: 35px;
    height: 30px;
    /* background: red; */
    margin: 0 4px;
    /* background-repeat: no-repeat;
    background-size: contain;  */
    cursor: pointer;
}
.select-questions label img {
    width: 95%;
}
.select-questions label img:nth-child(2) {
    display: none;
}
.questions.first:checked ~ .select-questions .first-questions img:first-child,
.questions.second:checked ~ .select-questions .second-questions img:first-child,
.questions.third:checked ~ .select-questions .third-questions img:first-child,
.questions.four:checked ~ .select-questions .four-questions img:first-child,
.questions.five:checked ~ .select-questions .five-questions img:first-child {
    display: none;
}
.questions.first:checked ~ .select-questions .first-questions img:last-child,
.questions.second:checked ~ .select-questions .second-questions img:last-child,
.questions.third:checked ~ .select-questions .third-questions img:last-child,
.questions.four:checked ~ .select-questions .four-questions img:last-child,
.questions.five:checked ~ .select-questions .five-questions img:last-child {
    display: block  !important;
}
.mamiyoga-assay-comment-box,
.mamiyoga-assay-contact-block,
.mamiyoga-assay-star-block {
    display: none;
}
.mamiyoga-assay-comment-box.open,
.mamiyoga-assay-contact-block.open,
.mamiyoga-assay-star-block.open {
    display: block;
}

@media (min-width: 769px) {
    .mamiyoga-assay-page,.mamiyoga-assay-page .mamiyoga-assay-header,
    .mamiyoga-assay-page .mamiyoga-assay-video,
    .mamiyoga-assay-page .mamiyoga-assay-box,
    .mamiyoga-assay-share-box,.mamiyoga-assay-page .mamiyoga-assay-contact-box,
    .mamiyoga-assay-page .mamiyoga-assay-share-icon-box {
        width: 100%;
    }
    .mamiyoga-assay-page .mamiyoga-assay-content {
        width: 90%;
        left: 5%;
    }
    .assay-grade-box {
        width: 75%;
    }
    .mamiyoga-open-icon, .mamiyoga-close-icon, .mamiyoga-open-background {
        display: none;
    }
}
@media (max-width: 769px) and  (orientation:portrait) {
    .mamiyoga-open-icon, .mamiyoga-close-icon, .mamiyoga-open-background {
        display: none;
    }
}
@media (max-width: 830px) and (min-width: 768px) and (orientation:landscape) {
    .mamiyoga-assay-page .mamiyoga-assay-video {
        height: calc(100% - 60px);
        float: left;
        width: 100%;
    }
    .mamiyoga-assay-page .mamiyoga-assay-box {
        width: 100%;
        height: calc(100% - 60px);
    }
    .mamiyoga-assay-page .mamiyoga-assay-content {
        height: 85vh;
        padding: 15px 15px 15px 0;
        position: fixed;
        top: 7.5vh;
        width: 87vw;
        display: none;
    }
    .mamiyoga-assay-page .mamiyoga-assay-content.open {
        display: block;
        top: 7.5vh;
    }
    .mamiyoga-assay-page .mamiyoga-assay-title {
        float: left;
        width: 40px;
        height: 50vh;
        border-radius: 0 25px 25px 0;
        margin: 10vh auto;
        padding: 9vh 1vh;
    }
    .mamiyoga-assay-content-box {
        width: 40vw;
        height: calc(85vh - 30px);
        float: left;
        margin-left: 2vw;
    }
    .share-text {
        display: none;
    }
    .mamiyoga-assay-share-box {
        width: 30vw;
        height: 70vh;
    }
    .assay-grade-box {
        width: 100%;
    }
    .mamiyoga-assay-page .mamiyoga-assay-share-icon-box {
        width: 5vw;
        height: 75vh;
        flex-wrap: wrap;
        position: absolute;
        right: 3vw;
        top: 5vh;
        align-items: center;
        margin: 0;
    }
    .mamiyoga-assay-page .mamiyoga-assay-contact-box {
        width: 30vw;
        margin-top: 20vh;
    }
    /*  */
    .mamiyoga-assay-grade-num h3 {
        font-size: 80px;
    }
    .mamiyoga-assay-contact-box .mamiyoga-assay-contact-btn {
        width: 100px;
    }
    .mamiyoga-open-icon {
        width: 50px;
        height: 50px;
        background: #97A8AF;
        z-index: 990;
        position: absolute;
        right: 4vw;
        bottom: 15vh;
        border-radius: 15px;
        padding: 4px;
        display: block;
    }
    .mamiyoga-open-icon p {
        font-size: 15px;
        color: #EEEFEA;
        text-align: center;
    }
    .mamiyoga-open-icon.open {
        display: none;
    }
    .mamiyoga-open-background {
        width: 100vw;
        height: 100vh;
        background: #000;
        opacity: .6;
        display: none;
        position: fixed;
        top: 0;
    }
    .mamiyoga-open-background.open {
        display: block;
    }
    .mamiyoga-close-icon {
        width: 30px;
        height: 30px;
        background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/assay-landscape-close.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;   
        z-index: 990;
        position: fixed;
        right: 2.5vw;
        top: 4vh;
        display: none;
    }
    .mamiyoga-close-icon.open {
        display: block;
    }
}
@media (max-width: 769px) and  (orientation:landscape) {
    .mamiyoga-assay-page .mamiyoga-assay-video {
        height: calc(100vh - 60px);
        float: left;
        width: 100vw;
    }
    .mamiyoga-assay-page .mamiyoga-assay-box {
        width: 90vw;
        height: calc(100vh - 60px);
    }
    .mamiyoga-assay-page .mamiyoga-assay-content {
        height: 85vh;
        padding: 15px 15px 15px 0;
        position: fixed;
        top: 7.5vh;
        width: 87vw;
        display: none;
    }
    .mamiyoga-assay-page .mamiyoga-assay-content.open {
        display: block;
        top: 7.5vh;
    }
    .mamiyoga-assay-page .mamiyoga-assay-title {
        float: left;
        width: 40px;
        height: 50vh;
        border-radius: 0 25px 25px 0;
        margin: 10vh auto;
        padding: 9vh 1vh;
    }
    .mamiyoga-assay-content-box {
        width: 40vw;
        height: calc(85vh - 30px);
        float: left;
        margin-left: 2vw;
    }
    .share-text {
        display: none;
    }
    .mamiyoga-assay-share-box {
        width: 30vw;
        height: 70vh;
    }
    .assay-grade-box {
        width: 100%;
    }
    .mamiyoga-assay-page .mamiyoga-assay-share-icon-box {
        width: 5vw;
        height: 75vh;
        flex-wrap: wrap;
        position: absolute;
        right: 3vw;
        top: 5vh;
        align-items: center;
        margin: 0;
    }
    .mamiyoga-assay-page .mamiyoga-assay-contact-box {
        width: 30vw;
        margin-top: 20vh;
    }
    /*  */
    .mamiyoga-assay-grade-num h3 {
        font-size: 80px;
    }
    .mamiyoga-assay-contact-box .mamiyoga-assay-contact-btn {
        width: 100px;
    }
    .mamiyoga-open-icon {
        width: 50px;
        height: 50px;
        background: #97A8AF;
        z-index: 990;
        position: absolute;
        right: 4vw;
        bottom: 15vh;
        border-radius: 15px;
        padding: 4px;
    }
    .mamiyoga-open-icon p {
        font-size: 15px;
        color: #EEEFEA;
        text-align: center;
    }
    .mamiyoga-open-icon.open {
        display: none;
    }
    .mamiyoga-open-background {
        width: 100vw;
        height: 100vh;
        background: #000;
        opacity: .6;
        display: none;
        position: fixed;
        top: 0;
    }
    .mamiyoga-open-background.open {
        display: block;
    }
    .mamiyoga-close-icon {
        width: 30px;
        height: 30px;
        background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/assay-landscape-close.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;   
        z-index: 990;
        position: absolute;
        right: 1.5vw;
        top: 4vh;
        display: none;
    }
    .mamiyoga-close-icon.open {
        display: block;
    }
} 

</style>
