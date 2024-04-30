<template>
  <header class="top-bar">
    <div class="top-bar-inner">
      <nav class="top-bar-nav">
        <img @click.native="handleClick" ref="menuRef" class="top-bar-menu" src="@/assets/images/menu.png" alt="菜单" />
        <div class="trigger" :class="{ hover: isHover }">
          <router-link class="top-bar-link" to="/posts" @click.native="clearFilter">POSTS</router-link>
          <router-link class="top-bar-link" to="/tags">TAGS</router-link>
          <router-link class="top-bar-link" to="/profile">PROFILE</router-link>
        </div>
      </nav>
      <router-link class="top-bar-title" to="/home">Aiden Notes</router-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { onClickOutside } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useStateStore } from '@/stores/state';

defineOptions({
  name: 'TopBar'
});

const route = useRoute();
const stateStore = useStateStore();
const { posts, curPage, allPage } = storeToRefs(stateStore);

const clearFilter = () => {
  if (route.name !== 'post-list') {
    return;
  }
  posts.value = [];
  curPage.value = 1;
  allPage.value = 0;
  // 有可能从列表页跳到列表页，tags直接置空
  stateStore.indexPost();
};

const isHover = ref<boolean>(false);
const handleClick = () => {
  isHover.value = true;
}

const menuRef = ref<any>(null);
onClickOutside(menuRef, () => {
  isHover.value = false;
});
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
  @extend %maxWidth;
}

.top-bar-title {
  text-decoration: none;
  color: #acacac;
  font-weight: 300;
  font-size: 30px;
  letter-spacing: -1px;
}

.top-bar-menu {
  width: 32px;
  height: 32px;
  display: none;
  cursor: pointer;
}

.top-bar-nav {
  float: right;
}

.top-bar-link {
  display: block;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  float: left;
  text-decoration: none;
  color: #1f2328;
}

.top-bar-link:not(:last-child) {
  margin-right: 20px;
}

@media screen and (max-width: 1000px) {
  .top-bar {
    text-align: center;
    padding: 0;
  }

  .top-bar-menu {
    display: block;
    float: right;
  }

  .top-bar-nav {
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

    &.hover {
      display: block !important;
    }
  }

  .top-bar-link {
    float: none;
    padding: 5px 10px;
    margin-left: 20px;
    margin-right: 0 !important;
    height: 30px;
    line-height: 30px;
  }
}
</style>
