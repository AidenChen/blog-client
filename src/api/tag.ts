import request from '@/services/request';

// 获取标签列表
export const getTagList = () =>
  request({
    url: 'tags',
    method: 'get'
  });
