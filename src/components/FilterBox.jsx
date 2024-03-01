import React from "react";
import "./FilterBox.css";

const FilterBox = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        name={props.name}
        filterType={props.filterType}
        checked={props.checked}
        onChange={props.onChange}
        length={props.length}
      />
      {props.label}
    </label>
  );
};

export default FilterBox;
