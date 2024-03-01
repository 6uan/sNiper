import React from "react";
import "./TextField.css";

const TextField = ({ value, onChange }) => {
  return (
    <>
      <input
        className="width"
        type="text"
        placeholder="Enter numbers separated by commas"
        value={value}
        onChange={onChange}
      />
      <br />
      <br />
    </>
  );
};

export default TextField;
