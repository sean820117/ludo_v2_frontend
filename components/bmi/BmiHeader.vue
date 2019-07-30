<template>
    <header class="bmi-haeder-container" >
        <div class="bmi-header-logo">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/header-logo.png" alt="BMI計算器">
        </div>
        <div class="bmi-header-logo">
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/header-icon.png" alt="BMI怎麼計算">
        </div>
    </header>
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
    display: flex;
    align-items: center;
}
.bmi-header-logo:first-child img {
    height: 60%;
}
.bmi-header-logo:last-child img {
    height: 100%;
}
/* .bmi-header-logo:first-child {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/header-logo.png'); 
}
.bmi-header-logo:last-child {
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/bmi/header-icon.png'); 
} */
@media (min-width:769px) {
    .bmi-header-logo {
        width: 80px;
    }
}
</style>
