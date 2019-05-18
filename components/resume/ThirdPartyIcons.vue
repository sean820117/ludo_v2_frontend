<template>
    <div class="third-party-login">
        <img v-if="login_method.FB" src="Group 173.png" />
        <img v-if="login_method.google" src="Group 174.png" />
        <img v-if="login_method.line" src="Group 176.png" />
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