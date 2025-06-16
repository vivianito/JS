let highest = -Infinity; 

for (let i = 1; i <= 10; i++) {
  let input = prompt(`Ingresa el número ${i}:`);
  let num = Number(input);

   if (!isNaN(num)) {
    if (num > highest) {
      highest = num;
    }
  } else {
    console.log("Por favor, ingresa un número válido.");
    i--; 
  }
}

console.log(`El número más alto es: ${highest}`);
