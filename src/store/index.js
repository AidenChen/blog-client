import Vue from 'vue';
import Vuex from 'vuex';
import HttpService from '../services/http';
import marked from '../assets/js/marked';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPost: {
      content: '',
      id: '',
    },
    currentPostCompile: '',
    posts: [],
    total: 0,
    allPage: 0,
    curPage: 0,
    tags: [],
    selectTags: [],
  },
  getters: {
    posts: state => state.posts,
    tags: state => state.tags,
    total: state => state.total,
    curPage: state => state.curPage,
    allPage: state => state.allPage,
    selectTags: state => state.selectTags,
    searchTags: state => state.selectTags.map(item => item.id),
    currentPost: state => state.currentPost,
    currentPostCompile: state => state.currentPostCompile,
  },
  actions: {
    indexPost({ commit }, { tags = '', index = 1, size = 10 } = {}) {
      return HttpService.get('posts', {
        tags,
        index,
        size,
      })
        .then((res) => {
          commit('INDEX_POST', { posts: res.data.data.items, total: res.data.data.total, allPage: Math.ceil(res.data.data.total / size), curPage: index });
          return new Promise((resolve) => {
            resolve(res);
          });
        });
    },
    showPost({ commit, state }, id) {
      let post = state.posts.find(item => item.id === id);
      if (!post && state.currentPost.id === id) {
        post = state.currentPost;
      }
      if (post && post.content) {
        commit('SHOW_POST', post);
        return new Promise((resolve) => {
          resolve(post);
        });
      }
      return HttpService.get(`posts/${id}`).then((res) => {
        commit('SHOW_POST', res.data.data);
        return new Promise((resolve) => {
          resolve(res);
        });
      });
    },
    indexTag({ commit }) {
      return HttpService.get('tags').then((res) => {
        commit('INDEX_TAG', res.data.data.items);
        return new Promise((resolve) => {
          resolve(res);
        });
      });
    },
  },
  mutations: {
    INDEX_POST: (state, { posts, total, allPage, curPage }) => {
      let stateAllPage = allPage;
      let stateCurPage = curPage;
      if (isNaN(+allPage)) {
        stateAllPage = 0;
      }
      if (isNaN(+curPage)) {
        stateCurPage = 0;
      }
      state.posts = posts;
      state.total = total;
      state.allPage = +stateAllPage;
      state.curPage = +stateCurPage;
    },
    SHOW_POST: (state, post) => {
      state.currentPost = post;
      state.currentPostCompile = marked(state.currentPost.content);
    },
    INDEX_TAG: (state, tags) => {
      state.tags = tags;
    },
    SET_SELECT_TAGS: (state, tags) => {
      state.selectTags = tags;
    },
  },
});
