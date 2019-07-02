<template>
    <div class="mail-header">
        <div class="mail-header-goback">
            <a @click="$router.go(-1)">
                <img src="/mamiyoga/teach-goback.svg" alt="">
            </a>
        </div>
        <div class="mail-header-title">
            <h3 v-html="headerTitle" :style="{color:mailheaderTitle}">{{headerTitle}}</h3>
        </div>
        <div class="mail-header-goback">
            <img src="/mamiyoga/menu-envelope.svg" alt="">
            <div v-if="have_mail"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headerTitle: String,
        nextTo: String,
        mailheaderTitle: String,
        have_mail: false,
    }
}
</script>

<style>
.mail-header {
    width: 100vw;
    height: 60px;
    position: relative;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 995;
}
.mail-header-goback {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.mail-header-goback img {
    display: block;
}
.mail-header-title h3 {
    font-size: 12px;
    font-weight: 400;
}
.mail-header-goback div:last-child {
    background-color: #FF9898;
    width: 10px;
    height: 10px; 
    position: absolute;
    bottom: 3px;
    left: -3px;
    border-radius: 15px;
}
@media (min-width: 769px) {
    .mail-header {
        width: 100%;
    }
}
</style>
