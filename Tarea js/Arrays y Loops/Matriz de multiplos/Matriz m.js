function arrayMultiplos(number, length) {
  let result = [];
  for (let i = 1; i <= length; i++) {
    result.push(number * i);
  }
  return result;
}
console.log(arrayMultiplos(5, 10)); 
console.log(arrayMultiplos(10, 6)); 
