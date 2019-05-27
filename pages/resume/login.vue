<template>
    <div class="login-page">
        <titlebar><img slot="right-component" src="Rectangle 235.png"/></titlebar>
        <div class="reg-text">登入</div>
        <div class="third-party">
            <third-party-icons/>
        </div>
        <div class="hr"></div>
        <div class="text-or">or</div>
        <form class="login-form">
            <div class="login-column">
                <div class="login-column-label">電子信箱</div>
                <input name="email" class="login-column-input" type="text" />
            </div>
            <div class="login-column">
                <div class="login-column-label">密碼</div>
                <input name="password" class="login-column-input" type="password" />
            </div>
            <input class="paynow" type="submit" value="登入">
        </form>
    </div>
</template>
<script>
import Titlebar from "~/components/resume/Titlebar"
import ThirdPartyIcons from "~/components/resume/ThirdPartyIcons"
export default {
    head () {
        return {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500' }
            ],
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1.0"},
                { charset: "UTF-8"}
            ]
        } 
    },
    components: {
        Titlebar,
        ThirdPartyIcons,
    },
}
</script>

<style>
html, body, #__nuxt, #__layout, #__layout > div{
    height: 100%;
    background: white;
}
a{
    text-decoration: none;
}
textarea:focus, input:focus{
    outline: none;
}
.login-page{
    text-align: center;
    height: 100%;
}
.reg-text{
    margin: auto;
    padding-top: 18vh;
    font-size: 21px;
}
.third-party{
    margin-top: 12vh;
}
.hr{
    margin: auto;
    width: 63%;
    height: 1px;
    background: #D4D4D4;
    margin-top: 23px;
}
.text-or{
    font-size: 14px;
    font-weight: 100;
    margin: auto;
    margin-top: 10px;
}
.login-form{
    text-align: left;
}
.login-form input[type=text]{
    padding:0px 10px;
}
.login-column{
    margin: auto;
    margin-top: 11px;
    width: 67%;
}
.login-column-label{
    text-align: left;
    color: #707070;
    font-size: 11px;
    line-height: 20px;
    margin-bottom: 6px; 
    padding-left: 5px;
}
.login-column-input{
    height: 27px;
    width: 100%;
    border-radius: 8px;
    border: none;
    background: #F3F3F3;
}
.paynow{
    width: 90px;
    height: 36px;
    line-height: 36px;
    background: #1785db;
    color: #fff;
    font-size: 14px;
    margin-left: 60%;
    margin-top: 6vh;
    border: none;
    border-radius: 3px;
    padding: unset;
}
</style>