<template>
    <div>
        <mamiyoga-every-course courseTitle="骨盆矯正" :courseTime="7" :poseHave="3" src="/mamiyoga/unit01.svg"></mamiyoga-every-course>
    </div>
</template>

<script>
import MamiyogaEveryCourse from '~/components/mamiyoga/MamiyogaEveryCourse.vue'
export default {
    components: {
        MamiyogaEveryCourse,
    }
}
</script>

<style>

</style>
