import { FETCH_FRIENDS, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from '../actions';

const initialState = false;

const friendsFetched = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return false;
    case FETCH_FRIENDS_SUCCESS:
      return true;
    case FETCH_FRIENDS_FAILURE:
      return false;
    default:
      return state;
  }
};

export default friendsFetched;
