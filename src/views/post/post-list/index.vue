<template>
  <div class="post-list">
    <ul class="post-list-inner">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <p class="post-time">{{ post.created_at }}</p>
        <h1 class="post-title">
          <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
        </h1>
        <div v-if="post.abstract" class="post-abstract markdown-body" v-html="compiledMarkdown(post.abstract)"></div>
        <p v-if="post.abstract">
          <router-link :to="'/posts/' + post.id" class="post-entry"> Read More... </router-link>
        </p>
        <p v-if="post.tags.length" style="margin-top: 0;">
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
const { posts, curPage, allPage } = storeToRefs(stateStore);

posts.value = [];
curPage.value = 1;
allPage.value = 0;
const tags = ref<string>('');
if (route.query.tags) {
  tags.value = route.query.tags as string;
}
await stateStore.indexPost({ tags: tags.value });

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const compiledMarkdown = (value: any) => {
  return marked.parse(value);
};

const handleScroll = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
  const clientHeight = window.innerHeight;
  if (scrollHeight - (scrollTop + clientHeight) <= 0.5) {
    handleLoadMore();
  }
}

const handleLoadMore = () => {
  if (curPage.value + 1 <= allPage.value) {
    curPage.value++
    // 重新获取tags，因为有可能从当前页跳到当前页，tags没有刷新
    stateStore.indexPost({ index: curPage.value, tags: route.query.tags as string ?? '' });
  } else {
    console.log('finished');
  }
}
</script>

<style lang="scss" scoped>
$gray-dark: #999;
$gray: #eee;

.post-list {
  padding-top: 24px;
  padding-bottom: 24px;
}

.post-list-inner {
  list-style: none;
  margin: 0 auto;
  @extend %maxWidth;
}

.post-item {
  margin: 0 auto 16px;
  border-bottom: 1px solid $gray;
  box-sizing: border-box;

  &:last-child {
    margin: 0;
  }
}

.post-time {
  color: $gray-dark;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 0;
}

.post-title {
  font-weight: 400;
  font-size: 24px;
  word-break: break-all;

  a {
    text-decoration: none;
    color: #1f2328;
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
