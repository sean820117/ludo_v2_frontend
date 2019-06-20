<template>
    <div class="mail-header">
        <div class="mail-header-goback">
            <router-link :to="{path:nextTo}">
                <img src="/mamiyoga/teach-goback.svg" alt="">
            </router-link>
        </div>
        <div class="mail-header-title">
            <h3 v-html="headerTitle">{{headerTitle}}</h3>
        </div>
        <div class="mail-header-goback">
            <img src="/mamiyoga/menu-envelope.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headerTitle: String,
        nextTo: String,
    }
}
</script>

<style>
@media (max-width: 899px) {
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
    }
    .mail-header-goback img {
        display: block;
    }
    .mail-header-title h3 {
        font-size: 18px;
        color: #51636F;
        font-weight: 400;
    }
}
</style>
