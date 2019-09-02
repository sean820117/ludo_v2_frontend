<template>
    <div>
        <!-- <mamiyoga-course-menu bgImage="/mamiyoga/background-menu.png" menuTitle="日本mami人氣課程"></mamiyoga-course-menu> -->
        <mamiyoga-carousel-comments></mamiyoga-carousel-comments>
    </div>
</template>

<script>
import MamiyogaCourseMenu from '~/components/mamiyoga/MamiyogaCourseMenu.vue';
import MamiyogaCarouselComments from '~/components/mamiyoga/MamiyogaCarouselComments.vue'
export default {
    components: {
        MamiyogaCourseMenu,
        MamiyogaCarouselComments,
    }
}
</script>

<style>

</style>
