function missingArrEl(arr) {
  let missing;

  let sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length + 1; i++) {
    if (sortedArr.indexOf(i) === -1) {
      missing = i;
    }
  }

  return missing;
}

missingArrEl([3, 2, 1, 5]);
