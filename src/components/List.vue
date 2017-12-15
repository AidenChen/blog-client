<template>
  <div class="list">
    <Side :isInList='true'/>
    <div class="list__loading" v-if="isLoading">
      <Loading :loadingMsg='loadingMsg'/>
    </div>
    <ul class="list__article">
      <li class="list__article__filterMsg" v-if="(selectTags.length !== 0)">
        筛选
        <span>{{ filterMsg }}</span> 
        分类
      </li>
      <template v-if="posts.length!==0 && isLoading == false">
        <li v-for="(article, index) in posts" class="list__article__item">
          <h1 class="list__article__item__title"><router-link :to="'article/'+article.id">{{ article.title }}</router-link></h1>
          <div class="list__article__item__info">
            <p class="list__article__item__time">{{article.created_at}}</p>
            <div class="list__article__item__abstract markdown-body" v-html="compiledMarkdown(article.abstract)"></div>
            <!-- <span v-for="tag in article.tags"> {{tag.name}}</span> -->
            <p>
              <router-link :to="'/article/'+article.id" class="continue-reading">继续阅读...</router-link>
            </p>
          </div>
        </li>
        <Paginator :curPage='curPage' :total='allPage' @changePage='changePage'/>
      </template>
      <div v-if="posts.length==0 && isLoading==false" class="msg-box">
        <p>暂时没有相关文章</p>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Paginator from './Paginator';
import Loading from './Loading';
import Side from './Side';
import marked from '../assets/js/marked';

export default {
  name: 'List',
  computed: {
    ...mapGetters([
      'posts',
      'tags',
      'curPage',
      'allPage',
      'selectTags',
      'searchTags',
      'currentPost'
    ]),
    filterMsg() {
      let msg = '';
      this.selectTags.forEach(item => {
        msg += `${item.name}、`;
      });
      return msg.replace(/、$/, '');
    }
  },
  methods: {
    ...mapActions(['indexArticle', 'indexTag']),
    compiledMarkdown(value) {
      return marked(value);
    },
    changePage(cur) {
      this.isLoading = true;
      this.indexArticle({ tags: this.searchTags, index: cur }).then(() => {
        this.isLoading = false;
      });
    }
  },
  components: {
    Paginator,
    Side,
    Loading
  },
  data() {
    return {
      isLoading: false,
      loadingMsg: '加载中...'
    };
  },
  created() {},
  mounted() {
    this.isLoading = true;
    this.indexArticle().then(() => {
      this.isLoading = false;
    });
  },
  preFetch(store) {
    store.dispatch('indexTag');
    return store
      .dispatch('indexTag', {})
      .then(() => {});
  },
  watch: {
    selectTags() {
      this.isLoading = true;
      this.indexArticle({
        tags: this.searchTags
      }).then(() => {
        this.isLoading = false;
      });
    }
  }
};
</script>

<style lang="scss">
.list {
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 85px;
}

.list__article {
  list-style: none;
  margin-left: 260px;
}

.list__article__item {
  margin: 0 auto;
  padding: 0px 10px 10px 10px;
  margin-bottom: 15px;
}

.list__article__item__title {
  font-size: 24px;
  word-break: break-all;

  a {
    text-decoration: none;
    color: black;
  }
}

.list__article__item__time {
  color: #7f8c8d;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 2px;
}

.list__article__item__abstract {
  margin-bottom: 5px;
}

.continue-reading {
  text-decoration: none;
  color: #0366d6;
}

.list__article__filterMsg {
  font-size: 20px;
  text-align: center;

  span {
    color: #0288D1;
  }
}

.list__loading {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  margin-left: -(300px / 2) + 125;
  margin-top: -(200px / 2) + 60;
}

.msg-box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-left: -(200px / 2) + 125;
  margin-top: -(200px / 2) + 60;
  text-align: center;
  color: #bfbfbf;
}

@media screen and (max-width: 850px) {
  .list {
    position: relative;
    padding-top: 80px;
  }

  .list__article__item {
    margin-bottom: 10px;
  }

  .list__article {
    margin-left: 0;
  }

  .list__article__filterMsg {
    font-size: 18px;
  }

  .msg-box {
    position: absolute;
    top: 250px;
    left: 50%;
    width: 300px;
    margin-left: -(300px / 2);
  }

  .list__loading {
    position: absolute;
    top: 250px;
    left: 50%;
    width: 300px;
    margin-left: -(300px / 2);
  }
}
</style>
