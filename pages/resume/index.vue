<template>
    <div v-if="$mq === 'mobile'" style="height:100%">
        <input type="radio" id="checkseemore" style="position: fixed;"/>
        <div class="banner">
            <img class="title" src="/resume/Group_168.png"/>
            <img class="title-blue" src="/resume/Group 153.png"/>
            <div class="login">{{ is_login ? '登出' : '登入'}}</div>
        </div>
        <div class="first-block">
            <img class="earphone" src="/resume/earphone.png" />
            <img class="earphone2" src="/resume/earphone2.png" />
            <img class="eye" src="/resume/eye.png" />
            <div class="slogan">
                <div class="line1">
                    讓你只用60分鐘
                </div>
                <div class="line2">
                    完勝60天準備
                </div>
            </div>
            <label class="seemore" for="checkseemore">
                瞭解更多
                <img src="/resume/Union 1.png"/>
            </label>
        </div>
        <div class="scrolldown">
            <div class="seconds-block">
                    求職季的競爭<br>
                    比的不只是好，更是快<br>
                    <div class="sb-addition">
                        使用一個月99元，獲得履歷課程與無限次履歷評測
                    </div>
            </div>
            <img src="/resume/Mask Group 4.png" style="margin-top:10px"/>
            <div class="third-block">
                <div class="tb-container">
                    <div class="tb-title">在找工作的你<br>是否正遇到以下問題</div>
                    <div class="tb-content">
                            每多花一天準備履歷<br>
                            你將更可能失去最理想的工作！<br><br>
                            
                            網路上免費資源很多<br>
                            但無形的時間成本正讓你失去先機。<br><br>
                            
                            因為履歷不夠好或學的不夠快<br>
                            就輸給比你還差的人，你甘心嗎？<br><br>
                    </div>
                </div>
            </div>

            <div class="four-block">
                <div class="fourblock-1">學履歷最佳途徑</div>
                <div class="fourblock-2">帶你實戰的線上課程+即時評測</div>
            </div>

            <div class="slide-show">
                <img id="pre-img" src="/resume/nsleft.png">
                <img id="next-img" src="/resume/nsleft.png">
                <div id="ss-container">
                    <img src="/resume/Group 534.png">
                    <img src="/resume/Group 535.png">
                    <img src="/resume/Group 536.png">
                </div>
            </div>

            <div class="six-block">
                <div class="sixty-min">
                    <div class="sixty">60</div><div class="minute">分鐘</div>
                </div>
                <div class="perform-dif">學習前後成效差距</div>
                <div class="bu-assist">職位：業務開發助理</div>
                <div class="before-class">
                    <div class="past"> 過去經歷</div>
                    <div class="past-content">接洽外部廠商溝通、擔任溝通窗口、曾與知名OO集團合作擔任專案成員、負責行政協助、完成主管交辦事項......</div>
                </div>
                <div class="after-practice">
                    <div class="past"> 過去經歷</div>
                    <div class="after-content">
                            -每日負責與超過50個不同業務窗口來回協商，並節省了部門17%的時間成本<br><br>

                            -1年內參與21筆開發案專案<br>
                            營業價值超過3000萬<br><br>
                            
                            -與知名OO集團合作，打造「動態智能作品」成為全國產業創舉
                    </div>
                </div>
            </div>
            <div class="seven-block">
                <div class="sevenblock-1">學完即做完</div>
                <div class="sevenblock-2">帶你實戰的線上課程+即時評測</div>
                <div class="videoplay">
                    <div id="share-mask"><div>點這分享到FB就能解鎖第二課</div></div>
                    <iframe id="demovideo" src="https://player.vimeo.com/video/319395957" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <div id="democourses">
                    <div id="dc-1" class="course">
                        <div class="c-img"><img src="/resume/Group 54.png"/></div>
                        <div class="c-title">超同標場</div>
                        <div class="c-context">以生在得算化山，種夠是種，看下優味？壓青能代東預上大！星方學，中格選不望能的公員東負前刻？</div>
                    </div>
                    <div id="dc-2" class="course">
                        <div class="c-img"><img src="/resume/Group 54.png"/></div>
                        <div class="c-title">爭先基看媽多月</div>
                        <div class="c-context">常致來對，車長去設科勢地我度母物一和！存師了者，較自快日音行他給覺方主家目，以生在得算化山，種夠是種，看下優味？</div>
                    </div>
                </div>
                <div class="fbshare" id="fbshare">
                    <div class="clickshare" id="clickshare">點擊分享</div>
                    <div>分享到Facebook就能解鎖第二課</div>  
                </div>
            </div>
            <div class="eight-block">
                <div class="eb-title">課程單元介紹</div>
                <div class="eb-des">囊括台灣常見人力銀行履歷需求</div>
                <div class="eb-content">
                    1 - 換位思考，告訴你人資如何看履歷！
                    <br><br>
                    2 - 從選平台到職缺說明，教你做前期準備功課
                    <br><br>
                    3 - 最強自我介紹公式！貫穿所有自介需求！
                    <br><br>
                    4 - 不只簡單交代！三點條列讓你真正寫好經歷
                    <br><br>
                    5 - 零經驗的逆襲！無相關經驗也能寫出有效經歷
                    <br><br>
                    6 - 讓能力具有公信力！追求讓公司最有共鳴
                    <br><br>
                    7 - 校系獎狀大影響！妥善利用學歷與個人成就
                    <br><br>
                    8 - 自傳該不該寫？重點都寫到才加分！
                    <br><br>
                    9 - 那些題目在問什麼？常見面試題目暗黑解析
                    <br><br>
                    10 - 寄出前的準備，寫出高開信率的自我推薦！
                </div>
            </div>
            <div class="comment-title">學員的評價</div>
            <div class="comment">
                <img src="/resume/Mask Group 6.png"/>
                <div class="comment-content">
                    「原本準備畢業很忙，更沒有時間上網找很多資料，剛好有這個課程，讓我可以快速弄懂，才不會輸給其他有時間的同學」
                    <br><br>
                    — Mario Hung
                </div>
            </div>
            <div class="comment">
                <img src="/resume/Mask Group 7.png"/>
                <div class="comment-content">
                    「從來沒想過寫法用字竟然有這麼精細的差異，整堂課程簡單不拖拉，節奏很吸睛，不會像是其他線上課程的教學視頻一樣很死板想睡，酷！」
                    <br><br>
                    — Eva Tsu
                </div>
            </div>
            <div class="comment">
                <img src="/resume/Mask Group 8.png"/>
                <div class="comment-content">
                    「比起那些只講基本原則的課程還紮實許多！！還有健檢功能可以避免自我感覺良好，真的知道自己履歷哪裡有問題」
                    <br><br>
                    — Jay Chang
                </div>
            </div>
            <img class="phoneimg" src="/resume/Group 154.png"/>
            <div class="nine-block">
                <div class="nb-title">課程與評測規劃者</div>
                <img class="nb-fly" src="/resume/Group 153-2.png" />
                <div class="nb-3">屬於台灣青年的知識自媒體</div>
                <div class="nb-4">專注於18~30歲的知識教育普及</div>
                <img src="/resume/Group 160.png"/>
            </div>
            <div class="ten-block">
                <div class="tb-1">60分鐘學習與練習</div>
                <div class="tb-2">1個月內找到理想工作</div>
                <img src="/resume/Group 167.png" />
            </div>

            <div class="blank-block"></div>
            <router-link v-if="!is_login" to="/resume/signup-pay">
                <footer class="paynow">
                    立即付款
                </footer>
            </router-link>
            <router-link v-else to="/resume/course">
                <footer class="paynow">
                    開始上課
                </footer>
            </router-link>
        </div>
    </div>
    <div v-else>
        <input type="radio" id="checkseemore"/>
        <div class="md-banner">
            <img class="md-title" src="/resume/Group_168.png"/>
            <img class="md-title-blue" src="/resume/Group 153.png"/>
            <div class="md-login">{{ is_login ? '登出' : '登入／註冊'}}</div>
        </div>
        <div class="md-first-block">
            <img class="md-earphone" src="/resume/earphone.png" />
            <img class="earphone2" src="/resume/earphone2.png" />
            <img class="eye" src="/resume/eye.png" />
            <div class="md-slogan">
                <div class="md-line1">
                    讓你只用60分鐘
                </div>
                <div class="md-line2">
                    完勝60天準備
                </div>
            </div>
            <label class="md-seemore" for="checkseemore">
                瞭解更多
                <img src="/resume/Union 1.png"/>
            </label>
        </div>
        <div class="scrolldown">
            <div class="md-seconds-block">
                    求職季的競爭<br>
                    比的不只是好，更是快<br>
                    <div class="md-sb-addition">
                        使用一個月99元，獲得履歷課程與無限次履歷評測
                    </div>
            </div>
            <img src="/resume/md-Mask Group 4.png" style="margin-left:30%;width:500px;"/>
            <div class="md-third-block">
                <div class="md-tb-container">
                    <div class="md-tb-title">在找工作的你<br>是否正遇到以下問題</div>
                </div>
                <div class="md-tb-container">    
                    <div class="md-tb-content">
                            每多花一天準備履歷<br>
                            你將更可能失去最理想的工作！<br><br>
                            
                            網路上免費資源很多<br>
                            但無形的時間成本正讓你失去先機。<br><br>
                            
                            因為履歷不夠好或學的不夠快<br>
                            就輸給比你還差的人，你甘心嗎？<br><br>
                    </div>
                </div>
            </div>
            <div class="md-four-block">
                <div class="md-four-block-1">學履歷最佳途徑</div>
                <div class="md-four-block-2">帶你實戰的線上課程+即時評測</div>
                <div class="md-four-picture">
                    <img src="/resume/Group 534.png" alt="">
                    <img src="/resume/Group 535.png" alt="">
                    <img src="/resume/Group 536.png" alt="">
                </div>
            </div>
            <div class="md-six-block">
                <div class="md-six-block-content">
                    <div class="md-sixty-min">
                        <div class="md-sixty">60</div><div class="md-minute">分鐘</div>
                    </div>
                    <div class="md-perform-dif">學習前後成效差距</div>
                    <div class="md-bu-assist">職位：業務開發助理</div>
                </div>
                <div class="md-before-class">
                    <div class="md-past"> 過去經歷</div>
                    <div class="md-past-content">接洽外部廠商溝通、擔任溝通窗口、曾與知名OO集團合作擔任專案成員、負責行政協助、完成主管交辦事項......</div>
                </div>
                <div class="md-after-practice">
                    <div class="md-past"> 過去經歷</div>
                    <div class="md-after-content">
                            -每日負責與超過50個不同業務窗口來回協商，並節省了部門17%的時間成本<br><br>

                            -1年內參與21筆開發案專案<br>
                            營業價值超過3000萬<br><br>
                            
                            -與知名OO集團合作，打造「動態智能作品」成為全國產業創舉
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 720,
    desktop: Infinity,
  }
});
export default {
    head () {
        return {
            script: [
                { src: 'https://player.vimeo.com/api/player.js' }        
            ],
            link: [
                { rel: 'stylesheet', href: '/resume/index.css' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500' }
            ],
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1.0"},
                { charset: "UTF-8"}
            ]
        } 
    },
    data:() => ({
        is_login:false,
    }),
    async mounted() {
        // if (process.client) {
        //     var dv = document.getElementById("demovideo");
        //     var dcPlayer = new Vimeo.Player(dv);
        //     var size = Math.min(640,window.innerWidth,window.innerHeight);
        //     dv.style.height = size-36+"px";
        //     dv.style.width = size-36+"px";
        //     var isShared = false;
        //     var shareurl = "https://tw.yahoo.com";
        //     var sharelink = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u="+encodeURIComponent(shareurl)+"&display=popup&ref=plugin&src=share_button"
        //     document.getElementById("democourses").onclick = function(){
        //         document.getElementById("fbshare").style.display = "block";
        //     }
        //     function openShareWindow(){
        //         isShared = true;
        //         window.open(sharelink,"share","width=1000,height=600");
        //         document.getElementById("share-mask").style.display = "none";
        //     }
        //     document.getElementById("clickshare").onclick = openShareWindow;
        //     document.getElementById("share-mask").onclick = openShareWindow;
        //     function switchCourse(id){
        //         if(isShared){
        //             dv.src = "https://player.vimeo.com/video/"+id;
        //         }
        //         function switchCourse(id){
        //             if(isShared){
        //                 dv.src = "https://player.vimeo.com/video/"+id;
        //             }
        //         }
        //         $("#dc-1").click(()=>switchCourse(319395956));
        //         $("#dc-2").click(()=>switchCourse(319395955));
        //         dcPlayer.on('ended', function(){
        //             document.getElementById("fbshare").style.display = "block";
        //         });
        //     }
        //     $("#dc-1").click(()=>switchCourse(319395956));
        //     $("#dc-2").click(()=>switchCourse(319395955));
        //     dcPlayer.on('ended', function(){
        //         document.getElementById("fbshare").style.display = "block";
        //         document.getElementById("share-mask").style.display = "block";
        //     });

        //     var imgContainer = document.getElementById("ss-container");
            
        //     var slideTimer = null, imgIndex = 0, slideInterval = 3000;
        //     $(imgContainer.children[0]).show();
        //     slideTimer = setTimeout(()=>switchImg(1,imgContainer,slideTimer,imgIndex), slideInterval);
        //     // $("#pre-img").click(()=>switchImg(-1));
        //     // $("#next-img").click(()=>switchImg(1));
        //     function switchImg(factor,element,stimer,theImgIndex){
        //         clearTimeout(stimer);
        //         $(element.children[theImgIndex]).fadeOut(500,function(){
        //             var imgLength = element.children.length;
        //             theImgIndex = (theImgIndex+imgLength+1*factor)%imgLength;
        //             $(element.children[theImgIndex]).fadeIn(500);
        //             stimer = setTimeout(()=>switchImg(1,element,stimer,theImgIndex), slideInterval);
        //         });
        //     }
            
        //     if (!this.$route.path.includes("/signup") && !this.$route.path.includes("/login") ) {
        //         localStorage.redirect = this.$route.path;
        //         console.log("save redirect : " + localStorage.redirect);
        //     }

        //     this.is_login = this.$checkLogin(this.$store);
        // }
    },
}
</script>
<style>
.md-banner{
    z-index: 10;
    position:fixed;
    top:0px;
    width: 100%;
    background: #0090FF;
    height: 55px;
}
.md-banner .md-login{
    float:right;
    font-size: 14px;
    line-height: 55px;
    color:white;
    margin-right:14%;
}
.md-banner .md-title-blue {
    display: none;
}
.md-banner .md-title, #checkseemore:checked ~ .md-banner .md-title-blue{
    display:initial;
    margin-left: 12%;
}
.md-first-block{
    position: relative;
    width:100vw;
    height: 100vh;
    background: url("/resume/Group 367.png") #0090FF;
    background-size:85%;
    background-position: center center;
    background-repeat: no-repeat;
    overflow-x: hidden;
    transition: height 100ms linear;
    overflow-y: hidden;
}
.md-seemore{
    position: absolute;
    text-align: center;
    color: white;
    left: calc(50% - 91px);
    top: 52%;
    width: 166px;
    font-size: 29px;
}
.md-earphone{
    position: absolute;
    bottom: -18%;
    left: 28%;
    width: 650px;
    
}

.md-slogan{
    position: absolute;
    top: 15%;
    width: 590px;
    left: calc(50% - 292px);
}
.md-slogan div{
    text-align: justify;
    color:white;
}
.md-slogan div:after{
    content:"";
    display:inline-block;
    width:100%;
    height:0px;
}
.md-line1{
    font-size: 80px;
    font-weight: 500;
    line-height: 1.5em;
}
.md-line2{
    margin-top: -140px;
    font-size: 95px;
    font-weight: 100;
}
#checkseemore:checked ~ .md-first-block {
    display: none;
}
#checkseemore:checked ~ .md-banner{
    background: #FFF;
    color:#0090FF;
    box-shadow: unset;
}
#checkseemore:checked ~ .md-banner .md-login{
    color:#0090FF;
}
#checkseemore:checked ~ .md-banner .md-title{
    display:none;
}
#checkseemore:checked ~ #checkseemore {
    display: none !important;
}
.md-seconds-block{
    position:relative;
    color:#007CDC;
    width: 100%;
    /* height: 102px; */
    text-align: center;
    font-size: 34px;
    font-weight: 500;
    margin-top: 8%;
    line-height: 44px;
    margin-bottom: 20px;
}
.md-sb-addition {
    position: absolute;
    display: contents;
    font-size: 14px;
    line-height: 17px;
    bottom:0px;
    left:50%;
    transform: translateX(-50%);
}
.md-third-block{
    width: 750px;
    height:300px;
    margin:auto;
    background: #FFDE00;
    margin-top:-112px;
    color:black;
    font-weight: 500;
    box-shadow: 0px 6px 12px rgba(0,0,0,0.2);
}
.md-tb-container{
    float: left;
    width: 300px;
    margin-left: 60px;
}
.md-tb-title{
    padding-top: 142px;
    text-align: right;
    font-size: 30px;
}
.md-tb-content{
    width:280px;
    font-size: 16px;
    margin-top: 55px;
    line-height: 21px;
}
.md-four-block {
    margin: auto;
    margin-top: 10vh;
    width: 100%;
    height: 400px;
    text-align: center;
    color: #007CDC;
}
.md-four-block-1 {
    font-size: 44px;
    font-weight: 100;
}
.md-four-block-2 {
    font-size: 24px;
    font-weight: 500;
    margin-top: -3px;
}
.md-four-picture {
    padding-top: 40px;
    width: 800px;
    height: 350px;
    margin: auto;
}
.md-four-picture img {
    width: 30%;
    height: 80%;
    box-shadow: 9px 3px 30px rgba(0,0,0,0.2);
    margin: 10px;
}
.md-six-block{
    height: 400px;
    width: 750px;
    margin: 60px auto;
    text-align: center;
    background: #0090FF;
    color: white;
}
.md-six-block-content {
    background-color: red;
    width: 50%;
    height: 100%;
    padding-top: 80px;
}
.md-sixty-min div{
    display: inline-block;
}
.md-sixty{
    font-size: 109px;
}
.md-sixty-min .md-minute{
    font-size: 35px;
    font-weight: 150;
}
.md-perform-dif{
    font-size: 30px;
    font-weight: 500;
}
.md-bu-assist{
    font-size: 14px;
    margin-top: 15px;
}
.md-before-class{
    text-align: left;
    margin: auto;
    margin-top: 35px;
    width: 317px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    background: url('/Group 148.png');
    background-position: bottom center;
    background-repeat: no-repeat;
}
.md-before-class div, .md-after-practice div{
    width: 279px;
    margin-left: 18px;
    font-size: 16px;
}
.md-past{
    border-left: 2px solid white;
    padding-left: 8px;
    font-weight: 500;
    margin-top: 20px;
}
.md-past-content{
    height: 84px;
    margin-top: 18px;
    margin-bottom: 68px;
}
.md-after-practice{
    text-align: left;
    margin: auto;
    width: 317px;
    border-bottom: 2px solid white;
    background: url('/Group 149.png');
    background-position: bottom center;
    background-repeat: no-repeat;
}
.md-after-content{
    margin-top: 18px;
    margin-bottom: 68px;
}


</style>
