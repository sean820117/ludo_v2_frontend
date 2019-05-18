module.exports = {
    project_name:'resume',
    title:'讓履歷飛 - ',
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
        },
    },
}