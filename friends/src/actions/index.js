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
const TOKEN = 'eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ';
export const fetchFriends = () => async (dispatch) => {
  dispatch({ type: FETCH_FRIENDS });
  const config = {
    headers: {
      authorization: TOKEN,
    },
  };
  try {
    const result = await axios.get('http://localhost:5000/api/friends', config);
    dispatch(fetchFriendsSuccess(result.data));
  } catch (error) {
    dispatch(fetchFriendsFailure(error.message));
  }
};

export const addFriend = () => async (dispatch) => {
  dispatch({ type: ADD_FRIEND });
  try {
    const result = await axios.post('http://localhost:5000/api/friends');
    dispatch(addFriendSuccess(result));
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

export const deleteFriend = id => async (dispatch) => {
  dispatch({ type: DELETE_FRIEND });
  try {
    const result = await axios.delete(`http://localhost:5000/api/friends/${id}`);
    dispatch(deleteFriendSuccess(result));
  } catch (error) {
    dispatch(deleteFriendFailure(error.message));
  }
};
