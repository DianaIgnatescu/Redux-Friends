import {
  FETCH_FRIENDS_FAILURE, ADD_FRIEND_FAILURE, DELETE_FRIEND_FAILURE, UPDATE_FRIEND_FAILURE,
  SAVE_FRIEND_FAILURE, FETCH_FRIENDS_SUCCESS, ADD_FRIEND_SUCCESS, DELETE_FRIEND_SUCCESS,
  UPDATE_FRIEND_SUCCESS, SAVE_FRIEND_SUCCESS, FETCH_FRIENDS, ADD_FRIEND, DELETE_FRIEND,
  UPDATE_FRIEND, SAVE_FRIEND,
} from '../actions';

const initialState = '';

const error = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_FAILURE:
      return action.payload.error;
    case ADD_FRIEND_FAILURE:
      return action.payload.error;
    case DELETE_FRIEND_FAILURE:
      return action.payload.error;
    case UPDATE_FRIEND_FAILURE:
      return action.payload.error;
    case SAVE_FRIEND_FAILURE:
      return action.payload.error;
    case FETCH_FRIENDS_SUCCESS:
      return '';
    case ADD_FRIEND_SUCCESS:
      return '';
    case DELETE_FRIEND_SUCCESS:
      return '';
    case UPDATE_FRIEND_SUCCESS:
      return '';
    case SAVE_FRIEND_SUCCESS:
      return '';
    case FETCH_FRIENDS:
      return '';
    case ADD_FRIEND:
      return '';
    case DELETE_FRIEND:
      return '';
    case UPDATE_FRIEND:
      return '';
    case SAVE_FRIEND:
      return '';
    default:
      return state;
  }
};

export default error;
