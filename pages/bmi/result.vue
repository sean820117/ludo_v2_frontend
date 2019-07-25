<template>
    <div style="background-color: white;">
        <result-header title="計算結果"></result-header>
        <main>
            <section class="bmi-result-block" style="margin:5vh auto;">
                <h6>BMI值</h6>
                <p>{{change_bmi}}</p>
            </section>
            
            <section class="bmi-result-block" style="display: flex;">
                <div class="bmi-result-block-li">
                    <h6>目前體重</h6>
                    <p style="color:#3855A3;">{{input_weight}}</p>
                </div>
                <div class="bmi-result-block-li">
                    <h6>還需要</h6>
                </div>
            </section>
            
            <section class="bmi-result-block" style="display: flex;justify-content:center;margin:8vh auto 0;">
                <input type="range" name="" id="" min="2" max="40" class="bmi-range" v-model="change_bmi">
            </section>
        </main>
    </div>
</template>

<script>
import ResultHeader from '~/components/bmi/ResultHeader.vue'
export default {
    data:()=>({
        get_bmi:0,
        change_bmi:0,
        input_weight: 0,
    }),
    mounted(){
        if(localStorage.to_bmi != '') {
            this.get_bmi = localStorage.to_bmi
        }
        if(localStorage.input_weight != '') {
            this.input_weight = localStorage.input_weight
        } 
        
    },
    components: {
        ResultHeader,
    },
    
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
    font-size: 80px;
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
}
.bmi-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%; 
  background: #51BC59;
  cursor: pointer;
}

.bmi-range::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #51BC59;
  cursor: pointer;
}


</style>
