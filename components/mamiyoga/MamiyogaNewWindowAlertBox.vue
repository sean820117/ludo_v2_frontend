<template>
    <div class="mamiyoga-assay-contact-back">
        <div class="mamiyoga-assay-contact-open" @click="closeBox">
            <div class="cancel-box">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="" >
            </div>
            <p>{{alertTitle}}</p>
            <img :src="alertImg" alt="" style="margin-top: 20px;width:35%;">
            <p class="new-window-text" v-html="alertText"></p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-space:0;margin-top:20px" @click="enterBox"
                :style="{backgroundColor: alertBtnColor}">{{alertBtn}}</button>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    props: {
        alertTitle: String,
        alertImg: String,
        alertText: String,
        alertBtn: String,
        alertBtnColor: String,
    },
    methods:{
        closeBox(){
            this.$emit('closeBox');
        },
        enterBox(){
            this.$emit('enterBox');
        }
    }
}
</script>

<style>
 .mamiyoga-assay-contact-back {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}
.mamiyoga-assay-contact-open {
    width: 260px;
    height: auto !important;
    /* height: 330px; */
    background: white;
    border-radius: 20px;
    padding: 15px;
}
.mamiyoga-assay-contact-open p {
    color: #707070;
    text-align: center;
    font-size: 12px;
    margin: 30px 0 10px;
}
.mamiyoga-assay-contact-open img {
    display: block;
    margin: 0 auto;
    width: 50%;
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
    background: #24798f;
    color: #fff;
    cursor: pointer;
}
.new-window-text {
    font-size:13px;
    margin:15px 0px 10px !important;
}
@media (min-width:769px) {
    .mamiyoga-assay-contact-back {
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mamiyoga-assay-contact-open {
        width: 260px;
        height: auto !important;
        background: white;
        border-radius: 20px;
        padding: 15px;
    }
    .new-window-text {
        font-size: 20px !important;
        margin: 10px auto !important;
    }
}

</style>