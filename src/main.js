import Vue from 'vue';
import Furoshiki from 'furoshiki';
import App from './views/app';
import router from './router';
import store from './store';
import './assets/scss/index.scss';

Vue.config.productionTip = false;
Vue.use(Furoshiki);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
});
