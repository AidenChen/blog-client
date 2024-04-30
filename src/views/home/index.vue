<template>
  <div class="home">
    <div class="home-inner">
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
    </div>
    <div class="home-footer">
      <span>Copyright © Aiden Chen {{ new Date().getFullYear() }}</span> <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备18011597号</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Home'
});
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-content {
  width: 320px;
  text-align: center;
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
  text-align: center;
  height: 18px;
  line-height: 18px;
  margin: 16px 0;

  span {
    font-size: 12px;
  }

  a {
    font-size: 12px;
    color: #1f2328;
    text-decoration: none;
  }
}
</style>
