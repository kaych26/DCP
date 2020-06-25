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
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      numZero += 1;
      isZero = true;
    } else product *= arr[i];
  }

  for (let j = 0; j < arr.length; j++) {
    if (numZero >= 2) {
      result.push(0);
    } else if (numZero === 1) {
      if (arr[j] === 0) {
        result.push(product);
      } else {
        result.push(0);
      }
    } else {
      result.push(product / arr[j]);
    }
  }

  return result;
};

// console.log(arrayProduct([1, 2, 3, 4, 5]));
console.log(arrayProduct([0, 2, 3, 4, 5]));
