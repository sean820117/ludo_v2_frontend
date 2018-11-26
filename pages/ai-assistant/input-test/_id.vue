<template>
    <div class="input-test-container">
        <textarea v-model="content" placeholder="input your practice" rows="10" cols="10"></textarea>
        <br>
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
.input-test-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.input-test-container textarea{
    width: 30%;
    height: 30%;
    font-size: 15px;
}
.input-test-container button {
    width:10%;
}
</style>
