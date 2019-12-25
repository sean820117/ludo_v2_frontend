<template>
    <div class="golf-demo-intro-container">
        <h1 class="golf-demo-intro-title">高爾夫球<br>智慧練習系統</h1>
        <div class="golf-demo-pre-register-form">
            <p>手機</p>
            <input type="text"/>
            <p>信箱</p>
            <input type="text"/>
        </div>
        <button class="golf-demo-start-button golf-demo-button-large" @click="goSelect">開始練習</button>
    </div>
</template>

<script>
export default {
    methods: {
        goSelect() {
            this.$emit('nextStage');
        },
    },
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
    font-size: 14px;
    font-weight: bold;
}
.golf-demo-pre-register-form input {
    height: 50px;
    border-radius: 20px;
    margin-top: 5px;
}
</style>