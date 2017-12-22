<template>
  <div class="detail">
    <side :isInList="false" :category="category"/>
    <div class="detail__loading" v-if="isLoading">
      <loading :loadingMsg='loadingMsg'/>
    </div>
    <div class="detail__main" v-if="!isLoading">
      <h1 class="detail__title">{{currentPost.title}}</h1>
      <p class="detail__time">{{currentPost.created_at}}</p>
      <div class="detail__content markdown-body" v-html="currentPostCompile" ref="post"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from '../Loading';
import Side from './Side';

export default {
  name: 'Detail',
  data() {
    return {
      category: [],
      isLoading: false,
      loadingMsg: '加载中...'
    };
  },
  computed: {
    ...mapGetters(['currentPost', 'currentPostCompile'])
  },
  components: {
    Side,
    Loading
  },
  mounted() {
    this.isLoading = true;
    this.showArticle(this.$route.params.id).then(() => {
      this.isLoading = false;
      this.$nextTick(() => {
        // 提取文章标签，生成目录
        Array.from(
          this.$refs.post.querySelectorAll('h1,h2,h3,h4,h5,h6')
        ).forEach((item, index) => {
          /* eslint-disable no-param-reassign */
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
  methods: {
    ...mapActions(['showArticle'])
  }
};
</script>

<style lang="scss">
.detail {
  max-width: 1000px;
  margin: 85px auto 0 auto;
  padding: 0 20px 0px 20px;
}

.detail__loading {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  margin-left: -(300px / 2) + 125;
  margin-top: -(200px /2) + 60;
}

.detail__main {
  margin-left: 260px;
  min-height: 100%;
}

.detail__title {
  font-size: 24px;
  word-break: break-all;
}

.detail__time {
  color: #7f8c8d;
  font-weight: 400;
  margin-bottom: 10px;
}

@media screen and (max-width: 850px) {
  .detail {
    position: relative;
    margin-top: 80px;
  }

  .detail__loading {
    position: absolute;
    top: 200px;
    left: 50%;
    width: 300px;
    margin-left: -(300px / 2);
  }

  .detail__main {
    margin-left: 0;
  }
}
</style>
