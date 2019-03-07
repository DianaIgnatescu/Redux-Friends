import { ADD_FRIEND, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE } from '../actions';

const initialState = false;

const friendAdded = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return false;
    case ADD_FRIEND_SUCCESS:
      return true;
    case ADD_FRIEND_FAILURE:
      return false;
    default:
      return state;
  }
};

export default friendAdded;
