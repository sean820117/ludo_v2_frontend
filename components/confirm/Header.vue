<template>
  <header class="header">
    <div class="logo-wrapper">
      <a href="/go2university"><div class="logo"/></a>
    </div>
    <div class="back"><span role="button" class="back-button" @click="$router.go(-1)">&lt; 返回</span></div>
  </header>
</template>
<style scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.logo-wrapper {
  flex: 3;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.logo {
  width: 120px;
  height: 35px;
  background-image: url("~assets/header-logo.png");
  background-size: cover;
}
.back {
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.back-button {
  padding: 5px;
  border: 2px solid grey;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;
}
.back-button:hover {
  border-color: #FFCB57;
  background-color: #FFCB57;
  color: white;
}
@media (min-width: 900px) {
  .header {
    position: fixed;
    height: 80px;
  }
  .logo-wrapper {
    flex: 6;
    padding-left: 100px;
  }
  .logo {
    width: 120px;
    height: 35px;
    background-image: url("~assets/header-logo.png");
    background-size: cover;
  }
  .back {
    flex: 1;
    width: 10%;
    display: flex;
    align-items: center;
  }
}
</style>
