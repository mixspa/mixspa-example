import Mixspa from '@mixspa/core';
import { h, render } from 'preact';
import HomePage from './components/HomePage';
import appList from './data/appList.json';

import './index.scss';

appList.forEach(app => Mixspa.register(app));

render(<HomePage />, document.getElementById('app'));
