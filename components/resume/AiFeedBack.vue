<template>
    <div ref="feedBackContainer" class="feed-back">
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

            <div class="feedback-content-title">{{ getHigherRank }}級參考範例</div>
            <div class="feedback-content-bule" v-html="getExample">
            </div>

            <div class="feedback-content-title">為什麼這個範例會是{{ getHigherRank }}級</div>
            <div class="feedback-content" v-html="getExampleDescription">
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
        }
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
        getHigherRank() {
            if (this.score) {
                if (this.score.rank == "A") {
                    return "A"
                } else if (this.score.rank == "B") {
                    return "A"
                } else if (this.score.rank == "C") {
                    return "B"
                } else if (this.score.rank == "D") {
                    return "C"
                } else if (this.score.rank == "E") {
                    return "D"
                }
            } else {
                return null;
            }
        },
        getExample() {
            if (this.current_chapter.ai_id && this.score.rank && this.examples) {
                console.log(this.current_chapter.ai_id);
                console.log(this.current_chapter.ai_id);
                return this.examples[this.current_chapter.ai_id][this.score.rank][0].example;
            }
        },
        getExampleDescription() {
            if (this.current_chapter.ai_id && this.score.rank && this.examples) {
                return this.examples[this.current_chapter.ai_id][this.score.rank][0].description;
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