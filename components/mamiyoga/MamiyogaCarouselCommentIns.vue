<template>
    <div class="comment-ins-block">
        <div v-if="$mq == 'iphone'">
            <carousel :perPage="1" :autoplay="false" :paginationPadding="5"
            :paginationSize="8" :paginationColor="'#D1D1D1'" :paginationActiveColor="'#707070'" 
            :loop="true"
            :spacePadding="40" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig01.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig02.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                       <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig03.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                       <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig04.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig05.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig06.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig07.png" alt="">
                    </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div v-if="$mq == 'mobile'">
            <carousel :perPage="1" :autoplay="false" :paginationPadding="5"
            :paginationSize="8" :paginationColor="'#D1D1D1'" :paginationActiveColor="'#707070'" 
            :loop="true"
            :spacePadding="60" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig01.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig02.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                       <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig03.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig04.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig05.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig06.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig07.png" alt="">
                    </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div v-if="$mq == 'desktop'" id="desktop-ins">
            <carousel :perPage="3" :paginationPadding="5" 
            :paginationSize="8" :paginationColor="'#D1D1D1'" :paginationActiveColor="'#707070'" 
             :paginationEnabled="true" :scrollPerPage="true">
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig01.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig02.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig03.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig04.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig05.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig06.png" alt="">
                    </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-second-slide-block">
                    <div class="intro-wrap-block-second-slide">
                    <div class="intro-wrap-block-second-content">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/ig07.png" alt="">
                    </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    mounted(){
        if (process.browser) {
            
        }
    }
}
</script>

<style>
.intro-wrap-block-second-slide-block {
    display: flex;
    align-items: center;
    justify-content: center;
}
.intro-wrap-block-second-content {
    width: 280px;
    height: 500px;
    margin-top: 20px;
    /* margin: 20px 0 0; */
    border-radius: 30px;
    /* background: linear-gradient(#EEEFEA,#EEEFEA,#E4E7E3,#E4E7E3,#DCD8CF,#DCD8CF); */
}
.intro-wrap-block-second-content img {
    /* width: 90%; */
    height: 100%;
    display: block;
    margin: 0 auto;
}
.intro-wrap-block-second-content p {
    color:#707070;
    font-size: 14px;
    padding-top: 40px;
    margin-bottom: 20px;
    /* margin: 0 0 20px 15%; */
    text-align: center;
}
@media (min-width: 769px) {
    .comment-ins-block {
        max-width: 1366px;
        margin: 0 auto;
    }
    #desktop-ins {
        width: 100%;
        margin: 5vh auto 0;
    }
    .intro-wrap-block-second-slide-block {
        display: unset;
        /* height: 70vh; */
    }
    .intro-wrap-block-second-content {
        width: auto;
        height: unset;
    }
    .intro-wrap-block-second-content img {
        width: 90%;
        /* height: 700px; */
        
    }
}
@media (min-width: 769px) and (max-width: 1080px) {
    /* .intro-wrap-block-second-content img {
        height: auto;
        width: 95%;
    } */
    .intro-wrap-block-second-content,.intro-wrap-block-second-slide-block {
        height: auto;
    }
}
</style>