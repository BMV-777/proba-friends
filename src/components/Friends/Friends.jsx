import React from "react";
import Button from "../Button/Button";

const Friends = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          Yo owen {friend.name} {friend.balance}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      )}

      {friend.balance === 0 && <p> You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
};

export default Friends;
