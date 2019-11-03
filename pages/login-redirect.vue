<template>
    <div></div>
</template>

<script>
import axios from '~/config/axios-config'
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
    },
    async created() {
        // let login_result = await this.$checkLogin(this.$store);

        let login_or_not = await this.$checkLogin(this.$store);
        let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
        console.log(localStorage.redirect + 'is_login:' + payed_or_not)
        if(!payed_or_not) {
            if(localStorage['when_is_free_trial_start'] != '' && localStorage['when_is_free_trial_start'] != undefined){
                this.$router.push(localStorage.redirect)
            } else {
                console.log(this.$i18n.locale)
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/free-trial`)
            }     
        } else {
            this.$router.push(localStorage.redirect)
        }
        // if (localStorage.redirect) {
        //     this.$router.push(localStorage.redirect);
        // } else {
        //     this.$router.push("/");
        // }
        
    }
}
</script>

<style>

</style>
