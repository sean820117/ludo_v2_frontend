<template>
    <div class="mail-header">
        <div class="mail-line">
            <div class="mail-header-goback" @click="$router.go(-1)">
                <!-- <a @click="$router.go(-1)"> -->
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/about-header-next.png" alt="">
                <!-- </a> -->
            </div>
            <div class="mail-header-title">
                <h3 v-html="headerTitle" :style="{color:mailheaderTitle}">{{headerTitle}}</h3>
            </div>
            <!-- <div class="mail-header-goback" @click="not_online = true" v-if="!is_beta">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/menu-envelope.png" alt="">
                <div v-if="have_mail"></div>
            </div> -->
        </div>
        <div class="not_online_box" :class="showThisBox">
            <mamiyoga-window-alert-box>
                <div class="cancel-box" @click="not_online = false">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="" >
                </div>
                <p>{{$t('teach_assay_chat_text')}}</p>
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top: 20px;width:40%;">
                <p style="font-size:13px;margin:15px 0px;" v-html="$t('teach_assay_chat_content')"></p>
                <div class="star-line-box">
                    <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-space:0;margin-top:20px" @click="not_online = false">{{$t('teach_assay_button_development')}}</button>
                </div>
            </mamiyoga-window-alert-box>
        </div>
    </div>
</template>

<script>
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
export default {
    data:()=>({
        not_online: false,
        
    }),
    props: {
        headerTitle: String,
        nextTo: String,
        mailheaderTitle: String,
        have_mail: false,
        is_beta: false,
    },
    components: {
        MamiyogaWindowAlertBox
    },
    computed: {
        showThisBox(){
            return this.not_online ? 'open':'';
        }
    }
}
</script>

<style>
.mail-header {
    width: 100vw;
    height: 60px;
    position: relative;
    top: 0;
    
    padding: 0 20px;
    z-index: 995;
}
.mail-line {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mail-header-goback {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
}
.mail-header-goback img {
    display: block;
}
.mail-header-goback:first-child img {
    width: 20px;
    height: 13px;
}
.mail-header-goback:nth-child(3) img {
    width: 25px;
}
.mail-header-title h3 {
    font-size: 12px;
    font-weight: 400;
}
.mail-header-goback div:last-child {
    background-color: #FF9898;
    width: 10px;
    height: 10px; 
    position: absolute;
    bottom: 3px;
    left: -3px;
    border-radius: 15px;
}
.not_online_box {
    display: none;
}
.not_online_box.open {
    display: block;
}
.cancel-box {
    /* background: red; */
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.cancel-box img {
    width: 65%;
}
.mamiyoga-assay-contact-btn {
    width: 135px;
    height: 35px;
    border-radius:20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #9BAEB2;
    color: #fff;
    cursor: pointer;
}
@media (min-width: 769px) {
    .mail-header,.mail-line  {
        width: 100%;
    }

}
</style>
