'use strict';

const copy_nums = function(arr){
	let narr = [];
	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] === 'number'){
			narr.push(arr[i]);
		}
	}
	return narr;
}

const remove_non_nums = function(arr){
	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] !== 'number'){
			arr.splice(i,1)
		}
	}
}

// TODO: Implement delete myself

let test_arr = [1, "apple", -3, "orange", 0.5];

console.log(copy_nums(test_arr));
remove_non_nums(test_arr)
