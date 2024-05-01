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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, Helvetica, Arial, PingFang SC, Microsoft YaHei UI, Microsoft YaHei, Source Han Sans CN, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1f2328;
}
</style>
