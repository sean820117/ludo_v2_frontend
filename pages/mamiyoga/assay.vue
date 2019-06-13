<template>
    <div class="mamiyoga-assay-page">
        <video class="mamiyoga-assay-video" controls>
                <source :src="video_url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="goback-btn">
            <router-link to="/mamiyoga/teach">
                <div class="goback-line"></div>
            </router-link>
        </div>
        <div class="mamiyoga-assay-box" >
            <div class="mamiyoga-assay-content" v-if="show_assay">
                <div class="mamiyoga-assay-title"><h3>分析結果</h3></div>
                <div class="mamiyoga-assay-content-box">
                    <div class="mamiyoga-assay-content-li"  v-for="(tags, i) in reps_wrong_tags" :key="i">
                        <h4 class="mamiyoga-assay-content-time">第{{i+1}}回</h4>
                        <hooper class="mamiyoga-assay-content-detailed-box">
                            <slide class="mamiyoga-assay-content-detailed" v-for="(tag ,index) in tags" :key="index">{{tag}}</slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    data:()=> ({
        video_url: 'test',
        reps_wrong_tags:[['脖子要稍微提高，不然會受傷唷！'],['做得非常正確唷！'],['手掌心是向內，感覺肌肉在支撐手臂']],
        show_assay:false,
    }),
    components: {
        Hooper,
        Slide,
        HooperNavigation,
    },
    mounted: function(){
        setTimeout(()=>{
            this.show_assay = true;
        },3000)
    },
}
</script>

<style>
@media (max-width: 899px) {
    .mamiyoga-assay-page {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
        overflow: hidden;
        position: relative;
    }
    .mamiyoga-assay-video {
        width: 100vw;
        height: 70vh;
    }
    .goback-btn {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .goback-line {
        width: 20px;
        height: 5px;
        background: #EEEFEA;
        transform: rotate(-45deg);
        position: absolute;
        top: 3px;
        left: 5px;
        border-radius: 25px;
    }
    .goback-line::after {
        content: '';
        width: 20px;
        height: 5px;
        background: #EEEFEA;
        transform: rotate(90deg);
        position: absolute;
        top: 8px;
        left: -8px;
        border-radius: 25px;
    }
    .mamiyoga-assay-box {
        width: 100vw;
        padding: 15px;
        position: relative;
        height: 30vh;
    }
    .mamiyoga-assay-content {
        background: white;
        width: 90vw;
        height: 32vh;
        margin: 0 auto;
        border-radius:20px; 
        padding: 0 15px 5px 15px;
        position: absolute;
        /* top: -30px; */
        left: 5vw;
        top: -30px;
        animation: uptosee 10s;
    }
    @keyframes uptosee {
        0% {
            top: 30vh ;
        }
        25%{
            top: -30px;
        }
        100% {
            top: -30px;
        }
    }
    .mamiyoga-assay-title {
        width: 170px;
        height: 45px;
        background-color: #9BAEB2; 
        margin: 0 auto;
        padding: 5px;
        border-radius: 0 0 25px 25px;
        margin-bottom: 15px;
        text-align: center;
        color: #fff;
    }
    .mamiyoga-assay-content-box {
        width: auto;
        height: 20vh;
        overflow-y: auto;
        overflow-x: hidden; 
    }
    .mamiyoga-assay-content-li {
        width: 95%;
        min-height: 50px;
        display: inline-flex;
        align-items: center;
        color: white;
        border-radius: 10px;
        margin: 10px 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,.2)
    }
    .mamiyoga-assay-content-li:nth-child(odd) {
        background-color:#D6D6D6; 
    }
    .mamiyoga-assay-content-li:nth-child(even) {
        background-color: #9A9A9A;
    }
    .mamiyoga-assay-content-time {
        font-weight: 500;
        padding: 0 25px;
        min-width: 90px;
        border-right: 2px #fff solid;
        font-size: 14px;
    }
    .mamiyoga-assay-content-detailed {
        padding: 5px 25px;
        font-size: 13px;
        align-self: auto;
        margin-bottom: 0; 
        max-width: 52vw;
    }
    .mamiyoga-assay-contact {
        width: 150px;
        height: 80px;
        margin: 15px auto 0 auto;
    }
    .mamiyoga-assay-contact-explain {
        text-align: center;
        font-size: 12px;
        color: #BFBFBF; 
        margin-bottom: 5px;
        
    }
    .hooper {
        height: auto;
        position: relative;
        
    }
    .hooper-prev.is-disabled, .hooper-prev {
        position: absolute;
        top: 53%;
        left: -15px;
    }
    .hooper-next.is-disabled, .hooper-next {
        position: absolute;
        top: 53%;
        right: 80px;
    }
    .hooper-prev.is-disabled,.hooper-next.is-disabled,.hooper-prev {
        display: none;
    }

}
</style>
