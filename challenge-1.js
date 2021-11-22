// Challenge 1
// Write a javascript function that takes in a list of products, prices, saleProducts, salePrices, you must return total of all discounts that have been given:
// E.g:
// products: ['mango', 'kiwi', 'banana']
// prices: [3, 2, 1]
// saleProducts: ['mango', 'mango', 'kiwi', 'kiwi', 'banana']
// salePrices: [3, 2.5, 2, 1.7, .2]

// => .5 + .3 + .8 => 1.6 dollars discount
// Your function must take in all 4 array arguments, you cannot pass objects that are not arrays into your function.

let products = ["mango", "kiwi", "banana"];
let prices = [3, 2, 1];
let saleProducts = ["mango", "mango", "kiwi", "kiwi", "banana"];
let salePrices = [3, 2.5, 2, 1.7, 0.2];

const allDiscounts = (products, prices, saleProducts, salePrices) => {
  let priceDiff = [];
  saleProducts.map((soldFruit, i) => {
    priceDiff.push(prices[products.indexOf(soldFruit)] - salePrices[i]);
  });
  return priceDiff.reduce((a, b) => a + b);
};

console.log(allDiscounts(products, prices, saleProducts, salePrices));
