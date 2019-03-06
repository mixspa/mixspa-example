import Mixspa from '@mixspa/core';
import Header from './Header';
import Content from './Content';
import styles from './HomePage.scss';

class HomePage {
  constructor(entryList) {
    this.entryList = entryList;
    this.activeEntry = entryList[0];
    this.el = document.createElement('div');
    this.onLinkCallBack = this.onLinkCallBack.bind(this);
  }

  onLinkCallBack(id) {
    this.activeEntry = this.entryList.find(e => e.id === id);
    this.render();
  }

  render() {
    this.el.innerHTML = '';
    this.el.className = styles.home;
    this.el.append(new Header(this.entryList, this.onLinkCallBack).render(this.activeEntry.id));
    this.el.append(new Content(this.activeEntry).render());
    return this.el;
  }
}

export default HomePage;
