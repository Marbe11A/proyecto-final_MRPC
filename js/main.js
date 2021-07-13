// main.js Tipos de variables

var texto = "hola como estas"; //texto 
var x = 20; //numericas
var flag= true; //boolean

// #panfilo

//arreglos
var starts=["hola crayola", "que pasop", "hey", "hello"]
var chat=["woow", ["super", "que bien", "no"], "como crees"];

//objetos

var user={ 
	"name";"",
	"nicknames":"",
	"age":0,
	"second_name":""
}

//variables globales
var  flag_saludo = false ;
var  flag_name = false ;
const  random  =  Math.floor(Math.random() * starts.length);

var flags={
	"saludo": false,
	"name": false,
	"age":false,
	"nicknames":false
}

function panfilo(res){

	// El saludo
	if ( !flags.saludo ) {

		console.log (starts[random]+", que pasop .." );
		flags.saludo = true ;

	} else  if (flags.name ) {

		usuario.name = res ;
		console.log (starts[ random ] + " " +user.name) ;

	} else  if ( !user.name || flags.name == false ) {  

		console.log ( "hola, crayola" ) ;
		flags.name = true ;

	}
	

	//cuando corra la función saludar responda un saludo random

//alert ("Hola, si funciona el alert");

//console.log(texto);

	// if (! nombre de usuario) {
	// console.log ("Hola, ¿como te llamas?");
	//}

	// console.log (comienza [1] + "" + nombre.usuario);
	// cuando corra la función saludar responda un saludo random


// Primero saluda ✅
// Segundo me pregunta mi nombre
// Tercero me pregunta mi edad
// Si tengo auto o no?
// Tienes apodos
// Despedida. 


