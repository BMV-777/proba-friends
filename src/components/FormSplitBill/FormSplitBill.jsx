import React, { useState } from "react";
import Button from "../Button/Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [payUser, setPayUser] = useState("");
  const isPay = bill ? bill - payUser : "";
  const [whatPay, setWhatPay] = useState("user");

  function handelSubmit(e) {
    e.preventDefault();

    if (!bill || !payUser) return;

    onSplitBill(whatPay === "user" ? isPay : -payUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>Split a bill with onSelection {selectedFriend.name} </h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={payUser}
        onChange={(e) =>
          setPayUser(
            Number(e.target.value) > bill ? payUser : Number(e.target.value)
          )
        }
      />

      <label>👭 {selectedFriend.name}s expense</label>
      <input type="text" disabled value={isPay} />

      <label>🤑 Who is paying the bill</label>
      <select value={whatPay} onChange={(e) => setWhatPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
