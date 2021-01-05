// You are given an array of two numbers [a,b]. Find the sum of those two numbers plus the sum of all the numbers between them.

// (Note: The lower number may not always be the first element in the array)

// Test Case

function sum(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let temp = 0;
  for (let i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

console.log(sum([1, 4]));
