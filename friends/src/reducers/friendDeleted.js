import { DELETE_FRIEND, DELETE_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE } from '../actions';

const initialState = false;

const friendDeleted = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FRIEND:
      return false;
    case DELETE_FRIEND_SUCCESS:
      return true;
    case DELETE_FRIEND_FAILURE:
      return false;
    default:
      return state;
  }
};

export default friendDeleted;
