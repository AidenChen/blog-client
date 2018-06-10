<template>
  <div class="post-list">
    <ul class="post-items" v-if="posts.length!==0">
      <li v-for="(post, index) in posts" :key="index" class="post-item">
        <p class="post-time">{{post.created_at}}</p>
        <h1 class="post-title">
          <router-link :to="'/posts/'+post.id">{{ post.title }}</router-link>
        </h1>
        <div class="post-abstract markdown-body"
          v-html="compiledMarkdown(post.abstract)"
        >
        </div>
        <p>
          <router-link :to="'/posts/'+post.id"
            class="post-entry"
          >
            Read More...
          </router-link>
        </p>
        <p>
          <span v-for="(tag, index) in post.tags" :key="index"
            class="post-tag"
          >
            {{tag.name}}
          </span>
        </p>
      </li>
      <div class="post-paginator">
        <f-paginator
          :page-index="curPage"
          :page-size="10"
          :total="total"
          :pager-length="3"
          :layout="'pager'"
          :background="true"
          @page-changed="changePage"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import marked from '../../../assets/js/marked';

export default {
  name: 'post-list',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'posts',
      'total',
      'tags',
      'curPage',
      'allPage',
      'selectTags',
      'searchTags',
      'currentPost',
    ]),
    filterMsg() {
      let msg = '';
      this.selectTags.forEach((item) => {
        msg += `${item.name}、`;
      });
      return msg.replace(/、$/, '');
    },
  },
  watch: {
    selectTags() {
      this.indexPost({
        tags: this.searchTags.join(','),
      }).then(() => {
      });
    },
  },
  mounted() {
    if (this.$route.query.tags) {
      this.setSelectTags([{ id: this.$route.query.tags }]);
    } else {
      this.indexPost().then(() => {
      });
    }
  },
  methods: {
    ...mapMutations({
      setSelectTags: 'SET_SELECT_TAGS',
    }),
    ...mapActions([
      'indexPost',
    ]),
    compiledMarkdown(value) {
      return marked(value);
    },
    changePage(cur) {
      this.indexPost({ tags: this.searchTags.join(','), index: cur }).then(() => {
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../../assets/scss/base.scss';

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

.post-paginator {
  display: table;
  margin: 60px auto;
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
