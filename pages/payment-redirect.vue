<template>
    <div>
        <course-header/>
        <div class="redirect-body">
            <h1 class="redirect-title">{{ result }}</h1>
            <router-link to="/go2university" class="redirect-button">返回首頁</router-link>
        </div>
        <course-footer/>
    </div>
</template>

<script>
import CourseHeader from '~/components/CourseHeader.vue'
import CourseFooter from '~/components/CourseFooter.vue'

export default {
    data:() => ({
        result:"",
        result_list:[
            "付款失敗，請重新嘗試",
            "付款成功！\n提醒您，您的課程序號將會於付款後一個工作天內寄送至您購買時填寫之電子信箱",
            "生成代碼成功！\n請至信箱收取超商繳費代碼（發信時間約1~10分鐘）",
        ]
    }),
    components: {
		CourseHeader,
		CourseFooter,
    },
    created() {
        const query_result = this.$route.query.result;
        if (query_result && query_result == 1 || query_result == 2 || query_result == 0) {
            this.result = this.result_list[parseInt(query_result)]
        } else {
            this.result = '載入錯誤';
        }
    },
}
</script>

<style scoped>
.redirect-body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.redirect-title {
    font-size: 40px;
    margin: 0 0 50px 0;
    width: 70vw;
    text-align: center;
    word-wrap: break-word;
    white-space: pre-wrap;
}
.redirect-button {
  box-sizing: border-box;
  height: 60px;
  width: 200px;
  border-radius: 10px;
  background-color: #FFCB57;
  line-height: 60px;
  font-size: 18px;
  font-weight: 50;
  text-align: center;
  text-decoration: none;
  color: white;
  cursor: pointer;

  transition: all 0.2s;
  transition-timing-function: ease;
}
</style>
