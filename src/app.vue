<template>
  <div id="app">
    <NuxtLayout>
      <NuxtLayout name="top-bar" />
      <!-- 路由基座 -->
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'App'
});
</script>

<style lang="scss" scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, PingFang SC, Hiragino Sans GB,
    Droid Sans Fallback, Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
  min-height: 100vh;
}
</style>
