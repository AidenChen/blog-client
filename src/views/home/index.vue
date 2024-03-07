<template>
  <div class="home">
    <div class="home-content">
      <h1 class="home-title">Aiden Chen</h1>
      <h4 class="home-description">Think twice & Code once</h4>
      <p>
        <router-link class="home-link" :to="'/posts'">Blog</router-link>
      </p>
      <p>
        <a class="home-link" target="_blank" href="https://github.com/AidenChen">Github</a>
      </p>
      <p>
        <a class="home-link" target="_blank" href="https://music.163.com/#/djradio?id=6908010">Radio</a>
      </p>
    </div>
    <p class="home-footer">Copyright © Aiden Chen 2024 <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备18011597号</a></p>
  </div>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'Home'
});
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
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
    text-decoration: none;
  }
}
</style>
