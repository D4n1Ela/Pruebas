/*
var cantidadPersonasEnElComedor = 35;
var capacidadComedor = 20;

var estaLlenoElComedor = cantidadPersonasEnElComedor >= capacidadComedor;

if (estaLlenoElComedor) {
	console.log("El comedor esta lleno. Porfa no invites más gente.");
}else if (cantidadPersonasEnElComedor == capacidadComedor-1) {
	console.log("El comedor esta CASI lleno.");
}else{
	console.log("Venite al comedor que hay cupcakes gratis!");
}
*/
///////////////////////////////////////////////////////////////////////
/*
Declarar una variable que se llame ganeLaCarrera y asignarle el
valor false. Mostrar por la terminal un mensaje que diga 'Ganaste'
si ganeLaCarrera es verdadero y 'Perdiste' si su valor es falso.
*/
/*
var ganeLaCarrera = false;
if (ganeLaCarrera) {
	console.log("Ganaste");
}else{
	console.log("Perdiste");
}
*/

///////////////////////////////////////////////////////////////////////
/*
Declarar una variable que se llame posicionEnLaCarrera y asignarle el 
número 6. Mostrar por la terminal uno de los siguientes mensajes según 
la posición que salió el corredor:

-'FELICITACIONES, SALISTE 1RO' si la posicionEnLaCarrera es 1.
-'Te falto poquito para ganar' si la posicionEnLaCarrera es 2.
-'Sos un orgullo para tu familia' si la posicionEnLaCarrera es 3.
-'Volvé a tu casa' si la posicionEnLaCarrera es mayor a 3.
-'No tires fruta' si la posicionEnLaCarrera es otro valor no contemplado antes.
*/
/*
var posicionEnLaCarrera = 6;

if (posicionEnLaCarrera === 1) {
	console.log("FELICITACIONES, SALISTE 1RO");     
}else if (posicionEnLaCarrera === 2) {
	console.log("Te falto poquito para ganar");     
}else if (posicionEnLaCarrera === 3) {
	console.log("Sos un orgullo para tu familia");     
}else if (posicionEnLaCarrera === 4) {
	console.log("Volvé a tu casa");     
}else{
	console.log("No tires fruta"); 
}
*/

//////////////////////////////////////////////////////////////////7
/*
Repetir el ejercicio anterior pero usando un solo console.log en 
todo el programa.
*/
var posicionEnLaCarrera = 6;
var msj;

if (posicionEnLaCarrera === 1) {
	msj = "FELICITACIONES, SALISTE 1RO";     
}else if (posicionEnLaCarrera === 2) {
	msj = "Te falto poquito para ganar";     
}else if (posicionEnLaCarrera === 3) {
	msj = "Sos un orgullo para tu familia";     
}else if (posicionEnLaCarrera === 4) {
	msj = "Volvé a tu casa";     
}else{
	msj = "No tires fruta"; 
}
console.log(msj);