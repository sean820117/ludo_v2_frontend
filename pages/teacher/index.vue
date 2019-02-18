<template>
<body>
  <section class="intro">
      <div class="wrapper container">
        <div class="row align-items-center">
            <section class="course col-lg-6 col-sm-12 align-self-center">
                <h3>你聽過安麗嗎？</h3>
                <div class="actions">
                    <flat-button size="big" text="課程介紹"/>
                </div>
            </section>
            <section class="teacher col-lg-6 col-sm-12">
                <div class="profile" />
                <div class="name">您老師</div>
                <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam sapiente mollitia esse voluptatem, aliquid ea eius alias cum! Culpa numquam consequuntur dolore, velit accusamus porro ut modi doloribus aliquid praesentium laudantium corporis voluptate eos, doloremque iure, iusto mollitia quidem quae corrupti assumenda cum eveniet eligendi deserunt sed nemo.</div>
            </section>
        </div>
    </div>
  </section>
  <section class="all-courses">
      <h2 class="title">所有課程</h2>
  </section>
  <section class="course-intro">
      <h2 class="title">課程簡介</h2>
  </section>
</body>
</template>

<script>
import FlatButton from "~/components/FlatButton.vue";
export default {
    head() {
        return {
            link: [
                { rel: 'stylesheet', href: '/bootstrap.css' },
            ],
        }
    },
  components: {
    FlatButton
  }
};
</script>

<style scoped>
* {
  position: relative;
}
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
h2.title{
    font-weight: 200;
    font-size: 35px;
    text-align: center;
}
.intro {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background-color: #324d5b;
  color: lightgrey;
}
.wrapper{
    height: 90vh;
}
.row{
    height: 100%;
}
.course{
    text-align: center;
}
.course h3{
    margin-bottom: 35px;
    font-weight: 200;
    font-size: 50px;
}
.teacher .profile{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url('https://via.placeholder.com/300.png');
    background-position: center;
}
.teacher .name{
    font-size: 25px;
}
.all-courses{
    width: 100%;
    background-color: white;
    padding: 20px;
}
.course-intro{
    width: 100%;
    background-color: #F0F0F0;
    padding: 20px;
}
</style>
