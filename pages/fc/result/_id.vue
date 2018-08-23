<template>
    <div class="fc_result_container">
        <div class="fc_result_header">
            <div class="fc_result_header_logo">
                <img src="/fc-logo.png" alt="FC">
                <p>讓狂人飛</p>
            </div>
            <p class="fc_result_header_time">
                {{ formateDate(new Date()) }}<br>
                {{ formateTime(new Date()) }}
            </p>
        </div>
        <div class="fc_result_title">
            【搭訕型自介】真人配對挑戰
        </div>
        <div class="fc_result_subtitle">
            本次挑戰的結果為...
        </div>
        <div class="fc_result_rank">{{ data.rank }}<span>等級</span></div>
        <div class="fc_result_label">回報內容</div>
        <div class="fc_result_textfield"> {{ data.content }} </div>
        <div class="fc_result_label">評語</div>
        <div class="fc_result_textfield"> {{ getComment(data.rank) }} </div>
        <div class="fc_result_label">進步範例</div>
        <div class="fc_result_textfield"> {{ data.recommend }} </div>
        <div class="fc_result_join_block_container">
            <div class="fc_result_join_block"> 
                <div class="fc_result_join_block_header"><img src="/fc-logo.png" alt="FC">讓狂人飛</div>
                <div class="fc_result_join_block_content">最狂的自介你看過？</div>
                <a href="https://www.facebook.com/flying.crazyer/posts/2128483200740115" class="fc_result_join_block_link">&gt;&gt; 點擊加入 &lt;&lt;</a>
            </div>
        </div>
        <!-- <a class="fc_result_share_button" href="https://www.facebook.com/flying.crazyer/posts/2128483200740115">分享評分</a> -->
        
        <no-ssr>
            <div>
                <div class="fb-share-button fc_result_share_button" v-bind:data-href="base_url + $route.fullPath" data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://www.ludonow.com/fc/result/iamsean" class="fb-xfbml-parse-ignore">分享</a></div>
                <div id="fb-root"></div>
                <script>
                    (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.1&appId=1075325352502513&autoLogAppEvents=1';
                    fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                </script>
            </div>
        </no-ssr>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data:() => {
        return {
            base_url: "http://www.ludonow.com",
            reply_S : '很會哦A_A 不用寫自介了喇',
            reply_A : '你的自介hen有誠意！既有提及成就，也有些具體事實，在全國的評等中屬於A級(全國前20%~1%)但俗話說得好「知己知彼，百戰百勝」，也來看看其他優秀者是怎麼寫的吧！',
            reply_B : '不錯，還在水準之上，屬於B級(全國前40%~21%)，但你可多說點具體的成就(除了擔任過XXX，還要說你具體幹了啥)！讓你進化到A級 。然後再多給你一個A級(全國前20%~1%)範例，讓你參考看看比你好一點的人，是怎麼寫自介的<3',
            reply_C : '穩定輸出、四平八穩，屬於C級(全國前61%~41%)，然而較缺乏記憶點。建議可以提到過往成就績效、能為公司帶來的價值。然後再多給你一個B級(全國前40%~21%)範例，讓你參考看看比你好一點的人，是怎麼寫自介的<3',
            reply_D : '你的自介屬於D級(全國前80%~61%)。可能有點太少囉，可多描述些自己喜歡做的事情，更多的地展現自己看看！讓我再多給你一個C級(全國前60%~41%)範例，讓你參考看看比你好一點的人，是怎麼寫自介的<3',
            reply_E : '你的自介是E級，屬於全國後20%。同學，你是不是走錯棚了XD 有不少要改進的。這裡給你一個D級(全國前80%~61%)範例，讓你參考看看自介比你好一點(D級的人)的人，是怎麼寫自介的<3️',
        }
    },
    methods: {
        formateDate(date) {
            var year = date.getFullYear()
            var month = date.getMonth()+1
            var day = date.getDate()
            
            if (month < 10) {
                month = "0" + month
            }
            if (day < 10) {
                day = "0" + day
            }

            return year + '/' + month + '/' + day
        },
        formateTime(time) {
            var hour = time.getHours()
            var minute = time.getMinutes()

            if (hour < 10) {
                hour = "0" + hour
            }
            if (minute < 10) {
                minute = "0" + minute
            }

            return hour + ":" + minute
        },
        getComment(rank) {
            if ( rank == "S" ) {
                return this.reply_S
            } else if ( rank == "A" ) {
                return this.reply_A
            } else if ( rank == "B" ) {
                return this.reply_B
            } else if ( rank == "C" ) {
                return this.reply_C
            } else if ( rank == "D" ) {
                return this.reply_D
            } else if ( rank == "E" ) {
                return this.reply_E
            }
        },
    },
    // async fetch ({ store, params }) {
    //     let { data } = await axios.get('https://ludo-fc-ai-server.herokuapp.com/api/?content=%E9%9D%A2%E8%A9%A6%E5%AE%98%E6%82%A8%E5%A5%BD%E6%88%91%E6%98%AF%E5%8D%97%E8%8F%AF%E5%A4%A7%E5%AD%B8%E7%94%9F%E6%AD%BB%E7%B3%BB%E5%A4%A7%E4%B8%89%E5%AD%B8%E7%94%9F%E6%88%91%E6%83%B3%E6%87%89%E5%BE%B5%E8%B2%B4%E9%9B%86%E5%9C%98%E7%9A%84%E7%A6%AE%E5%84%80%E5%AF%A6%E7%BF%92%E7%94%9F%E9%AB%98%E4%B8%89%E5%88%B0%E5%A4%A7%E4%B8%89%E6%88%91%E9%83%BD%E5%9C%A8%E6%9C%8D%E5%8B%99%E6%A5%AD%E6%89%93%E5%B7%A5%E6%9C%8D%E5%8B%99%E4%B8%8A%EF%BC%8C%E6%88%91%E6%B3%A8%E9%87%8D%E7%B4%B0%E7%AF%80%EF%BC%8C%E6%88%91%E5%96%9C%E6%AD%A1%E5%9C%A8%E5%AE%A2%E4%BA%BA%E8%A6%81%E6%B1%82%E5%89%8D%EF%BC%8C%E4%BE%BF%E4%B8%BB%E5%8B%95%E4%B8%8A%E5%89%8D%E5%B9%AB%E5%BF%99%E6%88%91%E9%80%99%E6%A8%A3%E7%9A%84%E9%AB%94%E8%B2%BC%EF%BC%8C%E5%A6%82%E5%90%8C%E8%B2%B4%E5%85%AC%E5%8F%B8%E7%9A%84%E6%9C%8D%E5%8B%99%E7%90%86%E5%BF%B5%E3%80%8C%E4%B8%8D%E7%94%A8%E5%AE%B6%E5%B1%AC%E8%A6%81%E6%B1%82%EF%BC%8C%E8%87%AA%E5%B7%B1%E7%82%BA%E6%95%B4%E5%80%8B%E6%9C%8D%E5%8B%99%E7%9A%84%E5%93%81%E8%B3%AA%E5%81%9A%E6%8A%8A%E9%97%9C%E3%80%8D%E6%AD%A4%E5%A4%96%E6%88%91%E4%B9%9F%E3%80%8C%E5%81%9A%E7%94%9A%E9%BA%BC%E5%83%8F%E4%BB%80%E9%BA%BC%E3%80%8D%EF%BC%8C%E5%AE%88%E5%A5%BD%E5%AD%B8%E7%94%9F%E7%9A%84%E6%9C%AC%E5%88%86%E6%88%91%E7%9B%AE%E5%89%8D%E6%98%AF%E5%85%A8%E5%AD%B8%E5%B9%B4%E7%AC%AC2%E5%90%8D%EF%BC%8C%E4%B8%94%E5%B7%B2%E8%80%83%E5%8F%96%E5%96%AA%E7%A6%AE%E4%B9%99%E7%B4%9A')
    //     console.log(data.content);
    //     this.content = data.content;
    //     return {content : data.content}
    // },
    asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
        return axios.get(`https://api.ludonow.com/fc/${params.id}`)
        .then((res) => {
            return { data: res.data }
        }).catch((e) => {
            console.log("call api error");
            return { data: new Object() }
        })
    },
}
</script>

<style scoped>
.fc_result_container {
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    background-color: #fdfcf7;
    padding-bottom: 35px;
}
.fc_result_header {
    padding-top: 17px;
    margin-left: 26px;
    margin-right: 26px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.fc_result_header p {
    display: flex;
    text-align: right;
}
.fc_result_header_logo {
    display: flex;
    align-items: center;
}
.fc_result_header_logo img {
    width: 35.7px;
    height: 35.7px;
}
.fc_result_header_logo p{
    display: inline-flex;
    font-family: HelveticaNeue;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #434343;
    margin-left: 7px;
}
.fc_result_title {
    height: 28px;
    font-family: HelveticaNeue;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #434343;
    margin-top: 36px;
    width: 100%;
}
.fc_result_subtitle {
    height: 22px;
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: center;
    color: #434343;
    margin-top: 24px;
    text-align: center;
    width: 100%;
}
.fc_result_rank {
    height: 273px;
    font-family: HelveticaNeue;
    font-size: 300px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #da5656;
}
.fc_result_rank span{
    font-family: HelveticaNeue;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #434343;
    /* position: absolute; */
}
.fc_result_label {
    font-family: HelveticaNeue;
    font-size: 15px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #434343;
    width: 100%;
    margin-top: 44px;
}
.fc_result_textfield {
    display: flex;
    width: 348px;
    background-color: #efefef;
    margin-top: 18px;
    min-height: 100px;
    padding: 10px;
}
.fc_result_join_block_container {
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
}
.fc_result_join_block {
    display: flex;
    flex-direction:column;
    margin-top: 56px;
    width: 348px;
    height: 231px;
    background-color: #ffffff;
}
.fc_result_join_block_header {
    display: flex;
    margin-left: 16px;
    margin-top: 16px;
    height: 36px;
    align-items: center;
    font-family: HelveticaNeue;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #434343;
    width: 100%;
}
.fc_result_join_block_header img{
    width: 36px;
    height: 36px;
    margin-right: 8px;
}
.fc_result_join_block_content {
    margin-top: 45px;
    font-family: HelveticaNeue;
    font-size: 26px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.23;
    letter-spacing: normal;
    text-align: center;
    color: #434343;
    width: 100%;
}
.fc_result_join_block_link {
    margin-top: 33px;
    text-decoration: none;
    font-family: HelveticaNeue;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #434343;
}
.fc_result_share_button {
    margin-top: 39px;
    width: 100vw;
    /* height: 39.6px; */
    /* border-radius: 50px; */
    /* background-color: #2f4b84; */
    font-family: HelveticaNeue;
    font-size: 17px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.24;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
