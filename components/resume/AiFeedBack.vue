<template>
    <div ref="feedBackContainer" class="feed-back">
        <div class="feed-back-layout">
            <img class="close-feed-back" @click="hide" src="Rectangle 235.png"/>
            <div class="feedback-title">本次練習成果</div>
            <div class="feedback-level">{{ score.rank }}級</div>
            <div>
                <div class="feedback-content-title">等級說明</div>
                <div class="feedback-content" v-html="getRankComment">
                </div>

                <div class="feedback-content-title">修改建議</div>
                <div class="feedback-content" v-html="getRankDetail">
                </div>

                <div class="feedback-content-title">{{ getCurrentHigherRank }}級參考範例</div>
                <div class="feedback-content-bule" v-html="getExample">
                </div>

                <div class="feedback-content-title">為什麼這個範例會是{{ getCurrentHigherRank }}級</div>
                <div class="feedback-content" v-html="getExampleDescription">
                </div>
            </div>
            <div class="close-feed-back-box">
                <button class="close-feed-back-btn" @click="hide">返回</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        show(){
            this.$refs.feedBackContainer.style.display = "block";
        },
        hide(){
            this.$refs.feedBackContainer.style.display = "none";
        },
        setRandom(){
            let rank = this.getHigherRank(this.score.rank);
            let range = this.examples[this.current_chapter.ai_id][rank].length;
            console.log(range);
            this.rand_example_index = Math.floor(Math.random()*range);
        },
        getHigherRank(rank) {
            if (rank == "A") {
                return "A"
            } else if (rank == "B") {
                return "A"
            } else if (rank == "C") {
                return "B"
            } else if (rank == "D") {
                return "C"
            } else if (rank == "E") {
                return "D"
            }
        },
    },
    computed: {
        getRankComment() {
            if (this.current_chapter.rank_comment && this.score) {
                return this.current_chapter.rank_comment[this.score.rank];
            } else {
                return "無";
            }
        },
        getRankDetail() {
            if (this.current_chapter.rank_detail && this.score) {
                let keyword_detail = this.current_chapter.rank_detail['keyword'][this.score.keyword >= 60 ? 'pass' : 'fail'];
                let len_score_detail = this.current_chapter.rank_detail['len_score'][this.score.len_score >= 60 ? 'pass' : 'fail'];
                let numeral_detail = this.current_chapter.rank_detail['numeral'][this.score.numeral >= 60 ? 'pass' : 'fail'];
                let strips_detail = this.current_chapter.rank_detail['strips'][this.score.strips >= 60 ? 'pass' : 'fail'];
                let default_word = this.current_chapter.rank_detail['default_word'];
                return len_score_detail + numeral_detail + strips_detail + keyword_detail + default_word
            } else {
                return "無";
            }
        },
        getCurrentHigherRank() {
            if (this.score) {
                return this.getHigherRank(this.score.rank);
            } else {
                return '';
            }
        },
        getExample() {
            if (this.current_chapter.ai_id && this.score.rank && this.examples) {
                this.setRandom();
                let rank = this.getHigherRank(this.score.rank);
                return this.examples[this.current_chapter.ai_id][rank][this.rand_example_index].example;
            }
        },
        getExampleDescription() {
            if (this.current_chapter.ai_id && this.score.rank && this.examples) {
                let rank = this.getHigherRank(this.score.rank);
                return this.examples[this.current_chapter.ai_id][rank][this.rand_example_index].description;
            }
        }
    },
    props: {
        record_index: '',
        score:{},
        current_chapter:{},
    },
    data:() => ({
        examples:{},
        rand_example_index:0,
        current_example:{},
    }),
    async mounted() {
        if (process.client) {
            this.examples = await require('~/config/resume-examples.js');
        }
    },
}
</script>
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
    display: none;
}
.feed-back-layout {
    margin: auto;
    width: 100vw;
    max-width: 600px;
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
    user-select: none;
}
.close-feed-back-box {
    display: flex;
    align-items: center;
    justify-content: center;
}
.close-feed-back-btn {
    border: none;
    width: 250px;
    height: 45px;
    background: #0090FF;
    color: white;
    border-radius: 7px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    margin-top:60px; 
    box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
}
@media (max-width: 767px) {
    .close-feed-back-btn {
        width: 100px;
    }
}
</style>