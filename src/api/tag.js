import Axios from 'axios';

export default {
  index() {
    return Axios.get('/api/tags');
  }
};
