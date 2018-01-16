import { combineReducers } from 'redux';
import userListReducer from './Containers/UserList/reducer';
import messagesReducer from './Containers/MessagesList/reducer';

export default combineReducers({
  messages: messagesReducer,
  users: userListReducer
});
