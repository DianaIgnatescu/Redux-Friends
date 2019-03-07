import { LOGIN_SUCCESS } from '../actions';

const initialState = '';

const authToken = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.token;
    default:
      return state;
  }
};

export default authToken;
