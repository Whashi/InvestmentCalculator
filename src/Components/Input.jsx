import React from "react";

const Input = ({ datum, value, changeHandler }) => {
  return (
    <p>
      <label>{datum}</label>
      <input
        type="number"
        required
        value={value}
        onChange={(e) => changeHandler({ [datum]: parseFloat(e.target.value) })}
      />
    </p>
  );
};

export default Input;
