function factorial(n) {
  if (n === 1) {
    return 1; 
  }
  return n * factorial(n - 1); 
}

const input = prompt("Ingresa un número entero (1 o mayor):");
const num = parseInt(input);

if (num >= 1 && Number.isInteger(num)) {
  const result = factorial(num);
  console.log(`El factorial de ${num} es: ${result}`);
} else {
  console.log("Por favor, ingresa un número entero válido mayor o igual a 1.");
}
