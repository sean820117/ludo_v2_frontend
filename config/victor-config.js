module.exports = {
    project_name:'victor',
    title:'學習歷程 - 得勝者文教',
    logo: "/logo-victor.svg",
    base_color: '#A42073',
    fbq_id: '2273854532873952',
    view: {
        signup_page: {
            login_method: {
                FB: true,
                google: false,
                line: false,
                local: true,
                account_kit:false,
            }, 
            hint: {
                default: {
                    text: '',
                    color: '',
                },
                error: {
                    text: '帳號或密碼錯誤',
                    color: 'red',
                },
            },
            submit_button: {
                background_color: '#A42073'
            },
            back_button: {
                color: '#A42073'
            }
        },
    },
    chapters: [
        {
            id:'01',
            title:'第一堂課',
            subtitle:'學習歷程全解析',
            description:'- 學習歷程是什麼？<br>- 為什麼學習歷程會取代備審？<br>- 學習歷程的出現該如何面對？',
            thumbnail:'/victor-course-thumbnail-01.jpg',
            video_id:'337212450',
        },
        {
            id:'02',
            title:'第二堂課',
            subtitle:'高中生涯如何規劃',
            description:'- 成績比別人高，上的學校卻比別人差？<br>- 會考制度介紹與原理分析<br>- 近年學生重點趨勢與落點分析- ',
            thumbnail:'/victor-course-thumbnail-02.jpg',
            video_id:'337201236',
        },
        {
            id:'03',
            title:'第三堂課',
            subtitle:'全新課程題目差異',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'/victor-course-thumbnail-03.jpg',
            video_id:'337212958',
        },
        {
            id:'04',
            title:'第四堂課',
            subtitle:'升高一暑假如何規劃',
            description:'- 特色課程定義與目的？<br>- 課程影響總學分、學制的變化？',
            thumbnail:'/victor-course-thumbnail-04.jpg',
            video_id:'337213754',
        },
        {
            id:'05',
            title:'第五堂課',
            subtitle:'高一如何探索方向',
            description:'-不適合轉組，會失去繁星的機會—<br>- 念到一半能否改變類組？<br>- 轉換類組的最佳時間點？',
            thumbnail:'/victor-course-thumbnail-05.jpg',
            video_id:'337201574',
        },
        {
            id:'06',
            title:'第六堂課',
            subtitle:'高二如何累積課外經驗',
            description:'- 大學學群分類與未來職涯關係<br>- N個學群與職涯簡單介紹<br>- 如何初步找出可嘗試的方向？',
            thumbnail:'/victor-course-thumbnail-06.jpg',
            video_id:'337213921',
        },
        {
            id:'07',
            title:'第七堂課',
            subtitle:'高三如何準備考試',
            description:'- 大學校系課程地圖是什麼？如何取得？<br>- 如何看懂大學課程地圖？<br>- 如何與孩子溝通，支持孩子找到對的職涯？',
            thumbnail:'/victor-course-thumbnail-07.jpg',
            video_id:'337201774',
        },
        {
            id:'08',
            title:'第八堂課（上）',
            subtitle:'考完後選科系分析(上)',
            description:'- 現代的升學制度發生什麼事情？<br>- 30分上頂大，29分卻重考？<br>- 指考採用學測分數會發生的效應',
            thumbnail:'/victor-course-thumbnail-08.jpg',
            video_id:'337201953',
        },
        {
            id:'09',
            title:'第八堂課（下）',
            subtitle:'考完後選科系分析(下)',
            description:'做好一切準備，迎戰下一個階段',
            thumbnail:'/victor-course-thumbnail-09.jpg',
            video_id:'337202101',
        },
    ]
}