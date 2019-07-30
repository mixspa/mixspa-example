<template>
  <ul :class="$style.nav">
    <li><app-link :base="baseUrl" to="/">Home</app-link></li>
    <li><app-link :base="baseUrl" to="/app-one">App One</app-link></li>
    <li><app-link :base="baseUrl" to="/app-two">App Two</app-link></li>
  </ul>
</template>

<script>
import { AppLink } from '@mixspa/vue'

export default {
  props: ['baseUrl'],
  components: { 'app-link': AppLink }
}
</script>

<style lang="scss" module>
.nav {
  li {
    line-height: 50px;
    text-align: center;
    text-decoration: none;
  }
}
</style>
