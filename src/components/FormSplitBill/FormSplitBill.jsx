import React from "react";
import Button from "../Button/Button";
import { useState } from "react";

const FormSplitBill = ({ friends }) => {
  const [bill, setBill] = useState("");
  const [pay, setPay] = useState("");
  const isPay = bill ? bill - pay : "";
  const [whatPay, setWhatPay] = useState("user");

  function handelSubmit(e) {
    e.preventDefault();

    if (!bill || !pay) return;
  }

  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>Split a bill with </h2>

      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♂️Your expense </label>
      <input
        type="text"
        value={pay}
        onChange={(e) =>
          setPay(Number(e.target.value) > bill ? pay : Number(e.target.value))
        }
      />

      <label>👭Clark's expense</label>
      <input type="text" disabled value={isPay} />

      <label>🤑Who is paying the bill</label>
      <select value={whatPay} onChange={(e) => setWhatPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
