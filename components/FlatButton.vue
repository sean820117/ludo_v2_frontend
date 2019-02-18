<template>
  <button :class="'flat-button btn-' + size" :style="{background: bgColor, color}">
    <div class="text">{{text}}</div>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    bgColor: String,
    color: String,
    size: {
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'big'].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style>
.flat-button {
  min-width: 81px;
  height: 40px;
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
.flat-button:focus {
  outline: 0;
}
.flat-button:hover {
  text-decoration: underline;
}
.btn-big {
  width: 200px;
  height: 50px;
  border: 3px solid lightgrey;
  line-height: 45px;
  font-size: 20px;
  font-weight: 50;
}
.btn-small {
  width: 100px;
  height: 35px;
  border: 2px solid grey;
  text-decoration: none;
  font-size: 18px;
  line-height: 30px;
}
</style>
