<template>
    <div>
        <!-- 愛心進度條 -->
        <div v-if="loading" id="heart-loading">
            <svg id="loading-icon" viewBox="0 0 32 29.6" :class="extraClass">
                <path class="path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
	            C30,20.335,16,28.261,16,28.261z" fill="none" stroke-width="1" stroke="#FF9898"></path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        loading:Boolean,
        extraClass: String,
    }
}
</script>

<style>
#heart-loading {
    position: fixed;
    width: 100%;
    min-height: -webkit-fill-available;
    z-index: 2000;
    background: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>