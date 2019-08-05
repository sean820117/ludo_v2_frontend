<template>
  <div :class="`radio-button ${active && 'active'} ${disabled && 'disabled'}`" role="button">
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
    disabled: Boolean,
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
  font-weight: 500;
  text-align: center;
  color: white;
  cursor: pointer;

  transition: all 0.2s;
  transition-timing-function: ease;
}
.radio-button.active {
  background-color: #FFCB57;
}
.radio-button:not(.disabled):hover {
  background-color: #FFCB57;
}
.radio-button:not(.active):not(.disabled):hover {
  transform: translate(0, -10%);
}
.disabled {
  cursor: not-allowed;
}
</style>
