import React from "react";

import initialFriends from "./initialFriends.js";

import FriendsList from "./components/FriendsList/FriendsList.jsx";
import FormAddFriends from "./components/FormAddFriends/FormAddFriends.jsx";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill.jsx";
import { useState } from "react";
import Button from "./components/Button/Button.jsx";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  const [splitFriends, setSplitFriends] = useState(null);

  function handelAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  function handelOpenForm() {
    setIsOpen((isOpen) => !isOpen);
  }

  // function handelSplitBill() {
  //   setFriends();
  // }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} on />
        {isOpen && <FormAddFriends onAddFiends={handelAddFriend} />}
        <Button onClick={handelOpenForm}>
          {isOpen ? "Close" : "Add friend"}
        </Button>
      </div>

      <FormSplitBill friends={friends} />
    </div>
  );
}

export default App;
