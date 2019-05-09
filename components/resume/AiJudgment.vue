<template>
    <div class="ai-judgment">
        <div class="load-history">載入歷史</div>
        <div class="answer-for-ai">
            <br>
            <textarea placeholder="請填入你的練習回答"></textarea>
            <div class="send-answer">送出答案</div>
        </div>
    </div>
</template>
<style>
.ai-judgment{
    height: 100%;
}
.load-history{
    width: fit-content;
    height: 21px;
    line-height: 21px;
    text-align: center;
    background: white;
    color: #707070;
    border-radius: 6px;
    display: block;
    margin-left: auto;
    padding: 0px 10px;
}
.answer-for-ai{
    margin-top:5px;
    position: relative;
    height: calc(95% - 21px);
    background: white;
    color: black;
    border-radius: 10px;
}
.answer-for-ai textarea{
    color: black;
    width: calc(100% - 20px);
    height: calc(100% - 70px);
    margin: auto;
    display: block;
    font-size: 14px;
    border-style: none; 
}
.send-answer{
    position:absolute;
    bottom: 17px;
    text-align:center;
    height: 40px;
    width: 280px;
    line-height: 40px;
    color: black;
    background: #FFE100;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
    left: 50%;
    transform: translateX(-50%);
}
</style>