<template>
    <div class="mirror">
        <!-- 開啟體驗魔境 -->
        <mamiyoga-new-practice-video-block @goBack="goBack()" 
        @closeResult="closeResult" :routine="routine"></mamiyoga-new-practice-video-block>
    </div>
</template>

<script>
import MamiyogaNewPracticeVideoBlock from '~/components/mamiyoga/MamiyogaNewPracticeVideoBlock.vue'
export default {
    data:()=>({
        routine_list:Array,
        routine:{},
        routine_id:'yoga_27',
    }),
    components: {
        MamiyogaNewPracticeVideoBlock,
    },
    async mounted(){
        if(process.client) {
            if (this.$route.params.id) {
                this.routine_id = this.$route.params.id;
            }
            try {
                if(this.$i18n.locale == 'JP'){
                    this.routine_list = await require('~/config/routine-jp');
                    this.routine = this.routine_list.default.find(r => r.id == this.routine_id);
                } else {
                    this.routine_list = await require('~/config/routine');
                    this.routine = this.routine_list.default.find(r => r.id == this.routine_id);
                }
            } catch (error) {
                console.error(error)
                this.$errorLogger('/',"loadRoutine",error);
                this.routine_list = await require('~/config/routine');
                this.routine = this.routine_list.default.find(r => r.id == this.routine_id);
            }
        }
    },
    methods:{
        goBack() {

        },
        closeResult(score = null){
            this.is_practice = false
        },
    },
}
</script>

<style>
</style>