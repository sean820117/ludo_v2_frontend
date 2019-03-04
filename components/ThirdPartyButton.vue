<template>
  <div :class="`third-party-button media-${platform}`" role="button">
    <div class="logo"></div>
    <div class="text">Continue with {{socialMedia}}</div>
  </div>
</template>
<script>
const SOCIAL_MEDIAS = {
  fb: {
    name: 'Facebook',
  },
  google: {
    name: 'Google',
  },
}
export default {
  props: {
    platform: {
      type: String,
      required: true,
      validator(name) {
        return ['fb', 'google'].indexOf(name) !== -1;
      }
    },
  },
  computed: {
    socialMedia() {
      return SOCIAL_MEDIAS[this.platform].name
    },
  },
}
</script>
<style scoped>
.third-party-button {
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  cursor: pointer;
}
.logo {
  width: 50px;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: center;
}
.text {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.media-fb {
  border-color: #385C8E;
}
.media-fb .logo {
  background-image: url("~/assets/facebook.svg");
}
.media-fb .text {
  background-color: #385C8E;
  color: white;
}
.media-google {
  border-color: #248600;
}
.media-google .logo {
  background-image: url("~/assets/google.svg");
}
.media-google .text {
  background-color: #248600;
  color: white;
}
</style>
