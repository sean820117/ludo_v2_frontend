<template>
    <div></div>
</template>

<script>
import axios from '../../config/axios-config'
import { getData, setData } from 'nuxt-storage/local-storage'; 

export default {
    mounted() {
        console.log("data : " + localStorage.activity_id);
        if (localStorage.activity_id != 1) {
            axios.post('/apis/add-shared-time',{activity_id:"1",user_id:this.$route.query.id})
                    .then((response) => {
                        if (response.status == '200') {
                            console.log("add-shared-time success")
                            localStorage.activity_id = 1
                            this.$router.push("https://www.ludonow.com/go2university");
                            console.log(response.result);
                        } else {
                            console.log(response)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        } else {
            window.alert("您已參加過此活動囉！")
            this.$router.push("https://www.ludonow.com/go2university");
        }
    },
    methods: {

    },
}
</script>

<style>

</style>
