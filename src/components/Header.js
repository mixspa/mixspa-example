import styles from './Header.scss';

class Header {
  constructor(entryList, linkCallBack) {
    this.entryList = entryList;
    this.el = document.createElement('div');
    this.onLinkCallBack = linkCallBack;
  }

  render(activeId) {
    this.el.innerHTML = '';
    this.el.className = styles.header;
    this.el.append(this.renderMenu(activeId));
    return this.el;
  }

  renderMenu(activeId) {
    let dom = document.createElement('ul');
    dom.className = styles.menu;
    this.entryList.forEach(entry => dom.append(this.renderItem(entry, activeId)));
    return dom;
  }

  renderItem(entry, activeId) {
    let dom = document.createElement('li');
    dom.className = styles.item;
    if (entry.id === activeId) dom.className += " " + styles.activated;
    dom.append(this.renderLink(entry));
    return dom;
  }

  renderLink(entry) {
    let dom = document.createElement('a');
    dom.href = 'javascript:void';
    dom.className =styles.link
    dom.onclick = (e) => { this.onLinkCallBack(entry.id); e.preventDefault(); };
    dom.append(entry.name);
    return dom;
  }
}

export default Header;
