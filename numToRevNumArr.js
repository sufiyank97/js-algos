
// Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,4,3,2]
// Input:- 12345 Integer
// Ouput:- [5,4,3,2,1] 

const digitedList = (num) => {
  let numToStr = num.toString();
  let newArr = []

  let splittedStr = numToStr.split('');

  for (let i = splittedStr.length - 1; i >= 0; i--) {
    newArr.push(parseInt(splittedStr[i]));
  }
  return newArr;
}


digitedList(12345)