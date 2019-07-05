<template>
    <div class="bmi-index-page">
        <bmi-header></bmi-header>
        <div class="bmi-index-content">
            <p>BMI值計算公式： BMI = 體重(公斤)/身高²(公尺²)</p>
            <p style="font-weight:400;">例如：一個50公斤的人，身高是161公分，則BMI為：<br>50(公斤)/1.61²(公尺²)=19.2</p>
            <p style="color:#000;">體重正常範圍為 BMI=18.5~24</p>
        </div>
        <div class="bmi-index-content">
            <p style="color:#000;font-weight:400;">快看看自己的BMI是否在理想範圍內吧！</p>
            <form>
                <div class="bmi-index-form-input">
                    <div class="bmi-index-form-input-li">
                        <div>身高<input type="number" id="height" name="height"  min="50" max="250">cm</div>
                        <div @click="getBmi">開始計算</div>
                    </div>
                    <div class="bmi-index-form-input-li">
                        <div>體重<input type="number" id="weight" name="weight"  min="50" max="250">kg</div>
                        <button type="reset">清除計算</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="bmi-index-content bmi-index-end" style="margin-top:3vh;">
            <p style="color:#000;font-weight:400;">你的BMI為</p>
            <div class="bmi-index-form-end"><input type="number" disabled="disabled" :placeholder="bmi_result"></div>
            <div class="bmi-index-form-end-share">
                <button @click="is_open = true">分享</button>
            </div>
        </div>
        <div class="bmi-index-content" style="margin-top:10vh;">
            <img src="/bmi/bmi.png" alt="">
        </div>
        <div class="bmi-share-box" :class="is_open ? 'open':''">
            <div class="bmi-share-container">
                <div class="bmi-share-close" @click="is_open = false"></div>
            </div>

        </div>
    </div>
</template>

<script>
import BmiHeader from '~/components/bmi/BmiHeader.vue';
export default {
    data:()=>({
        is_open: false,
        bmi_result: '',
    }),
    components: {
        BmiHeader,
    },
    methods: {
        getBmi(){
            let height = document.getElementById('height').value;
            let weight = document.getElementById('weight').value;
            this.bmi_result = weight/(height/100)*(height/100);
            console.log('bmi_result')
        }
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
    margin-top: 7vh; 
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
.bmi-index-form-input button {
    width: 65px;
    height: 21px;
    background-color: #000;
    color:white; 
    border-radius: 20px;
    border-style: none; 
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
    height: 50vh;
    background-color: white; 
    border-radius: 40px; 
}
.bmi-share-close {
    width: 20px;
    height: 20px;
    background-image: url('/bmi/share-close.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;   
    margin: 3vh 0 0 75vw;
    cursor: pointer;
}
</style>
