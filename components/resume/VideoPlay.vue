<template>
    <div class="videoplayer-container" style="text-align:center">
        <iframe :id="playerID"  ref="player"
        :src="videourl" 
        frameborder="0" 
        allow="autoplay; fullscreen" class="video-player" allowfullscreen></iframe>
    </div>
</template>
<script>
import Player from '@vimeo/player';
export default {
    props:{
        videourl: String,
        playerID: String
    },
    mounted: function() {
        var iframe = document.getElementById(this.playerID);
        this.player = new Player(iframe);
        this.getTotalTime().then(function(duration){
            console.log("duration: "+duration);
        });
    //     var player = this.$refs.player;
    //     player.style.width = this.playerWidth;
    //     player.style.height = this.playerHeight;
    },
    methods: {
        getTotalTime(){ //return promise
            return this.player.getDuration();
        },
        getCurrentTime(){ // return promise
            return this.player.getCurrentTime();
        }
    }
}
</script>
<style>
.videoplayer-container {
    width: 100vw;
    /* height: 222px; */
    background: transparent;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    /**/
    height: 56vw;
    /* max-height: 40vh; */
    max-height:360px;
}
.video-player { 
    width: 100vw;
    height: 56.25vw;
    max-width:640px;
    max-height:360px;
    background:black;
}
</style>
