<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Tahoma, Arial, 'Microsoft YaHei', '微软雅黑', SimSun, '宋体',
    STXihei, '华文细黑', Heiti, '黑体', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
}
</style>
