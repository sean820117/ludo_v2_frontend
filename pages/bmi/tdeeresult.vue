<template>
    <div style="background-color: white;min-height:100vh;padding-bottom:10vh;">
        <result-header title="運動與飲食建議"></result-header>
        <main>
            <section class="bmi-tdeeresult-block" style="max-width: 550px;">
                <input type="radio" name="select-need" id="increase" checked>
                <input type="radio" name="select-need" id="reduce">
                <div class="bmi-tdeeresult-labelbox">
                    <label for="increase" class="bmi-tdeeresult-switch need-increase" style="border:solid 1px #DE396C;">增肌</label>
                    <label for="reduce" class="bmi-tdeeresult-switch need-reduce" style="border:solid 1px #1EA1AC;">減脂</label>
                </div>
                <div class="bmi-tdeeresult-block show-increase" style="width:90%">
                    <div class="bmi-tdeeresult-number">
                        <h6>基礎代謝BMR</h6>
                        <div><p>{{base_bmr}}</p>大卡</div>
                    </div>
                    <div class="bmi-tdeeresult-number">
                        <h6>每日總消耗TDEE</h6>
                        <div><p>{{increase_tdee}}</p>大卡</div>
                    </div>
                </div>
                <div class="bmi-tdeeresult-block show-reduce" style="width:90%">
                    <div class="bmi-tdeeresult-number">
                        <h6>基礎代謝BMR</h6>
                        <div><p>{{base_bmr}}</p>大卡</div>
                    </div>
                    <div class="bmi-tdeeresult-number">
                        <h6>每日總消耗TDEE</h6>
                        <div><p>{{reduce_tdee}}</p>大卡</div>
                    </div>
                </div>
            <!-- </section> -->
            
            <hr>
            <div class="bmi-tdeeresult-block" style="max-width:600px;">
                <div class="bmi-tdeeresult-title">便利健康菜單建議</div>
                <div class="bmi-tdeeresult-select">
                    <li style="color:#1EA1AC;border:#1EA1AC 3px solid;" @click="openBreakfast()">早餐</li>
                    <li style="color:#DE396C;border:#DE396C 3px solid;" @click="openLunch()">午餐</li>
                    <li style="color:#3855A3;border:#3855A3 3px solid;" @click="openDinner()">晚餐</li>
                </div>
                <div class="bmi-tdee-menu breakfast" :class="breakfast_open ? 'open':''">
                    <div style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/tdeeresult-line.png')"></div>
                    <div style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/tdeeresult-breakfast.png')"></div>
                </div>
                <div  class="bmi-tdee-menu lunch" :class="lunch_open ? 'open':''">
                    <div style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/tdeeresult-line-lunch.png')"></div>
                    <div style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/tdeeresult-lunch.png')"></div>
                </div>
                <div  class="bmi-tdee-menu dinner" :class="dinner_open ? 'open':''">
                    <div style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/tdeeresult-line-dinner.png')"></div>
                    <div style="background-image:url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/tdeeresult-dinner.png')"></div>
                </div>
            </div>
            <hr>
            <div class="bmi-tdeeresult-block" style="max-width: 600px;">
                <div class="bmi-tdeeresult-title">便利自我訓練菜單</div>
                <iframe id="increase-video" src="https://www.youtube.com/embed/XhQjMkcPRV0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:30vh;"></iframe>
                <iframe id="reduce-video" width="560" height="315" src="https://www.youtube.com/embed/ml6cT4AZdqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:30vh;"></iframe>
                <p style="color:#707070;font-size:13px;margin-top:1vh;">徒手運動30分鐘，消耗250-300大卡</p>
            </div>
            <div style="position:fixed;bottom:3vh;display:flex;width:100vw;justify-content:center;align-items:center;">
                <a href="https://www.ludonow.com/mamiyoga" style="text-decoration:none;">
                    <div class="bmi-index-form-input-button" style="background-color:#DE396C;">立即體驗瑜珈課程</div>
                </a>
            </div>
            </section>
        </main>
    </div>
</template>

<script>
import ResultHeader from '~/components/bmi/ResultHeader.vue'
export default {
    data:()=>({
        breakfast_open: false,
        lunch_open: false,
        dinner_open: false,
        base_bmr: 0,
        increase_tdee: 0,
        reduce_tdee:0,
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
    components: {
        ResultHeader,
    },
    mounted(){
        if(localStorage.to_bmr != '') {
            this.base_bmr = localStorage.to_bmr
        } else {
            this.base_bmr = 0
        }

        if(localStorage.to_tdee != ''){
            this.increase_tdee = (localStorage.to_tdee*1.2).toFixed(0)
            this.reduce_tdee = (localStorage.to_tdee*0.8).toFixed(0)
        }
    },
    methods:{
        openBreakfast(){
            if( this.lunch_open == true) {
                this.lunch_open = false
                setTimeout(()=>{
                    this.breakfast_open = true
                },500)
            } else if (this.dinner_open == true) {
                this.dinner_open = false
                setTimeout(()=>{
                    this.breakfast_open = true
                },500)
            }else {
                this.breakfast_open = !this.breakfast_open
            }
        },
        openLunch(){
            if( this.breakfast_open == true) {
                this.breakfast_open = false
                setTimeout(()=>{
                    this.lunch_open = true
                },500)
            } else if (this.dinner_open == true){
                this.dinner_open = false
                setTimeout(()=>{
                    this.lunch_open = true
                },500)
            }else {
                this.lunch_open = !this.lunch_open
            }
        },
        openDinner(){
            if( this.breakfast_open == true) {
                this.breakfast_open = false
                setTimeout(()=>{
                    this.dinner_open = true
                },500)
            } else if (this.lunch_open == true){
                this.lunch_open = false
                setTimeout(()=>{
                    this.dinner_open = true
                },500)
            }else {
                this.dinner_open = !this.dinner_open
            }
        }
    },
    
}
</script>

<style>
hr {
    border: dashed 1px #707070;
    width: 80%;
    margin: 5vh auto;
}

.bmi-tdeeresult-block input {
    display: none;
}
.bmi-tdeeresult-labelbox {
    width: 65%;
    max-width: 300px;
    margin:2vh auto 4vh;
    display: flex;
    justify-content: space-evenly;
}
.bmi-tdeeresult-switch.need-increase {
    background-color: white;
    color: #DE396C;
}
.bmi-tdeeresult-switch.need-reduce{
    background-color: white;
    color:#1EA1AC;
}
#increase:checked ~ .bmi-tdeeresult-labelbox .bmi-tdeeresult-switch.need-increase {
    background-color: #DE396C;
    color: white;
}
#reduce:checked ~ .bmi-tdeeresult-labelbox .bmi-tdeeresult-switch.need-reduce {
    background-color: #1EA1AC;
    color: white;
}
.bmi-tdeeresult-block.show-increase, 
.bmi-tdeeresult-block.show-reduce {
    display: none;
}
#increase:checked ~ .bmi-tdeeresult-block.show-increase,
#reduce:checked ~ .bmi-tdeeresult-block.show-reduce {
    display: block;
}
.bmi-tdeeresult-block #increase-video,
.bmi-tdeeresult-block #reduce-video {
    display: none;
}
#increase:checked ~ .bmi-tdeeresult-block #increase-video,
#reduce:checked ~ .bmi-tdeeresult-block #reduce-video {
    display: block;
}




.bmi-tdeeresult-block {
    width: 100%;
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2vh auto 1vh;
}
.bmi-tdeeresult-switch {
    width: 80px;
    padding: 0 10px;
    border-radius: 15px;
    color:white;
    text-align: center;
    cursor: pointer;
}




.bmi-tdeeresult-number {
    text-align: center;
    width: 50%;
    float: left;
}
.bmi-tdeeresult-number h6 {
    color:#DE396C;
    font-weight: 400;
    font-size: 14px;  
}
.bmi-tdeeresult-number div {
    display: flex;
    align-items: baseline;
    margin: 2vh 0;
    text-align: center;
    justify-content: center;
    font-size: 15px;
}
.bmi-tdeeresult-number p {
    font-size: 35px;
    float: left;

}
.bmi-tdeeresult-title {
    width: 130px;
    padding: 2px 10px;
    background: #8B8B8B;
    border-radius: 15px;
    font-size: 13px;
    color:white;
    text-align: center;
    margin: 0 auto 3vh ;
}
.bmi-tdeeresult-select {
    width: 80vw;
    margin: 0 5vw 1vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.bmi-tdeeresult-select li {
    list-style-type: none;
    background: white;
    border: 1px solid;
    padding: 5px 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
    cursor: pointer;
}


.bmi-tdee-menu {
    width:80vw;
    height:0px;
    transition:height .5s;
    overflow-y: hidden;
}
.bmi-tdee-menu.open {
    height: 265px !important;
    
}
.bmi-tdee-menu div {
    /* width: 80vw; */
    background-position:center;
    background-size: contain;  
    background-repeat: no-repeat;
    max-width: 600px;
}
.bmi-tdee-menu div:first-child {
    height: 10px;
}
.bmi-tdee-menu div:last-child {
    height: 250px;
}
/* .bmi-tdee-menu img {
    margin: 2vh auto 0;
    display: block;
} */

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
