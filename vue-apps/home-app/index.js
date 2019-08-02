import 'core-js/features/string/starts-with'
import Vue from 'vue'
import Mixspa from '@mixspa/core'
import { createApp } from '@mixspa/vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

createApp('vue-home-app', ({ baseurl }) => {
  return {
    router: router(baseurl),
    mounted() {
      Mixspa.onLink((url) => {
        if (url.startsWith(baseurl)) {
          console.log('vue linked to: ' + url);
          this.$router.push(url.substring(baseurl.length));
        }
      });
    },
    render: h => h(App, { props: { baseUrl: baseurl } })
  };
});
