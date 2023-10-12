import React from "react";
import Friends from "../Friends/Friends";

const FriendsList = ({ friends, onSelection, onFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          onFriend={onFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
