<template>
  <span>
    <label :for="name">{{text}}</label>
    <input
      :id="name"
      :type="type"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </span>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>
<style scoped>
label, input {
  width: 100%;
}
label {
  text-align: left;
  color: grey;
  font-size: 14px;
  font-weight: 400;
}
input {
  margin-bottom: 5px;
  height: 30px;
  border: none;
  border-bottom: 1px solid grey;
}
</style>
