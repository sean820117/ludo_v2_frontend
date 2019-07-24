<template>
    <div>
        <result-header title="計算結果"></result-header>
        <main>
            <section class="bmi-result-block" style="margin:5vh auto;">
                <h6>BMI值</h6>
                <p>{{get_bmi}}</p>
            </section>
            <section class="bmi-result-block">
                <div class="bmi-result-row">
                    <section class="bmi-result-block-li">
                        <h6>目前體重</h6>
                    </section>
                    <section class="bmi-result-block-li">
                        <h6>還需要</h6>
                    </section>
                </div>
            </section>
            <section class="bmi-result-block">
                <input type="range" name="" id="" min="1" max="100" value="50" class="bmi-range">
            </section>
        </main>
    </div>
</template>

<script>
import ResultHeader from '~/components/bmi/ResultHeader.vue'
export default {
    data:()=>({
        get_bmi:0,
    }),
    components: {
        ResultHeader,
    }
}
</script>

<style>
html, body, #__nuxt, #__layout, #__layout > div {
    background-color: white;
}

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
    float: left;
}

.bmi-range {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    background: #d3d3d3;
     outline: none;
}
.bmi-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%; 
  background: #4CAF50;
  cursor: pointer;
}

.bmi-range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
</style>
