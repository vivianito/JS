function sumResitance(resistors) {
  const total = resistors.reduce((accumulator, current) => accumulator + Math.abs(current), 0);
  return total + " ohms";
}
console.log(sumResitance([-1, 5, 16, 3]));      // "15 ohms"
console.log(sumResitance([14, 3.5, 6]));        // "23.5 ohms"
console.log(sumResitance([8, 15, 100]));        // "123 ohms"