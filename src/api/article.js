import Axios from 'axios';

export default {
  index(tags = '', index = 1, size = 10) {
    return Axios.get(`/api/articles?tags=${tags}&index=${index}&size=${size}`);
  },
  show(id) {
    return Axios.get(`/api/articles/${id}`);
  }
};
