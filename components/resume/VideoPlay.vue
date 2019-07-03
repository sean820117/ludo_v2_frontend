<template>
    <div class="videoplayer-container" style="text-align:center">
        <iframe :id="playerID"  ref="coursePlayer"
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
        playerID: String,
        title: String,
    },
    data:() => ({
        video_10_percent:false,
        video_50_percent:false,
        video_90_percent:false,
    }),    
    mounted: function() {
        if (process.client) {
            var iframe = this.$refs.coursePlayer;
            // this.dcPlayer = new Vimeo.Player(this.dv);
            // this.dcPlayer.loadVideo(getChapterData01.video_id);
            this.player = new Vimeo.Player(iframe);
            this.player.on('ended', this.onEndCallback);
            this.player.on('play',this.onPlayCallback);
            this.player.on('loaded',this.onLoadedCallback);
            this.player.on('timeupdate',this.onTimeUpdateCallback);
        }
    },
    methods: {
        getTotalTime(){ //return promise
            return this.player.getDuration();
        },
        getCurrentTime(){ // return promise
            return this.player.getCurrentTime();
        },
        onLoadedCallback() {
            this.video_10_percent = false;
            this.video_50_percent = false;
            this.video_90_percent = false;
        },
        onPlayCallback() {
            this.$gtag('event', 'Play', {
                'event_category': 'Video',
                'event_label': this.title,
            });
            this.$fbq('trackCustom', 'PlayVideo', {title: this.title});
        },
        onEndCallback() {
            this.$gtag('event', 'End', {
                'event_category': 'Video',
                'event_label': this.title,
            });
        },
        onTimeUpdateCallback(data) {
            if (data.percent > 0.1 && !this.video_10_percent) {
                this.$gtag('event', 'Play_to_10%', {
                    'event_category': 'Video',
                    'event_label': this.title,
                });
                this.$fbq('trackCustom', 'PlayVideo10p', {title: this.title});
                this.video_10_percent = !this.video_10_percent;
            } else if (data.percent > 0.5 && !this.video_50_percent) {
                this.$gtag('event', 'Play_to_50%', {
                    'event_category': 'Video',
                    'event_label': this.title,
                });
                this.$fbq('trackCustom', 'PlayVideo50p', {title: this.title});
                this.video_50_percent = !this.video_50_percent;
            } else if (data.percent > 0.9 && !this.video_90_percent) {
                this.$gtag('event', 'Play_to_90%', {
                    'event_category': 'Video',
                    'event_label': this.title,
                });
                this.$fbq('trackCustom', 'PlayVideo90p', {title: this.title});
                this.video_90_percent = !this.video_90_percent;
            }
        },
    }
}
</script>
<style>
.videoplayer-container {
    background: transparent;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
}
.video-player { 
    width: 100vw;
    height: 56.25vw;
    max-width:640px;
    max-height:360px;
    background:black;
}
</style>
