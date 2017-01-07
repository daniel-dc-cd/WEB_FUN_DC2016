"use strict";

const addPokemon = function () {
	let pre = '<img src="http://pokeapi.co/media/img/'
	let suf = '.png/"/>'

	for(let i = 1; i <= 151; i++){

		$("#poke-container").append(function(){
			let output = 	`<div class="pokemon" data-number="${i}">
								${pre}${i}${suf}
							</div>`
			return output
		})
	}

}

const create_list = function(arr){
	let _list = "";
	for(let i = 0; i< arr.length; i++){
		_list+="<li>"+arr[i].name+"</li>"
	}
	return _list;
}

// TODO: Create callback that gets pokedata for then function
// TODO: Create private function within callback that can be used to interpolate "li" elements for the type

$(document).ready(function(){
	addPokemon();

	$('.pokemon').on('click',function () {
		const pre_url = 'http://pokeapi.co/api/v1/pokemon/';
		let pokeNumber = $(this).data("number")+'/';
		let image = $(this).children('img').attr('src');
		let height = ''
		let weight = ''

		console.log(pokeNumber);


		const pokeData = $.ajax({
			url: pre_url+pokeNumber,
			type: 'GET'
		})

		pokeData.then((data)=>{
			console.log(data);
			height = data.height
			weight = data.weight

			$('#pokedex').html(()=>{
				return `<div>
							<h2>${data.name}</h2>
							<img src="${image}"/>
							<h4>Types</h4>
							<ul>${create_list(data.types)}</ul>
							<h4>Height</h4>
							<p>${height}</p>
							<h4>Weight</h4>
							<p>${weight}</p>
						</div>`
			});
		});

	});
})
