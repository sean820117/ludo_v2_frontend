<template>
    <div>
        <course-header/>
        <div class="privacy-content">
            <br>
            <h1>履歷範本退款政策</h1>
            <br>
            退款適用條件
            <br>
            學員於購買後七日內尚未啟用課程，可憑訂單編號、註冊姓名、註冊之電子信箱帳號與檢附理由書申請退費。您可以寄信至 contact@flyingcrazyer.com 申請退款或針對您的履歷範本購買尋求協助。
            <br>
        </div>
        <course-footer/>
    </div>
</template>

<script>
import CourseFooter from "~/components/CourseFooter.vue";
import CourseHeader from "~/components/CourseHeader.vue";

export default {
    components: {
        CourseFooter,
        CourseHeader,
    },
}
</script>

<style>
.privacy-content {
    padding-top: 100px;
    padding-bottom: 20px;
    width: 80vw;
    margin-left: 10vw;
}
</style>
