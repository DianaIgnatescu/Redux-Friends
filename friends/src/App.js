import React, { Component } from 'react';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
