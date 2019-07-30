<template>
  <div :class="$style.app">
    <div :class="$style.nav">
      <app-loader app-id="vue-nav-app" v-bind:app-props="appProps">Hello</app-loader>
    </div>
    <div :class="$style.content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" module>
.app { display: flex; }
.nav {
  height: 100%;
  width: 200px;
  border-right: 1px solid #e8e8e8;
}
.content {
  width: 100%;
  color: #010101;
}
</style>

<script>
import { AppLoader } from '@mixspa/vue'
export default {
  props: ['baseUrl'],
  components: {
    'app-loader': AppLoader
  },
  data() {
    return {
      appProps: {
        baseUrl: this.baseUrl
      }
    };
  }
}
</script>
