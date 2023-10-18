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
    setSelectedFriend(friend);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handelSelection} />

        {isOpen && <FormAddFriends onAddFriend={handelAddFriend} />}

        <Button onClick={handelIsOpen}>
          {isOpen ? "Closed" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill />}
    </div>
  );
}

export default App;
