<template>
    <div>
        <course-header bgColor="transparent" color="#76FF00" />
        <practice-area></practice-area>
    </div>
    
</template>

<script>
import CourseHeader from '~/components/CourseHeader.vue';
import PracticeArea from '~/components/fitness/PracticeArea.vue';
export default {
    components: {
        CourseHeader,
        PracticeArea,
    }
}
</script>

<style>

</style>
