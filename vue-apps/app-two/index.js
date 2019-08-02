import Vue from 'vue'
import { createApp } from '@mixspa/vue';
import App from './App.vue'

Vue.config.productionTip = false

createApp('vue-app-two', () => {
  return {
    render: h => h(App)
  };
});
