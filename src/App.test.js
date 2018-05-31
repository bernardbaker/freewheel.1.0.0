import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store';

const DELAY_MS = 2000

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

it('renders without crashing', async () => {
  const ORIGINAL_TIMEOUT = jasmine.DEFAULT_TIMEOUT_INTERVAL
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

  const div = document.createElement('div');
  await ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    div
  );
  await sleep(DELAY_MS + 3000)
  ReactDOM.unmountComponentAtNode(div);
});
