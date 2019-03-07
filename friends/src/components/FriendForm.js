/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

const clearForm = (target) => {
  target.childNodes.forEach((child) => {
    if (child.value) {
      child.value = '';
    }
  });
};

const handleSubmit = (event, addFriend) => {
  event.preventDefault();
  addFriend();
  clearForm(event.target.parentNode);
};

class FriendForm extends React.Component {
  nameRef = React.createRef()
  ageRef = React.createRef()
  emailRef = React.createRef()

  onAddFriend = () => {
    const nameRef = this.nameRef.current.value;
    const ageRef = this.ageRef.current.value;
    const emailRef = this.emailRef.current.value;
    this.props.addFriend(nameRef, ageRef, emailRef);
  }

  render() {
    return (
      <div className="form-container">
        <h2>Add a New Friend</h2>
        <form className="friends-form">
          <input
            name="name"
            type="text"
            placeholder="Name..."
            ref={this.nameRef}
          />
          <input
            name="age"
            type="number"  
            placeholder="Age..."
            ref={this.ageRef}
          />
          <input
            name="email"
            type="email" 
            placeholder="Email..."
            ref={this.emailRef}
          />
          <button
            onClick={this.onAddFriend}
            className="add">
            Add Friend
          </button>
        </form>
      </div>
    );
  }
  
};

const mapStateToProps = state => ({
  // friends: state.friends,
  // isFetching: state.isFetching,
});

export default connect(
  mapStateToProps,
  {
    addFriend,
  },
)(FriendForm);
