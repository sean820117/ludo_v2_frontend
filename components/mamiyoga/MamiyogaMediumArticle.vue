<template>
    <div>
        <!-- <div v-for="(post,i) in all_posts" :key="i">
            <h1 v-html="post.post_title"></h1>
            <div v-html="post.post_content"></div>
        </div> -->
        <div>
            <h1 class="medium-title" v-html="first_actirle[0].post_title"></h1>
            <div class="medium-content" v-html="first_actirle[0].post_content"></div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        m_data: '',
    },
    data:()=>({
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
            
            this.toJson(this.m_data)
            console.log(this.m_data)
            if(this.m_data) {
                this.first_actirle = this.all_posts.filter(post => post.post_category.includes("pregnancy"))
                console.log(this.first_actirle)
            }
        }
    },
    async asyncData () {
        const { data } = await axios.get('https://medium.com/feed/@ludonow')
        return { m_data: data }
    },
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
.medium-title {
    margin: 0 0 30px;
}
.medium-content p {
    font-size: 19px;
    color: #101010;
    margin-top: 30px;
}
.medium-content img{
    width: 100%;
    margin: 35px 0;
}
.medium-content blockquote::before {
    content: '． ． ．';
    color: #707070;
    margin: 0 auto 20px;
}
.medium-content blockquote {
    margin: 50px 0 0;
    font-size: 22px;
    font-style: italic;
    display: flex;
    flex-direction: column;
}
.medium-content a {
    color: #101010;
}
</style>