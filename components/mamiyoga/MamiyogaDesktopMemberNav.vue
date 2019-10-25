<template>
    <div class="desktop-member-nav">
        <div class="desktop-member-nav-title">學員中心</div>
        <nav>
            <li id="go_activation_code" @click="$router.push('/activation-code')">我的序號</li>
            <li @click="$router.push('/pay')">購買課程</li>
            <hr class="member-line">
            <li id="go_writing" @click="$router.push('/writing')">文章投稿</li>
            <li id="go_contact" @click="$router.push('/contactus')">聯絡我們</li>
        </nav>
        <div class="member-big-btn" @click="$router.push('/menu')" style="background:#97A8AF;margin-top:10vh;">回 到 課 程</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.desktop-member-nav {
    min-height: 100vh;
    width: 30%;
    max-width: 400px;
    background: #24798f; 
    display: flex;
    align-items: center;
    flex-direction: column;
}
.desktop-member-nav-title {
    font-size: 32px;
    font-weight: 500; 
    color: #fff;
    margin-top: 10vh;
}
.desktop-member-nav li {
    color: white;
    list-style: none;
    font-size: 20px;
    margin: 40px 0;
    letter-spacing: 3px;
    cursor: pointer;
}
.desktop-member-nav li.active-menu {
    border-bottom: 1px solid #fff;
    padding-bottom: 2px;
}
.desktop-member-nav .member-line {
    height: 7px;
    width: 35%;
    border-style: none;
    background: #97A8AF;
    margin: 35px auto;
    border-radius: 15px;
}
.desktop-member-nav .member-big-btn {
    width: 60%;
    height: 45px;
    color: #F8F7F8;
    margin: 15px auto;
    background: #24798F;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>