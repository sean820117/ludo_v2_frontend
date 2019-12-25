<template>
    <div class="golf-demo-analyse-and-loading-container">
        <img v-if="!show_loading" id="golf-demo-analyse-img" src="/golf/start-analyse.jpg" alt="分析中">
        <div v-else></div>
    </div>
</template>

<script>
export default {
    data:()=>({
        show_loading:false,
        loader:{},
        video_result:{},
    }),
    props:{
        video_recorder:Object,
    },
    async mounted() {
        if (process.client) {
            let t = setTimeout(() => {
                // this.show_loading = true;
                this.loader = this.$loading.show({
                    onCancel: this.yourMethodName,
                    color: '#355129',
                    loader: 'dots',
                    width: 64,
                    height: 64,
                    backgroundColor: '#ffffff',
                    opacity: 0.5,
                    zIndex: 999,
                });
            }, 5000);

            let checkResult = setInterval(async() => {
                this.video_result = await this.video_recorder.getDetailResult();
                if (this.video_result && this.video_result.status == 200) {
                    this.$emit("setResult",this.video_result);
                    this.$emit("nextStage");
                } else if(this.video_result && this.video_result.status == 102) {
                    console.log("still loading...")
                } else {
                    alert("偵測失敗");
                    clearInterval(checkResult);
                }
            }, 5000);
        }
    },
    destroyed() {
        this.loader.hide();
    },
}
</script>

<style>
.golf-demo-analyse-and-loading-container {
    width: 100vw;
    max-width: 60vh;
    margin: 0 auto;
    background-position: center;
    background-color:white;
    background-size: auto 100%;
    display: flex;
    flex-direction: column;
    overflow:hidden;
}
#golf-demo-analyse-img {
    width:100%;
    height:100vh;
    text-align:center;
}
</style>