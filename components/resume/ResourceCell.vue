<template>
    <div class="resource-cell">
        <img class="rc-icon" :src="imgUrl" />
        <div class="rc-text">
            <div class="rc-name">{{rcName}}</div>
            <div class="rc-info">{{rcInfo}}</div>
        </div>
        <img class="download-icon" src="baseline_get_app_black_18dp.png" />
    </div>
</template>
<script>
export default {
    props:{
        imgUrl: String,
        rcName: String,
        rcInfo: String
    },
    data:() => ({
        imgUrl: "Group 497.png",
        rcName: "Resource name",
        rcInfo: "Resource info"
    })
}
</script>
<style>
.resource-cell {
    position: relative;
    background: white;
    margin: 10px 0px;
    width: 100%;
    height: 56px;
    box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
}
.rc-icon {
    position: absolute;
    left: 9px;
    top: 8px;
}
.rc-text{
    top: 11px;
    left: 77px;
    position: absolute;
    display: grid;
    grid-template-rows: 21px 14px;
}
.rc-name {
    font-size: 13px;
    color: black;
}
.rc-info {
    font-size: 10px;
    color: #8F8F8F;
}
.download-icon{
    position: absolute;
    top: 19px;
    right: 21px;
}
</style>