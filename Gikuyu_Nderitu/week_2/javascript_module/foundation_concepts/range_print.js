'use strict';

const rangePrint = function(start, end, skip = 1){
	if(!end){
		end = start;
		start = 0;
	}

	for( ;start < end;start+=skip){
		console.log(start);
	}
}

rangePrint(2, 10, 2);
rangePrint(4, 8);
rangePrint(4);
