import React, { useState } from "react";

import initialFriends from "./initialFriends.js";

import FriendsList from "./components/FriendsList/FriendsList.jsx";
import FormAddFriends from "./components/FormAddFriends/FormAddFriends.jsx";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handelAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  function handelIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handelSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsOpen(false);
  }

  function handelSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handelSelection}
          selectedFriend={selectedFriend}
        />

        {isOpen && <FormAddFriends onAddFriend={handelAddFriend} />}

        <Button onClick={handelIsOpen}>
          {isOpen ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handelSplitBill}
        />
      )}
    </div>
  );
}

export default App;
