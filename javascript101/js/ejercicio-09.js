/*
Un año de vida para las personas, representa 7 años en la vida de un perro. 
Escribí un programa que reciba como parámetro tu edad (no te olvides de usar
la función Number para convertirla de string a número) y mostrá por la terminal
cuantos años tendrías si fueras un perro (tu edad multiplicada por 7).
*/
/*
var parametros = process.argv;
var edad = parametros[2];
var edadPerruna = Number(edad)*7; 

console.log("La edad humana es: "+edad+" y la edad perruna es: "+edadPerruna);
*/

///////////////////////////////////////////////
/*
Escribí un programa que reciba el nombre de una persona (string) y 
la nota de su trabajo práctico (número). Mostrar por la terminal el 
mensaje adecuado dependiendo de las siguientes condiciones:

Si su nota es mayor a 7, mostrar:
# Completar los 3 puntos con los datos correspondientes
-'El/La alumno/a llamado/a ... se sacó un ...'
-'Felicitaciones por aprobar'
Si su nota es mayor a 4 pero menor a 7, mostrar:
# Completar los 3 puntos con los datos correspondientes
-'El/La alumno/a llamado/a ... se sacó un ...'
-'La próxima entrega espero un mejor trabajo'
Si su nota es menor a 4, mostrar:
# Completar los 3 puntos con los datos correspondientes
-'El/La alumno/a llamado/a ... se sacó un ...'
-'Nos vemos en Marzo'
*/

var parametros = process.argv;
var nombre = parametros[2];
var notaTP = Number(parametros[3]);

if (notaTP > 7){
	console.log("El/La alumno/a llamado/a "+nombre+" se sacó un "+notaTP);
	console.log("Felicitaciones por aprobar");

}else if(notaTP > 4 && notaTP < 7) {
	console.log("El/La alumno/a llamado/a "+nombre+" se sacó un "+notaTP);
	console.log("La próxima entrega espero un mejor trabajo");

}else if(notaTP < 4){
	console.log("El/La alumno/a llamado/a "+nombre+" se sacó un "+notaTP);
	console.log("Nos vemos en Marzo");
}
