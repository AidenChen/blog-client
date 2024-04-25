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
      <span>Copyright © Aiden Chen 2024</span> <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备18011597号</a>
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
  height: calc(100vh - 60px);
}

.home-inner {
  height: calc(100vh - 60px - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-content {
  width: 320px;
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
  text-align: center;
  height: 18px;
  line-height: 18px;
  margin: 16px 0;

  span {
    font-size: 12px;
  }

  a {
    font-size: 12px;
    color: #111;
    text-decoration: none;
  }
}
</style>
