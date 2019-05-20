module.exports = {
    project_name:'victor',
    title:'得勝者',
    logo: "/logo-victor.svg",
    base_color: '#A42073',
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
            title:'第一堂課',
            subtitle:'別把學習歷程想的這麼嚴肅！',
            description:'- 學習歷程是什麼？<br>- 為什麼學習歷程會取代備審？<br>- 學習歷程的出現該如何面對？',
            thumbnail:'/victor-course-thumbnail-01.jpg',
            video_id:'337212450',
        },
        {
            title:'第二堂課',
            subtitle:'會考志願怎麼填？',
            description:'- 成績比別人高，上的學校卻比別人差？<br>- 會考制度介紹與原理分析<br>- 近年學生重點趨勢與落點分析- ',
            thumbnail:'/victor-course-thumbnail-02.jpg',
            video_id:'337201236',
        },
        {
            title:'第三堂課',
            subtitle:'高三才思考未來太晚了！你知道大學戰役現在就已經開始了嗎？',
            description:'- 如何國中時就確立志向？<br>- 如何從高一段考成績初步判斷適合類組？',
            thumbnail:'/victor-course-thumbnail-03.jpg',
            video_id:'337212958',
        },
        {
            title:'第四堂課',
            subtitle:'特色課程是什麼？我該怎麼選學校？',
            description:'- 特色課程定義與目的？<br>- 課程影響總學分、學制的變化？',
            thumbnail:'/victor-course-thumbnail-04.jpg',
            video_id:'337213754',
        },
        {
            title:'第五堂課',
            subtitle:'做完類組選擇後，我有時間反悔嗎？',
            description:'-不適合轉組，會失去繁星的機會—<br>- 念到一半能否改變類組？<br>- 轉換類組的最佳時間點？',
            thumbnail:'/victor-course-thumbnail-05.jpg',
            video_id:'337201574',
        },
        {
            title:'第六堂課',
            subtitle:'大學學群高峰會',
            description:'- 大學學群分類與未來職涯關係<br>- N個學群與職涯簡單介紹<br>- 如何初步找出可嘗試的方向？',
            thumbnail:'/victor-course-thumbnail-06.jpg',
            video_id:'337213921',
        },
        {
            title:'第七堂課',
            subtitle:'孩子說想讀這個，我該準備什麼？',
            description:'- 大學校系課程地圖是什麼？如何取得？<br>- 如何看懂大學課程地圖？<br>- 如何與孩子溝通，支持孩子找到對的職涯？',
            thumbnail:'/victor-course-thumbnail-07.jpg',
            video_id:'337201774',
        },
        {
            title:'第八堂課（上）',
            subtitle:'學測指考怎麼改？ 30 分也能上清大！',
            description:'- 現代的升學制度發生什麼事情？<br>- 30分上頂大，29分卻重考？<br>- 指考採用學測分數會發生的效應',
            thumbnail:'/victor-course-thumbnail-08.jpg',
            video_id:'337201953',
        },
        {
            title:'第八堂課（下）',
            subtitle:'所以……我現在該怎麼開始？',
            description:'做好一切準備，迎戰下一個階段',
            thumbnail:'/victor-course-thumbnail-09.jpg',
            video_id:'337202101',
        },
    ]
}