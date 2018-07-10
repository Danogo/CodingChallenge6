// Question 2: 
// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

const arrOfNums = [1, 4, 6, 43, 8, 5, 7, 3, 11, 9, 6, 13];
let target = 12;

// ==== Answer ====
const findSum = (arr, target) => {
  let result;
  // check if any element of array passes the test
  arr.some((element, index, arr) => {
    // for every element iterate from that element to the end of array
    for (let i = index + 1; i < arr.length; i++) {
      // and check if it is added to any other element gives you target element
      if (target === element + arr[i] && element !== arr[i]) {
        // if it is - make it a result
        result = [element, arr[i]];
        // and return true to escape further iterations
        return true;
      }
    }
  });
  return result;
};