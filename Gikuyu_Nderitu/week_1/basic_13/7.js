function odd_array() {
	var arr = [];
	for(var i = 1; i <=255; i++){
		if(i % 2 !== 0) arr.push(i);
	}
}

odd_array();
