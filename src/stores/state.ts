import { ref, computed } from 'vue';
import marked from '@/assets/scripts/marked';
import { getPostList, getPostDetail } from '@/api/post';
import { getTagList } from '@/api/tag';

export const useStateStore = defineStore('state', () => {
  const currentPost = ref<any>({
    id: '',
    content: ''
  });
  const currentPostCompile = ref<string>('');

  const posts = ref<any[]>([]);
  const tags = ref<any[]>([]);

  const total = ref<number>(0);
  const allPage = ref<number>(0);
  const curPage = ref<number>(0);

  const indexPost = async ({ tags = '', index = 1, size = 10 } = {}) => {
    const { error, data } = await getPostList({ tags, index, size });
    if (error?.message) {
      return;
    }

    posts.value = posts.value.concat(data?.data?.items ?? []);
    total.value = data?.data.total;
    const count = Math.ceil(total.value / size);

    allPage.value = count;
    curPage.value = index;
  };

  const showPost = (id: string) => {
    return new Promise((resolve) => {
      let post = posts.value.find(item => item.id === id);
      if (!post && currentPost.value.id === id) {
        post = currentPost.value;
      }
      if (post && post.content) {
        currentPost.value = post;
        currentPostCompile.value = marked.parse(currentPost.value.content) as string;
        resolve(post);
      }
      getPostDetail(id)
        .then((res) => {
          currentPost.value = res.data.data;
          currentPostCompile.value = marked.parse(currentPost.value.content) as string;
          resolve(res);
        });
    });
  };

  const indexTag = () => {
    return new Promise((resolve) => {
      getTagList()
        .then((res) => {
          tags.value = res.data.data.items;
          resolve(res);
        });
    });
  };

  return {
    posts,
    tags,
    total,
    curPage,
    allPage,
    currentPost,
    currentPostCompile,
    indexPost,
    showPost,
    indexTag
  };
});
