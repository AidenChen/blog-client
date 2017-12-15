import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Article from '@/components/Article';
import List from '@/components/List';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      name: 'Article',
      component: Article,
      children: [
        {
          path: '/articles',
          name: 'List',
          component: List
        },
        {
          path: '/articles/:id',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
