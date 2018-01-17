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

export function * sendNewMessSage (socket, username, action) {
  try {
    const actionToSocket = {
      ...action,
      author: username
    };
    yield call(socketSendMessage, socket, actionToSocket);
  } catch (error) {
    console.log(error); // TODO: need better error handler
  }
}

export function * watchSendMessageSaga (socket, username) {
  yield takeEvery(ADD_MESSAGE, sendNewMessSage, socket, username);
}

export default function getSagas (config) {
  const { socket, username } = config;
  return [
    watchSendMessageSaga(socket, username)
  ];
}
