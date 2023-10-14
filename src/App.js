import React, { useState } from "react";

import initialFriends from "./initialFriends.js";

import FriendsList from "./components/FriendsList/FriendsList";
import FormAddFriends from "./components/FormAddFriends/FormAddFriends.jsx";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill.jsx";

console.log(initialFriends);

function App() {
  const [friends, setFriends] = useState(initialFriends);

  function handelAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <FormAddFriends onAddFriend={handelAddFriend} />
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
