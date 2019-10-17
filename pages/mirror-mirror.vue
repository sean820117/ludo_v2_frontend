<template>
    <div id="mirror-page">
        <div v-if="upload_pic">
            <mamiyoga-teach-header headerTitle="我的骨架" textFtColor="#fff" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-teach-header>
            <div id="show-mirror">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mirror-phone-1.png" alt="">
                <div id="show-mirror-img" :style="{backgroundImage: 'url('+receipt_img+')'}"></div>
            </div>
            <!-- <a style="text-decoration: none;" :href="receipt_img" target="_blank"> -->
            <!-- <a :href="'https://www.addtoany.com/share#url=https://beta.ludonow.com/mirror/'+receipt_link+'&amp;title='" target="_blank"> -->
                <!-- <div @click="shareUrl" class="mirror-long-btn" style="border: 3px solid #F8F7F8;background: #24798F;">儲 存 結 果</div> -->
            <!-- </a> -->
            <div class="mirror-long-btn" @click="$router.push('/teach')">開 始 上 課</div>
        </div>
        <div v-if="!upload_pic">
            <mamiyoga-teach-header headerTitle="製作專屬骨架" textFtColor="#fff" bgColor="#9BAEB2" ftColor="#FFF"></mamiyoga-teach-header>
            <p class="index-article-out-container-text-li">自拍魔鏡使用說明</p>
            <div class="mirror-flex-block">
                <div class="mirror-phone">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mirror-img-1.png" alt="">
                    <div class="mirror-text">
                        <div>影像辨識分析人體骨架</div>
                        <div>定位常用關節點</div>
                        <div>深度動作學習比對</div>
                    </div>
                </div>
                <div class="mirror-flex-inside-block">
                    <div class="mirror-list">
                        <div class="mirror-li">
                            <p class="mirror-num">1</p>
                            <p>拍攝或選取一張全身照</p>
                        </div>
                        <div class="mirror-li">
                            <p class="mirror-num">2</p>
                            <p>深呼吸三次稍等一下</p>
                        </div>
                        <div class="mirror-li">
                            <p class="mirror-num">3</p>
                            <p>專屬骨架製作完成</p>
                        </div>
                    </div>
                    <label class="mirror-long-btn first-show-btn">打 開 魔 鏡
                        <input type="file" style="display:none;" accept="image/*" multiple="multiple" @change="uploadImg" />
                    </label>
                    <div class="mirror-little-text">LUDO遵守個人資料保護法之規範，保障用戶隱私權益，保證不對外公開或移作其他目的使用</div>
                </div>
            </div>
        </div>
        <div v-if="is_loading" id="loading">
            <svg id="loading-icon" viewBox="0 0 32 29.6">
                <path class="path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
	            C30,20.335,16,28.261,16,28.261z" fill="none" stroke-width="1" stroke="#FF9898"></path>
            </svg>
        </div>
        <mamiyoga-window-alert-box v-if="is_error">
            <div class="cancel-box" @click="is_error = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mirror-retry.png" alt="" style="margin-top:40px;width:70%;">
            <p style="color:#707070;font-size:14px;margin-top:20px;" v-html="error_text"></p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-spacing:0;margin-top:15px;background:rgb(36, 121, 143);" @click="is_error = false">好的</button>
            </div>
        </mamiyoga-window-alert-box>
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue'
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import axios from '~/config/axios-config';
export default {
    data:()=>({
        upload_pic: false,
        is_loading: false,
        is_error: false,
        error_text: '',
        receipt_img: '',
        receipt_link: '',
    }),
    components: {
        MamiyogaTeachHeader,
        MamiyogaWindowAlertBox,
    },
    mounted(){
        if(process.client) {
  
        }
    },
    methods: {
        async uploadImg(e){
            this.is_loading = true;
            let send_user_id = 'guest'
            let cur_pose_id = 'yoga_skeleton_img'            
            const MAX_TRY_TIME = 10;
            var data = await this.$poseUpload(e.target.files[0],send_user_id,cur_pose_id,'zh-tw')
            console.log(data)

            if(!data) {
                alert('網路錯誤')
            } else if(data.status == 102) {
                let try_time = 0;
                
                let get_result = setInterval(() => {
                    try_time += 1;
                    if (try_time > MAX_TRY_TIME) {
                        this.error_text = '嗚～魔鏡只接收<br>單人全身照片'
                        clearInterval(get_result);
                    }
                    axios.post('/apis/get-pose-result',{user_id:send_user_id,pose_id:cur_pose_id,createdAt:data.createdAt})
                    .then((response) =>{
                        if(response.data.result.status == 200) {
                            console.log(response.data.result)
                            this.receipt_img = response.data.result.video_url
                            this.receipt_link = this.receipt_img.replace('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/training/sport/output/guest/','')
                            this.receipt_link = this.receipt_link.replace('.jpg','');
                            console.log(this.receipt_link);
                            sessionStorage['get_receipt_link'] = this.receipt_link
                            this.is_loading = false;
                            this.upload_pic = true;
                            clearInterval(get_result);
                        } else if(response.data.result.status == 102) { 
                            console.log("還沒跑完");
                        } else if(response.data.result.status == 204) {
                            if(response.data.result.error_code == -22) {
                                this.is_loading = false;
                                this.is_error = true;
                                this.error_text = '嗚～魔鏡只接收<br>單人全身照片'
                                clearInterval(get_result);
                            } else if(response.data.result.error_code == -23) {
                                this.is_loading = false;
                                this.is_error = true;
                                this.error_text = '嗚～魔鏡只接收<br>單人全身照片'
                                clearInterval(get_result);
                            } else if(response.data.result.error_code == -24) {
                                this.is_loading = false;
                                this.is_error = true;
                                this.error_text = '嗚～魔鏡只接收<br>單人全身照片'
                                clearInterval(get_result);
                            } else if(response.data.result.error_code == -25) {
                                this.is_loading = false;
                                this.is_error = true;
                                this.error_text = '嗚～魔鏡不支援這張影像格式<br>讓我們再試一次'
                                clearInterval(get_result);
                            }
                        }
                    })
                }, 3000);
            }
        },
        shareUrl(){
            if(navigator.share) {
                navigator.share({
                    url: 'https://mamiyoga.ludonow.com/mirror/' + this.receipt_link,
                })
                console.log('ok')
            } else {
                console.log('error')
                window.open(`https://www.addtoany.com/share#url=https://mamiyoga.ludonow.com/mirror/${this.receipt_link}&amp;title=`)
            }
        },
    }
}
</script>

<style>
#mirror-page {
    min-height: 100vh;
    background:#24798F;
    padding-bottom: 30px;
}
#show-mirror {
    position: relative;
    width: 80%;
    height: 70vh;
    margin: 10px auto 50px;
    padding: 10px;
}
#show-mirror-img {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
#show-mirror img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
}
#loading {
    position: fixed;
    width: 100%;
    min-height: 100vh;
    z-index: 999;
    background: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
#loading-icon {
    width: 100px;
}
.path {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: 3s drawing-svg 1s infinite;
}
@keyframes drawing-svg {
  100% {
    stroke-dashoffset: 0;
  }
}
.mirror-long-btn {
    width: 70%;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: #F8F7F8;
    background: #FF9898;
    border: 3px #FF9898 solid;
    border-radius: 5px;
    line-height: 34px;
    text-align: center;
    margin: 15px auto;
    display: block;
    cursor: pointer;
}
.mirror-long-btn.first-show-btn {
    margin-top: 5vh;
}
.index-article-out-container-text-li {
    color: #f7f7f7;
    font-size: 26px;
    text-align: center;
    margin-top: 15px;
}
.mirror-phone {
    position: relative;
}
.mirror-phone img {
    width: 90%;
    display: block;
    margin: 15px auto;
}
.mirror-text {
    position: absolute;
    right: 10%;
    bottom: 35%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 70%;
}
.mirror-text div{
    background: #fff;
    border: #24798F 2px solid;
    color: #24798F;
    padding: 5px 15px;
    width: fit-content;
    border-radius: 10px;
    margin: 5px 0;
    font-size: 16px;
}
.mirror-list {
    width:75%;
    margin: 0 auto;
}
.mirror-li {
    margin: 10px auto;
    display: inline-flex;
    align-items: center;
}
.mirror-li p {
    color: #fff;
}
.mirror-num {
    color: #24798F !important;
    background:#F7F7F7;
    width: 25px;
    height: 25px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 25px;
    margin-right: 10px;
}
.mirror-little-text {
    color: #F7F7F7;
    width: 70%;
    /* text-align: center; */
    margin: 0 auto;
    font-size: 12px;
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
    #mirror-page {
        min-height: 100vh;
    }
    .mirror-text {
        width: 250px;
        right: 25%;
    }
    .mirror-text div {
        font-size: 20px;
    }
    .mirror-flex-block {
        display: flex;
        align-items: center;
        max-width: 1366px;
        margin: 7vh auto 0;
    }
    .mirror-flex-inside-block {
        display: flex;
        flex-direction: column;
        width: 35%;
    }
    .mirror-phone {
        width: 65%;
        float: left;
        min-width: 470px;
    }
    .mirror-phone img {
        width: 80%;
    }
    .mirror-list {
        width: 220px;
        display: flex;
        flex-wrap: wrap;
        margin:  0 0 5vh;
        float: left;
    }
    .mirror-li {
        margin: 10px 0;
    }
    .mirror-li p:last-child {
        font-size: 18px;
    }
    .mirror-long-btn {
        max-width: 280px;
    }
    .mirror-long-btn.first-show-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        float:left;
        margin: 0 0 2vh;
        font-size: 21px;
        height: 50px;
        min-width: 220px;
    }
    .mirror-little-text {
        float: left;
        margin: 0;
        width: 60%;
        min-width: 220px;
    }
    #loading-icon {
        transform: scale(1.5);
    }
    #show-mirror {
        width: 40%;
        max-width: 400px;
    }
    .mirror-flex-btn-block {
        display: flex;
        justify-content: center;
        margin:  5vh auto 0;
    }
    .mirror-flex-btn-block .mirror-long-btn {
        width: 19%;
        max-width: 250px;
        margin: 0 1vw;
    }
}
</style>