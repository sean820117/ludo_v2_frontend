<template>
    <div class="mamiyoga-assay-contact-back">
        <div class="mamiyoga-assay-contact-open">
            <slot></slot>
        </div>   
    </div>
</template>

<script>
export default {
    data:()=>({
    }),
}
</script>

<style>
 .mamiyoga-assay-contact-back {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}
.mamiyoga-assay-contact-open {
    width: 260px;
    height: 330px;
    background: white;
    border-radius: 20px;
    padding: 15px;
}
.mamiyoga-assay-contact-open p {
    color: #707070;
    text-align: center;
    font-size: 12px;
    margin: 30px 0 10px;
}
.mamiyoga-assay-contact-open img {
    display: block;
    margin: 0 auto;
    width: 50%;
}
@media (min-width:769px) {
    .mamiyoga-assay-contact-back {
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mamiyoga-assay-contact-open {
        width: 260px;
        height: 330px;
        background: white;
        border-radius: 20px;
        padding: 15px;
    }
    
}

</style>
