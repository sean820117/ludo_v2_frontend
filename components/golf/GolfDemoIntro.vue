<template>
    <div class="golf-demo-intro-container">
        <h1 class="golf-demo-intro-title">高爾夫球<br>智慧練習系統</h1>
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
    /* height: 100vh; */
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
    position: fixed;
    bottom: 20px;
    align-self: center;
}
</style>