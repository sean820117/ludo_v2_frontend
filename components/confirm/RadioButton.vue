<template>
  <div :class="`radio-button ${active && 'active'}`" role="button">
    {{text}}
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    active: {
      type: Boolean,
      default: false,
    },
  }
}
</script>
<style scoped>
.radio-button {
  box-sizing: border-box;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  background-color: lightgrey;
  line-height: 60px;
  font-size: 18px;
  font-weight: 50;
  text-align: center;
  color: white;
  cursor: pointer;

  transition: all 0.2s;
  transition-timing-function: ease;
}
.radio-button.active {
  background-color: #FFCB57;
}
.radio-button:hover {
  background-color: #FFCB57;
}
.radio-button:not(.active):hover {
  transform: translate(0, -10%);
}
</style>
