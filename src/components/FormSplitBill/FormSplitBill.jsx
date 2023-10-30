import React, { useState } from "react";
import Button from "../Button/Button";

const FormSplitBill = ({ selected, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [pay, setPay] = useState("");
  const isPay = bill ? bill - pay : "";
  const [whetPay, setWhetPay] = useState("user");

  function handelSubmit(e) {
    e.preventDefault();

    if (!bill || !pay) return;

    onSplitBill(whetPay === "user" ? isPay : -pay);
  }

  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>Split a bill with {selected.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={pay}
        onChange={(e) =>
          setPay(Number(e.target.value) > bill ? pay : Number(e.target.value))
        }
      />

      <label>👯‍♀️ {selected.name}'s expense</label>
      <input type="text" disabled value={isPay} />

      <label>🤑 Who is paying the bill</label>
      <select value={whetPay} onChange={(e) => setWhetPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
