function beautifulDay(i, j, k) {
  let count = 0;
  for (let x = i; x <= j; x++) {
    let elem = Number(String(x).split("").reverse().join(""));
    let num = Math.abs(x - elem) / k;
    console.log(num)

    if (Math.ceil(num) === num) {
      count++;
    }
  }
  return count;
}

console.log(beautifulDay(13, 45, 3));
