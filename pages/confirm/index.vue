<template>
  <body>
    <main class="container">
      <section class="title">
        <h1>《讓備審飛》線上課程付款頁面</h1>
      </section>
      <div class="row">
        <section class="choices col-lg-6 col-sm-12">
          <radio-button :active="true" text="$499 一次一堂剛剛好" />
          <radio-button text="$399 放榜前準備價" />
          <radio-button text="$4999 全部買起來挑科系" />
        </section>
        <section class="purchase col-lg-6 col-sm-12">
          <label for="customer">購買人</label><input id="customer" type="text" />
          <label for="phone">聯絡電話</label><input id="phone" type="text" />
          <label for="email">電子信箱</label><input id="email" type="text" />
          <div role="button" class="forwarding">前往付款</div>
        </section>
      </div>
    </main>
  </body>
</template>
<script>
import RadioButton from "~/components/confirm/RadioButton.vue";
export default {
  head() {
    return {
      link: [{ rel: "stylesheet", href: "/bootstrap.css" }]
    };
  },
  components: {
    RadioButton,
  }
};
</script>
<style scoped>
body {
  box-sizing: border-box;
  height: 100vh;
}
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  margin-bottom: 5%;
}
h1 {
  color: grey;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
}
.choices {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.choices .radio-button {
  margin: 10px;
  max-width: 300px;
}
.purchase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}
.forwarding {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: #E0185D;
  color: white;
  text-align: center;
  cursor: pointer;
}
@media (min-width: 900px) {
  h1 {
    font-size: 60px;
  }
  .forwarding {
    position: inherit;
    max-width: 150px;
    margin-top: 30px;
    border-radius: 10px;
  }
  .forwarding:hover {
    transform: translate(0, -5%);
  }
}
</style>
