<template>
  <header class="top-bar">
    <div class="top-bar-inner">
      <nav class="site-nav">
        <img class="top__menu" src="@/assets/images/menu.png" alt="菜单" />
        <div class="trigger" ref="trigger">
          <router-link class="header-link" to="/posts" @click.native="clearFilter"> POSTS </router-link>
          <router-link class="header-link" to="/tags">TAGS</router-link>
          <router-link class="header-link" to="/profile">PROFILE</router-link>
        </div>
      </nav>
      <router-link class="top__title" to="/home"> Aiden Notes </router-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useStateStore } from '@/stores/state';

const stateStore = useStateStore();
const { posts, selectTags, curPage, allPage } = storeToRefs(stateStore);

defineOptions({
  name: 'TopBar'
});

const clearFilter = () => {
  posts.value = [];
  curPage.value = 1;
  allPage.value = 0;
  selectTags.value = [];
  stateStore.indexPost();
};
</script>

<style lang="scss" scoped>
.top-bar {
  position: sticky;
  top: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
  border-bottom: 1px solid #eee;
  background: white;
  z-index: 3;
  box-sizing: border-box;
}

.top-bar-inner {
  height: 60px;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 940px;
}

.top__title {
  text-decoration: none;
  color: #acacac;
  font-weight: 300;
  font-size: 30px;
  letter-spacing: -1px;
}

.top__menu {
  width: 32px;
  height: 32px;
  display: none;
}

.site-nav {
  float: right;
}

.header-link {
  display: block;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  float: left;
  text-decoration: none;
  color: #111;
}

.header-link:not(:last-child) {
  margin-right: 20px;
}

@media screen and (max-width: 850px) {
  .top-bar {
    text-align: center;
    padding: 0;
  }

  .top__menu {
    display: block;
    float: right;
  }

  .site-nav {
    text-align: right;
    background-color: #fdfdfd;
    border: 1px solid #eee;
    border-radius: 5px;
    position: absolute;
    padding: 1px;
    right: 12px;
    top: 12px;
  }

  .trigger {
    clear: both;
    display: none;
  }

  .site-nav:hover .trigger {
    display: block;
  }

  .header-link {
    float: none;
    padding: 5px 10px;
    margin-left: 20px;
    margin-right: 0 !important;
    height: 30px;
    line-height: 30px;
  }
}
</style>
