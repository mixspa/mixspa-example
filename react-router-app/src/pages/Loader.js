class Loader {
  static apps = [];

  static loader(url) {
    return new Promise((resolve, reject) => {
      if(Loader.apps.includes(url)) {
        resolve();
      } else {
        let sdom = document.createElement('script');
        sdom.type = 'text/javascript';
        sdom.src = url;
        sdom.charset = 'UTF-8'
        sdom.onload = () => {
          Loader.apps.push(url);
          resolve();
        };
        sdom.onerror = err => reject(err);
        document.body.appendChild(sdom);
      }
    });
  }
}

export default Loader;
