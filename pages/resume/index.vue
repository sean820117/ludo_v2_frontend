<template>
<div>
    <!-- <div v-if="$mq === 'mobile'" :style="{height:'100%',display: $mq === 'desktop' ? 'none' : ''}">
        <input type="radio" id="checkseemore" style="position: fixed;" :checked="seemore_check_or_not"/>
        <div class="first-block" v-touch:swipe="dragFirstBlock" @scroll="dragFirstBlock" v-touch:moved="dragFirstBlock" >
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
                        使用一季299元，獲得履歷課程與無限次履歷評測
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
                <div class="sevenblock-1">課程免費搶先看</div>
                <div class="sevenblock-2">讓你從0到1學習履歷撰寫</div>
                <div class="videoplay">
                    <div id="share-mask"><div>覺得有幫助嗎？<br>分享這堂課給你朋友<br>就可以觀看第二支影片囉<br><button>分享</button></div></div>
                    <iframe id="demovideo" :src="'https://player.vimeo.com/video/338611197'" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <div id="democourses">
                    <div id="dc-1" class="course" @click="switchCourse(getChapterData01.video_id)">
                        <div class="c-img"><img :src="getChapterData01.thumbnail"/></div>
                        <div class="c-title">面試官思維分析(試讀)</div>
                        <div class="c-context">{{ getChapterData01.description }}</div>
                    </div>
                    <div id="dc-2" class="course" @click="onSecondPreviewCourseClick">
                        <div class="c-img"><img :src="getChapterData04.thumbnail"/></div>
                        <div class="c-title">有效撰寫工作經歷(試讀)</div>
                        <div class="c-context">{{ getChapterData04.description }}</div>
                    </div>
                </div>
                <div class="fbshare" id="fbshare">
                    <div class="clickshare" id="clickshare">點擊分享</div>
                    <div>分享到Facebook就能解鎖第二課</div>  
                </div>
            </div>
            <div class="eight-block">
                <div class="eb-title">課程單元介紹</div>
                <div class="eb-des-box" style="margin-top:20px;" :class="show_list[0]" @click="toggleClass(0)">
                    <div class="eb-des-box-title">第一堂課<br>面試官思維分析<hr>
                    <div class="eb-des-circle" :class="show_list[0]">
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
                <div class="eb-des-box" :class="show_list[1]" @click="toggleClass(1)">
                    <div class="eb-des-box-title">第二堂課<br>選擇正確平台與邏輯<hr>
                    <div class="eb-des-circle" :class="show_list[1]">
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
                <div class="eb-des-box" :class="show_list[2]" @click="toggleClass(2)">
                    <div class="eb-des-box-title">第三堂課<br>自我介紹標準公式<hr>
                    <div class="eb-des-circle" :class="show_list[2]">
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
                <div class="eb-des-box" :class="show_list[3]" @click="toggleClass(3)">
                    <div class="eb-des-box-title">第四堂課<br>有效撰寫工作經歷<hr>
                        <div class="eb-des-box-content">
                            <div class="eb-des-circle" :class="show_list[3]">
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
                <div class="eb-des-box" :class="show_list[4]" @click="toggleClass(4)">
                    <div class="eb-des-box-title">第五堂課<br>志工與社團經驗呈現<hr>
                    <div class="eb-des-circle" :class="show_list[4]">
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
                <div class="eb-des-box" :class="show_list[5]" @click="toggleClass(5)">
                    <div class="eb-des-box-title">第六堂課<br>寫出能力的公信力<hr>
                    <div class="eb-des-circle" :class="show_list[5]">
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
                <div class="eb-des-box" :class="show_list[6]" @click="toggleClass(6)">
                    <div class="eb-des-box-title">第七堂課<br>利用學歷與個人成就<hr>
                    <div class="eb-des-circle" :class="show_list[6]">
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
                <div class="eb-des-box" :class="show_list[7]" @click="toggleClass(7)">
                    <div class="eb-des-box-title">第八堂課<br>自傳五大向度分析<hr>
                    <div class="eb-des-circle" :class="show_list[7]">
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
                <div class="eb-des-box" :class="show_list[8]" @click="toggleClass(8)">
                    <div class="eb-des-box-title">第九堂課<br>面試常見題目解析<hr>
                    <div class="eb-des-circle" :class="show_list[8]">
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
                <div class="eb-des-box" :class="show_list[9]" @click="toggleClass(9)">
                    <div class="eb-des-box-title">第十堂課<br>提高求職信開信率<hr>
                    <div class="eb-des-circle" :class="show_list[9]">
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
                <img src="/resume/Group 405.png" style="max-width:100%;"/>
            </div>
            <div class="ten-block">
                <div class="tb-1">60分鐘學習與練習</div>
                <div class="tb-2">1個月內找到理想工作</div>
                <button @click="clickPayNow" ><img src="/resume/Group 167.png" /></button>
            </div>
            <div class="blank-block"></div>
            <div class="eight-block" style="padding-bottom: 20px;">
                <div class="eb-title">常見問題</div>
                <div class="eb-content">
                    <br><br>
                    <b>Q1: 請問履歷範本在哪上課？</b>
                    <br><br>
                    履歷範本為『線上課程』，當課程上線後，隨時隨地都可以透過手機、平板、與電腦上課。
                    <br><br>
                    <b>Q2: 課程可以看幾次？</b>
                    <br><br>
                    課程為單季學習制，在訂購後的這一季內都可以一直重複觀看。
                    <br><br>
                    <b>Q3： NT299 元/季學習服務之後會有更新內容嗎？</b>
                    <br><br>
                    會的，未來我們將會持續更新所有職場必備技能的線上學習服務（課程+評測），從商用書信到溝通表達等內容，完整包覆 360 天職場需求。為回饋狂人飛鐵粉，即日起到 2019/8/3 前訂閱，即可以 NT299 元/季的價格訂購（原價為 NT499 元/季)。
                    <br><br>
                    <b>Q4: 會有真人幫我把我的履歷改到好嗎？</b>
                    <br><br>
                    不會，給你魚吃，不如給你一把釣竿。我們將透過 AI 人工智能為您檢測，並針對不足之處，教你合適的撰寫方式。
                    <br><br>
                    <b>Q5: 付款方式</b>
                    <br><br>
                    讓狂人飛與日商恩沛股份有限公司提供之「AFTEE」後支付服務獨家合作，是收到商品後才付款的支付方式。<br>不須輸入繁瑣的個人資料，也不須登錄會員即可立即免費使用！<br>將於下單後 24 小時內透過簡訊寄送繳費通知，您可透過便利商店代收服務或 ATM 繳費等方式完成付款手續。<br>瞭解更多>> <a style="color:white;text-decoration: underline;" href="https://lihi.vip/JpeZj" target="_blanck">https://lihi.vip/JpeZj</a>
                    <br><br>
                    <b>Q6: 其他問題</b>
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
        <div class="md-first-block" @scroll="dragFirstBlock" >
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
                        使用一季299元，獲得履歷課程與無限次履歷評測
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
                <div class="md-sevenblock-1">課程免費搶先看</div>
                <div class="md-sevenblock-2">讓你從0到1學習履歷撰寫</div>
                <div class="md-videoplay">
                    <div id="share-mask"><div>覺得有幫助嗎？<br>分享這堂課給你朋友<br>就可以觀看第二支影片囉<br><button @click.prevent="openShareWindow">分享</button></div></div>
                    <iframe id="demovideo" :src="'https://player.vimeo.com/video/338611197'" frameborder="0" allow="autoplay; fullscreen" allowfullscreen width="640px" height="360px"></iframe>
                </div>
                <div id="democourses">
                    <div id="dc-1" class="md-course" @click="switchCourse(getChapterData01.video_id)">
                        <div class="md-c-img"><img :src="getChapterData01.thumbnail"/></div>
                        <div class="md-c-box">
                            <div class="md-c-title">面試官思維分析(試讀)</div>
                            <div class="md-c-context">{{ getChapterData01.description }}</div>
                        </div>
                    </div>
                    <div id="dc-2" class="md-course" @click="onSecondPreviewCourseClick">
                        <div class="md-c-img"><img :src="getChapterData04.thumbnail"/></div>
                        <div class="md-c-box">
                            <div class="md-c-title">有效撰寫工作經歷(試讀)</div>
                            <div class="md-c-context">{{ getChapterData04.description }}</div>
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
                        <button @click="clickPayNow"><img src="/resume/Group 390.png" /></button>
                    </div>
                </div>
            </div>
             <div class="eight-block" style="padding-bottom: 20px;">
                <div class="eb-title">常見問題</div>
                <div class="eb-content" style="width: 500px;">
                    <br><br>
                    <b>Q1: 請問履歷範本在哪上課？</b>
                    <br><br>
                    履歷範本為『線上課程』，當課程上線後，隨時隨地都可以透過手機、平板、與電腦上課。
                    <br><br>
                    <b>Q2: 課程可以看幾次？</b>
                    <br><br>
                    課程為單季學習制，在訂購後的這一季內都可以一直重複觀看。
                    <br><br>
                    <b>Q3： NT299 元/季學習服務之後會有更新內容嗎？</b>
                    <br><br>
                    會的，未來我們將會持續更新所有職場必備技能的線上學習服務（課程+評測），從商用書信到溝通表達等內容，完整包覆 360 天職場需求。為回饋狂人飛鐵粉，即日起到 2019/8/3 前訂閱，即可以 NT299 元/季的價格訂購（原價為 NT499 元/季)。
                    <br><br>
                    <b>Q4: 會有真人幫我把我的履歷改到好嗎？</b>
                    <br><br>
                    不會，給你魚吃，不如給你一把釣竿。我們將透過 AI 人工智能為您檢測，並針對不足之處，教你合適的撰寫方式。
                    <br><br>
                    <b>Q5: 付款方式</b>
                    <br><br>
                    讓狂人飛與日商恩沛股份有限公司提供之「AFTEE」後支付服務獨家合作，是收到商品後才付款的支付方式。<br>不須輸入繁瑣的個人資料，也不須登錄會員即可立即免費使用！<br>將於下單後 24 小時內透過簡訊寄送繳費通知，您可透過便利商店代收服務或 ATM 繳費等方式完成付款手續。<br>瞭解更多>> <a style="color:white;text-decoration: underline;" href="https://lihi.vip/JpeZj" target="_blanck">https://lihi.vip/JpeZj</a>
                    <br><br>
                    <b>Q6: 其他問題</b>
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
    </div> -->
    <!-- <div v-if="$mq == 'mobile'" :style="{height:'100%',display: $mq === 'desktop' ? 'none' : ''}"></div> -->
    <div class="md-body">
        <section class="md-first-block">
            <div class="md-first-block-container">
                <div class="md-first-title">
                    <p class="md-blue-title">你的履歷<br>經得起考驗嗎？</p>
                    <p class="md-blue-text" style="margin-top: 25px;">履歷盲點評測 + 60 分鐘求職教戰<br>讓你的履歷與求職，學完即做完</p>
                    <button class="md-first-btn" @click="$router.push('/resume/pay')">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/first-btn.png" alt="">
                    </button>
                </div>
            <img class="md-first-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/first-img-1.png" alt="">
            </div>
        </section>
        <section class="md-second-block need-margin">
            <div style="max-width: 1100px;margin: 0 auto;">
                <p class="md-gray-title">在台灣，當你應徵一個職位<br>你必須要先能夠...</p>
                <div class="md-second-li-block">
                    <div class="md-second-li">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-second-img-1.png" alt="">
                        <p class="md-gray-text">在 30 封履歷中<br>搶得目光、脫穎而出</p>
                    </div>
                    <div class="md-second-li">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-second-img-2.png" alt="">
                        <p class="md-gray-text">在 180 秒內<br>讓面試官抓到你履歷重點</p>
                    </div>
                    <div class="md-second-li">
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-second-img-3.png" alt="">
                        <p class="md-gray-text">能夠耐看超過 5 分鐘<br>讓面試官對你產生足夠期待</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="md-third-block">
            <div style="max-width: 1100px;margin: 0 auto;" class="md-third-block-container">
                <p class="md-gray-title">你的履歷還能更好!<br>現在就馬上補足</p>
                <p class="md-gray-text" style="margin-top:15px;line-height:35px;">我們分析了 200,000 份中文履歷，打造出台灣第一個<br>繁體中文履歷盲點評測 AI，現在就讓我們給你客製化建議!</p>
                <p class="md-blue-text" style="margin-top:45px;margin-bottom:15px;"><b>立即試用</b><br>請在下方輸入一段你的工作經驗</p>
                <ai-judgment v-if="is_ui_config_loaded" :is_preview_course="true" :ai_id="'work_experience'" :current_chapter="is_ui_config_loaded ? ui_config.chapters[3] : {}"/>
                <div style="display: flex;justify-content:center;">
                    <div>
                        <p class="md-third-btn-title">｜<b>工作經歷評測</b></p>
                    </div>
                    <div>
                        <p class="md-third-btn-title">｜自我介紹評測</p>
                        <p class="md-third-text">(訂閱後即可使用)</p>
                    </div>
                    <div>
                        <p class="md-third-btn-title">｜能力描述評測</p>
                        <p class="md-third-text">(訂閱後即可使用)</p>
                    </div>
                    <div v-if="$mq != 'mobile'">
                        <p class="md-third-btn-title">｜課外經歷評測｜</p>
                        <p class="md-third-text">(訂閱後即可使用)</p>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="$mq == 'desktop'" class="md-four-block" v-touch:swipe.left="nextImgSlides" v-touch:swipe.right="lastImgSlides">
            <div class="slide-img-container">
                <img class="slide-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/sildeshow-1.png" alt="">
            </div>
            <div class="slide-img-container">
                <img class="slide-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/slideshow-2.png" alt="">
            </div>
            <div class="dot-container">
                <span class="img-dot" @click="currentImgSlide(1)"></span>
                <span class="img-dot" @click="currentImgSlide(2)"></span>
            </div>
        </section>
        <section v-else class="md-four-block" v-touch:swipe.left="nextImgSlides" v-touch:swipe.right="lastImgSlides">
            <div class="slide-img-container">
                <img class="slide-img" src="/resume/Group 944.jpg" alt="">
            </div>
            <div class="slide-img-container">
                <img class="slide-img" src="/resume/Group 944.jpg" alt="">
            </div>
            <div class="slide-img-container">
                <img class="slide-img" src="/resume/Group 944.jpg" alt="">
            </div>
            <div class="slide-img-container">
                <img class="slide-img" src="/resume/Group 944.jpg" alt="">
            </div>
            <div class="dot-container">
                <span class="img-dot" @click="currentImgSlide(1)"></span>
                <span class="img-dot" @click="currentImgSlide(2)"></span>
                <span class="img-dot" @click="currentImgSlide(3)"></span>
                <span class="img-dot" @click="currentImgSlide(4)"></span>
            </div>
        </section>
        <section class="md-five-block">
            <div class="md-five-block-container">
                <img v-if="$mq == 'desktop'" style="height: 550px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-five-img-1.png" alt="">
                <img v-else style="width:50vw;max-width:230px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-five-img-1.png" alt="">
                <div v-if="$mq == 'desktop'">
                    <b style="color:#969696;font-size:31px;line-height:50px;">林佳瑾 顧問</b>
                    <p style="color:#969696;font-size:24px;line-height:50px;">現任跨國信託機構<br>跨國餐飲機構人資專案顧問<br>多年來協助多種企業<br>評估上千人的面試與履歷<br>1,500 小時個案溝通與輔導經驗</p>
                </div>
                <div v-else>
                    <b style="color:#969696;font-size:14px;">林佳瑾 顧問</b>
                    <p style="color:#969696;font-size:12px;">現任跨國信託機構<br>跨國餐飲機構人資專案顧問<br>多年來協助多種企業<br>評估上千人的面試與履歷<br>1,500 小時個案溝通與輔導經驗</p>
                </div>
            </div>
        </section>
        <section class="md-six-block need-margin">
            <div style="max-width: 1100px;margin: 0 auto;">
                <p class="md-gray-title">學習遇到瓶頸？<br>十堂課程，專家立刻幫你解惑！</p>
                <p class="md-gray-text" style="margin-top:15px;line-height:40px;">讓狂人飛專業編輯團隊<br>來告訴你如何優化履歷與求職策略!</p>
                <div v-if="$mq == 'desktop'" style="margin-top: 110px;">
                    <div class="md-six-block-line">
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第一堂課<br>面試官思維分析</p>
                            <div class="md-six-block-line-text">
                            1. 求職前，你該知道面試官如何看履歷！<br>
                            2. 履歷隱藏四大指標：信度、價值、包容、願景<br>
                            3. 如何透過舉例與經驗來呈現能力極限
                            </div>
                        </div>
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第二堂課<br>選擇正確平台與邏輯</p>
                            <div class="md-six-block-line-text">
                            1. 從選平台到職缺說明，教你做前期準備功課<br>
                            2. 求職平台介紹與優劣解析<br>
                            3. 目標產業的前景分析與薪水差異
                            </div>
                        </div>
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第三堂課<br>自我介紹標準公式</p>
                            <div class="md-six-block-line-text">
                            1. 價值觀的定義：你看見的問題與你如何改變<br>
                            2. 自我介紹關鍵公式，四大元素留下深刻印象
                            </div>
                        </div>
                    </div>
                    <div class="md-six-block-line">
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第四堂課<br>有效撰寫工作經歷</p>
                            <div class="md-six-block-line-text">
                            1. 工作經驗的撰寫方式<br>
                            2. 三條經歷撰寫，有效呈現經驗質與量<br>
                            3. 寫出面試官心中，最有感的實際績效數字
                            </div>
                        </div>
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第五堂課<br>志工與社團經驗呈現</p>
                            <div class="md-six-block-line-text">
                            1. 將重心轉移到學習成效<br>
                            2. 將社團經歷做為跳板，接軌職場需求
                            </div>
                        </div>
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第六堂課<br>寫出能力的公信力</p>
                            <div class="md-six-block-line-text">
                            1. 從職缺說明，找出職位能力需求<br>
                            2. 從公司需求找出能力最佳操作定義
                            </div>
                        </div>
                    </div>
                    <div class="md-six-block-line">
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第七堂課<br>利用學歷與個人成就</p>
                            <div class="md-six-block-line-text">
                            1. 讓研究與主修科目強化價值觀與專業度<br>
                            2. 強化關係鍊，讓校友人脈成為你的優勢<br>
                            3. 如何有自信但不自傲的陳述成就
                            </div>
                        </div>
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第八堂課<br>自傳五大向度分析</p>
                            <div class="md-six-block-line-text">
                            1. 人資如何解讀自傳<br>
                            2. 自傳需滿足的五大向度
                            </div>
                        </div>
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第九堂課<br>面試常見題目解析</p>
                            <div class="md-six-block-line-text">
                            1. 『最挫折經驗』挫折容忍與玻璃心<br>
                            2. 『未來的願景』規劃與資源整合<br>
                            3. 『優點與缺點』自我覺察與問題解決<br>
                            4. 『情境題面試』分析與錯誤歸責<br>
                            5. 『還有什麼想問的嗎』好奇心與主動性
                            </div>
                        </div>
                    </div>
                    <div class="md-six-block-line" style="border:none;">
                        <div class="md-six-block-line-block">
                            <p class="md-six-block-line-title">第十堂課<br>提高求職信開信率</p>
                            <div class="md-six-block-line-text">
                            1. 提高開信率的求職信撰寫<br>
                            2. 求職信撰寫的四個段落<br>
                            3. 求職信常見錯誤解析
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="eight-block">
                    <div class="eb-des-box" style="margin-top:20px;" :class="show_list[0]" @click="toggleClass(0)">
                        <div class="eb-des-box-title">第一堂課<br>面試官思維分析<hr>
                        <div class="eb-des-circle" :class="show_list[0]">
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
                    <div class="eb-des-box" :class="show_list[1]" @click="toggleClass(1)">
                        <div class="eb-des-box-title">第二堂課<br>選擇正確平台與邏輯<hr>
                        <div class="eb-des-circle" :class="show_list[1]">
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
                    <div class="eb-des-box" :class="show_list[2]" @click="toggleClass(2)">
                        <div class="eb-des-box-title">第三堂課<br>自我介紹標準公式<hr>
                        <div class="eb-des-circle" :class="show_list[2]">
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
                    <div class="eb-des-box" :class="show_list[3]" @click="toggleClass(3)">
                        <div class="eb-des-box-title">第四堂課<br>有效撰寫工作經歷<hr>
                            <div class="eb-des-box-content">
                                <div class="eb-des-circle" :class="show_list[3]">
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
                    <div class="eb-des-box" :class="show_list[4]" @click="toggleClass(4)">
                        <div class="eb-des-box-title">第五堂課<br>志工與社團經驗呈現<hr>
                        <div class="eb-des-circle" :class="show_list[4]">
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
                    <div class="eb-des-box" :class="show_list[5]" @click="toggleClass(5)">
                        <div class="eb-des-box-title">第六堂課<br>寫出能力的公信力<hr>
                        <div class="eb-des-circle" :class="show_list[5]">
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
                    <div class="eb-des-box" :class="show_list[6]" @click="toggleClass(6)">
                        <div class="eb-des-box-title">第七堂課<br>利用學歷與個人成就<hr>
                        <div class="eb-des-circle" :class="show_list[6]">
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
                    <div class="eb-des-box" :class="show_list[7]" @click="toggleClass(7)">
                        <div class="eb-des-box-title">第八堂課<br>自傳五大向度分析<hr>
                        <div class="eb-des-circle" :class="show_list[7]">
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
                    <div class="eb-des-box" :class="show_list[8]" @click="toggleClass(8)">
                        <div class="eb-des-box-title">第九堂課<br>面試常見題目解析<hr>
                        <div class="eb-des-circle" :class="show_list[8]">
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
                    <div class="eb-des-box" :class="show_list[9]" @click="toggleClass(9)">
                        <div class="eb-des-box-title">第十堂課<br>提高求職信開信率<hr>
                        <div class="eb-des-circle" :class="show_list[9]">
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
            </div>
        </section>
        <section class="md-seven-block">
            <div class="md-seven-block-container" style="max-width: 1100px;margin: 0 auto; min-width: 90vw;">
                <p class="md-gray-title">台灣第一堂智能回饋課程<br>為求職若渴的你打造!</p>
                <div v-if="$mq == 'desktop'" class="md-seven-block-line">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-seven-img-1.png">
                    <div>
                        <p class="md-seven-block-line-title">想要找實習</p>
                        <p class="md-seven-block-line-text">如果希望累積經驗，實習是個再好不過的選項，但要怎麼讓自己脫穎而出呢？<br>這堂課的內容，就是為了確保掌握所有得分的環節，用細節堆疊出你的價值跟潛力。</p>
                    </div>
                </div>
                <div v-if="$mq == 'desktop'" class="md-seven-block-line">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-seven-img-2.png">
                    <div>
                        <p class="md-seven-block-line-title">新鮮人求職</p>
                        <p class="md-seven-block-line-text">沒有光鮮亮麗的經歷，該如何在茫茫畢業生中脫穎而出呢？<br>使用我們課程裡的 AI 評分系統，讓你的履歷分數清晰的呈現在你面前！</p>
                    </div>
                </div>
                <div v-if="$mq == 'desktop'" class="md-seven-block-line">
                    <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-seven-img-3.png">
                    <div>
                        <p class="md-seven-block-line-title">準備要轉職</p>
                        <p class="md-seven-block-line-text">工作幾年後開始在物色下一段職涯，以及更好的薪資待遇嗎？<br>履歷評測系統可以幫你檢查你是否有好好的完整的闡述這幾年的工作成效！</p>
                    </div>
                </div>
                <img v-if="$mq == 'mobile'" src="/resume/Group 945.png" alt="">
            </div>
        </section>
        <section class="md-eight-block" v-touch:swipe.right="nextPeopSlides" v-touch:swipe.left="lastPeopSlides">
            <div class="peop-slide">
                <img v-if="$mq == 'desktop'" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/peop-list-1.png" alt="">
                <img v-else src="/resume/Group 946.png" alt="">
            </div>
            <div class="peop-slide">
                <img v-if="$mq == 'desktop'" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/peop-list-2.png" alt="">
                <img v-else src="/resume/Group 946.png" alt="">
            </div>
            <div class="peop-slide">
                <img v-if="$mq == 'desktop'" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/peop-list-3-1.png" alt="">
                <img v-else src="/resume/Group 946.png" alt="">
            </div>
            <div class="peop-slide">
                <img v-if="$mq == 'desktop'" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/peop-list-4-1.png" alt="">
                <img v-else src="/resume/Group 946.png" alt="">
            </div>
            <div class="peop-slide">
                <img v-if="$mq == 'desktop'" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/peop-list-5-1.png" alt="">
                <img v-else src="/resume/Group 946.png" alt="">
            </div>
            <div class="peop-dot-container">
                <span class="peop-dot" @click="currentPeopSlide(1)"></span>
                <span class="peop-dot" @click="currentPeopSlide(2)"></span>
                <span class="peop-dot" @click="currentPeopSlide(3)"></span>
                <span class="peop-dot" @click="currentPeopSlide(4)"></span>
                <span class="peop-dot" @click="currentPeopSlide(5)"></span>
            </div>
        </section>
        <section class="md-nine-block need-margin">
            <div style="max-width: 1100px;margin: 0 auto;">
                <p class="md-gray-title">有時候，選擇比努力更重要</p>
                <p class="md-gray-text" style="margin-top:10px;">我們都願為求職努力，但看了很多教學<br>我們卻無法確認，自己是否真的學會</p>
                <div style="display: flex;align-items:center;justify-content:space-between;margin-top:70px;flex-wrap:wrap;">
                    <div class="md-nine-block-box" style="background-color:#0090FF;margin-bottom: 20px;">
                        <div>
                            <p class="md-nine-block-box-title" style="color:white;">履歷範本</p>
                            <p class="md-nine-block-text" style="color:white;">-顧問與履歷精華<br>-10 秒知道好壞<br>-每天不到 9 元</p>
                        </div>
                    </div>
                    <div class="md-nine-block-box">
                        <div>
                            <p class="md-nine-block-box-title">面試顧問</p>
                            <p class="md-nine-block-text">-單一顧問老師<br>-取決於顧問時間<br>-NT 3,000/時↑</p>
                        </div>
                    </div>
                    <div class="md-nine-block-box">
                        <div>
                            <p class="md-nine-block-box-title">線上課程</p>
                            <p class="md-nine-block-text">-單一專家老師<br>-回饋頻次不定<br>-NT 1,200/堂↑</p>
                        </div>
                    </div>
                    <div class="md-nine-block-box">
                        <div>
                            <p class="md-nine-block-box-title">免費資源</p>
                            <p class="md-nine-block-text">-好壞參差不齊<br>-沒有回饋<br>-大量時間成本</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="md-ten-block">
            <div class="md-first-block-container">
                <div v-if="$mq == 'desktop'" style="padding-left:50px;">
                    <p style="font-size: 64px;color:#535353;font-weight:bolder;">每天不到 9 元</p>
                    <p style="font-size: 34px;color:#535353;margin-top:15px;">三個月內讓你通過 HR 考驗<br>掌握未來不迷惘</p>
                    <img @click="$router.push('/resume/pay')" class="md-ten-btn" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/resume-index-btn.png" alt="">
                </div>
                <div v-else>
                    <p style="font-size: 35px;color:#535353;font-weight:bolder;margin-top:50px;">每天不到 9 元</p>
                    <p style="font-size: 17px;color:#535353;margin-top:15px;">三個月內讓你通過 HR 考驗<br>掌握未來不迷惘</p>
                    <img @click="$router.push('/resume/pay')" class="md-ten-btn" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/resume-index-btn.png" alt="">
                </div>
                <div v-if="$mq == 'desktop'" style="position:relative;height:550px;width:500px;">
                    <img class="md-ten-pic" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-ten-img-1.png">
                </div>
                <div v-else>
                    <img class="md-ten-pic" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-ten-img-1.png">
                </div>
            </div>
        </section>
        <section class="md-eleven-block need-margin">
            <div style="max-width: 1100px;margin: 0 auto;">
                <p class="md-blue-title">課程搶先看!</p>
                <div class="md-videoplay">
                    <iframe id="demovideo" :src="'https://player.vimeo.com/video/338608971'" frameborder="0" allow="autoplay; fullscreen" allowfullscreen width="100%" height="100%"></iframe>
                </div>
                <p class="md-gray-title">常見問題</p>
                <p class="md-eleven-block-title">Q1: 請問履歷範本在哪上課？</p>
                <p class="md-eleven-block-text">履歷範本為『線上課程』，當課程上線後，隨時隨地都可以透過手機、平板、與電腦上課。 </p>
                <p class="md-eleven-block-title">Q2: 課程可以看幾次？</p>
                <p class="md-eleven-block-text">課程為單季學習制，在訂購後的這一季內都可以一直重複觀看。 </p>
                <p class="md-eleven-block-title">Q3： NT299 元/季學習服務之後會有更新內容嗎？</p>
                <p class="md-eleven-block-text">會的，未來我們將會持續更新所有職場必備技能的線上學習服務（課程+評測），從商用書信到溝通表達等內容，完整包覆 360 天職場需求。為回饋狂人<br>飛鐵粉，即日起到 2019/8/3 前訂閱，即可以 NT299 元/季的價格訂購（原價為 NT499 元/季)。  </p>
                <p class="md-eleven-block-title">Q4: 會有真人幫我把我的履歷改到好嗎？</p>
                <p class="md-eleven-block-text">不會，給你魚吃，不如給你一把釣竿。我們將透過 AI 人工智能為您檢測，並針對不足之處，教你合適的撰寫方式。  </p>
                <p class="md-eleven-block-title">Q5: 付款方式</p>
                <p class="md-eleven-block-text">讓狂人飛與日商恩沛股份有限公司提供之「AFTEE」後支付服務獨家合作，是收到商品後才付款的支付方式。<br>不須輸入繁瑣的個人資料，也不須登錄會員即可立即免費使用！<br>將於下單後 24 小時內透過簡訊寄送繳費通知，您可透過便利商店代收服務或 ATM 繳費等方式完成付款手續。<br>瞭解更多>> https://lihi.vip/JpeZj </p>
                <p class="md-eleven-block-title">Q6: 其他問題</p>
                <p class="md-eleven-block-text">請來信至 contact@flyingcrazyer.com ，將有專人協助為您服務。 </p>
            </div>
        </section>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import { mapMutations, mapGetters } from 'vuex';
import VueMq from 'vue-mq';
import ResumeFooter from "~/components/resume/ResumeFooter.vue";
import AiJudgment from '~/components/resume/AiJudgment.vue';


Vue.use(Vue2TouchEvents);
Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 720,
    desktop: Infinity,
  }
});
export default {
    layout: 'resume',
    data:() => ({
        is_login: false,
        seemore_check_or_not: false,
        ui_config : {},
        is_ui_config_loaded : false,
        payed_or_not: false,
        video_10_percent: false,
        video_50_percent: false,
        video_90_percent: false,
        show_fbshare_or_not:false,
        dv:{},
        show_list:[],
        dcPlayer: {},

        slideImgIndex: 0,
        slidePeopIndex: 0,
    }),
    computed: { 
        ...mapGetters({
            user : 'user/getData',
        }),
        getChapterData01() {
            let data = {
                id:'01',
                title:'第一堂課',
                subtitle:'面試官思維分析',
                description:'你該知道面試官如何看履歷，並學會履歷四大指標',
                thumbnail:'https://i.vimeocdn.com/video/787036073.jpg',
                video_id:'338611197',
                ai_id:'',
            };
            
            if (this.is_ui_config_loaded) {
                data = this.ui_config.chapters[0];
            }
            return data;
        },
        getChapterData04() {
            let data = {
                id:'04',
                title:'第四堂課',
                subtitle:'有效撰寫工作經歷(AI練習)',
                description:'有效呈現工作經驗的質量，寫出面試官心中，最有感的實際績效數字',
                thumbnail:'https://i.vimeocdn.com/video/787035997.jpg',
                video_id:'338608971',
                ai_id:'work_experience',
            };
            
            if (this.is_ui_config_loaded) {
                data = this.ui_config.chapters[3];
            }
            return data;
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
            }, 2000);
            
            
            if (!this.$route.path.includes("/signup") && !this.$route.path.includes("/login") ) {
                localStorage.redirect = this.$route.path;
                console.log("save redirect : " + localStorage.redirect);
            }

            this.is_login = await this.$checkLogin(this.$store);
            if (this.is_login) {
                this.payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
            }
            //ga and fb pixel
            let gtag_config = {}
            gtag_config.page_title = 'LP cover';
            gtag_config.page_path = '/0_cover';

            if (this.is_login) {
                gtag_config.user_id = this.user.user_id;
            } 
            this.$gtag('js', new Date());
            this.$gtag('config', 'AW-739537538');
            this.$gtag('config', 'UA-123332732-3', gtag_config);
            this.$fbq("init",this.ui_config.fbq_id);
            this.$fbq("track","PageView");
        }
    },
    mounted(){
        if(process.client) {
            window.onload = this.showImgSlides()
            window.onload = this.showPeopSlides()
            setInterval(() => {
                this.nextImgSlides()
                this.nextPeopSlides()
            }, 4000);
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
            this.$gtag('event', 'view_item_list', {
                "items": [
                    {
                    "id": "resume_01",
                    "name": "履歷範本課程(一個月)",
                    "brand": "讓狂人飛",
                    "category": "online AI course",
                    "quantity": 1,
                    "price": 299
                    },
                ]
            });
            this.$gtag('event', 'view_item', {
                "items": [
                    {
                    "id": "resume_01",
                    "name": "履歷範本課程(一個月)",
                    "brand": "讓狂人飛",
                    "category": "online AI course",
                    "quantity": 1,
                    "price": 299
                    },
                ]
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
            this.$fbq('trackCustom', 'PlayVideo', {title: '[試讀] 01 - 面試攻略'});
        },
        onEndCallback() {
            document.getElementById("fbshare").style.display = "block";
            this.$gtag('event', 'End', {
                'event_category': 'Video',
                'event_label': '[試讀] 01 - 面試攻略',
            });
        },
        onPauseCallback(data) {
            this.$gtag('event', 'Pause', {
                'event_category': 'Video',
                'event_label': '[試讀] 01 - 面試攻略',
                'value':data.seconds
            });
            this.$fbq('trackCustom', 'PauseVideo', {title: '[試讀] 01 - 面試攻略'});
        },
        onTimeUpdateCallback(data) {
            if (data.percent > 0.1 && !this.video_10_percent) {
                this.$gtag('event', 'Play_to_10%', {
                    'event_category': 'Video',
                    'event_label': '[試讀] 01 - 面試攻略',
                });
                this.$fbq('trackCustom', 'PlayVideo10p', {title: '[試讀] 01 - 面試攻略'});
                this.video_10_percent = !this.video_10_percent;
            } else if (data.percent > 0.5 && !this.video_50_percent) {
                this.$gtag('event', 'Play_to_50%', {
                    'event_category': 'Video',
                    'event_label': '[試讀] 01 - 面試攻略',
                });
                this.$fbq('trackCustom', 'PlayVideo50p', {title: '[試讀] 01 - 面試攻略'});
                this.video_50_percent = !this.video_50_percent;
            } else if (data.percent > 0.9 && !this.video_90_percent) {
                this.$gtag('event', 'Play_to_90%', {
                    'event_category': 'Video',
                    'event_label': '[試讀] 01 - 面試攻略',
                });
                this.$fbq('trackCustom', 'PlayVideo90p', {title: '[試讀] 01 - 面試攻略'});
                this.video_90_percent = !this.video_90_percent;
            }
        },
        clickPayNow() {
            this.$gtag('event', 'Click', {
                'event_category': 'EC',
                'event_label': '立即購買_頁尾',
            });
            this.$fbq('track', 'AddToCart', {
                currency: "TWD", 
                value: 299.00,
                content_ids: 'resume_01',
                content_type: 'product'
            });

            this.$router.push("/resume/pay");
        },
        onSecondPreviewCourseClick() {
            if (localStorage.isShared != "true") {
                window.alert("需要先分享才能觀看這堂課喔"); 
                this.openShareWindow();   
                document.getElementById("fbshare").style.display = "block";
                this.$scrollTo("#fbshare"); 
            } else {
                this.switchCourse(this.getChapterData04.video_id);
                document.getElementById("fbshare").style.display = "block";
                this.$scrollTo("#demovideo"); 
            }
        },
        switchCourse(id){
            if(localStorage.isShared == "true"){
                // this.dv.src = "https://player.vimeo.com/video/"+id;
                this.dcPlayer.loadVideo(id);
            }
        },
        toggleClass(index) {
            if (this.show_list[index] === 'open') {
                this.show_list = [];
                    this.$gtag('event', 'Toggle_Off', {
                    'event_category': 'UIEvent',
                    'event_label': '課程' + index
                });
            } else {
                this.show_list = [];
                this.show_list[index] = 'open'
                this.$gtag('event', 'Toggle_On', {
                    'event_category': 'UIEvent',
                    'event_label': '課程' + index
                });
            }
        },
        showImgSlides(){
            var slides = document.getElementsByClassName("slide-img-container");
            var dots = document.getElementsByClassName("img-dot");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            // this.slideImgIndex++;
            // console.log(this.slideImgIndex)
            if (this.slideImgIndex > slides.length-1) {
                this.slideImgIndex = 0
            } else if( this.slideImgIndex < 0) {
                this.slideImgIndex = 1
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" img-dot-active", "");
            }
            slides[this.slideImgIndex].style.display = "flex";  
            dots[this.slideImgIndex].className += " img-dot-active";
            // setTimeout(this.showSlides.bind(this), 2000); // Change image every 2 seconds
        },
        nextImgSlides() {
            this.showImgSlides(this.slideImgIndex += 1);
        },
        lastImgSlides() {
            this.showImgSlides(this.slideImgIndex -= 1);
        },
        currentImgSlide(n) {
            this.showImgSlides(this.slideImgIndex = n-1);
        },
        showPeopSlides(){
            var slides = document.getElementsByClassName("peop-slide");
            var dots = document.getElementsByClassName("peop-dot");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            // this.slideImgIndex++;
            // console.log(this.slideImgIndex)
            if (this.slidePeopIndex > slides.length-1) {
                this.slidePeopIndex = 0
            } else if( this.slidePeopIndex < 0) {
                this.slidePeopIndex = 4
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" peop-dot-active", "");
            }
            slides[this.slidePeopIndex].style.display = "flex";  
            dots[this.slidePeopIndex].className += " peop-dot-active";
            // setTimeout(this.showSlides.bind(this), 2000); // Change image every 2 seconds
        },
        nextPeopSlides() {
            this.showPeopSlides(this.slidePeopIndex += 1);
        },
        lastPeopSlides() {
            this.showPeopSlides(this.slidePeopIndex -= 1);
        },
        currentPeopSlide(n) {
            this.showPeopSlides(this.slidePeopIndex = n-1);
        }

    },
    components: {
        ResumeFooter,
        AiJudgment,
    },
}
</script>
<style>
.need-margin {
    max-width: 90vw !important;
    margin: 0 auto;
}
.md-blue-title {
    font-size: 50px;
    font-weight: bolder;
    color: #0090FF;
}
.md-blue-text {
    font-size: 24px;
    color: #0090FF;
}
.md-gray-title {
    font-size: 40px;
    font-weight: bolder;
    color: #535353;
}
.md-gray-text {
    font-size: 24px;
    color: #535353;
}
@media (max-width:720px) {
    .md-blue-title {
        margin-top:40px; 
        font-size: 35px !important;
    }
    .md-blue-text {
        font-size: 17px !important;
    }
    .md-gray-title {
        font-size: 35px !important;
    }
    .md-gray-text {
        font-size: 17px !important;
        margin-top: 10px;
    }
}
.md-first-block {
    margin-top: 55px;
    width: 100vw;
    /* padding-bottom: 50px; */
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/resume/md-first-img.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.md-first-block-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1450px;
    margin: 0 auto;
}
.md-first-title {
    padding-left: 100px;
}
.md-first-btn {
    border: none;
    background: none;
    margin-top: 45px;
}
.md-first-block-img {
    height: 570px;
}
@media (max-width:720px) {
    .md-first-block {
        height: auto !important;
    }
    .md-first-block-container {
        flex-direction: column;
        max-width: 274px !important;
        width: 80vw !important;
    }
    .md-first-title {
        padding-left: 0px;
    }
    .md-first-block-img {
        height: auto;
        max-width: 311px !important;
        width: 85vw !important;
    }
}
.md-second-block {
    padding-bottom: 50px;
    background: white;
    padding-top: 60px;
}
.md-second-li-block {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
}
.md-second-li img {
    height: 95px;
    margin-bottom: 45px;
}
@media (max-width:720px) {
    .md-second-block {
        height: auto !important;
        padding-top: 50px !important;
        max-width: 274px !important;
        width: 80vw !important;
    }
    .md-second-li-block {
        flex-direction: column;
    }
    .md-second-li {
        display: flex;
    }
    .md-second-li img {
        width:70px;
        height: auto !important;
        max-height: 67px;
        margin-right: 25px;
    }
}

.md-third-block {
    padding-bottom: 50px;
    background-color: #F7F7F7;
    padding-top: 45px;
}
.md-third-block-container {
    width: 90vw;
}
.md-third-text {
    text-align: center;
    color: #7E7E7E;
    font-size: 15px;
}
.md-third-btn-title {
    font-size: 24px;
    color: #535353;
}
.md-four-block {
    padding-bottom: 50px;
    padding-top: 100px;
}
@media (max-width:720px) {
    .md-third-block-container {
        height: auto !important;
        max-width: 300px !important;
        width: 90vw !important;
    }
    .md-third-block {
        height: auto !important;  
        background-color: #F7F7F7;
        padding-top: 45px;
    }
    .md-third-text {
        text-align: center;
        color: #7E7E7E;
        font-size: 12px !important;
    }
    .md-third-btn-title {
        font-size: 14px !important;
    }
}
.slide-img-container {
    align-items: center;
    justify-content: center;
    height: 200px;
}
.dot-container {
    width: fit-content;
    height: 20px;
    display: block;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
}
.img-dot {
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background: rgba(83,83,83,.5);
    margin: 0 4px; 
    display: inline-block;
}
.img-dot-active {
    background: rgba(83,83,83,1);
}
.md-four-block .slide-img {
    width: 90%;
    max-width: 1100px;
}
.md-five-block {
    height: 550px;
    background-color: #F7F7F7;
}
.md-five-block-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1450px;
    margin: 0 auto;
}
@media (max-width:720px) {
    .md-five-block {
        height: auto;
    }
    .md-five-block-container {
        max-width: 350px;
        width: 100vw;
    }
}
.md-six-block {
    padding-bottom: 50px;
    padding-top: 120px;
    background-color: white;
}
@media (max-width:720px) {
    .md-six-block {
        padding-top: 45px;
        background-color: white;
    }
    .eight-block{
        width: 100%;
        font-weight: 400;
        color: #969696;
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
    .eb-des-box {
        position: relative;
        /* margin:0 35px;  */
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
        background-color: #969696;
        transform: rotate(45deg);
        position: absolute;
        top:5px;
        right: 6px;
    }
    .eb-des-circle div:last-child {
        width: 3px;
        height: 12px;
        background-color: #969696;
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
        color: #969696;
        font-size: 18px;
        font-weight: bold;
        text-align: center; 
    }
    .eb-des-box-title hr,.eb-des-box-content.open hr {
        color:#969696;
        margin: 15px 20px;
        border-style: solid;
        border-width: .5px;
    }
    .eb-des-box-content li {
        color: #969696;
        text-align:left;
        font-size: 13px;
        font-weight:inherit;
        line-height: 20px;
    }
}
.md-six-block-line {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    margin-top: 30px;
    border-bottom: solid 1px #707070;
}
.md-six-block-line-block {
    width: 30%;
}
.md-six-block-line-title {
    color: #0090FF;
    font-size: 21px;
    font-weight: bolder;
    margin-bottom: 35px;
    line-height: 30px;
}
.md-six-block-line-text {
    color: #7E7E7E;
    font-size: 14px;
    line-height: 25px;
    
}
.md-seven-block {
    padding-bottom: 50px;
    padding-top: 100px;
    background-color:#F7F7F7;
}
.md-seven-block-line {
    display: flex;
    align-items: center;
    margin-top: 30px;
}
.md-seven-block img {
    height: 210px;
}
.md-seven-block-line-title {
    font-size: 30px;
    color: #0090FF;
    font-weight: bolder;
    margin-bottom: 5px;
}
.md-seven-block-line-text {
    font-size: 22px;
    color: #7E7E7E;
}
.md-seven-block-container {
    margin: 0 auto;
    width: 90vw;
}
@media (max-width:720px) {
    .md-seven-block {
        padding-top: 50px;
    }
    .md-seven-block-container {
        margin: 0 auto;
        width: 90vw;
        max-width: 300px;
    }
    .md-seven-block img {
        height: auto;
        width: 90vw;
        max-width: 300px;
        margin: 0 auto;
    }
}
.md-eight-block {
    padding-bottom: 50px;
    background-color: #0090FF;
    position:relative;
}
.peop-slide {
    align-items: center;
    justify-content: center;
}
.peop-slide img {
    height: 400px;
}
.peop-dot-container {
    width: 100vw;
    height: 20px;
    margin: 0 auto;
    position: absolute;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.peop-dot {
    width: 7px;
    height: 7px;
    margin: 0 4px;
    background: rgba(233,233,233,.5);
    display: inline-block;
    border-radius: 7px;
}
.peop-dot-active {
    background: rgba(233,233,233,1);
}
.md-nine-block {
    padding-bottom: 50px;
    background-color: white;
    padding-top: 85px;
}
.md-nine-block-box {
    background-color: #fff;
    width: 23%;
    height: 230px;
    /* border: 1px solid #F2F2F2; */
    box-shadow: 0px 8px 30px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    padding-left: 30px;
}
.md-nine-block-box-title {
    font-size: 30px;
    color:#7E7E7E;
    line-height: 50px;
    font-weight: 500;
}
.md-nine-block-text{
    color: #7E7E7E;
    line-height:50px;
    font-weight: 500;
    font-size: 17px;
}
@media (max-width:720px) {
    .peop-slide img {
        height: auto;
        width: 100vw;
        max-width: 350px;
    }
    .md-nine-block {
        padding-top: 50px;
    }
    .md-nine-block-box {
        background-color: #fff;
        height: 132px;
        width: 151px;
        flex: 0 0 48%;
        margin-bottom: 10px;
        padding-bottom: 20px;
    }
    .md-nine-block-box-title {
        font-size: 16px;
    }
    .md-nine-block-text{
        line-height:1;
        font-weight: 500;
        font-size: 13px;
    }
}

.md-ten-block {
    background: #FFDE00;
    /* padding-top: 100px; */
}
.md-ten-block .md-ten-pic {
    height: 620px;
    position: absolute;
    bottom: 0;
}
.md-ten-block .md-ten-btn {
    width: 430px;
    margin-top: 25px;
    cursor: pointer;
}
@media (max-width:720px) {
    .md-ten-block {
        width: 100vw;
    }
    .md-ten-block .md-ten-btn {
        width: 90vw;
        max-width: 300px;
    }
    .md-ten-block .md-ten-pic {
        height: auto;
        position: relative;
        width: 100vw;
        max-width: 350px;
        bottom: -5px;
    }
}

.md-eleven-block {
    padding-top: 70px;
    padding-bottom: 100px;
}
.md-videoplay{
    width:90vw;
    max-width: 1100px;
    height: 50vw;
    margin: 50px auto;
    display: flex;
}
.md-eleven-block-title {
    font-size: 24px;
    color:#0090FF;
    margin:20px 0 15px;
}
.md-eleven-block-text {
    font-size: 16px;
    color: #535353;
}
@media (max-width:720px) {
    .md-eleven-block-title {
        font-size: 17px;
    }
    .md-eleven-block-text {
        font-size: 15px;
        color: #535353;
    }
    .md-eleven-block {
        padding-top: 0px;
        width: 80vw;
        max-width: 300px;
    }
    .md-videoplay{
        width: 80vw;
        max-width: 300px;
        height: 45vw;
    }
}
/* .videoplay iframe {
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
    position: fixed;
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
#checkseemore:checked ~ .first-block{
    position: relative;
}
.scrolldown{
    display:none;
}
.slogan{
    position: absolute;
    top: 36%;
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
#checkseemore:checked ~ .scrolldown{
    display:block;
}
.seconds-block{
    position:relative;
    color:#007CDC;
    width: 100%;
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
.ten-block button{
    background: transparent;
    border: none;
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
} */
/* .md-body {
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
    position: fixed;
    width:100vw;
    height: 101vh;
    background: url("/resume/Group 367.png") #0090FF;
    background-size:85%;
    background-position: center center;
    background-repeat: no-repeat;
    overflow-x: hidden;
    transition: height 200ms linear;
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
    height: 0px;
}
#checkseemore:checked ~ #checkseemore {
    display: none !important;
}
.md-seconds-block{
    position:relative;
    color:#007CDC;
    width: 100%;
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
    font-size: 44px;
}
.md-sevenblock-2{
    margin-bottom: 38px;
    font-size: 24px;
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
    font-size: 44px;
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
.md-tb-box button{
    background: none;
    border: none;
}
.md-tb-box img {
    width: 240px;
    height: auto;
    margin-top:10px; 
} */

</style>
