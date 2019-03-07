import React from 'react';

const handleClick = (addFriend, fetchFriends) => (event) => {
  event.preventDefault();
  console.log('clicked');
  let age = '';
  let email = '';
  let name = '';
  event.target.parentNode.childNodes.forEach((childNode) => {
    if (childNode.name === 'name') {
      name = childNode.value;
    } else if (childNode.name === 'age') {
      age = childNode.value;
    } else if (childNode.name === 'email') {
      email = childNode.value;
    }
  });
  console.log(name, age, email);
  if (name && age && email) {
    addFriend(name, age, email);
    fetchFriends();
  }
};

const FriendForm = props => (
  <div className="form-container">
    <h2>Add a New Friend</h2>
    <form className="friends-form">
      <input
        name="name"
        type="text"
        placeholder="Name..."
      />
      <input
        name="age"
        type="number"
        placeholder="Age..."
      />
      <input
        name="email"
        type="email"
        placeholder="Email..."
      />
      <button
        type="button"
        onClick={handleClick(props.addFriend, props.fetchFriends)}
        className="add"
      >
            Add Friend
      </button>
    </form>
  </div>
);

export default FriendForm;
