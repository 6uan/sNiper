import React, { useState } from "react";
import TextField from "./TextField";
import "./NumberFilter.css";

import { findPerfectSquares, isFib, isMultiple } from "./MathUtils.js";
import FilterBox from "./FilterBox.jsx";
import Result from "./Result.jsx";

const NumberFilter = () => {
  const [input, setInput] = useState("");
  const [currentFilterType, setCurrentFilterType] = useState("");
  const [filters, setFilters] = useState({
    fourDigitPerfectSquare: false,
    fiveDigitPerfectSquare: false,
    sixDigitPerfectSquare: false,
    threeDigitFibonacci: false,
    fourDigitFibonacci: false,
    fiveDigitFibonacci: false,
    twelveMultiple: false,
    thirteenMultiple: false,
    fourteenMultiple: false,
    sixteenMultiple: false,
    sixnineMultiple: false,
  });
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFilterChange = (e) => {
    const userLength = parseInt(e.target.dataset.length, 10);
    const userMultiple = parseInt(e.target.dataset.multiple);
    const filterType = e.target.dataset.filterType;
    setCurrentFilterType(filterType);
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });

    // checkbox is checked and input is not empty
    if (e.target.checked && input) {
      console.log("worked");
      if (filterType === "perfectSquare") {
        const foundSquares = findPerfectSquares(input, userLength);
        setResults(foundSquares);
      } else if (filterType === "fibonacciNumber") {
        const foundFib = isFib(input, userLength);
        setResults(foundFib);
      } else if (filterType == "multipleOf") {
        const foundMultiple = isMultiple(input, userMultiple);
        setResults(foundMultiple);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <TextField value={input} onChange={handleInputChange} />
      <div className="grid-container">
        <FilterBox
          name="fourDigitPerfectSquare"
          filterType="perfectSquare"
          checked={filters.fourDigitPerfectSquare}
          onChange={handleFilterChange}
          length={4}
          label="4D Perfect Square"
        />
        <FilterBox
          name="fiveDigitPerfectSquare"
          filterType="perfectSquare"
          checked={filters.fiveDigitPerfectSquare}
          onChange={handleFilterChange}
          length={5}
          label="5D Perfect Square"
        />
        <FilterBox
          name="sixDigitPerfectSquare"
          filterType="perfectSquare"
          checked={filters.sixDigitPerfectSquare}
          onChange={handleFilterChange}
          length={6}
          label="6D Perfect Square"
        />
        <FilterBox
          name="threeDigitFibonacci"
          filterType="fibonacciNumber"
          checked={filters.threeDigitFibonacci}
          onChange={handleFilterChange}
          length={3}
          label="3D Fibonacci"
        />
        <FilterBox
          name="fourDigitFibonacci"
          filterType="fibonacciNumber"
          checked={filters.fourDigitFibonacci}
          onChange={handleFilterChange}
          length={4}
          label="4D Fibonacci"
        />
        <FilterBox
          name="fiveDigitFibonacci"
          filterType="fibonacciNumber"
          checked={filters.fiveDigitFibonacci}
          onChange={handleFilterChange}
          length={5}
          label="5D Fibonacci"
        />

        <FilterBox
          name="twelveMultiple"
          filterType="multipleOf"
          checked={filters.twelveMultiple}
          onChange={handleFilterChange}
          multiple={12}
          label="Mutiple of 12"
        />

        <FilterBox
          name="thirteenMultiple"
          filterType="multipleOf"
          checked={filters.thirteenMultiple}
          onChange={handleFilterChange}
          multiple={13}
          label="Mutiple of 13"
        />

        <FilterBox
          name="fourteenMultiple"
          filterType="multipleOf"
          checked={filters.fourteenMultiple}
          onChange={handleFilterChange}
          multiple={14}
          label="Mutiple of 14"
        />

        <FilterBox
          name="fifteenMultiple"
          filterType="multipleOf"
          checked={filters.fifteenMultiple}
          onChange={handleFilterChange}
          multiple={15}
          label="Mutiple of 15"
        />

        <FilterBox
          name="sixteenMultiple"
          filterType="multipleOf"
          checked={filters.sixteenMultiple}
          onChange={handleFilterChange}
          multiple={16}
          label="Mutiple of 16"
        />

        <FilterBox
          name="sixnineMultiple"
          filterType="multipleOf"
          checked={filters.sixnineMultiple}
          onChange={handleFilterChange}
          multiple={69}
          label="Mutiple of 69"
        />
      </div>
      {console.log(results.length)}
      {results.length > 0 && (
        <Result results={results} currentFilterType={currentFilterType} />
      )}
    </>
  );
};

export default NumberFilter;
