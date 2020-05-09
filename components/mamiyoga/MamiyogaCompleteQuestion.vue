<template>
    <div class="complete-question-page bg-white">
        <div class="complete-question-container">
            <div class="congrates-block">
                <img :src="feeling_question_img" alt="">
                <h1 class="color-primary">恭喜！完成今日的練習！</h1>
            </div>
            <hr>
            <div class="question-block">
                <h3 class="color-primary">今天的妳感受如何呢？</h3>
                <p class="color-red" style="margin-top:8px">*複選</p>
                <div class="question-list">
                    <div class="single-question color-primary">
                        <input type="checkbox" name="a1" id="a1" value="60" v-model="picked1">
                        <label for="a1">做完有點喘呢！</label>
                    </div>
                    <div class="single-question color-primary">
                        <input type="checkbox" name="a2" id="a2" value="70" v-model="picked2">
                        <label for="a2">腰部有點痠</label>
                    </div>
                    <div class="single-question color-primary">
                        <input type="checkbox" name="a3" id="a3" value="80" v-model="picked3">
                        <label for="a3">腹部有用力的感覺</label>
                    </div>
                    <div class="single-question color-primary">
                        <input type="checkbox" name="a4" id="a4" value="90" v-model="picked4">
                        <label for="a4">很輕鬆！easy啦！</label>
                    </div>
                    <div class="single-question color-primary">
                        <input type="checkbox" name="a5" id="a5" value="50" v-model="picked5">
                        <label for="a5">我沒有做完，中間休息了一下...</label>
                    </div>
                </div>
                <div @click="sendResult" class="submit-question-btn bg-red btn-small color-white">
                    送出
                </div>
            </div>
        </div>
    </div>
</template>
<script >

import axios from '~/config/axios-config'

export default {
    data() {
        return {
            feeling_question_img:'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/question_feeling.jpg',
            picked1:false,
            picked2:false,
            picked3:false,
            picked4:false,
            picked5:false,
            score:50,
        }
    },
    props: {

    },
    async mounted() {
        if (process.client) {
            
        }
    },
    components: {
    },
    methods: {
        async submit() {
            // if (email) {
            let routine_options = {
                frequency:localStorage['frequency'],
                exercise_time:localStorage['exercise_time'],
                question:localStorage['question'],
            };
            const res = await axios.post('/apis/subscribe-mamiyoga',{email:email,phone_number:phone_number,category:'練習提醒',routine_options});
            localStorage['set_contact'] = 'true'
            alert('成功開通')
            return
            // }
        },
        handlePickedChange() {
            // alert(this.picked);
            this.$emit("pickedchanged",this.picked);
        },
        sendResult() {
            if (this.picked1) {
                this.score += 5
            }
            if (this.picked2) {
                this.score += 10
            }
            if (this.picked3) {
                this.score += 10
            }
            if (this.picked4) {
                this.score += 20
            }
            if (this.picked5) {
                this.score += 5
            }

            if (this.score > 50) {
                this.$emit("endQuestion",this.score)
            } else {
                alert("請填寫練習結果唷")
            }
            return
        }
    }
    
}
</script>

<style scoped>
.complete-question-page {
    width: 100vw;
    min-height: 100%;
    z-index: 1001;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top:0px;
}
.complete-question-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    width:923px;
}
.complete-question-container hr {
    display: none;
}
.congrates-block img {
    width: 364px;
}
.question-block {
    display: flex;
    flex-direction: column;
}
.question-list {
    margin-top: 36px;
}
.single-question {
    font-size: 24px;
    margin: 5px 0;
}
.single-question label {
    margin-left: 17px;
}
.single-question input[type=radio] {
    width:19px;
    height:19px;
}
.submit-question-btn {
    margin-top: 46px;
}
@media (max-width: 768px) {
    .complete-question-container {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        width:80vw;
        max-width: 400px;
        flex-direction: column;
        margin: 52px 0 37px 0;
    }
    .complete-question-container hr {
        display: block;
        margin: 35.6px 0 16.4px 0;
    }
    .congrates-block img {
        width:80vw;
        max-width: 400px;
    }
    .congrates-block h1 {
        font-size: 27px;
    }
    .single-question {
        font-size: 17px;
        margin: 9px 0;
    }
    .submit-question-btn {
        align-self: center;
    }
}
</style>