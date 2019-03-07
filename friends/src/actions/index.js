import axios from 'axios';


export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';
export const SAVE_FRIEND = 'SAVE_FRIEND';
export const SAVE_FRIEND_SUCCESS = 'SAVE_FRIEND_SUCCESS';
export const SAVE_FRIEND_FAILURE = 'SAVE_FRIEND_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Synchronous action creators

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const fetchFriendsSuccess = (friends) => {
  if (!friends) {
    throw new Error('fetchFriendsSuccess requires a friends result');
  }
  return {
    type: FETCH_FRIENDS_SUCCESS,
    payload: {
      friends,
    },
  };
};

export const fetchFriendsFailure = (error) => {
  if (!error) {
    throw new Error('fetchFriendsFailure requires an error message');
  }
  return {
    type: FETCH_FRIENDS_FAILURE,
    payload: {
      error,
    },
  };
};

export const addFriendSuccess = (id, name, email) => ({
  type: ADD_FRIEND_SUCCESS,
  payload: {
    id,
    name,
    email,
  },
});

export const addFriendFailure = (error) => {
  if (!error) {
    throw new Error('addFriendFailure requires an error message');
  }
  return {
    type: ADD_FRIEND_FAILURE,
    payload: {
      error,
    },
  };
};

export const deleteFriendSuccess = id => ({
  type: DELETE_FRIEND_SUCCESS,
  payload: {
    id,
  },
});

export const deleteFriendFailure = (error) => {
  if (!error) {
    throw new Error('deleteFriendFailure requires an error message');
  }
  return {
    type: DELETE_FRIEND_FAILURE,
    payload: {
      error,
    },
  };
};

export const updateFriendSuccess = id => ({
  type: UPDATE_FRIEND_SUCCESS,
  payload: {
    id,
  },
});

export const updateFriendFailure = (error) => {
  if (!error) {
    throw new Error('updateFriendFailure requires an error message');
  }
  return {
    type: DELETE_FRIEND_FAILURE,
    payload: {
      error,
    },
  };
};

export const saveFriendSuccess = id => ({
  type: SAVE_FRIEND_SUCCESS,
  payload: {
    id,
  },
});

export const saveFriendFailure = (error) => {
  if (!error) {
    throw new Error('saveFriendFailure requires an error message');
  }
  return {
    type: SAVE_FRIEND_FAILURE,
    payload: {
      error,
    },
  };
};

// Asynchronous action creators
// const TOKEN = 'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';
const TOKEN = '';

export const loginRequest = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };
  try {
    const result = await fetch('http://localhost:5000/api/login', config);
    const jsonResult = await result.json();
    if (result.status === 403) {
      throw new Error(jsonResult.error);
    }
    dispatch(loginSuccess(jsonResult.payload));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const fetchFriends = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_FRIENDS });
  const token = getState().authToken;
  const config = {
    method: 'GET',
    headers: {
      authorization: token,
    },
  };
  try {
    const result = await fetch('http://localhost:5000/api/friends', config);
    const jsonResult = await result.json();
    dispatch(fetchFriendsSuccess(jsonResult));
  } catch (error) {
    dispatch(fetchFriendsFailure(error.message));
  }
};

export const addFriend = (name, age, email) => async (dispatch, getState) => {
  dispatch({ type: ADD_FRIEND });
  const token = getState().authToken;
  const friend = { name, age, email };
  const config = {
    method: 'POST',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(friend),
  };
  try {
    const result = await fetch('http://localhost:5000/api/friends', config);
    const jsonResult = await result.json();
    dispatch(addFriendSuccess(jsonResult));
  } catch (error) {
    dispatch(addFriendFailure(error.message));
  }
};

export const updateFriend = id => async (dispatch) => {
  dispatch({ type: UPDATE_FRIEND });
  try {
    const result = await axios.put(`http://localhost:5000/api/friends/${id}`);
    dispatch(updateFriendSuccess(result));
  } catch (error) {
    dispatch(updateFriendFailure(error.message));
  }
};

export const deleteFriend = id => async (dispatch, getState) => {
  dispatch({ type: DELETE_FRIEND });
  const token = getState().authToken;
  const config = {
    method: 'DELETE',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
  };
  try {
    const result = await fetch(`http://localhost:5000/api/friends/${id}`, config);
    const jsonResult = await result.json();
    dispatch(deleteFriendSuccess(jsonResult));
  } catch (error) {
    dispatch(deleteFriendFailure(error.message));
  }
};
