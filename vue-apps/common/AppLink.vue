<template>
    <a href="javascript:void" @click.prevent="go"><slot /></a>
</template>

<script>
import emitLink from './emitLink';

export default {
  props: ['base', 'to'],
  methods: {
    go(event) {
      console.log('link clicked: ' + this.base + this.to);
      emitLink(this.base + this.to);
    }
  }
}
</script>
