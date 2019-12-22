<template>
    <div style="height: 650px;">
        <div v-if="$mq == 'iphone'">
            <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="35" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>{{single_plan.slogan}}</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <p style="text-align: center;font-size: 17px;margin-top:5px;">&nbsp;&nbsp;&nbsp;</p>
                    <div class="intro-wrap-four-pay-price">
                        <p style="font-size:14px;">一年</p>
                        <p style="font-size:47px;color: #FF9898;">&nbsp;{{single_plan.price}}&nbsp;</p>
                        <p style="font-size:14px;">NTD/人</p>
                    </div>
                    <p style="font-size:16px;text-align: center;">一年<s>NTD1990</s>/人</p>
                    <div class="intro-wrap-four-pay-btn" id="buy-myself" @click="goPlan1">
                        {{$t('desktop_index_eleven_pay_btn_1')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="buy-myself-1"  @click="goPlan1"></div>
                    </div>
                </div>
                </slide>
                <slide class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>{{four_person_program.slogan}}</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <p style="text-align: center;font-size: 18px;margin-top:5px;">&nbsp;&nbsp;&nbsp;</p>
                    <!-- <p style="text-align: center;font-size: 14px;margin-top:5px;">4人以上</p> -->
                    <div class="intro-wrap-four-pay-price" style="align-items: baseline;">
                        <p style="font-size:14px;">一年</p>
                        <p style="font-size:47px; color: #FF9898;">&nbsp;{{four_person_every}}&nbsp;</p>
                        <p style="font-size:14px; ">NTD/人</p>
                        <!-- <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/price-arrow.png" alt=""> -->
                    </div>
                    <p style="font-size:16px;text-align: center;">四人共NTD{{ four_person_every * 4 }}</p>
                    <div class="intro-wrap-four-pay-btn" id="go-go-sister" @click="goPlan2">
                        {{$t('desktop_index_eleven_pay_btn_1')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="go-go-sister-1" @click="goPlan2"></div>
                    </div>
                    <div class="intro-wrap-four-pay-cost" style="background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-four-pay-cost-1.png');"></div>
                    </div>
                </slide>
                <slide class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>搭配工作坊</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 一堂2小時實體教練課</p>
                    <!-- <p style="text-align: center;font-size: 14px;margin-top:5px;">30人以上</p> -->
                    <div class="intro-wrap-four-pay-price">
                        <p style="font-size:14px;">一年</p>
                        <p style="font-size:47px;color: #FF9898;">&nbsp;{{2590}}&nbsp;</p>
                        <p style="font-size:14px;">NTD/人</p>
                    </div>
                    <p style="font-size:16px;text-align: center;">一年<s>NTD{{4090}}</s>/人</p>
                    <div class="intro-wrap-four-pay-btn" id="fill-in-now" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/booking`)">
                        {{$t('desktop_index_eleven_pay_btn_2')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="fill-in-now-1" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/booking`)"></div>
                    </div>
                    <div class="intro-wrap-four-pay-cost" style="background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-four-pay-cost-2.png');"></div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div v-if="$mq == 'mobile'">
            <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="40" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>{{single_plan.slogan}}</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <p style="text-align: center;font-size: 17px;margin-top:5px;">&nbsp;&nbsp;&nbsp;</p>
                    <div class="intro-wrap-four-pay-price">
                        <p style="font-size:14px;">一年NTD</p>
                        <p style="font-size:47px;color: #FF9898;">&nbsp;{{single_plan.price}}&nbsp;</p>
                        <p style="font-size:14px;">NTD/人</p>
                    </div>
                    <p style="font-size:16px;text-align: center;">一年<s>NTD{{single_plan.price}}</s>/人</p>
                    <div class="intro-wrap-four-pay-btn" id="buy-myself" @click="goPlan1">
                        {{$t('desktop_index_eleven_pay_btn_1')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="buy-myself-1"  @click="goPlan1"></div>
                    </div>
                </div>
                </slide>
                <slide class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>{{four_person_program.slogan}}</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <!-- <p style="text-align: center;font-size: 14px;margin-top:5px;">4人以上</p> -->
                    <div class="intro-wrap-four-pay-price" style="align-items: baseline;">
                        <p style="font-size:14px;">一年</p>
                        <p style="font-size:47px; color: #FF9898;">&nbsp;{{four_person_program.price}}&nbsp;</p>
                        <p style="font-size:14px; ">NTD/人</p>
                        <!-- <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/price-arrow.png" alt=""> -->
                    </div>
                    <p style="font-size:16px;text-align: center;">四人共NTD5160</p>
                    <div class="intro-wrap-four-pay-btn" id="go-go-sister" @click="goPlan2">
                        {{$t('desktop_index_eleven_pay_btn_1')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="go-go-sister-1" @click="goPlan2"></div>
                    </div>
                    <div class="intro-wrap-four-pay-cost" style="background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-four-pay-cost-1.png');"></div>
                    </div>
                </slide>
                <slide class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>搭配工作坊</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 一堂2小時實體教練課</p>
                    <!-- <p style="text-align: center;font-size: 14px;margin-top:5px;">30人以上</p> -->
                    <div class="intro-wrap-four-pay-price">
                        <p style="font-size:14px;">一年</p>
                        <p style="font-size:47px;color: #FF9898;">&nbsp;2590&nbsp;</p>
                        <p style="font-size:14px;">NTD/人</p>
                    </div>
                    <p style="font-size:16px;text-align: center;">一年<s>NTD4090</s>/人</p>
                    <div class="intro-wrap-four-pay-btn" id="fill-in-now" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/booking`)">
                        {{$t('desktop_index_eleven_pay_btn_2')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="fill-in-now-1" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/booking`)"></div>
                    </div>
                    <div class="intro-wrap-four-pay-cost" style="background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-four-pay-cost-2.png');"></div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div v-if="$mq == 'desktop'">
            <div style="display: flex; align-items: center; justify-content: center;margin-top: 100px;">
                <div class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>{{single_plan.slogan}}</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <p style="text-align: center;font-size: 18px;margin-top:5px;">&nbsp;&nbsp;&nbsp;</p>
                    <div class="intro-wrap-four-pay-price">
                        <p style="font-size:17px;">一年</p>
                        <p style="font-size:47px;color: #FF9898;">&nbsp;{{single_plan.price}}&nbsp;</p>
                        <p style="font-size:17px;">NTD/人</p>
                    </div>
                    <p style="font-size:18px;text-align: center;">一年<s>NTD1990</s>/人</p>
                    <div class="intro-wrap-four-pay-btn" id="buy-myself" @click="goPlan1">
                        {{$t('desktop_index_eleven_pay_btn_1')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="buy-myself-1" @click="goPlan1"></div>
                    </div>
                </div>
                </div>
                <div class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>{{four_person_program.slogan}}</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <p style="text-align: center;font-size: 18px;margin-top:5px;">&nbsp;&nbsp;&nbsp;</p>
                    <!-- <p style="text-align: center;font-size: 16px;margin-top:5px;">4人以上</p> -->
                    <div class="intro-wrap-four-pay-price" style="align-items: baseline;">
                        <p style="font-size:17px;">一年</p>
                        <p style="font-size:47px;color: #FF9898;">&nbsp;{{four_person_every}}&nbsp;</p>
                        <p style="font-size:17px; ">NTD/人</p>
                        <!-- <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/price-arrow.png" alt=""> -->
                    </div>
                    <p style="font-size:18px;text-align: center;">四人共NTD5160</p>
                    <div class="intro-wrap-four-pay-btn" id="go-go-sister" @click="goPlan2">
                        {{$t('desktop_index_eleven_pay_btn_1')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="go-go-sister-1" @click="goPlan2"></div>
                    </div>
                    <div class="intro-wrap-four-pay-cost" style="background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-four-pay-cost-1.png');"></div>
                    </div>
                </div>
                <div class="intro-wrap-four-pay-block">
                    <div class="intro-wrap-four-pay">
                    <h5>搭配工作坊</h5>
                    <hr class="title-bottom-hr">
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:20px;">&#x2714; 影片觀看永久</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 自拍魔鏡一年</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 線上免費諮詢</p>
                    <p style="color: #185D9D; text-align: center;font-size: 12px;font-weight:bold;margin-top:5px;">&#x2714; 一堂2小時實體教練課</p>
                    <!-- <p style="text-align: center;font-size: 16px;margin-top:5px;">30人以上</p> -->
                    <div class="intro-wrap-four-pay-price">
                        <p style="font-size:17px;">一年</p>
                        <p style="font-size:47px;color: #FF9898;">&nbsp;2590&nbsp;</p>
                        <p style="font-size:17px;">NTD/人</p>
                    </div>
                    <p style="font-size:18px;text-align: center;">一年<s>NTD4090</s>/人</p>
                    <div class="intro-wrap-four-pay-btn" id="fill-in-now" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/booking`)">
                        {{$t('desktop_index_eleven_pay_btn_2')}}
                    </div>
                    <div class="intro-wrap-four-pay-bottom">
                        <div class="intro-wrap-four-pay-circle" id="fill-in-now-1" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/booking`)"></div>
                    </div>
                    <div class="intro-wrap-four-pay-cost" style="background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-four-pay-cost-2.png');"></div>
                    </div>
                </div>
            </div>
            <!-- </carousel> -->
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import axios from '~/config/axios-config'
export default {
    data:()=>({
        products: [
            {
                item_id: 'MY01',
            },
            {
                item_id: 'MY02',
            }
        ],
        single_plan: {},
        four_person_program: {},

        four_person_every: '',
    }),
    async mounted(){
        if (process.browser) {
            // const VueFlicking = require("@egjs/vue-flicking");
            // Vue.use(VueFlicking);

            for (let i = 0; i < this.products.length; i++) {
                let send_data = {item_id: this.products[i].item_id};
                const response = await axios.post('/apis/get-shop-item',send_data);
                this.products[i].item_name = response.data.item_name
                this.products[i].price = response.data.price
                this.products[i].slogan = response.data.slogan
                this.products[i].description = response.data.description
                
            }
            this.single_plan = this.products.find(plan => plan.item_id == 'MY01')
            this.four_person_program = this.products.find(plan => plan.item_id == 'MY02')

            let every_price = (this.four_person_program.price)/4
            this.four_person_every = every_price
            console.log(this.four_person_every)
        }
    },
    methods:{
        goPlan1(){
            sessionStorage['method_picked_plan'] = this.single_plan.price;
            this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/pay`)
        },
        goPlan2(){
            sessionStorage['method_picked_plan'] = this.four_person_program.price;
            this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/pay`)
        },
        goPlan3(){
            sessionStorage['method_picked_plan'] = 0;
            this.$router.push('/pay')
        }
    },
    // head(){
    //     return  {
    //         script: [
    //             {src: 'https://code.jquery.com/jquery-3.4.1.min.js'},
    //             {src: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/owl.carousel.min.js'},
    //         ],
    //     }
    // },
    // created(){
    //    $('.owl-carousel').owlCarousel();
    // },
    components: {

    }   
}
</script>
<style>
.intro-wrap-four-pay-block {
    display: flex;
    align-items: center;
    justify-content: center;
}
.intro-wrap-four-pay {
    background: #F7F7F7;
    width: 90%;
    height: 589px;
    margin: 30px 0px;
    border-radius: 5px 100px 50px 50px ;
    border: solid 2px #24798F;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    position: relative;
    float: right;
}
.VueCarousel-slide-active .intro-wrap-four-pay{
    border: solid 9px #24798F;
}
.VueCarousel-slide-active .intro-wrap-four-pay .intro-wrap-four-pay-circle {
    background-color: #F7F7F7;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-circle-btn-2.png');
    background-size: 60%;
    border: solid #24798F 3.5px;
}
.VueCarousel-slide-active .intro-wrap-four-pay .intro-wrap-four-pay-btn {
    /* background: linear-gradient(180deg,#FF9A7B,#FF9898); */
    background: #24798F;
    color: #f7f7f7;
    /* border: none; */
    font-weight: bold;

}
.intro-wrap-four-pay p {
    color: #24798F;
}
.intro-wrap-four-pay h5 {
    color: #24798F;
    text-align: center;
    margin-top: 50px;

}
.intro-wrap-four-pay-price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: 10px auto;
    color: #24798F;
}
.intro-wrap-four-pay-btn {
    width: 200px;
    height: 50px;
    border: solid 2px #24798F;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto 0;
    color: #24798F;
    letter-spacing: 5px;
    font-size: 18px;
    cursor: pointer;
}
.intro-wrap-four-pay-bottom {
    position: absolute;
    bottom: -30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.intro-wrap-four-pay-circle {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color:#24798F;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-circle-btn.png');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    cursor: pointer;
}
.intro-wrap-four-pay-cost {
    width: 100px;
    height: 100px;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    top: -40px;
    right: -5px;
    color: #F1F2F2;
    font-size: 26px;
    padding: 30px 0 0 15px;
}
.eg-flick-viewport {
    height: 450px !important;
    padding-top: 15px;
    z-index: 900 !important;
}
.title-bottom-hr {
    width:182px;
    text-align:center;
    margin: 5.5px auto;
    color: #24798F;
    background: #24798F;
    height:1px;
    border:none;
}

@media (min-width: 769px) {
    .intro-wrap-four-pay {
        max-width: 330px;
        width: 28vw;
        margin: 0 2vw;
        height: 589px;
        border: 4px solid #24798f;
    }
    .intro-wrap-four-pay h5 {
        font-size: 18px;
    }
    .intro-wrap-four-pay-price {
        margin: 2vh auto;
    }
    .intro-wrap-four-pay-btn {
        margin: 5vh auto 0;
        background: #24798f;
        color: #F7F7F7;
        width: 75%;
        max-width: 200px;
    }
    .intro-wrap-four-pay-circle {
        background-color: #f7f7f7;
        background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-circle-btn-2.png');
        border: 4px solid #24798f;
    }
}
</style>