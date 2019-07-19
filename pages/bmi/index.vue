<template>
    <div class="bmi-index-page">
        <bmi-header></bmi-header>
        <div class="bmi-tag">
            <input type="radio" id="bmitool" name="tools" checked  @click="show_bmi_tool = true">
            <label class="bmi-label" for="bmitool"><h1>BMI值計算機</h1></label>
            <input type="radio" id="teddtool" name="tools" @click="show_bmi_tool = false">
            <label class="tedd-label" for="teddtool"><h5>TDEE值計算機</h5></label>
        </div>
        <div class="bmi-tag-first" v-if="show_bmi_tool">
            <div class="bmi-index-content">
                <h2 style="margin-top:4vh;">BMI值計算公式： BMI = 體重(公斤)/身高²(公尺²)</h2>
                <p style="font-weight:400;">例如：一個50公斤的人，身高是161公分，則BMI為：<br>50(公斤)/1.61²(公尺²)=19.2</p>
                <p style="color:#000;margin-top:3vh;">體重正常範圍為 BMI=18.5~24</p>
            </div>
            <div class="bmi-index-content">
                <p style="color:#000;font-weight:400;margin-top:3vh;">快看看自己的BMI是否在理想範圍內吧！</p>
                <h3 style="color:#3855A3;font-weight:400;text-decoration:underline;" @click="have_consult = true">點我數值參考</h3>
                <!-- <form>
                    <div class="bmi-index-form-input">
                        <div class="bmi-index-form-input-li">
                            <div>
                                身高<div v-if="$mq == 'desktop'">(height)</div>
                                <input type="number" id="height" name="height"  min="50" max="250">
                                <div v-if="$mq == 'desktop'">公分(</div>cm<div v-if="$mq == 'desktop'">)</div></div>
                            <div class="bmi-index-form-input-button" v-if="$mq == 'mobile'" @click="getBmi">開始計算</div>
                        </div>
                        <div class="bmi-index-form-input-li">
                            <div>
                                體重<div v-if="$mq == 'desktop'">(weight)</div>
                                <input type="number" id="weight" name="weight"  min="50" max="250">
                                <div v-if="$mq == 'desktop'">公斤(</div>kg<div v-if="$mq == 'desktop'">)</div></div>
                            <button type="reset" class="bmi-index-form-input-button" v-if="$mq == 'mobile'">清除計算</button>
                        </div>
                        <div class="bmi-index-form-input-li" v-if="$mq == 'desktop'">
                            <div class="bmi-index-form-input-button" @click="getBmi">開始計算</div>
                            <button type="reset" class="bmi-index-form-input-button">清除計算</button>
                        </div>
                    </div>
                </form> -->
            </div>
            <div class="bmi-index-content">
                <form class="bmi-index-form">
                    <div class="bmi-index-form-input-li sexual">
                        <p>性別：</p>
                        <div class="bmi-index-form-input-label">
                            <input type="radio" id="girl" value="girl" name="sexual" checked v-model="sexual">
                            <label for="girl" class="first-label">女</label>
                            <input type="radio" id="boy" value="boy" name="sexual" v-model="sexual">
                            <label for="boy" class="second-label">男</label>
                        </div>
                    </div>
                    <div class="bmi-index-form-input-li human-height">
                        <p>身高（公分）：</p>
                        <div class="bmi-index-form-input-value">
                            <input type="number" id="height" name="height" :placeholder="heightText" v-model="height">
                        </div>
                    </div>
                    <div class="bmi-index-form-input-li human-height">
                        <p>體重（公斤）：</p>
                        <div class="bmi-index-form-input-value">
                            <input type="number" id="weight" :placeholder="weightText" name="weight" v-model="weight">
                        </div>
                    </div>
                    <div class="bmi-index-form-input-li">
                        <div class="bmi-index-form-input-button" style="background-color: #3855A3;margin-bottom: 5px;" @click="getBmi">開始計算</div>
                        <button class="bmi-index-form-input-button" style="background-color: #9A9A9A;" type="reset">清除</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="bmi-tag-second" v-if="!show_bmi_tool">
            <div class="bmi-index-content">
                <p style="margin:4vh auto 0;font-weight:400;text-align:left;width:75vw;">透過基礎代謝率（BMR）以及運動習慣，我們能夠透過公式得出每日消耗熱量（TDEE）。TDEE可以幫助妳/你掌握每天的營養攝取量以及運動量。</p>
            </div>
            <div class="bmi-index-content">
                <form class="bmi-index-form">
                    <div class="bmi-index-form-input-li sexual">
                        <p>性別：</p>
                        <div class="bmi-index-form-input-label">
                            <input type="radio" id="tdeegirl" value="tdeegirl" name="tdeesexual" v-model="tdeesexual" checked>
                            <label for="tdeegirl" class="first-label">女</label>
                            <input type="radio" id="tdeeboy" value="tdeeboy" name="tdeesexual" v-model="tdeesexual">
                            <label for="tdeeboy" class="second-label">男</label>
                        </div>
                    </div>
                    <div class="bmi-index-form-input-li human-height">
                        <p>年齡：</p>
                        <div class="bmi-index-form-input-value">
                            <input type="number" id="tdeeyear" name="tdeeyear" :placeholder="tyearText">
                        </div>
                    </div>
                    <div class="bmi-index-form-input-li human-height">
                        <p>身高（公分）：</p>
                        <div class="bmi-index-form-input-value">
                            <input type="number" id="tdeeheight" name="height" :value="height" :placeholder="theightText">
                        </div>
                    </div>
                    <div class="bmi-index-form-input-li human-height">
                        <p>體重（公斤）：</p>
                        <div class="bmi-index-form-input-value">
                            <input type="number" id="tdeeweight" name="weight" :value="weight" :placeholder="tweightText">
                        </div>
                    </div>
                    <div class="bmi-index-form-input-li human-height">
                        <p>活動量：</p>
                        <div class="bmi-index-form-input-value">
                            <select v-model="selected">
                                <option value="1">久坐，幾乎不運動</option>
                                <option value="2">一週輕鬆運動3-5天</option>
                                <option value="3">一週中等強度運動3-5天</option>
                                <option value="4">一週高強度運動3-5天</option>
                                <option value="5">每天高強度訓練，或一天訓練兩次以上</option>
                                <option value="6">勞力密集的工作</option>
                            </select>
                        </div>
                    </div>
                    <div class="bmi-index-form-input-li">
                        <div class="bmi-index-form-input-button" style="background-color: #3855A3;margin-bottom: 5px;" @click="getTdee">開始計算</div>
                        <button class="bmi-index-form-input-button" style="background-color: #9A9A9A;" type="reset">清除</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- <div class="bmi-index-content bmi-index-end" style="margin-top:3vh;">
            <p style="color:#000;font-weight:400;">你的BMI為</p>
            <div class="bmi-index-form-end"><input type="number" disabled="disabled" :placeholder="bmi_result"></div>
            <div class="bmi-index-form-end-share">
                <button @click="openShareBox">分享</button>
            </div>
        </div> -->
        <!-- <div class="bmi-index-content bmi-index-end ds-end" v-if="$mq == 'desktop'" style="margin-top:3vh;">
            <div class="bmi-index-form-end">
                <p style="color:#000;font-weight:400;float:left;font-size:14px;">你的BMI為</p>
                <input type="number" disabled="disabled" :placeholder="ds_result">
                <div class="bmi-index-form-end-share">
                    <button style="font-size:14px;" @click="openShareBox">分享</button>
                </div>
            </div>
            
        </div> -->
        <!-- <div class="bmi-index-content" style="margin-top:10vh;">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi.png" alt="">
        </div> -->
        <div class="bmi-index-content">
            <div id="fb-root"></div>
            <div class="fb-share-button" style="display:none;" data-href="https://www.ludonow.com/bmi" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ludonow.com%2Fbmi&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">分享</a></div>
            <p style="margin-top:5vh;font-weight:300;">&copy; 2019 LUDO All Rights Reserved</p>
        </div>
        <!-- <div class="bmi-share-box" :class="is_open ? 'open':''">
            <div class="bmi-share-container" id="result">
                <div class="bmi-share-close" @click="is_open = false"></div>
                <p style="color:#000;font-weight:400;">你的BMI為</p>
                <h5 v-if="have_input" >{{bmi_result}}</h5>
                <div style="margin-top: 3vh;" v-if="!have_input">
                    <img src="/bmi/bmi-result-0.png" alt="">
                    <p style="height:32px;margin-top:3vh;display:flex;align-items:center;justify-content:center;">{{result_text}}</p>
                </div>
                <div style="margin-top:3vh;display:flex;align-items:center;justify-content:center;" v-if="have_input">
                    <img :src="'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-result-'+result_img+'.png'" alt="">
                    
                    <p style="margin-left:6px;">{{result_text}}</p>
                </div>
                <div class="bmi-share-icon-box">
                    <div class="bmi-share-icon">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-copy.png" alt="" @click="copyUrl()">
                        <p>複製連結</p>
                    </div>
                    <div class="bmi-share-icon">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.ludonow.com/bmi" 
                        style="text-decoration: none" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-facebook.png" alt="">
                        </a>
                        <p>facebook</p>
                    </div>
                    
                    <div class="bmi-share-icon">
                        <a class="a2a_dd" href="https://www.addtoany.com/share">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-more.png" alt="">
                        </a>
                        <p>更多</p>
                    </div>
                </div>
            </div>
            <textarea id="urlCopied" cols="30" rows="1"></textarea>
        </div> -->
        <div class="bmi-consult-box" :class="have_consult ? 'open':''">
            <div class="bmi-consult-container" :class="have_consult ? 'open':''" v-touch:swipe="function(){have_consult = false}">
                <div class="bmi-share-close" @click="have_consult = false"></div>
                <h5>數值參考</h5>
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-new.png" alt="BMI 標準值">
                <div style="position:fixed;width:100vw;height:54vh;top:0;left:0;" @click="have_consult = false"></div>
            </div>
        </div>
        <div class="bmi-result-box" :class="have_result ? 'open':''">
            <div class="bmi-result-container" v-touch:swipe="function(){have_result = false}">
                <div class="bmi-share-close" @click="have_result = false"></div>
                <h5 style="margin-top:-24px;">計算結果</h5>
                <p style="font-size:12px;margin-top:2vh;">你的BMI為</p>
                <p style="font-size:60px;">{{render_bmi}}</p>
                <p style="font-size:13px;">{{result_text}}</p>
                
                <!-- <img style="margin-top:2vh;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-tool-result-1.jpg" alt=""> -->
                <!-- <div class="gif-box">
                    <div style="width:100%;height:100%;position:relative;"><iframe :src="gifImg" width="100%" height="100%" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
                </div> -->
                <div class="gif-box">
                    <div style="width:100%;height:100%;position:relative;"><img :src="gifImg" width="100%" height="100%" style="" frameBorder="0" class="giphy-embed" allowFullScreen alt="女性 bmi"></div>
                </div>
                <h5 style="width:auto;margin-top:0;">{{animals_result}}</h5>
                <div class="bmi-share-icon-box">
                    <div class="bmi-share-icon">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/icon-share-copy.png" alt="年齡分佈" @click="copyUrl()">
                        <p>複製連結</p>
                    </div>
                    <div class="bmi-share-icon">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.ludonow.com/bmi" 
                        style="text-decoration: none" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/icon-share-facebook.png" alt="體脂肪率">
                        </a>
                        <p>facebook</p>
                    </div>
                    <div class="bmi-share-icon">
                        <a href="https://www.addtoany.com/add_to/facebook_messenger?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fbmi&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-messager.png" alt="BMI計算器">
                        </a>
                        <p>Messenger</p>
                    </div>
                    <div class="bmi-share-icon">
                        <a href="https://www.addtoany.com/add_to/line?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fbmi&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-line.png" alt="BMI怎麼計算">
                        </a>
                        <p>Line</p>
                    </div>
                </div>
                <div class="bmi-index-form-input-button bmi-result-btn" style="background-color: #3855A3;" @click="sendTdee">TDEE值計算機</div>
            </div>
            <div style="position:fixed;width:100vw;height:100px;top:0;" @click="have_result = false"></div>
        </div>
        <div class="bmi-result-box" :class="have_tdee_result ? 'open':''">
            <div class="bmi-result-container" v-touch:swipe="function(){have_tdee_result = false}">
                <div class="bmi-share-close" @click="havee_tdee_result = false"></div>
                <h5 style="margin-top:-24px;">計算結果</h5>
                <p style="font-size:13px;margin-top:2vh;">你的健康攝取量為</p>
                <div style="font-size:60px;display:flex;align-items:baseline;justify-content:center;">{{render_tdee}}<p style="font-size:17px;">大卡</p></div>
                <div class="gif-box">
                    <div style="width:100%;height:100%;position:relative;"><img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-sport-yoga.gif" width="100%" height="100%" style="" frameBorder="0" class="giphy-embed" allowFullScreen alt="tedd"></div>
                </div>
                <h5 style="width:auto;margin-top:0;">最適合的運動是：瑜珈</h5>
                <div class="bmi-share-icon-box">
                    <div class="bmi-share-icon">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/icon-share-copy.png" alt="BMI計算器" @click="copyUrl()">
                        <p>複製連結</p>
                    </div>
                    <div class="bmi-share-icon">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.ludonow.com/bmi" 
                        style="text-decoration: none" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/icon-share-facebook.png" alt="tedd">
                        </a>
                        <p>facebook</p>
                    </div>
                    <div class="bmi-share-icon">
                        <a href="https://www.addtoany.com/add_to/facebook_messenger?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fbmi&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-messager.png" alt="BMI 標準值">
                        </a>
                        <p>Messenger</p>
                    </div>
                    <div class="bmi-share-icon">
                        <a href="https://www.addtoany.com/add_to/line?linkurl=http%3A%2F%2Fwww.ludonow.com%2Fbmi&amp;linkname=" target="_blank">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-line.png" alt="女性 bmi">
                        </a>
                        <p>Line</p>
                    </div>
                </div>
                <div class="bmi-index-form-input-button bmi-result-btn" style="background-color: #3855A3;">獲得免費健康菜單</div>
                <textarea id="urlCopied" cols="30" rows="1"></textarea>
            </div>
            <div style="position:fixed;width:100vw;height:100px;top:0;" @click="have_tdee_result = false"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'
import BmiHeader from '~/components/bmi/BmiHeader.vue';
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 769,
    desktop: Infinity,
  }
});
Vue.use(Vue2TouchEvents)
export default {
    head() {
        return  {
            title: 'BMI計算',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { name: 'keywords', content: 'BMI怎麼算,BMI是什麼,BMI計算,bmi年齡標準,bmi年齡對照,bmi值'},
                { hid: 'description', name: 'description', content: '' },
                { property : 'og:title' , content:"BMI值｜線上計算器"},
                { property : 'og:type' , content:"website"},
                { property : 'og:url' , content:"http://www.ludonow.com/bmi"},
                { property : 'og:image' , content:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-img.png"},
                { property : 'og:description' , content:"BMI值計算公式: BMI = 體重(公斤) / 身高2(公尺2)五秒回饋，馬上測出你的身材，在台灣人口在哪個區間"},
                { property : 'og:site_name' , content:"LUDONOW.COM"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '' }
            ],
            script:[
                {src: 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.3',async:true,defer:true,crossorigin:'anonymous'}
            ]
        }
    },
    data:()=>({
        is_open: false,
        bmi_result: 0,
        tdee_result: 0,
        ds_result: 0,
        result_text: '',
        result_img: Number,
        have_input: false,
        htmlUrl: '',
        have_consult: false,
        have_result: false,
        show_bmi_tool: true,
        show_tdee_tool: false,
        have_tdee_result: false,
        tdeesexual: 'tdeegirl',
        sexual: 'girl',
        selected: '1',
        height: '',
        weight: '',
        gifImg: '',
        animals_result: '',
        render_bmi:0,
        render_tdee:0,
        heightText: '',
        weightText: '',
        theightText: '',
        tweightText: '',
        tyearText: '',
    }),
    components: {
        BmiHeader,
    },
    methods: {
        getBmi(){
            this.bmi_result = '';
            let height = document.getElementById('height').value;
            let weight = document.getElementById('weight').value;
            this.bmi_result = (weight/[(height/100)*(height/100)]).toFixed(1);
            this.have_result = true;
            let render_bmi_temp = 0
            this.render_bmi = 0
            let bmi_interval = setInterval(()=>{
                if (this.bmi_result > render_bmi_temp){
                    render_bmi_temp += 0.1
                    this.render_bmi = render_bmi_temp.toFixed(1)
                } else {
                    clearInterval(bmi_interval)
                }
            },5)
            if( weight == '' || height == '') {
                this.have_result = false;
                this.heightText = '請幫我輸入身高呦～';
                this.weightText = '不好意思...請幫我輸入體重喔><';
            }
            if(isNaN(this.bmi_result) || this.bmi_result === 'Infinity'){
                this.have_result = false;
                this.bmi_result = 0;
                this.result_text = '你還沒有填入身高體重ㄛ！';
                this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-no-input.gif'
            }
            else {
                if (this.bmi_result < 18.5 && this.bmi_result > 0 && this.sexual == 'girl'){
                    this.result_text = '嗚嗚妳太瘦了！快多吸兩口空氣！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-S.gif';
                    this.animals_result = '妳是...激瘦的螳螂';
                } else if (this.bmi_result < 18.5 && this.bmi_result > 0 && this.sexual == 'boy') {
                    this.result_text = '嗚嗚你太瘦了！快多吸兩口空氣！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-S.gif';
                    this.animals_result = '你是...武功螳螂';
                } else if (this.bmi_result < 24 && this.bmi_result >= 18.5 && this.sexual == 'girl') {
                    this.result_text = '太棒了！妳在正常範圍裡！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-girl-M.gif';
                    this.animals_result = '妳是...優雅的天鵝';
                } else if (this.bmi_result < 24 && this.bmi_result >= 18.5 && this.sexual == 'boy') {
                    this.result_text = '太棒了！你在正常範圍裡！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-boy-M.gif'; 
                    this.animals_result = '你是...一匹駿馬';
                } else if (this.bmi_result >= 24 && this.bmi_result < 27 && this.sexual == 'girl') {
                    this.result_text = '那個...妳可能要動起來囉！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-girl-L.gif';
                    this.animals_result = '妳是...卡住的貓';
                } else if (this.bmi_result >= 24 && this.bmi_result < 27 && this.sexual == 'boy') {
                    this.result_text = '那個...你可能要動起來囉！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-boy-L.gif'; 
                    this.animals_result = '你是...懶惰的家貓'; 
                } else if (this.bmi_result >= 27 && this.bmi_result < 30 && this.sexual == 'girl') {
                    this.result_text = '那個...妳可能要動起來囉！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-girl-XL.gif';
                    this.animals_result = '妳是...自命不凡的狐狸'; 
                } else if (this.bmi_result >= 27 && this.bmi_result < 30 && this.sexual == 'boy') {
                    this.result_text = '那個...你可能要動起來囉！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-boy-XL.gif'; 
                    this.animals_result = '你是...呆萌的袋熊'; 
                } else if (this.bmi_result >= 30 && this.bmi_result < 35 && this.sexual == 'girl') {
                    this.result_text = '那個...妳可能要動起來囉！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-girl-2L.gif'; 
                    this.animals_result = '妳是...一隻章魚'; 
                } else if (this.bmi_result >= 30 && this.bmi_result < 35 && this.sexual == 'boy') {
                    this.result_text = '那個...你可能要動起來囉！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-boy-2L.gif'; 
                    this.animals_result = '你是...狂吃的黑熊'; 
                } else if (this.bmi_result >= 35 && this.sexual == 'girl') {
                    this.result_text = '那個...妳可能要動起來囉！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-girl-3L.gif'; 
                    this.animals_result = '妳是...優良脂肪的海豹'; 
                } else if (this.bmi_result >= 35 && this.sexual == 'boy') {
                    this.result_text = '那個...你可能要動起來囉！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-boy-3L.gif';  
                    this.animals_result = '你是...好動的熊貓'; 
                } else {
                    this.bmi_result = 0;
                    this.result_text = '你還沒有填入身高體重ㄛ！';
                    this.gifImg = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-no-input.gif'
                }
            }
        },
        getTdee(){
            this.tdee_result = '';
            let height = document.getElementById('tdeeheight').value;
            let weight = document.getElementById('tdeeweight').value;
            let year = document.getElementById('tdeeyear').value;
            let bmr = 0;
            // this.tdee_result = (weight/[(height/100)*(height/100)]).toFixed(1);
            // let bmr = (10*weight+6.25*height-5*year).toFixed(0);
            if (this.tdeesexual == 'tdeegirl') {
                bmr = (10*weight+6.25*height-5*year-161)
            } else if (this.tdeesexual == 'tdeeboy') {
                bmr = (10*weight+6.25*height-5*year+5)
            }
            if(this.selected == '1'){
                this.tdee_result = (bmr*1.2).toFixed(1);
            } else if (this.selected == '2') {
                this.tdee_result = (bmr*1.375).toFixed(1);
            } else if (this.selected == '3') {
                this.tdee_result = (bmr*1.55).toFixed(1);
            } else if (this.selected == '4') {
                this.tdee_result = (bmr*1.725).toFixed(1);
            } else if (this.selected == '5' || this.selected == '6') {
                this.tdee_result = (bmr*1.9).toFixed(1);
            }
            let render_tdee_temp = 0
            this.render_tdee = 0
            let tdee_interval = setInterval(()=>{
                if (this.tdee_result > render_tdee_temp){
                    render_tdee_temp += 10
                    this.render_tdee = render_tdee_temp.toFixed(1)
                } else {
                    this.render_tdee = this.tdee_result
                    clearInterval(tdee_interval)
                }
            },0.5)
            
            if( height != 0 && weight != 0 && year != 0 ) {
                this.have_tdee_result = true
            } else if (height == '' || weight == '' || year == '') {
                // this.tdee_img = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-no-input.gif'
                // this.tdee_text = '你還沒有輸入ㄛ！'
                this.have_tdee_result = false
                this.theightText = '請幫我輸入身高呦～';
                this.tweightText = '不好意思...請幫我輸入體重喔><';
                this.tyearText = '噓！！我不會告訴別人的～'
            }
            

        },
        sendTdee(){
            document.getElementById('teddtool').click();
            this.have_result = false;
            // this.show_bmi_tool = false;
        },
        // getBmi(){
        //     this.bmi_result = '';
        //     this.have_input = false;
        //     let height = document.getElementById('height').value;
        //     let weight = document.getElementById('weight').value;
        //     setTimeout(()=> {
        //         this.bmi_result = (weight/[(height/100)*(height/100)]).toFixed(1);
        //         if(isNaN(this.bmi_result) || this.bmi_result === 'Infinity'){
        //             this.bmi_result = 0;
        //             this.result_text = '你還沒有填入身高體重ㄛ！';
        //         }
        //         else {
        //             if (this.bmi_result < 18.5 && this.bmi_result > 0){
        //                 this.result_text = '嗚嗚你太瘦了！快多吸兩口空氣！';
        //                 this.result_img = 1;
        //                 this.have_input = true;
        //             } else if (this.bmi_result < 24 && this.bmi_result >= 18.5) {
        //                 this.result_text = '太棒了！你在正常範圍裡！';
        //                 this.result_img = 2;
        //                 this.have_input = true;
        //             } else if (this.bmi_result >= 24) {
        //                 this.result_text = '那個...你可能要動起來囉！';
        //                 this.result_img = 3;
        //                 this.have_input = true;
        //             } else {
        //                 this.bmi_result = 0;
        //                 this.result_text = '你還沒有填入身高體重ㄛ！';
        //             }
        //             this.have_result = true;
        //             // } else if (this.bmi_result == 0) {
        //             //     this.result_text = '你還沒有填入身高體重ㄛ！';
        //             // }
        //         }
        //     },300)
        // },
        // getBmiDs(){
        //     this.ds_result = '';
        //     this.have_input = false;
        //     let h = document.getElementById('ds-height').value;
        //     let w = document.getElementById('ds-weight').value;
        //     setTimeout(()=> {
        //         this.ds_result = (w/[(h/100)*(h/100)]).toFixed(1);
        //         if(isNaN(this.ds_result) || this.ds_result === 'Infinity'){
        //             this.ds_result = 0;
        //             this.result_text = '你還沒有填入身高體重ㄛ！';
        //         }
        //         else {
        //             if (this.ds_result < 18.5 && this.ds_result > 0){
        //                 this.result_text = '嗚嗚你太瘦了！快多吸兩口空氣！';
        //                 this.result_img = 1;
        //                 this.have_input = true;
        //             } else if (this.ds_result < 24 && this.ds_result >= 18.5) {
        //                 this.result_text = '太棒了！你在正常範圍裡！';
        //                 this.result_img = 2;
        //                 this.have_input = true;
        //             } else if (this.ds_result >= 24) {
        //                 this.result_text = '那個...你可能要動起來囉！';
        //                 this.result_img = 3;
        //                 this.have_input = true;
        //             } else {
        //                 this.ds_result = 0;
        //                 this.result_text = '你還沒有填入身高體重ㄛ！';
        //             }
        //             // } else if (this.ds_result == 0) {
        //             //     this.result_text = '你還沒有填入身高體重ㄛ！';
        //             // }
        //         }
        //     },300)
        // },
        openShareBox(){
            this.is_open = true;
            if(this.bmi_result == 0){
                this.result_text = '你還沒有填入身高體重ㄛ！';
            }
        },
        copyUrl(){
            let Url = document.getElementById("urlCopied");
            Url.innerHTML = window.location.href;
            console.log(Url.innerHTML)
            Url.select();
            document.execCommand("copy");
        },
        // shareUrl(){
        //     const html2canvas = require('html2canvas');
        //     console.log('ok');
        //     html2canvas(document.querySelector("#result")).then(canvas => {
        //         // document.body.appendChild(canvas)
        //         let url = canvas.toDataURL('image/png');
        //         this.htmlUrl = url;
        //         this.sendUrl();
        //     });
        //     console.log('go');
        //     document.querySelector("meta[property='image']").setAttribute('content', htmlUrl);
        //     document.location.href='https://www.facebook.com/sharer/sharer.php?u=http://www.ludonow.com/bmi'
        // }
    },
    mounted(){
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://static.addtoany.com/menu/page.js')
        document.head.appendChild(recaptchaScript)
    },
    computed : {

        // dragDrop(){
        //     window.onload = function(){
        //         var block = document.getElementById('ds-share-box')
        //         block.onmousedown = function(ev){
        //             var oevent = ev || event;
                    
        //             var distanceX = oevent.clientX - block.offsetLeft;
        //             var distanceY = oevent.clientY - block.offsetTop;

        //             document.onmousemove = function(ev){
        //             var oevent = ev || event;
        //             block.style.left = oevent.clientX - distanceX + 'px';
        //             block.style.top = oevent.clientY - distanceY + 'px'; 
        //             };
        //             document.onmouseup = function(){
        //             document.onmousemove = null;
        //             document.onmouseup = null;
        //             };
        //         }
        //     }
        // }
    }
}
</script>

<style>
::placeholder {
    color:#C70000;
}
button {
    cursor: pointer;
}
.bmi-index-page {
    width: 100vw;
    min-height: 100vh;
    background-color: #FDFCF5; 
    padding-bottom: 5vh; 
}
.bmi-index-content {
    padding:  0 10px;
}
.bmi-tag {
    display: flex;
    justify-content: space-evenly;
}
.bmi-tag input {
    display: none;
}
.bmi-tag h5 ,.bmi-tag h1 {
    color: #989898;
    font-size: 17px;
    text-align: center;
}
.bmi-tag #bmitool:checked ~ .bmi-label h1,
.bmi-tag #teddtool:checked ~ .tedd-label h5 {
    color: #3855A3;
    border-bottom: 2px solid #3855A3;
}
/* .bmi-tag-first,.bmi-tag-second {
    display: none;
}
.bmi-tag-first.open,.bmi-tag-second.open {
    display: block;
} */
.bmi-index-content p, .bmi-index-content h2, .bmi-index-content h3 {
    text-align: center;
    font-size: 12px; 
    margin-top: 10px; 
    color: #707070;
    font-weight:bold;
}
.bmi-index-form {
    width: 250px;
    margin: 20px auto 0;
}
.bmi-index-form p {
    text-align: left;
    margin-bottom: 5px; 
}
.bmi-index-form-input-li {
    margin: 15px 0;
}
.bmi-index-form-input-label input {
    display: none;
}
.bmi-index-form-input-label {
    display: flex;
    justify-content: space-between;
}
.bmi-index-form-input-label label {
    color:#FFF;
    background: #C3C3C3;
    padding: 10px 52px;
    border-radius: 5px;
}
.bmi-index-form-input-label #girl:checked ~ .first-label,
.bmi-index-form-input-label #boy:checked ~ .second-label {
    background: #3855A3;
}
.bmi-index-form-input-label #tdeegirl:checked ~ .first-label,
.bmi-index-form-input-label #tdeeboy:checked ~ .second-label {
    background: #3855A3;
}

.bmi-index-form-input-value input, 
.bmi-index-form-input-value select {
    display: block;
    width: 250px;
    height: 40px;
    border: solid 1px rgba(0,0,0,.3);
    border-radius: 5px;
}

.bmi-index-form-input-button {
    width: 250px;
    height: 45px;
    color:white; 
    border-radius: 5px;
    border-style: none; 
    font-size: 17px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 7px 2px;
}
/* .bmi-index-content form {
    width: 220px;
    margin: 20px auto 0;
}
.bmi-index-form-input {
    font-size: 12px;
    font-weight: 400; 
}
.bmi-index-form-input-li {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
}
.bmi-index-form-input input {
    width: 80px;
    border: rgba(112,112,112,.3) solid 1px;
    border-radius: 5px;
    margin: 0 5px;
}
.bmi-index-form-end {
    width: 100px;
    margin: 0 auto;
}
.bmi-index-form-end input {
    width: 100px;
    border: rgba(112,112,112,.3) solid 1px;
    border-radius: 5px;
    height: 35px;
    padding-left: 35%;
} */
.bmi-index-content.bmi-index-end {
    position: relative;
}
.bmi-index-form-end-share {
    position: absolute;
    top: 20px;
    left: calc(40vw + 100px);
}
.bmi-index-form-end-share button {
    width: 50px;
    height: 30px;
    border-radius: 20px;
    background: linear-gradient(135deg,#3347E3,#3347E3,#604CF8,#604CF8);
    color: #FFFFFF;
    border-style: none;
}
.bmi-index-content img {
    width: 90vw;
    display: block;
    margin: 0 auto;
}
.bmi-consult-box {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    z-index: 10;
    background-color:rgba(0,0,0,.7);
    display: none;
}
.bmi-consult-box.open {
    display: flex;
    justify-content: center;
}
.bmi-consult-container {
    width: 90vw;
    height: 55vh;
    background-color: #FFF; 
    border-radius: 25px;
    text-align: center; 
    position: absolute;
    bottom: -360px;
    animation: consult-box 1s forwards;
}
.bmi-index-form-input-button.bmi-result-btn {
    /* position: absolute; */
    margin: 0 auto;
    /* bottom: 11vh; */
}
@keyframes consult-box {
    0%{ bottom: -55vh;}
    100%{ bottom:-50px;}
}
.bmi-consult-container h5 {
    font-size: 21px;
    margin: -27px auto 0;
    color: #3855A3;
    display: block;
    width: 120px;
}
.bmi-consult-container img {
    width: 80vw;
    margin-top: 3vh;
}
.bmi-result-box {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    z-index: 10;
    background-color:rgba(0,0,0,.7);
    display: none;
}
.bmi-result-box.open {
    display: flex;
    justify-content: center;
}
.bmi-result-container {
    width: 90vw;
    height: 100vh;
    background-color: #FFF; 
    border-radius: 25px;
    text-align: center; 
    position: absolute;
    animation: result-box 1s forwards;
}
@keyframes result-box {
    0%{ bottom: -95vh;}
    100%{ bottom:-50px;}
}
.bmi-result-container h5 {
    font-size: 21px;
    margin: 2vh auto 0;
    color: #3855A3;
    display: block;
    width: 120px;
}
/* .bmi-share-box {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    z-index: 10;
    background-color:rgba(0,0,0,.7);
    display: none;
}
.bmi-share-box.open {
    display: flex;
    justify-content: center;
    align-items: center;
}
.bmi-share-container {
    width: 90vw;
    height: 360px;
    background-color: #FDFCF5; 
    border-radius: 40px;
    text-align: center; 
} */
.bmi-share-close {
    width: 20px;
    height: 20px;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/consult-close.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;   
    margin: 20px 0 0 25px;
    cursor: pointer;
}
.bmi-share-icon-box {
    width: 80vw;
    height: 75px;
    margin: 2vh auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.bmi-share-icon img {
    height: 45px;
    cursor: pointer;
}
.bmi-share-icon p {
    font-size: 12px;
    color: #6A6A6A;
} 
/* .bmi-share-container p {
    font-size: 12px;
}
.bmi-share-container h5 {
    font-size: 70px;
    margin-top: 3vh;
} */
#urlCopied {
    position: absolute;
    top: 300vh;
}
.gif-box {
    width: 90%;
    height: 25vh;
    margin: 1vh auto 0;
    /* background: red; */
}
@media (min-width:769px) {
    .bmi-index-content:nth-child(2) p:last-child {
        display: none;
    }
    .bmi-index-content:nth-child(3) {
        margin-top:50px;
    }
    .bmi-index-content:nth-child(3) p:first-child {
        letter-spacing: 3px;
    }

    .bmi-index-content img {
        width: 600px;
    }
    .bmi-index-content:nth-last-child(2) p {
        position: fixed;
        bottom: 20px;
        right: 30px;
    }
    .bmi-index-content form {
        width: 300px;
    }
    /* .bmi-index-form-input-li:first-child ,
    .bmi-index-form-input-li:nth-child(2) {
        justify-content: center;
    }
    .bmi-index-form-input-li:first-child div:first-child,
    .bmi-index-form-input-li:nth-child(2) div:first-child {
        display: flex;
        align-items: center;
        justify-content:center;
        font-size: 14px;
    }
    .bmi-index-form-input-li:nth-child(3) {
        justify-content: space-evenly;
        margin-top: 35px;
    } */
    .bmi-index-form-input input {
        width: 100px;
        margin: 0 10px;
    }
    /* .bmi-index-form-input-button {
        line-height: 10px;
    } */
    .bmi-index-content.bmi-index-end {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bmi-index-form-end {
        margin: 0 10px;
    }
    .bmi-index-form-end-share {
        position: unset;
    }
    .bmi-share-box {
        background: transparent;
        width: 300px;
        height: 390px;
    }
    .bmi-share-container {
        width: 300px;
        height: 390px;
        background: white;
        border: 1px solid #000;
        position: fixed;
        top: 25%;
        right: 4%;
    }
    .bmi-share-close {
        margin:20px 0 0 250px;
    }
    .bmi-share-icon-box {
        width: 300px;
    }
}
</style>
