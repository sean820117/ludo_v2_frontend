<template>
    <div class="golf-demo-intro-container">
        <h1 class="golf-demo-intro-title">高爾夫球<br>智慧練習系統</h1>
        <div v-if="!subscriber" class="golf-demo-pre-register-form">
            <p>手機</p>
            <input type="text" v-model="phone" placeholder="例：0912345678"/>
            <p>信箱</p>
            <input type="text" v-model="email" placeholder="例：sample@golf.com"/>
        </div>
        <button :disabled="!checkInfo" :class=" !checkInfo ? 'inactive' : ''" class="golf-demo-start-button golf-demo-button-large" @click="sendSubscribe">開始練習</button>
    </div>
</template>

<script>
export default {
    data:()=>({
        email:'',
        phone:'',
        subscriber:false,
    }),
    methods: {
        goSelect() {
            this.$emit('setUserId',this.subscriber);
            this.$emit('nextStage');
        },
        sendSubscribe() {
            if (!this.subscriber) {
                this.subscriber = this.email
                this.$sendData('/apis/subscribe-golf',{email:this.mail,phone: this.phone})    
                localStorage['subscriber'] = this.subscriber
            } 
            this.goSelect();
        }
    },
    mounted() {
        if (process.client) {
            if (localStorage['subscriber']) {
                this.subscriber = localStorage['subscriber'];
            }
        }
    },
    computed: {
        checkInfo() {
            return this.subscriber || (this.email && this.phone);
        },
    }
}
</script>

<style>
.golf-demo-intro-container {
    width: 100vw;
    max-width: 60vh;
    margin: 0 auto;
    /* height: 100%; */
    background: url("/golf/golf-demo-bg.jpg") no-repeat;
    background-position: center;
    background-color:black;
    background-size: auto 100%;
    display: flex;
    flex-direction: column;
}
.golf-demo-intro-title {
    margin-top: 143px;
}
.golf-demo-start-button {
    /* position: absolute; */
    /* bottom: 20px; */
    margin-top: 50px;
    align-self: center;
}
.golf-demo-pre-register-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 60%;
    margin: 50px auto 0 auto;
}
.golf-demo-pre-register-form p {
    color:white;
    font-size: 20px;
    font-weight: bold;
}
.golf-demo-pre-register-form input {
    height: 50px;
    border-radius: 10px;
    margin-top: 5px;
    border:none;
    padding-left: 15px;
    font-size: 20px;
}
.inactive {
    background: lightgray;
}
</style>