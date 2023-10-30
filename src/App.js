import React, { useState } from "react";

import initialFriends from "./initialFriends.js";

import FriendsList from "./components/FriendsList/FriendsList.jsx";
import FormAddFriends from "./components/FormAddFriends/FormAddFriends.jsx";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function handelAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  function handelOpen() {
    setIsOpen((show) => !show);
  }

  function handelSelected(friend) {
    setSelected((cur) => (cur?.id === friend.id ? null : friend));
  }

  function handelSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );
    setSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelected={handelSelected}
          selected={selected}
        />

        {isOpen && <FormAddFriends onAddFriend={handelAddFriends} />}
        <Button onClick={handelOpen}>{isOpen ? "Close" : "Add Friends"}</Button>
      </div>
      {selected && (
        <FormSplitBill selected={selected} onSplitBill={handelSplitBill} />
      )}
    </div>
  );
}

export default App;
