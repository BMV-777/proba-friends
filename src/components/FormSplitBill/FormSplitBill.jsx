import React, { useState } from "react";

const FormSplitBill = () => {
  const [bill, setBill] = useState("");
  const [payUser, setPayUser] = useState("");
  const isPay = bill ? bill - payUser : "";
  const [whatPay, setWhatPay] = useState("user");

  function handelSubmit(e) {
    e.preventDefault();

    if (!bill || !payUser) return;

    // onSelection(whatPay === "user" ? isPay : -payUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>Split a bill with onSelection </h2>

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

      <label>👭 Clark's expense</label>
      <input type="text" disabled value={isPay} />

      <label>🤑 Who is paying the bill</label>
      <select value={whatPay} onChange={(e) => setWhatPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
