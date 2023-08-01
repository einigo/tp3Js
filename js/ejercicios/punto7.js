/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de 
la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

const multiplicar = function(numero){
 for (let i = 1; i < 11; i++){
   console.log(numero * i);
 }
}
let numero = prompt('ingresa un número');
if ( numero === "" || isNaN(numero))  {
    alert("Ingresa un número válido")      
 } 
 else if (numero === null) {
     alert('Es necesario ingresar un número o nunca saldras de mi pagina XD')
 }
multiplicar(numero);

