import '@babel/polyfill';
import Mixspa from '@mixspa/core';
import HomePage from './components/HomePage';
import appList from './data/appList.json';
import entryList from './data/entryList.json';

import './index.scss';

appList.forEach(app => Mixspa.register(app));

document.getElementById('app').append(new HomePage(entryList).render());
