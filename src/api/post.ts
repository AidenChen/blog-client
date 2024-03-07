import request from '@/services/request';

// 获取文章列表
export const getPostList = (params: any) =>
  request({
    url: 'posts',
    method: 'get',
    params
  });

export const getPostDetail = (id: string) =>
  request({
    url: `posts/${id}`,
    method: 'get'
  });
