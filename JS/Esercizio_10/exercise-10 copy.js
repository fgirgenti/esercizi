function sumUntil(maxValue) {
  let temp = 0;
  for (i = 0; i < maxValue; i++) {
    temp += i + 1;
  }
  return temp;
}

console.log(sumUntil(5));