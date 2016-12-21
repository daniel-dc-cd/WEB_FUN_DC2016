function maxminave(arr){
	var min = Infinity;
	var max = -Infinity;
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
		if(arr[i] < min){
			min = arr[i];
		}
		sum += arr[i];
	}
	console.log(min, max, sum / arr.length);
}
maxminave([-9000,5000,4000,12,3,80,-25])
