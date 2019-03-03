<template>
    <div>

    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            window.location.href = "https://api.ludonow.com/logout"
        },
    },
    mounted() {
        this.logout();
    }
}
</script>

<style>

</style>
