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
        <a class="home-link" target="_blank" href="https://music.163.com/#/djradio?id=6908010">电台</a>
      </p>
    </div>
    <p class="home-footer">Copyright © 2017-2020 by Aiden Chen <a href="http://www.beian.miit.gov.cn/">粤ICP备18011597号</a></p>
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

.home-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  a {
    color: #111;
  }
}
</style>
