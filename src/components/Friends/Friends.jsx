import React from "react";
import Button from "../Button/Button";

const Friends = ({ friend, onSelected, selected }) => {
  const isSelected = selected?.id === friend.id;
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

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

      <Button onClick={() => onSelected(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friends;
