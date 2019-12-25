<template>
    <div class="golf-demo-select-container">
        <h1 class="golf-demo-select-title">請選擇練習</h1>
        <div class="golf-demo-select-button-group">
            <button class="golf-demo-button-large" @click="goRecording">長鐵</button>
            <button class="golf-demo-button-large" @click="goRecording">短鐵</button>
            <button class="golf-demo-button-large" @click="goRecording">木竿</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goRecording() {
            this.$emit('nextStage');
        },
    },
}
</script>

<style>
html,body { 
    height: 100%; padding: 0; margin: 0; 
}
.golf-demo-select-container {
    width: 100vw;
    max-width: 60vh;
    margin: 0 auto;
    /* height: 100vh; */
    /* height:100%; */
    background: url("/golf/golf-demo-bg.jpg") no-repeat;
    background-position: center;
    background-color:black;
    background-size: auto 100%;
    display: flex;
    flex-direction: column;
}
.golf-demo-select-title {
    margin-top: 143px;
}
.golf-demo-select-button-group {
    position: fixed;
    bottom: 20px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}
.golf-demo-select-button-group > button {
    margin-top: 21px; 
}
</style>