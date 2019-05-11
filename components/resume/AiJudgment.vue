<template>
    <div class="ai-judgment">
        <div class="load-history">載入歷史<img src="triangle.jpg" /></div>
        <div class="answer-for-ai">
            <br>
            <textarea placeholder="請填入你的練習回答" ref="autoSizeTextarea"></textarea>
            <div class="send-answer">送出答案</div>
        </div>
        <ai-feed-back/>
    </div>
</template>
<script>
import AiFeedBack from "~/components/resume/AiFeedBack"
export default{
    components: {
        AiFeedBack,
    },
    mounted: function() {
        this.$refs.autoSizeTextarea.oninput = (function(){
            if(this.offsetHeight > 68){
                this.style.height = "fit-content";
            }
            this.style.height = this.scrollHeight+"px";
        }).bind(this.$refs.autoSizeTextarea);
    }
}
</script>
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
    margin-bottom: 20px;
}
.answer-for-ai textarea{
    color: black;
    width: calc(100% - 20px);
    height: 66px;
    margin: auto;
    display: block;
    font-size: 14px;
    border-style: none; 
    margin-bottom: 65px;
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