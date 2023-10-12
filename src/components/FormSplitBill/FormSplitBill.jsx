import React from "react";
import Button from "../Button/Button";

const FormSplitBill = ({ selectionFriends }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with clark {selectionFriends.name}</h2>

      <label>💰Bill value</label>
      <input type="text" />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👯‍♀️ {selectionFriends.name}'s expense:</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectionFriends.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
