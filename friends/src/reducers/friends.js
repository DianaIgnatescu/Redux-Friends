import { FETCH_FRIENDS_SUCCESS } from '../actions/index';

const initialState = [];

const friends = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return [...action.payload.friends];
    default:
      return state;
  }
};

export default friends;
