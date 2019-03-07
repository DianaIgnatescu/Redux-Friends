/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const handleDeleteClick = (id, deleteFriend, fetchFriends) => (event) => {
  event.preventDefault();
  deleteFriend(id);
  fetchFriends();
};

const Friend = (props) => {
  const { name, age, id, email, deleteFriend, makeEditable, fetchFriends } = props;
  return (
    <div className="friend-container" key={id}>
      <div className="details">
        <p><span>Name:</span>{name}</p>
        <p><span>Age:</span>{age}</p>
        <p><span>Email:</span><a href={email}>{email}</a></p>
      </div>
      <div className="requests">
        <button className="update" onClick={(e) => {makeEditable(id)}}>Update</button>
        <button className="delete" onClick={handleDeleteClick(id, deleteFriend, fetchFriends)}>Delete</button>
      </div>
    </div>
  );
};

export default Friend;
