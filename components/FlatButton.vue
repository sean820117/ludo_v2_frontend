<template>
  <button
    :class=" hover + ' flat-button btn-' + size"
    :style="{background: bgColor, borderColor: borderColor, color:color}"
  >
    <a :href="link" :class="hover">
      <div class="text">{{text}}</div>
    </a>
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
    hover:String,
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

.flat-button a:hover {
  text-decoration: none;
  /* color: initial; */
}

.flat-button:focus {
  outline: 0;
  text-decoration: none;
  color: inherit;
}
/* .flat-button:hover {
  text-decoration: none;
  color: initial;
} */
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
.hover-fill-white:hover {
  background-color: white !important;
  border-color:white !important;
  color: #324D5B !important;
}

.hover-fill-yellow:hover {
  background-color: #FACB03 !important;
  border-color: #FACB03 !important;
  color: #324D5B !important;
}
.hover-fill-red:hover {
  background-color: #AA0018 !important;
  border-color: #AA0018 !important;
  color: white !important;
}
</style>
