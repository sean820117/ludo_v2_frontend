<template>
    <div class="yoga-front" :style="{backgroundImage:'url('+bgImage+')',backgroundRepeat:'no-repeat',backgroundPosition:'75% 0',backgroundSize:'cover'}">
        <div class="yoga-front-header">
            <div class="yoga-front-header-back"><img :src="YogaHeaderBack" alt=""></div>
            <div class="yoga-front-header-tag" :class="collectOrNot" @click="collectCourse()"></div>
        </div>
        <div class="yoga-front-title" :style="{color:textColor}">
            <p v-html="unit"></p>
            <h2 v-html="title"></h2>
        </div>
        <div class="yoga-goto-start-box">
            <button class="yoga-goto-start" @click="goToCourse" :style="{backgroundColor:'#99cba5',borderColor:'#99cba5',color:'white'}">コースをみる</button>
        </div>
        <div class="yoga-front-information">
            <div>
                <img src="/yoga/Yoga-front-information-1.svg" alt="">
                <p>{{join}}人が参加</p>
            </div>
            <div>
                <img src="/yoga/Yoga-front-information-2.svg" alt="">
                <p>トータル{{minute}}分</p>
            </div>
            <div>
                <img src="/yoga/Yoga-front-information-3.svg" alt="">
                <p>AI練習{{aiTeacher}}コ入り</p>
            </div>
        </div>
        <div class="yoga-front-seemore">
            <p>ユニット一覽 ></p>
        </div>
    </div>
</template>

<script>
import YogaHeaderBack from '~/static/yoga/Yoga-header-back.svg';
import FlatButton from '~/components/FlatButton.vue';
import axios from '~/config/axios-config';

export default {
    data:()=>({
        YogaHeaderBack: YogaHeaderBack,
        collect: false,
    }),
    props: {
        unit: String,
        title: String,
        textColor: String,
        bgImage: String,
        join: Number,
        minute: Number,
        aiTeacher: Number,
        btnBgColor: String,
    },
    components: {
        FlatButton,
    },
    methods: {
        collectCourse(){
            this.collect = !this.collect;
        },
        goToCourse(){
            this.$scrollTo('#course-info',"start");
        },
    },
    computed: {
        collectOrNot() {
            return this.collect ? 'active':'';
        },
    },
}
</script>

<style>
@media (max-width: 899px) {
    .yoga-front {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    .yoga-front-header {
        position: relative;
        width: 100vw;
        height: 60px;
    }
    .yoga-front-header-tag {
        width: 25px;
        height: 36px;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
        background-image: url("/yoga/Yoga-header-tag.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .yoga-front-header-tag.active {
        background-image: url("/yoga/Yoga-header-tag-click.svg");
    }
    .yoga-front-header-back {
        position: absolute;
        top: 20px;
        left: 15px;
    }
    .yoga-front-title {
        text-align: center;
    }
    .yoga-front-title p {
        font-size: 20px;
        margin-bottom: 4px;
    }
    .yoga-front-title h2 {
        font-size: 8vw;
        max-width: 90vw;
        margin: 0 auto;
        
    }
    .yoga-goto-start-box {
        width: 200px;
        height: 50px;
        margin: 35vh auto 0 auto;
    }
    .yoga-goto-start {
        width: 200px;
        height: 50px;
        border-style:none; 
        border-radius: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        line-height: 36px;
        cursor: pointer;
    }
    .yoga-front-information {
        position: absolute;
        width: 100vw;
        height: 100px;
        background: white;
        bottom: 50px;
        border-radius:35px 35px 0 0; 
        padding: 15px 10px 10px 10px;
    }
    .yoga-front-information div {
        float: left;
        height: 100%;
        padding: 5px;
        color: #99CBA5;
        font-size: 12px;
        text-align: center;
    }
    .yoga-front-information div:first-child,.yoga-front-information div:nth-child(3){
        width: 33%;
    }
    .yoga-front-information div:nth-child(2) {
        box-sizing: border-box;
        width: 34%;
        border-left: solid 1px #99CBA5;
        border-right: solid 1px #99CBA5;
    }
    .yoga-front-information div img {
        height: 4vh;
        margin: 5px 20px;
    }
    .yoga-front-seemore {
        position: absolute;
        width: 100vw;
        height: 50px;
        color: white;
        text-align: center;
        font-size: 17px; 
        padding: 10px 0;
        background-color: #99CBA5;
        bottom: 0;
    }
}
</style>
