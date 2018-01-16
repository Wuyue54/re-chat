import { all } from 'redux-saga/effects';
import appSaga from './Containers/App/sagas';

export default function * rootSaga () {
  yield all([
    ...appSaga
  ]);
}
