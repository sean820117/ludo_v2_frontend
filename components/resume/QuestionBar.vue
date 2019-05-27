<template>
    <div class="question-bar" v-if="toggled">
        <a  href="https://www.surveycake.com/s/3kRX6" target="_blank">{{question}}</a>
        <img class="cross" src="~/static/resume/path.png" @click="toggleCross" />
    </div>
</template>
<script>
export default {
    props:{
        question: String,
    },
    data:() => ({
        toggled: true,
    }),
    methods:{
        toggleCross(){
            this.toggled = !this.toggled;
            if(this.$parent.handleToggleCross){
                this.$parent.handleToggleCross();
            }
        }
    }
}
</script>
<style>
.question-bar{
    position: relative;
    width: 90vw;
    height: 33px;
    line-height: 33px;
    border-radius: 16px;
    color: #007CDC;
    background: #d9eeff;
    padding-left: 10px;
    font-size: 15px;
    margin-bottom: 9px;
    max-width: 640px;
}
.question-bar a {
    text-decoration: none;
    color: #007CDC;
}
.cross{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
</style>