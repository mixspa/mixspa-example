import Mixspa from '@mixspa/core';

const emitLink = (url) => {
  Mixspa.emit('mixspa:url:changed', url);
};

export default emitLink;
