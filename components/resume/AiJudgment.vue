<template>
    <div class="ai-judegment">
        <div v-if="ai_id" class="answer-for-ai" @click="focusTextArea">
            <div class="load-history" @click="toggleHistory">輸入紀錄
                <div class="resume-history" ref="historyList">
                </div>
            </div>
            <textarea placeholder="請填入你的練習回答" ref="autoSizeTextarea" v-model="resumePractice" @input="adjustTextAreaHeight" @change="adjustTextAreaHeight"></textarea>
            <div class="send-answer" @click="showFeedBack">送出答案</div>
        </div>
        <div class="ai-judgement-no-ai" v-else>
            這堂課沒有練習喔～
        </div>
        <ai-feed-back ref="feedBackBlock" :record_index="1" :score="current_score" :current_chapter="current_chapter"/>
    </div>
</template>
<script>
import AiFeedBack from "~/components/resume/AiFeedBack"
import axios from '~/config/axios-config'

export default {
    components: {
        AiFeedBack,
    },
    mounted: function() {
        setTimeout(() => {
            if (this.ai_id) {
                document.addEventListener("click", (function(event) {
                    if (event.target.closest(".load-history")) return;
                    this.$refs.historyList.style.display = "none";
                }).bind(this));
            }
        }, 3000);
    },
    methods: {
        adjustTextAreaHeight(){
            if (this.$refs.autoSizeTextarea) {
                this.$refs.autoSizeTextarea.style.height = "66px";
                this.$refs.autoSizeTextarea.style.height = this.$refs.autoSizeTextarea.scrollHeight+"px";
            }
        },
        async buildLabel(){
            try {
                let postData = {
                    section_part: this.ai_id,
                    product_id: "resume_01"
                };
                let response = await axios.post('/apis/ai-assistant/get-evaluate-record',postData)
                if (response.status == '200') {
                    console.log("get record success")
                    console.log(response.data);
                    if (response.data.Items.length == 0) {
                        this.$refs.historyList.innerHTML="<div>無紀錄</div>";
                    } else {
                        this.$refs.historyList.innerHTML="";
                        this.last_loaded_record_items = response.data.Items;
                        // sort items by date
                        this.last_loaded_record_items.sort(function(a,b) {
                            return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0 ;
                        });
                        this.last_loaded_record_items.forEach((item,index) => {
                            let nd = document.createElement("div");
                            nd.innerHTML = "#"+(index+1)+" - Rank " + item.score.rank;
                            nd.onclick = function(){
                                this.loadResumeText(index);
                            }.bind(this);
                            this.$refs.historyList.appendChild(nd);
                        });
                    }
                    this.last_loaded_ai_id = this.ai_id;
                } else {
                    console.log(response)
                }
            } catch(error) {
                console.log(error)
                return {};
            }
        },
        loadResumeText(i){
            if(this.last_loaded_record_items && this.last_loaded_record_items[i]){
                this.resumePractice = this.last_loaded_record_items[i].content;
                setTimeout(() => this.adjustTextAreaHeight(),50);
            }
        },
        async toggleHistory(){
            this.isHistoryShow = !this.isHistoryShow;
            if(this.isHistoryShow){
                if (this.last_loaded_ai_id == this.ai_id) {
                    this.$refs.historyList.style.display = "block";
                } else {
                    this.$refs.historyList.style.display = "block";
                    let loader = this.$loading.show({
                        color:"#1785db",
                        loader:"dots",
                        opacity: 0.8,
                        container:this.$refs.historyList,
                    });
                    await this.buildLabel();
                    loader.hide();
                }
            }else{
                this.$refs.historyList.style.display = "none";
            }
        },
        async showFeedBack(){
            let loader = this.$loading.show({
                color:"#1785db",
                loader:"dots",
                opacity: 0.8,
            });
            try {
                this.current_score = await this.evaluate(this.resumePractice,"resume_01",this.ai_id);
                console.log(this.current_score);
            } catch(error) {
                console.log(error);
            }
            this.buildLabel();
            this.$refs.feedBackBlock.show();
            loader.hide();
        },
        focusTextArea(event){
            if (event.target.closest(".load-history") || event.target.closest(".send-answer")) return;
            this.$refs.autoSizeTextarea.focus();
        },
        async evaluate(content,product_id,section_part) {
            try {
                let response = await axios.post('/apis/ai-assistant/evaluate/',{content:content,product_id:product_id,section_part:section_part})
                if (response.status == '200') {
                    console.log("evaluate success")
                    return response.data.score;
                } else {
                    console.log(response)
                    return {};
                }
            } catch(error) {
                console.log(error)
                return {};
            }
        }
    },
    data:() => ({
        isHistoryShow: false,
        resumePractice: "",
        last_loaded_ai_id: '',
        last_loaded_record_items:[],
        current_score:{},
    }),
    props:{
        ai_id:'',
        current_chapter: {},
    },
}
</script>
<style>
.ai-judegment{
    position: relative;
    height: 35vh;
}
.load-history{
    width: 80px;
    position: absolute;
    right: 0px;
    top: 0px;
    color: #8f8f8f;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    cursor: pointer;
}
.resume-history{
    position: absolute;
    display: grid;
    width: 130px;
    right: 2px;
    top: 33px;
    grid-gap: 1px;
    z-index: 20;
    padding: 1px;
    display: none;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.4);
    min-height: 40px;
    max-height: 112px;
    overflow-y: scroll;
}
.resume-history > div{
    line-height: 18px;
    padding: 10px 24px;
    font-size: 11px;
    background: white;
}
.resume-history > div:hover{
    background: #EEEEEE;
}
.answer-for-ai{
    margin-top:5px;
    position: relative;
    min-height: calc(95% - 21px);
    height: fit-content;
    background: white;
    color: black;
    border-radius: 2px;
    margin-bottom: 20px;
}
.answer-for-ai textarea{
    color: black;
    width: calc(100% - 90px);
    height: 66px;
    margin-left: 10px;
    display: block;
    font-size: 14px;
    border-style: none; 
    margin-bottom: 65px;
    padding-top: 8px;
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
    cursor: pointer;
}
.ai-judgement-no-ai {
    text-align: center;
    font-size: 20px;
    margin-top: 50px;
}
</style>