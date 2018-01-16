import { takeEvery, call } from 'redux-saga/effects';
import { ADD_MESSAGE } from './constants';

function socketSendMessage (socket, action) {
  return new Promise((resolve, reject) => {
    try {
      socket.send(JSON.stringify(action));
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

export function * sendNewMessSage (socket, action) {
  try {
    console.log(action);
    yield call(socketSendMessage, socket, action);
  } catch (error) {
    console.log(error); // TODO: need better error handler
  }
}

export default function * watchSendMessageSaga (socket) {
  yield takeEvery(ADD_MESSAGE, sendNewMessSage, socket);
}
