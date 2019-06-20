<template>
    <div>
        <router-link :to="{path:aitakeTo}" style="text-decoration:none;">
            <div class="aiassistant-pose-block">
                <p v-text="poseText">{{poseText}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        poseText: String,
        aitakeTo: String,
    }
}
</script>

<style>
@media (max-width: 899px) {
    .aiassistant-pose-block {
        width: 90vw;
        height: 115px;
        background: black;
        margin: 15px auto;
        border-radius: 10px; 
        display: flex;
        align-items: flex-end;
        padding: 10px;
        
    }
    .aiassistant-pose-block p {
        color: white;
    }
}
</style>
