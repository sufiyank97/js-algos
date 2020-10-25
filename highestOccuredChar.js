let highestOccuredChar = str => {
  let maxOccuredChar = "";
  let maxOccurences = 0;
  let splittedStr = str.split("");
  splittedStr.forEach(char => {
    //?
    if (char.length > maxOccurences) {
      maxOccurences = char.length;
      maxOccuredChar = char;
    }
  });
  return maxOccuredChar;
};

highestOccuredChar("ssujit");
