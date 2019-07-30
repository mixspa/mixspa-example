import Mixspa from '@mixspa/core';

const onLink = (handler) => {
  Mixspa.on('mixspa:url:changed', handler);
};

export default onLink;
