function findLongestWordLength(str) {
  let maxLength = 1
  str = str.split(' ')
  str.forEach(function (eachStr) {
    let lengthofStr = eachStr.length
    if (lengthofStr > maxLength) {
      maxLength = lengthofStr
    }
    return maxLength
  })
  str.length = maxLength;
  return str.length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");