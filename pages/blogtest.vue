<template>
    <div>
        <!-- <div v-for="(post,i) in all_posts" :key="i">
            <h1 v-html="post.post_title"></h1>
            <div v-html="post.post_content"></div>
        </div> -->
        <div>
            <h1 v-html="first_actirle[0].post_title"></h1>
            <div v-html="first_actirle[0].post_content"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from '~/config/axios-config';

export default {
    data:()=>({
        m_data: [],
        all_posts: [
            {
                post_title: '',
                post_content: '',
                post_category: []
            }
        ],
        first_actirle: [
            {
                post_title: '',
                post_content: '',
                post_category: []
            }
        ],
    }),
    async mounted(){
        if(process.client) {
            // console.log(this.m_data)
            const { data } = await axios.get('/apis/mamiyoga-get-all-medium-articles')
            this.m_data = data
            console.log(this.m_data)
            // this.toJson(this.m_data)

            this.first_actirle = this.m_data.filter(post => post.post_category.includes("pregnancy"))
            

            // this.first_actirle = this.all_posts.filter(post => post.post_category.includes("pregnancy"))
            // console.log(this.first_actirle)
        }
    },
    // async asyncData () {
    //     // const { data } = await axios.get('https://medium.com/feed/@ludonow')
    //     const { data } = await axios.get('/api/mamiyoga-get-all-medium-articles')
    //     return { m_data: data }
    // },
    methods:{
        toJson(xml){
            let parser = new DOMParser;
            let x_doc = parser.parseFromString(xml,"text/xml")
            let posts = x_doc.getElementsByTagName("item");
            for (let i = 0; i < posts.length; i++) {
                const title = posts[i].getElementsByTagName('title');
                const content = posts[i].getElementsByTagName('content:encoded')
                const category = posts[i].getElementsByTagName('category')
                let tag_array = []
                for (let j = 0; j < category.length; j++) {
                    const tag = category[j].textContent;
                    tag_array.push(tag)
                }
                const obj = {
                    post_title: title[0].textContent,
                    post_content: content[0].textContent,
                    post_category: tag_array
                }
                this.all_posts.push(obj)
            }
        }
    }
}
</script>

<style>
h1{
    color: #24798f;
    font-size: 31px;
    font-weight: bold;
    text-align: center;
    margin: 30px 0 40px;
}
</style>