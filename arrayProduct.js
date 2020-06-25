/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const arrayProduct = (arr) => {
  let product = 1;
  let numZero = 0;
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      numZero += 1;
      isZero = true;
    } else product *= arr[i];
  }

  for (let j = 0; j < arr.length; j++) {
    if (numZero >= 2) {
      results.push(0);
    } else if (numZero === 1) {
      if (arr[j] === 0) {
        results.push(product);
      } else {
        results.push(0);
      }
    } else {
      results.push(product / arr[j]);
    }
  }
  return results;
};

/* ------------------------
  Without using division
 --------------------------*/
const arrayProduct2 = (arr) => {
  let before = 1;
  let after = 1;
  let beforeProducts = [];
  let results = [];

  // loop to get product before index
  for (let i = 0; i < arr.length; i++) {
      beforeProducts[i] = before;
      before *= arr[i];
  }

  // loop to get product after index and multiple with before index
  for (let j = arr.length - 1; j >= 0; j--) {
    results[j] = after * beforeProducts[j];
    after *= arr[j];
  }
  return (results)
}

// console.log(arrayProduct([1, 2, 3, 4, 5]));
// console.log(arrayProduct([0, 2, 3, 4, 5]));
// console.log(arrayProduct([2,4,10]));
// console.log(arrayProduct2([1, 2, 3, 4, 5]));
console.log(arrayProduct2([2,4,10]));
