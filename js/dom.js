'use strict';

var pierwszyP = document.getElementById('pierwszy');
console.log(pierwszyP);

var drugiP = document.getElementById('drugi');
console.log(drugiP);

var input = document.getElementById('trzeci');
console.log(input);

function ustawTlo() {
	console.log("dziala");
	pierwszyP.style.backgroundColor = "red";
	drugiP.style.backgroundColor = " yellow";
}

input.ondblclick = ustawTlo;
	
