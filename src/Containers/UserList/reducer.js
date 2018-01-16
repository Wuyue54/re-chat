import {
  USERS_LIST,
  ADD_USER
} from '../App/constants';

function userReducer (state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return state.concat([{ name: action.name, id: action.id }]);
    case USERS_LIST:
      return action.users;
    default:
      return state;
  }
}

export default userReducer;
