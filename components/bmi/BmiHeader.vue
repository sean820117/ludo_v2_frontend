<template>
    <div class="bmi-haeder-container" >
        <div class="bmi-header-logo"></div>
        <div class="bmi-header-logo"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bmi-haeder-container {
    width: 100vw;
    height: 60px;
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
.bmi-header-logo {
    width: 50px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center center;   
}
.bmi-header-logo:first-child {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/header-logo.png'); 
}
.bmi-header-logo:last-child {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/header-icon.png'); 
}
</style>
