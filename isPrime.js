let isPrimeNumber = num => {
  let factorsCount = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factorsCount++;
    }
  }

  if (factorsCount === 2) {
    return true;
  } else {
    return false;
  }
};
