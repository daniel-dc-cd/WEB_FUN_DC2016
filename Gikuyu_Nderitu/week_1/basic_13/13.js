function shift_values(arr){
	var arrnew = [];
	for(i = 1; i < arr.length; i++){
		arrnew[i-1] = arr[i];
	}
	arrnew.push(0);
	return arrnew;
}

console.log(shift_values([1,2,3,4,5,6,7,8,9,10]));
