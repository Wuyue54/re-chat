import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sillyname from 'sillyname';

import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import setupSaga from './sagas';

import initialSocket from './socket';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

const username = sillyname();
const socket = initialSocket(store.dispatch, username);
sagaMiddleware.run(setupSaga, { socket, username });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
