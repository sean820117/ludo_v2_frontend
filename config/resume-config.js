module.exports = {
    project_name:'resume',
    title:'讓履歷飛 - ',
    logo: "/resume/Group 153.png",
    base_color: '#1785db',
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
    ]
}