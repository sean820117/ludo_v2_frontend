<template>
    <div class="practice-record-block" :style="{backImage:'url('+recordImg+')'}">
        <div class="notice-box" v-if="have_notice"></div>
        <p class="practice-record-block-time" v-text="recordDate">{{recordDate}}</p>
        <div class="starmark-box" @click="checkStar">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star.png" alt="" v-show="!check_star">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/star-checked.png" v-show="check_star" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        have_notice: true,
        check_star: false,
    }),
    props: {
        recordDate: String,
        recordImg: String,
    },
    methods: {
        checkStar(){
            this.check_star = !this.check_star
        }
    },
    computed:{
        // checkOrNot() {
        //     return this.check_star ? 'active':'';
        // }
    }

}
</script>

<style>
.practice-record-block {
    width: 90vw;
    height: 120px;
    margin: 3vh 5vw 0;
    background: black;
    position: relative;
}
.notice-box {
    width: 30px;
    height: 30px;
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-record-notice.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: -2vh;
    right: 3vw;
}
.practice-record-block-time {
    color: white;
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 12px;
}
.starmark-box {
    width: 30px;
    height: 30px;
    /* background-image: url('/mamiyoga/star.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat; */
    position: absolute;
    bottom: 10px;
    right: 3vw;
    cursor: pointer;
}
.starmark-box img {
    width: 25px;
}
/* .bookmark-box.active {
    background-image: url('/mamiyoga/star-checked.svg');
} */
@media (min-width: 769px) {
    .practice-record-block {
        width: 390px;
        margin: 30px auto 0;
    }
    .notice-box {
        bottom: -15px;
        right: 29px;
    }
    .starmark-box {
        bottom: 15px;
        right: 25px;
    }
}
</style>
