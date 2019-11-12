<template>
    <div>
        <div v-if="$mq != 'desktop'" class="new-result">
            <img @click="closeResult" class="new-result-close-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            <!-- <mamiyoga-hamburger-header></mamiyoga-hamburger-header> -->
            <h5 class="syllabus-desktop-title" style="margin-top: 50px;">{{$t('desktop_syllabus_finish_feedback')}}</h5>
            <video :src="video_result.video_url" controls class="new-result-video"></video>
            <div class="new-result-score-block">
                <p class="new-result-score">{{video_result.score}}</p>
                <p class="new-result-score-text">分</p>
            </div>
            <div class="new-result-li-block">
                <div>
                    <no-ssr class="new-result-li-outside" v-for="(tags,i) in video_result.reps_wrong_tags"
                    :key="i">
                        <carousel class="new-result-li-box" :perPage="1" :navigationEnabled="true"
                        :paginationEnabled="false">
                            <slide class="new-result-li" v-for="(tag,index) in tags" :key="index" v-html="`第${i+1}回 ｜ ${tag}`"></slide>
                            <!-- <slide class="new-result-li">繼續保持</slide>
                            <slide class="new-result-li">加油！</slide> -->
                        </carousel>   
                    </no-ssr>
                </div>
            </div>
            <!-- <div class="new-result-link-course-btn" @click="closeResult" style="background:transparent;color:#ff9898;margin: 10px auto;">關閉分析</div> -->
            <div class="new-result-link-course-btn" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/menu`)">{{$t('desktop_syllabus_finish_btn_see_course')}}</div>
        </div>
        <div v-else class="desktop-new-result-back">
            <div class="desktop-new-result-block">
                <img @click="closeResult" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
                <h5 class="syllabus-desktop-title" style="font-size:35px;margin-top: 25px;font-weight:bold;">{{$t('desktop_syllabus_finish_feedback')}}</h5>
                <div class="desktop-new-result-flex">
                    <video :src="video_result.video_url" controls class="new-result-video"></video>
                    <div class="new-result-score-outside-block">
                        <div class="new-result-score-block">
                            <p class="new-result-score">{{video_result.score}}</p>
                            <p class="new-result-score-text">分</p>
                        </div>
                        <div class="new-result-li-block">
                            <div>
                                <no-ssr class="new-result-li-outside" v-for="(tags,i) in video_result.reps_wrong_tags"
                                :key="i">
                                    <carousel class="new-result-li-box" :perPage="1" :navigationEnabled="true"
                                    :paginationEnabled="false">
                                        <slide class="new-result-li" v-for="(tag,index) in tags" :key="index" v-html="`第${i+1}回 ｜ ${tag}`"></slide>
                                        <!-- <slide class="new-result-li">繼續保持</slide>
                                        <slide class="new-result-li">加油！</slide> -->
                                    </carousel>   
                                </no-ssr>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex;justify-content: center;">
                    <!-- <div class="new-result-link-course-btn" @click="closeResult" style="margin: 0 10px;background:#fff;color:#ff9898;">關閉分析</div> -->
                    <div class="new-result-link-course-btn" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/menu`)" style="margin: 0 10px;">{{$t('desktop_syllabus_finish_btn_see_course')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue'
export default {
    props: {
        video_result: Object,
        result_video: String,
        result_score: String,
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
    position: absolute;
    top: 0;
    z-index: 1005;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA)
}
.new-result-close-img {
    width: 20px;
    position: absolute;
    top: 15px;
    left: 15px;
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
        height: 80%;
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
        margin: 0;
    }
    .desktop-new-result-flex {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        height: 60%;
        margin: 2% 0 0;
    }
    .new-result-video {
        width: 50%;
        height: 90%;
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
        max-height: calc(100% - 115px);
    }
    .new-result-score-outside-block {
        height: 90%;
    }
}
</style>