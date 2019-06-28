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
        height: 300px;
        background: white;
        border-radius: 20px;
        padding: 15px;
    }
}
@media (max-width:768px) {
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
    }
    .mamiyoga-assay-contact-open {
        width: 260px;
        height: 300px;
        background: white;
        border-radius: 20px;
        padding: 15px;
    }
}
</style>
