import Mixspa from '@mixspa/core';
import styles from './Content.scss';

class Content {
  constructor(activeEntry) {
    this.loading = true;
    this.activeEntry = activeEntry;
    this.el = document.createElement('div');
    Mixspa.load(this.activeEntry.id).then(appInfo => this.onLoadApp(appInfo)).catch(err => this.onLoadError(err));
  }

  onLoadApp(appInfo) {
    console.log(appInfo);
    this.loading = false;
    this.appInfo = appInfo;
    this.render();
  }

  onLoadError(err) {
    this.loading = false;
    this.error = err;
    this.render();
  }

  render() {
    this.el.innerHTML = '';
    this.el.className = styles.content;
    this.el.append(this.loading ? this.renderLoading() : ( this.error ? this.renderError() : this.renderApp()));
    return this.el;
  }

  renderLoading() {
    let loadEl = document.createElement('div');
    loadEl.className = styles.loading;
    loadEl.append('Loading ...');
    return loadEl;
  }

  renderError() {
    let errorEl = document.createElement('div');
    errorEl.className = styles.error;
    errorEl.append('Load error.');
    return errorEl;
  }

  renderApp() {
    let appEl = document.createElement(this.appInfo.tag);
    appEl.className = styles.app;
    appEl.setAttribute("baseUrl", this.activeEntry.url);
    return appEl;
  }
}

export default Content;
