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
          <button>前往付款</button>
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
@media (min-width: 900px) {
  h1 {
    font-size: 60px;
  }
}
</style>
