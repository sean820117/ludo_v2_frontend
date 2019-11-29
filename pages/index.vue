<template>
    <div class="main-container">
        <div class="temp-text">
            對考生來說落點分析確實不易,更遑論通過一階後還有二階辛苦的準備
            故此,得勝者文教推出"個人申請一站式輔助網站"
            幫助考生在面對學測後的這些繁瑣流程
            都能有專人從旁引導,提供資源
            本站將於1/18後開放使用
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    data:() => ({
        
    }),
    mounted: function () {
      if (!process.server) {
        // this.$router.push('/victor');
      }
    },
}
</script>

<style>
.main-container {
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    widows: 100vw;
    height: 100vh;
}
.temp-text {
    width: 330px;
    border-radius: 50px;
    background: bisque;
    padding: 30px;
}
</style>