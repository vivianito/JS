function positiveDom(arr) {
  let positiveCount = 0;

  for (let num of arr) {
    if (num > 0) {
      positiveCount++;
    }
  }

  return positiveCount > arr.length / 2;
}
console.log(positiveDom([-1, -3, -5, 4,])); // false
console.log(positiveDom([1, 2, 3, -1]));         // true
