function compare(a, b) {
  let z = a
    .split("")
    .sort()
    .join("");
  let y = b
    .split("")
    .sort()
    .join("");
  console.log(z === y ? "Anagrams" : "Not Anagrams");
}

compare("moom", "moom");
