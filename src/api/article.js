import Axios from 'axios';

export default {
  create(title, content, isPublished, tags) {
    let abstract;
    if (content.indexOf('<!--more-->') !== -1) {
      abstract = content.split('<!--more-->')[0];
    } else {
      abstract = '';
    }
    return Axios.post('/api/articles', { title, content, is_published: isPublished, abstract, tags });
  },
  destroy(id) {
    return Axios.delete(`/api/articles/${id}`);
  },
  update(id, article) {
    return Axios.put(`/api/articles/${id}`, article);
  },
  index(tags = '', index = 1, size = 10) {
    return Axios.get(`/api/articles?tags=${tags}&index=${index}&size=${size}`);
  },
  show(id) {
    return Axios.get(`/api/articles/${id}`);
  },
  publishArticle(id) {
    return Axios.put(`/api/articles/${id}`, { is_published: true });
  },
  withdrawArticle(id) {
    return Axios.put(`/api/articles/${id}`, { is_published: false });
  }
};
