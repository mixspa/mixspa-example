const reactEntry = {
  'react-apps/react-home-app': './react-apps/home-app/index.js',
  'react-apps/react-nav-app': './react-apps/nav-app/index.js',
  'react-apps/react-app-one': './react-apps/app-one/index.js',
  'react-apps/react-app-two': './react-apps/app-two/index.js',
};

const vueEntry = {
  'vue-apps/vue-home-app': './vue-apps/home-app/index.js',
  'vue-apps/vue-nav-app': './vue-apps/nav-app/index.js',
  'vue-apps/vue-app-one': './vue-apps/app-one/index.js',
  'vue-apps/vue-app-two': './vue-apps/app-two/index.js',
};

const entry = Object.assign({'main': './src/index.js'}, reactEntry, vueEntry);

module.exports = entry;
