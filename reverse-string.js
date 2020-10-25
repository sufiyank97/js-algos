let reverseString = anyString => {
  let reversedString = anyString
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return reversedString;
};

//Executing the Function
reverseString("sujit");
