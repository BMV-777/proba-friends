import React from "react";
import Button from "../Button/Button";

const Friends = ({ friend, onSelection, selectedFriend }) => {
  const isSelection = selectedFriend?.id === friend.id;

  return (
    <li className={isSelection ? "select" : ""}>
      <img src={friend.image} alt={friend.name} />
      {friend.name}

      {friend.balance < 0 && (
        <p className="red">
          Yo owen {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelection ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friends;
