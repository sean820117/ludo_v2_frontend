<template>
    <div class="feed-back">
        <img class="close-feed-back" src="Rectangle 235.png"/>
        <div class="feedback-title">第1次經歷描述練習成果</div>
        <div class="feedback-level">B級</div>
        <div>
            <div class="feedback-content-title">等級說明</div>
            <div class="feedback-content">
                內容內容內容內容內容內容<br>
                內容內容內容內容內容
            </div>

            <div class="feedback-content-title">修改建議</div>
            <div class="feedback-content">
                內容內容內容內容內容內容<br>
                內容內容內容內容內容
            </div>

            <div class="feedback-content-title">A級參考範例</div>
            <div class="feedback-content-bule">
                內容內容內容內容內容內容<br>
                內容內容內容內容內容
            </div>

            <div class="feedback-content-title">為什麼這個範例會是A級</div>
            <div class="feedback-content">
                內容內容內容內容內容內容<br>
                內容內容內容內容內容
            </div>
        </div>
    </div>
</template>
<style>
.feed-back{
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 20;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    padding: 45px;
    color: #0090FF;
    background: white;
}
.close-feed-back{
    position: fixed;
    right: 16px;
    top: 16px;
    z-index: 21;
}
.feedback-title{
    font-size: 17px;
    display: block;
    margin:auto;
    margin-top: 30px;
    text-align: center;
}
.feedback-level{
    font-size: 30px;
    text-align: center;
    margin-bottom: 37px;
}
.feedback-content-title{
    font-size: 17px;
    font-weight: 500;
}
.feedback-content{
    font-size: 13px;
    color: #8F8F8F;
    margin-bottom: 20px;
}
.feedback-content-bule{
    width: 100%;
    background:#0090FF;
    color: white;
    font-size: 13px;
    padding: 10px;
    border-radius: 7px;
    margin-top: 9px;
    margin-bottom: 10px;
}
</style>