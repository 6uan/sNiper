import React from "react";

const Result = ({ results, currentFilterType }) => {
  console.log(results);
  return (
    results.length > 0 && (
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
          } else if (currentFilterType === "multipleOf") {
            return (
              <p key={index}>
                Block: {result.block}, Multiple: {result.multiple}, Multiple
                Result: {result.multipleResult}
              </p>
            );
          }
        })}
      </div>
    )
  );
};

export default Result;
