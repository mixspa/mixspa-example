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
    console.log("Load success.");
    console.log(appInfo);
    this.loading = false;
    this.appInfo = appInfo;
    this.render();
  }

  onLoadError(err) {
    console.log("Load failure.");
    this.loading = false;
    this.error = err;
    this.render();
  }

  render() {
    console.log("rendr");
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
    console.log("render app");
    let appEL = document.createElement(this.appInfo.tag);
    appEL.className = styles.app;
    console.log("render app after");
    return appEL;
  }
}

export default Content;
