const username = prompt("¿Cuál es tu nombre de usuario?");
const age = prompt("¿Cuántos años tienes?");
const moviesInput = prompt("Escribe tus películas favoritas separadas por comas");

const favoriteMovies = moviesInput.split(",").map(movie => movie.trim());

// Mostramos los datos en consola
console.log(`Usuario: ${username}`);
console.log(`Edad: ${age}`);
console.log("Películas favoritas:");

for (const film of favoriteMovies) {
  console.log(`- La película ${film} es una de mis favoritas.`);
}
