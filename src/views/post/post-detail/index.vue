<template>
  <div class="post-detail">
    <div class="post-detail-inner">
      <div class="post-wrapper" ref="post">
        <h1 class="post-title">{{ currentPost.title }}</h1>
        <p class="post-time">{{ currentPost.created_at }}</p>
        <div class="markdown-body" v-html="currentPostCompile" ref="content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useStateStore } from '@/stores/state';

defineOptions({
  name: 'PostDetail'
});

const route = useRoute();
const stateStore = useStateStore();
const { currentPost, currentPostCompile } = storeToRefs(stateStore);

await stateStore.showPost(route.params.id as string);
useHead({
  title: currentPost.value.title
});
</script>

<style lang="scss" scoped>
.post-detail {
  padding-top: 85px;
}

.post-detail-inner {
  margin: 0 auto;
  padding: 0 30px;
  max-width: calc(1000px - (30px * 2));
}

.post-wrapper {
  margin-left: 260px;
  min-height: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 80px;
  margin-bottom: 30px;
}

.post-title {
  font-weight: 400;
  font-size: 24px;
  word-break: break-all;
}

.post-time {
  color: #7f8c8d;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 14px;
  margin-top: 2px;
}

@media screen and (max-width: 850px) {
  .post-detail {
    position: relative;
    padding-top: 80px;
  }

  .post-wrapper {
    margin-left: 0;
  }
}
</style>
