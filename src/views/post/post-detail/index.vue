<template>
  <div class="post-detail">
    <div class="post-detail-inner">
      <div class="catalog">
        <p class="catalog-title" v-show="catalog.length">CATALOG</p>
        <ul class="catalog-items">
          <li v-for="(item, index) in catalog" :key="index" class="catalog-item" :class="'catalog-item-' + item.tagName">
            <a class="catalog-link" :class="{ 'catalog-link-active': index === currentIndex }" :href="item.href" @click.prevent="handleScroll(item.href)">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <div class="post" ref="post">
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

const catalog = ref<any[]>([]);
const listHeight = ref<any[]>([]);
const scrollY = ref<number>(0);

const currentIndex = computed(() => {
  for (let i = 0; i < listHeight.value.length; i += 1) {
    const height1 = listHeight.value[i];
    const height2 = listHeight.value[i + 1];
    if (!height2 || (scrollY.value >= height1 && scrollY.value < height2)) {
      return i;
    }
  }
  return 0;
});

const updateScroll = () => {
  scrollY.value = Math.abs(Math.round(window.scrollY));
};

const initScroll = () => {
  window.addEventListener('scroll', updateScroll);
};

const post = ref<any>(null);
const content = ref<any>(null);
const calculateHeight = () => {
  const catalogList = post.value.getElementsByClassName('catalog-item-hook');
  let height = 0;
  listHeight.value.push(height);
  for (let i = 0; i < catalogList.length; i += 1) {
    const item = catalogList[i];
    height = item.getBoundingClientRect().top;
    listHeight.value.push(height);
  }
};

const handleScroll = (href: string) => {
  const target = (document.querySelector(href) ?? { offsetTop: 0 }) as HTMLElement;
  window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
}

await stateStore.showPost(route.params.id as string);
useHead({
  title: currentPost.value.title
});

onMounted(() => {
  if (process.client) {
    // 提取文章标签，生成目录
    Array.from(content.value.querySelectorAll('h1,h2,h3,h4,h5,h6')).forEach((item: any, index) => {
      /* eslint-disable no-param-reassign */
      item.id = `${item.localName}-${index}`;
      item.className = 'catalog-item-hook';
      catalog.value.push({
        tagName: item.localName,
        text: item.innerText,
        href: `#${item.localName}-${index}`
      });
    });

    // 初始化滚动
    initScroll();

    // 计算高度
    calculateHeight();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll);
});
</script>

<style lang="scss" scoped>
.post-detail {
  padding-top: 24px;
  padding-bottom: 24px;
}

.post-detail-inner {
  margin: 0 auto;
  @extend %maxWidth;
}

.post {
  margin-left: 256px;
}

.post-title {
  margin-top: 0;
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

.catalog {
  position: fixed;
  width: 240px;
  overflow-y: auto;
  max-height: calc(100vh - 60px - 17px - 24px);
  padding-bottom: 24px;
}

.catalog-title {
  margin: 0 0 8px;
  color: #1f2328;
  font-size: 18px;
}

.catalog-items {
  list-style: square;
  padding: 0;
  margin: 0;
}

.catalog-item {
  text-align: left;
  word-wrap: break-word;
  word-break: all;
}

.catalog-item-h1 {
  margin-left: 0;
}

.catalog-item-h2 {
  margin-left: 20px;
}

.catalog-item-h3 {
  margin-left: 40px;
}

.catalog-item-h4 {
  margin-left: 60px;
}

.catalog-item-h5 {
  margin-left: 80px;
}

.catalog-item-h6 {
  margin-left: 100px;
}

.catalog-link {
  display: block;
  font-size: 14px;
  color: #1f2328;
  line-height: 22px;
  text-decoration: none;
  padding: 3px 0;
  word-wrap: break-word;
  word-break: break-all;
}

.catalog-link:hover {
  text-decoration: underline;
}

.catalog-link-active {
  text-decoration: underline;
}

@media screen and (max-width: 1000px) {
  .catalog {
    display: none;
  }

  .post {
    margin-left: 0;
  }
}
</style>
