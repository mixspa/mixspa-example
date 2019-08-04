<template>
  <div :class="$style.home">
    <h1>This is Home App</h1>
    <app-link :class="$style.link" base="/mixspa-example/react-apps" to="/">React App Home</app-link>
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
.home {
  padding: 30px;
  font-size: 18px;
  color: #2c3e50;

  .link {
    display: block;
    line-height: 30px;
  }
}
</style>
