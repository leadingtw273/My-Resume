import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/default',
      name: 'default',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/DefaultPage/index.vue')
    },
    {
      path: '/another',
      name: 'another',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/AnotherPage/index.vue')
    }
  ]
});
