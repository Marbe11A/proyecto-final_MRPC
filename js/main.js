// main.js Tipos de variables

var texto = "hola como estas"; //texto 
var x = 20; //numericas
var flag= true; //boolean

// #panfilo

// Objeto maestro
var abc={
	starts=["hola crayola", "que pasop", "hey", "hello"];
	random  =  Math.floor(Math.random() * starts.length);
	flags:{"saludo": false, "name": false, "age":false, "nicknames":false};
	user={"name":"", "nicknames":"", "age":0}
}

//arreglos
var starts=["hola crayola", "que pasop", "hey", "hello"];
var chat=["woow", ["super", "que bien", "no"], "como crees"];
const random  =  Math.floor(Math.random() * starts.length);


//objetos

var user={ 
	"name":"",
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
		// reasignación
		//----
		// conversación
		console.log (starts[random]+", que pasop .." );
		console.log ("¿Como te llamas?");
		//indicador
		flags.saludo = true ;
	}

	} else  if (!flags.name ) {

		//reasignación
		usuario.name = res ;

			//conversación
		console.log (starts[ random ] + " " +user.name);
		console.log("Cual es tu edad")

		//indicador
		flags.name=true;
	
	{else }
	console.log("no me has dado tu nombre")

	}

{else if(!flags.age)}
		//reasignación
		user.age=res;

		//conversación
				console.log("Wow,"+user.name+" "+user.age+"anioos");
				console.log("Tienes algun apodo?")

				//indicador
				flags.name=true;

{else }
	console.log("No me has dado tu edad")

{else if(!flags.nicknames)}

	//reasignación
		user.age=res;

		if (user.nicknames)

		//conversación
		console.log("oh ya veo, " + user.nicknames)

		//indicador
		flags.nicknames=true;

{else }
	console.log("No me has dado tu apodo")


{else if (flags.nicknames || flags.name || flags.age ||  flags.saludo)}
		console.log ("==================")
		console.log ("Esta fue una buena charla, me io gusto conocerte, me tengo que ir, Adios")
		console.log ("==================")




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

