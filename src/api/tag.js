import Axios from 'axios';

export default {
  create(name) {
    return Axios.post('/api/tags', { name });
  },
  destroy(id) {
    return Axios.delete(`/api/tags/${id}`);
  },
  update(id, tag) {
    return Axios.put(`/api/tags/${id}`, tag);
  },
  index() {
    return Axios.get('/api/tags');
  }
};
