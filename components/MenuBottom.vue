<template>
    <div class="menu_bottom">
        <div class="menu_close_icon">
            <div class="menu_close_icon_line"></div>
            <div class="menu_close_icon_line"></div>
            <div class="menu_close_icon_line"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.menu_bottom {
    width: 375px;
    height: 44px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    background-color: #2e384e;
    display: flex;
    position: fixed;
    bottom: 0px;
    align-items: center;
    justify-content: center;
}
.menu_close_icon {
    margin-top: 3.4px;
}
.menu_close_icon_line {
    width: 26.7px;
    height: 4.6px;
    /* margin-top: 2px; */
    margin-bottom: 3.4px;
    border-radius: 10px;
    background-color: #ffffff;
}
</style>
