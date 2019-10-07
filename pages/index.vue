<template>
    <div class="ground_container">
    </div>
</template>

<script>

export default {
    components: {
    },
    data:() => ({
        
    }),
    mounted: function () {
      if (!process.server) {
        this.$router.push('/victor');
      }
    },
}
</script>

<style>
</style>