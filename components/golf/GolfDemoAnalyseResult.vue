<template>
    <div class="golf-demo-analyse-result-container">
        <p class="golf-demo-analyse-result-title main-color">分析結果</p>
    </div>
</template>

<script>
export default {
    data:()=>({
    }),
    props:{
        analyse_result:Object,
    },
    mounted() {
        if (process.client) {
            console.log(this.analyse_result);
        }
    },
    destroyed() {
    },
}
</script>

<style>
.golf-demo-analyse-result-container {
    width: 100vw;
    max-width: 60vh;
    margin: 0 auto;
    background:url("/golf/golf-demo-bg-white.jpg");
    background-position: center;
    background-color:white;
    background-size: auto 100%;
    display: flex;
    flex-direction: column;
    overflow:hidden;
}
.golf-demo-analyse-result-title {
    width:100%;
    text-align:center;
    margin-top:20px;
    font-weight:bold;
}
</style>