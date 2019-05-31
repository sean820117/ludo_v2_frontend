<template>
    <div class="vlist" ref="vlist">
        <div ref="listContent" class="list-content" >
            <div v-for="(chapter) in chapters" :key="chapter.video_id" class="video-cell" @click="updateChapter(chapter)">
                <div class="v-img"><img :src="chapter.thumbnail"/></div>
                <div class="v-title">{{  chapter.subtitle }}</div>
                <div class="v-context" v-html="chapter.description"></div>
            </div>
            <loading 
                :active="chapters.length < 1" 
                color="white"
                loader="dots"
            ></loading>
        </div>
        <div class="scroll-button up-button" ref="upButton"><img src="/btn-video-up.png"/></div>
        <div class="scroll-button down-button" ref="downButton"><img src="/btn-video-down.png"/></div>
    </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        Loading,
    },
    data:() => ({
    }),
    props:{
        chapters: Array,
    },
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
        updateChapter(chapter){
            this.$emit("videoSrcChanged",chapter);
        }
    }
}
</script>
<style>
.vlist{
    position: relative;
    /* height: 100%; */
    overflow-y: hidden;
    grid-row: 1 / 3;
}
.list-content {
    max-width: 450px;
    margin: auto;
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
    grid-gap: 10px;
    cursor: pointer;
    margin-bottom: 5px;
}
.v-title{
    font-size: 15px;
    font-weight: bold;
}
.v-context{
    font-size: 12px;
    margin-top: 3px;
}
@media (min-width: 900px) {
    .video-cell {
        grid-template-columns: 160px auto;
    }
    .v-title{
        font-size: 16px;
        font-weight: bold;
    }
    .v-context{
        font-size: 12px;
        margin-top: 5px;
    }
}
.v-img{
    grid-row: 1 / 3;
}
.v-img img{
    width:100%;
    height: auto;
}
</style>