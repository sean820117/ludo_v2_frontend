<template>
    <div class="course-explain" :style="{backgroundColor:backColor}">
        <div class="course-explain-close" @click="closeBox">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/close-box.png" alt="">
        </div>
        <div class="course-explain-content">
            <hooper>
                <slide>
                   <h5>正面拍摄</h5>
                   <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/explain-1.png" alt="">
                   <p>将您的身体『正面』面向手机，拍摄距离约2公尺，让全身入镜，这样AI助教才能精准分析成果。</p>
                </slide>
                <slide>
                    <h5>侧面拍摄</h5>
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/explain-2.png" alt="">
                    <p>将您的身体『侧面』面向手机，拍摄距离约2公尺，让全身入镜，这样AI助教才能精准分析成果。</p>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
        </div>
        <!-- <div style="margin-top:8vh;">
            <mamiyoga-btn bgColor="#FF9898" ftColor="#F7F7F7" btnText="影片教学" style="margin-bottom:5vh;"></mamiyoga-btn>
        </div> -->
    </div>
</template>

<script>
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    components: {
        Hooper,
        Slide,
        HooperPagination,
        MamiyogaBtn,
    },
    methods: {
        closeBox(){
            this.$emit('closeExplain')
        }
    },
    props: {
        backColor: String,
    }
}
</script>

<style>
.course-explain {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 999;
}
.course-explain-close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
.course-explain-close img {
    width: 30px;
    height: 30px;
}
.course-explain-content {
    width: 90vw;
    height: 80vh;
    margin: 0 auto;
    padding-top: 5vh;
}
.course-explain-content h5 {
    text-align: center;
    color: #F7F7F7;
    font-size: 20px;
}
.course-explain-content img {
    display: block;
    margin: 3vh auto;
    height: 45vh;
    width: 80%;
}
.course-explain-content p {
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 66vw;
    margin: 5vh auto 0;
}
.course-explain .hooper {
    height: 75vh;
}
.course-explain .hooper-indicator {
    width: 7px;
    height: 7px;
    background-color: rgba(255,255,255,.4); 
    margin: 0 4px; 
}
.course-explain .hooper-indicator.is-active, 
.course-explain .hooper-indicator:hover {
    background-color:#fff; 
}
.course-explain .hooper-pagination {
    bottom: -5vh;
}
@media (min-width: 769px) {
    .course-explain {
        width: 450px;
    }
    .course-explain-content {
        width: 100%;
        padding-top: 10vh;
    }
    .course-explain-content img {
        width: 65%;
    }
    .course-explain-content p {
        width: 80%;
    }
    .course-explain .hooper {
        height: 75vh;
    }
    
    .course-explain .hooper-indicator {
        width: 7px;
        height: 7px;
        background-color: rgba(255,255,255,.4); 
        margin: 0 4px; 
    }
    .course-explain .hooper-indicator.is-active, 
    .course-explain .hooper-indicator:hover {
        background-color:#fff; 
    }
}
@media (max-width: 769px) and  (orientation:landscape) {
    .course-explain-content img {
        width: 30%;
    }
    .course-explain .hooper-pagination {
        bottom: -15vh;
    }
}
</style>
