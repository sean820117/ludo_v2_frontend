<template>
    <div>
        <router-link :to="'/mommiyoga/record/' + goRecord" style="color:#000;">
            <div class="aiassistant-pose-block">
                <p>{{poseText}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        poseText: String,
        goRecord: String,
    }
}
</script>

<style>

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
@media (min-width: 769px) {
    .aiassistant-pose-block {
        width: 90%;
        height: 150px;
    }
}
</style>
