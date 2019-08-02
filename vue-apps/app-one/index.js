import Vue from 'vue'
import { createApp } from '@mixspa/vue';
import App from './App.vue'

Vue.config.productionTip = false

createApp('vue-app-one', () => {
  return {
    render: h => h(App)
  };
});
