import React, { useState } from "react";

import initialFriends from "./initialFriends.js";
import FriendsList from "./components/FriendsList/FriendsList.jsx";
import FormAddFriends from "./components/FormAddFriends/FormAddFriends.jsx";
import Button from "./components/Button/Button.jsx";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill.jsx";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [show, setShow] = useState(false);
  const [selectionFriends, setSelectionFriends] = useState(null);

  function handelAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handelShow() {
    setShow((show) => !show);
  }

  function handelSelection(friends) {
    // setSelectionFriends(friends);
    setSelectionFriends((cur) => (cur?.id === friends.id ? null : friends));
    setShow(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handelSelection}
          onFriend={selectionFriends}
        />

        {show && <FormAddFriends onAddFriends={handelAddFriends} />}

        <Button onClick={handelShow}>{show ? "Closed" : "Add Friends"}</Button>
      </div>
      {selectionFriends && (
        <FormSplitBill selectionFriends={selectionFriends} />
      )}
    </div>
  );
}

export default App;
