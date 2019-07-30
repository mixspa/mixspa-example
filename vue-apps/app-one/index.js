import Vue from 'vue'
import { createApp } from '@mixspa/vue';
import App from './App.vue'

Vue.config.productionTip = false

createApp('vue-app-one', ({ baseurl }) => {
  console.log('app one url:' + baseurl);
  return {
    render: h => h(App)
  };
});
