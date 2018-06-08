<template>
  <div class="home">
    <div class="home-particles" id="particles"></div>
    <div class="home-content">
      <h1 class="home-title">Aiden Chen</h1>
      <h4 class="home-description">Composing, Code & Things in Between&nbsp;</h4>
      <p>
        <router-link class="home-link" :to="'/posts'">Blog</router-link>
      </p>
      <p>
        <a class="home-link" target="_blank" href="https://github.com/AidenChen">Github</a>
      </p>
      <p>
        <a class="home-link" target="_blank" href="https://weibo.com/1174456280">微博</a>
      </p>
      <p>
        <a class="home-link" target="_blank" href="http://music.163.com/#/radio/?id=6908010&userid=65098796">电台</a>
      </p>
    </div>
  </div>
</template>

<script>
import 'particles.js/particles';
import particles from '../../assets/js/particles';

export default {
  name: 'home',
  mounted() {
    window.particlesJS('particles', particles);
  },
};
</script>

<style lang="scss">
.home {
  height: 100%;
}

.home-particles {
  height: 100%;
  overflow-y: hidden;
}

.home-content {
  width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -160px;
  margin-left: -160px;
  text-align: center;
}

.home-title {
  color: #111;
}

.home-description {
  color: #999;
}

.home-link {
  color: #999;
  text-decoration: none;
}
</style>
