<template>
    <div>
        <course-header bgColor="transparent" color="#76FF00" />
        <practice-area></practice-area>
    </div>

</template>

<script>
import CourseHeader from '~/components/CourseHeader.vue';
import PracticeArea from '~/components/fitness/PracticeArea.vue';

import Vuex from 'vuex';
import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    // small: 400,
    mobile: 992,
    desktop: Infinity,
  }
});

export default {
    components: {
        CourseHeader,
        PracticeArea,
    },
    data:()=> ({
        is_data_fetched:false,
    }),
}
</script>

<style>

</style>
