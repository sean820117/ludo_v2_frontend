<template>
  <button
    :class="'flat-button btn-' + size"
    :style="{background: bgColor, borderColor: borderColor, color:color}"
  >
    <router-link :to="link">
      <div class="text">{{text}}</div>
    </router-link>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    bgColor: String,
    color: String,
    borderColor:String,
    link:String,
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
  border-radius: 30px;
  display: inline-block;
  background-color: transparent;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 50;
  line-height: 36px;
  cursor: pointer;
}
.flat-button a {
  text-decoration: none;
  color: inherit;
}

.flat-button a:active {
  text-decoration: none;
  color: inherit;
}

.flat-button:focus {
  outline: 0;
  text-decoration: none;
  color: inherit;
}
.flat-button:hover {
  text-decoration: underline;
}
.btn-big {
  width: 200px;
  height: 50px;
  border: 3px solid white;
  line-height: 45px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
.btn-medium {
  width: 150px;
  height: 37px;
  border: 2px solid white;
  text-decoration: none;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
}
.btn-small {
  width: 100px;
  height: 35px;
  border: 2px solid white;
  text-decoration: none;
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
}
</style>
