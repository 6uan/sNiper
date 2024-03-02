export const findPerfectSquares = (value, targetLength = 4) => {
  let results = [];
  let numbers = value.split(",");

  numbers.forEach((number) => {
    for (let i = 0; i <= number.length - targetLength; i++) {
      const substring = number.substring(i, i + targetLength);

      const num = parseInt(substring, 10);
      if (isPerfectSquare(num)) {
        const sqrt = Math.sqrt(num);
        results.push({
          block: number,
          perfectSquare: substring,
          squareRoot: sqrt,
        });
        break;
      }
    }
  });

  return results;
};

export const isPerfectSquare = (num) => {
  if (num < 0) return false;
  const sqrt = Math.floor(Math.sqrt(num));
  return sqrt * sqrt === num;
};

export const isFib = (value, targetLength = 2) => {
  let results = [];
  let numbers = value.split(",");

  numbers.forEach((number) => {
    for (let i = 0; i <= number.length - targetLength; i++) {
      const substring = number.substring(i, i + targetLength);

      if (substring.startsWith("0") && substring !== "0") {
        continue;
      }

      const num = parseInt(substring, 10);

      if (fibonacciNumbers.includes(num)) {
        results.push({ block: number, fibSubString: substring });
      }
    }
  });

  return results;
};

const fibonacciNumbers = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229,
  832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817,
  39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733,
  1134903170, 1836311903, 2971215073, 4807526976, 7778742049,
];

export const isMultiple = (value, targetMultiple = 12) => {
  let results = [];
  let numbers = value.split(",");

  numbers.forEach((number) => {
    const num = parseInt(number.trim(), 10);
    if (num % targetMultiple === 0) {
      results.push({
        block: number,
        multiple: targetMultiple,
        multipleResult: num / targetMultiple, // This will give you the number that when multiplied by targetMultiple gives the original number
      });
    }
  });
  return results;
};
