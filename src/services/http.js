import axios from 'axios';

axios.defaults.baseURL = process.env.API_BASE;

export default class Http {
  static get(endpoint, params) {
    return axios({
      method: 'GET',
      url: endpoint,
      params,
    });
  }

  static post(endpoint, data) {
    return axios({
      method: 'POST',
      url: endpoint,
      data,
    });
  }

  static put(endpoint, data) {
    return axios({
      method: 'PUT',
      url: endpoint,
      data,
    });
  }

  static patch(endpoint, data) {
    return axios({
      method: 'PATCH',
      url: endpoint,
      data,
    });
  }

  static delete(endpoint) {
    return axios({
      method: 'DELETE',
      url: endpoint,
    });
  }
}
