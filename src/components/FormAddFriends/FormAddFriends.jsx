import React, { useState } from "react";

import Button from "../Button/Button";

const FormAddFriends = ({ onAddFriend }) => {
  // const id = crypto.randomUUID();

  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();

  function handelSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newAddFriend = { name, id, balance: 0, image: `${image}?=${id}` };

    onAddFriend(newAddFriend);
    console.log(newAddFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handelSubmit}>
      <label>🧍Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🪐Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriends;
