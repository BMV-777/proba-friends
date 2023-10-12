import React, { useState } from "react";
import Button from "../Button/Button";

const FormAddFriends = ({ onAddFriends }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();

  function handelSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriends = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onAddFriends(newFriends);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handelSubmit}>
      <label>🧍‍♀️ Friend name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🎴 Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add </Button>
    </form>
  );
};

export default FormAddFriends;
