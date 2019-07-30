<template>
    <div style="background-color: white;min-height:100vh;padding-bottom:1vh;">
        <result-header title="計算結果"></result-header>
        <main>
            <section class="bmi-result-block" style="margin:5vh auto;">
                <h6>BMI值</h6>
                <p id="show_bmi">{{change_bmi}}</p>
            </section>
            
            <section class="bmi-result-block" style="display: flex;">
                <div class="bmi-result-block-li">
                    <h6>目前體重</h6>
                    <p style="color:#3855A3;">{{input_weight}}</p>
                </div>
                <div class="bmi-result-block-li">
                    <h6>還需要</h6>
                    <div style="display:flex;align-items:baseline;justify-content:center;">
                        <p style="color:#1EA1AC;font-size:50px;" v-if="is_true">+</p>
                        <p id="show_need">{{getNeed}}</p>
                        <p id="need_text" style="font-size:17px;">公斤</p>
                    </div>
                </div>
            </section>
            
            <section class="bmi-result-block" style="display: flex;justify-content:center;margin:8vh auto 0;">
                <input type="range" name="" id="range_bar" min="2" max="40" class="bmi-range" v-model="change_bmi" @input="getBarLabel">
            </section>
            <section class="bmi-result-block" style="margin-top: 22px;width:265px;">
                <span id="range-bullet" class="range-label">{{range_text}}</span>
            </section>
            <section class="bmi-result-block">
                <p style="color:#8B8B8B;font-size:12px;">拉動滑桿可以自動計算喔！</p>
            </section>
            <section class="bmi-result-block">
                <p style="color:#5D5759;font-size:14px;margin:5vh 0px 1vh;">想得到專屬於你的健康菜單嗎？<br>試試看TDEE值計算機吧！</p>
                <div class="bmi-index-form-input-button" style="background-color: #3855A3;margin:0 auto 5px;" @click="$router.push('/bmi/tdee')">獲得免費健康菜單</div>
            </section>
        </main>
    </div>
</template>

<script>
import ResultHeader from '~/components/bmi/ResultHeader.vue'
export default {
    data:()=>({
        change_bmi: '',
        input_weight: 0,
        range_text: '',
        is_true: false,
    }),
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
                { property : 'og:image' , content:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-fb-share.jpg"},
                { property : 'og:description' , content:"BMI值計算公式: BMI = 體重(公斤) / 身高2(公尺2)五秒回饋，馬上測出你的身材，在台灣人口在哪個區間"},
                { property : 'og:site_name' , content:"LUDONOW.COM"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/logo.ico' }
            ],
        }
    },
    mounted(){
        if(process.client) {
            if(localStorage.to_bmi != '') {
                this.change_bmi = localStorage.to_bmi
            }
            if(localStorage.input_weight != '') {
                this.input_weight = localStorage.input_weight
            } 
            if(localStorage.input_height != '') {
                this.input_height = localStorage.input_height
            } 



            let range_slider = document.getElementById('range_bar')
            let range_bullet = document.getElementById('range-bullet')
            let bullet_pos = this.change_bmi /range_slider.max;
            console.log(bullet_pos)
            range_bullet.style.left = (bullet_pos * 188) + "px";
            console.log(range_bullet.style.left)
        }
    },
    components: {
        ResultHeader,
    },
    methods:{
        getBarLabel(){
            let range_slider = document.getElementById('range_bar')
            let range_bullet = document.getElementById('range-bullet')
            let bullet_pos = this.change_bmi /range_slider.max;
            console.log(bullet_pos)
            range_bullet.style.left = (bullet_pos * 188) + "px";
            console.log(range_bullet.style.left)
        }
    },
    computed:{
        getNeed(){
            let need = 0;
            let render_need = 0;
            let weight = this.input_weight;
            let height = this.input_height;
            let bmi = this.change_bmi;
            
            need = bmi*[(height/100)*(height/100)] - weight;
            return render_need = need.toFixed(0)
        },
    },
    watch:{
        change_bmi: function(){
            let explorer = navigator.userAgent ;
            if(this.change_bmi >= 24) {
                document.getElementById('show_bmi').style.color = "#DE396C"
                document.getElementById('range-bullet').style.background = '#DE396C'
                document.styleSheets[0].addRule('.bmi-range::-webkit-slider-thumb','background-color: #DE396C')
                document.styleSheets[0].addRule('.range-label::before','border-color: transparent transparent #DE396C transparent;')
                if (explorer.indexOf("Firefox") >= 0) {
                    document.styleSheets[0].addRule('.bmi-range::-moz-range-thumb','background-color: #DE396C;border-color: #DE396C')
                }
                
           } else if ( this.change_bmi < 24 && this.change_bmi >= 18.5) {
                document.getElementById('show_bmi').style.color = "#51BC59"
                document.getElementById('range-bullet').style.background = '#51BC59'
                document.styleSheets[0].addRule('.bmi-range::-webkit-slider-thumb','background-color: #51BC59')
                document.styleSheets[0].addRule('.range-label::before','border-color: transparent transparent #51BC59 transparent;')
                if (explorer.indexOf("Firefox") >= 0) {
                    document.styleSheets[0].addRule('.bmi-range::-moz-range-thumb','background-color: #51BC59;border-color: #51BC59')
                }
            } else {
                document.getElementById('show_bmi').style.color = "#1EA1AC"
                document.getElementById('range-bullet').style.background = '#1EA1AC'
                document.styleSheets[0].addRule('.bmi-range::-webkit-slider-thumb','background-color: #1EA1AC')
                document.styleSheets[0].addRule('.range-label::before','border-color: transparent transparent #1EA1AC transparent;')
                
                if (explorer.indexOf("Firefox") >= 0) {
                    document.styleSheets[0].addRule('.bmi-range::-moz-range-thumb','background-color: #1EA1AC;border-color: #1EA1AC')
                }
            }


            if(this.change_bmi >= 35){
                this.range_text = '重度肥胖'
            } else if (this.change_bmi < 35 && this.change_bmi >= 30 ) {
                this.range_text = '中度肥胖'
            } else if (this.change_bmi < 30 && this.change_bmi >= 27) {
                this.range_text = '輕度肥胖'
            } else if (this.change_bmi < 27 && this.change_bmi >= 24) {
                this.range_text = '過重'
            } else if (this.change_bmi < 24 && this.change_bmi >= 18.5) {
                this.range_text = '正常範圍'
            } else {
                this.range_text = '體重過輕'
            }
        },
        getNeed: function(){
            if(this.getNeed > 0) {
                document.getElementById('show_need').style.color = "#1EA1AC"
                document.getElementById('need_text').style.color = "#1EA1AC"
                this.is_true = true
            } else if (this.getNeed == '-0') {
                document.getElementById('show_need').style.color = "#51BC59"
                document.getElementById('need_text').style.color = "#51BC59"
                this.is_true = false
            } else {
                document.getElementById('show_need').style.color = "#DE396C"
                document.getElementById('need_text').style.color = "#DE396C"
                this.is_true = false
            }
        },
    }

    
}
</script>

<style>
.bmi-result-block h6,.bmi-result-block-li h6 {
    width: 70px;
    color: white;
    background: #8B8B8B;
    padding: 3px 10px;
    border-radius: 15px;
    text-align: center;
    margin: 1vh auto;
}
.bmi-result-block {
    width: 300px;
    margin: 3vh auto;
}
.bmi-result-block p {
    font-size: 70px;
    text-align:center;
}
.bmi-result-row {
    width:90%;
    margin: 0 auto;
}
.bmi-result-block-li {
    width: 50%;
}

.bmi-range {
    -webkit-appearance: none;
    width: 65%;
    height: 4px;
    background: #d3d3d3;
    outline: none;
    font-size: 20px;
    /* transition:.2s; */
    position: relative;
}
.bmi-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%; 
    /* background: #51BC59; */
    cursor: pointer;
}
.bmi-range::after {
    content: '－';
    width: 20px;
    height: 30px;
    position: absolute;
    top: -12px;
    left: -25px;
    color: #1EA1AC;
}
.bmi-range::before {
    content: '＋';
    width: 20px;
    height: 30px;
    position: absolute;
    top: -12px;
    right: -25px;
    color: #DE396C;
}
.range-label {
    position: relative;
    transform-origin: center center;
    display: block;
    width: 70px;
    height: 30px;
    background: #000;
    /* border-radius: 50%; */
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    /* padding-top: 22px; */
    /* box-sizing: border-box;
    border: 2px solid #fff; */
    /* margin-top: 20px;
    margin-left: -38px; */
    /* left: attr(value); */
    color: #fff;
    /* font-style: normal;
    font-weight: normal;
    line-height: normal; */
    font-size: 14px;
    border-radius: 5px;
    
}
.range-label::before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 4.5px 10px 4.5px;
    /* border-color: transparent transparent #007bff transparent; */
    position: absolute;
    top: -10px;
    left: 30px;
}


.bmi-range::-moz-range-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    /* background: #51BC59; */
    cursor: pointer;
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

</style>
