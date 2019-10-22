<template>
    <div>
        <div v-if="$mq != 'desktop'" class="new-result">
            <mamiyoga-hamburger-header></mamiyoga-hamburger-header>
            <h5 class="syllabus-desktop-title">助教回饋</h5>
            <video :src="result_video" controls class="new-result-video"></video>
            <div class="new-result-score-block">
                <p class="new-result-score">95</p>
                <p class="new-result-score-text">分</p>
            </div>
            <div class="new-result-li-block">
                <div>
                    <no-ssr class="new-result-li-outside">
                        <carousel class="new-result-li-box" :perPage="1" :navigationEnabled="true"
                        :paginationEnabled="false">
                            <slide class="new-result-li">做得好</slide>
                            <slide class="new-result-li">繼續保持</slide>
                            <slide class="new-result-li">加油！</slide>
                        </carousel>   
                    </no-ssr>
                    <no-ssr class="new-result-li-outside">
                        <carousel class="new-result-li-box" :perPage="1" :navigationEnabled="true"
                        :paginationEnabled="false">
                            <slide class="new-result-li">做得好</slide>
                            <slide class="new-result-li">繼續保持</slide>
                            <slide class="new-result-li">加油！</slide>
                        </carousel>   
                    </no-ssr>
                    <no-ssr class="new-result-li-outside">
                        <carousel class="new-result-li-box" :perPage="1" :navigationEnabled="true"
                        :paginationEnabled="false">
                            <slide class="new-result-li">做得好</slide>
                            <slide class="new-result-li">繼續保持</slide>
                            <slide class="new-result-li">加油！</slide>
                        </carousel>   
                    </no-ssr>
                </div>
            </div>
            <div class="new-result-link-course-btn">觀看課程</div>
        </div>
        <div v-else class="desktop-new-result-back">
            <div class="desktop-new-result-block">
                <img @click="closeResult" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
                <h5 class="syllabus-desktop-title" style="font-size:35px;margin-top: 25px;font-weight:bold;">助教回饋</h5>
                <div class="desktop-new-result-flex">
                    <video :src="result_video" class="new-result-video"></video>
                    <div>
                        <div class="new-result-score-block">
                            <p class="new-result-score">95</p>
                            <p class="new-result-score-text">分</p>
                        </div>
                        <div class="new-result-li-block">
                        <div>
                            <no-ssr class="new-result-li-outside">
                                <carousel class="new-result-li-box" :perPage="1" :navigationEnabled="true"
                                :paginationEnabled="false">
                                    <slide class="new-result-li">做得好</slide>
                                    <slide class="new-result-li">繼續保持</slide>
                                    <slide class="new-result-li">加油！</slide>
                                </carousel>   
                            </no-ssr>
                            <no-ssr class="new-result-li-outside">
                                <carousel class="new-result-li-box" :perPage="1" :navigationEnabled="true"
                                :paginationEnabled="false">
                                    <slide class="new-result-li">做得好</slide>
                                    <slide class="new-result-li">繼續保持</slide>
                                    <slide class="new-result-li">加油！</slide>
                                </carousel>   
                            </no-ssr>
                            <no-ssr class="new-result-li-outside">
                                <carousel class="new-result-li-box" :perPage="1" :navigationEnabled="true"
                                :paginationEnabled="false">
                                    <slide class="new-result-li">做得好</slide>
                                    <slide class="new-result-li">繼續保持</slide>
                                    <slide class="new-result-li">加油！</slide>
                                </carousel>   
                            </no-ssr>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue'
export default {
    props: {
        result_video: String,
    },
    components: {
        MamiyogaHamburgerHeader,
    },
    methods: {
        closeResult(){
            this.$emit('closeResult');
        }
    }
}
</script>

<style>
.new-result {
    padding-bottom: 5vh;
}
.syllabus-desktop-title {
    color: #24798f;
    text-align: center;
    font-size: 30px;
}
.new-result-video {
    width: 100vw;
    margin-top: 5vh;
}
.new-result-score-block {
    display: flex;
    align-items: baseline;
    justify-content: center;
    color: #97A8AF;
    margin: 2vh 0;
}
.new-result-score {
    font-size: 80px;
    font-weight: bold;
}
.new-result-score-text {
    font-size: 25px;
    margin-left: 10px;
}
.new-result-li-block {
    width: 85%;
    height: 50vh;
    max-height: 200px;
    margin: 0 auto;
    overflow: auto;
    overflow-x: hidden;
}
.new-result-li-box {
    width: 90%;
    min-height: 50px;
    background: #24798f;
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
    margin: 10px auto;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    padding-left: 30px;
    display: flex;
    justify-content: center;
}
.new-result-li-outside:nth-child(even)  {
    background: #9A9A9A;
}
.VueCarousel-navigation-button[data-v-453ad8cd]{
    color: #fff;
}
.VueCarousel-navigation-prev[data-v-453ad8cd] {
    left: 30px;
}
.VueCarousel-navigation-next[data-v-453ad8cd] {
    right: 30px;
}
.VueCarousel-navigation--disabled[data-v-453ad8cd]{
    opacity: 0;
}
.new-result-link-course-btn {
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    background: #FF9898;
    border: 3px solid #FF9898;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
    -webkit-user-select: none;
}
@media (min-width: 769px) {
    .desktop-new-result-back {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.7);
        position: fixed;
        top: 0;
        z-index: 1001;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .desktop-new-result-block {
        width: 85%;
        max-width: 1366px;
        height: 60%;
        min-height: 400px;
        max-height: 600px;
        background: #FAFAFA;
        border-radius: 10px;
        position: relative;
    }
    .desktop-new-result-block img {
        position: absolute;
        top: 23px;
        left: 23px;
        width: 25px;
        cursor: pointer;
    }
    .syllabus-desktop-title {
        font-size: 50px;
        font-weight: 300;
        margin: 0 0 2vh;
    }
    .desktop-new-result-flex {
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .new-result-video {
        width: 65%;
        margin: 0;
    }
    .new-result-score-block{
        margin: 0 auto 2vh;
    }
    .new-result-score {
        font-size: 100px;
    }
    .new-result-li-block {
        width: 350px;
        height: 50vh;
        max-height: 300px;
    }
}
</style>