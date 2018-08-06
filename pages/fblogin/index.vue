<template>
    <div class="fblogin_container">
        <a href="https://api.ludonow.com/auth/facebook" class="fblogin_button">facebook 登入</a>
        <p class="fblogin_declaration">此功能不會公開或給我們你的任何資訊</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.fblogin_container {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    widows: 100vw;
}
.fblogin_button {
    width: 218.8px;
    height: 46.5px;
    display: flex;
    border-radius: 15px;
    background-color: #204b90;
    text-decoration: none;
    color: white;
    font-family: Arial;
    font-size: 19px;
    font-weight: bold;
    line-height: 1.26;
    letter-spacing: -0.2px;
    justify-content: center;
    align-items: center;
}

.fblogin_declaration {
    /* height: 14px; */
    font-family: HelveticaNeue;
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: -0.1px;
    text-align: left;
    color: rgba(8, 8, 8, 0.38);
    margin-top: 12px;
    display: flex;
}
</style>
