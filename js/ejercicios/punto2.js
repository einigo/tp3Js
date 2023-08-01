/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo. ✅
Mostrar en el documento web los ítems de las posiciones primera, tercera y última. ✅
Añade en última posición la ciudad de París. ✅
Escribe por pantalla el elemento que ocupa la segunda posición.✅
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. ✅

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’,
 ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/
let ciudades = [];
while (true) {
  let ciudad = prompt("ingresa ciudades");
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}
console.log("La longitud del arreglo es ", ciudades.length); // longitud del arreglo
document.write(ciudades[0], " está en la posición 1. ");
document.write(ciudades[2], " está en la posición 3. ");
document.write(ciudades[ciudades.length -1], ' está en la última posición. ')
ciudades.push("Paris");
document.write(
  ciudades[ciudades.length - 1],
  " está en la última posición.<br></br>"
);
ciudades[1] = "Barcelona";
document.write(ciudades[1], " Está en la posición 2. ");
document.write('<h1>Arreglo de ciudades</h1>');
document.write('<ul>');
ciudades.forEach((ciudad) => {
document.write(`<li>${ciudad}</li>`);
  });
  document.write('</ul>');
