/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como 
resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado 
devuelto por la función.*/

const ingresar = function(numero){

    if ( numero === "" || isNaN(numero))  {
       alert("Ingresa un número válido")      
    } 
    else if (numero === null) {
        alert('Es necesario ingresar un número o nunca saldras de mi pagina XD')
    }
     else if (numero % 2 === 0) {
        document.write("El número es Par");
    } else {
        document.write("El número es impar")
    }
}

let numero = prompt("Ingresa un numero entero");

ingresar(numero); 