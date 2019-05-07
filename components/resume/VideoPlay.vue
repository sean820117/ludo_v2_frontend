<template>
    <div style="text-align:center">
        <iframe class="videoplay" ref="player"
        :src="videourl" 
        frameborder="0" 
        allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</template>
<script>
export default{
    props:{
        videourl: String
    },
    // mounted: function() {
    //     var player = this.$refs.player;
    //     player.style.width = this.playerWidth;
    //     player.style.height = this.playerHeight;
    // }
}
</script>
<style>
.videoplay{
    width: 100vw;
    height: 222px;
    background: black;
}
</style>