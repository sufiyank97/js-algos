function largestOfFour(arr) {
  // You can do this!
  let arrayWithLargestNums = [];

  arr.forEach(eachArr => {
    let defaultLargest = -Infinity;
    for (let i = 0; i < eachArr.length; i++) {
      if (eachArr[i] > defaultLargest) {
        defaultLargest = eachArr[i];
      }
    }
    console.log(defaultLargest);
    arrayWithLargestNums.push(defaultLargest);
  });

  return arrayWithLargestNums;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// function largestOfFour(arr) {
//   let maxArr = []
//   for (let i = 0; i < arr.length; i++) {
//     let largestNum = arr[i][0]
//     for (let s = 1; s < arr[i].length; s++) {
//       if (arr[i][s] > largestNum) {
//         largestNum = arr[i][s]
//       }
//     }
//     arr[i] = largestNum
//   }
//   return arr;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
