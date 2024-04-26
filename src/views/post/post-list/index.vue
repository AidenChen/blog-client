<template>
  <div class="post-list">
    <ul class="post-items" v-load-more="{ selector: '.post-list' }" @load-more="handleLoadMore">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <p class="post-time">{{ post.created_at }}</p>
        <h1 class="post-title">
          <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
        </h1>
        <div class="post-abstract markdown-body" v-html="compiledMarkdown(post.abstract)"></div>
        <p>
          <router-link :to="'/posts/' + post.id" class="post-entry"> Read More... </router-link>
        </p>
        <p>
          <span v-for="tag in post.tags.sort((a: any, b: any) => a.name.localeCompare(b.name))" :key="tag.id" class="post-tag">
            {{ tag.name }}
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import marked from '@/assets/scripts/marked';
import { storeToRefs } from 'pinia';
import { useStateStore } from '@/stores/state';

defineOptions({
  name: 'PostList'
});

const route = useRoute();
const stateStore = useStateStore();
const { posts, selectTags, curPage, allPage } = storeToRefs(stateStore);

onMounted(() => {
  posts.value = [];
  curPage.value = 1;
  allPage.value = 0;
  if (route.query.tags) {
    selectTags.value = [{ id: route.query.tags }];
  } else {
    stateStore.indexPost();
  }
});

watch(() => selectTags.value, async (val: any[]) => {
  const tags = val.map((tag: any) => tag.id).join(',');
  if (!tags) return;
  await stateStore.indexPost({
    tags
  });
});

const compiledMarkdown = (value: any) => {
  return marked.parse(value);
};

const handleLoadMore = () => {
  if (curPage.value + 1 <= allPage.value) {
    curPage.value++
    const tags = selectTags.value.map((tag: any) => tag.id).join(',');
    stateStore.indexPost({ index: curPage.value, tags })
  } else {
    console.log('finished');
  }
}
</script>

<style lang="scss" scoped>
$black: #111;
$gray-dark: #999;
$gray: #eee;

.post-list {
  height: calc(100vh - 85px);
  padding-top: 25px;
  overflow-y: auto;
}

.post-items {
  list-style: none;
  margin: 0 auto;
  padding: 0 30px;
  max-width: calc(1000px - (30px * 2));
}

.post-item {
  margin: 0 auto 15px;
  border-bottom: 1px solid $gray;
}

.post-time {
  color: $gray-dark;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 2px;
}

.post-title {
  font-weight: 400;
  font-size: 24px;
  word-break: break-all;

  a {
    text-decoration: none;
    color: $black;
  }
}

.post-abstract {
  margin-bottom: 5px;
}

.post-entry {
  font-size: 14px;
  text-decoration: none;
  color: $gray-dark;
}

.post-tag {
  font-size: 14px;
  display: inline-block;
  border: 1px solid $gray;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px;
  color: $gray-dark;
}
</style>
