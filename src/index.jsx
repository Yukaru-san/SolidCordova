/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

const readerApplication = () => {
	render(() => <App />, document.getElementById('root'));
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    readerApplication();
  }, false);
} else {
  readerApplication();
}