<template>
    <div class="bmi-index-page">
        <bmi-header></bmi-header>
        <div class="bmi-index-content">
            <h5>BMI值計算機</h5>
            <p style="margin-top:6vh;">BMI值計算公式： BMI = 體重(公斤)/身高²(公尺²)</p>
            <p style="font-weight:400;">例如：一個50公斤的人，身高是161公分，則BMI為：<br>50(公斤)/1.61²(公尺²)=19.2</p>
            <p style="color:#000;margin-top:3vh;">體重正常範圍為 BMI=18.5~24</p>
        </div>
        <div class="bmi-index-content">
            <p style="color:#000;font-weight:400;">快看看自己的BMI是否在理想範圍內吧！</p>
            <form>
                <div class="bmi-index-form-input">
                    <div class="bmi-index-form-input-li">
                        <div>身高<input type="number" id="height" name="height"  min="50" max="250">cm</div>
                        <div class="bmi-index-form-input-button" @click="getBmi">開始計算</div>
                    </div>
                    <div class="bmi-index-form-input-li">
                        <div>體重<input type="number" id="weight" name="weight"  min="50" max="250">kg</div>
                        <button type="reset" class="bmi-index-form-input-button">清除計算</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="bmi-index-content bmi-index-end" style="margin-top:3vh;" id="bmi-result">
            <p style="color:#000;font-weight:400;">你的BMI為</p>
            <div class="bmi-index-form-end"><input type="number" disabled="disabled" :placeholder="bmi_result"></div>
            <div class="bmi-index-form-end-share">
                <button @click="openShareBox">分享</button>
            </div>
        </div>
        <div class="bmi-index-content" style="margin-top:10vh;">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi.png" alt="">
        </div>
        <div class="bmi-index-content">
            <p style="margin-top:5vh;font-weight:300;">&copy; 2019 LUDO All Rights Reserved</p>
        </div>
        <div class="bmi-share-box" :class="is_open ? 'open':''">
            <div class="bmi-share-container" id="bmi-result">
                <div class="bmi-share-close" @click="is_open = false"></div>
                <p style="color:#000;font-weight:400;">你的BMI為</p>
                <h5 v-if="have_input">{{bmi_result}}</h5>
                <div style="margin-top: 3vh;" v-if="!have_input">
                    <img src="/bmi/bmi-result-0.png" alt="">
                    <p style="height:32px;margin-top:3vh;display:flex;align-items:center;justify-content:center;">{{result_text}}</p>
                </div>
                <div style="margin-top:3vh;display:flex;align-items:center;justify-content:center;" v-if="have_input">
                    <img :src="'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-result-'+result_img+'.png'" alt="">
                    <!-- <div v-if="!have_input" style="height:26px;wight:30px;margin-top:3vh;"></div> -->
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
        </div>
    </div>
</template>

<script>
import BmiHeader from '~/components/bmi/BmiHeader.vue';

export default {
    head() {
        return  {
            title: 'BMI計算',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { name: 'keywords', content: 'BMI怎麼算,BMI是什麼,BMI計算,bmi年齡標準,bmi年齡對照,bmi值'},
                { hid: 'description', name: 'description', content: '' },
                { property : 'og:title' , content:"BMI值計算器"},
                { property : 'og:type' , content:""},
                { property : 'og:url' , content:""},
                { property : 'og:image' , content:""},
                { property : 'og:description' , content:""},
                { property : 'og:site_name' , content:""},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '' }
            ],
            

        }
    },
    data:()=>({
        is_open: false,
        bmi_result: 0,
        result_text: '',
        result_img: Number,
        have_input: false,
        href:'',
    }),
    components: {
        BmiHeader,
    },
    methods: {
        getBmi(){
            this.bmi_result = '';
            this.have_input = false;
            let height = document.getElementById('height').value;
            let weight = document.getElementById('weight').value;
            setTimeout(()=> {
                this.bmi_result = (weight/[(height/100)*(height/100)]).toFixed(1);
                if(isNaN(this.bmi_result) || this.bmi_result === 'Infinity'){
                    this.bmi_result = 0;
                    this.result_text = '你還沒有填入身高體重ㄛ！';
                }
                else {
                    if (this.bmi_result < 18.5 && this.bmi_result > 0){
                        this.result_text = '嗚嗚你太瘦了！快多吸兩口空氣！';
                        this.result_img = 1;
                        this.have_input = true;
                    } else if (this.bmi_result < 24 && this.bmi_result >= 18.5) {
                        this.result_text = '太棒了！你在正常範圍裡！';
                        this.result_img = 2;
                        this.have_input = true;
                    } else if (this.bmi_result >= 24) {
                        this.result_text = '那個...你可能要動起來囉！';
                        this.result_img = 3;
                        this.have_input = true;
                    } else {
                        this.bmi_result = 0;
                        this.result_text = '你還沒有填入身高體重ㄛ！';
                    }
                    // } else if (this.bmi_result == 0) {
                    //     this.result_text = '你還沒有填入身高體重ㄛ！';
                    // }
                }
            },300)
        },
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
    },
    mounted(){
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://static.addtoany.com/menu/page.js')
        document.head.appendChild(recaptchaScript)
    }
}
</script>

<style>
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
.bmi-index-content h5 {
    color: #3347E3;
    font-size: 17px;
    text-align: center;
}
.bmi-index-content p {
    text-align: center;
    font-size: 12px; 
    margin-top: 10px; 
    color: #707070;
    font-weight:bold;
}
.bmi-index-content form {
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
.bmi-index-form-input-button {
    width: 70px;
    height: 21px;
    background-color: #000;
    color:white; 
    border-radius: 20px;
    border-style: none; 
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
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
}
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
.bmi-share-box {
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
}
.bmi-share-close {
    width: 30px;
    height: 30px;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/share-close.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;   
    margin: 3vh 0 0 75vw;
    cursor: pointer;
}
.bmi-share-container p {
    font-size: 12px;
}
.bmi-share-container h5 {
    font-size: 70px;
    margin-top: 3vh;
}
.bmi-share-icon-box {
    width: 70vw;
    height: 50px;
    /* background: red; */
    margin: 4vh auto 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.bmi-share-icon img {
    height: 45px;
    cursor: pointer;
}
.bmi-share-icon p {
    color: #6A6A6A;
}
#urlCopied {
    position: absolute;
    top: 300vh;
}
</style>
