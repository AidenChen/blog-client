<template>
  <div class="home">
    <div class="home__particles" id="particles"></div>
    <div class="home__content">
      <h1 class="home__title">Aiden Chen</h1>
      <h4 class="home__description">Composing, Code & Things in Between&nbsp;</h4>
      <p><router-link class="home__link" :to="'/articles'">Blog</router-link></p>
      <p><a class="home__link" target="_blank" href="https://github.com/AidenChen">Github</a></p>
      <p><a class="home__link" target="_blank" href="https://weibo.com/1174456280">微博</a></p>
      <p><a class="home__link" target="_blank" href="http://music.163.com/#/radio/?id=6908010&userid=65098796">电台</a></p>
    </div>
  </div>
</template>

<script>
import 'particles.js/particles';
import particles from '../assets/js/particles';

export default {
  name: 'Home',
  mounted() {
    window.particlesJS('particles', particles);
  }
};
</script>

<style lang="scss">
  .home {
    height: 100%;
  }

  .home__particles {
    height: 100%;
    overflow-y: hidden;
  }

  .home__content {
    width: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -160px;
    margin-left: -160px;
    text-align: center;
  }

  .home__title {
    color: #6289ad;
  }

  .home__description {
    color: #9caebf;
  }

  .home__link {
    color: #9caebf;
    text-decoration: none;
  }
</style>
