function removeRage(arr, start, end){
	for(var i = start; i < arr.length; i++){
		//Store Next value
		if(i <=	 end){
			temp = arr[end-i];
			console.log(temp);
			end--;
			arr.pop();
		}
	}

	console.log(arr);
}


removeRage([20,30,40,50,60,70,80,90,100,110], 2, 4)
