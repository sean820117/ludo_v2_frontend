<template>
    <div class="ai-judgment">
        <div class="load-history" @click="toggleHistory">載入歷史<img src="triangle.jpg" />
            <div class="resume-history" ref="historyList">
            </div>
        </div>
        <div class="answer-for-ai">
            <br>
            <textarea placeholder="請填入你的練習回答" ref="autoSizeTextarea" v-model="resumePractice"></textarea>
            <div class="send-answer" @click="showFeedBack">送出答案</div>
        </div>
        <ai-feed-back ref="feedBackBlock"/>
    </div>
</template>
<script>
import AiFeedBack from "~/components/resume/AiFeedBack"
export default{
    components: {
        AiFeedBack,
    },
    mounted: function() {
        this.$refs.autoSizeTextarea.oninput = this.adjustTextAreaHeight.bind(this);
        this.$refs.autoSizeTextarea.onchange = this.adjustTextAreaHeight.bind(this);
        this.buildLabel();
    },
    methods: {
        adjustTextAreaHeight(){
            this.$refs.autoSizeTextarea.style.height = "66px";
            this.$refs.autoSizeTextarea.style.height = this.$refs.autoSizeTextarea.scrollHeight+"px";
        },
        buildLabel(){
            this.$refs.historyList.innerHTML="";
            if(localStorage["resumePractice"]){
                let rp = JSON.parse(localStorage["resumePractice"]);
                this.rpArray = rp;
                for(let i = 0; i < rp.length; i++){
                    let nd = document.createElement("div");
                    nd.innerHTML = "第 "+(i+1)+" 次";
                    nd.onclick = function(){
                        this.loadResumeText(i);
                    }.bind(this);
                    this.$refs.historyList.appendChild(nd);
                }
            }else{
                this.$refs.historyList.innerHTML="<div>無紀錄</div>";
            }
        },
        loadResumeText(i){
            if(this.rpArray && this.rpArray[i]){
                this.resumePractice = this.rpArray[i];
            }
        },
        toggleHistory(){
            this.isHistoryShow = !this.isHistoryShow;
            if(this.isHistoryShow){
                this.$refs.historyList.style.display = "block";
            }else{
                this.$refs.historyList.style.display = "none";
            }
        },
        showFeedBack(){
            if(this.rpArray){
                if(this.rpArray.length >= 5){
                    this.rpArray.shift();
                }
                this.rpArray.push(this.resumePractice);
                localStorage["resumePractice"] = JSON.stringify(this.rpArray);
            }else{
                this.rpArray = [this.resumePractice];
                localStorage["resumePractice"] = JSON.stringify(this.rpArray);
            }
            this.buildLabel();
            this.$refs.feedBackBlock.show();
        }
    },
    data:() => ({
        isHistoryShow: false,
        resumePractice: "",
        rpArray: null,
    }),
}
</script>
<style>
.ai-judgment{
    height: 100%;
}
.load-history{
    position:relative;
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
.resume-history{
    position: absolute;
    display: grid;
    width: 130px;
    left: -47px;
    top: 23px;
    grid-gap: 1px;
    background: #000;
    z-index: 20;
    padding: 1px;
    display: none;
}
.resume-history > div{
    background: white;
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