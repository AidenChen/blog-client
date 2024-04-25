<template>
  <div class="post-list">
    <ul class="post-items" v-if="posts.length !== 0">
      <li v-for="(post, index) in posts" :key="index" class="post-item">
        <p class="post-time">{{ post.created_at }}</p>
        <h1 class="post-title">
          <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
        </h1>
        <div class="post-abstract markdown-body" v-html="compiledMarkdown(post.abstract)"></div>
        <p>
          <router-link :to="'/posts/' + post.id" class="post-entry"> Read More... </router-link>
        </p>
        <p>
          <span v-for="(tag, index) in post.tags" :key="index" class="post-tag">
            {{ tag.name }}
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import marked from '@/assets/scripts/marked';
import { useStateStore } from '@/stores/state';

defineOptions({
  name: 'PostList'
});

const route = useRoute();
const stateStore = useStateStore();
const { posts, selectTags, searchTags } = storeToRefs(stateStore);

if (route.query.tags) {
  selectTags.value = [{ id: route.query.tags }];
} else {
  await stateStore.indexPost();
}

watchEffect(async () => {
  await stateStore.indexPost({
    tags: searchTags.value.join(',')
  });
});

const compiledMarkdown = (value: any) => {
  return marked.parse(value);
};
</script>

<style lang="scss" scoped>
$black: #111;
$gray-dark: #999;
$gray: #eee;

.post-list {
  padding-top: 85px;
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

@media screen and (max-width: 850px) {
  .post-list {
    position: relative;
    padding-top: 80px;
  }

  .post-item {
    margin-bottom: 10px;
  }
}
</style>
