<template>
    <main>
        <article class="bmi-index-content">
            <p style="margin:4vh auto 0;font-weight:400;text-align:left;width:75vw;">透過基礎代謝率（BMR）以及運動習慣，我們能夠透過公式得出每日消耗熱量（TDEE）。TDEE可以幫助妳/你掌握每天的營養攝取量以及運動量。</p>
        </article>
        <section class="bmi-index-content">
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
                        <input type="number" id="tdeeheight" name="height" :placeholder="theightText">
                    </div>
                </div>
                <div class="bmi-index-form-input-li human-height">
                    <p>體重（公斤）：</p>
                    <div class="bmi-index-form-input-value">
                        <input type="number" id="tdeeweight"  name="weight" :placeholder="tweightText">
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
                    <p style="text-align:center;margin:5vh 0 1vh;">計算後得知TDEE，我們將提供您<br>免費的健康菜單與運動喔！</p>
                    <div class="bmi-index-form-input-button" style="background-color: #3855A3;margin-bottom: 5px;" @click="getTdee()">獲得免費健康菜單</div>
                </div>
            </form>
        </section>
        <!-- <div class="bmi-index-content">
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
                        <input type="number" id="tdeeheight" v-model="height" name="height" :placeholder="theightText">
                    </div>
                </div>
                <div class="bmi-index-form-input-li human-height">
                    <p>體重（公斤）：</p>
                    <div class="bmi-index-form-input-value">
                        <input type="number" id="tdeeweight" v-model="weight" name="weight" :placeholder="tweightText">
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
        </div> -->
    </main>
    

</template>

<script>
export default {
    layout: 'bmi',
    mounted(){
        document.getElementById('label-tdee').classList.add('active')
        document.getElementById('label-bmi').classList.remove('active')

    },
    data:()=>({
        tdeesexual: 'tdeegirl',
        selected: '1',
        tyearText: '',
        tweightText: '',
        theightText: '',
    }),
    methods: {
        getTdee(){

            let height = document.getElementById('tdeeheight').value;
            let weight = document.getElementById('tdeeweight').value;
            let year = document.getElementById('tdeeyear').value;
            let bmr = 0;

            if( height != 0 && weight != 0 && year != 0 ) {
                
                if(this.tdeesexual == 'tdeegirl') {
                    bmr = (10*weight+6.25*height-5*year-161).toFixed(0)
                } else if (this.tdeesexual == 'tdeeboy') {
                    bmr = (10*weight+6.25*height-5*year+5).toFixed(0)
                }
                localStorage.to_bmr = bmr
                
                let tdee = 0;
                if(this.selected == '1'){
                    tdee = (bmr*1.2).toFixed(1);
                } else if (this.selected == '2') {
                    tdee = (bmr*1.375).toFixed(1);
                } else if (this.selected == '3') {
                    tdee = (bmr*1.55).toFixed(1);
                } else if (this.selected == '4') {
                    tdee = (bmr*1.725).toFixed(1);
                } else if (this.selected == '5' || this.selected == '6') {
                    tdee = (bmr*1.9).toFixed(1);
                }
                localStorage.to_tdee = tdee
                
                this.$router.push('/bmi/tdeeresult')

            } else if (height == '' || weight == '' || year == '') {
                this.theightText = '請幫我輸入身高呦～';
                this.tweightText = '不好意思...請幫我輸入體重喔><';
                this.tyearText = '噓！！我不會告訴別人的～'
            }
        }
        // getTdee(){
        //     this.tdee_result = '';
        //     let height = document.getElementById('tdeeheight').value;
        //     let weight = document.getElementById('tdeeweight').value;
        //     let year = document.getElementById('tdeeyear').value;
        //     let bmr = 0;
        //     // this.tdee_result = (weight/[(height/100)*(height/100)]).toFixed(1);
        //     // let bmr = (10*weight+6.25*height-5*year).toFixed(0);
        //     if (this.tdeesexual == 'tdeegirl') {
        //         bmr = (10*weight+6.25*height-5*year-161)
        //     } else if (this.tdeesexual == 'tdeeboy') {
        //         bmr = (10*weight+6.25*height-5*year+5)
        //     }
        //     if(this.selected == '1'){
        //         this.tdee_result = (bmr*1.2).toFixed(1);
        //     } else if (this.selected == '2') {
        //         this.tdee_result = (bmr*1.375).toFixed(1);
        //     } else if (this.selected == '3') {
        //         this.tdee_result = (bmr*1.55).toFixed(1);
        //     } else if (this.selected == '4') {
        //         this.tdee_result = (bmr*1.725).toFixed(1);
        //     } else if (this.selected == '5' || this.selected == '6') {
        //         this.tdee_result = (bmr*1.9).toFixed(1);
        //     }
        //     let render_tdee_temp = 0
        //     this.render_tdee = 0
        //     let tdee_interval = setInterval(()=>{
        //         if (this.tdee_result > render_tdee_temp){
        //             render_tdee_temp += 10
        //             this.render_tdee = render_tdee_temp.toFixed(1)
        //         } else {
        //             this.render_tdee = this.tdee_result
        //             clearInterval(tdee_interval)
        //         }
        //     },0.5)
            
        //     if( height != 0 && weight != 0 && year != 0 ) {
        //         this.have_tdee_result = true
        //     } else if (height == '' || weight == '' || year == '') {
        //         // this.tdee_img = 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-no-input.gif'
        //         // this.tdee_text = '你還沒有輸入ㄛ！'
        //         this.have_tdee_result = false
        //         this.theightText = '請幫我輸入身高呦～';
        //         this.tweightText = '不好意思...請幫我輸入體重喔><';
        //         this.tyearText = '噓！！我不會告訴別人的～'
        //     }
        // },
    }
}
</script>

<style>

</style>
