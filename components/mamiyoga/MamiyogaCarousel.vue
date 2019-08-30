<template>
    <div style="height: 450px;">
        <!-- <div class="intro-wrap-four-pay">
            <h4>獨享愛自己</h4>
            <p style="text-align: center;font-size: 17px;margin-top:5px;">&nbsp;&nbsp;&nbsp;</p>
            <div class="intro-wrap-four-pay-price">
                <p style="font-size:14px;">一年</p>
                <p style="font-size:47px;">1590</p>
                <p style="font-size:14px;">NTD/人</p>
            </div>
            <p style="font-size:16px;text-align: center;">折合NTD132/月</p>
            <div class="intro-wrap-four-pay-btn" @click="$router.push('/mamiyoga/pay')">
                立即購買
            </div>
            <div class="intro-wrap-four-pay-bottom">
                <div class="intro-wrap-four-pay-circle"  @click="$router.push('/mamiyoga/pay')"></div>
            </div>
        </div>
        <div class="intro-wrap-four-pay ">
            <h4>姊妹揪起來</h4>
            <p style="text-align: center;font-size: 14px;margin-top:5px;">4人以上</p>
            <div class="intro-wrap-four-pay-price">
                <p style="font-size:14px;">一年</p>
                <p style="font-size:47px;">1290</p>
                <p style="font-size:14px;">NTD/人</p>
            </div>
            <p style="font-size:16px;text-align: center;">折合NTD107/月</p>
            <div class="intro-wrap-four-pay-btn" @click="$router.push('/mamiyoga/pay')">
                立即購買
            </div>
            <div class="intro-wrap-four-pay-bottom">
                <div class="intro-wrap-four-pay-circle" @click="$router.push('/mamiyoga/pay')"></div>
            </div>
            <div class="intro-wrap-four-pay-cost">-20%</div>
        </div>
        <div class="intro-wrap-four-pay ">
            <h4>企業方案</h4>
            <p style="text-align: center;font-size: 14px;margin-top:5px;">30人以上</p>
            <div class="intro-wrap-four-pay-price">
                <p style="font-size:14px;">一年</p>
                <p style="font-size:47px;">990</p>
                <p style="font-size:14px;">NTD/人</p>
            </div>
            <p style="font-size:16px;text-align: center;">折合NTD82/月</p>
            <div class="intro-wrap-four-pay-btn" @click="$router.push('/mamiyoga/pay')">
                立即購買
            </div>
            <div class="intro-wrap-four-pay-bottom">
                <div class="intro-wrap-four-pay-circle" @click="$router.push('/mamiyoga/pay')"></div>
            </div>
            <div class="intro-wrap-four-pay-cost">-40%</div>
        </div> -->
        <flicking
    :options="{ gap: 10}"
    :tag="'div'"
  >
    <div class="intro-wrap-four-pay">
            <h4>{{single_plan.slogan}}</h4>
            <p style="text-align: center;font-size: 17px;margin-top:5px;">&nbsp;&nbsp;&nbsp;</p>
            <div class="intro-wrap-four-pay-price">
                <p style="font-size:14px;">一年</p>
                <p style="font-size:47px;">{{single_plan.price}}</p>
                <p style="font-size:14px;">NTD/人</p>
            </div>
            <p style="font-size:16px;text-align: center;">折合NTD132/月</p>
            <div class="intro-wrap-four-pay-btn" @click="goPlan1">
                立即購買
            </div>
            <div class="intro-wrap-four-pay-bottom">
                <div class="intro-wrap-four-pay-circle"  @click="goPlan1"></div>
            </div>
        </div>
        <div class="intro-wrap-four-pay ">
            <h4>{{four_person_program.slogan}}</h4>
            <p style="text-align: center;font-size: 14px;margin-top:5px;">4人以上</p>
            <div class="intro-wrap-four-pay-price">
                <p style="font-size:14px;">一年</p>
                <p style="font-size:47px;">{{four_person_program.price}}</p>
                <p style="font-size:14px;">NTD/人</p>
            </div>
            <p style="font-size:16px;text-align: center;">折合NTD107/月</p>
            <div class="intro-wrap-four-pay-btn" @click="goPlan2">
                立即購買
            </div>
            <div class="intro-wrap-four-pay-bottom">
                <div class="intro-wrap-four-pay-circle" @click="goPlan2"></div>
            </div>
            <div class="intro-wrap-four-pay-cost" style="background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-four-pay-cost-1.png');"></div>
        </div>
        <div class="intro-wrap-four-pay ">
            <h4>企業方案</h4>
            <p style="text-align: center;font-size: 14px;margin-top:5px;">30人以上</p>
            <div class="intro-wrap-four-pay-price">
                <p style="font-size:14px;">一年</p>
                <p style="font-size:47px;">990</p>
                <p style="font-size:14px;">NTD/人</p>
            </div>
            <p style="font-size:16px;text-align: center;">折合NTD82/月</p>
            <div class="intro-wrap-four-pay-btn" @click="goPlan3">
                立即購買
            </div>
            <div class="intro-wrap-four-pay-bottom">
                <div class="intro-wrap-four-pay-circle" @click="goPlan3"></div>
            </div>
            <div class="intro-wrap-four-pay-cost" style="background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-four-pay-cost-2.png');"></div>
        </div>
  </flicking>

    </div>
</template>
<script>
import Vue from "vue";
import VueFlicking from "@egjs/vue-flicking";
import axios from '~/config/axios-config'
Vue.use(VueFlicking);
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
    }),
    async mounted(){
        if (process.browser) {
            const VueFlicking = require("@egjs/vue-flicking");
            Vue.use(VueFlicking);

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
        }
    },
    methods:{
        goPlan1(){
            sessionStorage['picked_plan'] = this.single_plan.price;
            this.$router.push('/mamiyoga/pay')
        },
        goPlan2(){
            sessionStorage['picked_plan'] = this.four_person_program.price;
            this.$router.push('/mamiyoga/pay')
        },
        goPlan3(){
            sessionStorage['picked_plan'] = 3;
            this.$router.push('/mamiyoga/pay')
        }
    }
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
    // components: {
        
    // }
}
</script>
<style>
.intro-wrap-four-pay{
    background: #F7F7F7;
    width: 300px;
    height: 370px;
    margin: 30px 15px;
    border-radius: 5px 100px 50px 50px ;
    border: solid 5px #24798F;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    position: relative;
    float: right;
}
.intro-wrap-four-pay p {
    color: #24798F;
}
.intro-wrap-four-pay h4 {
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
    font-size: 22px;
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
</style>