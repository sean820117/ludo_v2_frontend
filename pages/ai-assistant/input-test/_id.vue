<template>
    <div>
        <textarea v-model="content" placeholder="add multiple lines"></textarea>
        <button @click="sendTest">測試</button>
        <div>rank: {{ rank }}</div>
    </div>
</template>


<script>
import axios from '~/config/axios-config';

export default {
    data:() => ({
        content:"",
        rank:"",
    }),
    methods: {
        sendTest() {
            let setRank = this.setRank;
            console.log("send" + this.$route.params.id)
            axios.post('/apis/ai-assistant/evaluate/'+this.$route.params.id,{content:this.content})
                .then((response) => {
                    if (response.status == '200') {
                        console.log("evaluate success")
                        setRank(response.data.score);
                    } else {
                        console.log(response)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        setRank(rank) {
            this.rank = rank;
        }
    }
}
</script>

<style scoped>

</style>
