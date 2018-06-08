import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home';
import Post from '@/views/post';
import PostList from '@/views/post/post-list';
import PostDetail from '@/views/post/post-detail';
import Tag from '@/views/tag';
import Profile from '@/views/profile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/posts',
      name: 'post',
      component: Post,
      children: [
        {
          path: '/posts',
          name: 'post-list',
          component: PostList,
        },
        {
          path: '/posts/:id',
          name: 'post-detail',
          component: PostDetail,
        },
      ],
    },
    {
      path: '/tags',
      name: 'tag',
      component: Tag,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
