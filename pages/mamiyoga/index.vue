<template>
    <div class="mamiyoga-index">
        <mamiyoga-intro title="日本Mami人氣瑜伽"></mamiyoga-intro>
    </div>
</template>

<script>
import MamiyogaIntro from '~/components/mamiyoga/MamiyogaIntro.vue';
export default {
    components: {
        MamiyogaIntro,
    },
}
</script>

<style>
@media (max-width:899px) {
    .mamiyoga-index {
        width: 100vw;
        height: 100vh;
        background: url('/mamiyoga/background-intro.png');
        background-repeat:no-repeat;
        background-size: cover; 
    }
}
</style>
