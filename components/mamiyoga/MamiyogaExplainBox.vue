<template>
    <div class="mamiyoga-explain">
        <div class="mamiyoga-explain-close" @click="closeBox">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/close-box.png" alt="">
        </div>
        <div class="mamiyoga-explain-content">
            <hooper :autoPlay="true">
                <slide>
                   <h5>{{$t('explain_title_first')}}</h5>
                   <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-1.png" alt="">
                   <p>{{$t('explain_text_first')}}</p>
                </slide>
                <slide>
                    <h5>{{$t('explain_title_secord')}}</h5>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-2.png" alt="">
                    <p>{{$t('explain_text_secord')}}</p>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
            <!-- <carousel :perPageCustom="[[300,1]]">
                <slide>
                   <h5>{{$t('explain_title_first')}}</h5>
                   <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-1.png" alt="">
                   <p>{{$t('explain_text_first')}}</p>
                </slide>
                <slide>
                    <h5>{{$t('explain_title_secord')}}</h5>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/explain-2.png" alt="">
                    <p>{{$t('explain_text_secord')}}</p>
                </slide>
            </carousel> -->
        </div>
        <!-- <div style="margin-top:8vh;">
            <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" btnText="影片教學" style="margin-bottom:5vh;"></mamiyoga-btn>
        </div> -->
    </div>
</template>

<script>
import Vue from 'vue';

import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
// import VueCarousel from 'vue-carousel';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
// import { Carousel, Slide } from 'vue-carousel';
import 'hooper/dist/hooper.css';
// Vue.use(VueCarousel);
export default {
    components: {
        MamiyogaBtn,
        Hooper,
        Slide,
        HooperPagination,
        
        // Carousel,
        // Slide,
    },
    methods: {
        closeBox(){
            this.$emit('closeExplain')
        }
    }
}
</script>

<style>
.mamiyoga-explain {
    width: 100vw;
    height: 100vh;
    background: #24798F;
    position: fixed;
    top: 0;
    z-index: 999;
}
.mamiyoga-explain-close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
.mamiyoga-explain-content {
    width: 90vw;
    height: 80vh;
    margin: 0 auto;
    padding-top: 45px;
}
.mamiyoga-explain-content h5 {
    text-align: center;
    color: #F7F7F7;
    font-size: 20px;
}
.mamiyoga-explain-content img {
    display: block;
    margin: 3vh auto;
    height: 45vh;
    width: auto;
}
.mamiyoga-explain-content p {
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 66vw;
    margin: 5vh auto 0;
}
.mamiyoga-explain .hooper {
    height: 75vh;
}
.mamiyoga-explain .hooper-indicator {
    width: 7px;
    height: 7px;
    background-color: rgba(255,255,255,.4); 
    margin: 0 4px; 
}
.mamiyoga-explain .hooper-indicator.is-active, 
.mamiyoga-explain .hooper-indicator:hover {
    background-color:#fff; 
}
.mamiyoga-explain .hooper-pagination {
    bottom: -5vh;
}
.mamiyoga-explain-close img {
    width: 30px;
    height: 30px;
}
@media (min-width: 769px) {
    .mamiyoga-explain {
        width: 450px;
        height: 100vh;
        background: #24798F;
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .mamiyoga-explain-close {
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .mamiyoga-explain-content {
        width: 100%;
        height: 80vh;
        margin: 0 auto;
        padding-top: 10vh;
    }
    .mamiyoga-explain-content h5 {
        text-align: center;
        color: #F7F7F7;
        font-size: 20px;
    }
    .mamiyoga-explain-content img {
        display: block;
        margin: 3vh auto;
        height: 45vh;
        /* width: 85%; */
        width: auto;
    }
    .mamiyoga-explain-content p {
        color: white;
        font-size: 14px;
        font-weight: bold;
        width: 80%;
        margin: 5vh auto 0;
    }
    .mamiyoga-explain .hooper {
        width: 100%;
        height: 75vh;
    }
    
    .mamiyoga-explain .hooper-indicator {
        width: 7px;
        height: 7px;
        background-color: rgba(255,255,255,.4); 
        margin: 0 4px; 
    }
    .mamiyoga-explain .hooper-indicator.is-active, 
    .mamiyoga-explain .hooper-indicator:hover {
        background-color:#fff; 
    }
    .mamiyoga-explain .hooper-pagination {
        bottom: 5vh;
    }
}

    

</style>
