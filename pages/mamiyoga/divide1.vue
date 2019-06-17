<template>
    <div class="divide-page">
        <mamiyoga-teach-header class="mamiyoga-divide-header" nextTo="/mamiyoga/course1"></mamiyoga-teach-header>
        <h3>骨盆矯正</h3>
        <mamiyoga-divide-video></mamiyoga-divide-video>
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue';
import MamiyogaDivideVideo from '~/components/mamiyoga/MamiyogaDivideVideo.vue';
export default {
    components:{
        MamiyogaTeachHeader,
        MamiyogaDivideVideo,
    },
}
</script>

<style>
@media (max-width: 899px) {
    .divide-page {
        width: 100vw;
        min-height: 100vh;
        background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    }
    .divide-page h3 {
       font-size: 24px;
        color: #51636F;
        text-align: center;
        font-weight: 400; 
        margin-bottom: 3vh; 
        padding-top: 6vh;
    }
    .mamiyoga-divide-header button {
        display: none;
    }
}
</style>
