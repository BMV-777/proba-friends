import React from "react";
import Button from "../Button/Button";

const Friends = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      {friend.name}

      {friend.balance < 0 && (
        <p className="red">
          Yo owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even </p>}

      <Button>Select</Button>
    </li>
  );
};

export default Friends;
