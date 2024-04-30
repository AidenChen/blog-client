<template>
  <div class="tag">
    <ul class="tag-inner">
      <li class="tag-item" v-for="(tag, index) in tags" :key="index"
        @click="goToPost(tag.id)"
      >
        <span>{{tag.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useStateStore } from '@/stores/state';

defineOptions({
  name: 'Tag'
});

const router = useRouter();
const stateStore = useStateStore();
const { tags } = storeToRefs(stateStore);

const goToPost = (tag: string) => {
  router.push({
    name: 'post-list',
    query: { tags: tag },
  });
};

await stateStore.indexTag();
</script>

<style lang="scss" scoped>
.tag {
  padding-top: 20px;
  padding-bottom: 24px;
}

.tag-inner {
  margin: 0 auto;
  @extend %maxWidth;
}

.tag-item {
  display: inline-block;
  border: 1px solid #eee;
  border-radius: 6px;
  margin: 4px;
  padding: 6px;
  color: #999;
  cursor: pointer;

  span {
    display: inline-block;
    line-height: 20px;
    height: 20px;
  }
}
</style>
