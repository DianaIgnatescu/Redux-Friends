import { UPDATE_FRIEND, UPDATE_FRIEND_SUCCESS, UPDATE_FRIEND_FAILURE } from '../actions';

const initialState = false;

const updatingFriend = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FRIEND:
      return true;
    case UPDATE_FRIEND_SUCCESS:
      return false;
    case UPDATE_FRIEND_FAILURE:
      return false;
    default:
      return state;
  }
};

export default updatingFriend;
