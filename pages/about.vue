<template>
    <div class="about-page">
        <mamiyoga-about-header nextTo="/menu"
        btnText="登出" bgColor="#9BAEB2" ftColor="#FFFFFF" :is_beta="true"></mamiyoga-about-header>
        <hooper>
            <slide class="about-teacher about-slide">
                <div class="about-title"><h3>{{$t('about_first_title')}}</h3></div>
                <div class="about-teacher-content">
                    <div>
                        <h3>{{$t('about_first_content_name')}}</h3>
                        <h4 style="margin-bottom:30px;">{{$t('about_first_content_name_en')}}</h4>
                    </div>
                    <p style="font-weight: bold; margin-bottom: 5px;">{{$t('about_first_content_have')}}</p>
                    <p style="margin-bottom: 10px;">Yoga Aliance RYT200<br>
                        maternity yoga instructor<br>
                        aerial yoga instructor<br>
                        Body Care professional course
                    </p>
                    <p style="font-weight: bold; margin-bottom: 5px;">{{$t('about_first_content_course')}}</p>
                    <p>{{$t('about_first_content_course_text')}}</p>
                </div>
            </slide>
            <slide class="about-teacher about-slide" style="overflow:hidden;">
                <!-- <video muted loop autoplay playsinline  class="background-video" >
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-about-1.mp4" type="video/mp4">      
                </video> -->
                <div class="about-title"><h3 style="color:#FFF;">{{$t('about_first_title')}}</h3></div>
                <div class="about-teacher-content">
                    <p style="color:#FFF;font-size:14px;" v-html="$t('about_second_content')"></p>
                </div>
                <!-- <div class="about-background-mask"></div> -->
            </slide>
            <slide class="about-teacher about-for-mammy" style="overflow:hidden;">
                <!-- <video muted loop autoplay playsinline class="background-video" >
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-about-2.mp4" type="video/mp4">      
                </video> -->
                <div class="about-title"><h3>{{$t('about_third_title')}}</h3></div>
                <div class="about-teacher-content">
                    <p v-html="$t('about_third_content')"></p>
                </div>
            </slide>
            <slide class="about-teacher about-for-mammy" style="overflow:hidden;">
                <!-- <video muted loop autoplay playsinline  class="background-video" >
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-about-3.mp4" type="video/mp4">      
                </video> -->
                <div class="about-title"><h3>{{$t('about_four_title')}}</h3></div>
                <div class="about-teacher-content">
                    <p v-html="$t('about_four_content')"></p>
                </div>
            </slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
import MamiyogaAboutHeader from '~/components/mamiyoga/MamiyogaAboutHeader.vue';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    layout:'mommiyoga',
    components: {
        MamiyogaAboutHeader,
        Hooper,
        Slide,
        HooperPagination,
    }
}
</script>

<style>
.background-video {
    /* position: fixed; */
    top: -3vh;
    width: auto;
    min-height: 100vh;
}
.about-page .mamiyoga-teach-header {
    position: absolute;
}
.about-title {
    color: #F7F7F7;
    font-size: 12px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    z-index: 999;
    /* text-align: center; */
}
.about-teacher.about-slide .about-title {
    color: #F7F7F7;
    z-index: 999;
}
.about-teacher {
    background-color: white;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.about-teacher:first-child {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/about-background-1.png');
    background-position: center;
}
.about-teacher:nth-child(2) {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/about-background-2.png');
    background-position: center;
}
.about-teacher:nth-child(3) {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/about-background-3.png');
    background-position: 40%;
}
.about-teacher:last-child {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/about-background-4.png');
}
.about-teacher:nth-child(2)::after,
.about-teacher:nth-child(3)::after,
.about-teacher:nth-child(4)::after {
    content: '';
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,.2);
}

/* .about-background-mask {
    width: 100%;
    height: 100%;
} */
.about-teacher-content {
    font-size: 14px;
    width: 80vw;
    height: auto;
    position: absolute;
    bottom: 10vh;
    color: #F7F7F7;
    z-index: 999;
}
.about-teacher:nth-child(2) .about-teacher-content {
    top: 15vh;
}
.about-for-mammy .about-teacher-content {
    width: 90vw;
    padding: 5vw;
    color: #F7F7F7;
    top: 15vh;
    /* background-color: rgba(0,0,0,.3); */
}
.about-teacher-content h3 {
    color: #F7F7F7;
    font-size: 24px;
}
.about-teacher-content h4 {
    color: #F7F7F7;
    font-size: 20px;
}
.about-page .hooper {
    width: 100vw;
    height: 100vh;
    /* position: absolute;
    top: 0; */
}
.about-page .hooper-pagination {
    bottom: 3vh;
}
.about-page .hooper-indicator {
    width: 7px;
    height: 7px;
    background-color: rgba(255,255,255,.4); 
    margin: 0 4px; 
}
.about-page .hooper-indicator.is-active, 
.about-page .hooper-indicator:hover {
    background-color:#fff; 
}
@media (max-width: 768px) {
    .about-page .hooper {
        position: absolute;
        top:0;
    }
}
@media (min-width: 769px) {
    .about-page .hooper {
        width: 100%;
        margin-top: -60px;
    }
    .about-teacher-content,
    .about-for-mammy .about-teacher-content {
        width: 80%;
    }
    .about-for-mammy .about-teacher-content {
        padding: 0;
    }
    .about-teacher:first-child {
        background-position: 20%; 
    }
    .about-teacher:nth-child(3) {
        background-position: 50%; 
    }
    .about-teacher:last-child {
        background-position: 30%;
    }
    .about-title {
        width: 450px;
    }
}
</style>
