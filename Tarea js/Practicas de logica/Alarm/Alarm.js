const secondsInput = prompt("¿Cuántos segundos quieres esperar para la alarma?");
const message = prompt("Escribe el mensaje que quieres mostrar cuando suene la alarma.");

const seconds = Number(secondsInput);

if (!isNaN(seconds) && seconds > 0) {
  console.log(`Alarma programada para sonar en ${seconds} segundos...`);

  setTimeout(() => {
    console.log(`ALERTA: ${message}`);
  }, seconds * 1000);

} else {
  console.log("Por favor, ingresa un número válido de segundos.");
}
