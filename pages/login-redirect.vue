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
        let login_or_not = await this.$checkLogin(this.$store);
        let payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
        console.log(localStorage.redirect + 'is_login:' + payed_or_not)
        if(!payed_or_not) {
            this.$router.push(localStorage.redirect)  
        } else {
            this.$router.push(localStorage.redirect)
        }
    }
}
</script>

<style>

</style>
