"use strict";

const addPokemon = function () {
	let pre = '<img src="http://pokeapi.co/media/img/'
	let suf = '.png/"/>'

	console.log("hi");

	for(let i = 1; i <= 151; i++){
		$("#poke-container").append(()=>{
			let output = `<div class="pokemon">
				${pre}${i}${suf}
			</div>`

			return output
		})
	}

}

$(document).ready(function(){
	addPokemon()
})
