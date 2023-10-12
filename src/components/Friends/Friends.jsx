import React from "react";
import Button from "../Button/Button";

const Friends = ({ friend, onSelection, onFriend }) => {
  const isSound = onFriend?.id === friend.id;

  return (
    <li className={isSound ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          Yo {friend.name} owe {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance === 0 && <p>Yo and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSound ? "Closed" : "Select"}
      </Button>
    </li>
  );
};

export default Friends;
