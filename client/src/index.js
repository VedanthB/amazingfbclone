import React from 'react';
import { render } from 'react-dom';

import App from './js/App';
import './css/index.css';

const root = document.querySelector('#root');

render(<App />, root);

if (module.hot) {
  module.hot.accept();
}
