import {
  ADD_MESSAGE,
  MESSAGE_FROM_SERVER,
  ADD_USER,
  USERS_LIST
} from './constants';

export const addMessage = (message, author, id) => ({
  type: ADD_MESSAGE,
  id,
  message,
  author
});

export const addUser = (name, id) => ({
  type: ADD_USER,
  id,
  name
});


export const messageReceived = (message, author, id) => ({
  type: MESSAGE_FROM_SERVER,
  id,
  message,
  author
});

export const populateUsersList = users => ({
  type: USERS_LIST,
  users
});
