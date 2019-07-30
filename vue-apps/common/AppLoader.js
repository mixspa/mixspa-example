import Mixspa from '@mixspa/core';

export default {
  props: ['appId', 'appProps'],
  data() {
    return {
      isLoading: true,
      appTag: ''
    };
  },
  mounted() {
    this.loadApp();
  },
  updated() {
    this.loadApp();
  },
  methods: {
    loadApp() {
      Mixspa.load(this.appId).then(appInfo => {
        this.isLoading = false;
        this.appTag = appInfo.tag;
      }).catch(error => console.log(error));
    }
  },
  render(createElement) {
    console.log('app-loader: ' + this.appTag);
    let loading = createElement('div', 'Loading ...');
    let sub = createElement('div', this.$slots.default);
    let children = this.isLoading ? [loading, sub] : [createElement(this.appTag, { attrs: this.appProps }), sub];
    return createElement('div', children);
  }
};
