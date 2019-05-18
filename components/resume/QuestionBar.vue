<template>
    <div class="question-bar" v-if="toggled">
        {{question}} 
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
    width: 100%;
    height: 33px;
    line-height: 33px;
    border-radius: 16px;
    color: #007CDC;
    background: #d9eeff;
    padding-left: 20px;
    font-size: 15px;
    margin-bottom: 9px;
}
.cross{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
</style>