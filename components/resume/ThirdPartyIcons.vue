<template>
    <div class="third-party-login">
        <a :href="'https://api.ludonow.com/auth/facebook'"><img v-if="login_method.FB" src="icon-fb.png" /></a>
        <a :href="'https://api.ludonow.com/auth/facebook'"><img v-if="login_method.google" src="icon-google.png" /></a>
        <a :href="'https://api.ludonow.com/auth/facebook'"><img v-if="login_method.line" src="icon-line.png" /></a>
    </div>
</template>

<script>
export default {
    props: {
        login_method:Object,
    },
}
</script>

<style>
.third-party-login{
    margin: auto;
}
.third-party-login img{
    margin: 0px 10px;
}
</style>