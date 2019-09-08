<template>
    <div>
        <button style="width:100px;height:50px;" @click="getFrequency">test</button>
    </div>
</template>

<script>

export default {
    data:()=>({
        count: 0,
    }),
    components: {
        
    },
    mounted(){
        if(localStorage['user_use_count']) {
            this.count = localStorage['user_use_count']
        }
    },
    methods: {
        getFrequency(){
            this.count++
            console.log(this.count)
            localStorage['user_use_count'] = this.count
        }
    },
    watch:{
        count(){
            if(this.count >= 3) {
                console.log('error')
            }
        }
    }
}
</script>

<style>

</style>
