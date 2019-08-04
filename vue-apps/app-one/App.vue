<template>
  <div :class="$style.app">
    <h1>This is App One</h1>
    <app-link :class="$style.link" base="/mixspa-example/react-apps" to="/app-one">React App One</app-link>
  </div>
</template>

<script>
import { AppLink } from '@mixspa/vue'

export default {
  props: ['baseUrl'],
  components: { 'app-link': AppLink }
}
</script>

<style lang="scss" module>
.app {
  padding: 30px;
  font-size: 18px;
  color: #2c3e50;

  .link {
    display: block;
    line-height: 30px;
  }
}
</style>
