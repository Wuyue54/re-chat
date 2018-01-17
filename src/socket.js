import openSocket from 'socket.io-client';

import {
  ADD_MESSAGE,
  ADD_USER,
  USERS_LIST
} from './Containers/App/constants';

import {
  messageReceived,
  populateUsersList
} from './Containers/App/actions';


function setupSocket (dispatch, username) {
  const socket = openSocket('http://localhost:8080');

  socket.on('connect', () => {
    socket.send(JSON.stringify({
      type: ADD_USER,
      name: username,
      id: socket.id
    }));
  });

  socket.on('message', (message) => {
    const action = JSON.parse(message);
    switch (action.type) {
      case ADD_MESSAGE:
        dispatch(messageReceived(action.message, action.author, action.id));
        break;
      case USERS_LIST:
        dispatch(populateUsersList(action.users));
        break;
      default:
        break;
    }
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  return socket;
}

export default setupSocket;
