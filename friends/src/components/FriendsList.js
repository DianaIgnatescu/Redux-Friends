/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
// import FriendEditable from './FriendEditable';
import { fetchFriends } from '../actions';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    const {
      friends, updateFriend, handleUpdateChange, makeUneditable, makeEditable, deleteFriend,
    } = this.props;
    return (
      <div className="friends-list-container">
        <h2>List of Friends</h2>
        {friends.map(friend =>
          // if (friend.isEditable) {
          //   return (
          //     <FriendEditable
          //       key={friend.id}
          //       name={friend.name}
          //       age={friend.age}
          //       id={friend.id}
          //       email={friend.email}
          //       updateFriend={updateFriend}
          //       handleUpdateChange={handleUpdateChange}
          //       makeUneditable={makeUneditable}
          //     />);
          // }
          (
            <Friend
              name={friend.name}
              age={friend.age}
              id={`${friend.id}-${friend.email}`}
              key={friend.id}
              email={friend.email}
              deleteFriend={this.props.deleteFriend}
            // makeEditable={makeEditable}
            />
          ))}
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
  },
)(FriendsList);
