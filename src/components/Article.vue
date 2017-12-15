<template>
  <div class="article">
    <div class="article__loading" v-if="isLoading">
      <Loading :loadingMsg='loadingMsg' />
    </div>
    <Side :isInList='false' :category='category' />
    <div class="article__main" v-if="!isLoading">
      <h1 class="article__title">{{currentPost.title}}</h1>
      <p class="article__time">{{currentPost.created_at}}</p>
      <div class="article__content markdown-body" v-html="currentPostCompile" ref="post">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from './Loading';
import Side from './Side';
import marked from '../assets/js/marked';

export default {
  name: 'Article',
  data() {
    return {
      category: [],
      isLoading: false,
      loadingMsg: '加载中...'
    };
  },
  computed: {
    ...mapGetters(['currentPost', 'currentPostCompile']),
    compiledPost() {
      return this.compiledMarkdown(this.$store.state.currentPost.content);
    }
  },
  components: {
    Side,
    Loading
  },
  beforeMount() {
    this.isLoading = true;
    this.showArticle(this.$route.params.id).then(() => {
      this.isLoading = false;
      this.$nextTick(() => {
        // 提取文章标签，生成目录
        Array.from(
          this.$refs.post.querySelectorAll('h1,h2,h3,h4,h5,h6')
        ).forEach((item, index) => {
          item.id = `${item.localName}-${index}`;
          this.category.push({
            tagName: item.localName,
            text: item.innerText,
            href: `#${item.localName}-${index}`
          });
        });
      });
    });
  },
  preFetch(store) {
    return store.dispatch('showArticle', store.state.route.params.id);
  },
  methods: {
    ...mapActions(['showArticle']),
    compiledMarkdown(value) {
      return marked(value);
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/markdown.scss';

.article {
  max-width: 1000px;
  margin: 85px auto 0 auto;
  padding: 0 20px 0px 20px;

  &__main {
    margin-left: 260px;
    min-height: 100%;
  }

  &__title {
    font-size: 24px;
    word-break: break-all;
  }

  &__time {
    color: #7f8c8d;
    font-weight: 400;
    margin-bottom: 10px;
  }

  &__loading {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 200px;
    margin-left: -(300px/2)+125;
    margin-top: -(200px/2)+60;
  }
}

@media screen and (max-width: 850px) {
  .article {
    position: relative;
    margin-top: 80px;

    &__main {
      margin-left: 0;
    }

    &__loading {
      position: absolute;
      top: 200px;
      left: 50%;
      width: 300px;
      margin-left: -(300px/2);
    }
  }
}
</style>
