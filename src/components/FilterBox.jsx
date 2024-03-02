import React from "react";
import "./FilterBox.css";

const FilterBox = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
        data-filter-type={props.filterType}
        data-length={props.length}
        data-multiple={props.multiple}
      />
      {props.label}
    </label>
  );
};

export default FilterBox;
