<template>
    <teacher-header/>
</template>

<script>
import TeacherHeader from '~/components/LudoTeacherHeader.vue'
export default {
    head () {
        return {
            // script: [
            //     { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
            //     { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js' },
            // ],
            link: [
                { rel: 'stylesheet', href: '/bootstrap.css' }
            ]
        } 
    },
    components: {
        TeacherHeader,
    },
}
</script>

<style>
*{
	position: relative;
}
html, body{
	padding: 0;
	margin: 0;
	height: 100%;
}
</style>
