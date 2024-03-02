import React, { useState } from "react";
import TextField from "./TextField";
import "./NumberFilter.css";

import { findPerfectSquares, isFib } from "./MathUtils.js";
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
  });
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFilterChange = (e) => {
    const userLength = parseInt(e.target.dataset.length, 10);
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
      </div>

      {results.length > 0 && (
        <Result results={results} currentFilterType={currentFilterType} />
      )}
    </>
  );
};

export default NumberFilter;
