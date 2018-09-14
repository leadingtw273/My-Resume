import Vue from 'vue';
import LightTimeline from 'vue-light-timeline';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(LightTimeline);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
