/*1- Dado el siguiente array de meses del año:

var meses = [
    'Enero', // índice `0`
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'  // índice 11, equivalente a `meses.length - 1`
];
Escribir un programa que:

Declare y asigne una variable que tenga como valor el número del mes de 
tu cumpleaños. Muestre por terminal el nombre del mes de tu cumpleaños.
*/
/*
var meses = [
    'Enero', // índice `0`
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'  // índice 11, equivalente a `meses.length - 1`
];
var myMonth = 2;

console.log("Cumplo años en " +meses[myMonth-1]);
*/
///////////////////////////////////////////////////////////////
/*
Dado los siguientes arrays:

var meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

var planetas = [
    'Mercurio',
    'Venus',
    'Tierra',
    'Marte',
    'Saturno',
    'Jupiter',
    'Urano',
    'Neptuno',
    'Plutón'
];
Mostrar por la terminal la cantidad de elementos que tiene cada uno.
Mostrar por la terminal el último elemento de cada array (usando 
la propiedad length que tienen los arrays).
Mostrar el cuarto planeta por pantalla (Marte).
*/
/*
var meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

var planetas = [
    'Mercurio',
    'Venus',
    'Tierra',
    'Marte',
    'Saturno',
    'Jupiter',
    'Urano',
    'Neptuno',
    'Plutón'
];

console.log("El array meses tiene "+meses.length+" elementos");
console.log("El array planetas tiene "+planetas.length+" elementos");
console.log("El último elemento del array meses es "+meses[meses.length-1]);
console.log("El último elemento del array planetas es "+planetas[planetas.length-1]);
console.log("El cuarto planeta es " +planetas[3]);
*/
////////////////////////////////////////////////
/*
Dado el siguiente array de nombres:

var nombres = ['Sofía', 'Abril'];
var apellidos = ['Rodriguez', 'López'];
Mostrar por la terminal el primer elemento de cada array.
Crear un nuevo array llamado nombreCompleto que contenga el 
segundo elemento del array nombres y el primer elemento del 
array apellidos. Mostrar el nuevo array por la terminal.
*/
/*
var nombres = ['Sofía', 'Abril'];
var apellidos = ['Rodriguez', 'López'];
var nombreCompleto = [];

console.log("El primer elemento del array nombres es: "+nombres[0]);
console.log("El primer elemento del array apellidos es: "+apellidos[0]);

var nombreCompleto = [nombres[1], apellidos[0]];
console.log("El array nombreCompleto es: "+nombreCompleto);
*/
///////////////////////////////////////////////////////////////////////

/*
Dado el siguiente array de participantes de una carrera y considerando que
están ordenados en base al orden de llegada (el primer elemento es el 
primero en haber llegado):

var corredores = [
    'Margarita', // ganó la carrera
    'Juan',
    'Raquel',
    'Ezequiel',
    'Gonzalo',
    'Martina',
    'Julian' // último 🙁
];
Mostrar por la terminal los 3 primeros en llegar a la meta usando índices 
numéricos.
Crear un nuevo array llamado losUltimos que contenga los 2 últimos corredores
 en llegar (usando la propiedad length que tienen los arrays). Mostrar este 
 nuevo array por la terminal.
 */

 var corredores = [
    'Margarita', // ganó la carrera
    'Juan',
    'Raquel',
    'Ezequiel',
    'Gonzalo',
    'Martina',
    'Julian' // último 🙁
];

var losUltimos = [corredores[corredores.length-1], corredores[corredores.length-2]];

console.log("Los tres primeros en llegar son:"+corredores[0]+", "+corredores[1]+", "+corredores[2]);
console.log("El arrar losUltimos es: " +losUltimos);