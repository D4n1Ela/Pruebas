/*
var nota1 = 7;
var nota2 = 7;


if (nota1 > nota2) {
	console.log("La nota mas alta es: " +nota1);
}else if(nota2 > nota1){
	console.log("La nota mas alta es: " +nota2);
}else if (nota1 === nota2) {
	console.log("Ambos hijos tuvieron la misma nota");
}
*/

/////////////////////////////
/*
Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor 
 100 pesos. Escribir un programa que dado el monto de una compra como valor 
 umérico, diga cuanto debe abonar el cliente aplicando el descuento si es 
 necesario.

Tip: Para obtener el porcentaje de un número podés usar la siguiente fórmula:
número * descuento / 100 (La famosa regla de 3 simple :open_mouth:).
Si el monto de compra es de 500 pesos, ¿cuánto debe pagar el cliente?
*/
var valCompra = 200;

if (valCompra > 100) {
	descuento = (valCompra * 15 ) / 100;
	montoTotal = valCompra - descuento;
}else{
	montoTotal = valCompra;
}

console.log("El valor final de la compra es: " +montoTotal);
