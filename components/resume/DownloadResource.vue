<template>
    <div class="resource-container">
        <resource-cell :imgUrl="'Group 497.png'" :rcName="'履歷範本.pptx'" :rcInfo="'12.5 mb｜2,153 次下載'" />
        <resource-cell :imgUrl="'Group 519.png'" :rcName="'履歷範本.pptx'" :rcInfo="'5.5 mb｜1,677 次下載'" />
        <resource-cell :imgUrl="'Group 480.png'" :rcName="'履歷範本.pptx'" :rcInfo="'8.9 mb｜962 次下載'" />
    </div>
</template>
<script>
import ResourceCell from "~/components/resume/ResourceCell"
export default {
    components:{
        ResourceCell,
    }
}
</script>
<style>
.resource-container{
    margin-top: 30px;
}
</style>