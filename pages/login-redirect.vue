<template>
    <div></div>
</template>

<script>
export default {
    async created() {
        let login_result = await this.$checkLogin(this.$store);
        this.$router.push("/");
    }
}
</script>

<style>

</style>
