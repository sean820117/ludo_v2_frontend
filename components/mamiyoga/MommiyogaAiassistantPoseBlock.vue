<template>
    <div>
        <router-link :to="go_record+'/mommiyoga/record/' + goRecord" style="text-decoration: none">
            <div class="aiassistant-pose-block" :style="{backgroundImage:'url(https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/course/course-preview-'+bgImg+'.jpg)'}">
                <p>{{poseText}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data:()=>({
        go_record: ''
    }),
    props: {
        poseText: String,
        goRecord: String,
        bgImg:String,
    },
    mounted(){
        if(this.$i18n.locale == 'zh-CN') {
            this.go_record = '/zh-CN'
        } else {
            this.go_record = ''
        }
    }
}
</script>

<style>

.aiassistant-pose-block {
    width: 90vw;
    height: 115px;
    /* background: black; */
    margin: 25px auto;
    border-radius: 10px; 
    display: flex;
    align-items: flex-end;
    padding: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 35% 60%;
    
}
.aiassistant-pose-block p {
    color: white;
}
@media (min-width: 769px) {
    .aiassistant-pose-block {
        width: 90%;
        height: 150px;
    }
}
</style>
