import React from "react";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split A Bill Width</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♂️ Your expense</label>
      <input type="text" />

      <label>🧍🧍‍♀️ Clark's expense</label>
      <input type="text" />

      <label>🤑 Who is paying the bill </label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
