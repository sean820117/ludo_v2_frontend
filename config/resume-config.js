module.exports = {
    project_name:'resume',
    title:'讓履歷飛 - ',
    logo: "/resume/resume-logo.svg",
    base_color: '#0090FF',
    fbq_id: '438072703402139',
    view: {
        signup_page: {
            login_method: {
                FB: true,
                google: true,
                line: false,
                local: true,
                account_kit:false,
            }, 
            hint: {
                default_word: {
                    text: '付款前需先註冊成為會員',
                    color: '',
                },
                error: {
                    text: '帳號或密碼錯誤',
                    color: 'red',
                },
            },
            submit_button: {
                background_color: '#1785db'
            },
            back_button: {
                color: '#0090FF'
            }
        },
    },
    chapters: [
        {
            title:'第一堂課',
            subtitle:'01.面試官思維分析',
            description:'1.求職前，你該知道面試官如何看履歷！<br>2.履歷隱藏四大指標：信度、價值、',
            thumbnail:'https://i.vimeocdn.com/video/787036073.jpg',
            video_id:'338611197',
            ai_id:'',
        },
        {
            title:'第二堂課',
            subtitle:'02.選擇正確平台與邏輯',
            description:'- 成績比別人高，上的學校卻比別人差？<br>- 會考制度介紹與原理分析<br>- 近年學生重點趨勢與落點分析- ',
            thumbnail:'https://i.vimeocdn.com/video/787036050.jpg',
            video_id:'338558397',
            ai_id:'',
        },
        {
            title:'第三堂課',
            subtitle:'03.自我介紹標準公式(AI練習)',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'https://i.vimeocdn.com/video/787036031.jpg',
            video_id:'338559454',
            ai_id:'abstract',
            rank_comment: {
                A: '恭喜獲得等級A，代表你所寫的「自我介紹」呈現方式在全國平均中屬於前20%。<br>若你要應徵的是前1%的頂尖公司，記得要更接近該公司的「願景與目標」撰寫自我介紹喔！練習只是輔助，投上才是重點。',
                B: '你獲得等級B，代表你所寫的「自我介紹」呈現方式在全國平均中，排名20%~40%。<br>下一個挑戰等級，是最高等級「A」。',
                C: '你獲得等級C，代表你所寫的「自我介紹」呈現方式在全國平均中，排名40%~60%。<br>下一個挑戰等級，是前40%的「B」。',
                D: '你獲得等級D，代表你所寫的「自我介紹」呈現方式在全國平均中，排名60%~80%。<br>下一個挑戰等級，是前60%的「C」。',
                E: '你獲得等級E，代表你所寫的「自我介紹」是全國吊車尾的後面20%，建議認真寫喔！學習是自己的，挑戰機器沒有意義:D<br>下一個挑戰等級，是突破吊車尾20%達到等級「D」，加油！',
            },
            rank_detail: {
                keyword: {
                    pass:'內容相對具體，過關！<br><br>',
                    fail:'關於你看見的現象，可以再多寫一些細節，更詳細舉例一個你所見到的現象，或是多分享你如何改善這個問題吧。<br><br>',
                },
                len_score: {
                    pass:'內容長度適中，過關！<br><br>',
                    fail:'長度可能不太對喔XD 短自我介紹適中的字數約在50~110字之間。<br><br>',
                },
                numeral: {
                    pass:'有用數字具體做些呈現，過關！<br><br>',
                    fail:'關於你看見的現象或想改變的事情，可以透過數字化，再寫的具體一些喔！例如用實際數字來取代增長許多、節省資源等等形容詞。<br><br>',
                },
                strips: {
                    pass:'',
                    fail:'',
                },
                default_word: '本欄位適用於<br>-直接寄 Email 求職時開信介紹 <br>-Yourator「自薦信」的欄位 <br>-LinkedIn「專業簡介」的欄位<br>-CakeResume「簡介」的欄位<br>-履歷模板「簡介」的欄位',
            },
        },
        {
            title:'第四堂課',
            subtitle:'04.有效撰寫工作經歷(AI練習)',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'https://i.vimeocdn.com/video/787035997.jpg',
            video_id:'338608971',
            ai_id:'work_experience',
            rank_comment: {
                A: '恭喜獲得等級A，代表你所寫的「工作經歷」呈現方式在全國平均中屬於前20%。<br>若你要應徵的是前1%的頂尖公司，記得要更接近該公司的「職位的需求」撰寫經歷喔！練習只是輔助，投上才是重點。',
                B: '你獲得等級B，代表你所寫的「工作經歷」呈現方式在全國平均中，排名20%~40%。<br>下一個挑戰等級，是最高等級「A」。',
                C: '你獲得等級C，代表你所寫的「工作經歷」呈現方式在全國平均中，排名40%~60%。<br>下一個挑戰等級，是前40%的「B」。',
                D: '你獲得等級D，代表你所寫的「工作經歷」呈現方式在全國平均中，排名60%~80%。<br>下一個挑戰等級，是前60%的「C」。',
                E: '你獲得等級E，代表你所寫的「工作經歷」是全國吊車尾的後面20%，建議認真寫喔，學習是自己的，挑戰機器沒有意義:D<br>下一個挑戰等級，是突破吊車尾20%達到等級「D」，加油！',
            },
            rank_detail: {
                keyword: {
                    pass:'有提及多半人資會在意的重點，過關！<br><br>',
                    fail:'你提到的內容，可能跟職缺還有公司要求的相關性偏低喔！可以嘗試把人資會在意的關鍵諸如成效、成本、效益或是各行業的專業名詞，嘗試寫入看看:D<br><br>',
                },
                len_score: {
                    pass:'內容長度適中，過關！<br><br>',
                    fail:'一整條經歷，經過條列式後，總長度字數建議的字數約落在50~110字之間。<br><br>',
                },
                numeral: {
                    pass:'有用數字具體做些呈現，過關！<br><br>',
                    fail:'關於你看見的現象或想改變的事情，可以透過數字化，再寫的具體一些喔！例如用實際數字來取代增長許多、節省資源等等形容詞。<br><br>',
                },
                strips: {
                    pass:'內容有經過簡單條列，過關！<br><br>',
                    fail:'最後，經歷記得要條列式喔！建議一個經歷可以條列出三個重點。<br><br>',
                },
                default_word: '本欄位適用於<br>-104人力銀行「學歷經歷 ∕ 工作內容」的欄位<br>-1111人力銀行「工作說明」的欄位<br>-Yourator「工作經歷」的欄位',
            },
        },
        {
            title:'第五堂課',
            subtitle:'05.志工與社團經驗(AI練習)',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'https://i.vimeocdn.com/video/787035952.jpg',
            video_id:'338609851',
            ai_id:'volunteer',
            rank_comment: {
                A: '恭喜獲得等級A，代表你所寫的「志工經驗」呈現方式在全國平均中屬於前20%。<br>但若你要應徵的是前1%的頂尖公司，記得要更依照該職位需求的「特質與能力」來呈現！練習只是輔助，投上才是重點。',
                B: '你獲得等級B，代表你所寫的「志工經驗」呈現方式在全國平均中，排名20%~40%。<br>下一個挑戰等級，是最高等級「A」。',
                C: '你獲得等級C，代表你所寫的「志工經驗」呈現方式在全國平均中，排名40%~60%。<br>下一個挑戰等級，是前40%的「B」。',
                D: '你獲得等級D，代表你所寫的「志工經驗」呈現方式在全國平均中，排名60%~80%。<br>下一個挑戰等級，是前60%的「C」。',
                E: '你獲得等級E，代表你所寫的「志工經驗」是全國吊車尾的後面20%，建議認真寫喔，學習是自己的，挑戰機器沒有意義:D<br>下一個挑戰等級，是突破吊車尾20%達到等級「D」，加油！',
            },
            rank_detail: {
                keyword: {
                    pass:'有提及多半人資會在意的重點，過關！<br><br>',
                    fail:'關聯性還不夠喔！試著把你經歷中與公司職缺有關的元素再萃取出來，例如專業、能力、成本、效益、成效等等，都能夠寫入來提高你的相關性！<br><br>',
                },
                len_score: {
                    pass:'內容長度適中，過關！<br><br>',
                    fail:'一整條經歷，經過條列式後，總長度字數建議的字數約落在50~110字之間。<br><br>',
                },
                numeral: {
                    pass:'有用數字具體做些呈現，過關！<br><br>',
                    fail:'關於你在志工/社團經驗中的故事，可以更努力的用實際數字來取代增長許多、節省資源等等相對「較虛」的形容詞。<br><br>',
                },
                strips: {
                    pass:'內容有經過簡單條列，過關！<br><br>',
                    fail:'最後，經歷記得要條列式喔！建議一個經歷可以條列出三個重點。<br><br>',
                },
                default_word: '本欄位適用於<br>-104人力銀行「學歷經歷 ∕ 工作內容」的欄位<br>-1111人力銀行「加分亮點」的欄位<br>-Yourator「工作經歷」的欄位<br>-CakeResume「學歷 ∕ 活動與社團」的欄位<br>-LlinkedIn「志工經歷」的欄位<br>-履歷模板「工作經歷」的欄位<br>-LinkedIn「工作經歷」的欄位<br>-CakeResume「工作經歷」的欄位<br>-履歷模板「工作經歷」的欄位',
            },
        },
        {
            title:'第六堂課',
            subtitle:'06.寫出能力的公信力(AI練習)',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'https://i.vimeocdn.com/video/787035912.jpg',
            video_id:'338698698',
            ai_id:'ability_and_skill',
            rank_comment: {
                A: '恭喜獲得等級A，代表你所寫的「能力技能」呈現方式在全國平均中屬於前20%。<br>但若你要應徵的是前1%的頂尖公司，記得要更依照該職位的「詳情需求」並附上作品集與證明來呈現喔！練習只是輔助，投上才是重點。',
                B: '你獲得等級B，代表你所寫的「能力技能」呈現方式在全國平均中，排名20%~40%。<br>下一個挑戰等級，是最高等級「A」。',
                C: '你獲得等級C，代表你所寫的「能力技能」呈現方式在全國平均中，排名40%~60%。<br>下一個挑戰等級，是前40%的「B」。',
                D: '你獲得等級D，代表你所寫的「能力技能」呈現方式在全國平均中，排名60%~80%。<br>下一個挑戰等級，是前60%的「C」。',
                E: '你獲得等級E，代表你所寫的「能力技能」是全國吊車尾的後面20%，建議認真寫喔，學習是自己的，挑戰機器沒有意義:D<br>下一個挑戰等級，是突破吊車尾20%達到等級「D」，加油！',
            },
            rank_detail: {
                keyword: {
                    pass:'有提及有效證照或初步證明了自己能力的信度，過關！<br><br>',
                    fail:'能力的部分，除了說明技能外，更需要是加入認證機構或是證照名稱，例如TOEIC、WBSA...etc等等，讓你的經歷更有信度喔。<br><br>',
                },
                len_score: {
                    pass:'描述長度適中，過關！<br><br>',
                    fail:'撰寫能力時，仍然要對冷門的能力做些簡單的描述！例如金融專業中的無形資產鑑價技術，就可以說明它可以用於協助企業做更精準的價值評估。<br><br>',
                },
                numeral: {
                    pass:'有用數字具體呈現能力值或認證年份，過關！<br><br>',
                    fail:'若是可以，這一塊需要寫得更具體喔！<br>例如證照的年份、測驗的分數或是打字的手速等等都能寫入，來提高效度。<br><br>',
                },
                strips: {
                    pass:'內容有經過簡單條列，過關！<br><br>',
                    fail:'撰寫能力時，是最需要條列式的，一個能力一列講完，加上描述不超過兩行，肯定是相對合理的。<br><br>',
                },
                default_word: '本欄位適用於<br>-104人力銀行「工作技能」的欄位<br>-1111人力銀行「技能專長 ∕ 其他」的欄位<br>-Yourator「專業技能」的欄位<br>-履歷模板「相關能力」的欄位',
            },
        },
        {
            title:'第七堂課',
            subtitle:'07.利用學歷與個人成就',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'https://i.vimeocdn.com/video/787035848.jpg',
            video_id:'338717203',
            ai_id:'',
        },
        {
            title:'第八堂課',
            subtitle:'08.自傳五大向度分析',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'https://i.vimeocdn.com/video/787035823.jpg',
            video_id:'338819657',
            ai_id:'',
        },
        {
            title:'第九堂課',
            subtitle:'09.面試常見題目解析',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'https://i.vimeocdn.com/video/787035780.jpg',
            video_id:'338820252',
            ai_id:'',
        },
        {
            title:'第十堂課',
            subtitle:'10.提高求職信開信率',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'https://i.vimeocdn.com/video/787035739.jpg',
            video_id:'338821262',
            ai_id:'',
        },
    ],

}