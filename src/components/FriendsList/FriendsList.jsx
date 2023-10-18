import React from "react";
import Friends from "../Friends/Friends";

const FriendsList = ({ friends, onSelection }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends friend={friend} key={friend.id} onSelection={onSelection} />
      ))}
    </ul>
  );
};

export default FriendsList;
