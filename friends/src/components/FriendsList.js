/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
// import FriendEditable from './FriendEditable';
import { fetchFriends, deleteFriend } from '../actions';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    const {
      friends, updateFriend, handleUpdateChange, makeUneditable, makeEditable, deleteFriend, fetchFriends,
    } = this.props;
    return (
      <div className="friends-list-container">
        <h2>List of Friends</h2>
        {friends.map(friend => <Friend
          name={friend.name}
          age={friend.age}
          id={friend.id}
          key={`${friend.id}-${friend.email}`}
          email={friend.email}
          deleteFriend={deleteFriend}
          fetchFriends={fetchFriends}
        />)}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isFetching: state.isFetching,
});

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    deleteFriend,
  },
)(FriendsList);
