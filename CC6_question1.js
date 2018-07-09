// Question 1: 
// Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const myArr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const myMixArr = [1,2,'3',4,591,'65',392,'1',391,2,5,10,2,1,'2',1,1,'321',20,'2',20];

// ==== Answer ====
const cleanArray = arr => {
  // throw error if argument isn't an array, or if it's an empty array
  if (!Array.isArray(arr)) {
    throw 'Please provide array to sort';
  } else if (arr.length === 0) {
    throw 'Cannot clean empty array!';
  }

  const nums = [];
  const strings = [];

  // function to seperate elements of different type into own arrays
  const divideTypes = arr => {
    arr.forEach(element => {
      if (typeof element === 'number') {
        nums.push(element);
      } else if (typeof element === 'string') {
        strings.push(element);
      }
    });
  };

  // function sorting numbers in ascending order
  const sortNumbers = arr => {
    // sort and return sorted array
    arr.sort((a, b) => {
      return a - b;
    });
  };

  // function sorting numbers as strings like '5' in ascending order
  const sortStringNums = arr => {
    arr.sort((a, b) => {
      return a.localeCompare(b, undefined, {numeric: true});
    });
  };

  // function grouping identical elements into sub-arrays
  const groupIntoSubArr = sortedArr => {
    const groupedArray = [];
    // add initial prev element from reduce as first element
    let subArr = [sortedArr[0]];
    // comparing current element(curr) with previous element(prev)
    sortedArr.reduce((prev, curr) => {
      // if current and previous elements are equal 
      if (curr === prev) {
        // add current element to sub array
        subArr.push(curr);
        // and make this curr a new prev for next iteration 
        return curr;
        // if current element is different than previous
      } else {
        // add subb Array containing previous elements to groupedArray 
        // subArray consists of 1 element ? add that one element : otherwise add nested array of many elements
        subArr.length === 1 ? groupedArray.push(subArr[0]) : groupedArray.push(subArr);
        //clear subArray
        subArr = [];
        // add new element to subbArray
        subArr.push(curr);
        // and make this curr a new prev for next iteration 
        return curr;
      }
    });
    // adding last sorted element to groupedArray
    subArr.length === 1 ? groupedArray.push(subArr[0]) : groupedArray.push(subArr);
    return groupedArray;
  };

  // seperate elements of different type
  divideTypes(arr);
  // sort and group elements
  if (nums.length > 0 && strings.length > 0) {
    sortNumbers(nums);
    sortStringNums(strings);
    let groupedNums = groupIntoSubArr(nums);
    let groupedStringNums = groupIntoSubArr(strings);
    let groupedArr = [...groupedNums, ...groupedStringNums];
    return groupedArr;
  } else if (nums.length > 0) {
    sortNumbers(nums);
    let groupedNums = groupIntoSubArr(nums);
    return groupedNums;
  } else if (strings.length > 0) {
    sortStringNums(strings);
    let groupedStringNums = groupIntoSubArr(strings);
    return groupedStringNums;
  }
};

// ==== Testing ====
cleanArray(myArr);
cleanArray(myMixArr);