<template>
    <div class="search_bar">
        <img class="search_icon" src="/search-icon.svg" alt="">
        <input class="search_input" type="text" :placeholder="placeholder"/>
    </div>
</template>

<script>
export default {
    data:() => ({
        placeholder: "",
    }),
}
</script>

<style>
.search_bar {
    width: 348px;
    height: 28px;
    border-radius: 50px;
    background-color: #efefef;
    text-align: left;
    display: inline-flex;
    align-items: center;
}
.search_icon {
    width: 19.8px;
    height: 19.8px;
    margin-left:9.3px;
    /* margin-top: 2.8px;  */
}
.search_input {
    border: none;
    background: transparent;
    outline: none;
    display: inline-flex;
    width: 95%;
}
</style>
