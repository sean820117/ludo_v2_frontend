<template>
    <div>
        <div class="divide-page" v-if="!showAssisant" >
            <mamiyoga-teach-header class="mamiyoga-divide-header" nextTo="/mamiyoga/course1"></mamiyoga-teach-header>
            <h3>骨盆矯正</h3>
            <mamiyoga-divide-video @openVideoAssisant="openVideoAssisant"></mamiyoga-divide-video>
        </div>
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue';
import MamiyogaDivideVideo from '~/components/mamiyoga/MamiyogaDivideVideo.vue';
export default {
    data:()=>({
        showAssisant: false,
    }),
    components:{
        MamiyogaTeachHeader,
        MamiyogaDivideVideo,
    },
    methods:{
        openVideoAssisant(){
            console.log('OK');
            this.showAssisant = true;
        }
    }
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
        margin-bottom: 2vh; 
    }
    .mamiyoga-divide-header button {
        display: none;
    }
}
</style>
