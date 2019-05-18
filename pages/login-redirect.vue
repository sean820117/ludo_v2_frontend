<template>
    <div></div>
</template>

<script>
export default {
    async created() {
        // let login_result = await this.$checkLogin(this.$store);
        if (localStorage.redirect) {
            this.$router.push(localStorage.redirect);
        } else {
            this.$router.push("/");
        }
        
    }
}
</script>

<style>

</style>
