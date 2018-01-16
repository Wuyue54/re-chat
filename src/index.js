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
import appSaga from './Containers/App/sagas';

import initialSocket from './socket';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

const socket = initialSocket(store.dispatch, sillyname());
sagaMiddleware.run(appSaga, socket);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
