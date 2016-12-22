'use strict';

const shuffle = function (arr) {
	for (var i = 0; i < arr.length; i++) {
		let randomIndex = Math.trunc(Math.random()*arr.length);
		let temp = arr[i];
		arr[i] = arr[randomIndex];
		arr[randomIndex] = temp;
	}
}

let test = [1,3,6,1,2,90,182,34,12,40,-1239];

console.log(test);

shuffle(test);

console.log(test);
