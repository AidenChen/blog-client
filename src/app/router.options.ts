const customRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue').then((r) => r.default || r)
  },
  {
    path: '/posts',
    component: () => import('@/views/post/index.vue').then((r) => r.default || r),
    children: [
      {
        name: 'post-list',
        path: '',
        component: () => import('@/views/post/post-list/index.vue').then((r) => r.default || r)
      },
      {
        name: 'post-detail',
        path: ':id',
        component: () => import('@/views/post/post-detail/index.vue').then((r) => r.default || r)
      }
    ]
  },
  {
    name: 'tag',
    path: '/tags',
    component: () => import('@/views/tag/index.vue').then((r) => r.default || r)
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('@/views/profile/index.vue').then((r) => r.default || r)
  }
];

// /docs/vue-router/api/interfaces/routeroptions
export default {
  routes: (_routes: any) => [
    ..._routes,
    ...customRoutes
  ]
};
