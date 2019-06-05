<template>
    <div class="yoga-assay">
        <video class="yoga-assay-video" controls><source src="/yoga/Yoga-video-assay-text.MOV">您的瀏覽器不支援此 HTML5 影片標籤</video>
        <div class="yoga-assay-content">
            <h3>分析結果</h3>
            <div class="yoga-assay-content-li">
                <p class="yoga-assay-content-li-time">一回目</p>
                <p class="yoga-assay-content-li-content">もうちょっと頭をあげてね</p>
            </div>
            <div class="yoga-assay-content-li">
                <p class="yoga-assay-content-li-time">二回目</p>
                <p class="yoga-assay-content-li-content">パーフェクト</p>
            </div>
            <div class="yoga-assay-other">
                <p>分析結果がズレてる場合</p>
                <button>お問い合わせ</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 899px) {
    .yoga-assay {
        width: 100vw;
        height: 100vh;
        background-color: #99CBA5;
    }
    .yoga-assay-video {
        width: 100vw;
        height: 50vh;
        background-color: #000;
    }
    .yoga-assay-content {
        position: relative;
        width: 90vw;
        height: 44vh;
        background-color: white;
        border-radius: 30px; 
        margin: 10px auto 0 auto;
        box-shadow: 0 4px 10px rgba(0,0,0, .2);
        padding-top:15px; 
    }
    .yoga-assay-content h3 {
        color: #99CBA5;
        font: 20px;
        text-align: center;
        margin-bottom: 30px;
    }
    .yoga-assay-content-li {
        width: 280px;
        height: 40px;
        margin: 15px auto; 
        color: #99CBA5;
    }
    .yoga-assay-content-li-time {
        float: left;
        width: 80px;
        font-size: 15px;
        padding: 2px 0 2px 10px;
        border-right: solid 2px #DEDEDE;
        font-weight:500; 
    }
    .yoga-assay-content-li-content {
        float: left;
        font-size: 14px;
        padding: 4px 0 4px 23px;
    }
    .yoga-assay-other {
        text-align: center;
        position: absolute;
        bottom: -20px;
        right: 24vw;
    }
    .yoga-assay-other p {
        margin-bottom: 10px;
        font-size: 13px;
        color: #BFBFBF; 
    }
    .yoga-assay-other button {
        border-style: none;
        width: 120px;
        height: 50px;
        background-color: #99CBA5;
        color: white;
        border-radius: 20px;
        box-shadow: 0 4px 10px rgba(0,0,0, .2);
        font-size: 16px;
        
    }
}
</style>
