<template>
    <div class="resource-container">
        <resource-cell :imgUrl="'Group 497.png'" :rcName="'履歷範本1.ppt'" :rcInfo="'530KB'" :rcFile="'https://drive.google.com/uc?export=download&id=1D3SlXXm0Tnr5fD-BCobCpQsANI8wqKgt'" />
        <resource-cell :imgUrl="'Group 497.png'" :rcName="'履歷範本2.ppt'" :rcInfo="'535KB'" :rcFile="'https://drive.google.com/uc?export=download&id=1WiiabkqM6XHZg-ILfcBHD00zL0CnJ4zK'" />
        <resource-cell :imgUrl="'Group 497.png'" :rcName="'履歷範本3.ppt'" :rcInfo="'526KB'" :rcFile="'https://drive.google.com/uc?export=download&id=1UskEoio_eGn0t2iwA2Ev49340cpWDz5G'" />
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