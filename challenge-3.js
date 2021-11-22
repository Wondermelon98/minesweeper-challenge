// Challenge 3
// Write a javascript function that takes in a list of prices, returns the highest sell-off margin in the list:
// e.g:
// [1,2,3,4,5,4,5,6,7,8,9,10,11]
// => Buy in: 1, Sell off: 11 => Margin: 10

// [4,1,2,4,6,1,8,1,10]
// => Buy in: 1, Sell off: 10 => Margin 9

// const highestMargin = (prices) => {
//   prices.sort((a, b) => a - b);
//   return prices[prices.length - 1] - prices[0];
// };

const highestMargin = prices => Math.max(...prices) - Math.min(...prices);

console.log(highestMargin([1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 10, 11]));
