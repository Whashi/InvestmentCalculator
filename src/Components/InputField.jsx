import React from "react";
import Input from "./Input";

const InputField = ({ inputData, changeHandler }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        {Object.keys(inputData).map((datum, index) => {
          return (
            <Input
              key={index}
              datum={datum}
              value={inputData[datum]}
              changeHandler={changeHandler}
            />
          );
        })}
      </div>
    </section>
  );
};

export default InputField;
