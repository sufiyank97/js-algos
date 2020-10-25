let array = [3, 4, 6, 2, 3, 645, 2, 3, 6, 82, 23, 13];

function binary_search(arr, value) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    //middle == value being searched
    if (arr[mid] == value) {
      //return value
      return arr[mid];
    } else if (value > arr[mid]) {
      //move the low up one
      low = mid + 1;
    } else {
      //move the high down one
      high = mid - 1;
    }
  }
  return -1;
}

let sortedArr = array.sort((a, b) => a - b);

let wasItFound = binary_search(sortedArr, 9);

console.log(wasItFound);
