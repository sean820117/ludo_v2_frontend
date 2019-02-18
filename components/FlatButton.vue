<template>
    <button 
        :class="'flat-button ' + size"
        :style="{background: bgColor}"
    >
        <div class="text">{{text}}</div>
    </button>
</template>

<script>
export default {
    props: {
        text: String,
        bgColor: String,
        size: {
            default: 'medium',
            validator: function (value) {
                return ['small', 'medium', 'big'].indexOf(value) !== -1
            }
        },
    },
}
</script>

<style>
.flat-button{
    min-width: 81px;
    height: 40px;
    border: 3px solid lightgrey;
    border-radius: 50px;
    display: inline-block;
    background-color: transparent;
    color: lightgrey;
    text-align: center;
    font-size: 20px;
    font-weight: 50;
    line-height: 36px;
    cursor: pointer;
}
.flat-button:focus{
    outline: 0;
}
.big{
    width: 200px;
    height: 50px;
    line-height: 45px;
    font-size: 20px;
    font-weight: 50;
}
</style>
