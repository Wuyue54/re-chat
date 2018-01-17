import { all } from 'redux-saga/effects';
import appSaga from './Containers/App/sagas';

export default function * rootSaga (config) {
  yield all([
    ...appSaga(config)
  ]);
}
