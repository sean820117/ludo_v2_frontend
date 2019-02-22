<template>
    <div></div>
</template>

<script>
import axios from '../config/axios-config'
export default {
    mounted(){
        // this.logout();
        
    },
    methods: {
        signup(email,password,repeated_password) {
            axios.post('/signup',{email:email,password:password,repeated_password:repeated_password})
                .then((response) => {
                    if (response.status == '200') {
                        console.log("signup success")
                    } else {
                        console.log(response)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        login(email,password) {
            axios.post('/signup',{email:email,password:password})
                .then((response) => {
                    if (response.status == '200') {
                        console.log("login success")
                    } else {
                        console.log(response)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        logout() {
            window.location.href = "https://api.ludonow.com/logout"
        },
    },
}
</script>

<style>

</style>
