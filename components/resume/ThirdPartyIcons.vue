<template>
    <div class="third-party-login">
        <a href="/"><img v-if="login_method.FB" src="/icon-fb.svg" @click.prevent="handleFBClick" /></a>
        <a href="/"><img v-if="login_method.google" src="/icon-google.svg" @click.prevent="handleGoogleClick"/></a>
        <a href="/"><img v-if="login_method.line" src="/icon-line.svg" /></a>
    </div>
</template>

<script>
export default {
    props: {
        login_method:Object,
    },
    methods: {
        handleFBClick() {
            
            if (this.$route.path == "/victor/signup") {
                console.log("/victor/signup");
                this.$gtag('event', 'conversion', {
                    'send_to': 'AW-744113367/TiSjCLOMw54BENeJ6eIC',
                    'event_callback': function () {},
                });
                this.$fb.enable();
                this.$fb.track('CompleteRegistration');
            }
            
            window.location.href = 'https://api.ludonow.com/auth/facebook?from=' + this.$route.path;
        },
        handleGoogleClick() {
            window.location.href = 'https://api.ludonow.com/auth/google?from=' + this.$route.path;
        }
    }
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