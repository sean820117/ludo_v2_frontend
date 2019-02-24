<template>
    <!-- 看課下方欄 -->
    <div>
        <div class="course-status">
            <div class="course-status-wrapper">
                <div class="course-status-box">
                    <img :src="HiveFive" class="course-status-svg" alt="">
                    <div class="course-status-box-text">1200位同學</div>
                </div>
                <div class="course-status-devider"></div>
                <div class="course-status-box">
                    <img :src="Hourglass" class="course-status-svg-2" alt="">
                    <div class="course-status-box-text">總長度60分鐘</div>
                </div>
                <div class="course-status-devider"></div>
                <div class="course-status-box">
                    <img :src="InfiniteSymbol" class="course-status-svg" alt="">
                    <div class="course-status-box-text">5個練習服務</div>
                </div>
                <div class="course-status-devider-sm"></div>
                <div class="course-status-pricetag">課程售價</div>
                <div class="course-status-price">499元</div>
                <a :href=" baseUrl + '/confirm/' + course_id" class="course-status-buy-btn" style="text-decoration: none; color:white">馬上購買</a>
                <!-- </div> -->
            </div>
        </div>
        <!-- 看課下方欄課程簡介結束 -->
        <!-- 購課資訊 -->
        <div class="buy-info-section-sm">課程售價 499元</div>
        <!-- 購課資訊結束 -->
        
        <!-- 手機購買 -->
        <a :href=" baseUrl + '/confirm/' + course_id" class="buy-btn-section-sm" style="text-decoration: none; color:white">馬上購買</a>
        <!-- 手機購買結束 -->
    </div>
</template>

<script>
import HiveFive from 'static/high-five.svg'
import Hourglass from 'static/hourglass.svg'
import InfiniteSymbol from 'static/infinite-symbol.svg'

export default {
    data:() => ({
        HiveFive: HiveFive,
        Hourglass:Hourglass,
        InfiniteSymbol:InfiniteSymbol,
        baseUrl:'',
    }),
    mounted() {
        this.baseUrl = process.env.baseUrl;
    },
    props: {
        course_id: String,
    },
}
</script>

<style>
@media (min-width:900px) {
    /*看課下方欄*/
    .course-status{
        position: relative;
        width: 100vw;
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
        width: 100vw;
        height: 50px;
        background-color: #E0185D;

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
