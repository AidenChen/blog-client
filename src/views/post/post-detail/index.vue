<template>
  <div class="post-detail">
    <div class="post-detail-inner">
      <div class="catalog">
        <p class="catalog-title" v-show="catalog.length">CATALOG</p>
        <ul class="catalog-items">
          <li v-for="(item, index) in catalog" :key='index'
            class="catalog-item"
            :class="'catalog-item-'+item.tagName"
          >
            <a class="catalog-link"
              :class="{'catalog-link-active': index === currentIndex}"
              :href="item.href">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div class="post-wrapper" ref="post">
        <h1 class="post-title">{{currentPost.title}}</h1>
        <p class="post-time">{{currentPost.created_at}}</p>
        <div class="markdown-body" v-html="currentPostCompile" ref="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'post-detail',
  data() {
    return {
      catalog: [],
      listHeight: [],
      scrollY: 0,
    };
  },
  computed: {
    ...mapGetters([
      'currentPost',
      'currentPostCompile',
    ]),
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i += 1) {
        const height1 = this.listHeight[i];
        const height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
  },
  mounted() {
    this.showPost(this.$route.params.id).then(() => {
      this.$nextTick(() => {
        // 提取文章标签，生成目录
        Array.from(
          this.$refs.content.querySelectorAll('h1,h2,h3,h4,h5,h6'),
        ).forEach((item, index) => {
          /* eslint-disable no-param-reassign */
          item.id = `${item.localName}-${index}`;
          item.className = 'catalog-item-hook';
          this.catalog.push({
            tagName: item.localName,
            text: item.innerText,
            href: `#${item.localName}-${index}`,
          });
        });
        // 初始化滚动
        this.initScroll();
        // 计算高度
        this.calculateHeight();
      });
    });
  },
  methods: {
    ...mapActions([
      'showPost',
    ]),
    initScroll() {
      window.addEventListener('scroll', () => {
        this.scrollY = Math.abs(Math.round(window.scrollY));
      });
    },
    calculateHeight() {
      const catalogList = this.$refs.post.getElementsByClassName('catalog-item-hook');
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < catalogList.length; i += 1) {
        const item = catalogList[i];
        height = item.getBoundingClientRect().top;
        this.listHeight.push(height);
      }
    },
  },
};
</script>

<style lang="scss">
.post-detail {
  padding-top: 85px;
}

.post-detail-inner {
  margin: 0 auto;
  padding: 0 30px;
  max-width: calc(1000px - (30px * 2));
}

.catalog {
  will-change: transform;
  position: fixed;
  top: 60px;
  bottom: 0;
  overflow-y: auto;
  width: 250px;
}

.catalog-title {
  margin: 8px 0;
  color: #111;
  font-size: 18px;
}

.catalog-items {
  list-style: square;
  padding: 0;
  margin: 0;
}

.catalog-item {
  text-align: left;
  line-height: 20px;
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
  color: #111;
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

.post-wrapper {
  margin-left: 260px;
  min-height: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 80px;
  margin-bottom: 30px;
}

.post-title {
  font-size: 24px;
  word-break: break-all;
}

.post-time {
  color: #7f8c8d;
  font-weight: 400;
  margin-bottom: 10px;
}

@media screen and (max-width: 850px) {
  .post-detail {
    position: relative;
    padding-top: 80px;
  }

  .catalog {
    display: none;
  }

  .post-wrapper {
    margin-left: 0;
  }
}
</style>
