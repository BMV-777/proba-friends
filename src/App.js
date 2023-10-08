import React from "react";

import initialFriends from "./initialFriends.js";
import FriendsList from "./components/FriendsList/FriendsList.jsx";
import FormAddFriends from "./components/FormAddFriends/FormAddFriends.jsx";
import Button from "./components/Button/Button.jsx";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill.jsx";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        <FormAddFriends />
        <Button>Add Friends</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
