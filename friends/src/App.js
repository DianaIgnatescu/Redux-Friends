import React from 'react';
import { connect } from 'react-redux';
import {
  loginRequest, loginSuccess, loginFailure, addFriend, fetchFriends,
} from './actions';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import './App.css';

const App = (props) => {
  if (props.state.authToken) {
    return (
      <div className="App">
        <FriendForm addFriend={props.addFriend} fetchFriends={props.fetchFriends} />
        <FriendsList />
      </div>
    );
  }
  return (
    <div className="App">
      <Login
        loginFailure={props.loginFailure}
        loginRequest={props.loginRequest}
        loginSuccess={props.loginSuccess}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  state: {
    authToken: state.authToken,
  },
});

export default connect(mapStateToProps, {
  loginRequest, loginSuccess, loginFailure, addFriend, fetchFriends,
})(App);
