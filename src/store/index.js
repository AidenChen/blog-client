import Vue from 'vue';
import Vuex from 'vuex';
import articleApi from '../api/article';
import tagApi from '../api/tag';
import marked from '../assets/js/marked';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPost: {
      content: '',
      id: ''
    },
    currentPostCompile: '',
    posts: [],
    allPage: 0,
    curPage: 0,
    tags: [],
    selectTags: [],
    sideBoxOpen: false
  },
  getters: {
    posts: state => state.posts,
    tags: state => state.tags,
    curPage: state => state.curPage,
    allPage: state => state.allPage,
    selectTags: state => state.selectTags,
    searchTags: state => state.selectTags.map(item => item.id),
    sideBoxOpen: state => state.sideBoxOpen,
    currentPost: state => state.currentPost,
    currentPostCompile: state => state.currentPostCompile
  },
  actions: {
    indexArticle({ commit, state }, { tags = '', index = 1, size = 5 } = {}) {
      return articleApi.index(tags, index, size).then(res => {
        commit('INDEX_ARTICLE', { posts: res.data.data.items, allPage: Math.ceil(res.data.data.total / size), curPage: index });
        return new Promise(resolve => {
          resolve(res);
        });
      });
    },
    showArticle({ commit, state }, id) {
      let article = state.posts.find(post => post.id === id);
      if (!article && state.currentPost.id === id) {
        article = state.currentPost;
      }
      if (article && article.content) {
        commit('SHOW_ARTICLE', article);
        return new Promise(resolve => {
          resolve(article);
        });
      }
      return articleApi.show(id).then(res => {
        commit('SHOW_ARTICLE', res.data.data);
        return new Promise(resolve => {
          resolve(res);
        });
      });
    },
    indexTag({ commit }) {
      return tagApi.index().then(res => {
        commit('INDEX_TAG', res.data.data.items);
        return new Promise(resolve => {
          resolve(res);
        });
      });
    }
  },
  mutations: {
    INDEX_ARTICLE: (state, { posts, allPage, curPage }) => {
      let stateAllPage = allPage;
      let stateCurPage = curPage;
      if (isNaN(+allPage)) {
        stateAllPage = 0;
      }
      if (isNaN(+curPage)) {
        stateCurPage = 0;
      }
      state.posts = posts;
      state.allPage = +stateAllPage;
      state.curPage = +stateCurPage;
    },
    SHOW_ARTICLE: (state, article) => {
      state.currentPost = article;
      state.currentPostCompile = marked(state.currentPost.content);
    },
    INDEX_TAG: (state, tags) => {
      state.tags = tags;
    },
    SET_SELECT_TAGS: (state, tags) => {
      state.selectTags = tags;
    },
    TOGGLE_SELECT_TAGS: (state, { id, name }) => {
      if (typeof state.selectTags.find(e => e.id === id) === 'undefined') {
        state.selectTags.push({
          id,
          name
        });
      } else {
        state.selectTags = state.selectTags.filter(e => e.id !== id);
      }
    },
    TOGGLE_SIDEBOX: state => {
      state.sideBoxOpen = !state.sideBoxOpen;
    },
    CLOSE_SIDEBOX: state => {
      state.sideBoxOpen = false;
    }
  }
});
