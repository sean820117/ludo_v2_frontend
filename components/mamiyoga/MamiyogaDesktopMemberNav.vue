<template>
    <div class="desktop-member-nav">
        <div class="desktop-member-nav-title">{{$t('member_title')}}</div>
        <nav>
            <li id="go_activation_code" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/activation-code`)">{{$t('member_text_btn_1')}}</li>
            <li @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/pay`)">{{$t('member_text_btn_2')}}</li>
            <hr class="member-line">
            <li id="go_writing" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/writing`)">{{$t('member_text_btn_4')}}</li>
            <li id="go_contact" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/contactus`)">{{$t('member_text_btn_6')}}</li>
        </nav>
        <div class="member-big-btn" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/menu`)" style="background:#97A8AF;margin-top:10vh;">{{$t('member_text_btn_7')}}</div>
    </div>
</template>

<script>
export default {
    mounted(){
        if(process.client) {
            if(this.$mq == 'desktop'){
                if(this.$route.path.includes("/activation-code")){
                    document.getElementById('go_activation_code').classList.add('active-menu')
                } else if(this.$route.path.includes("/writing")){
                    document.getElementById('go_writing').classList.add('active-menu')
                } else if(this.$route.path.includes("/contactus")){
                    document.getElementById('go_contact').classList.add('active-menu')
                }
                
            } 
        }
    },
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
    text-align: center;
    cursor: pointer;
}
.desktop-member-nav li.active-menu {
    /* border-bottom: 1px solid #fff;
    padding-bottom: 2px; */
    color: #FF9898;
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
    width: 60% !important;
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