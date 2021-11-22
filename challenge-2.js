// Challenge 2
// Write a javascript function that take in a list of prices, returns the indexes of all prices that are inflection points (excluding first and last datapoints)
// [1,2,3,4,3,2,1,2,3,4]
// => [3, 6]

// [1,2,3,4,5,6,7,8,9,8,7,6,7,8,9,8,7,6,5]
// => [8, 11, 14]

const inflectionCheck = (prices) => {
  inflectionPoints = [];
  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[i - 1] === prices[i + 1]) {
      inflectionPoints.push(i);
    }
  }
  return inflectionPoints;
};

console.log(
  inflectionCheck([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9, 8, 7, 6, 5])
);

// const inflectionCheck = (prices) => {
//   inflectionPoints = [];
//   prices.map((x, i) => {
//     if (prices[i - 1] === prices[i + 1]) {
//       inflectionPoints.push(i);
//     }
//   });
//   return inflectionPoints;
// };
