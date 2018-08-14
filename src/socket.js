import openSocket from 'socket.io-client';

import {
  ADD_USER
} from './Containers/App/constants';

function setupSocket (dispatch, username) {
  const socket = openSocket('http://localhost:8080');

  socket.on('connect', () => {
    socket.send(JSON.stringify({
      type: ADD_USER,
      name: username,
      id: socket.id
    }));
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  return socket;
}

export default setupSocket;
