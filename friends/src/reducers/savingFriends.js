import { SAVE_FRIEND, SAVE_FRIEND_SUCCESS, SAVE_FRIEND_FAILURE } from '../actions';

const initialState = false;

const savingFriends = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FRIEND:
      return true;
    case SAVE_FRIEND_SUCCESS:
      return false;
    case SAVE_FRIEND_FAILURE:
      return false;
    default:
      return state;
  }
};

export default savingFriends;
