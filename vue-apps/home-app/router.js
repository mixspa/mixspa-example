import Vue from 'vue'
import Router from 'vue-router'
import { AppLoader } from '@mixspa/vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default (baseurl) => new Router({
  mode: 'history',
  base: baseurl || '',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/app-one',
      name: 'appOne',
      component: AppLoader,
      props: { appId: 'vue-app-one', appProps: { baseUrl: baseurl } }
    },
    {
      path: '/app-two',
      name: 'appTwo',
      component: AppLoader,
      props: { appId: 'vue-app-two', appProps: { baseUrl: baseurl } }
    }
  ]
});
