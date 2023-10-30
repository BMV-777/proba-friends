import React from "react";

import Friends from "../Friends/Friends";

const FriendsList = ({ friends, onSelected, selected }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          onSelected={onSelected}
          selected={selected}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
