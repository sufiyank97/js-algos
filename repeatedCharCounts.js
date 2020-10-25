function repeatedCharCounts(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);

    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
}
