<template>
    <div class="golf-demo-recorder-container">
        <video playsinline id="golf-demo-back-camera"></video>
        <img id="golf-demo-recorder-target-area" :src="!is_recording ? img_target_area_with_text : img_target_area" alt=""/>
        <button v-if="!is_recording" class="golf-demo-button-small golf-demo-recorder-start-button" @click="startRecording">開始</button>
        <button v-else class="golf-demo-button-small golf-demo-recorder-stop-button" @click="stopRecording">結束</button>
        <!-- <button class="golf-demo-button-small golf-demo-recorder-start-button" @click="startRecording">結束</button> -->
    </div>
</template>

<script>
export default {
    data:()=>({
        video_recorder:{},
        is_recording:false,
        loader:null,
        pose_id: 'golf_standard_1',
        language: 'zh-tw',
        img_target_area_with_text:'/golf/target-area-with-text.png',
        img_target_area:'/golf/target-area-with-text.png',
    }),
    props:{
        user_id:String,
    },
    async mounted() {
        if (process.client) {
            this.loader = this.$loading.show({
                color: '#355129',
                loader: 'dots',
                width: 64,
                height: 64,
                backgroundColor: '#ffffff',
                opacity: 0.5,
                zIndex: 999,
            });
            let options = {
                dev:true,
                video_element_id:'#golf-demo-back-camera',
                should_be_rotated: false,
                // constraints : {
                //     audio: false,
                //     video: {
                //         width:360,
                //         // height:default_height,
                //         aspectRatio: 0.5625,
                //         frameRate: 30,
                //         // facingMode: { exact: "user" },
                //     }
                // },

            }
            this.video_recorder = await this.$newLudoRTC(options);
            console.log(this.video_recorder);
            await this.video_recorder.openCamera();
            this.loader.hide();
        }
    },
    destroyed() {
        this.video_recorder.closeCamera();
    },
    methods:{
        async startRecording() {
            setTimeout(async () => {
                console.log('recording')    
                this.loader = this.$loading.show({
                    color: '#355129',
                    loader: 'dots',
                    width: 64,
                    height: 64,
                    backgroundColor: '#ffffff',
                    opacity: 0.5,
                    zIndex: 999,
                });
                await this.video_recorder.startRecording({
                    pose_id: this.pose_id,
                    user_id: this.user_id || "tester",
                    language: this.language,
                })
                let final_connection_status = await this.video_recorder.getFinalConnectionStatus()
                this.loader.hide();
                if (!final_connection_status) {
                    alert('未成功連上伺服器，可能是網路環境不穩，請稍後重試！')
                    return false;
                }
            }, 100);
            this.is_recording = true;
        },
        stopRecording() {
            this.$emit("setRecorder",this.video_recorder);
            this.video_recorder.stopRecording();
            this.is_recording = false;
            this.$emit("nextStage");
        },
    },
    destroyed() {
        this.loader.hide();
    },
}
</script>

<style>
.golf-demo-recorder-container {
    width: 100vw;
    max-width: 60vh;
    margin: 0 auto;
    background-color:black;
    display: flex;
    flex-direction: column;
}
#golf-demo-self-camera {
    width: 80vw;
    /* height: 100%; */
    transform: scaleX(-1);
    margin: 0 10vw 0;
}
#golf-demo-back-camera {
    width: 80vw;
    /* height: 100%; */
    /* transform: scaleX(-1); */
    margin: 0 10vw 0;
}
.golf-demo-recorder-start-button {
    position:fixed;
    bottom:15px;
    align-self: center;
}
.golf-demo-recorder-stop-button {
    position:fixed;
    bottom:15px;
    align-self: center;
    background:#707070;
}
#golf-demo-recorder-target-area {
    /* height:80%; */
    width:66.64vw;
    /* top:20vw; */
    position:absolute;
    align-self:center;
}
</style>