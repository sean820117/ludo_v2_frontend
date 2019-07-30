<template>
    <header class="bmi-result-header">
        <div class="go-back" @click="$router.go(-1)"></div>
        <h5>{{title}}</h5>
        <div class="just-block"></div>
    </header>
</template>

<script>
export default {
    props: {
        title: String,
    }
}
</script>

<style>
.bmi-result-header {
    width: 100vw;
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.go-back {
    width: 20px;
    height: 20px;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/bmi-goback.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; 
    cursor: pointer;
}
.just-block {
    width: 20px;
    height: 20px;
}
.bmi-result-header h5 {
    font-size: 21px;
    color: #3855A3;
    display: block;
}
</style>
