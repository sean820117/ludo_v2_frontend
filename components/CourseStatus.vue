<template>
    <!-- 看課下方欄 -->
    <div>
        <div class="course-status">
            <div class="course-status-wrapper">
                <div class="course-status-box">
                    <img :src="HiveFive" class="course-status-svg" alt="">
                    <div class="course-status-box-text"> {{ base_people + payed_user_number }} 位同學</div>
                </div>
                <div class="course-status-devider"></div>
                <div class="course-status-box">
                    <img :src="Hourglass" class="course-status-svg-2" alt="">
                    <div class="course-status-box-text">總長60分鐘</div>
                </div>
                <div class="course-status-devider"></div>
                <div class="course-status-box">
                    <img :src="InfiniteSymbol" class="course-status-svg" alt="">
                    <div class="course-status-box-text">5個練習服務</div>
                </div>
                <div v-if="!is_payed" class="course-status-devider-sm"></div>
                <div v-if="!is_payed" class="course-status-pricetag">課程售價</div>
                <div v-if="!is_payed" class="course-status-price">1200元</div>
                <router-link v-if="!is_payed" :to="'/confirm/' + course_id" class="course-status-buy-btn" style="text-decoration: none; color:white">馬上購買</router-link>
                <!-- </div> -->
            </div>
        </div>
        <!-- 看課下方欄課程簡介結束 -->
        <!-- 購課資訊 -->
        <div v-if="!is_payed" class="buy-info-section-sm">課程售價 499元</div>
        <!-- 購課資訊結束 -->
        
        <!-- 手機購買 -->
        <router-link v-if="!is_payed" :to="'/confirm/' + course_id" class="buy-btn-section-sm" style="text-decoration: none; color:white">馬上購買</router-link>
        <!-- 手機購買結束 -->
    </div>
</template>

<script>
import HiveFive from 'static/high-five.svg'
import Hourglass from 'static/hourglass.svg'
import InfiniteSymbol from 'static/infinite-symbol.svg'
import axios from '~/config/axios-config';

export default {
    data:() => ({
        HiveFive: HiveFive,
        Hourglass:Hourglass,
        InfiniteSymbol:InfiniteSymbol,
        baseUrl:'',
        payed_user_number:0,
    }),
    async mounted() {
        this.baseUrl = process.env.baseUrl;
        this.course_id = this.$route.params.id;
        let res = await axios.get('/apis/get-payed-user-number?course_id='+ this.course_id);
        let res2 = await axios.get('/apis/get-payed-user-number?course_id=12');
        console.log(res);
        console.log(res2);
        if (res.data.status == 200 && res.data.status == 200) {
            this.payed_user_number = res.data.result + res2.data.result ;
        }

    },
    props: {
        course_id: String,
        is_payed:Boolean,
        base_people:Number,
    },
}
</script>

<style>
@media (min-width:900px) {
    /*看課下方欄*/
    .course-status{
        position: relative;
        width: 100vw;
        background: white;
        /*height: 200px;*/
        /*background-color: #F0F0F0;*/

        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .course-status-wrapper{
        width: 1280px;
        height:120px;
        padding:10px;

        /*水平置中*/
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        /*水平置中*/

        overflow: auto;
    }
    .course-status-box{
        float: left;
        width: 20%;
        /*height: 150px;*/

        padding: 5px;

        /*水平置中*/
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        /*水平置中*/


        text-align: center;
    }
    .course-status-svg{
        position: relative;
        display: flex;
        width: 50px;
        padding-right: 20px;
    }
    .course-status-svg-2{
        position: relative;
        display: flex;
        width: 50px;
        padding-right: 20px;
    }
    .course-status-box-text{
        position: relative;
        display: flex;
        color: #324D5B;
        font-size: 20px;
    }
    .course-status-devider{
        float: left;
        width: 1px;
        height: 60%;
        background-color: #324D5B;
        border-radius: 50px;
        padding: 1px;

    }
    .course-status-devider-sm{
        float: left;
        width: 1px;
        height: 60%;
        background-color: #324D5B;
        border-radius: 50px;
        padding: 1px;
    }
    .course-status-pricetag{
        float: left;
        width: 10%;
        /*height: 100px;*/

        /*padding: 5px;*/
        color: #324D5B;

        text-align: center;
    }
    .course-status-price{
        float: left;
        /*width: 20%;*/
        /*height: 100px;*/

        color: #324D5B;

        text-align: center;
        font-size: 40px;
    }
    .course-status-buy-btn{
        float: left;
        margin-left: 50px;

        display: inline-block;
        text-decoration: none;
        text-align: center;
        line-height: 33px;

        width: 180px;
        height: 50px; 
        font-size: 18px;
        line-height: 50px;
        color: white;
        background-color: #E0185D;
        border-radius: 10px;

        transition: all 0.2s;
        transition-timing-function: ease;
    }
    .course-status-buy-btn:hover {
        background: #D10048;
    }
    .course-but-group-sm{
        display: flex;
        width: 100vw;
        height: 30px;
        background-color: orange;
    }
    @media (min-width: 900px){
        .course-video-items{
            display: none;
        }
        .course-status-pricetag-sm{
            display: none;
        }
        .course-status-price-sm{
            display: none;
        }
        .course-status-buy-btn-sm{
            display: none;
        }
        .buy-btn-section-sm{
            display: none;
        }
        .buy-info-section-sm{
            display: none;
        }
    }
}
@media (max-width:899px) {
    /*看課下方欄*/
    .course-status{
        position: relative;
        width: 100vw;
        /*height: 200px;*/
        /*background-color: #F0F0F0;*/

        display: inline-flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;

        padding-top: 10px;
        padding-bottom: 10px;
    }

    .course-status-wrapper{
        display: flex;
        width: 100%;
        /*height:100px;*/
        padding:10px;

        /*水平置中*/
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        /*水平置中*/

        overflow: auto;
    }
    .course-status-box{
        float: left;
        /*width: 50%;*/
        /*height: 150px;*/

        padding: 5px;

        /*垂直置中*/
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        /*垂直置中*/

        flex: 1;
        text-align: center;
    }
    .course-status-svg{
        position: relative;
        display: flex;
        width: 50px;
        /* padding-right: 20px; */
    }
    .course-status-svg-2{
        position: relative;
        display: flex;
        width: 50px;
        /* padding-right: 20px; */
    }
    .course-status-box-text{
        position: relative;
        display: flex;
        color: #324D5B;
        font-size: 15px;
        margin-top: 5px;
    }
    .course-status-devider{
        float: left;
        width: 1px;
        height: 50px;
        background-color: #324D5B;
        border-radius: 50px;
        margin: 8px;
        display: none;
    }
    .course-status-pricetag{
        float: left;
        /*width: 10%;*/
        /*height: 100px;*/

        /*padding: 5px;*/
        color: #324D5B;
        text-align: center;
    }
    .course-status-price{
        float: left;
        /*width: 20%;*/
        /*height: 100px;*/

        color: #324D5B;

        text-align: center;
        font-size: 40px;
    }
    .course-status-buy-btn{
        float: left;
        width: 100%;
        /*height: 50px;*/
        margin-left: 50px;
        /*padding-left: 50px;*/

        display: inline-block;
        text-decoration: none;
        text-align: center;
        line-height: 33px;
        /*background-color: white;*/

        width: 180px;
        height: 50px; 
        font-size: 18px;
        line-height: 50px;
        color: white;
        background-color: #E0185D;
        /*border: 2px solid grey;*/
        border-radius: 10px;

        transition: all 0.2s;
        transition-timing-function: ease;
    }

    /*購課資訊*/
    .buy-info-section-sm{
        position: relative;
        width: 100vw;
        height: 60px;

        font-size: 20px;
        line-height: 50px;
        text-align: center;
        color: #324D5B;

    }

    /*手機購買*/
    .buy-btn-section-sm{
        position: relative;
        width: 80vw;
        margin-left: 10vw;
        height: 50px;
        background-color: #E0185D;
        border-radius: 20px;

        display: inline-block;
        text-decoration: none;
        text-align: center;
        
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        color: white;
    }
    .course-status-pricetag{
		display: none;
	}
	.course-status-price{
		display: none;
	}
	.course-status-buy-btn{
		display: none;
	}
	.course-status-devider-sm{
		display: none;
	}
}
</style>
