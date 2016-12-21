'use strict';

const fancyArray = function(arr, symbol = '->', reversed = false){
	let i = 0;
	let end = arr.length;

	if(reversed){
		i = arr.length -1;
		end = 0;
		for( ; i >= end; i--){
			console.log(i+' '+symbol+' '+ arr[i]);
		}
	}else{
		for( ; i < end; i++){
			console.log(i+' '+symbol+' '+ arr[i]);
		}
	}
}

const arr = [ "James", "Jill", "Jane", "Jack" ];

fancyArray(arr)
fancyArray(arr, '=3')
fancyArray(arr, undefined, true)
