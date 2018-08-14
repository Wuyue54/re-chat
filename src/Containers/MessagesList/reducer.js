import {
  ADD_MESSAGE,
  MESSAGE_FROM_SERVER
} from '../App/constants';


function messagesReducer (state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_FROM_SERVER: {
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ]);
    }
    default:
      return state;
  }
}

export default messagesReducer;
