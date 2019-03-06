import combineReducers from 'redux';

import friends from './friends';
import fetchingFriends from './fetchingFriends';
import friendsFetched from './friendsFetched';
import friendsSaved from './friendsSaved';
import savingFriends from './savingFriends';
import updatingFriend from './updatingFriend';
import friendUpdated from './friendUpdated';
import deletingFriend from './deletingFriend';
import friendDeleted from './friendDeleted';
import error from './error';

export default combineReducers({
  friends,
  fetchingFriends,
  friendsFetched,
  friendsSaved,
  savingFriends,
  updatingFriend,
  friendUpdated,
  deletingFriend,
  friendDeleted,
  error,
});
