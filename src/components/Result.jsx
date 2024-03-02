import React from "react";

const Result = ({ results, currentFilterType }) => {
  console.log(results);
  return (
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
              Block: {result.block}, Fibonacci Substring: {result.fibSubString}
            </p>
          );
        }
      })}
    </div>
  );
};

export default Result;
