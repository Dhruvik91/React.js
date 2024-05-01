function hello(arr) {
  const map = new Map();
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  });

  let count = 0;
  Array.from(map.keys()).forEach((key) => {
    if (map.get(key) % 2 === 0) {
      count += map.get(key) / 2;
    } else {
      count += (map.get(key) - 1) / 2;
    }
  });
  return count;
}

const arr = [1, 2, 1, 3, 2, 1, ];
console.log(hello(arr));
