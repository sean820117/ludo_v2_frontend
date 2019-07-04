<template>
    <div class="about-page">
        <mamiyoga-mail-header bgColor="#9BAEB2" headerTitle="教师介绍" mailheaderTitle="#97A8AF"></mamiyoga-mail-header>
        <div class="about-title">
            <div class="about-title-font">
                <h3>桥本麻美</h3>
                <h4>asami hashimoto</h4>
            </div>
        </div>
        <div class="about-container">
            <p style="font-weight: bold; margin-bottom: 5px;">持有证照</p>
            <p style="margin-bottom: 10px;">Yoga Aliance RYT200<br>
                maternity yoga instructor<br>
                aerial yoga instructor<br>
                Body Care professional course
            </p>
            <p style="font-weight: bold; margin-bottom: 5px;">曾修习完毕相关课程</p>
            <p>骨头导览指导者养成课程修习完毕</p>
            <div class="about-teacher-content">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;随着这些年压力的累积，我的身体状况并不是很好，原本只是想要找到改善的方法，
                    所以花了不少力气寻寻觅觅。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;没想到，在经历过多次尝试后，让我有机会接触到了瑜珈。因此身体健康也渐渐获得改善
                    ，这促使了我变得更加专注练习，产生了良性循环还有更大的兴趣，不知不觉间，也获得
                    了执照认证与教学资格。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;我平时担任专业自由瑜珈的指导教练，一周至少固定开班20堂，不过往往会更超过这数字。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;除此之外，也担任过日本屈指顶尖舞蹈跟唱歌少女团体「E-girl」的贴身瑜珈指导哦！
                    而且我不但协助许许多多演艺圈人士的体态健康维护，也曾担任过名人的私人瑜珈课程指导。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;就算是在怀孕的时候，我也持续进行瑜珈教学，而且，我现在也还是个怀孕妈妈哦！
                    所以，我有特别设计产后恢复的相关课程。当然，也还有其他针对不一样烦恼需求的瑜珈课程
                    ，用来帮助不一样的你！<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;我最擅长的领域是治癒身体和心灵的放松瑜珈。<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;在Instagram上也可看到我哦！目前追踪人数已经突破了两万！
                </p>
            </div>
        </div>
        
        
        
        
        <!-- <hooper>
            <slide class="about-teacher about-slide">
                <div class="about-title"><h3>教师介绍</h3></div>
                <div class="about-teacher-content">
                    <div>
                        <h3>桥本麻美</h3>
                        <h4>asami hashimoto</h4>
                    </div>
                    <p style="font-weight: bold; margin-bottom: 5px;">持有证照</p>
                    <p style="margin-bottom: 10px;">Yoga Aliance RYT200<br>
                        maternity yoga instructor<br>
                        aerial yoga instructor<br>
                        Body Care professional course
                    </p>
                    <p style="font-weight: bold; margin-bottom: 5px;">曾修习完毕相关课程</p>
                    <p>骨头导览指导者养成课程修习完毕</p>
                </div>
            </slide>
            <slide class="about-teacher about-slide">
                <div class="about-title"><h3>教师介绍</h3></div>
                <div class="about-teacher-content">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;随着这些年压力的累积，我的身体状况并不是很好，原本只是想要找到改善的方法，
                        所以花了不少力气寻寻觅觅。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;没想到，在经历过多次尝试后，让我有机会接触到了瑜珈。因此身体健康也渐渐获得改善
                        ，这促使了我变得更加专注练习，产生了良性循环还有更大的兴趣，不知不觉间，也获得
                        了执照认证与教学资格。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;我平时担任专业自由瑜珈的指导教练，一周至少固定开班20堂，不过往往会更超过这数字。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;除此之外，也担任过日本屈指顶尖舞蹈跟唱歌少女团体「E-girl」的贴身瑜珈指导哦！
                        而且我不但协助许许多多演艺圈人士的体态健康维护，也曾担任过名人的私人瑜珈课程指导。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;就算是在怀孕的时候，我也持续进行瑜珈教学，而且，我现在也还是个怀孕妈妈哦！
                        所以，我有特别设计产后恢复的相关课程。当然，也还有其他针对不一样烦恼需求的瑜珈课程
                        ，用来帮助不一样的你！<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;我最擅长的领域是治癒身体和心灵的放松瑜珈。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;在Instagram上也可看到我哦！目前追踪人数已经突破了两万！
                    </p>
                </div>
            </slide>
            
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper> -->
    </div>
</template>

<script>
import MommiyogaLoginHeader from '~/components/mamiyoga/MommiyogaLoginHeader.vue';
import MamiyogaMailHeader from '~/components/mamiyoga/MamiyogaMailHeader.vue'
import { mapMutations, mapGetters } from 'vuex';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    layout:'mommiyoga',
    components: {
        MommiyogaLoginHeader,
        MamiyogaMailHeader,
        Hooper,
        Slide,
        HooperPagination,
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    async beforeCreate() {
        if (process.client) {
            this.ui_config = await require('~/config/mommiyoga-config')
            this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/mommiyoga/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                if (!payed_or_not) {
                    console.log("not payed");
                    window.alert("尚未開通課程，請先前往購買～");
                    this.$router.push('/resume/pay');
                } else {
                    console.log("payed")
                }
            }
        }
    }
}
</script>

<style>
.about-page {
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    width: 100vw;
    min-height: 100vh;
}
.about-title {
    width: 100vw;
    height: 40vh;
    position: absolute;
    top: 0;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-preview-1.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;
}
.about-title-font {
    position: absolute;
    bottom: 5vh;
    left: 7vw;
}
.about-title-font h3 {
    font-size: 1.5em;
}
.about-title-font h4 {
    font-size: 1.3em;
}
.about-container {
    margin-top: 32vh;
    font-size: 12px;
    color: #97A8AF;
    padding: 10px 20px 20px;
}
.about-teacher-content {
    margin-top: 6vh; 
}
@media (min-width: 769px) {
    .about-page {
        width: 100%;
    }
    .about-title {
        width: 450px;
        height: 300px;
    }
    .about-title-font {
        bottom: 30px;
        left: 30px;
    } 
    .about-container {
        margin-top: 250px; 
        padding: 10px 30px 20px;
    }
    .about-teacher-content {
        margin-top: 50px; 
    }
}
</style>
