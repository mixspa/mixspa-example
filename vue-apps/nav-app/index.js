import Vue from 'vue'
import { createApp } from '@mixspa/vue';
import App from './App.vue'

Vue.config.productionTip = false

createApp('vue-nav-app', ({ baseurl }) => {
  console.log('nav url:' + baseurl);
  return {
    render: h => h(App, { props: { baseUrl: baseurl } })
  };
});
