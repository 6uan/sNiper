import React, { useState } from "react";
import TextField from "./TextField";
import "./NumberFilter.css";

import { findPerfectSquares, isFib } from "./MathUtils.js";

const NumberFilter = () => {
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState({
    fourDigitPerfectSquare: false,
    fiveDigitPerfectSquare: false,
    sixDigitPerfectSquare: false,
    threeDigitFibonacci: false,
    fourDigitFibonacci: false,
    fiveDigitFibonacci: false,
  });
  const [currentFilterType, setCurrentFilterType] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFilterChange = (e) => {
    const userLength = parseInt(e.target.getAttribute("length"), 10); // Retrieve and parse the data-length attribute
    const filterType = e.target.getAttribute("filter-type");

    setCurrentFilterType(filterType);

    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });

    // Check if the checkbox is checked and input is not empty
    if (e.target.checked && input) {
      if (filterType === "perfectSquare") {
        const foundSquares = findPerfectSquares(input, userLength); // Use squareLength as parameter
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
    <div>
      <TextField value={input} onChange={handleInputChange} />
      <br />
      <br />
      <div className="grid">
        <label>
          <input
            type="checkbox"
            name="fourDigitPerfectSquare"
            filter-type="perfectSquare"
            checked={filters.fourDigitPerfectSquare}
            onChange={handleFilterChange}
            length={4}
          />
          4D Perfect Square
        </label>

        <label>
          <input
            type="checkbox"
            name="fiveDigitPerfectSquare"
            filter-type="perfectSquare"
            checked={filters.fiveDigitPerfectSquare}
            onChange={handleFilterChange}
            length={5}
          />
          5D Perfect Square
        </label>

        <label>
          <input
            type="checkbox"
            name="sixDigitPerfectSquare"
            filter-type="perfectSquare"
            checked={filters.sixDigitPerfectSquare}
            onChange={handleFilterChange}
            length={6}
          />
          6D Perfect Square
        </label>

        <label>
          <input
            type="checkbox"
            name="threeDigitFibonacci"
            filter-type="fibonacciNumber"
            checked={filters.threeDigitFibonacci}
            onChange={handleFilterChange}
            length={3}
          />
          3D Fibonacci
        </label>

        <label>
          <input
            type="checkbox"
            name="fourDigitFibonacci"
            filter-type="fibonacciNumber"
            checked={filters.fourDigitFibonacci}
            onChange={handleFilterChange}
            length={4}
          />
          4D Fibonacci
        </label>

        <label>
          <input
            type="checkbox"
            name="fiveDigitFibonacci"
            filter-type="fibonacciNumber"
            checked={filters.fiveDigitFibonacci}
            onChange={handleFilterChange}
            length={5}
          />
          5D Fibonacci
        </label>
      </div>

      {results.length > 0 && (
        <div>
          <p>Results:</p>
          {results.map((result, index) => {
            if (currentFilterType === "perfectSquare") {
              return (
                <p key={index}>
                  Block: {result.block}, Perfect Square: {result.perfectSquare},
                  Square Root: {result.squareRoot}
                </p>
              );
            } else if (currentFilterType === "fibonacciNumber") {
              return (
                <p key={index}>
                  Block: {result.block}, Fibonacci Substring:{" "}
                  {result.fibSubString}
                </p>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default NumberFilter;
