<template>
<div>
    <div v-if="$mq === 'mobile'" :style="{height:'100%',display: $mq === 'desktop' ? 'none' : ''}">
        <input type="radio" id="checkseemore" style="position: fixed;" :checked="seemore_check_or_not"/>
        <!-- <div class="banner">
            <img class="title" src="/resume/resume-logo.svg"/>
            
            <div v-if="is_login" class="login" @click="$router.push('/logout')" >登出</div>
            <div v-else class="login" @click="$router.push('/resume/login')" >登入</div>
        </div> -->
        <div class="first-block" v-touch:swipe="dragFirstBlock" @scroll="dragFirstBlock">
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
            <label class="seemore" for="checkseemore" @click="dragFirstBlock">
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
            <div class="seven-block" v-if="$mq === 'mobile'">
                <div class="sevenblock-1">學完即做完</div>
                <div class="sevenblock-2">帶你實戰的線上課程+即時評測</div>
                <div class="videoplay">
                    <div id="share-mask"><div>覺得有幫助嗎？<br>分享這堂課給你朋友<br>就可以觀看第二支影片囉<br><button>分享</button></div></div>
                    <iframe id="demovideo" :src="'https://player.vimeo.com/video/' + getChapterData01.video_id" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <div id="democourses">
                    <div id="dc-1" class="course">
                        <div class="c-img"><img :src="getChapterData01.thumbnail"/></div>
                        <div class="c-title">{{ getChapterData01.title }}(試讀)</div>
                        <div class="c-context">{{ getChapterData01.subtitle }}</div>
                    </div>
                    <div id="dc-2" class="course">
                        <div class="c-img"><img :src="getChapterData04.thumbnail"/></div>
                        <div class="c-title">{{ getChapterData04.title }}(試讀)</div>
                        <div class="c-context">{{ getChapterData04.subtitle }}</div>
                    </div>
                </div>
                <div class="fbshare" id="fbshare">
                    <div class="clickshare" id="clickshare">點擊分享</div>
                    <div>分享到Facebook就能解鎖第二課</div>  
                </div>
            </div>
            <div class="eight-block">
                <div class="eb-title">課程單元介紹</div>
                <div class="eb-des-box" style="margin-top:20px;" :class="showOrNotA" @click="toggleClassA()">
                    <div class="eb-des-box-title">第一堂課<br>面試官思維分析<hr>
                    <div class="eb-des-circle" :class="showOrNotA">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="eb-des-box-content">
                        <ol>
                            <li>求職前，你該知道面試官如何看履歷！</li>
                            <li>履歷隱藏四大指標：信度、價值、包容、願景</li>
                            <li>如何透過舉例與經驗來呈現能力極限</li>
                            </ol>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotB" @click="toggleClassB()">
                    <div class="eb-des-box-title">第二堂課<br>選擇正確平台與邏輯<hr>
                    <div class="eb-des-circle" :class="showOrNotB">
                        <div></div>
                        <div></div>
                    </div>
                        <div class="eb-des-box-content">
                            <ol>
                                <li>從選平台到職缺說明，教你做前期準備功課</li>
                                <li>求職平台介紹與優劣分析</li>
                                <li>目標產業的前景分析與薪水差異</li>
                            </ol>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotC" @click="toggleClassC()">
                    <div class="eb-des-box-title">第三堂課<br>自我介紹標準公式<hr>
                    <div class="eb-des-circle" :class="showOrNotC">
                        <div></div>
                        <div></div>
                    </div>
                        <div class="eb-des-box-content">
                        <ol>
                            <li>價值觀的定義：你看見的問題與你如何改變</li>
                            <li>自我介紹關鍵公式，四大元素留下深刻印象</li>
                        </ol>
                        <hr> 
                        </div>  
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotD" @click="toggleClassD()">
                    <div class="eb-des-box-title">第四堂課<br>有效撰寫工作經歷<hr>
                        <div class="eb-des-box-content">
                            <div class="eb-des-circle" :class="showOrNotD">
                                <div></div>
                                <div></div>
                            </div>
                        <ol>
                            <li>工作經歷的撰寫方式</li>
                            <li>三條經歷撰寫，有效呈現經驗質與量</li>
                            <li>寫出面試官心中，最有感的實際績效數字</li>
                        </ol>
                        <hr>
                        </div>
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotE" @click="toggleClassE()">
                    <div class="eb-des-box-title">第五堂課<br>志工與社團經驗呈現<hr>
                    <div class="eb-des-circle" :class="showOrNotE">
                        <div></div>
                        <div></div>
                    </div>    
                        <div class="eb-des-box-content">
                        <ol>
                            <li>將重心轉移到學習成效</li>
                            <li>將社團經歷做為跳板，接軌職場需求</li>
                        </ol>
                        <hr>
                        </div>
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotF" @click="toggleClassF()">
                    <div class="eb-des-box-title">第六堂課<br>寫出能力的公信力<hr>
                    <div class="eb-des-circle" :class="showOrNotF">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="eb-des-box-content">
                        <ol>
                            <li>從職缺說明，找出職位能力需求</li>
                            <li>從公司需求找出能力最佳操作定義</li>
                        </ol>
                        <hr>
                        </div>
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotG" @click="toggleClassG()">
                    <div class="eb-des-box-title">第七堂課<br>利用學歷與個人成就<hr>
                    <div class="eb-des-circle" :class="showOrNotG">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="eb-des-box-content">
                        <ol>
                            <li>讓研究與主修科目強化價值觀與專業度</li>
                            <li>強化關係鍊，讓校友人脈成為你的優勢</li>
                            <li>如何有自信但不自傲的陳述成就</li>
                        </ol>
                        <hr>
                        </div>
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotH" @click="toggleClassH()">
                    <div class="eb-des-box-title">第八堂課<br>自傳五大向度分析<hr>
                    <div class="eb-des-circle" :class="showOrNotH">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="eb-des-box-content">
                        <ol>
                            <li>人資如何解讀自傳</li>
                            <li>自傳需滿足的五大向度</li>
                        </ol>
                        <hr>
                        </div>
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotI" @click="toggleClassI()">
                    <div class="eb-des-box-title">第九堂課<br>面試常見題目解析<hr>
                    <div class="eb-des-circle" :class="showOrNotI">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="eb-des-box-content">
                        <ol>
                            <li>『最挫折經驗』挫折容忍與玻璃心</li>
                            <li>『未來的願景』規劃與資源整合</li>
                            <li>『優點與缺點』自我覺察與問題解決</li>
                            <li>『情境題面試』分析與錯誤歸責</li>
                            <li>『還有什麼想問的嗎』好奇心與主動性</li>
                        </ol>
                        <hr>
                        </div>
                    </div>
                </div>
                <div class="eb-des-box" :class="showOrNotJ" @click="toggleClassJ()">
                    <div class="eb-des-box-title">第十堂課<br>提高求職信開信率<hr>
                    <div class="eb-des-circle" :class="showOrNotJ">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="eb-des-box-content" style="margin-top:20px;">
                        <ol>
                            <li>提高開信率的求職信撰寫</li>
                            <li>求職信撰寫的四個段落</li>
                            <li>求職信常見的錯誤解析</li>
                        </ol>
                        <hr>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-title">學員評價</div>
            <div class="comment">
                <img src="/resume/resume-stu01.png"/>
                <div class="comment-content">
                    「原本準備畢業很忙，更沒有時間上網找很多資料，剛好有這個課程，讓我可以快速弄懂，才不會輸給其他有時間的同學」
                    <br><br>
                    — 顏小姐
                </div>
            </div>
            <div class="comment">
                <img src="/resume/resume-stu02.png"/>
                <div class="comment-content">
                    「從來沒想過寫法用字竟然有這麼精細的差異，整堂課程簡單不拖拉，節奏很吸睛，不會像是其他線上課程的教學視頻一樣很死板想睡，酷！」
                    <br><br>
                    — 張先生
                </div>
            </div>
            <div class="comment">
                <img src="/resume/resume-stu03.png"/>
                <div class="comment-content">
                    「比起那些只講基本原則的課程還紮實許多！！還有健檢功能可以避免自我感覺良好，真的知道自己履歷哪裡有問題」
                    <br><br>
                    — 許小姐
                </div>
            </div>
            <img class="phoneimg" src="/resume/Group 154.png"/>
            <div class="nine-block">
                <div class="nb-title">課程與評測規劃者</div>
                <img class="nb-fly" src="/resume/Group 153-2.png" />
                <div class="nb-3">台灣青年的知識自媒體</div>
                <div class="nb-4">專注於18~30歲的知識教育</div>
                <img src="/resume/Group 405.png"/>
            </div>
            <div class="ten-block">
                <div class="tb-1">60分鐘學習與練習</div>
                <div class="tb-2">1個月內找到理想工作</div>
                <router-link to="/resume/pay"><img src="/resume/Group 167.png" /></router-link>
            </div>
            <div class="blank-block"></div>
            <div class="eight-block" style="padding-bottom: 20px;">
                <div class="eb-title">FAQ</div>
                <div class="eb-content">
                    <br><br>
                    <b>Q1: 請問履歷範本在哪上課？</b>
                    <br><br>
                    履歷範本為『線上課程』，當課程上線後，隨時隨地都可以透過手機、平板、與電腦上課。
                    <br><br>
                    <b>Q2: 課程可以看幾次？</b>
                    <br><br>
                    課程為單月份訂閱制，在訂購後的這一個月內都可以一直重複觀看。
                    <br><br>
                    <b>Q3：請問 NT99 元/月的訂閱服務之後會有更新內容嗎？</b>
                    <br><br>
                    會的，未來我們將會持續更新所有職場必備技能的線上學習服務（課程+評測），從商用書信到溝通表達等內容，完整包覆 360 天職場需求。為回饋狂人飛鐵粉，即日起到 2019/6/30 前訂閱，即可以終生以 NT99 元/月的價格訂購（原價為 NT199 元/月，中間斷訂的話則恢復常態 NT199 元/月計費)
                    <br><br>
                    <b>Q4: 會有真人幫我把我的履歷改到好嗎？</b>
                    <br><br>
                    不會，給你魚吃，不如給你一把釣竿。我們將透過 AI 人工智能為您檢測，並針對不足之處，教你合適的撰寫方式。
                    <br><br>
                    <b>Q5: 取消訂閱</b>
                    <br><br>
                    欲取消訂閱服務須請來信至 contact@flyingcrazyer.com 提出，將有專人協助為您服務。
                    <br><br>
                    <b>Q6: 付款方式</b>
                    <br><br>
                    讓狂人飛與日商恩沛股份有限公司提供之「AFTEE」後支付服務獨家合作，是收到商品後才付款的支付方式。<br>不須輸入繁瑣的個人資料，也不須登錄會員即可立即免費使用！<br>將於下單後 24 小時內透過簡訊寄送繳費通知，您可透過便利商店代收服務或 ATM 繳費等方式完成付款手續。<br>瞭解更多>> <a style="color:white;text-decoration: underline;" href="https://lihi.vip/JpeZj" target="_blanck">https://lihi.vip/JpeZj</a>
                    <br><br>
                    <b>Q7: 電子發票開立</b>
                    <br><br>
                    將於付款後 30 天內寄送至您註冊之電子信箱。
                    <br><br>
                    <b>Q8: 其他問題</b>
                    <br><br>
                    請來信至 contact@flyingcrazyer.com ，將有專人協助為您服務。
                </div>
            </div>
            <footer class="paynow" v-if="!payed_or_not" @click="clickPayNow">
                立即購買
            </footer>
            <router-link v-else to="/resume/course">
                <footer class="paynow">
                    開始上課
                </footer>
            </router-link>
        </div>
    </div>
    <div v-else :style="{display: $mq !== 'desktop' ? 'none' : 'block'}" class="md-body">
        <input type="radio" id="checkseemore" :checked="seemore_check_or_not" />
        <!-- <div class="md-banner">
            <img class="md-title" src="/resume/resume-logo.svg"/>
            <img class="md-title-blue" src="/resume/resume-logo.svg"/>
            <div class="md-login" @click="$router.push(is_login ? '/logout' : '/resume/login')" >{{ is_login ? '登出' : '登入'}}</div>
        </div> -->
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
            <label class="md-seemore" for="checkseemore" @click="dragFirstBlock('top')">
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
                <img src="/resume/md-Mask Group 4.png" style="margin-left:24%;width:500px;"/>
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
                <div class="md-six-block-content">
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
            <div class="md-seven-block">
                <div class="md-sevenblock-1">學完即做完</div>
                <div class="md-sevenblock-2">帶你實戰的線上課程+即時評測</div>
                <div class="md-videoplay">
                    <div id="share-mask"><div>覺得有幫助嗎？<br>分享這堂課給你朋友<br>就可以觀看第二支影片囉<br><button @click.prevent="openShareWindow">分享</button></div></div>
                    <iframe id="demovideo" :src="'https://player.vimeo.com/video/' + getChapterData01.video_id" frameborder="0" allow="autoplay; fullscreen" allowfullscreen width="640px" height="360px"></iframe>
                </div>
                <div id="democourses">
                    <div id="dc-1" class="md-course">
                        <div class="md-c-img"><img :src="getChapterData01.thumbnail"/></div>
                        <div class="md-c-box">
                            <div class="md-c-title">{{ getChapterData01.title }}(試讀)</div>
                            <div class="md-c-context">{{ getChapterData01.subtitle }}</div>
                        </div>
                    </div>
                    <div id="dc-2" class="md-course">
                        <div class="md-c-img"><img :src="getChapterData04.thumbnail"/></div>
                        <div class="md-c-box">
                            <div class="md-c-title">{{ getChapterData04.title }}(試讀)</div>
                            <div class="md-c-context">{{ getChapterData04.subtitle }}</div>
                        </div>
                    </div>
                </div>
                <div class="md-fbshare" id="fbshare">
                    <div class="md-clickshare" id="clickshare" @click="openShareWindow">點擊分享</div>
                    <div>分享到Facebook就能解鎖第二課</div>  
                </div>
            </div>
            <div class="md-eight-block">
                <div class="md-comment-title">學員評價</div>
                <div class="md-comment-box">
                    <div class="md-comment">
                        <img src="/resume/resume-stu01.png"/>
                        <div class="md-comment-content">
                            「原本準備畢業很忙，更沒有時間上網找很多資料，剛好有這個課程，讓我可以快速弄懂，才不會輸給其他有時間的同學」
                            <br><br>
                            <p>— 顏小姐</p>
                        </div>
                    </div>
                    <div class="md-comment">
                        <img src="/resume/resume-stu02.png"/>
                        <div class="md-comment-content">
                            「從來沒想過寫法用字竟然有這麼精細的差異，整堂課程簡單不拖拉，節奏很吸睛，不會像是其他線上課程的教學視頻一樣很死板想睡，酷！」
                            <br><br>
                            <p>— 張先生</p>
                        </div>
                    </div>
                    <div class="md-comment">
                        <img src="/resume/resume-stu03.png"/>
                        <div class="md-comment-content">
                            「比起那些只講基本原則的課程還紮實許多！！還有健檢功能可以避免自我感覺良好，真的知道自己履歷哪裡有問題」
                            <br><br>
                            <p>— 許小姐</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md-nine-block">
                <div class="md-eb-title">課程單元介紹</div>
                <div class="md-eb-content-box">
                    <div class="md-eb-content-input-box">
                        <div class="md-eb-content-input-title">01.<br>面試官思維分析</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>求職前，你該知道面試官如何看履歷！</li>
                            <li>履歷隱藏四大指標：信度、價值、包容、願景</li>
                            <li>如何透過舉例與經驗來呈現能力極限</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box">
                        <div class="md-eb-content-input-title">02.<br>選擇正確平台與邏輯</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>從選平台到職缺說明，教你做前期準備功課</li>
                            <li>求職平台介紹與優劣分析</li>
                            <li>目標產業的前景分析與薪水差異</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box">
                        <div class="md-eb-content-input-title">03.<br>自我介紹標準公式</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>價值觀的定義：你看見的問題與你如何改變</li>
                            <li>自我介紹關鍵公式，四大元素讓你留下深刻印象</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box">
                        <div class="md-eb-content-input-title">04.<br>有效撰寫工作經歷</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>工作經驗的撰寫方式</li>
                            <li>三條經歷撰寫，有效呈現經驗質與量</li>
                            <li>寫出面試官心中，最有感的實際績效數字</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box">
                        <div class="md-eb-content-input-title">05.<br>志工與社團經驗呈現</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>將重心轉移到學習成效</li>
                            <li>將社團經歷做為跳板，接軌職場需求</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box">
                        <div class="md-eb-content-input-title">06.<br>寫出能力的公信力</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>從職缺說明，找出職位能力需求</li>
                            <li>從公司需求找出能力最佳操作定義</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box">
                        <div class="md-eb-content-input-title">07.<br>利用學歷與個人成就</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>讓研究與主修科目強化價值觀與專業度</li>
                            <li>強化關係鍊，讓校友人脈成為你的優勢</li>
                            <li>如何有自信但不自傲的陳述成就</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box">
                        <div class="md-eb-content-input-title">08.<br>自傳五大向度分析</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>人資如何解讀自傳</li>
                            <li>自傳需滿足的五大向度</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box" style="height:210px">
                        <div class="md-eb-content-input-title">09.<br>面試常見題目解析</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>『最挫折經驗』挫折容忍與玻璃心</li>
                            <li>『未來的願景』規劃與資源整合</li>
                            <li>『優點與缺點』自我覺察與問題解決</li>
                            <li>『情境題面試』分析與錯誤歸責</li>
                            <li>『還有什麼想問的嗎』好奇心與主動性</li>
                            </ol>
                        </div>
                    </div>
                    <div class="md-eb-content-input-box" style="border-bottom:0px;height:190px;">
                        <div class="md-eb-content-input-title">10.<br>提高求職信開信率</div>
                        <div class="md-eb-content-input-content"><ol>
                            <li>提高開信率的求職信撰寫</li>
                            <li>求職信撰寫的四個段落</li>
                            <li>求職信常見錯誤解析</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="md-phone-block">
                <div class="md-phoneimg"></div>
            </div> -->
            <div class="md-ten-block">
                <div class="md-nb-title">課程與評測規劃者</div>
                <img class="md-nb-fly" src="/resume/Group 153-2.png" />
                <div class="md-nb-3">屬於台灣青年的知識自媒體</div>
                <div class="md-nb-4">專注於18~30歲的知識教育普及</div>
                <img class="md-nb-img" src="/resume/Group 405.png"/>
            </div>
            <div class="md-eleven-block">
                <div class="md-eleven-block-box">
                    <div class="md-tb-box">
                        <div class="md-tb-1">60分鐘學習與練習</div>
                        <div class="md-tb-2">1個月內找到理想工作</div>
                    </div>
                    <div class="md-tb-box">
                        <router-link to="/resume/pay"><img src="/resume/Group 390.png" /></router-link>
                    </div>
                </div>
            </div>
             <div class="eight-block" style="padding-bottom: 20px;">
                <div class="eb-title">FAQ</div>
                <div class="eb-content" style="width: 500px;">
                    <br><br>
                    <b>Q1: 請問履歷範本在哪上課？</b>
                    <br><br>
                    履歷範本為『線上課程』，當課程上線後，隨時隨地都可以透過手機、平板、與電腦上課。
                    <br><br>
                    <b>Q2: 課程可以看幾次？</b>
                    <br><br>
                    課程為單月份訂閱制，在訂購後的這一個月內都可以一直重複觀看。
                    <br><br>
                    <b>Q3：請問 NT99 元/月的訂閱服務之後會有更新內容嗎？</b>
                    <br><br>
                    會的，未來我們將會持續更新所有職場必備技能的線上學習服務（課程+評測），從商用書信到溝通表達等內容，完整包覆 360 天職場需求。為回饋狂人飛鐵粉，即日起到 2019/6/30 前訂閱，即可以終生以 NT99 元/月的價格訂購（原價為 NT199 元/月，中間斷訂的話則恢復常態 NT199 元/月計費)
                    <br><br>
                    <b>Q4: 會有真人幫我把我的履歷改到好嗎？</b>
                    <br><br>
                    不會，給你魚吃，不如給你一把釣竿。我們將透過 AI 人工智能為您檢測，並針對不足之處，教你合適的撰寫方式。
                    <br><br>
                    <b>Q5: 取消訂閱</b>
                    <br><br>
                    欲取消訂閱服務須請來信至 contact@flyingcrazyer.com 提出，將有專人協助為您服務。
                    <br><br>
                    <b>Q6: 付款方式</b>
                    <br><br>
                    讓狂人飛與日商恩沛股份有限公司提供之「AFTEE」後支付服務獨家合作，是收到商品後才付款的支付方式。<br>不須輸入繁瑣的個人資料，也不須登錄會員即可立即免費使用！<br>將於下單後 24 小時內透過簡訊寄送繳費通知，您可透過便利商店代收服務或 ATM 繳費等方式完成付款手續。<br>瞭解更多>> <a style="color:white;text-decoration: underline;" href="https://lihi.vip/JpeZj" target="_blanck">https://lihi.vip/JpeZj</a>
                    <br><br>
                    <b>Q7: 電子發票開立</b>
                    <br><br>
                    將於付款後 30 天內寄送至您註冊之電子信箱。
                    <br><br>
                    <b>Q8: 其他問題</b>
                    <br><br>
                    請來信至 contact@flyingcrazyer.com ，將有專人協助為您服務。
                </div>
            </div>
            <resume-footer></resume-footer>
            <footer class="paynow" v-if="!payed_or_not" @click="clickPayNow">
                立即購買
            </footer>
            <router-link v-else to="/resume/course">
                <footer class="paynow">
                    開始上課
                </footer>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import { mapMutations, mapGetters } from 'vuex';
import VueMq from 'vue-mq';
import ResumeFooter from "~/components/resume/ResumeFooter.vue";

Vue.use(Vue2TouchEvents);
Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 900,
    desktop: Infinity,
  }
});
export default {
    layout: 'resume',
    head() {
        return  {
            title: '履歷範本 - 找工作的加速器',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { hid: 'description', name: 'description', content: '狂人履歷線上課程，讓你 60 分鐘超越別人 60 天的準備。' },
                { property : 'og:title' , content:"履歷範本 - 找工作的加速器"},
                { property : 'og:type' , content:"education tech."},
                { property : 'og:url' , content:"https://www.ludonow.com/resume"},
                { property : 'og:image' , content:"https://www.ludonow.com/resume-og-img.jpg"},
                { property : 'og:description' , content:"狂人履歷線上課程，讓你 60 分鐘超越別人 60 天的準備。"},
                { property : 'og:site_name' , content:"www.ludonow.com"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500' }
            ],
            script: [
                { src: 'https://player.vimeo.com/api/player.js' }        
            ],
        }
    },
    data:() => ({
        is_login: false,
        seemore_check_or_not: false,
        ui_config : {},
        is_ui_config_loaded : false,
        payed_or_not: false,
        video_10_percent: false,
        video_50_percent: false,
        video_90_percent: false,
        show_a:false,
        show_b:false,
        show_c:false,
        show_d:false,
        show_e:false,
        show_f:false,
        show_g:false,
        show_h:false,
        show_i:false,
        show_j:false,
    }),
    computed: { 
        ...mapGetters({
            user : 'user/getData',
        }),
        getChapterData01() {
            let data = {
                title:'第一堂課',
                subtitle:'換位思考，告訴你人資如何看履歷！',
                description:'- 學習歷程是什麼？<br>- 為什麼學習歷程會取代備審？<br>- 學習歷程的出現該如何面對？',
                thumbnail:'/victor-course-thumbnail-01.jpg',
                video_id:'337212450',
            };
            
            if (this.is_ui_config_loaded) {
                data = this.ui_config.chapters[0];
            }
            return data;
        },
        getChapterData04() {
            let data = {
                title:'第一堂課',
                subtitle:'換位思考，告訴你人資如何看履歷！',
                description:'- 學習歷程是什麼？<br>- 為什麼學習歷程會取代備審？<br>- 學習歷程的出現該如何面對？',
                thumbnail:'/victor-course-thumbnail-01.jpg',
                video_id:'337212450',
            };
            
            if (this.is_ui_config_loaded) {
                data = this.ui_config.chapters[3];
            }
            return data;
        },
        showOrNotA(){
            return this.show_a ? 'open':'';
        },
        showOrNotB(){
            return this.show_b ? 'open':'';
        },
        showOrNotC(){
            return this.show_c ? 'open':'';
        },
        showOrNotD(){
            return this.show_d ? 'open':'';
        },
        showOrNotE(){
            return this.show_e ? 'open':'';
        },
        showOrNotF(){
            return this.show_f ? 'open':'';
        },
        showOrNotG(){
            return this.show_g ? 'open':'';
        },
        showOrNotH(){
            return this.show_h ? 'open':'';
        },
        showOrNotI(){
            return this.show_i ? 'open':'';
        },
        showOrNotJ(){
            return this.show_j ? 'open':'';
        },

    },
    async beforeCreate() {
        if (process.client) {
            const scrollTo = this.$scrollTo;
            this.ui_config = await require('~/config/resume-config');
            this.is_ui_config_loaded = true;
            const getChapterData01 = this.getChapterData01;
            const getChapterData04 = this.getChapterData04;
            let loader = this.$loading.show({
                color:"#1785db",
                loader:"dots",
                opacity: 0.8,
            });
            setTimeout(() => {
                loader.hide();
                var dv = document.getElementById("demovideo");
                var dcPlayer = new Vimeo.Player(dv);
                // var size = Math.min(640,window.innerWidth,window.innerHeight);
                // dv.style.height = size-36+"px";
                // dv.style.width = size-36+"px";
                var isShared = false;
                var shareurl = "https://www.ludonow.com/resume";
                var sharelink = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u="+encodeURIComponent(shareurl)+"&display=popup&ref=plugin&src=share_button"
                document.getElementById("democourses").onclick = function(){
                    document.getElementById("fbshare").style.display = "block";
                }
                function openShareWindow(){
                    isShared = true;
                    window.open(sharelink,"share","width=1000,height=600");
                    document.getElementById("share-mask").style.display = "none";
                }
                document.getElementById("clickshare").onclick = openShareWindow;
                document.getElementById("share-mask").onclick = openShareWindow;
                function switchCourse(id){
                    if(localStorage.isShared == "true"){
                        dv.src = "https://player.vimeo.com/video/"+id;
                    }
                    function switchCourse(id){
                        if(localStorage.isShared == "true"){
                            dv.src = "https://player.vimeo.com/video/"+id;
                        }
                    }
                    $("#dc-1").click(()=>switchCourse(getChapterData01.video_id));
                    $("#dc-2").click(()=>switchCourse(getChapterData04.video_id));
                    dcPlayer.on('ended', this.onEndCallback());
                    dcPlayer.on('play',this.onPlayCallback());
                }
                if (localStorage.isShared == "true") {
                    isShared = true;
                }
                $("#dc-1").click(()=>switchCourse(getChapterData01.video_id));
                $("#dc-2").click(()=>{ switchCourse(getChapterData04.video_id);scrollTo((!isShared ? "#fbshare" : "#democourses"), (isShared ? "end" : "center") ); });
                dcPlayer.on('ended', this.onEndCallback);
                dcPlayer.on('play',this.onPlayCallback);
                dcPlayer.on('pause',this.onPauseCallback);
                dcPlayer.on('timeupdate',this.onTimeUpdateCallback);

                if (this.$mq === "mobile") {
                    var imgContainer = document.getElementById("ss-container");
                
                    var slideTimer = null, imgIndex = 0, slideInterval = 3000;
                    $(imgContainer.children[0]).show();
                    slideTimer = setTimeout(()=>switchImg(1,imgContainer,slideTimer,imgIndex), slideInterval);
                }
                function switchImg(factor,element,stimer,theImgIndex){
                    clearTimeout(stimer);
                    $(element.children[theImgIndex]).fadeOut(500,function(){
                        var imgLength = element.children.length;
                        theImgIndex = (theImgIndex+imgLength+1*factor)%imgLength;
                        $(element.children[theImgIndex]).fadeIn(500);
                        stimer = setTimeout(()=>switchImg(1,element,stimer,theImgIndex), slideInterval);
                    });
                }
                // $("#pre-img").click(()=>switchImg(-1));
                // $("#next-img").click(()=>switchImg(1));
            }, 2000);
            
            
            if (!this.$route.path.includes("/signup") && !this.$route.path.includes("/login") ) {
                localStorage.redirect = this.$route.path;
                console.log("save redirect : " + localStorage.redirect);
            }

            this.is_login = await this.$checkLogin(this.$store);
            if (this.is_login) {
                this.payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                this.$gtag('set', 'userId', this.user.user_id );
                this.$gtag('config', 'UA-123332732-3', {
                    'page_title' : 'LP cover',
                    'page_path': '/0_cover'
                });
            }
        }
    },
    methods: {
        dragFirstBlock(direction) {
            console.log(direction);
            // if (direction == "top") {
                this.seemore_check_or_not = true;
            // }
            this.$gtag('config', 'UA-123332732-3', {
                'page_title' : 'LP intro',
                'page_path': '/1_intro'
            });
        },
        openShareWindow() {
            this.$gtag('event', 'Click', {
                'event_category': 'Share',
                'event_label': '試讀課程分享',
            });
            var shareurl = "https://www.ludonow.com/resume";
            var sharelink = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u="+encodeURIComponent(shareurl)+"&display=popup&ref=plugin&src=share_button"
            localStorage.isShared = "true";
            window.open(sharelink,"share","width=1000,height=600");
            document.getElementById("share-mask").style.display = "none";
        },
        onPlayCallback() {
            this.$gtag('event', 'Play', {
                'event_category': 'Video',
                'event_label': '[試讀] 01 - 面試攻略',
            });
        },
        onEndCallback() {
            document.getElementById("fbshare").style.display = "block";
            this.$gtag('event', 'End', {
                'event_category': 'Video',
                'event_label': '[試讀] 01 - 面試攻略',
            });
        },
        onPauseCallback(data) {
            console.log(data);
            this.$gtag('event', 'Pause', {
                'event_category': 'video',
                'event_label': '[試讀] 01 - 面試攻略',
                'value':data.seconds
            });
        },
        onTimeUpdateCallback(data) {
            if (data.seconds > 0.1 && this.video_10_percent) {
                this.$gtag('event', 'Play_to_10%', {
                    'event_category': 'Video',
                    'event_label': '[試讀] 01 - 面試攻略',
                });
            } else if (data.seconds > 0.5 && this.video_50_percent) {
                this.$gtag('event', 'Play_to_50%', {
                    'event_category': 'Video',
                    'event_label': '[試讀] 01 - 面試攻略',
                });
            } else if (data.seconds > 0.9 && this.video_90_percent) {
                this.$gtag('event', 'Play_to_90%', {
                    'event_category': 'Video',
                    'event_label': '[試讀] 01 - 面試攻略',
                });
            }
        },
        clickPayNow() {
            this.$gtag('event', 'Click', {
                'event_category': 'EC',
                'event_label': '立即購買_頁尾',
            });
            this.$router.push("/resume/pay");
        },
        toggleClassA() {
            this.show_a = !this.show_a;
        },
        toggleClassB() {
            this.show_b = !this.show_b;
        },
        toggleClassC() {
            this.show_c = !this.show_c;
        },
        toggleClassD() {
            this.show_d = !this.show_d;
        },
        toggleClassE() {
            this.show_e = !this.show_e;
        },
        toggleClassF() {
            this.show_f = !this.show_f;
        },
        toggleClassG() {
            this.show_g = !this.show_g;
        },
        toggleClassH() {
            this.show_h = !this.show_h;
        },
        toggleClassI() {
            this.show_i = !this.show_i;
        },
        toggleClassJ() {
            this.show_j = !this.show_j;
        },
    },
    components: {
        ResumeFooter,
    },
}
</script>
<style>
.videoplay iframe {
    width: 90vw;
    height: 50.625vw;
}
.videoplay button {
    background: white;
    color: #0090FF;
    border: none;
    width: 90px;
    font-size: 15px;
}
.videoplay > div > div {
    line-height: 2em !important;
}
.banner{
    z-index: 10;
    position:fixed;
    top:0px;
    width: 100vw;
    background: #0090FF;
    height: 55px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.3);
}
.banner .login{
    float:right;
    font-size: 14px;
    line-height: 55px;
    color:white;
    margin-right:20px;
}
.banner .title, #checkseemore:checked ~ .banner .title-blue{
    display:initial;
    margin-left: 10px;
    margin-top: 5px;
}

.first-block{
    position: relative;
    width:100vw;
    height: 100vh;
    background: url("/resume/Group 139.png") #0090FF;
    background-position: center center;
    background-repeat: no-repeat;
    overflow-x: hidden;
    transition: height 300ms linear;
}
.earphone{
    position: absolute;
    bottom: 0px;
    left: 61px;
    width:287px;
}
.earphone2{
    position: absolute;
    transform: rotate(-90deg);
    top: calc(100% - 265px);
    left: 100px;
    visibility: hidden;
}
.eye{
    position: absolute;
    right: 0px;
    top: 300px;
    visibility: hidden;
}
#checkseemore:checked ~ .first-block .earphone{
    display: none;
}
#checkseemore:checked ~ .first-block .earphone2{
    transition: all 300ms linear;
    top: 73px;
    left: 0px;
    transform:  rotate(0deg);
    visibility: visible;
}
#checkseemore:checked ~ .first-block .eye{
    transition: top 300ms linear;
    top: 0px;
    visibility: visible;
}
.scrolldown{
    display:none;
}
.slogan{
    position: absolute;
    top: 36%;
    /* width: 308px; */
    left: calc(50% - 154px);
}
.slogan div{
    text-align: justify;
    color:white;
}
.slogan div:after{
    content:"";
    display:inline-block;
    width:100%;
    height:0px;
}
.line1{
    font-size: 42px;
    font-weight: 500;
    line-height: 1.5em;
}
.line2{
    margin-top: -68px;
    font-size: 50px;
    font-weight: 100;
}
.seemore{
    position: absolute;
    text-align: center;
    color: white;
    left: calc(50% - 39px);
    top: 66%;
    width: 78px;
    font-size: 19px;
}
#checkseemore:checked ~ .first-block{
    background:#0090FF;
    overflow-x: unset;
    height:247px;
}
#checkseemore:checked ~ .first-block .line1{
    font-size: 28px;
}
#checkseemore:checked ~ .first-block .line2{
    margin-top: -44px;
    font-size: 34px;
    font-weight: 100;
}
#checkseemore:checked ~ .first-block .slogan{
    width:210px;
    top: 107px;
    left: calc(50% - 105px);
}
#checkseemore:checked ~ .first-block .seemore{
    display: none;
}
/* #checkseemore:checked ~ .banner{
    background: #FFF;
    color:#0090FF;
    box-shadow: unset;
}
#checkseemore:checked ~ .banner .login{
    color:#0090FF;
}
#checkseemore:checked ~ .banner .title, .banner .title-blue{
    display:none;
} */
#checkseemore:checked ~ .scrolldown{
    display:block;
}
.seconds-block{
    position:relative;
    color:#007CDC;
    width: 100%;
    /* height: 102px; */
    text-align: center;
    font-size: 27px;
    font-weight: 500;
    margin-top:105px;
    line-height: 36px;
    margin-bottom: 20px;
}
.sb-addition{
    position: absolute;
    display: contents;
    font-size: 14px;
    line-height: 17px;
    bottom:0px;
    left:50%;
    transform: translateX(-50%);
}
.third-block{
    width: calc(100% - 30px);
    height:436px;
    margin:auto;
    background: #FFDE00;
    margin-top:-112px;
    color:black;
    font-weight: 500;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
}
.tb-container{
    width: 303px;
    margin: auto;
}
.tb-title{
    padding-top: 63px;
    text-align: right;
    font-size: 27px;
}
.tb-content{
    width:280px;
    font-size: 16px;
    margin-top: 95px;
    line-height: 21px;
}
.four-block{
    margin: auto;
    margin-top: 41px;
    width: 100%;
    height: 99px;
    text-align: center;
    color: #007CDC;
}
.fourblock-1, .sevenblock-1{
    font-size: 44px;
    font-weight: 100;
}
.fourblock-2, .sevenblock-2{
    font-size: 24px;
    font-weight: 500;
    margin-top: -3px;
}
.slide-show{
    position: relative;
    width: 100vw;
    text-align: center;
    overflow-y: hidden;
    margin-top: 49px;
    margin-bottom: 49px;
}
.slide-show img{
    width: 80vw;
    display: none;
}
#pre-img{
    position: absolute;
    left: 5px;
    top: 140px;
}
#next-img{
    position: absolute;
    right: 5px;
    top: 140px;
    transform: rotate(180deg);
}
.six-block{
    height: 859px;
    width:100%;
    margin-top: 60px;
    padding-bottom: 50px;
    text-align: center;
    background: #0090FF;
    color: white;
}
.sixty-min div{
    display: inline-block;
}
.sixty{
    font-size: 109px;
}
.sixty-min .minute{
    font-size: 30px;
    font-weight: 100;
}
.perform-dif{
    font-size: 30px;
    font-weight: 500;
    margin-top: -20px;
}
.bu-assist{
    font-size: 14px;
    margin-top: 25px;
}
.before-class{
    text-align: left;
    margin: auto;
    margin-top: 35px;
    width: 317px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    background: url("/resume/Group 148.png");
    background-position: bottom center;
    background-repeat: no-repeat;
}
.before-class div, .after-practice div{
    width: 279px;
    margin-left: 18px;
    font-size: 16px;
}
.past{
    border-left: 2px solid white;
    padding-left: 8px;
    font-weight: 500;
    margin-top: 20px;
}
.past-content{
    height: 84px;
    margin-top: 18px;
    margin-bottom: 68px;
}
.after-practice{
    text-align: left;
    margin: auto;
    width: 317px;
    border-bottom: 2px solid white;
    background: url("/resume/Group 149.png");
    background-position: bottom center;
    background-repeat: no-repeat;
}
.after-content{
    margin-top: 18px;
    margin-bottom: 68px;
}

.seven-block{
    width:100%;
    text-align: center;
    background: #F9F9F9;
    padding-bottom: 24px;
}
.sevenblock-1, .sevenblock-2{
    color: black;
}
.sevenblock-1{
    padding-top: 40px;
}
.sevenblock-2{
    margin-bottom: 38px;
}
.videoplay{
    position: relative;
    margin: auto;
    width:calc(100vw - 36px);
}
#share-mask{
    background: rgba(0,0,0,0.6);
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
}
#share-mask div{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5em;
}
.course{
    text-align: left;
    margin: auto;
    margin-top: 22px;
    width: 83vw;
    display: grid;
    grid-template-columns: 128px auto;
    grid-template-rows: 15px auto;
    grid-gap: 5px;
    align-content: center;
}
.c-img{
    grid-row: 1 / 3;
}
.c-img img{
    width:100%;
    height: auto;
}
.c-title{
    color: #007CDC;
    font-size: 13px;
    font-weight: 500;
}
.c-context{
    font-size: 9px;
    color: #8F8F8F
}
.fbshare{
    width: 300px;
    font-size: 15px;
    margin: auto;
    margin-top: 27px;
    display: none;
}
.clickshare{
    color: #0090FF;
    float: right;
}
.comment-title{
    text-align: center;
    font-size: 42px;
    color: #007CDC;
    font-weight: 500;
    margin-top: 39px;
    margin-bottom: 51px;
}
.comment{
    margin: auto;
    width: 343px;
    max-width: 91vw;
    text-align: center;
    font-size: 18px;
    margin-bottom: 55px;
}
.comment img {
    width: 100px;
}
.comment-content{
    margin-top: 15px;
}
.eight-block{
    width: 100%;
    background: #0090FF;
    font-weight: 400;
    color: white;
}
.eb-title{
    font-size: 42px;
    text-align: center;
    padding-top: 24px;
}
.eb-des{
    text-align: center;
    width: 100%;
    font-size: 20px;
    margin-bottom: 33px;
    margin-top: -3px;
    font-weight: 100;
}
.eb-content{
    font-size: 15px;
    width: 87vw;
    margin: auto;
    padding-left: 3px;
    padding-bottom: 82px;
}
.phoneimg{
    width: 100vw;
}
.nine-block{
    width: 357px;
    max-width: 95vw;
    margin: auto;
    margin-top: 34px;
    text-align: center;
}
.nine-block img{
    max-width: 95vw;
}
.nb-title{
    font-size: 20px;
    font-weight: 500;
}
.nb-fly{
    width: 244px;
    height: auto;
    margin-top: -13px;
}
.nb-3{
    margin-top: 16px;
    font-size: 25px;
    font-weight: 100;
}
.nb-4{
    font-size: 23px;
    font-weight: 500;
    margin-top: -5px;
    margin-bottom: 28px;
}
.ten-block{
    text-align: center;
    width: calc(100% - 30px);
    height: 250px;
    margin: auto;
    margin-top: 46px;
    font-weight: 500;
    background: #FFDE00;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
}
.tb-1{
    padding-top: 45px;
    font-size: 27px;
}
.tb-2{
    font-size: 30px;
    margin-top: -5px;
    margin-bottom: 20px;
}

.blank-block{
    width: 100%;
    height: 126px;
}
.paynow{
    position: fixed;
    bottom: 0px;
    text-align: center;
    background: #0090FF;
    width: 100vw;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    font-weight: 500;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    cursor: pointer;
}
a{
    text-decoration: none;
}
.paynow {
    color: white;
}
.paynow-text{
    width: 100vw;
    height: 100%;
}
.eb-des-box {
    position: relative;
   margin:0 35px; 
   padding: 20px 0; 
   height: 90px;
   transition-duration:.4s;
   transition-timing-function: ease;
   overflow-y: hidden;
}
.eb-des-circle {
    position: absolute;
    width: 20px;
	height: 20px;
	/* background: #fff; */
    border-radius: 10px;
    top:40px;
    right: 50px;
    transition-duration:.4s;
   transition-timing-function: ease;
}
.eb-des-circle.open {
    transform: rotate(-180deg);
}
.eb-des-circle div:first-child {
    width: 3px;
    height: 12px;
    background-color: #FFF;
    transform: rotate(45deg);
    position: absolute;
    top:5px;
    right: 6px;
}
.eb-des-circle div:last-child {
    width: 3px;
    height: 12px;
    background-color: #FFF;
    transform: rotate(135deg);
    position: absolute;
    top:5px;
    right: 13px;
}
.eb-des-box:nth-child(11) {
    height: 105px;
}
.eb-des-box.open {
    height:180px ;
}
.eb-des-box:nth-child(4).open,.eb-des-box:nth-child(6).open,.eb-des-box:nth-child(7).open,.eb-des-box:nth-child(9).open {
    height: 160px;
}
.eb-des-box:nth-child(10).open {
    height: 220px;
}
.eb-des-box:nth-child(11).open {
    height: 205px;
}
.eb-des-box-title {
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    text-align: center; 
}
.eb-des-box-title hr,.eb-des-box-content.open hr {
    color:#fff;
    margin: 15px 20px;
    border-style: solid;
    border-width: .5px;
}
.eb-des-box-content li {
    color: #FFF;
    text-align:left;
    font-size: 13px;
    font-weight:inherit;
    line-height: 20px;
}
.md-body {
    display: none;
}
.md-banner{
    z-index: 10;
    position:fixed;
    top:0px;
    width: 100%;
    background: #0090FF;
    height: 55px;
}
.md-banner img {
    margin-top: 5px;
}
.md-banner .md-login{
    float:right;
    font-size: 14px;
    line-height: 55px;
    color:white;
    margin-right:14%;
    cursor: pointer;
}
.md-banner .md-title-blue {
    display: none;
}
.md-banner .md-title, #checkseemore:checked ~ .md-banner .md-title-blue{
    display:initial;
    margin-left: 12vw;
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
    transition: height 200ms linear;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.md-seemore img{
    width: 45px;
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
    /* display: none; */
    height: 0px;
}
/* #checkseemore:checked ~ .md-banner{
    background: #FFF;
    color:#0090FF;
    box-shadow: unset;
}
#checkseemore:checked ~ .md-banner .md-login{
    color:#0090FF;
}
#checkseemore:checked ~ .md-banner .md-title{
    display:none;
} */
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
    height: 450px;
    width: 750px;
    margin: 60px auto;
    text-align: center;
    background: #0090FF;
    color: white;
    box-shadow: 0px 6px 12px rgba(0,0,0,0.2);
}
.md-six-block-content {
    width: 50%;
    float: left;
}
.md-six-block-content:first-child {
    border-right:1px solid #fff; 
    margin: 20px 0;
    padding-top: 80px;
    height: 90%;
}
.md-six-block-content:nth-child(2){
    height: 100%;
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
    background: url("/resume/Group 148.png");
    background-position: 10% 95%;
    background-size: 50%;
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
    height: 105px;
    margin-top: 18px;
}
.md-after-practice{
    text-align: left;
    margin: auto;
    width: 317px;
    background: url("/resume/Group 149.png");
    background-position: 10% 95%;
    background-size: 50%;
    background-repeat: no-repeat;
}
.md-after-content{
    margin-top: 18px;
    line-height: 19px;
    height: 195px;
}
.md-seven-block{
    width:100%;
    height: auto;
    text-align: center;
    padding-bottom: 80px;
    background: #f9f9f9;
}
.md-sevenblock-1, .md-sevenblock-2{
    color: #535353;
}
.md-sevenblock-1{
    padding-top: 50px;
    font-size: 90px;
}
.md-sevenblock-2{
    margin-bottom: 38px;
    font-size: 35px;
}
.md-videoplay{
    position: relative;
    margin: auto;
    width:calc(100vw - 36px);
}
.md-videoplay button {
    background: white;
    color: #0090FF;
    border: none;
    width: 90px;
    font-size: 15px;
}
.md-videoplay > div > div {
    line-height: 2em !important;
}
#md-share-mask{
    background: rgba(0,0,0,0.6);
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
}
#md-share-mask div{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
}
#md-democourses {
    margin-top: 50px;
}
.md-course{
    text-align: left;
    margin: auto;
    margin-top: 22px;
    width: 400px;
    height: 130px;
    align-content: center;
    cursor: pointer;
}
.md-c-img img{
    float: left;
    width:200px;
    height: auto;
}
.md-c-box {
    float: left;
    width: 180px;
    margin-left: 10px;
    color: #8F8F8F
}
.md-c-title{
    font-size: 15px;
    font-weight: 500;
    margin: 3px 0 10px 0;
}
.md-c-context{
    font-size: 12px;
}
.md-fbshare{
    width: 500px;
    font-size: 25px;
    font-weight: bold;
    margin: auto;
    margin-top: 27px;
}
.md-fbshare div:nth-child(2){
    color: #535353;
}
.md-clickshare{
    color: #0090FF;
    float: right;
    cursor: pointer;
}
.md-eight-block {
    width: 100vw;
    height: 650px;
    padding: 50px;
    z-index: 3;
}
.md-comment-title{
    text-align: center;
    font-size: 80px;
    color: #007CDC;
    font-weight: 500;
    margin-top: 39px;
    margin-bottom: 55px;
}
.md-comment-box {
    width: 90%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}
.md-comment{
    width: 30%;
    height: 100%;
    margin: 3%;
    font-size: 18px;
    text-align: center;
}
.md-comment img {
    width: 100px;
    height: 100px;
}
.md-comment-content{
    margin-top: 15px;
    text-align: left;
} 
.md-comment-content p{
    text-align: center;
} 
.md-nine-block{
    width: 750px;
    /* height: 450px; */
    background: #0090FF;
    font-weight: 400;
    color: white;
    margin: 0 auto;
    box-shadow: 0px 6px 12px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
}
.md-eb-title{
    font-size: 30px;
    text-align: center;
    padding-top: 24px;
    font-weight: bold;
}
.md-eb-content-box {
    width: 88%;
    /* height: 70%; */
    margin: 0 6%;
}
.md-eb-content-input-box {
    width: 100%;
    height: 170px;
    border-bottom: 1px solid #fff;
    padding: 30px 0;
}
.md-eb-content-input-title {
    float: left;
    width: 280px;
    height: 120px;
    padding: 40px 0 0 60px;
    font-size: 24px;
    font-weight: bold; 
}
.md-eb-content-input-content {
    float: left;
    width: 370px;
    height: 120px;
    padding-top: 38px;
    font-size:15px; 
    line-height: 21px;
    letter-spacing: .7px;
}
.md-phone-block {
    width: 100vw;
    height: 450px;
    background-color:#f2f2f2; 
}
.md-phoneimg{
    width: 600px;
    height: 600px;
    margin: 0 auto;
    background-image: url("/resume/Rectangle 195.png");
    background-size: 100%;
    background-repeat: no-repeat;
}
.md-ten-block{
    width: 750px;
    height: 550px;
    margin: auto;
    margin-top: 50px;
    text-align: center;
}
.md-nb-title{
    color: #007CDC;
    font-size: 20px;
    font-weight: 500;
}
.md-nb-fly{
    width: 330px;
    height: auto;
    margin-top: -13px;
}
.md-nb-3{
    margin-top: 16px;
    font-size: 30px;
    font-weight: 100;
    color: #535353;
}
.md-nb-4{
    font-size: 26px;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 28px;
    color: #535353;
}
.md-nb-img {
    margin-top:30px; 
    width: 700px;
    height: auto;
}
.md-eleven-block {
    width: 100vw;
    height: 200px;
    background-color: #FFDE00;
}
.md-eleven-block-box {
    width: 700px;
    height: 100%;
    margin: 0 auto;

}
.md-tb-box {
    float: left;
    width: 350px;
    height: 150px;
    padding: 0 20px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    padding-top:60px; 
}
.md-tb-box img {
    width: 240px;
    height: auto;
    margin-top:10px; 
}

</style>
