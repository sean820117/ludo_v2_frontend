<template>
    <div class="vlist" ref="vlist">
        <div ref="listContent" class="list-content">
            <div class="video-cell" @click="function(){updatVideoSrc('319395957')}">
                <div class="v-img"><img src="Group 54.png"/></div>
                <div class="v-title">超同標場</div>
                <div class="v-context">以生在得算化山，種夠是種，看下優味？壓青能代東預上大！星方學，中格選不望能的公員東負前刻？</div>
            </div>
            <div class="video-cell" @click="function(){updatVideoSrc('319395956')}">
                <div class="v-img"><img src="Group 54.png"/></div>
                <div class="v-title">超同標場</div>
                <div class="v-context">以生在得算化山，種夠是種，看下優味？壓青能代東預上大！星方學，中格選不望能的公員東負前刻？</div>
            </div>
            <div class="video-cell" @click="function(){updatVideoSrc('319395955')}">
                <div class="v-img"><img src="Group 54.png"/></div>
                <div class="v-title">超同標場</div>
                <div class="v-context">以生在得算化山，種夠是種，看下優味？壓青能代東預上大！星方學，中格選不望能的公員東負前刻？</div>
            </div>
            <div class="video-cell">
                <div class="v-img"><img src="Group 54.png"/></div>
                <div class="v-title">超同標場</div>
                <div class="v-context">以生在得算化山，種夠是種，看下優味？壓青能代東預上大！星方學，中格選不望能的公員東負前刻？</div>
            </div>
            <div class="video-cell">
                <div class="v-img"><img src="Group 54.png"/></div>
                <div class="v-title">超同標場</div>
                <div class="v-context">以生在得算化山，種夠是種，看下優味？壓青能代東預上大！星方學，中格選不望能的公員東負前刻？</div>
            </div>
            <div class="video-cell">
                <div class="v-img"><img src="Group 54.png"/></div>
                <div class="v-title">超同標場</div>
                <div class="v-context">以生在得算化山，種夠是種，看下優味？壓青能代東預上大！星方學，中格選不望能的公員東負前刻？</div>
            </div>
            <div class="video-cell">
                <div class="v-img"><img src="Group 54.png"/></div>
                <div class="v-title">超同標場</div>
                <div class="v-context">以生在得算化山，種夠是種，看下優味？壓青能代東預上大！星方學，中格選不望能的公員東負前刻？</div>
            </div>
        </div>
        <div class="scroll-button up-button" ref="upButton"><img src="Path 84.png"/></div>
        <div class="scroll-button down-button" ref="downButton"><img src="Symbol 114 – 2.png"/></div>
    </div>
</template>
<script>
export default{
    mounted: function() {
        this.downTimer = null;
        this.upTimer = null;
        this.$refs.listContent.onscroll = () =>{
            if(this.$refs.listContent.scrollTop+this.$refs.listContent.offsetHeight >= this.$refs.listContent.scrollHeight){
                this.$refs.downButton.style.display = "none";
            }else{
                this.$refs.upButton.style.display = "block"
            }
            if(this.$refs.listContent.scrollTop == 0){
                this.$refs.upButton.style.display = "none";
            }else{
                this.$refs.downButton.style.display = "block"
            }
        }
        this.$refs.downButton.onmousedown = () =>{
            if(!this.downTimer)this.downTimer = setInterval(this.scrollDown.bind(this), 17);
        }
        this.$refs.downButton.onmouseup = () => {
            clearInterval(this.downTimer);
            this.downTimer = null;
        }
        this.$refs.upButton.onmousedown = () =>{
            if(!this.upTimer)this.upTimer = setInterval(this.scrollUp.bind(this), 17);
        }
        this.$refs.upButton.onmouseup = () => {
            clearInterval(this.upTimer);
            this.upTimer = null;
        }
        this.$refs.downButton.ontouchstart  = () =>{
            if(!this.downTimer)this.downTimer = setInterval(this.scrollDown.bind(this), 17);
        }
        this.$refs.downButton.ontouchend = () => {
            clearInterval(this.downTimer);
            this.downTimer = null;
        }
        this.$refs.upButton.ontouchstart = () =>{
            if(!this.upTimer)this.upTimer = setInterval(this.scrollUp.bind(this), 17);
        }
        this.$refs.upButton.ontouchend = () => {
            clearInterval(this.upTimer);
            this.upTimer = null;
        }
    },
    methods:{
        adjustHeight(){
            var list = this.$refs.vlist;
            if(list.scrollHeight>list.offsetHeight){
                list.children[0].style.height = "calc(100% - 50px)";
                list.children[0].style.marginTop = "20px";
                list.children[0].style.overflowY = "auto";
                this.$refs.downButton.style.display = "block"
            }
        },
        scrollUp(){
            this.$refs.listContent.scrollTop = this.$refs.listContent.scrollTop - 5;
            if(this.$refs.listContent.scrollTop == 0){
                this.$refs.upButton.style.display = "none";
                clearInterval(this.upTimer);
            }else{
                this.$refs.downButton.style.display = "block"
            }
        },
        scrollDown(){
            this.$refs.listContent.scrollTop = this.$refs.listContent.scrollTop + 5;
            if(this.$refs.listContent.scrollTop+this.$refs.listContent.offsetHeight >= this.$refs.listContent.scrollHeight){
                this.$refs.downButton.style.display = "none";
                clearInterval(this.downTimer);
            }else{
                this.$refs.upButton.style.display = "block"
            }
        },
        updatVideoSrc(id){
            this.$emit("videoSrcChanged",id);
        }
    }
}
</script>
<style>
.vlist{
    position: relative;
    height: 100%;
    overflow-y: hidden;
    grid-row: 1 / 3;
}
.list-content::-webkit-scrollbar{
    width: 0px;
}
.scroll-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: none;
}
.up-button{
    top: 0px;
}
.down-button{
    bottom: 5px;
}
.video-cell{
    display: grid;
    grid-template-columns: 128px auto;
    grid-template-rows: 15px auto;
    grid-gap: 5px;
}
.v-img{
    grid-row: 1 / 3;
}
.v-img img{
    width:100%;
    height: auto;
}
.v-title{
    font-size: 13px;
    font-weight: 500;
}
.v-context{
    font-size: 9px;
}
</style>