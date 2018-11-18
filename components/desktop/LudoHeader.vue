<template>
    <div class="ludoheader">
        <img class="ludoheader-logo" :src="ludoLogo" width="120px" height="36px"/>
        <search-bar placeholder="搜尋我的挑戰"/>
        <div class="login">
            <!-- <a href="https://api.ludonow.com/auth/new/facebook">登入</a> -->
            <img class="ludoheader-information" :src="informationSvg" width="36px" height="36px"/>
        </div>
    </div>
</template>

<script>
import LudoLogoSvg from 'static/ludo-logo.svg'
import InformationSvg from 'static/information.svg'
import SearchBar from '~/components/SearchBar.vue'
export default {
    data:() => ({
        ludoLogo: LudoLogoSvg,
        informationSvg: InformationSvg,
    }),
    props: {
        margin: String,
    },
    components: {
        SearchBar,
    },
}
</script>

<style>
.ludoheader {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-left: 36px;
    margin-right: 36px;
    margin-bottom: 36px;
}
</style>
